import React from "react";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { GlobalCTABanner } from "@/components/ui/GlobalCTABanner";
import { YachtGallery } from "@/components/yacht-detail/YachtGallery";
import { YachtSpecsTable } from "@/components/yacht-detail/YachtSpecsTable";
import { DeckPlansViewer } from "@/components/yacht-detail/DeckPlansViewer";
import { YachtInquiryForm } from "@/components/yacht-detail/YachtInquiryForm";
import { SimilarYachtsGrid } from "@/components/yacht-detail/SimilarYachtsGrid";
import { getYachtBySlug } from "@/lib/data/yachts";
import { buildMetadata } from "@/lib/seo";
import { CheckCircle, ShieldCheck, Anchor, Compass, UserCheck } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const yacht = getYachtBySlug(slug);

  if (!yacht) {
    return buildMetadata({
      title: "Vessel Not Found",
      description: "The requested superyacht specifications could not be found.",
    });
  }

  return buildMetadata({
    title: `${yacht.name} (${yacht.lengthMeters}M ${yacht.builder}) Superyacht Charter`,
    description: `${yacht.description} Accommodates ${yacht.guests} guests in ${yacht.cabins} staterooms with ${yacht.crew} crew members. Rates from ${yacht.currency}${yacht.weeklyRateLow.toLocaleString()}/week.`,
    path: `/yachts/${yacht.slug}`,
    image: yacht.image,
  });
}

export default async function YachtDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const yacht = getYachtBySlug(slug);

  if (!yacht) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-[#0F0F0E]">
      <PageHeader
        eyebrow={`${yacht.categoryLabel} • ${yacht.builder}`}
        title={yacht.name}
        description={`${yacht.lengthMeters}M (${yacht.lengthFeet}FT) superyacht accommodating ${yacht.guests} guests in ${yacht.cabins} luxury staterooms with ${yacht.crew} professional crew members.`}
        breadcrumbs={[
          { label: "Fleet", href: "/yachts" },
          { label: yacht.name, href: `/yachts/${yacht.slug}` },
        ]}
      />

      <section className="py-12 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto space-y-16">
        {/* Gallery Viewport */}
        <YachtGallery images={yacht.gallery} yachtName={yacht.name} />

        {/* 2-Column Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Left Content */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview & Highlights */}
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#6B6B65] font-semibold block">
                Charter Overview
              </span>
              <h2 className="font-serif text-3xl text-[#0F0F0E]">Vessel Highlights</h2>
              <p className="text-sm text-[#6B6B65] leading-relaxed">
                {yacht.description}
              </p>

              <div className="space-y-3 pt-2">
                {yacht.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#0F0F0E]">
                    <CheckCircle className="w-4 h-4 text-[#6B6B65] flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications */}
            <YachtSpecsTable yacht={yacht} />

            {/* Deck Floor Plans */}
            <DeckPlansViewer deckPlans={yacht.deckPlans} />

            {/* Water Toys & Tenders Inventory */}
            <div className="p-8 border border-[#E4E2DC] space-y-6">
              <div className="flex items-center gap-2 border-b border-[#E4E2DC] pb-4">
                <Anchor className="w-5 h-5 text-[#0F0F0E]" />
                <h3 className="font-serif text-2xl text-[#0F0F0E]">Water Toys & Tenders</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {yacht.waterToys.map((toy, i) => (
                  <div key={i} className="p-3 border border-[#E4E2DC] flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#0F0F0E]" />
                    <span className="text-[#0F0F0E] font-medium">{toy}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Captain's Statement */}
            {yacht.captainProfile && (
              <div className="p-8 border border-[#E4E2DC] flex flex-col sm:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-full border border-[#E4E2DC] flex items-center justify-center text-[#0F0F0E] flex-shrink-0">
                  <UserCheck className="w-8 h-8" />
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <span className="text-[10px] uppercase tracking-widest text-[#6B6B65] font-semibold block">
                    CAPTAIN&apos;S REASSURANCE
                  </span>
                  <p className="font-serif text-base text-[#0F0F0E] italic">
                    &ldquo;{yacht.captainProfile.quote}&rdquo;
                  </p>
                  <span className="text-xs text-[#6B6B65] block">
                    — {yacht.captainProfile.name} • {yacht.captainProfile.yearsAtSea} Years at Sea
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Right Column Reservation Card */}
          <div className="lg:col-span-4">
            <YachtInquiryForm yacht={yacht} />
          </div>
        </div>

        {/* Similar Fleet Recommendations */}
        <SimilarYachtsGrid currentSlug={yacht.slug} />
      </section>

      {/* Global Concierge CTA */}
      <GlobalCTABanner
        title={`Ready to Charter ${yacht.name}?`}
        subtitle="Contact our charter advisors to lock in seasonal dates, request custom menus, or arrange private aviation transfers."
      />
    </div>
  );
}
