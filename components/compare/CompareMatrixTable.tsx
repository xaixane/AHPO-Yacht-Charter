"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Check, Minus } from "lucide-react";
import { YachtFull, YACHTS_DATA } from "@/lib/data/yachts";

interface CompareMatrixTableProps {
  selectedYachts: YachtFull[];
  onSelectYacht: (index: number, yachtId: string) => void;
  onRemoveYacht: (index: number) => void;
}

export function CompareMatrixTable({
  selectedYachts,
  onSelectYacht,
  onRemoveYacht,
}: CompareMatrixTableProps) {
  const specsRows = [
    { label: "Shipbuilder", getValue: (y: YachtFull) => y.builder },
    { label: "Year Built / Refit", getValue: (y: YachtFull) => y.refitYear ? `${y.builtYear} / ${y.refitYear}` : `${y.builtYear}` },
    { label: "Length Overall", getValue: (y: YachtFull) => `${y.lengthMeters}M (${y.lengthFeet}FT)` },
    { label: "Beam", getValue: (y: YachtFull) => y.beam },
    { label: "Draft", getValue: (y: YachtFull) => y.draft },
    { label: "Gross Tonnage", getValue: (y: YachtFull) => y.grossTonnage },
    { label: "Cruising Speed", getValue: (y: YachtFull) => `${y.cruisingSpeed} Knots` },
    { label: "Guest Capacity", getValue: (y: YachtFull) => `${y.guests} Guests` },
    { label: "Staterooms", getValue: (y: YachtFull) => `${y.cabins} Cabins` },
    { label: "Crew Members", getValue: (y: YachtFull) => `${y.crew} Crew` },
    { label: "Guest-to-Crew Ratio", getValue: (y: YachtFull) => `1 : ${(y.crew / y.guests).toFixed(1)}` },
    { label: "Weekly Rate (Low)", getValue: (y: YachtFull) => `${y.currency}${y.weeklyRateLow.toLocaleString()}` },
    { label: "Weekly Rate (High)", getValue: (y: YachtFull) => `${y.currency}${y.weeklyRateHigh.toLocaleString()}` },
    { label: "Estimated APA (30%)", getValue: (y: YachtFull) => `${y.currency}${Math.round(y.weeklyRateLow * 0.3).toLocaleString()}` },
    { label: "Helipad", getValue: (y: YachtFull) => y.amenities.some(a => a.toLowerCase().includes("helipad")) },
    { label: "Swimming Pool", getValue: (y: YachtFull) => y.amenities.some(a => a.toLowerCase().includes("pool")) },
    { label: "Wellness Spa / Sauna", getValue: (y: YachtFull) => y.amenities.some(a => a.toLowerCase().includes("spa") || a.toLowerCase().includes("sauna")) },
    { label: "Submersible / Toys", getValue: (y: YachtFull) => y.waterToys.length > 3 },
  ];

  return (
    <div className="overflow-x-auto border border-[#E4E2DC]">
      <table className="w-full text-left border-collapse min-w-[700px]">
        <thead>
          <tr className="border-b border-[#E4E2DC] bg-[#F7F6F3]">
            <th className="p-4 w-52 text-xs uppercase text-[#6B6B65]">Vessel Comparison</th>
            {[0, 1, 2].map((slotIdx) => {
              const yacht = selectedYachts[slotIdx];
              return (
                <th key={slotIdx} className="p-4 w-72 border-l border-[#E4E2DC] align-top">
                  {yacht ? (
                    <div className="space-y-3">
                      <div className="relative aspect-[16/10] overflow-hidden bg-white border border-[#E4E2DC]">
                        <Image src={yacht.image} alt={yacht.name} fill className="object-cover" />
                        <button
                          onClick={() => onRemoveYacht(slotIdx)}
                          className="absolute top-2 right-2 p-1.5 bg-white text-[#0F0F0E] hover:bg-[#0F0F0E] hover:text-white transition-colors"
                          title="Remove from comparison"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div>
                        <span className="text-[10px] text-[#6B6B65] block">{yacht.builder}</span>
                        <h4 className="font-serif text-xl text-[#0F0F0E]">{yacht.name}</h4>
                        <span className="font-semibold text-sm text-[#0F0F0E] block mt-1">
                          {yacht.currency}{yacht.weeklyRateLow.toLocaleString()} / wk
                        </span>
                      </div>

                      <Link
                        href={`/enquire?yacht=${encodeURIComponent(yacht.name)}`}
                        className="w-full py-2 px-3 border border-[#0F0F0E] bg-[#0F0F0E] text-white text-[11px] font-semibold uppercase tracking-widest text-center block hover:bg-white hover:text-[#0F0F0E] transition-colors"
                      >
                        Get Quote
                      </Link>
                    </div>
                  ) : (
                    <div className="p-6 border border-dashed border-[#E4E2DC] text-center space-y-3 my-4">
                      <span className="text-xs text-[#6B6B65] block">Slot {slotIdx + 1}: Empty</span>
                      <select
                        onChange={(e) => onSelectYacht(slotIdx, e.target.value)}
                        defaultValue=""
                        className="w-full px-3 py-2 bg-white text-xs text-[#0F0F0E] border border-[#E4E2DC] focus:outline-none focus:border-[#0F0F0E]"
                      >
                        <option value="" disabled>Select Yacht...</option>
                        {YACHTS_DATA.map((y) => (
                          <option key={y.id} value={y.id}>
                            {y.name} ({y.lengthMeters}M)
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E4E2DC] text-xs">
          {specsRows.map((row, rowIdx) => (
            <tr key={rowIdx} className="hover:bg-[#F7F6F3] transition-colors">
              <td className="p-4 font-semibold text-[#6B6B65]">{row.label}</td>
              {[0, 1, 2].map((slotIdx) => {
                const yacht = selectedYachts[slotIdx];
                if (!yacht) {
                  return <td key={slotIdx} className="p-4 border-l border-[#E4E2DC] text-[#E4E2DC] text-center">—</td>;
                }
                const val = row.getValue(yacht);
                return (
                  <td key={slotIdx} className="p-4 border-l border-[#E4E2DC] text-[#0F0F0E]">
                    {typeof val === "boolean" ? (
                      val ? (
                        <div className="flex items-center gap-1.5 font-semibold">
                          <Check className="w-4 h-4" />
                          <span>Included</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 text-[#6B6B65]">
                          <Minus className="w-4 h-4" />
                          <span>Not Available</span>
                        </div>
                      )
                    ) : (
                      <span>{val}</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
