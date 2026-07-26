import React from "react";
import { Hero } from "@/components/home/Hero";
import { HeroMarquee } from "@/components/home/HeroMarquee";
import { FeaturedFleet } from "@/components/home/FeaturedFleet";
import { DestinationShowcase } from "@/components/home/DestinationShowcase";
import { ExperiencesPreview } from "@/components/home/ExperiencesPreview";
import { JournalFeatured } from "@/components/home/JournalFeatured";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "VELANTIS YACHTS | Set Sail Beyond The Map",
  description: "A handpicked portfolio of world-class superyachts, motor yachts, sailing vessels, and expedition explorers.",
  path: "/",
});

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#0F0F0E]">
      <Hero />
      <HeroMarquee />
      <FeaturedFleet />
      <DestinationShowcase />
      <ExperiencesPreview />
      <JournalFeatured />
    </div>
  );
}
