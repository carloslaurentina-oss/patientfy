import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";

export const metadata: Metadata = { title: "Service | Patientfy" };

const treatments = [
  { title: "Treatment Name", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim.", slug: "treatment-name-1" },
  { title: "Treatment Name", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim.", slug: "treatment-name-2" },
  { title: "Treatment Name", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim.", slug: "treatment-name-3" },
  { title: "Treatment Name", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim.", slug: "treatment-name-4" },
  { title: "Treatment Name", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim.", slug: "treatment-name-5" },
  { title: "Treatment Name", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim.", slug: "treatment-name-6" },
  { title: "Treatment Name", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim.", slug: "treatment-name-7" },
  { title: "Treatment Name", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim.", slug: "treatment-name-8" },
  { title: "Treatment Name", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim.", slug: "treatment-name-9" },
];

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const title = params.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-neutral-50 text-neutral-1000">
        <div className="container-large padding-global">
          <div className="max-w-2xl flex flex-col gap-4">
            <Eyebrow variant="dark">Service</Eyebrow>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-1000">{title}</h1>
            <p className="text-base text-neutral-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus viverra.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="padding-section-medium bg-white">
        <div className="container-large padding-global">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-semibold text-neutral-1000">Service Overview</h2>
              <p className="text-base text-neutral-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
              </p>
              <p className="text-base text-neutral-600">
                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
              </p>
              <div className="flex gap-3">
                <Link href="/contact-us" className="button self-start">Book Now</Link>
                <Link href="/contact-us" className="button-secondary-dark self-start">Insurance</Link>
              </div>
            </div>
            <div className="aspect-[4/3] bg-neutral-100 flex items-center justify-center">
              <span className="text-neutral-400 text-sm">Image placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Grid (3x3) */}
      <section className="padding-section-medium bg-neutral-50">
        <div className="container-large padding-global">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 max-w-xl">
              <Eyebrow variant="dark">Treatments</Eyebrow>
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-1000">
                Related Treatments
              </h2>
              <p className="text-base text-neutral-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus viverra.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatments.map((treatment, i) => (
                <div key={i} className="border border-neutral-200 bg-white flex flex-col">
                  <div className="aspect-[4/3] bg-neutral-100 flex items-center justify-center">
                    <span className="text-neutral-400 text-sm">Image</span>
                  </div>
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <h3 className="text-base font-semibold text-neutral-1000">{treatment.title}</h3>
                    <p className="text-sm text-neutral-600 flex-1">{treatment.description}</p>
                  </div>
                  <div className="p-5 pt-0 flex gap-3">
                    <Link href={`/treatments/${treatment.slug}`} className="button text-sm">
                      See Treatment
                    </Link>
                    <Link href="/contact-us" className="button-secondary-dark text-sm">
                      Book Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
