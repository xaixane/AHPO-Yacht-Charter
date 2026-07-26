export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  href: string;
  items?: NavLink[];
}

export const MAIN_NAVIGATION: NavGroup[] = [
  {
    label: "Fleet",
    href: "/yachts",
    items: [
      { label: "All Superyachts", href: "/yachts", description: "Browse our handpicked luxury charter fleet" },
      { label: "Check Availability", href: "/yachts/availability", description: "Filter vessels by charter dates and guest size" },
      { label: "Compare Yachts", href: "/yachts/compare", description: "Compare specifications and pricing side-by-side" },
    ],
  },
  {
    label: "Get Quote",
    href: "/enquire",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const FOOTER_NAVIGATION = {
  fleet: [
    { label: "Browse All Yachts", href: "/yachts" },
    { label: "Check Availability", href: "/yachts/availability" },
    { label: "Compare Yachts", href: "/yachts/compare" },
    { label: "Request Custom Quote", href: "/enquire" },
  ],
  company: [
    { label: "About AHPO Yachts", href: "/about" },
    { label: "Contact Concierge", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Accessibility", href: "/accessibility" },
  ],
};
