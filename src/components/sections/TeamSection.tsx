"use client";

import { useRef } from "react";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import { buttonVariants } from "@/components/ui/Button";

const team = [
  { name: "Dr. Team Member", role: "Dentist", slug: "dr-team-member" },
  { name: "Dr. Team Member", role: "Orthodontist", slug: "dr-team-member-2" },
  { name: "Dr. Team Member", role: "Periodontist", slug: "dr-team-member-3" },
  { name: "Dr. Team Member", role: "Endodontist", slug: "dr-team-member-4" },
];

export default function TeamSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.offsetWidth;
    scrollRef.current.scrollBy({ left: dir === "next" ? width * 0.8 : -width * 0.8, behavior: "smooth" });
  };

  return (
    <section className="padding-section-small bg-neutral-50">
      <div className="container-large padding-global">
        <div className="flex items-end justify-between mb-8">
          <div className="flex flex-col gap-4">
            <Eyebrow variant="dark">Our team</Eyebrow>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-1000">
              Our Team
            </h2>
            <p className="text-base text-neutral-600 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus viverra.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => scroll("prev")}
              className="w-10 h-10 border border-neutral-300 flex items-center justify-center hover:border-neutral-1000 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
                <path d="M23.332 10L13.332 20L23.332 30" stroke="currentColor" strokeWidth="1.875" strokeLinecap="square" />
              </svg>
            </button>
            <button
              onClick={() => scroll("next")}
              className="w-10 h-10 border border-neutral-300 flex items-center justify-center hover:border-neutral-1000 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
                <path d="M16.668 30L26.668 20L16.668 10" stroke="currentColor" strokeWidth="1.875" strokeLinecap="square" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4"
          style={{ scrollbarWidth: "none" }}
        >
          {team.map((member, i) => (
            <Link
              key={i}
              href={`/about-us/team/${member.slug}`}
              className="flex-shrink-0 snap-start w-64 lg:w-72 border border-neutral-200 bg-white hover:border-primary-500 transition-colors"
            >
              <div className="aspect-[3/4] bg-neutral-100 flex items-center justify-center">
                <span className="text-neutral-400 text-sm">Image</span>
              </div>
              <div className="p-4 flex flex-col gap-1">
                <h3 className="text-base font-semibold text-neutral-1000">{member.name}</h3>
                <p className="text-sm text-neutral-500">{member.role}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6">
          <Link href="/about-us/team" className={buttonVariants({ variant: "secondary-dark", class: "text-sm px-4 py-2" })}>
            Meet Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
