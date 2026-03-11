import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";

export default function CTASection() {
  return (
    <section className="padding-section-large bg-neutral-1000 grid-lines-dark relative overflow-hidden">
      {/* Section number */}
      <div className="absolute top-8 right-8 hidden lg:block section-number-light">
        06 / 06
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 hidden lg:block">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1">
          <line x1="0" y1="12" x2="24" y2="12" />
          <line x1="12" y1="0" x2="12" y2="24" />
        </svg>
      </div>
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1">
          <line x1="0" y1="12" x2="24" y2="12" />
          <line x1="12" y1="0" x2="12" y2="24" />
        </svg>
      </div>

      <div className="container-large padding-global relative">
        <div className="flex flex-col items-center text-center gap-8 max-w-2xl mx-auto">
          <Eyebrow variant="light">Get Started</Eyebrow>
          <h2 className="text-3xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
            Ready to Book
            <br />
            Your <span className="text-primary-400">Visit</span>?
          </h2>
          <p className="text-base lg:text-lg text-white/40 max-w-md leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique.
          </p>
          <div className="flex flex-wrap gap-4 pt-4 justify-center">
            <Link href="/contact-us" className="button text-sm">
              Book Now
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="square" />
              </svg>
            </Link>
            <Link href="tel:8657778484" className="button-secondary-light text-sm">
              (865) 777-8484
            </Link>
          </div>
        </div>
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
    </section>
  );
}
