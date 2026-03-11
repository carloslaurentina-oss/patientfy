"use client";

import { useRef } from "react";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";

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
    scrollRef.current.scrollBy({
      left: dir === "next" ? width * 0.6 : -width * 0.6,
      behavior: "smooth",
    });
  };

  return (
    <section className="padding-section-medium bg-neutral-50">
      <div className="container-large padding-global">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-10 gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Eyebrow variant="dark">Our team</Eyebrow>
              <span className="section-number hidden lg:inline">04 / 06</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-neutral-1000">
              Our Team
            </h2>
            <p className="text-base text-neutral-500 max-w-md leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("prev")}
              className="w-11 h-11 border border-neutral-300 flex items-center justify-center hover:border-neutral-1000 hover:bg-neutral-1000 hover:text-white transition-all duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 6L9 12L15 18" strokeLinecap="square" />
              </svg>
            </button>
            <button
              onClick={() => scroll("next")}
              className="w-11 h-11 border border-neutral-300 flex items-center justify-center hover:border-neutral-1000 hover:bg-neutral-1000 hover:text-white transition-all duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 6L15 12L9 18" strokeLinecap="square" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar"
          style={{ scrollbarWidth: "none" }}
        >
          {team.map((member, i) => (
            <Link
              key={i}
              href={`/about-us/team/${member.slug}`}
              className="group flex-shrink-0 snap-start w-[280px] lg:w-[300px] bg-white border border-neutral-200 hover:border-neutral-400 transition-all duration-300 card-hover"
            >
              <div className="aspect-[3/4] bg-neutral-100 placeholder-cross flex items-center justify-center relative overflow-hidden">
                <span className="text-neutral-300 text-xs uppercase tracking-widest">Photo</span>
                {/* Number */}
                <span className="absolute top-3 right-3 text-[10px] font-medium text-neutral-300 tracking-wider">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
              <div className="p-5 flex flex-col gap-1">
                <h3 className="text-base font-semibold text-neutral-1000 group-hover:text-primary-700 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sm text-neutral-400">{member.role}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer link */}
        <div className="mt-8 pt-8 border-t border-neutral-200 flex items-center justify-between">
          <p className="text-sm text-neutral-400">
            {team.length} team members
          </p>
          <Link
            href="/about-us/team"
            className="button-secondary-dark text-sm"
          >
            Meet Our Team
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="square" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
