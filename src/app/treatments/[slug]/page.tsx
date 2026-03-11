"use client";

import { useState } from "react";
import Eyebrow from "@/components/ui/Eyebrow";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";

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
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.",
  },
  {
    q: "Consectetur adipiscing elit suspendisse varius?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.",
  },
  {
    q: "Suspendisse varius enim in eros elementum?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.",
  },
  {
    q: "Duis cursus mi quis viverra ornare?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.",
  },
  {
    q: "Aenean faucibus nibh et justo cursus?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.",
  },
];

function Accordion({ items }: { items: { title: string; content: string }[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div className="flex flex-col divide-y divide-neutral-200">
      {items.map((item, i) => (
        <div key={i} className="py-4">
          <button
            className="w-full flex items-center justify-between text-left"
            onClick={() => setActiveIndex(activeIndex === i ? null : i)}
          >
            <h3 className="text-base font-semibold text-neutral-1000">{item.title}</h3>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`flex-shrink-0 transition-transform duration-300 ${activeIndex === i ? "rotate-45" : ""}`}
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === i ? "max-h-60 mt-3 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-sm text-neutral-600">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function TreatmentDetailPage({ params }: { params: { slug: string } }) {
  const title = params.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-neutral-1000 text-white">
        <div className="container-large padding-global">
          <div className="max-w-2xl flex flex-col gap-4">
            <Eyebrow variant="light">Treatment</Eyebrow>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white">{title}</h1>
            <p className="text-base text-white/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus viverra.
            </p>
          </div>
        </div>
      </section>

      {/* Accordion: What it is / How it works / How it helps */}
      <section className="padding-section-medium bg-white">
        <div className="container-large padding-global">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col gap-6">
              <Eyebrow variant="dark">About This Treatment</Eyebrow>
              <h2 className="text-2xl font-semibold text-neutral-1000">
                Learn More About {title}
              </h2>
              <Accordion items={accordionItems} />
              <Link href="/contact-us" className={buttonVariants({ class: "self-start" })}>Book Now</Link>
            </div>
            <div className="aspect-[4/3] bg-neutral-100 flex items-center justify-center">
              <span className="text-neutral-400 text-sm">Image placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="padding-section-medium bg-neutral-50">
        <div className="container-large padding-global">
          <div className="max-w-2xl mx-auto flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Eyebrow variant="dark">FAQ</Eyebrow>
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-1000">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="flex flex-col divide-y divide-neutral-200">
              {faqs.map((faq, i) => (
                <div key={i} className="py-5">
                  <p className="text-sm font-semibold text-neutral-1000 mb-3">{faq.q}</p>
                  <p className="text-sm text-neutral-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
