import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { GlobalCTABanner } from "@/components/ui/GlobalCTABanner";
import { GlobalOfficesGrid } from "@/components/contact/GlobalOfficesGrid";
import { ConciergeContactForm } from "@/components/home/ConciergeContactForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Concierge Desk",
  description: "Reach AHPO Yachts 24/7 concierge office in Monaco, Miami, and Singapore for superyacht charter, sales, and management advisory.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F7F6F3] text-[#0F0F0E]">
      <PageHeader
        eyebrow="24/7 Global Advisory"
        title="CONTACT CONCIERGE DESK"
        description="Direct connections to our international brokers in Monaco, Miami, and Singapore. We are available around the clock to assist with custom charter requests."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      <section className="py-12 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto space-y-16">
        <GlobalOfficesGrid />
        <ConciergeContactForm />
      </section>

      <GlobalCTABanner
        title="Urgent Charter Request?"
        subtitle="Call our Monaco emergency desk directly at +377 99 90 90 90 for immediate off-market vessel holds."
      />
    </div>
  );
}
