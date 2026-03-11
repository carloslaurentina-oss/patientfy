import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";

export const metadata: Metadata = { title: "Meet Our Doctor | Patientfy" };

export default function MeetDrPage() {
  return (
    <>
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-neutral-50 text-neutral-1000">
        <div className="container-large padding-global">
          <div className="max-w-2xl flex flex-col gap-4">
            <Eyebrow variant="dark">Meet your doctor</Eyebrow>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-1000">Dr. John Smith</h1>
            <p className="text-base text-neutral-500">Lead Dentist & Founder</p>
          </div>
        </div>
      </section>

      <section className="padding-section-medium bg-white">
        <div className="container-large padding-global">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="aspect-[3/4] bg-neutral-100 max-w-sm flex items-center justify-center">
              <span className="text-neutral-400 text-sm">Doctor image</span>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-semibold text-neutral-1000">About Dr. Smith</h2>
                <p className="text-base text-neutral-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
                </p>
                <p className="text-base text-neutral-600 leading-relaxed">
                  Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold text-neutral-1000">Education & Training</h3>
                <ul className="flex flex-col gap-2">
                  {[
                    "University of Tennessee College of Dentistry, DDS",
                    "American Academy of Cosmetic Dentistry member",
                    "15+ years of clinical experience",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-neutral-600">
                      <span className="mt-1.5 w-2 h-2 bg-primary-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contact-us" className="button self-start">Book with Dr. Smith</Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
