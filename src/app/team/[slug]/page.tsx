import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";

export const metadata: Metadata = { title: "Team Member | Patientfy" };

export default function TeamMemberPage({ params }: { params: { slug: string } }) {
  const name = params.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return (
    <>
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-neutral-1000 text-white">
        <div className="container-large padding-global">
          <div className="max-w-2xl flex flex-col gap-4">
            <Eyebrow variant="light">Our Team</Eyebrow>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white">{name}</h1>
          </div>
        </div>
      </section>

      <section className="padding-section-medium bg-white">
        <div className="container-large padding-global">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="aspect-[3/4] bg-neutral-100 flex items-center justify-center max-w-sm">
              <span className="text-neutral-400 text-sm">Image placeholder</span>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-primary-600 font-semibold mb-2">General Dentist</p>
                <h2 className="text-3xl font-semibold text-neutral-1000">{name}</h2>
              </div>
              <p className="text-base text-neutral-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
              </p>
              <p className="text-base text-neutral-600">
                Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
              </p>
              <Link href="/contact-us" className="button self-start">Book Appointment</Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
