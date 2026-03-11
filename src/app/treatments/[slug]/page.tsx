import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/fetch";
import { TREATMENT_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import TreatmentDetail from "./TreatmentDetail";

export const dynamic = "force-dynamic";

type Treatment = {
  _id: string;
  title: string;
  description: string;
  slug: string;
  image: string | null;
  aboutImage: string | null;
  accordionItems: { _key: string; title: string; content: string }[] | null;
  faqs: { _key: string; question: string; answer: string }[] | null;
  service: { _id: string; title: string; slug: string } | null;
  seo: { title: string; description: string } | null;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const treatment = await sanityFetch<Treatment | null>({
    query: TREATMENT_BY_SLUG_QUERY,
    params: { slug },
    tags: ["treatment"],
  });
  return {
    title: treatment?.seo?.title || `${treatment?.title || "Treatment"} | Patientfy`,
  };
}

export default async function TreatmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const treatment = await sanityFetch<Treatment | null>({
    query: TREATMENT_BY_SLUG_QUERY,
    params: { slug },
    tags: ["treatment"],
  });

  if (!treatment) notFound();

  return <TreatmentDetail treatment={treatment} />;
}
