import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";

export const metadata: Metadata = { title: "Service Detail | Patientfy" };

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const title = params.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return (
    <>
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-neutral-1000 text-white">
        <div className="container-large padding-global">
          <div className="max-w-2xl flex flex-col gap-4">
            <Eyebrow variant="light">Service</Eyebrow>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white">{title}</h1>
          </div>
        </div>
      </section>

      <section className="padding-section-medium bg-white">
        <div className="container-large padding-global">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col gap-6">
              <p className="text-base text-neutral-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
              </p>
              <p className="text-base text-neutral-600">
                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
              </p>
              <Link href="/contact-us" className="button self-start">Book Now</Link>
            </div>
            <div className="aspect-[4/3] bg-neutral-100 flex items-center justify-center">
              <span className="text-neutral-400 text-sm">Image placeholder</span>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
