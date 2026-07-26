import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Inquiry Received | Thank You",
  description: "Thank you for submitting your private charter inquiry with AHPO Yachts. Our senior brokers will contact you shortly.",
  path: "/thank-you",
});

export default function ThankYouPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center bg-white text-[#0F0F0E]">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <div className="w-20 h-20 rounded-full border border-[#E4E2DC] flex items-center justify-center mx-auto text-[#0F0F0E]">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <span className="text-xs uppercase tracking-[0.2em] text-[#6B6B65] font-semibold block">
          Inquiry Confirmation
        </span>

        <h1 className="font-sans text-4xl sm:text-5xl font-bold tracking-tight">
          Your Request Has Been Received
        </h1>

        <p className="text-sm sm:text-base text-[#6B6B65] leading-relaxed">
          Thank you for choosing AHPO Yachts. A dedicated senior charter broker has been assigned to your request and will provide curated vessel options within 2 hours.
        </p>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/yachts"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#0F0F0E] bg-[#0F0F0E] text-white text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-[#0F0F0E] transition-colors"
          >
            <span>Explore Superyacht Fleet</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#E4E2DC] text-[#0F0F0E] text-xs font-semibold uppercase tracking-wider hover:border-[#0F0F0E] transition-colors"
          >
            <span>Contact Concierge</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
