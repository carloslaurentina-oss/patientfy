import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";

export const metadata: Metadata = { title: "Financing | Patientfy" };

const boxes = [
  {
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    cta: "Here goes a CTA",
  },
  {
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    cta: "Here goes a CTA",
  },
  {
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    cta: "Here goes a CTA",
  },
];

export default function FinancingPage() {
  return (
    <>
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-neutral-50 text-neutral-1000">
        <div className="container-large padding-global">
          <div className="max-w-2xl flex flex-col gap-4">
            <Eyebrow variant="dark">Payment options</Eyebrow>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-1000">Financing</h1>
            <p className="text-base text-neutral-500">Flexible payment options to fit your budget.</p>
          </div>
        </div>
      </section>

      <section className="padding-section-medium bg-white">
        <div className="container-large padding-global">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {boxes.map((box, i) => (
              <div key={i} className="border border-neutral-200 rounded-xl p-8 flex flex-col gap-4">
                <h3 className="text-xl font-semibold text-neutral-1000">{box.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed flex-1">{box.description}</p>
                <Link href="/contact-us" className="button self-start text-sm">
                  {box.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
