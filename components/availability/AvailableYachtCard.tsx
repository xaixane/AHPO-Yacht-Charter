"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { YachtFull } from "@/lib/data/yachts";

interface AvailableYachtCardProps {
  yacht: YachtFull;
}

export function AvailableYachtCard({ yacht }: AvailableYachtCardProps) {
  return (
    <div className="group border border-[#E4E2DC] flex flex-col md:flex-row items-stretch">
      {/* Image Viewport */}
      <div className="relative w-full md:w-80 min-h-[220px] bg-[#F7F6F3] flex-shrink-0">
        <Image src={yacht.image} alt={yacht.name} fill className="object-cover" />
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-white text-[#0F0F0E] text-[10px] tracking-widest uppercase border border-[#E4E2DC] flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            <span>CONFIRMED OPEN</span>
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 flex-grow space-y-4 flex flex-col justify-between text-[#0F0F0E]">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[11px] text-[#6B6B65]">
            <span>{yacht.builder} • {yacht.lengthMeters}M ({yacht.lengthFeet}FT)</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {yacht.location}
            </span>
          </div>

          <h3 className="font-sans text-xl font-bold tracking-tight uppercase">{yacht.name}</h3>

          <p className="text-xs text-[#6B6B65] leading-relaxed">{yacht.description}</p>

          <div className="flex flex-wrap gap-2 pt-1">
            {yacht.amenities.slice(0, 4).map((a, i) => (
              <span key={i} className="px-2.5 py-0.5 border border-[#E4E2DC] text-[10px] text-[#6B6B65]">
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* Action Row */}
        <div className="pt-4 border-t border-[#E4E2DC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-[9px] uppercase tracking-wider text-[#6B6B65] block">
              Weekly Charter Rate From
            </span>
            <span className="font-serif text-2xl font-bold text-[#0F0F0E]">
              {yacht.currency}{yacht.weeklyRateLow.toLocaleString()}
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              href={`/yachts/${yacht.slug}`}
              className="px-4 py-2.5 border border-[#E4E2DC] text-[#0F0F0E] text-xs font-semibold uppercase tracking-wider hover:border-[#0F0F0E] transition-colors"
            >
              Full Specs
            </Link>
            <Link
              href={`/enquire?yacht=${encodeURIComponent(yacht.name)}`}
              className="px-6 py-2.5 border border-[#0F0F0E] bg-[#0F0F0E] text-white text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-[#0F0F0E] transition-colors flex items-center justify-center gap-2"
            >
              <span>Get Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
