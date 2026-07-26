"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Clock, Anchor } from "lucide-react";
import { gsap } from "gsap";

import heroImage from "@/assets/HERO.jpg";
import bg1 from "@/assets/BACKGROUND-1.jpg";
import bg2 from "@/assets/BACKGROUND-2.jpg";
import bg3 from "@/assets/BACKGROUND-3.jpg";

const HERO_SLIDES = [
  { id: 1, src: heroImage, title: "Sailing Flagship", alt: "Sailing Superyacht" },
  { id: 2, src: bg1, title: "Ocean Explorer", alt: "Motor Explorer Yacht" },
  { id: 3, src: bg2, title: "Stern & Deck", alt: "Superyacht Stern & Deck" },
  { id: 4, src: bg3, title: "Coastal Horizon", alt: "Superyacht Aerial Horizon" },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(".hero-eyebrow", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 })
        .fromTo(".hero-line", { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1, stagger: 0.14 }, "-=0.5")
        .fromTo(".hero-copy", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
        .fromTo(".hero-cta", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .fromTo(".hero-stats", { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
        .fromTo(
          ".hero-image-wrapper",
          { scale: 1.08 },
          { scale: 1, duration: 1.7, ease: "power3.inOut" },
          0
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col justify-between sm:flex-row sm:items-center min-h-screen pt-28 pb-12 sm:pb-20 overflow-hidden bg-white text-[#0F0F0E]"
    >
      {/* Desktop Full-bleed vessel photograph stack with smooth fade transition */}
      <div className="hero-image-wrapper hidden sm:block absolute inset-0 z-0 overflow-hidden">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover object-right"
            />
          </div>
        ))}

        {/* Solid white through text column, then smooth fade to transparent */}
        <div className="absolute inset-0 z-20 bg-[linear-gradient(to_right,#fff_0%,#fff_38%,rgba(255,255,255,0.96)_42%,rgba(255,255,255,0.75)_46%,rgba(255,255,255,0.45)_50%,rgba(255,255,255,0.18)_54%,transparent_60%)] pointer-events-none" />
      </div>

      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-[5%]">
        <div className="max-w-xl space-y-6">
          <span className="hero-eyebrow flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#6B6B65] font-semibold">
            <span className="w-6 h-px bg-[#6B6B65]" />
            The Charter Fleet
          </span>

          <h1 className="font-sans text-4xl sm:text-7xl lg:text-8xl font-bold -tracking-[0.05em] leading-[0.95]">
            <span className="hero-line block">EXCEPTIONAL</span>
            <span className="hero-line block">BY DESIGN</span>
          </h1>

          <p className="hero-copy text-sm sm:text-base text-[#6B6B65] leading-relaxed max-w-md">
            Explore our handpicked portfolio of world-class superyachts, motor yachts, sailing vessels, and expedition explorers.
          </p>

          <div className="pt-2">
            <Link
              href="/yachts"
              className="hero-cta inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#0F0F0E] hover:text-[#6B6B65] transition-colors"
            >
              <span>Explore the Fleet</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Vessel Photo Card (Vertical layout on mobile screens) */}
          <div className="sm:hidden relative w-full aspect-[16/10] my-6 border border-[#E4E2DC] bg-[#F7F6F3] overflow-hidden shadow-sm">
            <Image
              src={HERO_SLIDES[activeSlide].src}
              alt={HERO_SLIDES[activeSlide].alt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Fleet Key Metrics & Concierge SLA Bar - Bottom Left on Desktop, Clean Bottom Flow on Mobile */}
      <div className="hero-stats relative sm:absolute sm:bottom-10 sm:left-6 sm:left-12 lg:left-[5%] z-20 flex items-stretch gap-4 sm:gap-6 px-6 sm:px-0 pt-6 sm:pt-0 mt-6 sm:mt-0 border-t border-[#E4E2DC] sm:border-t-0">
        <div className="space-y-0.5">
          <div className="flex items-center gap-1.5 text-[#0F0F0E]">
            <Anchor className="w-3.5 h-3.5 text-[#0F0F0E]" />
            <span className="text-sm sm:text-base font-semibold font-sans text-[#0F0F0E]">100%</span>
          </div>
          <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-[#0F0F0E] block pt-0.5">
            CURATED FLEET
          </span>
          <span className="text-[10px] sm:text-[11px] text-[#6B6B65] block">
            Hand-vetted flagships
          </span>
        </div>

        <div className="space-y-0.5 border-l border-[#E4E2DC] pl-4 sm:pl-6">
          <div className="flex items-center gap-1.5 text-[#0F0F0E]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0F0F0E]" />
            <span className="text-sm sm:text-base font-semibold font-sans text-[#0F0F0E]">60m–115m</span>
          </div>
          <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-[#0F0F0E] block pt-0.5">
            VESSEL RANGE
          </span>
          <span className="text-[10px] sm:text-[11px] text-[#6B6B65] block">
            Motor &amp; Explorers
          </span>
        </div>

        <div className="space-y-0.5 border-l border-[#E4E2DC] pl-4 sm:pl-6">
          <div className="flex items-center gap-1.5 text-[#0F0F0E]">
            <Clock className="w-3.5 h-3.5 text-[#0F0F0E]" />
            <span className="text-sm sm:text-base font-semibold font-sans text-[#0F0F0E]">&lt; 1 Hour</span>
          </div>
          <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-[#0F0F0E] block pt-0.5">
            CONCIERGE SLA
          </span>
          <span className="text-[10px] sm:text-[11px] text-[#6B6B65] block">
            Discrete hold response
          </span>
        </div>
      </div>

      {/* Hero Background Image Switcher Boxes - Hidden on Mobile, Bottom Right on Tablet & Desktop */}
      <div className="hidden sm:flex absolute bottom-10 right-6 sm:right-12 lg:right-[5%] z-20 items-center gap-2.5">
        {HERO_SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setActiveSlide(index)}
            className={`group relative w-14 h-10 sm:w-16 sm:h-11 border transition-all duration-300 overflow-hidden ${
              activeSlide === index
                ? "border-[#0F0F0E] ring-1 ring-[#0F0F0E] opacity-100 scale-105"
                : "border-white/80 opacity-60 hover:opacity-100 hover:border-[#0F0F0E]"
            }`}
            aria-label={`Switch hero image to ${slide.title}`}
            title={slide.title}
          >
            <Image
              src={slide.src}
              alt={slide.title}
              fill
              sizes="64px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors" />
            <span className="absolute bottom-0.5 right-1 text-[9px] font-mono font-bold text-white bg-black/50 px-1 leading-tight">
              0{index + 1}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
