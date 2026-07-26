import React from "react";
import Image from "next/image";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { GlobalCTABanner } from "@/components/ui/GlobalCTABanner";
import { CompanyPillars } from "@/components/about/CompanyPillars";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About AHPO Yachts",
  description: "AHPO Yachts is the premier global superyacht charter, sales, and management firm headquartered in Monaco.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#0F0F0E]">
      <section className="relative pt-32 pb-16 px-6 sm:px-12 lg:px-16">
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[42%] hidden md:block">
          <Image
            src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1400&q=80"
            alt="Superyacht bow at sea"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-xl">
            <div className="mb-6">
              <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
            </div>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#6B6B65] mb-3">
              Firm Overview
            </span>
            <h1 className="font-sans text-4xl sm:text-5xl font-bold tracking-tight leading-[0.95] mb-6">
              REDEFINING
              <br />
              OCEANIC LUXURY
            </h1>
            <p className="text-sm sm:text-base text-[#6B6B65] leading-relaxed max-w-md">
              Founded on the principles of uncompromised discretion, maritime mastery, and personalized service.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#6B6B65] font-semibold block">
            OUR HERITAGE
          </span>
          <h2 className="font-sans text-3xl font-bold tracking-tight uppercase">THE AHPO LEGACY</h2>
          <p className="text-sm text-[#6B6B65] leading-relaxed">
            Headquartered in Monaco with advisory desks in Miami and Singapore, AHPO Yachts manages charter representation for world-class superyachts built by Lürssen, Feadship, Benetti, and Oceanco.
          </p>
        </div>

        <CompanyPillars />
      </section>

      <GlobalCTABanner
        title="Ready to Experience AHPO Yachting?"
        subtitle="Contact our senior charter advisors to discuss custom vessel options and private itineraries."
      />
    </div>
  );
}
