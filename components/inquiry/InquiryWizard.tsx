"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { YACHTS_DATA } from "@/lib/data/yachts";

export function InquiryWizard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const preselectedYacht = searchParams.get("yacht") || "AZURE ONE";

  const [step, setStep] = useState(1);
  const [selectedVessel, setSelectedVessel] = useState(preselectedYacht);
  const [region, setRegion] = useState("French Riviera & Monaco");
  const [charterDates, setCharterDates] = useState("Jul 15 - Jul 22, 2026");
  const [guestCount, setGuestCount] = useState("12 Guests");
  const [cuisine, setCuisine] = useState("Michelin Gastronomy & Fresh Seafood");
  const [waterToys, setWaterToys] = useState("Jet Skis & Seabobs");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        router.push(`/booking?yacht=${encodeURIComponent(selectedVessel)}&guests=${encodeURIComponent(guestCount)}&dates=${encodeURIComponent(charterDates)}`);
      }, 700);
    }
  };

  const inputClass =
    "w-full px-4 py-3 border border-[#E4E2DC] text-xs text-[#0F0F0E] focus:outline-none focus:border-[#0F0F0E] transition-colors bg-white";
  const labelClass = "text-[10px] uppercase font-semibold tracking-widest text-[#6B6B65] block";

  return (
    <div className="p-8 sm:p-10 space-y-8">
      {/* Progress Steps Header */}
      <div className="flex items-center justify-between border-b border-[#E4E2DC] pb-6">
        {[
          { num: 1, title: "Parameters" },
          { num: 2, title: "Preferences" },
          { num: 3, title: "Client Details" },
        ].map((s) => (
          <div
            key={s.num}
            onClick={() => s.num < step && setStep(s.num)}
            className={`flex items-center gap-2 cursor-pointer pb-4 -mb-[25px] border-b-2 transition-colors ${
              step === s.num ? "border-[#0F0F0E] text-[#0F0F0E]" : "border-transparent text-[#6B6B65]"
            }`}
          >
            <span className="text-xs font-semibold">
              {s.num < step ? <CheckCircle2 className="w-4 h-4" /> : `0${s.num}`}
            </span>
            <span className="text-xs uppercase tracking-wider hidden sm:inline">{s.title}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleNextStep} className="space-y-6">
        {/* Step 1: Parameters */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#6B6B65] font-semibold block">Step 01</span>
              <h3 className="font-serif text-2xl text-[#0F0F0E]">Charter Parameters</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className={labelClass}>PREFERRED SUPERYACHT</label>
                <select value={selectedVessel} onChange={(e) => setSelectedVessel(e.target.value)} className={inputClass}>
                  {YACHTS_DATA.map((y) => (
                    <option key={y.id} value={y.name}>
                      {y.name} ({y.lengthMeters}M • {y.currency}{y.weeklyRateLow.toLocaleString()}/wk)
                    </option>
                  ))}
                  <option value="Broker Recommendation">Recommend Best Matching Vessel</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className={labelClass}>CRUISING REGION</label>
                <input type="text" value={region} onChange={(e) => setRegion(e.target.value)} className={inputClass} />
              </div>

              <div className="space-y-2">
                <label className={labelClass}>TARGET DATES</label>
                <input type="text" value={charterDates} onChange={(e) => setCharterDates(e.target.value)} className={inputClass} />
              </div>

              <div className="space-y-2">
                <label className={labelClass}>GUEST PARTY SIZE</label>
                <select value={guestCount} onChange={(e) => setGuestCount(e.target.value)} className={inputClass}>
                  {["2 Guests", "6 Guests", "10 Guests", "12 Guests", "14+ Guests"].map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Preferences */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#6B6B65] font-semibold block">Step 02</span>
              <h3 className="font-serif text-2xl text-[#0F0F0E]">Onboard Experience &amp; Dining</h3>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className={labelClass}>CULINARY &amp; DIETARY STYLE</label>
                <input type="text" value={cuisine} onChange={(e) => setCuisine(e.target.value)} className={inputClass} />
              </div>

              <div className="space-y-2">
                <label className={labelClass}>WATER SPORTS &amp; TOYS PREFERENCE</label>
                <input type="text" value={waterToys} onChange={(e) => setWaterToys(e.target.value)} className={inputClass} />
              </div>

              <div className="space-y-2">
                <label className={labelClass}>SPECIAL REQUESTS / OCCASIONS</label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Anniversary celebration, private helicopter transfers, specific vintage wines..."
                  className={inputClass}
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Contact Details */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#6B6B65] font-semibold block">Step 03</span>
              <h3 className="font-serif text-2xl text-[#0F0F0E]">Client Details &amp; Confidentiality</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className={labelClass}>FULL NAME *</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Lord Sterling Monteague"
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

              <div className="space-y-2 sm:col-span-2">
                <label className={labelClass}>PHONE / WHATSAPP NUMBER</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+44 7700 900077"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="p-4 border border-[#E4E2DC] flex items-center gap-3 text-xs text-[#6B6B65]">
              <ShieldCheck className="w-5 h-5 text-[#0F0F0E] flex-shrink-0" />
              <span>Strict non-disclosure confidentiality guaranteed by VELANTIS Yachts Monaco.</span>
            </div>
          </div>
        )}

        {/* Wizard Controls */}
        <div className="pt-4 border-t border-[#E4E2DC] flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="px-6 py-3 border border-[#E4E2DC] text-[#0F0F0E] text-xs font-semibold uppercase tracking-wider hover:border-[#0F0F0E] transition-colors"
            >
              Back
            </button>
          ) : <div />}

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3.5 border border-[#0F0F0E] bg-[#0F0F0E] text-white text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-[#0F0F0E] transition-colors flex items-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>GENERATING PROPOSAL...</span>
            ) : step < 3 ? (
              <>
                <span>Continue to Step {step + 1}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            ) : (
              <>
                <span>Review Reservation Summary</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
