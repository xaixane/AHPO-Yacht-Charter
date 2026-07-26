"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { MAIN_NAVIGATION } from "@/lib/navigation";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white border-b border-[#E4E2DC] py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="px-6 sm:px-12 lg:px-[5%] flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="text-lg tracking-[0.15em] text-[#0F0F0E] font-bold uppercase leading-tight">
            AHPO
          </span>
          <span className="text-[10px] tracking-[0.25em] text-[#6B6B65] uppercase font-medium border-l border-[#E4E2DC] pl-2.5">
            Yachts &amp; Charters
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
          {MAIN_NAVIGATION.map((item) => {
            const isActive =
              pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            const hasItems = item.items && item.items.length > 0;

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => hasItems && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 text-xs tracking-[0.15em] uppercase transition-colors py-2 font-semibold ${
                    isActive ? "text-[#0F0F0E] underline underline-offset-4" : "text-[#0F0F0E]/70 hover:text-[#0F0F0E]"
                  }`}
                >
                  <span>{item.label}</span>
                  {hasItems && (
                    <ChevronDown
                      className={`w-3 h-3 transition-transform ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {hasItems && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 w-80 pt-2 z-50">
                    <div className="p-4 bg-white border border-[#E4E2DC]">
                      <div className="space-y-3">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block p-2.5 hover:bg-[#F7F6F3] transition-colors group/sub"
                          >
                            <div className="text-xs font-semibold text-[#0F0F0E] flex items-center justify-between">
                              <span>{subItem.label}</span>
                              <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all" />
                            </div>
                            {subItem.description && (
                              <p className="text-[11px] text-[#6B6B65] mt-0.5 leading-snug">
                                {subItem.description}
                              </p>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="hidden lg:flex items-center gap-5">
          <Link
            href="/enquire"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#0F0F0E] text-[#0F0F0E] text-xs font-semibold tracking-wider uppercase hover:bg-[#0F0F0E] hover:text-white transition-colors"
          >
            <span>Enquire</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#0F0F0E]"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bottom-0 bg-white border-t border-[#E4E2DC] overflow-y-auto p-6 z-40 flex flex-col justify-between">
          <div className="space-y-6">
            {MAIN_NAVIGATION.map((item) => (
              <div key={item.label} className="border-b border-[#E4E2DC] pb-4">
                <Link
                  href={item.href}
                  className="text-lg tracking-wide text-[#0F0F0E] font-semibold block mb-2"
                >
                  {item.label}
                </Link>
                {item.items && (
                  <div className="pl-4 space-y-2 mt-2">
                    {item.items.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="text-xs text-[#6B6B65] hover:text-[#0F0F0E] block py-1"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-[#E4E2DC] space-y-3">
            <Link
              href="/enquire"
              className="w-full py-3.5 border border-[#0F0F0E] bg-[#0F0F0E] text-white font-semibold text-center text-xs tracking-widest uppercase block"
            >
              Start Charter Inquiry
            </Link>
            <Link
              href="/contact"
              className="w-full py-3 border border-[#E4E2DC] text-[#0F0F0E] text-center text-xs tracking-widest uppercase block"
            >
              Contact Concierge
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
