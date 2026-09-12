"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  GraduationCap,
  HeartPulse,
  Building,
  HandHeart,
  Sparkles,
  Layers,
} from "lucide-react";

const CATEGORY_ICONS = {
  "Education & Skills": GraduationCap,
  "Healthcare & Wellbeing": HeartPulse,
  "Community Development": Building,
  "Youth Empowerment": Sparkles,
  "Humanitarian Support": HandHeart,
  "Sustainable Development": Layers,
};

export default function ProgramCard({ program }) {
  const IconComponent = CATEGORY_ICONS[program.category] || Sparkles;

  return (
    <div className="group relative bg-white rounded-3xl border border-neutral-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1.5 hover:border-neutral-400/80 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Top Image Banner with Zoom */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-neutral-100">
        <Image
          src={program.hero?.coverImage || program.coverImage || "/trust/roysons_trust_hero.jpg"}
          alt={program.title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Floating Category Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md text-[#111111] flex items-center justify-center shadow-md transform group-hover:scale-108 transition-transform duration-300">
            <IconComponent size={20} className="text-[#009688]" />
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md text-white text-xs sm:text-[13px] font-bold uppercase tracking-wider border border-white/20 shadow-xs">
            {program.shortTitle}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
        <div>
          <h3 className="text-2xl sm:text-[26px] lg:text-3xl font-extrabold text-[#111111] group-hover:text-[#009688] transition-colors mb-3 line-clamp-1 tracking-tight">
            {program.shortTitle}
          </h3>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed line-clamp-3 mb-5 font-normal">
            {program.tagline || program.hero?.description}
          </p>

          {/* Quick Metrics */}
          {program.stats && (
            <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-neutral-100">
              {program.stats.slice(0, 2).map((s, idx) => (
                <div key={idx} className="bg-neutral-50 rounded-xl p-3 text-center border border-neutral-200/60">
                  <span className="block text-base sm:text-lg font-black text-[#111111]">
                    {s.value}
                  </span>
                  <span className="block text-xs sm:text-[13px] text-neutral-500 font-medium truncate mt-0.5">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
          <Link
            href={`/programs/${program.slug}`}
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold tracking-wide text-[#111111] group-hover:text-[#009688] transition-colors"
          >
            <span>Explore Program</span>
            <ArrowRight
              size={16}
              className="transform group-hover:translate-x-1.5 transition-transform text-[#009688]"
            />
          </Link>
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
            Verified
          </span>
        </div>
      </div>
    </div>
  );
}
