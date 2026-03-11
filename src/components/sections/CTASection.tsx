import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { buttonVariants } from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="padding-section-large bg-neutral-50 relative overflow-hidden">
      <div className="container-large padding-global relative">
        <AnimateOnScroll className="flex flex-col items-center text-center gap-8 max-w-2xl mx-auto">
          <Eyebrow variant="dark">Get Started</Eyebrow>
          <h2 className="text-3xl lg:text-6xl font-semibold tracking-tight text-neutral-1000 leading-tight">
            Ready to Book
            <br />
            Your Visit?
          </h2>
          <p className="text-base lg:text-lg text-neutral-500 max-w-md leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique.
          </p>
          <div className="flex flex-wrap gap-4 pt-4 justify-center">
            <Link href="/contact-us" className={buttonVariants()}>
              Book Now
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="square" />
              </svg>
            </Link>
            <a href="tel:8657778484" className={buttonVariants({ variant: "secondary-dark" })}>
              (865) 777-8484
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
