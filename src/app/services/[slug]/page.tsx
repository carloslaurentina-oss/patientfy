import Eyebrow from "@/components/ui/Eyebrow";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SERVICE_BY_SLUG_QUERY } from "@/sanity/lib/queries";

export const dynamic = "force-dynamic";

type Treatment = {
  _id: string;
  title: string;
  description: string;
  slug: string;
  image: string | null;
};

type Service = {
  _id: string;
  title: string;
  description: string;
  slug: string;
  image: string | null;
  treatments: Treatment[] | null;
  seo: { title: string; description: string } | null;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await sanityFetch<Service | null>({
    query: SERVICE_BY_SLUG_QUERY,
    params: { slug },
    tags: ["service"],
  });
  return { title: service?.seo?.title || `${service?.title || "Service"} | Patientfy` };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await sanityFetch<Service | null>({
    query: SERVICE_BY_SLUG_QUERY,
    params: { slug },
    tags: ["service"],
  });

  if (!service) notFound();

  const treatments = service.treatments || [];

  return (
    <>
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-neutral-50 text-neutral-1000">
        <div className="container-large padding-global">
          <div className="max-w-2xl flex flex-col gap-4">
            <Eyebrow variant="dark">Service</Eyebrow>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-1000">
              {service.title}
            </h1>
            <p className="text-base text-neutral-500">{service.description}</p>
            <div className="flex gap-3 pt-2">
              <Link href="/contact-us" className="button">
                Book Now
              </Link>
              <Link href="/insurance" className="button-secondary-dark">
                Insurance
              </Link>
            </div>
          </div>
        </div>
      </section>

      {treatments.length > 0 && (
        <section className="padding-section-medium bg-white">
          <div className="container-large padding-global">
            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {treatments.map((treatment) => (
                  <div
                    key={treatment._id}
                    className="border border-neutral-200 bg-white rounded-xl flex flex-col overflow-hidden"
                  >
                    <div className="aspect-[4/3] bg-neutral-100 flex items-center justify-center placeholder-cross">
                      <span className="text-neutral-400 text-xs uppercase tracking-widest">
                        Image
                      </span>
                    </div>
                    <div className="p-5 flex flex-col gap-3 flex-1">
                      <h3 className="text-base font-semibold text-neutral-1000">
                        {treatment.title}
                      </h3>
                    </div>
                    <div className="p-5 pt-0 flex gap-3">
                      <Link
                        href={`/treatments/${treatment.slug}`}
                        className="button text-sm"
                      >
                        See Treatment
                      </Link>
                      <Link
                        href="/contact-us"
                        className="button-secondary-dark text-sm"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
