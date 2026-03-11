import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";

export const metadata: Metadata = { title: "Financing | Patientfy" };

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-semibold text-neutral-1000">Payment Plans</h2>
              <p className="text-base text-neutral-600">
                We believe everyone deserves quality dental care. That&apos;s why we offer flexible financing options.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { name: "CareCredit", desc: "0% interest financing for qualified patients." },
                  { name: "Sunbit", desc: "Quick approval with flexible monthly payments." },
                  { name: "In-House Plans", desc: "Our own payment plan with no credit check required." },
                ].map((plan) => (
                  <div key={plan.name} className="border border-neutral-200 p-5">
                    <h4 className="text-base font-semibold text-neutral-1000 mb-1">{plan.name}</h4>
                    <p className="text-sm text-neutral-600">{plan.desc}</p>
                  </div>
                ))}
              </div>
              <Link href="/contact-us" className="button self-start">Get Started</Link>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-semibold text-neutral-1000">Why Choose Our Financing?</h2>
              <ul className="flex flex-col gap-4">
                {[
                  "Quick and easy application process",
                  "Low monthly payments",
                  "No prepayment penalties",
                  "Covers all dental procedures",
                  "Immediate approval decisions",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-neutral-700">
                    <span className="mt-0.5 w-5 h-5 bg-primary-500 flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
