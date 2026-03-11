"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const items = el.querySelectorAll(".hero-animate");
    const image = el.querySelector(".hero-image");

    gsap.set(items, { opacity: 0, y: 50 });
    gsap.set(image, { opacity: 0, y: 40, scale: 0.96 });

    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.18,
      ease: "power3.out",
      delay: 0.2,
    });

    gsap.to(image, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.5,
    });
  }, []);

  return (
    <section ref={sectionRef} className="section_hero bg-neutral-50 text-neutral-1000 pt-28 lg:pt-32 pb-14 lg:pb-20 relative overflow-hidden">
      <div className="container-large padding-global w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className="flex flex-col gap-6">
            <div className="hero-animate">
              <Eyebrow variant="dark">Dental Care &mdash; Patientfy</Eyebrow>
            </div>
            <h1 className="hero-animate text-4xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-neutral-1000">
              Lorem ipsum dolor sit amet
            </h1>
            <p className="hero-animate text-base lg:text-lg text-neutral-500 max-w-md leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <div className="hero-animate flex flex-wrap gap-4 pt-2">
              <Button href="/contact-us" variant="primary">
                Book Now
              </Button>
              <Button href="/insurance" variant="secondary-dark">
                Insurance
              </Button>
            </div>
          </div>

          {/* Placeholder image */}
          <div className="hero-image hidden lg:block">
            <div className="w-full aspect-[1/1] bg-neutral-200/50 border border-neutral-200 rounded-2xl placeholder-cross placeholder-diag flex items-center justify-center relative">
              <span className="text-neutral-400 text-xs uppercase tracking-widest">Hero Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
