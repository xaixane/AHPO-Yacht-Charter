"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { GlobalCTABanner } from "@/components/ui/GlobalCTABanner";
import { CompareMatrixTable } from "@/components/compare/CompareMatrixTable";
import { YACHTS_DATA, YachtFull } from "@/lib/data/yachts";

export default function ComparePage() {
  const [selectedYachts, setSelectedYachts] = useState<(YachtFull | null)[]>([
    YACHTS_DATA[0],
    YACHTS_DATA[1],
    YACHTS_DATA[3],
  ]);

  const handleSelectYacht = (index: number, yachtId: string) => {
    const found = YACHTS_DATA.find((y) => y.id === yachtId) || null;
    setSelectedYachts((prev) => {
      const updated = [...prev];
      updated[index] = found;
      return updated;
    });
  };

  const handleRemoveYacht = (index: number) => {
    setSelectedYachts((prev) => {
      const updated = [...prev];
      updated[index] = null;
      return updated;
    });
  };

  return (
    <div className="min-h-screen bg-white text-[#0F0F0E]">
      <PageHeader
        eyebrow="Fleet Comparison Matrix"
        title="SUPERYACHT SPECIFICATION COMPARISON"
        description="Compare dimensions, crew ratios, weekly charter rates, and luxury amenities side-by-side to select the perfect vessel for your journey."
        breadcrumbs={[
          { label: "Fleet", href: "/yachts" },
          { label: "Compare", href: "/yachts/compare" },
        ]}
      />

      <section className="py-12 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto space-y-12">
        <CompareMatrixTable
          selectedYachts={selectedYachts.filter((y): y is YachtFull => y !== null)}
          onSelectYacht={handleSelectYacht}
          onRemoveYacht={handleRemoveYacht}
        />
      </section>

      <GlobalCTABanner
        title="Require Custom Fleet Proposals?"
        subtitle="Our charter advisors can compile confidential comparative decks with off-market vessels."
      />
    </div>
  );
}
