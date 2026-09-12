"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  ArrowRight,
  X,
  Building2,
  FileCheck2,
  Lock,
} from "lucide-react";
import { trusteesData } from "@/data/trusteesData";
import TrusteeCard, { TRUSTEE_ICONS } from "./TrusteeCard";

export default function BoardOfTrustees() {
  const [activeProfile, setActiveProfile] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveProfile(null);
      }
    };
    if (activeProfile) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [activeProfile]);

  const { sectionTitle, introBlock, trustees } = trusteesData;

  const chairman = trustees.find((t) => t.id === "zeba-ijaz");
  const viceChairman = trustees.find((t) => t.id === "ijaz-naseer");
  const regularTrustees = trustees.filter((t) => !t.featured);

  // Animation variants respecting reduced motion
  const fadeUpVariant = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const slideLeftVariant = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const slideRightVariant = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const containerStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const ActiveIcon = activeProfile
    ? TRUSTEE_ICONS[activeProfile.icon] || ShieldCheck
    : ShieldCheck;

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-white border-b border-slate-200/80 overflow-hidden">
      {/* Premium Subtle Ambient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft radial teal glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-teal-50/70 via-emerald-50/30 to-transparent rounded-full blur-3xl opacity-75" />
        {/* Light subtle side glows */}
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-teal-50/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-50/40 rounded-full blur-3xl" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#0f766e 1px, transparent 1px), radial-gradient(#0f766e 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            backgroundPosition: "0 0, 20px 20px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        {/* SECTION HEADING & GOVERNANCE BADGE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUpVariant}
          className="max-w-3xl mx-auto text-center space-y-4"
        >
          {/* Eyebrow & Governance Badge */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-xs font-bold uppercase tracking-widest text-[#0f766e]">
              <span className="w-2 h-2 rounded-full bg-[#0f766e] animate-pulse" />
              <span>{sectionTitle.eyebrow}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-semibold text-slate-700">
              <ShieldCheck size={14} className="text-emerald-600" />
              <span>{sectionTitle.governanceBadge}</span>
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
            {sectionTitle.heading}
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {sectionTitle.description}
          </p>
        </motion.div>

        {/* INTRODUCTION BLOCK (Leadership with Purpose) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUpVariant}
          className="relative bg-gradient-to-r from-slate-50 via-[#f0fdfa]/50 to-slate-50 rounded-3xl p-8 sm:p-10 border border-teal-100/80 shadow-xs"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0f766e]">
                {introBlock.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                {introBlock.heading}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {introBlock.description}
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href={introBlock.ctaLink}
                className="btn-gradient inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
              >
                <span>{introBlock.ctaText}</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* TOP LEADERSHIP AREA (Chairman + Vice Chairman) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
            <div className="flex items-center gap-2">
              <Building2 size={18} className="text-[#0f766e]" />
              <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#0f172a]">
                Executive Board Leadership
              </h3>
            </div>
            <span className="text-xs font-semibold text-slate-500">
              Statutory Governance Tier
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Chairman */}
            {chairman && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={slideLeftVariant}
                className="h-full"
              >
                <TrusteeCard
                  trustee={chairman}
                  onSelectProfile={setActiveProfile}
                  isFeatured={true}
                />
              </motion.div>
            )}

            {/* Right: Vice Chairman */}
            {viceChairman && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={slideRightVariant}
                className="h-full"
              >
                <TrusteeCard
                  trustee={viceChairman}
                  onSelectProfile={setActiveProfile}
                  isFeatured={true}
                />
              </motion.div>
            )}
          </div>
        </div>

        {/* TRUSTEES GRID (Responsive: 3 cols desktop, 2 tablet, 1 mobile) */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
            <div className="flex items-center gap-2">
              <FileCheck2 size={18} className="text-[#0f766e]" />
              <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#0f172a]">
                Board Trustees &amp; Portfolio Portfolios
              </h3>
            </div>
            <span className="text-xs font-semibold text-slate-500">
              6 Appointed Portfolios
            </span>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerStagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {regularTrustees.map((trustee) => (
              <motion.div key={trustee.id} variants={fadeUpVariant} className="h-full">
                <TrusteeCard
                  trustee={trustee}
                  onSelectProfile={setActiveProfile}
                  isFeatured={false}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* INSTITUTIONAL PROFILE MODAL */}
      {activeProfile && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="trustee-modal-title"
          className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveProfile(null)}
        >
          <div
            className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveProfile(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:outline-none"
              aria-label="Close profile modal"
            >
              <X size={20} />
            </button>

            {/* Modal header */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6 text-center sm:text-left">
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-slate-100 border-2 border-slate-100 shadow-sm shrink-0">
                {activeProfile.hasRealPhoto && activeProfile.image ? (
                  <Image
                    src={activeProfile.image}
                    alt={activeProfile.name}
                    fill
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-teal-50/50 p-2 text-center">
                    <span className="text-[#0f766e] font-extrabold text-xl">
                      {activeProfile.name
                        .split(" ")
                        .filter((p) => !p.includes("."))
                        .slice(0, 2)
                        .map((p) => p[0])
                        .join("")}
                    </span>
                    <span className="text-[8px] font-bold text-slate-500 uppercase mt-0.5">
                      Portrait Pending
                    </span>
                  </div>
                )}
              </div>

              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-teal-50 border border-teal-200 text-xs font-bold text-[#0f766e] uppercase tracking-wider">
                  <ActiveIcon size={12} />
                  <span>{activeProfile.role}</span>
                </div>
                <h3
                  id="trustee-modal-title"
                  className="text-2xl font-extrabold text-[#0f172a]"
                >
                  {activeProfile.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#0f766e]">
                  {activeProfile.title}
                </p>
              </div>
            </div>

            {/* Accent divider */}
            <div className="h-[2px] w-full bg-gradient-to-r from-[#00779E] via-[#009688] to-[#059669]/20 rounded-full mb-6" />

            {/* Description / Scope */}
            <div className="space-y-4 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Governance &amp; Portfolio Mandate
              </h4>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {activeProfile.description}
              </p>
            </div>

            {/* Official Verification Notice */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3 mb-6">
              <ShieldCheck size={20} className="text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs space-y-0.5 text-slate-600">
                <span className="font-bold text-[#0f172a] block">
                  Official Statutory Appointment
                </span>
                <p className="text-[11px] leading-relaxed">
                  Member of the Board of Trustees of ROYSONS TRUST, acting under fiduciary stewardship standards, responsible governance, and statutory trust compliance.
                </p>
              </div>
            </div>

            {/* Modal footer */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <span className="text-[11px] text-slate-500 font-mono">
                ROYSONS TRUST &bull; Official Board Record
              </span>
              <button
                onClick={() => setActiveProfile(null)}
                className="px-5 py-2 rounded-xl bg-[#0f172a] hover:bg-[#00779E] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
