import React from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

interface GlobalCTABannerProps {
  title?: string;
  subtitle?: string;
}

export function GlobalCTABanner({
  title = "Looking for Off-Market Superyacht Availability?",
  subtitle = "Many of the world's finest superyachts operate under strict non-disclosure terms. Contact our Monaco office for private listings.",
}: GlobalCTABannerProps) {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-16 border-t border-[#E4E2DC] bg-white text-[#0F0F0E]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="max-w-2xl text-center lg:text-left">
          <span className="text-xs uppercase tracking-[0.2em] text-[#6B6B65] font-semibold block mb-3">
            Bespoke Concierge
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-4 uppercase">
            {title}
          </h2>
          <p className="text-sm leading-relaxed text-[#6B6B65]">{subtitle}</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
          <Link
            href="/enquire"
            className="inline-flex items-center gap-3 px-6 py-3.5 border border-[#0F0F0E] bg-[#0F0F0E] text-white font-semibold text-xs tracking-widest uppercase hover:bg-white hover:text-[#0F0F0E] transition-colors"
          >
            <span>Start Charter Inquiry</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-widest uppercase border border-[#E4E2DC] text-[#0F0F0E] hover:border-[#0F0F0E] transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Speak to a Broker</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
