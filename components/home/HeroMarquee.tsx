"use client";

import React from "react";
import { Anchor, ShieldCheck, Compass, Sparkles, Utensils, Award, Waves } from "lucide-react";

const MARQUEE_ITEMS = [
  { icon: Anchor, label: "MONACO GRAND PRIX & CANNES CHARTERS OPEN" },
  { icon: ShieldCheck, label: "MYBA 48-HOUR PRIORITY RESERVATION HOLD" },
  { icon: Compass, label: "MEDITERRANEAN & CARIBBEAN SEASONAL ITINERARIES" },
  { icon: Sparkles, label: "DISCREET MONACO CONCIERGE & FULL NDA PROTECTION" },
  { icon: Utensils, label: "MICHELIN-STARRED ONBOARD GASTRONOMY & PRIVATE CHEFS" },
  { icon: Award, label: "100% HAND-VETTED LUXURY SUPERYACHT FLEET" },
  { icon: Waves, label: "DEEP-SEA EXPLORER & HELIPAD FLEET READY" },
];

export function HeroMarquee() {
  // Duplicate array twice to guarantee a smooth, gapless infinite loop
  const duplicatedItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="w-full bg-[#0F0F0E] text-white py-4 overflow-hidden border-y border-[#0F0F0E] relative z-20">
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {duplicatedItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="inline-flex items-center gap-3 px-8 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 hover:text-white transition-colors cursor-default select-none"
            >
              <Icon className="w-4 h-4 text-white/70 flex-shrink-0" />
              <span>{item.label}</span>
              <span className="ml-8 text-white/30 text-[10px]">✦</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
