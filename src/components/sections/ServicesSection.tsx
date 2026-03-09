import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";

const services = [
  {
    title: "Service Name",
    description: "Brief description of this dental service.",
    slug: "service-name",
    image: "/images/Placeholder-Image.png",
  },
  {
    title: "Service Name",
    description: "Brief description of this dental service.",
    slug: "service-name-2",
    image: "/images/Placeholder-Image.png",
  },
  {
    title: "Service Name",
    description: "Brief description of this dental service.",
    slug: "service-name-3",
    image: "/images/Placeholder-Image.png",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-12 lg:py-16 bg-neutral-25">
      <div className="container-large padding-global">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 max-w-xl">
            <Eyebrow variant="dark">Our services</Eyebrow>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-1000">
              At vero eos et accusamus
            </h2>
            <p className="text-base text-neutral-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
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
                  <Link
                    href={`/services/${service.slug}`}
                    className="button text-sm"
                  >
                    See service
                  </Link>
                  <Link
                    href="/contact-us"
                    className="button-secondary-dark text-sm"
                  >
                    Book now
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
