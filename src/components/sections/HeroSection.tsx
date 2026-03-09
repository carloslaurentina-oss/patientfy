import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";

export default function HeroSection() {
  return (
    <section className="section_hero bg-neutral-1000 text-white min-h-[85vh] flex items-end pt-24">
      <div className="container-large padding-global w-full pb-16 lg:pb-24">
        <div className="max-w-3xl flex flex-col gap-8">
          <Eyebrow variant="light">Here goes an eyebrown</Eyebrow>
          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight tracking-tight text-white">
            Lorem ipsum dolor sit amet<br />consectetur adipiscing elit
          </h1>
          <p className="text-lg text-white/80">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact-us" variant="primary">
              Book Now
            </Button>
            <Button href="/insurance" variant="secondary-light">
              Insurance
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
