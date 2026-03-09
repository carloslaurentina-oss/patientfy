import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";

export const metadata: Metadata = { title: "Privacy Policy | Patientfy" };

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-neutral-1000 text-white">
        <div className="container-large padding-global">
          <div className="max-w-2xl flex flex-col gap-4">
            <Eyebrow variant="light">Legal</Eyebrow>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white">Privacy Policy</h1>
          </div>
        </div>
      </section>

      <section className="padding-section-medium bg-white">
        <div className="container-medium padding-global">
          <div className="flex flex-col gap-8 text-neutral-700">
            <p className="text-sm text-neutral-500">Last updated: March 2026</p>
            {[
              { title: "Information We Collect", content: "We collect information you provide directly to us, such as when you create an account, make an appointment, or contact us for support. This may include your name, email address, phone number, and health information." },
              { title: "How We Use Your Information", content: "We use the information we collect to provide, maintain, and improve our services, process appointments, send you communications, and comply with legal obligations." },
              { title: "Information Sharing", content: "We do not sell your personal information. We may share your information with healthcare providers involved in your care, as required by law, or with your consent." },
              { title: "Data Security", content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction." },
              { title: "Contact Us", content: "If you have questions about this privacy policy or our privacy practices, please contact us at privacy@patientfy.com." },
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
