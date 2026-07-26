import React from "react";
import Link from "next/link";
import { Compass, ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "404 - Page Not Found",
  description: "The page or vessel you are looking for could not be found.",
});

export default function NotFound() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center bg-white text-[#0F0F0E]">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <div className="w-20 h-20 rounded-full border border-[#E4E2DC] flex items-center justify-center mx-auto text-[#0F0F0E]">
          <Compass className="w-10 h-10" />
        </div>

        <span className="text-xs uppercase tracking-[0.2em] text-[#6B6B65] font-semibold block">
          Error 404
        </span>

        <h1 className="font-sans text-4xl sm:text-5xl font-bold tracking-tight">
          Uncharted Waters
        </h1>

        <p className="text-sm sm:text-base text-[#6B6B65] leading-relaxed">
          The requested page, destination, or vessel listing does not exist or has been relocated. Return to our home fleet or speak with a concierge.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#0F0F0E] bg-[#0F0F0E] text-white text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-[#0F0F0E] transition-colors"
          >
            <span>Return to Homepage</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/yachts"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#E4E2DC] text-[#0F0F0E] text-xs font-semibold uppercase tracking-wider hover:border-[#0F0F0E] transition-colors"
          >
            <span>Explore Fleet</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
