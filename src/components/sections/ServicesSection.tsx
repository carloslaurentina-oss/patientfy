import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";

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
    <section className="py-16 lg:py-24 bg-neutral-25 relative">
      {/* Section number */}
      <div className="container-large padding-global">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="flex flex-col gap-4 max-w-xl">
              <div className="flex items-center gap-4">
                <Eyebrow variant="dark">Our services</Eyebrow>
                <span className="section-number hidden lg:inline">02 / 06</span>
              </div>
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

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200">
            {services.map((service, i) => (
              <Link
                key={i}
                href={`/services/${service.slug}`}
                className="group bg-neutral-25 flex flex-col hover:bg-white transition-colors duration-300"
              >
                {/* Image placeholder */}
                <div className="aspect-[16/10] bg-neutral-100 placeholder-cross flex items-center justify-center relative overflow-hidden">
                  <span className="text-neutral-300 text-xs uppercase tracking-widest">Image</span>
                  {/* Number overlay */}
                  <span className="absolute top-3 left-3 text-[10px] font-semibold text-neutral-400 tracking-wider">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* Hover reveal bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col gap-2 flex-1">
                  <h3 className="text-base font-semibold text-neutral-1000 group-hover:text-primary-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-500 flex-1 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                {/* Footer */}
                <div className="px-6 pb-5 flex items-center gap-2 text-sm font-medium text-neutral-400 group-hover:text-primary-600 transition-colors duration-300">
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
          </div>
        </div>
      </div>
    </section>
  );
}
