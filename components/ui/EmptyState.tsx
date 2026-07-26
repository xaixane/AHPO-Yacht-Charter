import React from "react";
import Link from "next/link";
import { Anchor, RefreshCw } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
  onReset?: () => void;
}

export function EmptyState({
  title = "No Results Found",
  description = "We couldn't find any items matching your exact search criteria. Please adjust your filters or contact our concierge.",
  actionLabel = "Browse All Yachts",
  actionHref = "/yachts",
  onReset,
}: EmptyStateProps) {
  return (
    <div className="py-20 px-6 text-center max-w-xl mx-auto flex flex-col items-center">
      <div className="w-16 h-16 border border-[#E4E2DC] flex items-center justify-center text-[#6B6B65] mb-6">
        <Anchor className="w-8 h-8" />
      </div>
      <h3 className="font-serif text-2xl text-[#0F0F0E] mb-3">{title}</h3>
      <p className="text-sm text-[#6B6B65] leading-relaxed mb-8">{description}</p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {onReset && (
          <button
            onClick={onReset}
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#E4E2DC] text-[#0F0F0E] text-xs tracking-wider uppercase hover:border-[#0F0F0E] transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Reset Filters
          </button>
        )}
        {actionHref && (
          <Link
            href={actionHref}
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#0F0F0E] bg-[#0F0F0E] text-white text-xs font-semibold tracking-wider uppercase hover:bg-white hover:text-[#0F0F0E] transition-colors"
          >
            {actionLabel}
          </Link>
        )}
      </div>
    </div>
  );
}
