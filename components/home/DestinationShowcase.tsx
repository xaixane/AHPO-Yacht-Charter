"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Sparkles } from "lucide-react";
import { DESTINATION_HIGHLIGHTS } from "@/lib/data/homepage";
import { Reveal } from "@/components/motion/Reveal";

const CATEGORIES = [
  { id: "all", label: "ALL DESTINATIONS" },
  { id: "mediterranean", label: "MEDITERRANEAN" },
  { id: "caribbean", label: "CARIBBEAN & BAHAMAS" },
  { id: "exotic", label: "PACIFIC & INDIAN OCEAN" },
  { id: "expedition", label: "POLAR & EXPEDITIONS" },
];

export function DestinationShowcase() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter items based on active tab
  const filteredDestinations = DESTINATION_HIGHLIGHTS.filter((item) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "mediterranean") return item.regionSlug === "mediterranean";
    if (activeCategory === "caribbean") return item.regionSlug === "caribbean" || item.regionSlug === "bahamas";
    if (activeCategory === "exotic") return item.regionSlug === "french-polynesia" || item.regionSlug === "indian-ocean" || item.regionSlug === "middle-east";
    if (activeCategory === "expedition") return item.regionSlug === "nordics-alaska" || item.regionSlug === "polar";
    return true;
  });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredDestinations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredDestinations.length) % filteredDestinations.length);
  };

  const activeDestination = filteredDestinations[currentIndex] || DESTINATION_HIGHLIGHTS[0];

  return (
    <section className="py-24 px-6 sm:px-12 lg:px-[5%] bg-[#F7F6F3] text-[#0F0F0E] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header & Category Navigation */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[#E4E2DC] pb-8">
          <Reveal className="space-y-3 max-w-xl">
            <span className="text-xs uppercase tracking-[0.2em] text-[#6B6B65] font-semibold flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#0F0F0E]" />
              GLOBAL CRUISING GROUNDS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight text-[#0F0F0E]">
              Timeless Places. Tailored Itineraries.
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6B65] leading-relaxed">
              From the iconic harbors of the French Riviera to pristine Antarctic glacial fjords, explore our hand-vetted charter destinations worldwide.
            </p>
          </Reveal>

          {/* Carousel Arrows & Counter */}
          <Reveal className="flex items-center gap-6 self-start lg:self-end" delay={0.1}>
            <div className="text-xs font-mono tracking-widest text-[#6B6B65]">
              <span className="text-[#0F0F0E] font-bold">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>{" "}
              / {String(filteredDestinations.length).padStart(2, "0")}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="p-3 border border-[#0F0F0E] bg-white text-[#0F0F0E] hover:bg-[#0F0F0E] hover:text-white transition-colors aria-label='Previous destination'"
                aria-label="Previous destination"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 border border-[#0F0F0E] bg-white text-[#0F0F0E] hover:bg-[#0F0F0E] hover:text-white transition-colors aria-label='Next destination'"
                aria-label="Next destination"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </Reveal>
        </div>

        {/* Region Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 text-[11px] font-semibold tracking-wider uppercase transition-colors whitespace-nowrap border ${
                activeCategory === cat.id
                  ? "bg-[#0F0F0E] text-white border-[#0F0F0E]"
                  : "bg-white text-[#6B6B65] border-[#E4E2DC] hover:border-[#0F0F0E] hover:text-[#0F0F0E]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Carousel Showcase Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          {/* Main Large Image Box with Stock Photo Badge */}
          <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden border border-[#E4E2DC] bg-[#EFECE6] group">
            <Image
              key={activeDestination.id}
              src={activeDestination.image}
              alt={activeDestination.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-widest font-semibold text-[#0F0F0E] border border-[#E4E2DC] flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#0F0F0E]" />
              <span>{activeDestination.number} • {activeDestination.subtitle.split("•")[0]}</span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 z-10 text-white lg:hidden">
              <h3 className="font-serif text-2xl font-normal">{activeDestination.title}</h3>
              <p className="text-xs text-white/80 line-clamp-1">{activeDestination.subtitle}</p>
            </div>
          </div>

          {/* Destination Specs & Highlights Detail */}
          <div className="lg:col-span-5 space-y-6 lg:pl-4 flex flex-col justify-center">
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-[#6B6B65] uppercase block">
                DESTINATION PROFILE {activeDestination.number}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#0F0F0E]">
                {activeDestination.title}
              </h3>
              <p className="text-xs uppercase tracking-wider text-[#0F0F0E] font-semibold">
                {activeDestination.subtitle}
              </p>
            </div>

            <p className="text-xs text-[#6B6B65] leading-relaxed">
              {activeDestination.description}
            </p>

            {/* Highlights List */}
            <div className="space-y-2 pt-2 border-t border-[#E4E2DC]">
              <span className="text-[10px] uppercase tracking-widest font-semibold text-[#0F0F0E] block">
                SIGNATURE ANCHORAGES &amp; EXPERIENCES
              </span>
              <div className="flex flex-wrap gap-2">
                {activeDestination.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white border border-[#E4E2DC] text-[11px] text-[#0F0F0E] font-medium"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 flex items-center gap-4">
              <Link
                href={`/enquire?region=${encodeURIComponent(activeDestination.title)}`}
                className="px-6 py-3 border border-[#0F0F0E] bg-[#0F0F0E] text-white text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-[#0F0F0E] transition-colors inline-flex items-center gap-2"
              >
                <span>PLAN CHARTER ITINERARY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Thumbnail Track for Quick Jumping */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 pt-6 border-t border-[#E4E2DC]">
          {filteredDestinations.map((dest, idx) => (
            <button
              key={dest.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-2.5 text-left border transition-all ${
                currentIndex === idx
                  ? "bg-white border-[#0F0F0E] shadow-sm"
                  : "bg-transparent border-transparent hover:bg-white/50"
              }`}
            >
              <div className="text-[9px] font-mono text-[#6B6B65]">{dest.number}</div>
              <div className="text-[11px] font-bold text-[#0F0F0E] truncate">{dest.title}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
