import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Us | Patientfy",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-neutral-1000 text-white">
        <div className="container-large padding-global">
          <div className="max-w-2xl flex flex-col gap-4">
            <Eyebrow variant="light">About us</Eyebrow>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white">
              Lorem ipsum dolor sit amet
            </h1>
            <p className="text-base text-white/70">
              Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="padding-section-medium bg-white">
        <div className="container-large padding-global">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <Eyebrow variant="dark">Our Mission</Eyebrow>
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-1000">
                Lorem ipsum dolor sit amet consectetur
              </h2>
              <p className="text-base text-neutral-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <p className="text-base text-neutral-600">
                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
              </p>
            </div>
            <div className="aspect-square bg-neutral-100 flex items-center justify-center">
              <span className="text-neutral-400 text-sm">Image placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="padding-section-small bg-neutral-50">
        <div className="container-large padding-global">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Years of Experience" },
              { number: "5,000+", label: "Happy Patients" },
              { number: "15", label: "Team Members" },
              { number: "4.9★", label: "Average Rating" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-2">
                <p className="text-4xl font-semibold text-primary-500">{stat.number}</p>
                <p className="text-sm text-neutral-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office */}
      <section id="office" className="padding-section-medium bg-white">
        <div className="container-large padding-global">
          <div className="flex flex-col gap-6 max-w-2xl">
            <Eyebrow variant="dark">Our Office</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-1000">
              State-of-the-art facility
            </h2>
            <p className="text-base text-neutral-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
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

      <CTASection />
    </>
  );
}
