import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-[#E4E2DC]" />
          <div className="absolute inset-0 rounded-full border-2 border-[#0F0F0E] border-t-transparent animate-spin" />
        </div>
        <span className="font-sans text-sm tracking-[0.2em] text-[#0F0F0E] uppercase animate-pulse">
          VELANTIS YACHTS
        </span>
      </div>
    </div>
  );
}
