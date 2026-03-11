"use client";

import { useState } from "react";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";

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
    <section id="why-us" className="padding-section-medium bg-white">
      <div className="container-large padding-global">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          {/* Image */}
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/5] bg-neutral-100 placeholder-cross placeholder-diag flex items-center justify-center relative">
              <span className="text-neutral-300 text-xs uppercase tracking-widest">Image</span>
              <span className="absolute bottom-3 right-3 text-[10px] text-neutral-300 tracking-widest uppercase">
                4:5
              </span>
            </div>
            {/* Offset accent block */}
            <div className="hidden lg:block absolute -bottom-4 -right-4 w-24 h-24 border border-primary-500/20" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Eyebrow variant="dark">Why Us</Eyebrow>
                <span className="section-number hidden lg:inline">03 / 06</span>
              </div>
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
                      {/* Number */}
                      <span
                        className={`text-xs font-medium tabular-nums transition-colors duration-300 ${
                          isActive ? "text-primary-500" : "text-neutral-300"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <h3
                        className={`text-base font-semibold flex-1 transition-colors duration-300 ${
                          isActive ? "text-neutral-1000" : "text-neutral-600 group-hover:text-neutral-1000"
                        }`}
                      >
                        {item.title}
                      </h3>

                      {/* Icon */}
                      <div
                        className={`w-8 h-8 border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          isActive ? "border-primary-500 bg-primary-500" : "border-neutral-200 group-hover:border-neutral-400"
                        }`}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={isActive ? "#01150b" : "currentColor"}
                          strokeWidth="2"
                          className={`transition-transform duration-300 ${isActive ? "rotate-45" : ""}`}
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </div>
                    </button>

                    {/* Content */}
                    <div
                      className={`overflow-hidden transition-all duration-400 ease-in-out ${
                        isActive ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-sm text-neutral-500 leading-relaxed pl-8">
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
          </div>
        </div>
      </div>
    </section>
  );
}
