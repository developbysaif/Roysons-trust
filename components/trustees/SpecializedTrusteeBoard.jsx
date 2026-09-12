"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  GraduationCap,
  HeartPulse,
  Users,
  Scale,
  ChartNoAxesCombined,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  X,
  Award,
  Layers,
  Sparkles,
} from "lucide-react";
import { trusteesData } from "@/data/trusteesData";

const SPECIALIZED_ICONS = {
  GraduationCap,
  HeartPulse,
  Users,
  Scale,
  ChartNoAxesCombined,
};

export default function SpecializedTrusteeBoard() {
  const [activePortfolio, setActivePortfolio] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  // Handle escape key for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActivePortfolio(null);
      }
    };
    if (activePortfolio) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [activePortfolio]);

  const { specializedTrusteesSection, specializedTrustees } = trusteesData;

  const fadeUpVariant = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const containerStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const ActiveIcon = activePortfolio
    ? SPECIALIZED_ICONS[activePortfolio.icon] || ShieldCheck
    : ShieldCheck;

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-[#f8fafc] border-b border-slate-200/80 overflow-hidden">
      {/* Background Decorative Ambient Tints */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-gradient-to-bl from-teal-50/70 via-emerald-50/20 to-transparent rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-gradient-to-tr from-cyan-50/60 via-slate-100 to-transparent rounded-full blur-3xl opacity-70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
        {/* SECTION HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUpVariant}
          className="max-w-3xl mx-auto text-center space-y-4"
        >
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-xs font-bold uppercase tracking-widest text-[#0f766e]">
              <Layers size={13} className="text-[#0f766e]" />
              <span>{specializedTrusteesSection.eyebrow}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
              <ShieldCheck size={14} className="text-emerald-600" />
              <span>{specializedTrusteesSection.badge}</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
            {specializedTrusteesSection.heading}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {specializedTrusteesSection.description}
          </p>
        </motion.div>

        {/* 5 SPECIALIZED PORTFOLIO TRUSTEE CARDS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerStagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {specializedTrustees.map((item, idx) => {
            const Icon = SPECIALIZED_ICONS[item.icon] || ShieldCheck;

            return (
              <motion.div
                key={item.id}
                variants={fadeUpVariant}
                className={`group bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-[#0f766e]/50 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  idx === 3 || idx === 4 ? "lg:col-span-1" : ""
                }`}
              >
                <div>
                  {/* Portrait with zoom & gradient vignette */}
                  <div className="relative h-64 sm:h-72 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`${item.seniorTitle}, Roysons Trust`}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/85 via-[#0f172a]/30 to-transparent" />

                    {/* Floating Domain Badge */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md text-[#00779E] flex items-center justify-center shadow-md">
                        <Icon size={20} />
                      </div>
                      <span className="px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-white text-xs sm:text-[13px] font-extrabold uppercase tracking-wider border border-white/30 shadow-xs">
                        {item.shortTitle}
                      </span>
                    </div>

                    {/* Bottom Title on Image */}
                    <div className="absolute bottom-4 left-4 right-4 z-10 text-white space-y-1">
                      <span className="text-xs font-black text-teal-300 uppercase tracking-widest block drop-shadow-sm">
                        Official Portfolio
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white leading-snug drop-shadow-md">
                        {item.seniorTitle}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content with larger font size & high contrast */}
                  <div className="p-6 sm:p-7 space-y-5">
                    <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                      {item.description}
                    </p>

                    {/* Key Strategic Focus Areas */}
                    <div className="space-y-2.5 pt-3 border-t border-slate-200">
                      <span className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-[#00779E] block">
                        Strategic Mandates
                      </span>
                      <ul className="space-y-2">
                        {item.focusAreas.map((fa, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-900 font-bold"
                          >
                            <CheckCircle2
                              size={16}
                              className="text-emerald-600 shrink-0"
                            />
                            <span>{fa}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Action Button */}
                <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 mt-2">
                  <button
                    onClick={() => setActivePortfolio(item)}
                    className="w-full inline-flex items-center justify-between px-5 py-3 rounded-2xl bg-[#0f172a] hover:bg-[#00779E] text-white text-xs sm:text-sm font-extrabold tracking-wide transition-all shadow-sm hover:shadow-md cursor-pointer group/btn"
                  >
                    <span>View Portfolio Charter</span>
                    <ArrowRight
                      size={16}
                      className="text-teal-300 transform group-hover/btn:translate-x-1.5 transition-transform"
                    />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* PORTFOLIO CHARTER MODAL */}
      {activePortfolio && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-slate-900/65 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActivePortfolio(null)}
        >
          <div
            className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePortfolio(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6 text-center sm:text-left">
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-slate-100 border-2 border-slate-100 shadow-md shrink-0">
                <Image
                  src={activePortfolio.image}
                  alt={activePortfolio.seniorTitle}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-teal-50 border border-teal-200 text-xs font-bold text-[#0f766e] uppercase tracking-wider">
                  <ActiveIcon size={13} />
                  <span>{activePortfolio.shortTitle}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0f172a]">
                  {activePortfolio.seniorTitle}
                </h3>
                <p className="text-xs font-semibold text-[#0f766e]">
                  {activePortfolio.portfolio}
                </p>
              </div>
            </div>

            <div className="h-[2px] w-full bg-gradient-to-r from-[#00779E] via-[#009688] to-[#059669]/20 rounded-full mb-6" />

            {/* Description */}
            <div className="space-y-4 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Institutional Mandate &amp; Scope
              </h4>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {activePortfolio.description}
              </p>
            </div>

            {/* Focus Areas */}
            <div className="space-y-3 mb-6 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#0f172a]">
                Primary Programmatic Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activePortfolio.focusAreas.map((fa, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs font-semibold text-slate-700"
                  >
                    <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                    <span>{fa}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <span className="text-[11px] text-slate-500 font-mono">
                ROYSONS TRUST &bull; Specialized Governance
              </span>
              <button
                onClick={() => setActivePortfolio(null)}
                className="px-5 py-2 rounded-xl bg-[#0f172a] hover:bg-[#00779E] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close Charter
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
