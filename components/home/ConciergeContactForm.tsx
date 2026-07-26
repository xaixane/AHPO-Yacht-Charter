"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Phone } from "lucide-react";

export function ConciergeContactForm() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/thank-you");
    }, 800);
  };

  const inputClass =
    "w-full pb-2 bg-transparent border-b border-[#E4E2DC] text-sm text-[#0F0F0E] placeholder-[#6B6B65]/60 focus:outline-none focus:border-[#0F0F0E] transition-colors";
  const labelClass = "text-[10px] uppercase font-semibold tracking-widest text-[#6B6B65] block";

  return (
    <section className="py-16 border-t border-[#E4E2DC]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Copy */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs uppercase tracking-[0.2em] text-[#6B6B65] font-semibold block">
            Bespoke Advisory
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight uppercase leading-tight">
            Ready to Plan
            <br />
            Your Escape?
          </h2>
          <p className="text-sm text-[#6B6B65] leading-relaxed">
            Our private charter brokers are at your service 24/7 to craft your bespoke oceanic itinerary with uncompromised discretion.
          </p>

          <div className="pt-4 border-t border-[#E4E2DC] space-y-3 text-xs">
            <div className="text-[#6B6B65]">Or speak directly with our Monaco Concierge Desk.</div>
            <a href="tel:+37799909090" className="inline-flex items-center gap-3 text-lg font-semibold text-[#0F0F0E] hover:underline">
              <Phone className="w-5 h-5" />
              <span>+377 99 90 90 90</span>
            </a>
          </div>
        </div>

        {/* Right Column Minimal Form */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className={labelClass}>FULL NAME *</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Lord Sterling Monteague"
                  className={inputClass}
                />
              </div>

              <div className="space-y-2">
                <label className={labelClass}>EMAIL ADDRESS *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sterling@monteague.com"
                  className={inputClass}
                />
              </div>

              <div className="space-y-2">
                <label className={labelClass}>PHONE NUMBER</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+44 7700 900077"
                  className={inputClass}
                />
              </div>

              <div className="space-y-2">
                <label className={labelClass}>DESTINATION OF INTEREST</label>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="French Riviera / Exumas"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between gap-4 flex-wrap">
              <p className="text-[11px] text-[#6B6B65]">
                By clicking send, you agree to our privacy policy and non-disclosure terms.
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3.5 border border-[#0F0F0E] bg-[#0F0F0E] text-white text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-[#0F0F0E] transition-colors flex items-center gap-3 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>SUBMITTING...</span>
                ) : (
                  <>
                    <span>SEND ENQUIRY</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
