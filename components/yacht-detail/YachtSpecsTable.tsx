import React from "react";
import { YachtFull } from "@/lib/data/yachts";
import { Anchor, Users } from "lucide-react";

interface YachtSpecsTableProps {
  yacht: YachtFull;
}

export function YachtSpecsTable({ yacht }: YachtSpecsTableProps) {
  const technicalSpecs = [
    { label: "Shipbuilder", value: yacht.builder },
    { label: "Year Built / Refit", value: yacht.refitYear ? `${yacht.builtYear} / ${yacht.refitYear}` : `${yacht.builtYear}` },
    { label: "Length Overall", value: `${yacht.lengthMeters}M (${yacht.lengthFeet}FT)` },
    { label: "Beam", value: yacht.beam },
    { label: "Draft", value: yacht.draft },
    { label: "Gross Tonnage", value: yacht.grossTonnage },
    { label: "Cruising Speed", value: `${yacht.cruisingSpeed} Knots` },
    { label: "Max Speed", value: `${yacht.maxSpeed} Knots` },
    { label: "Range", value: yacht.rangeNauticalMiles },
    { label: "Flag", value: "Cayman Islands" },
  ];

  const accommodationMatrix = [
    { label: "Guest Capacity", value: `${yacht.guests} Guests` },
    { label: "Total Staterooms", value: `${yacht.cabins} Cabins` },
    { label: "Master Suite", value: "1 Full-Beam Duplex Suite" },
    { label: "VIP Staterooms", value: "2 King VIP Cabins" },
    { label: "Guest Cabins", value: "4 Convertible Double/Twin Staterooms" },
    { label: "Professional Crew", value: `${yacht.crew} Dedicated Crew Members` },
  ];

  return (
    <div className="space-y-10">
      {/* Quick Matrix Highlights */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 border border-[#E4E2DC] text-center">
        <div>
          <span className="text-[#6B6B65] block text-[9px] uppercase tracking-widest">LENGTH</span>
          <span className="text-xl font-serif text-[#0F0F0E]">{yacht.lengthMeters}M</span>
        </div>
        <div>
          <span className="text-[#6B6B65] block text-[9px] uppercase tracking-widest">GUESTS</span>
          <span className="text-xl font-serif text-[#0F0F0E]">{yacht.guests}</span>
        </div>
        <div>
          <span className="text-[#6B6B65] block text-[9px] uppercase tracking-widest">CREW</span>
          <span className="text-xl font-serif text-[#0F0F0E]">{yacht.crew}</span>
        </div>
        <div>
          <span className="text-[#6B6B65] block text-[9px] uppercase tracking-widest">SPEED</span>
          <span className="text-xl font-serif text-[#0F0F0E]">{yacht.cruisingSpeed} KTS</span>
        </div>
      </div>

      {/* Side-by-Side Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Technical Specs Table */}
        <div className="p-6 border border-[#E4E2DC] space-y-4">
          <div className="flex items-center gap-2 border-b border-[#E4E2DC] pb-3">
            <Anchor className="w-4 h-4 text-[#0F0F0E]" />
            <h3 className="font-serif text-xl text-[#0F0F0E]">Technical Specifications</h3>
          </div>

          <div className="divide-y divide-[#E4E2DC] text-xs">
            {technicalSpecs.map((spec, i) => (
              <div key={i} className="py-2.5 flex items-center justify-between">
                <span className="text-[#6B6B65]">{spec.label}</span>
                <span className="text-[#0F0F0E] font-semibold text-right">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Accommodation Matrix Table */}
        <div className="p-6 border border-[#E4E2DC] space-y-4">
          <div className="flex items-center gap-2 border-b border-[#E4E2DC] pb-3">
            <Users className="w-4 h-4 text-[#0F0F0E]" />
            <h3 className="font-serif text-xl text-[#0F0F0E]">Guest Accommodation</h3>
          </div>

          <div className="divide-y divide-[#E4E2DC] text-xs">
            {accommodationMatrix.map((item, i) => (
              <div key={i} className="py-2.5 flex items-center justify-between">
                <span className="text-[#6B6B65]">{item.label}</span>
                <span className="text-[#0F0F0E] font-semibold text-right">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
