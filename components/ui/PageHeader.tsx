import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "./Breadcrumbs";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  align?: "left" | "center";
}

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  align = "left",
}: PageHeaderProps) {
  return (
    <header className="relative pt-32 pb-16 px-6 sm:px-12 lg:px-16 bg-white text-[#0F0F0E]">
      <div className={`max-w-7xl mx-auto ${align === "center" ? "text-center" : ""}`}>
        {breadcrumbs && (
          <div className={`mb-6 ${align === "center" ? "flex justify-center" : ""}`}>
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}

        {eyebrow && (
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#6B6B65] mb-3">
            {eyebrow}
          </span>
        )}

        <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] mb-6 text-[#0F0F0E]">
          {title}
        </h1>

        {description && (
          <p
            className={`text-sm sm:text-base max-w-2xl leading-relaxed text-[#6B6B65] ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
