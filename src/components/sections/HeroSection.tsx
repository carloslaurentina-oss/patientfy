import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";

export default function HeroSection() {
  return (
    <section className="section_hero bg-neutral-1000 text-white min-h-[85vh] flex items-end pt-24">
      <div className="container-large padding-global w-full pb-16 lg:pb-24">
        <div className="max-w-4xl flex flex-col gap-6">
          <Eyebrow variant="light">Dental Care – Patientfy</Eyebrow>
          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight tracking-tight text-white">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus viverra.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
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
