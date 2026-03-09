import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";

export const metadata: Metadata = { title: "Services | Patientfy" };

const services = [
  { title: "General Dentistry", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros.", slug: "general-dentistry" },
  { title: "Cosmetic Dentistry", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros.", slug: "cosmetic-dentistry" },
  { title: "Orthodontics", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros.", slug: "orthodontics" },
  { title: "Oral Surgery", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros.", slug: "oral-surgery" },
  { title: "Periodontics", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros.", slug: "periodontics" },
  { title: "Endodontics", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros.", slug: "endodontics" },
  { title: "Pediatric Dentistry", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros.", slug: "pediatric-dentistry" },
  { title: "Dental Implants", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros.", slug: "dental-implants" },
  { title: "Emergency Dentistry", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros.", slug: "emergency-dentistry" },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-neutral-1000 text-white">
        <div className="container-large padding-global">
          <div className="max-w-2xl flex flex-col gap-4">
            <Eyebrow variant="light">What we offer</Eyebrow>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white">Services</h1>
            <p className="text-base text-white/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus viverra.
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
                      See Service
                    </Link>
                    <Link href="/contact-us" className="button-secondary-dark text-sm">
                      Book Now
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
