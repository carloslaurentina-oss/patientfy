"use client";

import { useState } from "react";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const reasons = [
  {
    title: "Lorem Ipsum Dolor Sit",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus viverra ornare.",
  },
  {
    title: "Consectetur Adipiscing",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus viverra ornare.",
  },
  {
    title: "Suspendisse Varius Enim",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus viverra ornare.",
  },
  {
    title: "Tristique Duis Cursus",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus viverra ornare.",
  },
];

export default function ValueSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section id="why-us" className="padding-section-medium bg-neutral-50">
      <div className="container-large padding-global">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          {/* Image */}
          <AnimateOnScroll className="order-2 lg:order-1 relative" y={50} duration={0.9}>
            <div className="aspect-[4/5] bg-neutral-200/50 border border-neutral-200 rounded-2xl placeholder-cross placeholder-diag flex items-center justify-center relative">
              <span className="text-neutral-400 text-xs uppercase tracking-widest">Image</span>
            </div>
            <div className="hidden lg:block absolute -bottom-4 -right-4 w-24 h-24 border border-neutral-300/40 rounded-xl" />
          </AnimateOnScroll>

          {/* Content */}
          <AnimateOnScroll className="order-1 lg:order-2 flex flex-col gap-8" delay={0.15}>
            <div className="flex flex-col gap-4">
              <Eyebrow variant="dark">Why Us</Eyebrow>
              <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-neutral-1000">
                Why Us?
              </h2>
              <p className="text-base text-neutral-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>

            {/* Accordion */}
            <div className="flex flex-col">
              {reasons.map((item, i) => {
                const isActive = activeIndex === i;
                return (
                  <div
                    key={i}
                    className={`border-t border-neutral-200 ${i === reasons.length - 1 ? "border-b" : ""}`}
                  >
                    <button
                      className="w-full flex items-center gap-4 text-left py-5 group"
                      onClick={() => setActiveIndex(isActive ? -1 : i)}
                    >
                      <h3
                        className={`text-base font-semibold flex-1 transition-colors duration-300 ${
                          isActive ? "text-neutral-1000" : "text-neutral-600 group-hover:text-neutral-1000"
                        }`}
                      >
                        {item.title}
                      </h3>

                      <div
                        className={`w-8 h-8 border flex items-center justify-center flex-shrink-0 transition-all duration-300 rounded-md ${
                          isActive ? "border-neutral-1000 bg-neutral-1000" : "border-neutral-200 group-hover:border-neutral-400"
                        }`}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={isActive ? "white" : "currentColor"}
                          strokeWidth="2"
                          className={`transition-transform duration-300 ${isActive ? "rotate-45" : ""}`}
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-400 ease-in-out ${
                        isActive ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-sm text-neutral-500 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link href="/about-us" className="button self-start">
              About Us
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="square" />
              </svg>
            </Link>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
