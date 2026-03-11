import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import CTASection from "@/components/sections/CTASection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export const metadata: Metadata = {
  title: "About Us | Patientfy",
};

const team = [
  { name: "Dr. Team Member", role: "Dentist", slug: "dr-team-member" },
  { name: "Dr. Team Member", role: "Orthodontist", slug: "dr-team-member-2" },
  { name: "Dr. Team Member", role: "Periodontist", slug: "dr-team-member-3" },
  { name: "Dr. Team Member", role: "Endodontist", slug: "dr-team-member-4" },
];

const values = [
  "Lorem Ipsum Dolor Sit",
  "Consectetur Adipiscing Elit",
  "Suspendisse Varius Enim",
  "Duis Cursus Viverra",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-neutral-50 text-neutral-1000">
        <div className="container-large padding-global">
          <div className="max-w-2xl flex flex-col gap-6">
            <Eyebrow variant="dark">About us</Eyebrow>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-1000">
              About Us
            </h1>
            <p className="text-lg text-neutral-700 font-medium">
              Lorem ipsum dolor sit amet consectetur adipiscing elit viverra.
            </p>
            <p className="text-base text-neutral-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus viverra.
            </p>
            <div>
              <Link href="/about-us/team" className="button">
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section id="mission" className="padding-section-medium bg-white">
        <div className="container-large padding-global">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <Eyebrow variant="dark">Our Mission</Eyebrow>
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-1000">
                Our Mission
              </h2>
              <p className="text-base text-neutral-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus viverra.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                {values.map((value, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary-500 flex-shrink-0 mt-2" />
                    <h3 className="text-base font-semibold text-neutral-1000">{value}</h3>
                  </div>
                ))}
              </div>
              <p className="text-base text-neutral-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus viverra.
              </p>
            </div>
            <div className="aspect-square bg-neutral-100 flex items-center justify-center">
              <span className="text-neutral-400 text-sm">Image placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="padding-section-medium bg-neutral-50">
        <div className="container-large padding-global">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4 max-w-xl">
              <Eyebrow variant="dark">Meet the professionals</Eyebrow>
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-1000">
                Our Team
              </h2>
              <p className="text-base text-neutral-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus viverra.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {team.map((member, i) => (
                <Link
                  key={i}
                  href={`/about-us/team/${member.slug}`}
                  className="border border-neutral-200 bg-white flex flex-col hover:border-primary-500 transition-colors"
                >
                  <div className="aspect-[3/4] bg-neutral-100 flex items-center justify-center">
                    <span className="text-neutral-400 text-sm">Image</span>
                  </div>
                  <div className="p-4 flex flex-col gap-1">
                    <h3 className="text-base font-semibold text-neutral-1000">{member.name}</h3>
                    <p className="text-sm text-neutral-500">{member.role}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office */}
      <section id="office" className="padding-section-medium bg-white">
        <div className="container-large padding-global">
          <div className="flex flex-col gap-6 max-w-2xl">
            <Eyebrow variant="dark">Our Office</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-1000">
              Our Office
            </h2>
            <p className="text-base text-neutral-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus viverra.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="aspect-[4/3] bg-neutral-100 flex items-center justify-center">
                <span className="text-neutral-400 text-sm">Office image</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <TestimonialsSection />

      <CTASection />
    </>
  );
}
