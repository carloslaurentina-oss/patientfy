import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/fetch";
import { ALL_TREATMENTS_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = { title: "Treatments | Patientfy" };

type Treatment = {
  _id: string;
  title: string;
  description: string;
  slug: string;
  image: string | null;
};

export default async function TreatmentsPage() {
  const treatments = await sanityFetch<Treatment[]>({
    query: ALL_TREATMENTS_QUERY,
    tags: ["treatment"],
  });

  return (
    <>
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-neutral-50 text-neutral-1000">
        <div className="container-large padding-global">
          <div className="max-w-2xl flex flex-col gap-4">
            <Eyebrow variant="dark">What we provide</Eyebrow>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-1000">Treatments</h1>
            <p className="text-base text-neutral-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus viverra.
            </p>
          </div>
        </div>
      </section>

      <section className="padding-section-medium bg-white">
        <div className="container-large padding-global">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((t) => (
              <div key={t._id} className="border border-neutral-200 rounded-xl flex flex-col overflow-hidden">
                <div className="aspect-[4/3] bg-neutral-100 flex items-center justify-center placeholder-cross">
                  <span className="text-neutral-400 text-xs uppercase tracking-widest">Image</span>
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <h3 className="text-lg font-semibold text-neutral-1000">{t.title}</h3>
                  <p className="text-sm text-neutral-600 flex-1">{t.description}</p>
                  <div className="flex gap-3 pt-2">
                    <Link href={`/treatments/${t.slug}`} className="button text-sm">See Treatment</Link>
                    <Link href="/contact-us" className="button-secondary-dark text-sm">Book Now</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
