"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const schemaItems = [
    { label: "Home", href: "/" },
    ...items,
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: schemaItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `https://velantisyachts.com${item.href}` : undefined,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className={`py-1 ${className}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 text-xs tracking-wider uppercase text-[#6B6B65]">
        <li className="flex items-center">
          <Link href="/" className="flex items-center gap-1 transition-colors hover:text-[#0F0F0E]" title="Home">
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-[#E4E2DC] flex-shrink-0" />
              {isLast || !item.href ? (
                <span className="text-[#0F0F0E] font-medium truncate max-w-[200px] sm:max-w-[300px]">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="transition-colors hover:text-[#0F0F0E] truncate max-w-[150px] sm:max-w-[200px]">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
