import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import AnimateOnScroll, { StaggerChildren } from "@/components/ui/AnimateOnScroll";
import { buttonVariants } from "@/components/ui/Button";

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

export default function ServicesSection() {
  return (
    <section className="py-12 lg:py-16 bg-neutral-25">
      <div className="container-large padding-global">
        <div className="flex flex-col gap-12">
          <AnimateOnScroll>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="flex flex-col gap-4 max-w-xl">
                <Eyebrow variant="dark">Our services</Eyebrow>
                <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-neutral-1000">
                  Services
                </h2>
                <p className="text-base text-neutral-500 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
              <Link href="/services" className={buttonVariants({ variant: "secondary-dark", class: "flex-shrink-0 self-start lg:self-auto" })}>
                View All Services
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="square" />
                </svg>
              </Link>
            </div>
          </AnimateOnScroll>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.08}>
            {services.map((service, i) => (
              <div key={i} className="border border-neutral-200 bg-white flex flex-col">
                <Link href={`/services/${service.slug}`} className="block overflow-hidden">
                  <div className="aspect-[4/3] bg-neutral-100 flex items-center justify-center">
                    <span className="text-neutral-400 text-sm">Image placeholder</span>
                  </div>
                </Link>
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <h3 className="text-lg font-semibold text-neutral-1000">{service.title}</h3>
                  <p className="text-sm text-neutral-600 flex-1">{service.description}</p>
                </div>
                <div className="p-5 pt-0 flex gap-3">
                  <Link href={`/services/${service.slug}`} className={buttonVariants({ class: "text-sm px-4 py-2", variant: "primary" })}>
                    See Service
                  </Link>
                  <Link href="/contact-us" className={buttonVariants({ class: "text-sm px-4 py-2", variant: "secondary-dark" })}>
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
