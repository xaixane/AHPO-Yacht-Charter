"use client";

import React from "react";
import { Calendar, MapPin, Users, Search } from "lucide-react";

interface AvailabilitySearchFormProps {
  startDate: string;
  setStartDate: (val: string) => void;
  endDate: string;
  setEndDate: (val: string) => void;
  destination: string;
  setDestination: (val: string) => void;
  guestCount: string;
  setGuestCount: (val: string) => void;
  onSearch: (e: React.FormEvent) => void;
}

export function AvailabilitySearchForm({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  destination,
  setDestination,
  guestCount,
  setGuestCount,
  onSearch,
}: AvailabilitySearchFormProps) {
  const inputClass =
    "w-full px-3 py-2.5 border border-[#E4E2DC] text-xs text-[#0F0F0E] focus:outline-none focus:border-[#0F0F0E] bg-white";
  const labelClass = "text-[10px] uppercase font-semibold tracking-widest text-[#6B6B65] flex items-center gap-1.5";

  return (
    <form onSubmit={onSearch} className="p-6 border border-[#E4E2DC] space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Destination */}
        <div className="space-y-1.5">
          <label className={labelClass}>
            <MapPin className="w-3.5 h-3.5" />
            <span>Destination Region</span>
          </label>
          <select value={destination} onChange={(e) => setDestination(e.target.value)} className={inputClass}>
            <option value="all">All Cruising Grounds</option>
            <option value="mediterranean">Mediterranean (Monaco, Amalfi, Balearics)</option>
            <option value="caribbean">Caribbean &amp; Bahamas (Exumas, St. Barths)</option>
            <option value="global">Global &amp; Polar Explorers</option>
          </select>
        </div>

        {/* Start Date */}
        <div className="space-y-1.5">
          <label className={labelClass}>
            <Calendar className="w-3.5 h-3.5" />
            <span>Charter Start Date</span>
          </label>
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className={inputClass} />
        </div>

        {/* End Date */}
        <div className="space-y-1.5">
          <label className={labelClass}>
            <Calendar className="w-3.5 h-3.5" />
            <span>Charter End Date</span>
          </label>
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className={inputClass} />
        </div>

        {/* Guest Party Size */}
        <div className="space-y-1.5">
          <label className={labelClass}>
            <Users className="w-3.5 h-3.5" />
            <span>Guest Party Size</span>
          </label>
          <select value={guestCount} onChange={(e) => setGuestCount(e.target.value)} className={inputClass}>
            <option value="all">Any Guest Count</option>
            <option value="10">Up to 10 Guests</option>
            <option value="12">12 Guests</option>
            <option value="14">14+ Guests</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="submit"
          className="px-8 py-3.5 border border-[#0F0F0E] bg-[#0F0F0E] text-white text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-[#0F0F0E] transition-colors inline-flex items-center gap-2"
        >
          <Search className="w-4 h-4" />
          <span>Search Available Yachts</span>
        </button>
      </div>
    </form>
  );
}
