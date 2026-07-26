"use client";

import React, { useState } from "react";
import { DeckPlan } from "@/lib/data/yachts";
import { Layers, CheckCircle } from "lucide-react";

interface DeckPlansViewerProps {
  deckPlans: DeckPlan[];
}

export function DeckPlansViewer({ deckPlans }: DeckPlansViewerProps) {
  const [activeTab, setActiveTab] = useState(0);

  if (!deckPlans || deckPlans.length === 0) return null;

  const currentDeck = deckPlans[activeTab] || deckPlans[0];

  return (
    <div className="p-8 border border-[#E4E2DC] space-y-6">
      <div className="flex items-center justify-between border-b border-[#E4E2DC] pb-4 flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-[#0F0F0E]" />
          <h3 className="font-serif text-2xl text-[#0F0F0E]">Deck Floor Plans</h3>
        </div>

        {/* Deck Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
          {deckPlans.map((deck, idx) => (
            <button
              key={deck.name}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all border ${
                activeTab === idx
                  ? "bg-[#0F0F0E] text-white border-[#0F0F0E]"
                  : "bg-white text-[#6B6B65] border-[#E4E2DC] hover:border-[#0F0F0E]"
              }`}
            >
              {deck.label}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Deck Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Features */}
        <div className="lg:col-span-6 space-y-4">
          <span className="text-xs text-[#6B6B65] uppercase tracking-widest block">
            DECK {activeTab + 1} OF {deckPlans.length} • {currentDeck.label}
          </span>
          <h4 className="font-serif text-3xl text-[#0F0F0E]">{currentDeck.label} Architecture</h4>
          <p className="text-xs sm:text-sm text-[#6B6B65] leading-relaxed">
            {currentDeck.description}
          </p>

          <div className="pt-2 space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-[#6B6B65] font-semibold block">
              Key Deck Amenities
            </span>
            <div className="grid grid-cols-2 gap-2">
              {currentDeck.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#0F0F0E]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#6B6B65]" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Architectural Diagram Box */}
        <div className="lg:col-span-6 p-8 border border-[#E4E2DC] text-center space-y-4 flex flex-col items-center justify-center min-h-[220px]">
          <div className="w-16 h-16 rounded-full border border-[#E4E2DC] flex items-center justify-center text-[#0F0F0E]">
            <Layers className="w-8 h-8" />
          </div>
          <div>
            <span className="text-xs text-[#6B6B65] uppercase tracking-widest block">
              NAV-ARCH BLUEPRINT
            </span>
            <span className="font-serif text-lg text-[#0F0F0E] block">
              {currentDeck.label} Spatial Layout
            </span>
            <p className="text-xs text-[#6B6B65] mt-1 max-w-sm mx-auto">
              CAD architectural floor plans available upon broker inquiry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
