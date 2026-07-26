"use client";

import React, { useState, useMemo } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { GlobalCTABanner } from "@/components/ui/GlobalCTABanner";
import { EmptyState } from "@/components/ui/EmptyState";
import { AvailabilitySearchForm } from "@/components/availability/AvailabilitySearchForm";
import { AvailableYachtCard } from "@/components/availability/AvailableYachtCard";
import { YACHTS_DATA } from "@/lib/data/yachts";

export default function AvailabilityPage() {
  const [startDate, setStartDate] = useState("2026-07-15");
  const [endDate, setEndDate] = useState("2026-07-22");
  const [destination, setDestination] = useState("all");
  const [guestCount, setGuestCount] = useState("all");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const matchingYachts = useMemo(() => {
    return YACHTS_DATA.filter((yacht) => {
      // Region filter
      if (destination !== "all" && yacht.region !== destination) {
        return false;
      }
      // Guest filter
      if (guestCount !== "all") {
        const maxG = parseInt(guestCount, 10);
        if (maxG === 10 && yacht.guests > 10) return false;
        if (maxG === 12 && yacht.guests !== 12) return false;
        if (maxG === 14 && yacht.guests < 14) return false;
      }
      return true;
    });
  }, [destination, guestCount]);

  return (
    <div className="min-h-screen bg-white text-[#0F0F0E]">
      <PageHeader
        eyebrow="Live Scheduling & Quotes"
        title="YACHT AVAILABILITY SEARCH"
        description="Select your target charter dates and preferred cruising grounds to view confirmed available superyachts and request instant tailored quotes."
        breadcrumbs={[
          { label: "Fleet", href: "/yachts" },
          { label: "Availability", href: "/yachts/availability" },
        ]}
      />

      <section className="py-12 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto space-y-12">
        {/* Availability Search Bar */}
        <AvailabilitySearchForm
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          destination={destination}
          setDestination={setDestination}
          guestCount={guestCount}
          setGuestCount={setGuestCount}
          onSearch={handleSearch}
        />

        {/* Available Matching Yachts */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E4E2DC] pb-4">
            <span className="text-xs uppercase tracking-widest text-[#6B6B65] font-semibold">
              Available Charter Vessels ({matchingYachts.length})
            </span>
            <span className="text-xs text-[#6B6B65]">
              Dates: {startDate} to {endDate}
            </span>
          </div>

          {matchingYachts.length > 0 ? (
            <div className="space-y-6">
              {matchingYachts.map((yacht) => (
                <AvailableYachtCard key={yacht.id} yacht={yacht} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No Open Vessels Found for Selected Dates"
              description="Our global fleet availability changes daily. Please adjust your date range or speak with a charter broker for private off-market listings."
              onReset={() => {
                setDestination("all");
                setGuestCount("all");
              }}
              actionLabel="View Entire Fleet"
              actionHref="/yachts"
            />
          )}
        </div>
      </section>

      <GlobalCTABanner
        title="Need Off-Market Charter Dates?"
        subtitle="Our Monaco concierge team holds exclusive calendar access to vessels not published online."
      />
    </div>
  );
}
