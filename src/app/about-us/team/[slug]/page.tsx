import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";

export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title: "Team Member | Patientfy" };

export default function TeamMemberPage({ params }: { params: { slug: string } }) {
  const name = params.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-neutral-50 text-neutral-1000">
        <div className="container-large padding-global">
          <div className="max-w-2xl flex flex-col gap-4">
            <Eyebrow variant="dark">Our Team</Eyebrow>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-1000">{name}</h1>
          </div>
        </div>
      </section>

      {/* Provider Info */}
      <section className="padding-section-medium bg-white">
        <div className="container-large padding-global">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Provider Image */}
            <div className="aspect-[3/4] bg-neutral-100 flex items-center justify-center max-w-sm">
              <span className="text-neutral-400 text-sm">Image placeholder</span>
            </div>
            <div className="flex flex-col gap-6">
              {/* Job Title */}
              <div>
                <p className="text-primary-600 font-semibold text-base mb-1">General Dentist</p>
                <h2 className="text-3xl font-semibold text-neutral-1000">{name}</h2>
              </div>
              {/* Biography */}
              <p className="text-base text-neutral-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <p className="text-base text-neutral-600">
                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Curabitur eu porta nibh et blandit sagittis.
              </p>
              <p className="text-base text-neutral-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus viverra ornare.
              </p>
              {/* CTA */}
              <Link href="/contact-us" className="button self-start">Book Now</Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
