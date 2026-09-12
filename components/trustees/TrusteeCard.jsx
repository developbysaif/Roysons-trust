"use client";

import Image from "next/image";
import {
  Crown,
  Award,
  GraduationCap,
  HeartPulse,
  Users,
  Scale,
  ChartNoAxesCombined,
  Handshake,
  ArrowRight,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

export const TRUSTEE_ICONS = {
  Crown,
  Award,
  GraduationCap,
  HeartPulse,
  Users,
  Scale,
  ChartNoAxesCombined,
  Handshake,
};

export default function TrusteeCard({
  trustee,
  onSelectProfile,
  isFeatured = false,
}) {
  const IconComponent = TRUSTEE_ICONS[trustee.icon] || ShieldCheck;

  // Extract initials for the official placeholder
  const initials = trustee.name
    .split(" ")
    .filter((part) => !part.includes("."))
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

  if (isFeatured) {
    return (
      <div className="group relative bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-300 shadow-sm hover:shadow-2xl hover:border-[#00779E] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden">
        {/* Subtle accent corner glow */}
        <div className="absolute top-0 right-0 w-52 h-52 bg-gradient-to-br from-teal-100/40 via-cyan-100/20 to-transparent rounded-bl-full pointer-events-none transition-opacity duration-300 group-hover:opacity-100 opacity-60" />

        <div className="space-y-6 relative z-10">
          {/* Top row: Portrait + Role Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            {/* Portrait Image or Official Placeholder */}
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-3xl overflow-hidden bg-slate-100 border-2 border-slate-200 shadow-md shrink-0">
              {trustee.hasRealPhoto && trustee.image ? (
                <Image
                  src={trustee.image}
                  alt={`${trustee.name}, ${trustee.role} of Roysons Trust`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 128px, (max-width: 1024px) 144px, 160px"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 via-teal-50/50 to-slate-200 p-2 text-center">
                  <div className="w-14 h-14 rounded-full bg-white text-[#0f766e] flex items-center justify-center font-black text-xl shadow-xs mb-1 border border-teal-200">
                    {initials}
                  </div>
                  <span className="text-[11px] leading-tight font-bold text-slate-600 uppercase tracking-tight">
                    Official portrait to be added
                  </span>
                </div>
              )}
            </div>

            {/* Header details */}
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-300 text-xs sm:text-sm font-extrabold text-[#0f766e] uppercase tracking-wider shadow-2xs">
                <IconComponent size={16} className="text-[#0f766e]" />
                <span>{trustee.role}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] tracking-tight leading-snug">
                {trustee.name}
              </h3>

              <p className="text-sm sm:text-base font-bold text-[#00779E] leading-snug">
                {trustee.title}
              </p>
            </div>
          </div>

          {/* Elegant accent divider line */}
          <div className="h-[2.5px] w-full bg-gradient-to-r from-[#00779E] via-[#009688] to-[#059669] rounded-full" />

          {/* Description with enhanced size and high contrast */}
          <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
            {trustee.description}
          </p>
        </div>

        {/* Footer actions */}
        <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between relative z-10">
          <button
            onClick={() => onSelectProfile(trustee)}
            className="inline-flex items-center gap-2 text-sm sm:text-base font-black text-[#0f172a] hover:text-[#00779E] transition-colors group/btn cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-lg px-2 py-1"
            aria-label={`View full profile of ${trustee.name}`}
          >
            <span>View Profile</span>
            <ArrowRight
              size={18}
              className="text-[#00779E] transform transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </button>

          <span className="text-xs sm:text-sm font-bold text-slate-700 inline-flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
            <UserCheck size={15} className="text-emerald-600" />
            <span>Executive Board</span>
          </span>
        </div>
      </div>
    );
  }

  // Standard Trustee Card (Grid of 6)
  return (
    <div className="group bg-white rounded-3xl p-6 sm:p-7 border border-slate-300 shadow-sm hover:shadow-2xl hover:border-[#00779E] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full">
      <div className="space-y-5">
        {/* Portrait or Official Placeholder */}
        <div className="relative h-60 sm:h-64 w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs">
          {trustee.hasRealPhoto && trustee.image ? (
            <Image
              src={trustee.image}
              alt={`${trustee.name}, ${trustee.title}`}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-teal-50/40 to-slate-100 p-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-300 flex items-center justify-center text-[#0f766e] font-black text-2xl mb-3">
                {initials}
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-300 text-xs font-bold text-slate-700 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#009688]" />
                <span>Official portrait to be added</span>
              </div>
            </div>
          )}

          {/* Role badge overlay */}
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-300 text-xs font-black uppercase tracking-wider text-[#0f172a] shadow-md">
              <IconComponent size={14} className="text-[#00779E]" />
              <span>TRUSTEE</span>
            </span>
          </div>
        </div>

        {/* Content with high contrast and larger typography */}
        <div className="space-y-2.5">
          <h3 className="text-xl sm:text-2xl font-black text-[#0f172a] tracking-tight leading-snug group-hover:text-[#00779E] transition-colors">
            {trustee.name}
          </h3>

          <p className="text-sm sm:text-base font-bold text-[#00779E] leading-snug">
            {trustee.title}
          </p>

          <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal pt-1">
            {trustee.description}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-5 mt-5 border-t border-slate-200 flex items-center justify-between">
        <button
          onClick={() => onSelectProfile(trustee)}
          className="inline-flex items-center gap-2 text-sm sm:text-base font-black text-[#0f172a] hover:text-[#00779E] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-lg px-2 py-1"
          aria-label={`View profile of ${trustee.name}`}
        >
          <span>View Profile</span>
          <ArrowRight
            size={16}
            className="text-[#00779E] transform transition-transform duration-300 group-hover:translate-x-1.5"
          />
        </button>

        <span className="text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
          Verified Trustee
        </span>
      </div>
    </div>
  );
}
