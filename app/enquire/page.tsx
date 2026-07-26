import React, { Suspense } from "react";
import Image from "next/image";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { GlobalCTABanner } from "@/components/ui/GlobalCTABanner";
import { InquiryWizard } from "@/components/inquiry/InquiryWizard";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Request Private Superyacht Quote",
  description: "Submit a private charter quote request. Custom vessel proposals, preference sheets, and MYBA charter agreement terms.",
  path: "/enquire",
});

export default function EnquirePage() {
  return (
    <div className="min-h-screen bg-white text-[#0F0F0E]">
      <section className="relative pt-32 pb-40 px-6 sm:px-12 lg:px-16">
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[45%] hidden md:block">
          <Image
            src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1400&q=80"
            alt="Superyacht bow at sea"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-xl">
            <div className="mb-6">
              <Breadcrumbs items={[{ label: "Quote Request", href: "/enquire" }]} />
            </div>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#6B6B65] mb-3">
              Bespoke Consultation
            </span>
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] mb-6">
              REQUEST A
              <br />
              CHARTER QUOTE
            </h1>
            <p className="text-sm sm:text-base text-[#6B6B65] leading-relaxed">
              Share your vision for your next oceanic voyage.
              <br />
              A senior charter broker will curate bespoke vessel proposals within 2 hours.
            </p>
          </div>

          <div className="mt-12 max-w-3xl bg-white border border-[#E4E2DC] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]">
            <Suspense fallback={<div className="p-12 text-center text-[#6B6B65]">Loading Inquiry Wizard...</div>}>
              <InquiryWizard />
            </Suspense>
          </div>
        </div>
      </section>

      <GlobalCTABanner
        title="Prefer Direct Phone Consultation?"
        subtitle="Call our Monaco brokerage desk directly at +377 99 90 90 90 for immediate off-market assistance."
      />
    </div>
  );
}
