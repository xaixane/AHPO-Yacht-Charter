"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
  /** "center" wipes open from the middle outward; "left"/"right" wipe across from one edge to the other. */
  direction?: "center" | "left" | "right";
  duration?: number;
  delay?: number;
  start?: string;
}

const CLIP_FROM: Record<NonNullable<ImageRevealProps["direction"]>, string> = {
  center: "inset(0% 45% 0% 45%)",
  left: "inset(0% 100% 0% 0%)",
  right: "inset(0% 0% 0% 100%)",
};

export function ImageReveal({
  children,
  className,
  direction = "center",
  duration = 1.1,
  delay = 0,
  start = "top 85%",
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { clipPath: CLIP_FROM[direction] },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration,
          delay,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ref.current,
            start,
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [direction, duration, delay, start]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
