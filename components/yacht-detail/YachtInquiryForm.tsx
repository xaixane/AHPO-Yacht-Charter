"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ShieldCheck, PhoneCall } from "lucide-react";
import { YachtFull } from "@/lib/data/yachts";

interface YachtInquiryFormProps {
  yacht: YachtFull;
}

export function YachtInquiryForm({ yacht }: YachtInquiryFormProps) {
  const router = useRouter();
  const [dates, setDates] = useState("Jul 15 - Jul 22, 2026");
  const [guests, setGuests] = useState("12 Guests");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      router.push(`/booking?yacht=${encodeURIComponent(yacht.name)}`);
    }, 600);
  };

  const inputClass =
    "w-full px-3 py-2 border border-[#E4E2DC] text-xs text-[#0F0F0E] focus:outline-none focus:border-[#0F0F0E]";
  const labelClass = "text-[10px] uppercase font-semibold tracking-widest text-[#6B6B65] block";

  return (
    <div className="p-6 border border-[#E4E2DC] space-y-6 sticky top-28 bg-white">
      {/* Price Header */}
      <div className="border-b border-[#E4E2DC] pb-4 space-y-1">
        <span className="text-[10px] uppercase font-semibold tracking-widest text-[#6B6B65] block">
          CHARTER RATE
        </span>
        <div className="flex items-baseline justify-between">
          <span className="font-serif text-3xl font-bold text-[#0F0F0E]">
            {yacht.currency}{yacht.weeklyRateLow.toLocaleString()}
          </span>
          <span className="text-xs text-[#6B6B65]">/ week + expenses</span>
        </div>
        <div className="flex items-center justify-between text-[11px] text-[#6B6B65] pt-1">
          <span>High Season Rate:</span>
          <span className="text-[#0F0F0E]">{yacht.currency}{yacht.weeklyRateHigh.toLocaleString()} / wk</span>
        </div>
      </div>

      {/* Financial Breakdown Note */}
      <div className="p-3 border border-[#E4E2DC] text-[11px] text-[#6B6B65] space-y-1">
        <div className="flex items-center gap-1.5 font-semibold text-[#0F0F0E]">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>MYBA Charter Terms</span>
        </div>
        <p className="leading-snug">
          Rates exclude Advanced Provisioning Allowance (APA approx 30-35%) and local destination VAT.
        </p>
      </div>

      {/* Inquiry Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className={labelClass}>TARGET DATES</label>
          <input type="text" value={dates} onChange={(e) => setDates(e.target.value)} className={inputClass} />
        </div>

        <div className="space-y-1">
          <label className={labelClass}>GUEST PARTY SIZE</label>
          <input type="text" value={guests} onChange={(e) => setGuests(e.target.value)} className={inputClass} />
        </div>

        <div className="space-y-1">
          <label className={labelClass}>YOUR NAME *</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className={inputClass}
          />
        </div>

        <div className="space-y-1">
          <label className={labelClass}>EMAIL ADDRESS *</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@domain.com"
            className={inputClass}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 border border-[#0F0F0E] bg-[#0F0F0E] text-white text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-[#0F0F0E] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isSubmitting ? (
            <span>PROCESSING...</span>
          ) : (
            <>
              <span>REQUEST VESSEL HOLD</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      <div className="pt-2 text-center border-t border-[#E4E2DC]">
        <a
          href="tel:+37799909090"
          className="inline-flex items-center gap-2 text-xs text-[#6B6B65] hover:text-[#0F0F0E] transition-colors"
        >
          <PhoneCall className="w-3.5 h-3.5" />
          <span>Speak to Broker: +377 99 90 90 90</span>
        </a>
      </div>
    </div>
  );
}
