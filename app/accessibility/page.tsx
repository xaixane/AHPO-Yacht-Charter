import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { GlobalCTABanner } from "@/components/ui/GlobalCTABanner";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Digital Accessibility Statement",
  description: "VELANTIS Yachts is committed to digital accessibility adhering to WCAG 2.2 AA standards across all user interfaces.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-white text-[#0F0F0E]">
      <PageHeader
        eyebrow="Inclusive Design"
        title="Accessibility Statement"
        description="Our commitment to delivering an accessible digital experience for all guests, adhering to WCAG 2.2 AA standards."
        breadcrumbs={[{ label: "Accessibility", href: "/accessibility" }]}
      />

      <section className="py-20 px-6 sm:px-12 lg:px-16 max-w-4xl mx-auto space-y-12">
        <div className="prose max-w-none text-[#6B6B65] space-y-6 text-sm sm:text-base">
          <h2 className="font-sans text-2xl font-bold text-[#0F0F0E] border-b border-[#E4E2DC] pb-3">1. WCAG 2.2 AA Compliance</h2>
          <p>
            VELANTIS Yachts actively designs, tests, and refines digital interfaces to ensure compliance with World Wide Web Consortium (W3C) Web Content Accessibility Guidelines (WCAG) 2.2 Level AA.
          </p>

          <h2 className="font-sans text-2xl font-bold text-[#0F0F0E] border-b border-[#E4E2DC] pb-3">2. Features & Keyboard Navigation</h2>
          <p>
            Our web platform supports full keyboard navigation, screen reader ARIA landmarks, explicit form labeling, high-contrast color ratios, and resizable typography.
          </p>
        </div>
      </section>

      <GlobalCTABanner />
    </div>
  );
}
