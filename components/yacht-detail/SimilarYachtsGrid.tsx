import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { YACHTS_DATA } from "@/lib/data/yachts";

interface SimilarYachtsGridProps {
  currentSlug: string;
}

export function SimilarYachtsGrid({ currentSlug }: SimilarYachtsGridProps) {
  const similar = YACHTS_DATA.filter((y) => y.slug !== currentSlug).slice(0, 3);

  return (
    <div className="space-y-8 pt-12 border-t border-[#E4E2DC]">
      <div className="flex items-end justify-between">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#6B6B65] font-semibold block">
            Fleet Alternatives
          </span>
          <h3 className="font-sans text-2xl font-bold tracking-tight uppercase">Similar Superyachts</h3>
        </div>

        <Link
          href="/yachts"
          className="text-xs font-semibold uppercase tracking-widest text-[#0F0F0E] hover:underline flex items-center gap-1"
        >
          <span>View All Fleet</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {similar.map((yacht) => (
          <Link key={yacht.id} href={`/yachts/${yacht.slug}`} className="group block space-y-3">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#F7F6F3]">
              <Image src={yacht.image} alt={yacht.name} fill className="object-cover" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-[#6B6B65] block">{yacht.builder} • {yacht.lengthMeters}M</span>
              <h4 className="font-sans text-lg font-bold tracking-tight uppercase">{yacht.name}</h4>
              <div className="flex items-center justify-between text-xs pt-1 border-t border-[#E4E2DC]">
                <span className="text-[#6B6B65]">{yacht.guests} Guests</span>
                <span className="font-semibold text-[#0F0F0E]">{yacht.currency}{yacht.weeklyRateLow.toLocaleString()} / wk</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
