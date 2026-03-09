import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";

export default function CTASection() {
  return (
    <section className="padding-section-medium bg-neutral-1000">
      <div className="container-large padding-global">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-4 max-w-xl">
            <Eyebrow variant="light">Lorem ipsum dolor sit amet</Eyebrow>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white">
              Lorem ipsum dolor sit amet
            </h2>
            <p className="text-lg text-white/60">
              Lorem ipsum dolor sit amet consectetur adipiscing elit
            </p>
          </div>
          <Link href="/contact-us" className="button flex-shrink-0">
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}
