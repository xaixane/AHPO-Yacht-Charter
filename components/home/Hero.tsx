"use client";

import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import heroImage from "@/assets/HERO.jpg";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(".hero-eyebrow", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 })
        .fromTo(".hero-line", { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1, stagger: 0.14 }, "-=0.5")
        .fromTo(".hero-copy", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
        .fromTo(".hero-cta", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .fromTo(
          ".hero-image",
          { scale: 1.12 },
          { scale: 1, duration: 1.6, ease: "power2.out" },
          0
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center min-h-screen pt-24 pb-16 overflow-hidden bg-white text-[#0F0F0E]"
    >
      {/* Full-bleed vessel photograph, ship anchored right */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={heroImage}
          alt="Superyacht at anchor off a hazy coastal mountain range"
          fill
          priority
          className="hero-image object-cover object-right"
        />
        {/* Solid white through the text column, then a smooth eased fade to fully transparent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_0%,#fff_36%,rgba(255,255,255,0.94)_40%,rgba(255,255,255,0.75)_44%,rgba(255,255,255,0.45)_48%,rgba(255,255,255,0.18)_52%,transparent_57%)]" />
      </div>

      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-[5%]">
        <div className="max-w-xl space-y-6">
          <span className="hero-eyebrow flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#6B6B65] font-semibold">
            <span className="w-6 h-px bg-[#6B6B65]" />
            The Charter Fleet
          </span>

          <h1 className="font-sans text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
            <span className="hero-line block">EXCEPTIONAL</span>
            <span className="hero-line block">BY DESIGN</span>
          </h1>

          <p className="hero-copy text-sm sm:text-base text-[#6B6B65] leading-relaxed max-w-md">
            Explore our handpicked portfolio of world-class superyachts, motor yachts, sailing vessels, and expedition explorers.
          </p>

          <Link
            href="/yachts"
            className="hero-cta inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#0F0F0E] hover:text-[#6B6B65] transition-colors pt-2"
          >
            <span>Explore the Fleet</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
