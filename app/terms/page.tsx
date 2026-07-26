import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { GlobalCTABanner } from "@/components/ui/GlobalCTABanner";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: "VELANTIS Yachts Terms of Service governing website usage, MYBA charter agreement standards, and advisory representations.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-[#0F0F0E]">
      <PageHeader
        eyebrow="Legal Framework"
        title="Terms of Service"
        description="General terms governing the use of VELANTIS Yachts digital platforms and charter brokerage services."
        breadcrumbs={[{ label: "Terms of Service", href: "/terms" }]}
      />

      <section className="py-20 px-6 sm:px-12 lg:px-16 max-w-4xl mx-auto space-y-12">
        <div className="prose max-w-none text-[#6B6B65] space-y-6 text-sm sm:text-base">
          <h2 className="font-sans text-2xl font-bold text-[#0F0F0E] border-b border-[#E4E2DC] pb-3">1. Scope of Representation</h2>
          <p>
            VELANTIS Yachts acts as a charter broker representing charterers and yacht owners under Mediterranean Yacht Brokers Association (MYBA) standard contract frameworks. Website listings do not constitute binding charter contracts until executed in writing.
          </p>

          <h2 className="font-sans text-2xl font-bold text-[#0F0F0E] border-b border-[#E4E2DC] pb-3">2. Accuracy of Vessel Specifications</h2>
          <p>
            While all vessel dimensions, speeds, guest capacities, and luxury amenities are verified with yacht captains and managers, specifications are subject to change during refits or owner modifications.
          </p>
        </div>
      </section>

      <GlobalCTABanner />
    </div>
  );
}
