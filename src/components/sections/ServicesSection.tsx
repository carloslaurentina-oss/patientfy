import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import AnimateOnScroll, { StaggerChildren } from "@/components/ui/AnimateOnScroll";
import { payloadFetchAll } from "@/lib/payload/client";
import type { Service } from "@/lib/payload/types";

export default async function ServicesSection() {
  const services = await payloadFetchAll<Service>("services", {
    sort: "title",
  });

  return (
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="container-large padding-global">
        <div className="flex flex-col gap-12">
          {/* Header */}
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
              <Link href="/services" className="button-secondary-dark text-sm flex-shrink-0 self-start lg:self-auto">
                View All Services
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="square" />
                </svg>
              </Link>
            </div>
          </AnimateOnScroll>

          {/* Grid */}
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.08}>
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group bg-neutral-50 rounded-xl flex flex-col hover:bg-neutral-100/80 transition-colors duration-300 overflow-hidden"
              >
                {/* Image placeholder */}
                <div className="aspect-[16/10] bg-neutral-200/50 placeholder-cross flex items-center justify-center relative overflow-hidden">
                  <span className="text-neutral-300 text-xs uppercase tracking-widest">Image</span>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-1000 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col gap-2 flex-1">
                  <h3 className="text-base font-semibold text-neutral-1000 group-hover:text-neutral-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-500 flex-1 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                {/* Footer */}
                <div className="px-6 pb-5 flex items-center gap-2 text-sm font-medium text-neutral-400 group-hover:text-neutral-1000 transition-colors duration-300">
                  <span>Learn more</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="transform group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="square" />
                  </svg>
                </div>
              </Link>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
