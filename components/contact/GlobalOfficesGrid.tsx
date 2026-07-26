import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { GLOBAL_OFFICES } from "@/lib/data/offices";

export function GlobalOfficesGrid() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <span className="text-xs uppercase tracking-[0.2em] text-[#6B6B65] font-semibold block">
          International Desks
        </span>
        <h3 className="font-sans text-2xl font-bold tracking-tight uppercase">Global Concierge Offices</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {GLOBAL_OFFICES.map((office) => (
          <div key={office.id} className="space-y-4">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#F7F6F3]">
              <Image src={office.image} alt={office.city} fill className="object-cover" />
              {office.isHeadquarters && (
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 bg-white text-[#0F0F0E] text-[10px] font-bold tracking-widest uppercase">
                    HEADQUARTERS
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-widest text-[#6B6B65] block">
                {office.region}
              </span>
              <h4 className="font-sans text-lg font-bold tracking-tight">{office.city}</h4>

              <div className="space-y-2 text-xs text-[#0F0F0E] pt-1 border-t border-[#E4E2DC]">
                <div className="flex items-start gap-2.5 pt-2">
                  <MapPin className="w-4 h-4 text-[#6B6B65] flex-shrink-0 mt-0.5" />
                  <span>{office.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#6B6B65] flex-shrink-0" />
                  <a href={`tel:${office.phone.replace(/\s+/g, "")}`} className="hover:underline">
                    {office.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#6B6B65] flex-shrink-0" />
                  <a href={`mailto:${office.email}`} className="hover:underline text-[#6B6B65]">
                    {office.email}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-[#6B6B65] text-[11px]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{office.hours}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
