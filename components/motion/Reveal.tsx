"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  y?: number;
  delay?: number;
  duration?: number;
  /** When set, animates the direct children individually with this stagger instead of the wrapper as one block. */
  stagger?: number;
  start?: string;
}

export function Reveal({
  children,
  className,
  as: Tag = "div",
  y = 24,
  delay = 0,
  duration = 0.5,
  stagger,
  start = "top 85%",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const targets = stagger ? gsap.utils.toArray(ref.current!.children) : ref.current;

      gsap.fromTo(
        targets as gsap.TweenTarget,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start,
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [y, delay, duration, stagger, start]);

  const Component = Tag as React.ElementType;

  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
}
