import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FOOTER_NAVIGATION } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="bg-white text-[#0F0F0E] border-t border-[#E4E2DC] pt-16 pb-10 px-6 sm:px-12 lg:px-[5%]">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-baseline gap-2">
              <span className="text-xl tracking-[0.1em] font-bold uppercase">AHPO</span>
              <span className="text-[10px] tracking-[0.25em] text-[#6B6B65] uppercase font-medium">
                Yachts &amp; Charters
              </span>
            </Link>

            <p className="text-xs text-[#6B6B65] leading-relaxed max-w-sm">
              Tailored superyacht charters, sales, and management. Sailing beyond the ordinary with uncompromised discretion and oceanic luxury.
            </p>

            <div className="space-y-2 text-xs text-[#0F0F0E] pt-2">
              <div className="flex items-center gap-3">
                <MapPin className="w-3.5 h-3.5 text-[#6B6B65]" />
                <span>7 Quai Antoine 1er, 98000 Monaco</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-3.5 h-3.5 text-[#6B6B65]" />
                <span>+377 99 90 90 90</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-3.5 h-3.5 text-[#6B6B65]" />
                <span>charter@ahpoyachts.com</span>
              </div>
            </div>
          </div>

          {/* Links Column 1: Fleet */}
          <div className="space-y-4">
            <h4 className="text-xs tracking-wider uppercase font-semibold">The Fleet</h4>
            <ul className="space-y-2 text-xs">
              {FOOTER_NAVIGATION.fleet.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#6B6B65] hover:text-[#0F0F0E] transition-colors py-0.5 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2: Company */}
          <div className="space-y-4">
            <h4 className="text-xs tracking-wider uppercase font-semibold">Company &amp; Contact</h4>
            <ul className="space-y-2 text-xs">
              {FOOTER_NAVIGATION.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#6B6B65] hover:text-[#0F0F0E] transition-colors py-0.5 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-[#E4E2DC] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6B6B65]">
          <p>© {new Date().getFullYear()} AHPO Yachts International. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            {FOOTER_NAVIGATION.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-[#0F0F0E] transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
