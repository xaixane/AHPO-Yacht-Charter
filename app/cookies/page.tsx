import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { GlobalCTABanner } from "@/components/ui/GlobalCTABanner";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cookie Policy",
  description: "Learn how VELANTIS Yachts uses cookies and local browser storage to optimize site performance and retain user preferences.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white text-[#0F0F0E]">
      <PageHeader
        eyebrow="Privacy & Preferences"
        title="Cookie Policy"
        description="Understanding how essential and performance cookies are used to enhance your browsing experience."
        breadcrumbs={[{ label: "Cookie Policy", href: "/cookies" }]}
      />

      <section className="py-20 px-6 sm:px-12 lg:px-16 max-w-4xl mx-auto space-y-12">
        <div className="prose max-w-none text-[#6B6B65] space-y-6 text-sm sm:text-base">
          <h2 className="font-sans text-2xl font-bold text-[#0F0F0E] border-b border-[#E4E2DC] pb-3">1. Essential Cookies</h2>
          <p>
            Essential cookies are required for basic navigation, security, and session management across our digital platform. Disabling these cookies may impact website functionality.
          </p>

          <h2 className="font-sans text-2xl font-bold text-[#0F0F0E] border-b border-[#E4E2DC] pb-3">2. Performance & Analytics</h2>
          <p>
            We use privacy-respecting analytics tools to measure site speed, page navigation paths, and device responsiveness without storing personal identifiable tracking data.
          </p>
        </div>
      </section>

      <GlobalCTABanner />
    </div>
  );
}
