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
    <section className="py-12 lg:py-16 bg-neutral-25">
      <div className="container-large padding-global">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 max-w-xl">
            <Eyebrow variant="dark">Our services</Eyebrow>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-1000">
              Services
            </h2>
            <p className="text-base text-neutral-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus viverra.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <Link href={`/services/${service.slug}`} className="button text-sm">
                    See Service
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
  );
}
