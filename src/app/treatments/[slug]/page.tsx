"use client";

import { useState } from "react";
import Eyebrow from "@/components/ui/Eyebrow";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";

const accordionItems = [
  {
    title: "What It Is",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere curabitur porta.",
  },
  {
    title: "How It Works",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere curabitur porta.",
  },
  {
    title: "How It Helps",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere curabitur porta.",
  },
];

const faqs = [
  {
    q: "Lorem ipsum dolor sit amet consectetur?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  },
  {
    q: "Consectetur adipiscing elit suspendisse varius?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  },
  {
    q: "Suspendisse varius enim in eros elementum?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  },
  {
    q: "Duis cursus mi quis viverra ornare?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  },
  {
    q: "Aenean faucibus nibh et justo cursus?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  },
];

function Accordion({ items }: { items: { title: string; content: string }[] }) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <div className="flex flex-col">
      {items.map((item, i) => {
        const isActive = activeIndex === i;
        return (
          <div
            key={i}
            className={`border-t border-neutral-200 ${i === items.length - 1 ? "border-b" : ""}`}
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
              <p className="text-sm text-neutral-500 leading-relaxed">{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div className="flex flex-col">
      {items.map((item, i) => {
        const isActive = activeIndex === i;
        return (
          <div
            key={i}
            className={`border-t border-neutral-200 ${i === items.length - 1 ? "border-b" : ""}`}
          >
            <button
              className="w-full flex items-center gap-4 text-left py-5 group"
              onClick={() => setActiveIndex(isActive ? null : i)}
            >
              <h3
                className={`text-base font-semibold flex-1 transition-colors duration-300 ${
                  isActive ? "text-neutral-1000" : "text-neutral-600 group-hover:text-neutral-1000"
                }`}
              >
                {item.q}
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
              <p className="text-sm text-neutral-500 leading-relaxed">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function TreatmentDetailPage({ params }: { params: { slug: string } }) {
  const title = params.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-neutral-50 text-neutral-1000">
        <div className="container-large padding-global">
          <div className="max-w-2xl flex flex-col gap-4">
            <Eyebrow variant="dark">Treatment</Eyebrow>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-1000">{title}</h1>
            <p className="text-base text-neutral-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus viverra.
            </p>
          </div>
        </div>
      </section>

      {/* Learn More */}
      <section className="padding-section-medium bg-white">
        <div className="container-large padding-global">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="flex flex-col gap-6">
              <Eyebrow variant="dark">About This Treatment</Eyebrow>
              <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-neutral-1000">
                Learn More About {title}
              </h2>
              <Accordion items={accordionItems} />
              <Link href="/contact-us" className="button self-start">Book Now</Link>
            </div>
            <div className="aspect-[4/3] bg-neutral-100 rounded-2xl border border-neutral-200 flex items-center justify-center placeholder-cross">
              <span className="text-neutral-400 text-xs uppercase tracking-widest">Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="padding-section-medium bg-neutral-50">
        <div className="container-large padding-global">
          <div className="max-w-3xl mx-auto flex flex-col gap-8">
            <div className="flex flex-col gap-4 text-center items-center">
              <Eyebrow variant="dark">FAQ</Eyebrow>
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-1000">
                Frequently Asked Questions
              </h2>
              <p className="text-base text-neutral-500 max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.
              </p>
            </div>
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
