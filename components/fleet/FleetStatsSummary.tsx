import React from "react";

export function FleetStatsSummary() {
  const stats = [
    { value: "100%", label: "MYBA Certified Fleet" },
    { value: "90M", label: "Flagship Tonnage" },
    { value: "24/7", label: "Dedicated Onboard Crew" },
    { value: "15+", label: "Global Charter Ports" },
  ];

  return (
    <div className="my-16 py-10 border-t border-b border-[#E4E2DC] grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#E4E2DC] text-center">
      {stats.map((s, i) => (
        <div key={i} className="space-y-2 px-4">
          <span className="font-serif text-3xl text-[#0F0F0E] block">{s.value}</span>
          <span className="text-[10px] uppercase font-semibold tracking-widest text-[#6B6B65] block">
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}
