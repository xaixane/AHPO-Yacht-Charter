import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FEATURED_JOURNAL_POSTS } from "@/lib/data/homepage";

export function JournalFeatured() {
  const [feature, secondary] = FEATURED_JOURNAL_POSTS;

  return (
    <section className="py-24 px-6 sm:px-12 lg:px-[5%] bg-white text-[#0F0F0E]">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Left Intro Column */}
          <div className="lg:col-span-3 space-y-5">
            <span className="text-xs uppercase tracking-[0.2em] text-[#6B6B65] font-semibold block">
              Journal
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl leading-snug">
              Stories from the sea.
            </h2>
            <Link
              href="/yachts"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#0F0F0E] hover:text-[#6B6B65] transition-colors"
            >
              <span>Explore Journal</span>
              <span aria-hidden>→</span>
            </Link>
          </div>

          {/* Feature Article */}
          {feature && (
            <div className="lg:col-span-5 space-y-3">
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image src={feature.image} alt={feature.title} fill className="object-cover" />
              </div>
              <span className="text-xs text-[#6B6B65] block">{feature.date}</span>
              <h3 className="font-sans text-lg font-bold tracking-tight">{feature.title}</h3>
              <Link
                href={`/journal/${feature.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#0F0F0E]"
              >
                Read More <span aria-hidden>→</span>
              </Link>
            </div>
          )}

          {/* Secondary Stacked Articles */}
          {secondary && (
            <div className="lg:col-span-4 space-y-3">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image src={secondary.image} alt={secondary.title} fill className="object-cover" />
              </div>
              <span className="text-xs text-[#6B6B65] block">{secondary.date}</span>
              <h3 className="font-sans text-base font-bold tracking-tight">{secondary.title}</h3>
              <Link
                href={`/journal/${secondary.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#0F0F0E]"
              >
                Read More <span aria-hidden>→</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
