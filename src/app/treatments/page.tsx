import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";

export const metadata: Metadata = { title: "Treatments | Patientfy" };

const treatments = [
  { title: "Teeth Whitening", description: "Professional whitening for a brighter smile.", slug: "teeth-whitening" },
  { title: "Dental Implants", description: "Permanent solution for missing teeth.", slug: "dental-implants" },
  { title: "Veneers", description: "Porcelain veneers for a perfect smile.", slug: "veneers" },
  { title: "Clear Aligners", description: "Invisible braces for a straighter smile.", slug: "clear-aligners" },
  { title: "Dental Crowns", description: "Protect and restore damaged teeth.", slug: "dental-crowns" },
  { title: "Root Canal", description: "Pain-free root canal treatment.", slug: "root-canal" },
];

export default function TreatmentsPage() {
  return (
    <>
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-neutral-1000 text-white">
        <div className="container-large padding-global">
          <div className="max-w-2xl flex flex-col gap-4">
            <Eyebrow variant="light">What we provide</Eyebrow>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white">Treatments</h1>
          </div>
        </div>
      </section>

      <section className="padding-section-medium bg-white">
        <div className="container-large padding-global">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((t, i) => (
              <div key={i} className="border border-neutral-200 flex flex-col">
                <div className="aspect-[4/3] bg-neutral-100 flex items-center justify-center">
                  <span className="text-neutral-400 text-sm">Image</span>
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <h3 className="text-lg font-semibold text-neutral-1000">{t.title}</h3>
                  <p className="text-sm text-neutral-600 flex-1">{t.description}</p>
                  <div className="flex gap-3 pt-2">
                    <Link href={`/treatments/${t.slug}`} className="button text-sm">Learn more</Link>
                    <Link href="/contact-us" className="button-secondary-dark text-sm">Book now</Link>
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
