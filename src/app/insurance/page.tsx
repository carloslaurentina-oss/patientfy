import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";

export const metadata: Metadata = { title: "Insurance | Patientfy" };

export default function InsurancePage() {
  return (
    <>
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-neutral-50 text-neutral-1000">
        <div className="container-large padding-global">
          <div className="max-w-2xl flex flex-col gap-4">
            <Eyebrow variant="dark">Coverage</Eyebrow>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-1000">Insurance</h1>
            <p className="text-base text-neutral-500">We work with most major insurance providers.</p>
          </div>
        </div>
      </section>

      <section className="padding-section-medium bg-white">
        <div className="container-large padding-global">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-semibold text-neutral-1000">Accepted Insurance Plans</h2>
              <p className="text-base text-neutral-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. We work with most major insurance providers to ensure you can access the care you need.
              </p>
              <ul className="flex flex-col gap-2">
                {["Delta Dental", "Cigna", "Aetna", "Blue Cross Blue Shield", "United Healthcare", "Humana"].map((ins) => (
                  <li key={ins} className="flex items-center gap-3 text-sm text-neutral-700 py-2 border-b border-neutral-100">
                    <span className="w-2 h-2 bg-primary-500 flex-shrink-0" />
                    {ins}
                  </li>
                ))}
              </ul>
              <Link href="/insurance/check-benefits" className="button self-start">Check My Insurance</Link>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-semibold text-neutral-1000">How It Works</h2>
              <div className="flex flex-col gap-6">
                {[
                  { step: "01", title: "Verify Coverage", desc: "Check your insurance coverage online or call us." },
                  { step: "02", title: "Schedule Appointment", desc: "Book your appointment at a time that works for you." },
                  { step: "03", title: "Receive Care", desc: "We handle the insurance billing on your behalf." },
                ].map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <span className="text-2xl font-bold text-primary-500 flex-shrink-0">{step.step}</span>
                    <div>
                      <h4 className="text-base font-semibold text-neutral-1000">{step.title}</h4>
                      <p className="text-sm text-neutral-600">{step.desc}</p>
                    </div>
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
