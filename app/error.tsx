"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application Error Boundary:", error);
  }, [error]);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center bg-white text-[#0F0F0E]">
      <div className="max-w-md mx-auto text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-red-50 border border-red-200 flex items-center justify-center mx-auto text-red-500">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <span className="text-xs uppercase tracking-[0.2em] text-red-500 font-semibold block">
          System Notice
        </span>

        <h2 className="font-sans text-3xl font-bold">Something went wrong</h2>

        <p className="text-xs text-[#6B6B65] leading-relaxed">
          An unexpected error occurred while loading this page. Our technical team has been notified.
        </p>

        <div className="pt-2 flex items-center justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#0F0F0E] bg-[#0F0F0E] text-white text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-[#0F0F0E] transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#E4E2DC] text-[#0F0F0E] text-xs font-semibold uppercase tracking-wider hover:border-[#0F0F0E] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
