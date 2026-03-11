import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Treatments | Patientfy" };

const treatments = [
  { title: "Teeth Whitening", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros.", slug: "teeth-whitening" },
  { title: "Dental Implants", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros.", slug: "dental-implants" },
  { title: "Veneers", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros.", slug: "veneers" },
  { title: "Clear Aligners", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros.", slug: "clear-aligners" },
  { title: "Dental Crowns", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros.", slug: "dental-crowns" },
  { title: "Root Canal", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros.", slug: "root-canal" },
  { title: "Dental Bonding", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros.", slug: "dental-bonding" },
  { title: "Gum Treatment", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros.", slug: "gum-treatment" },
  { title: "Tooth Extraction", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros.", slug: "tooth-extraction" },
];

export default function TreatmentsPage() {
  return (
    <>
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-neutral-1000 text-white">
        <div className="container-large padding-global">
          <div className="max-w-2xl flex flex-col gap-4">
            <Eyebrow variant="light">What we provide</Eyebrow>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white">Treatments</h1>
            <p className="text-base text-white/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus viverra.
            </p>
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
                    <Link href={`/treatments/${t.slug}`} className={buttonVariants()}>See Treatment</Link>
                    <Link href="/contact-us" className={buttonVariants({ variant: "secondary-dark" })}>Book Now</Link>
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
