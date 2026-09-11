"use client";

import {
  Heart,
  GraduationCap,
  BookOpen,
  Users,
  Search,
  Handshake,
  HeartPulse,
  LineChart,
  Sparkles,
  Ear,
  Building,
  CheckCircle2,
  ShieldCheck,
  Award,
  Layers,
  Droplets,
  ArrowRight,
} from "lucide-react";

const ICON_MAP = {
  Heart,
  GraduationCap,
  BookOpen,
  Users,
  Search,
  Handshake,
  HeartPulse,
  LineChart,
  Sparkles,
  Ear,
  Building,
  CheckCircle2,
  ShieldCheck,
  Award,
  Layers,
  Droplets,
};

export default function ProgramApproach({ approach, accentColor = "#009688" }) {
  const { modelType, heading, description, items } = approach;

  return (
    <section className="py-20 sm:py-24 bg-neutral-50 border-y border-neutral-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white text-neutral-800 border border-neutral-200 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
            Methodology &amp; Framework
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight">
            {heading}
          </h2>
          {description && (
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              {description}
            </p>
          )}
        </div>

        {/* LAYOUT 1: CARDS (Education) */}
        {modelType === "cards" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, idx) => {
              const Icon = ICON_MAP[item.icon] || Sparkles;
              return (
                <div
                  key={idx}
                  className="group bg-white rounded-3xl p-7 border border-neutral-200 shadow-xs hover:shadow-xl hover:-translate-y-2 hover:border-[#009688]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-neutral-100 text-neutral-800 group-hover:bg-neutral-900 group-hover:text-white group-hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-xs">
                      <Icon size={26} />
                    </div>
                    <span className="text-xs font-mono font-bold text-neutral-400 block">
                      Pillar 0{idx + 1}
                    </span>
                    <h3 className="text-xl font-bold text-[#111111] group-hover:text-[#009688] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-5 mt-5 border-t border-neutral-100 flex items-center gap-2 text-xs font-bold text-[#009688] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn More</span>
                    <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* LAYOUT 2: TIMELINE (Healthcare & Humanitarian Support) */}
        {modelType === "timeline" && (
          <div className="relative">
            {/* Desktop connecting line */}
            <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-neutral-200 -translate-y-6 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {items.map((item, idx) => {
                const Icon = ICON_MAP[item.icon] || Sparkles;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl p-6 border border-neutral-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="w-10 h-10 rounded-xl bg-neutral-900 text-white font-mono font-bold text-sm flex items-center justify-center shadow-xs">
                          {item.step}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-neutral-100 text-[#009688] flex items-center justify-center">
                          <Icon size={20} />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-[#111111] pt-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* LAYOUT 3: PROCESS (Community Development) */}
        {modelType === "process" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {items.map((item, idx) => {
              const Icon = ICON_MAP[item.icon] || Sparkles;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-neutral-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold px-2 py-1 rounded bg-neutral-100 text-neutral-700">
                      Step {item.step}
                    </span>
                    <Icon size={20} className="text-[#059669]" />
                  </div>
                  <h3 className="text-base font-bold text-[#111111]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {/* LAYOUT 4: YOUTH JOURNEY (Youth Empowerment) */}
        {modelType === "youthJourney" && (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {items.map((item, idx) => {
              const Icon = ICON_MAP[item.icon] || Sparkles;
              return (
                <div
                  key={idx}
                  className="relative group bg-white rounded-3xl p-6 border border-neutral-200 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-100 text-neutral-800 group-hover:bg-black group-hover:text-white flex items-center justify-center transition-colors">
                      <Icon size={22} />
                    </div>
                    <span className="text-xs font-mono font-bold text-neutral-400 block">
                      Stage {item.step}
                    </span>
                    <h3 className="text-xl font-bold text-[#111111]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* LAYOUT 5: CIRCULAR (Sustainable Development) */}
        {modelType === "circular" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, idx) => {
              const Icon = ICON_MAP[item.icon] || Sparkles;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-7 border border-neutral-200 hover:border-emerald-500/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#059669] flex items-center justify-center font-bold">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-mono font-black text-neutral-400">
                      Phase {item.step} / 06
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#111111] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
