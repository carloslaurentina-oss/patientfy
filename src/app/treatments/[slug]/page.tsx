import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";

export const metadata: Metadata = { title: "Treatment | Patientfy" };

const faqs = [
  { q: "How long does the procedure take?", a: "The procedure typically takes 1-2 hours depending on complexity." },
  { q: "Is it covered by insurance?", a: "Coverage varies by insurance plan. We recommend checking with your provider." },
  { q: "How long is recovery?", a: "Most patients recover within a few days with minimal discomfort." },
];

export default function TreatmentDetailPage({ params }: { params: { slug: string } }) {
  const title = params.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return (
    <>
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-neutral-1000 text-white">
        <div className="container-large padding-global">
          <div className="max-w-2xl flex flex-col gap-4">
            <Eyebrow variant="light">Treatment</Eyebrow>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white">{title}</h1>
          </div>
        </div>
      </section>

      <section className="padding-section-medium bg-white">
        <div className="container-large padding-global">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col gap-6">
              <p className="text-base text-neutral-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
              </p>
              <h3 className="text-xl font-semibold text-neutral-1000">Benefits</h3>
              <ul className="flex flex-col gap-2">
                {["Improved appearance", "Long-lasting results", "Minimal recovery time", "Boost confidence"].map((b, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-neutral-700">
                    <span className="w-2 h-2 bg-primary-500 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link href="/contact-us" className="button self-start">Book Now</Link>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-semibold text-neutral-1000">Frequently Asked Questions</h3>
              <div className="flex flex-col divide-y divide-neutral-200">
                {faqs.map((faq, i) => (
                  <div key={i} className="py-4">
                    <p className="text-sm font-semibold text-neutral-1000 mb-2">{faq.q}</p>
                    <p className="text-sm text-neutral-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
