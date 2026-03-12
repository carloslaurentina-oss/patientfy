const PAYLOAD_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3000";
const TENANT_ID = process.env.TENANT_ID || "";

type PayloadQuery = {
  collection: string;
  where?: Record<string, unknown>;
  sort?: string;
  limit?: number;
  depth?: number;
  page?: number;
};

type PayloadResponse<T> = {
  docs: T[];
  totalDocs: number;
  totalPages: number;
  page: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

export async function payloadFetch<T>(
  query: PayloadQuery,
): Promise<PayloadResponse<T>> {
  const { collection, where = {}, sort, limit = 100, depth = 1, page = 1 } = query;

  const params = new URLSearchParams();
  params.set("depth", String(depth));
  params.set("limit", String(limit));
  params.set("page", String(page));

  if (sort) params.set("sort", sort);

  // Auto-add tenant filter if TENANT_ID is set
  if (TENANT_ID) {
    params.set("where[tenant][equals]", TENANT_ID);
  }

  // Serialize where conditions
  for (const [key, value] of Object.entries(where)) {
    if (typeof value === "object" && value !== null) {
      for (const [op, val] of Object.entries(value as Record<string, unknown>)) {
        params.set(`where[${key}][${op}]`, String(val));
      }
    } else {
      params.set(`where[${key}][equals]`, String(value));
    }
  }

  const url = `${PAYLOAD_URL}/api/${collection}?${params.toString()}`;
  const empty: PayloadResponse<T> = { docs: [], totalDocs: 0, totalPages: 0, page: 1, hasNextPage: false, hasPrevPage: false };

  try {
    const res = await fetch(url, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error(`Payload API error: ${res.status} ${res.statusText} — ${url}`);
      return empty;
    }

    return res.json();
  } catch (error) {
    console.error(`Payload API unreachable: ${url}`, error);
    return empty;
  }
}

export async function payloadFetchOne<T>(
  collection: string,
  where: Record<string, unknown>,
  depth = 2,
): Promise<T | null> {
  const result = await payloadFetch<T>({
    collection,
    where,
    limit: 1,
    depth,
  });

  return result.docs[0] ?? null;
}

export async function payloadFetchBySlug<T>(
  collection: string,
  slug: string,
  depth = 2,
): Promise<T | null> {
  return payloadFetchOne<T>(collection, { slug: { equals: slug } }, depth);
}

export async function payloadFetchAll<T>(
  collection: string,
  options: { sort?: string; limit?: number; depth?: number } = {},
): Promise<T[]> {
  const result = await payloadFetch<T>({
    collection,
    sort: options.sort,
    limit: options.limit || 100,
    depth: options.depth ?? 1,
  });

  return result.docs;
}

/**
 * Get the full URL for a Payload media upload.
 * Handles both absolute URLs and relative paths.
 */
export function getMediaUrl(media: { url?: string } | string | null | undefined): string | null {
  if (!media) return null;

  if (typeof media === "string") {
    return media.startsWith("http") ? media : `${PAYLOAD_URL}${media}`;
  }

  if (media.url) {
    return media.url.startsWith("http") ? media.url : `${PAYLOAD_URL}${media.url}`;
  }

  return null;
}
