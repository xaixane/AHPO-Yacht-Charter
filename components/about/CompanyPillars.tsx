import React from "react";
import { ShieldCheck, Anchor, Compass, Award } from "lucide-react";

export function CompanyPillars() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Uncompromised Discretion",
      description: "Protecting client privacy, non-disclosure agreements, and confidential vessel charters across all global territories.",
    },
    {
      icon: Anchor,
      title: "MYBA Accredited Standards",
      description: "Operating strictly under Mediterranean Yacht Brokers Association contract standards to ensure complete legal transparency.",
    },
    {
      icon: Compass,
      title: "Global Maritime Intelligence",
      description: "24/7 shore support, captain advisory, and off-market vessel access across the Mediterranean, Caribbean, and Pacific.",
    },
    {
      icon: Award,
      title: "Michelin & Spa Hospitality",
      description: "Curating 5-star onboard crew setups, Michelin-trained chefs, and specialized wellness therapists tailored to your party.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 divide-[#E4E2DC] border-t border-[#E4E2DC] my-12">
      {pillars.map((p, i) => {
        const Icon = p.icon;
        const isRightCol = i % 2 === 1;
        return (
          <div
            key={i}
            className={`py-8 space-y-4 ${isRightCol ? "md:pl-10 md:border-l md:border-[#E4E2DC]" : "md:pr-10"} ${
              i < 2 ? "" : "md:border-t md:border-[#E4E2DC]"
            }`}
          >
            <div className="w-11 h-11 rounded-full border border-[#E4E2DC] flex items-center justify-center text-[#0F0F0E]">
              <Icon className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-2xl text-[#0F0F0E]">{p.title}</h4>
            <p className="text-xs sm:text-sm text-[#6B6B65] leading-relaxed">{p.description}</p>
          </div>
        );
      })}
    </div>
  );
}
