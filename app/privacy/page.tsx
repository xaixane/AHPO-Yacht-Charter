import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { GlobalCTABanner } from "@/components/ui/GlobalCTABanner";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "VELANTIS Yachts Privacy Policy: detailing our commitment to data protection, GDPR compliance, and non-disclosure discretion.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-[#0F0F0E]">
      <PageHeader
        eyebrow="Legal & Discretion"
        title="Privacy Policy"
        description="Our commitment to safeguarding client confidentiality, personal data, and charter privacy across all global jurisdictions."
        breadcrumbs={[{ label: "Privacy Policy", href: "/privacy" }]}
      />

      <section className="py-20 px-6 sm:px-12 lg:px-16 max-w-4xl mx-auto space-y-12">
        <div className="prose max-w-none text-[#6B6B65] space-y-6 text-sm sm:text-base">
          <h2 className="font-sans text-2xl font-bold text-[#0F0F0E] border-b border-[#E4E2DC] pb-3">1. Data Confidentiality & Discretion</h2>
          <p>
            At VELANTIS Yachts International, client discretion is paramount. We handle all personal details, travel itineraries, guest lists, and financial transactions with absolute confidentiality under European Union General Data Protection Regulation (GDPR) standards.
          </p>

          <h2 className="font-sans text-2xl font-bold text-[#0F0F0E] border-b border-[#E4E2DC] pb-3">2. Information Collection</h2>
          <p>
            We collect personal information necessary to facilitate superyacht charters, maritime safety documentation, border clearance, and preference customization. This includes name, passport data, contact details, dietary preferences, and billing information.
          </p>

          <h2 className="font-sans text-2xl font-bold text-[#0F0F0E] border-b border-[#E4E2DC] pb-3">3. Non-Disclosure & Third Parties</h2>
          <p>
            Client details are never sold, rented, or shared with external marketing entities. Information is shared strictly on a need-to-know basis with vessel captains, charter brokers, port authorities, and maritime immigration agencies.
          </p>
        </div>
      </section>

      <GlobalCTABanner />
    </div>
  );
}
