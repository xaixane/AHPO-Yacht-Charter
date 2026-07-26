"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { YACHTS_DATA } from "@/lib/data/yachts";

export function BookingSummaryCard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const yachtName = searchParams.get("yacht") || "AZURE ONE";

  const vessel = YACHTS_DATA.find((y) => y.name.toLowerCase() === yachtName.toLowerCase()) || YACHTS_DATA[0];

  const baseRate = vessel.weeklyRateLow;
  const apaEstimate = Math.round(baseRate * 0.3);
  const totalEstimate = baseRate + apaEstimate;

  const [isConfirming, setIsConfirming] = useState(false);

  const handleConfirm = () => {
    setIsConfirming(true);
    setTimeout(() => {
      setIsConfirming(false);
      router.push("/thank-you");
    }, 600);
  };

  return (
    <div className="p-8 sm:p-10 border border-[#E4E2DC] space-y-8 max-w-3xl mx-auto">
      {/* Vessel Header Summary */}
      <div className="flex flex-col sm:flex-row items-center gap-6 border-b border-[#E4E2DC] pb-6">
        <div className="relative w-full sm:w-44 aspect-[16/10] overflow-hidden bg-[#F7F6F3] border border-[#E4E2DC] flex-shrink-0">
          <Image src={vessel.image} alt={vessel.name} fill className="object-cover" />
        </div>
        <div className="space-y-1 text-center sm:text-left">
          <span className="text-[10px] uppercase tracking-widest text-[#6B6B65] block">
            SELECTED SUPERYACHT
          </span>
          <h3 className="font-serif text-3xl text-[#0F0F0E]">{vessel.name}</h3>
          <p className="text-xs text-[#6B6B65]">
            {vessel.lengthMeters}M ({vessel.lengthFeet}FT) • {vessel.builder} • {vessel.crew} Crew Members
          </p>
        </div>
      </div>

      {/* Itemized Financial Matrix */}
      <div className="space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#6B6B65] font-semibold block">
          ESTIMATED CHARTER FINANCIAL SUMMARY
        </span>

        <div className="p-4 border border-[#E4E2DC] space-y-3 text-xs">
          <div className="flex justify-between text-[#6B6B65]">
            <span>Base Weekly Charter Rate:</span>
            <span className="text-[#0F0F0E] font-semibold">{vessel.currency}{baseRate.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-[#6B6B65]">
            <span>Estimated APA (30% Provisioning):</span>
            <span className="text-[#0F0F0E] font-semibold">{vessel.currency}{apaEstimate.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-[#6B6B65]">
            <span>Local VAT &amp; Port Tax:</span>
            <span>Subject to Port Clearance</span>
          </div>
          <div className="pt-3 border-t border-[#E4E2DC] flex justify-between text-sm text-[#0F0F0E] font-bold">
            <span>Total Estimated Hold Rate:</span>
            <span>{vessel.currency}{totalEstimate.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Reservation Terms */}
      <div className="p-4 border border-[#E4E2DC] space-y-2 text-xs text-[#6B6B65]">
        <div className="flex items-center gap-2 font-semibold text-[#0F0F0E]">
          <ShieldCheck className="w-4 h-4" />
          <span>MYBA Charter Agreement Terms</span>
        </div>
        <p className="leading-relaxed">
          Submitting this hold request reserves priority option status on {vessel.name} for 48 hours without immediate financial commitment. An AHPO broker will issue official MYBA contracts upon review.
        </p>
      </div>

      {/* Action Controls */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-[#6B6B65]">
          Ref: AHPO-{Math.floor(100000 + Math.random() * 900000)}
        </span>

        <button
          onClick={handleConfirm}
          disabled={isConfirming}
          className="w-full sm:w-auto px-8 py-4 border border-[#0F0F0E] bg-[#0F0F0E] text-white text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-[#0F0F0E] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isConfirming ? (
            <span>CONFIRMING REQUEST...</span>
          ) : (
            <>
              <span>CONFIRM CHARTER INQUIRY</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
