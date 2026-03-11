"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
}

export default function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
  y = 60,
  duration = 1,
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { opacity: 0, y });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once,
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [delay, y, duration, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
  duration?: number;
}

export function StaggerChildren({
  children,
  className = "",
  stagger = 0.15,
  y = 50,
  duration = 0.9,
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.children;
    gsap.set(items, { opacity: 0, y });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: "power3.out",
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [stagger, y, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
