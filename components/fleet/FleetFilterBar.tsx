"use client";

import React from "react";
import { Search, SlidersHorizontal, RotateCcw, ChevronDown } from "lucide-react";

interface FleetFilterBarProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  selectedCategory: string;
  setSelectedCategory: (val: string) => void;
  guestFilter: string;
  setGuestFilter: (val: string) => void;
  maxPriceFilter: string;
  setMaxPriceFilter: (val: string) => void;
  sortBy: string;
  setSortBy: (val: string) => void;
  onReset: () => void;
  totalResults: number;
}

export function FleetFilterBar({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  guestFilter,
  setGuestFilter,
  maxPriceFilter,
  setMaxPriceFilter,
  sortBy,
  setSortBy,
  onReset,
  totalResults,
}: FleetFilterBarProps) {
  const categories = [
    { id: "all", label: "All Fleet" },
    { id: "superyacht", label: "Superyachts" },
    { id: "motor-yacht", label: "Motor Yachts" },
    { id: "sailing-yacht", label: "Sailing Vessels" },
    { id: "explorer", label: "Explorers" },
  ];

  const selectClass =
    "appearance-none bg-white border border-[#E4E2DC] px-4 py-2 pr-8 text-xs text-[#0F0F0E] focus:outline-none focus:border-[#0F0F0E]";

  return (
    <div className="space-y-4 py-8 border-b border-[#E4E2DC] mb-10">
      {/* Category Tabs & Search */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        <div className="flex items-center gap-6 overflow-x-auto scrollbar-none border-b border-[#E4E2DC] lg:border-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`pb-3 lg:pb-0 text-xs font-semibold tracking-wider uppercase transition-colors flex-shrink-0 border-b-2 ${
                selectedCategory === cat.id
                  ? "text-[#0F0F0E] border-[#0F0F0E]"
                  : "text-[#6B6B65] border-transparent hover:text-[#0F0F0E]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative w-full lg:w-80">
          <Search className="w-4 h-4 text-[#6B6B65] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by vessel, builder or port..."
            className="w-full pl-10 pr-4 py-2.5 border border-[#E4E2DC] text-xs text-[#0F0F0E] placeholder-[#6B6B65] focus:outline-none focus:border-[#0F0F0E] transition-colors"
          />
        </div>
      </div>

      {/* Secondary Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs pt-2">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 text-[#6B6B65] font-semibold uppercase tracking-wider text-[11px]">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filter By:</span>
          </div>

          <div className="relative">
            <select value={guestFilter} onChange={(e) => setGuestFilter(e.target.value)} className={selectClass}>
              <option value="all">Guests: Any Party Size</option>
              <option value="10">Up to 10 Guests</option>
              <option value="12">12 Guests</option>
              <option value="14">14+ Guests</option>
            </select>
            <ChevronDown className="w-3 h-3 text-[#6B6B65] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          <div className="relative">
            <select value={maxPriceFilter} onChange={(e) => setMaxPriceFilter(e.target.value)} className={selectClass}>
              <option value="all">Rate: Any Budget</option>
              <option value="500000">Under €500k / wk</option>
              <option value="800000">Under €800k / wk</option>
              <option value="1000000">Under €1M / wk</option>
            </select>
            <ChevronDown className="w-3 h-3 text-[#6B6B65] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          <div className="relative">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className={selectClass}>
              <option value="featured">Sort: Featured First</option>
              <option value="price-asc">Rate: Low to High</option>
              <option value="price-desc">Rate: High to Low</option>
              <option value="length-desc">Length: Longest First</option>
              <option value="year-desc">Newest Built Year</option>
            </select>
            <ChevronDown className="w-3 h-3 text-[#6B6B65] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {(searchQuery || selectedCategory !== "all" || guestFilter !== "all" || maxPriceFilter !== "all") && (
            <button
              onClick={onReset}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#0F0F0E] hover:underline"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>

        <span className="text-[#6B6B65] text-[11px]">
          {totalResults} {totalResults === 1 ? "Vessel" : "Vessels"} Found
        </span>
      </div>
    </div>
  );
}
