import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/HERO.png";

export function Hero() {
  return (
    <section className="relative flex items-center min-h-[560px] lg:min-h-[680px] pt-24 pb-16 overflow-hidden bg-white text-[#0F0F0E]">
      {/* Full-bleed vessel photograph, ship anchored right */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Superyacht at anchor off a hazy coastal mountain range"
          fill
          priority
          className="object-cover object-right"
        />
        {/* Solid white through the text column, then a smooth eased fade to fully transparent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_0%,#fff_36%,rgba(255,255,255,0.94)_40%,rgba(255,255,255,0.75)_44%,rgba(255,255,255,0.45)_48%,rgba(255,255,255,0.18)_52%,transparent_57%)]" />
      </div>

      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16">
        <div className="max-w-xl space-y-6">
          <span className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#6B6B65] font-semibold">
            <span className="w-6 h-px bg-[#6B6B65]" />
            The Charter Fleet
          </span>

          <h1 className="font-sans text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
            EXCEPTIONAL
            <br />
            BY DESIGN
          </h1>

          <p className="text-sm sm:text-base text-[#6B6B65] leading-relaxed max-w-md">
            Explore our handpicked portfolio of world-class superyachts, motor yachts, sailing vessels, and expedition explorers.
          </p>

          <Link
            href="/yachts"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#0F0F0E] hover:text-[#6B6B65] transition-colors pt-2"
          >
            <span>Explore the Fleet</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
