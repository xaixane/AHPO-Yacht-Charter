import React from "react";
import Link from "next/link";
import Image from "next/image";
import { EXPERIENCE_PREVIEWS } from "@/lib/data/homepage";
import { Reveal } from "@/components/motion/Reveal";

export function ExperiencesPreview() {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-[5%] bg-white text-[#0F0F0E]">
      <div className="space-y-12">
        <span className="text-xs uppercase tracking-[0.2em] text-[#6B6B65] font-semibold block">
          Experiences
        </span>

        <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-10" stagger={0.15}>
          {EXPERIENCE_PREVIEWS.map((exp) => (
            <Link key={exp.id} href={`/enquire?experience=${encodeURIComponent(exp.title)}`} className="group space-y-4 block">
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1.5">
                <span className="text-xs text-[#6B6B65] font-semibold block">
                  {exp.number}
                </span>
                <h3 className="font-sans text-lg font-bold tracking-tight uppercase">
                  {exp.title}
                </h3>
                <p className="text-xs text-[#6B6B65] leading-relaxed">
                  {exp.description.split(".")[0]}.
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#0F0F0E] pt-1">
                  Discover
                  <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
