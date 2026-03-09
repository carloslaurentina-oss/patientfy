import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";

export const metadata: Metadata = { title: "Terms and Conditions | Patientfy" };

export default function TermsPage() {
  return (
    <>
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-neutral-1000 text-white">
        <div className="container-large padding-global">
          <div className="max-w-2xl flex flex-col gap-4">
            <Eyebrow variant="light">Legal</Eyebrow>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white">Terms and Conditions</h1>
          </div>
        </div>
      </section>

      <section className="padding-section-medium bg-white">
        <div className="container-medium padding-global">
          <div className="flex flex-col gap-8">
            <p className="text-sm text-neutral-500">Last updated: March 2026</p>
            {[
              { title: "Acceptance of Terms", content: "By accessing and using our services, you accept and agree to be bound by these Terms and Conditions." },
              { title: "Use of Services", content: "Our services are intended for personal, non-commercial use. You agree not to misuse our services or help anyone else to do so." },
              { title: "Appointments and Cancellations", content: "We require 24 hours notice for appointment cancellations. Failure to provide adequate notice may result in a cancellation fee." },
              { title: "Medical Disclaimer", content: "The content provided on our website is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment." },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-semibold text-neutral-1000 mb-3">{section.title}</h2>
                <p className="text-base text-neutral-600 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
