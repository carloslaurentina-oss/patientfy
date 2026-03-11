import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";

export default function HeroSection() {
  return (
    <section className="section_hero bg-neutral-1000 text-white min-h-[90vh] flex items-end pt-24 grid-lines-dark relative overflow-hidden">
      {/* Section number */}
      <div className="absolute top-28 right-8 hidden lg:block section-number-light">
        01 / 06
      </div>

      <div className="container-large padding-global w-full pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end">
          {/* Content */}
          <div className="flex flex-col gap-6">
            <Eyebrow variant="light">Dental Care &mdash; Patientfy</Eyebrow>
            <h1 className="text-4xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-white">
              Lorem ipsum
              <br />
              dolor sit
              <br />
              <span className="text-primary-400">amet</span>
            </h1>
            <p className="text-base lg:text-lg text-white/50 max-w-md leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button href="/contact-us" variant="primary">
                Book Now
              </Button>
              <Button href="/insurance" variant="secondary-light">
                Insurance
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 pt-8 mt-4 border-t border-white/10">
              <div>
                <p className="text-2xl lg:text-3xl font-semibold text-white">15+</p>
                <p className="text-xs text-white/40 mt-1 uppercase tracking-wider">Years exp.</p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-semibold text-white">10k+</p>
                <p className="text-xs text-white/40 mt-1 uppercase tracking-wider">Patients</p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-semibold text-white">4.9</p>
                <p className="text-xs text-white/40 mt-1 uppercase tracking-wider">Rating</p>
              </div>
            </div>
          </div>

          {/* Placeholder image */}
          <div className="hidden lg:block">
            <div className="aspect-[4/5] bg-white/[0.03] border border-white/10 placeholder-cross placeholder-diag flex items-center justify-center relative">
              <span className="text-white/20 text-xs uppercase tracking-widest">Hero Image</span>
              <span className="absolute -bottom-6 left-0 text-[10px] text-white/15 tracking-widest uppercase">
                640 &times; 800
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />
    </section>
  );
}
