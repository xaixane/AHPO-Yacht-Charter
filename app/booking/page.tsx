import React, { Suspense } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { GlobalCTABanner } from "@/components/ui/GlobalCTABanner";
import { BookingSummaryCard } from "@/components/booking/BookingSummaryCard";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Charter Reservation Summary",
  description: "Review your selected superyacht charter parameters, financial terms, APA estimate, and MYBA agreement details.",
  path: "/booking",
});

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-white text-[#0F0F0E]">
      <PageHeader
        eyebrow="Reservation Hold"
        title="CHARTER RESERVATION SUMMARY"
        description="Review your selected vessel, charter rates, estimated provisioning allowance, and MYBA agreement terms before final broker submission."
        breadcrumbs={[
          { label: "Quote Request", href: "/enquire" },
          { label: "Reservation Summary", href: "/booking" },
        ]}
      />

      <section className="py-12 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto">
        <Suspense fallback={<div className="p-12 text-center text-[#6B6B65]">Loading Booking Summary...</div>}>
          <BookingSummaryCard />
        </Suspense>
      </section>

      <GlobalCTABanner
        title="Questions Regarding APA or VAT Terms?"
        subtitle="Our Monaco charter accounts desk is available 24/7 to clarify local port taxes and provisioning allowances."
      />
    </div>
  );
}
