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
];

export default function ValueSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="why-us" className="padding-section-small bg-white">
      <div className="container-large padding-global">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 aspect-[4/5] bg-neutral-100 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm">
              Image placeholder
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Eyebrow variant="dark">Why Us</Eyebrow>
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-1000">
                Why Us?
              </h2>
              <p className="text-base text-neutral-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus viverra.
              </p>
            </div>

            <div className="flex flex-col divide-y divide-neutral-200">
              {reasons.map((item, i) => (
                <div key={i} className="py-4">
                  <button
                    className="w-full flex items-center justify-between text-left"
                    onClick={() =>
                      setActiveIndex(activeIndex === i ? null : i)
                    }
                  >
                    <h3 className="text-base font-semibold text-neutral-1000">
                      {item.title}
                    </h3>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`flex-shrink-0 transition-transform duration-300 ${
                        activeIndex === i ? "rotate-45" : ""
                      }`}
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeIndex === i
                        ? "max-h-40 mt-3 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm text-neutral-600">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/about-us" className="button self-start">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
