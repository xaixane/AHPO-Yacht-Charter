import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { DESTINATION_HIGHLIGHTS } from "@/lib/data/homepage";

const FEATURED_DESTINATION = DESTINATION_HIGHLIGHTS[0];

export function DestinationShowcase() {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-[5%] bg-[#F7F6F3] text-[#0F0F0E]">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Intro Column */}
          <div className="lg:col-span-3 space-y-5">
            <span className="text-xs uppercase tracking-[0.2em] text-[#6B6B65] font-semibold block">
              Destinations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl leading-snug">
              Timeless places. Tailored experiences.
            </h2>
            <Link
              href="/yachts/availability"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#0F0F0E] hover:text-[#6B6B65] transition-colors"
            >
              <span>Explore Destinations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Center Photography */}
          <div className="lg:col-span-6 relative aspect-[3/2] w-full overflow-hidden">
            <Image
              src={FEATURED_DESTINATION.image}
              alt={FEATURED_DESTINATION.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Right Detail Column */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-sans text-xl font-bold tracking-tight uppercase">
              {FEATURED_DESTINATION.title}
            </h3>
            <p className="text-xs text-[#6B6B65] leading-relaxed">
              {FEATURED_DESTINATION.description}
            </p>
            <Link
              href={`/enquire?region=${encodeURIComponent(FEATURED_DESTINATION.title)}`}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#0F0F0E] hover:text-[#6B6B65] transition-colors pt-1"
            >
              <span>Discover</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
