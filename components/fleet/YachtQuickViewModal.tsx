"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { YachtFull } from "@/lib/data/yachts";

interface YachtQuickViewModalProps {
  yacht: YachtFull | null;
  onClose: () => void;
}

export function YachtQuickViewModal({ yacht, onClose }: YachtQuickViewModalProps) {
  if (!yacht) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white border border-[#E4E2DC] overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 bg-white text-[#0F0F0E] flex items-center justify-center border border-[#E4E2DC] hover:border-[#0F0F0E] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative min-h-[250px] md:min-h-full bg-[#F7F6F3]">
            <Image src={yacht.image} alt={yacht.name} fill className="object-cover" />
            <div className="absolute bottom-4 left-4 z-10">
              <span className="text-[10px] uppercase tracking-widest text-white bg-black/50 px-2 py-1 block w-fit mb-1">
                {yacht.builder} • {yacht.builtYear}
              </span>
            </div>
          </div>

          <div className="p-6 space-y-6 text-[#0F0F0E]">
            <div className="space-y-1">
              <h3 className="font-sans text-2xl font-bold tracking-tight uppercase">{yacht.name}</h3>
              <p className="text-xs text-[#6B6B65] leading-relaxed">{yacht.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 p-3 border border-[#E4E2DC] text-xs">
              <div>
                <span className="text-[#6B6B65] block text-[9px] uppercase">Length</span>
                <span className="font-semibold">{yacht.lengthMeters}M / {yacht.lengthFeet}FT</span>
              </div>
              <div>
                <span className="text-[#6B6B65] block text-[9px] uppercase">Beam</span>
                <span className="font-semibold">{yacht.beam}</span>
              </div>
              <div>
                <span className="text-[#6B6B65] block text-[9px] uppercase">Draft</span>
                <span className="font-semibold">{yacht.draft}</span>
              </div>
              <div>
                <span className="text-[#6B6B65] block text-[9px] uppercase">Speed</span>
                <span className="font-semibold">{yacht.cruisingSpeed} Knots</span>
              </div>
              <div>
                <span className="text-[#6B6B65] block text-[9px] uppercase">Cabins</span>
                <span className="font-semibold">{yacht.cabins} Staterooms</span>
              </div>
              <div>
                <span className="text-[#6B6B65] block text-[9px] uppercase">Crew</span>
                <span className="font-semibold">{yacht.crew} Crew Members</span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] uppercase font-semibold text-[#6B6B65] block">Featured Amenities</span>
              <div className="flex flex-wrap gap-1.5">
                {yacht.amenities.map((a, i) => (
                  <span key={i} className="px-2.5 py-1 border border-[#E4E2DC] text-[10px] text-[#6B6B65]">
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <Link
                href={`/yachts/${yacht.slug}`}
                onClick={onClose}
                className="flex-1 py-3 px-4 border border-[#0F0F0E] bg-[#0F0F0E] text-white text-xs font-semibold uppercase tracking-widest text-center hover:bg-white hover:text-[#0F0F0E] transition-colors"
              >
                View Full Page
              </Link>
              <Link
                href={`/enquire?yacht=${encodeURIComponent(yacht.name)}`}
                onClick={onClose}
                className="py-3 px-4 border border-[#E4E2DC] text-[#0F0F0E] text-xs font-semibold uppercase tracking-widest hover:border-[#0F0F0E] transition-colors"
              >
                Enquire
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
