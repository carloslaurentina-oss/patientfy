import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";

export const metadata: Metadata = { title: "Services | Patientfy" };

const services = [
  { title: "General Dentistry", description: "Comprehensive dental care for your entire family.", slug: "general-dentistry" },
  { title: "Cosmetic Dentistry", description: "Transform your smile with our cosmetic treatments.", slug: "cosmetic-dentistry" },
  { title: "Orthodontics", description: "Straighten your teeth with braces or clear aligners.", slug: "orthodontics" },
  { title: "Oral Surgery", description: "Expert surgical procedures for complex dental issues.", slug: "oral-surgery" },
  { title: "Periodontics", description: "Specialized care for gum disease and implants.", slug: "periodontics" },
  { title: "Endodontics", description: "Root canal therapy and pulp treatment specialists.", slug: "endodontics" },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-neutral-1000 text-white">
        <div className="container-large padding-global">
          <div className="max-w-2xl flex flex-col gap-4">
            <Eyebrow variant="light">What we offer</Eyebrow>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white">Our Services</h1>
            <p className="text-base text-white/70">
              Comprehensive dental care tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      <section className="padding-section-medium bg-white">
        <div className="container-large padding-global">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="border border-neutral-200 flex flex-col">
                <div className="aspect-[4/3] bg-neutral-100 flex items-center justify-center">
                  <span className="text-neutral-400 text-sm">Image</span>
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <h3 className="text-lg font-semibold text-neutral-1000">{service.title}</h3>
                  <p className="text-sm text-neutral-600 flex-1">{service.description}</p>
                  <div className="flex gap-3 pt-2">
                    <Link href={`/services/${service.slug}`} className="button text-sm">
                      See service
                    </Link>
                    <Link href="/contact-us" className="button-secondary-dark text-sm">
                      Book now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
