"use client";

import React, { useState, useMemo } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { GlobalCTABanner } from "@/components/ui/GlobalCTABanner";
import { EmptyState } from "@/components/ui/EmptyState";
import { FleetFilterBar } from "@/components/fleet/FleetFilterBar";
import { YachtCard } from "@/components/fleet/YachtCard";
import { YachtQuickViewModal } from "@/components/fleet/YachtQuickViewModal";
import { FleetStatsSummary } from "@/components/fleet/FleetStatsSummary";
import { YACHTS_DATA, YachtFull } from "@/lib/data/yachts";

export default function FleetPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [guestFilter, setGuestFilter] = useState("all");
  const [maxPriceFilter, setMaxPriceFilter] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [quickViewYacht, setQuickViewYacht] = useState<YachtFull | null>(null);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setGuestFilter("all");
    setMaxPriceFilter("all");
    setSortBy("featured");
  };

  const filteredYachts = useMemo(() => {
    return YACHTS_DATA.filter((yacht) => {
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesName = yacht.name.toLowerCase().includes(query);
        const matchesBuilder = yacht.builder.toLowerCase().includes(query);
        const matchesLoc = yacht.location.toLowerCase().includes(query);
        if (!matchesName && !matchesBuilder && !matchesLoc) return false;
      }

      if (selectedCategory !== "all" && yacht.category !== selectedCategory) {
        return false;
      }

      if (guestFilter !== "all") {
        const maxG = parseInt(guestFilter, 10);
        if (maxG === 10 && yacht.guests > 10) return false;
        if (maxG === 12 && yacht.guests !== 12) return false;
        if (maxG === 14 && yacht.guests < 14) return false;
      }

      if (maxPriceFilter !== "all") {
        const maxP = parseInt(maxPriceFilter, 10);
        if (yacht.weeklyRateLow > maxP) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.weeklyRateLow - b.weeklyRateLow;
      if (sortBy === "price-desc") return b.weeklyRateLow - a.weeklyRateLow;
      if (sortBy === "length-desc") return b.lengthMeters - a.lengthMeters;
      if (sortBy === "year-desc") return b.builtYear - a.builtYear;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [searchQuery, selectedCategory, guestFilter, maxPriceFilter, sortBy]);

  return (
    <div className="min-h-screen bg-white text-[#0F0F0E]">
      <PageHeader
        eyebrow="The Charter Fleet"
        title="EXCEPTIONAL BY DESIGN"
        description="Explore our handpicked portfolio of world-class superyachts, motor yachts, sailing vessels, and expedition explorers."
        breadcrumbs={[{ label: "Fleet Overview", href: "/yachts" }]}
      />

      <section className="pb-16 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto">
        <FleetFilterBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          guestFilter={guestFilter}
          setGuestFilter={setGuestFilter}
          maxPriceFilter={maxPriceFilter}
          setMaxPriceFilter={setMaxPriceFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
          onReset={handleResetFilters}
          totalResults={filteredYachts.length}
        />

        {filteredYachts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredYachts.map((yacht) => (
              <YachtCard
                key={yacht.id}
                yacht={yacht}
                onQuickView={(y) => setQuickViewYacht(y)}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No Matching Yachts Found"
            description="We couldn't find any vessels matching your exact search criteria. Please adjust your filters or contact our concierge desk for off-market options."
            onReset={handleResetFilters}
            actionLabel="View All Fleet"
            actionHref="/yachts"
          />
        )}

        <FleetStatsSummary />
      </section>

      <YachtQuickViewModal
        yacht={quickViewYacht}
        onClose={() => setQuickViewYacht(null)}
      />

      <GlobalCTABanner
        title="Looking for Off-Market Superyacht Availability?"
        subtitle="Many of the world's finest superyachts operate under strict non-disclosure terms. Contact our Monaco office for private listings."
      />
    </div>
  );
}
