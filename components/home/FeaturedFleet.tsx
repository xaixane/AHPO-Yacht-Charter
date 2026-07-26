import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FEATURED_YACHTS } from "@/lib/data/homepage";

const SPOTLIGHT = FEATURED_YACHTS.slice(0, 2);

export function FeaturedFleet() {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-16 bg-white text-[#0F0F0E]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Left Intro Column */}
          <div className="lg:col-span-3 space-y-5">
            <span className="text-xs uppercase tracking-[0.2em] text-[#6B6B65] font-semibold block">
              The Fleet
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl leading-snug">
              Yachts defined by design and crafted for freedom.
            </h2>
            <Link
              href="/yachts"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#0F0F0E] hover:text-[#6B6B65] transition-colors"
            >
              <span>View All Yachts</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Spotlight Rows */}
          <div className="lg:col-span-9 space-y-16">
            {SPOTLIGHT.map((yacht, idx) => {
              const reversed = idx % 2 === 1;
              return (
                <div
                  key={yacht.id}
                  className={`flex flex-col ${
                    reversed ? "md:flex-row-reverse" : "md:flex-row"
                  } items-center gap-8 md:gap-12`}
                >
                  <div className={`relative w-full ${reversed ? "md:w-[62%]" : "md:w-[46%]"} aspect-[3/2]`}>
                    <Image src={yacht.image} alt={yacht.name} fill className="object-cover" />
                  </div>
                  <div className={`w-full ${reversed ? "md:w-[38%]" : "md:w-[54%]"} space-y-2`}>
                    <span className="text-xs font-semibold text-[#6B6B65] block">
                      0{idx + 1}
                    </span>
                    <h3 className="font-sans text-2xl font-bold tracking-tight uppercase">
                      {yacht.name}
                    </h3>
                    <p className="text-xs text-[#6B6B65] uppercase tracking-wide">
                      {yacht.length} / {yacht.guests} Guests
                    </p>
                    <p className="text-xs text-[#6B6B65] uppercase tracking-wide">
                      {yacht.location.split("•")[1]?.trim() || yacht.location}
                    </p>
                    <Link
                      href={`/yachts/${yacht.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#0F0F0E] hover:text-[#6B6B65] transition-colors pt-2"
                    >
                      <span>Discover</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
