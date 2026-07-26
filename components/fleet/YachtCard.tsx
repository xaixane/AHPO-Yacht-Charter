"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye } from "lucide-react";
import { YachtFull } from "@/lib/data/yachts";

interface YachtCardProps {
  yacht: YachtFull;
  onQuickView: (yacht: YachtFull) => void;
}

export function YachtCard({ yacht, onQuickView }: YachtCardProps) {
  return (
    <Link href={`/yachts/${yacht.slug}`} className="group block space-y-3">
      <div className="relative aspect-[3/2] overflow-hidden bg-[#F7F6F3]">
        <Image
          src={yacht.image}
          alt={yacht.name}
          fill
          className="object-cover"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            onQuickView(yacht);
          }}
          className="absolute bottom-3 right-3 z-10 p-2 bg-white/90 text-[#0F0F0E] hover:bg-[#0F0F0E] hover:text-white transition-colors"
          title="Quick Specs View"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-1">
        <span className="text-[10px] uppercase tracking-widest text-[#6B6B65] font-semibold block">
          {yacht.categoryLabel}
        </span>
        <h3 className="font-sans text-lg font-bold tracking-tight uppercase">{yacht.name}</h3>
        <p className="text-xs text-[#6B6B65]">
          {yacht.builder} • {yacht.builtYear} • {yacht.location.split("•")[1]?.trim() || yacht.location}
        </p>
        <p className="text-xs text-[#6B6B65] flex items-center gap-3 pt-1">
          <span>{yacht.lengthMeters}M / {yacht.lengthFeet}FT</span>
          <span>{yacht.guests} Guests</span>
          <span>{yacht.crew} Crew</span>
        </p>
      </div>
    </Link>
  );
}
