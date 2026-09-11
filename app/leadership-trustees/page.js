"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Users,
  Award,
  FileCheck,
  Scale,
  HeartHandshake,
  Activity,
  ArrowRight,
  X,
  Quote,
  CheckCircle2,
} from "lucide-react";
import { LinkedinIcon } from "@/components/ui/SocialIcons";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { teamData } from "@/data/teamData";

const GOVERNANCE_ICONS = {
  ShieldCheck,
  FileCheck,
  Scale,
  HeartHandshake,
  Activity,
};

export default function LeadershipTrusteesPage() {
  const [activeProfile, setActiveProfile] = useState(null);

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <PageHero
        badge="GOVERNANCE & STEWARDSHIP"
        title="Leadership With Purpose"
        description="Guided by Responsibility. Driven by Impact."
        breadcrumbs={[{ label: "Leadership & Trustees" }]}
      />

      {/* LEADERSHIP INTRO */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-black uppercase tracking-widest text-[#0f766e] bg-teal-50 px-4 py-1.5 rounded-full border border-teal-200">
            Fiduciary Stewardship
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] leading-snug">
            {teamData.leadershipIntro.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {teamData.leadershipIntro.description}
          </p>
          <div className="pt-2 flex items-center justify-center gap-2 text-xs font-semibold text-slate-500">
            <ShieldCheck size={16} className="text-emerald-500" />
            <span>All appointments conform to statutory Trust guidelines and fiduciary audit standards.</span>
          </div>
        </div>
      </section>

      {/* LEADERSHIP TEAM */}
      <section className="py-20 bg-[#f8fafc] border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="EXECUTIVE LEADERSHIP"
            title="Leadership Team"
            subtitle="Experienced professionals guiding daily programmatic deployment, financial management, and humanitarian field missions."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {teamData.leadershipTeam.map((leader) => (
              <div
                key={leader.id}
                className="group bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Photo with hover zoom & overlay */}
                <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent opacity-40 group-hover:opacity-75 transition-opacity" />

                  {/* Overlay button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-xs">
                    <button
                      onClick={() => setActiveProfile(leader)}
                      className="px-5 py-2.5 rounded-xl bg-white text-[#0f172a] text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-slate-50 transition-all transform translate-y-2 group-hover:translate-y-0 cursor-pointer"
                    >
                      View Profile
                    </button>
                  </div>

                  <div className="absolute bottom-3 left-3 z-10">
                    <span className="text-[11px] font-bold text-white/90 bg-[#0f172a]/60 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                      {leader.department}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-[#0f172a]">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#0f766e]">
                      {leader.designation}
                    </p>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed pt-2">
                      {leader.bio}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setActiveProfile(leader)}
                      className="text-xs font-bold text-[#2563eb] hover:underline cursor-pointer"
                    >
                      Read Full Bio
                    </button>

                    {leader.linkedin && (
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${leader.name} LinkedIn`}
                        className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-[#2563eb] text-slate-600 hover:text-white flex items-center justify-center transition-colors"
                      >
                        <LinkedinIcon size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTEES SECTION */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="GOVERNING BODY"
            title="Board of Trustees"
            subtitle="The Board of Trustees provides strategic oversight, institutional accountability, and fiduciary custody of ROYSONS TRUST."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamData.trustees.map((trustee) => (
              <div
                key={trustee.id}
                className="bg-slate-50 hover:bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="relative h-44 w-full rounded-2xl overflow-hidden bg-slate-200">
                    <Image
                      src={trustee.photo}
                      alt={trustee.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-[#0f172a]">
                      {trustee.name}
                    </h3>
                    <p className="text-xs font-bold text-[#0f766e]">
                      {trustee.role}
                    </p>
                    <span className="inline-block text-[10px] font-semibold text-slate-500 bg-slate-200/80 px-2 py-0.5 rounded">
                      {trustee.term}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {trustee.shortDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSIBLE GOVERNANCE (5 ICON CARDS) */}
      <section className="py-20 sm:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="FIDUCIARY PRINCIPLES"
            title="Responsible Governance"
            subtitle="Transparency, ethical conduct, and uncompromised accountability form the bedrock of our operating charter."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 pt-4">
            {teamData.governancePillars.map((pillar, idx) => {
              const Icon = GOVERNANCE_ICONS[pillar.icon] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all space-y-3 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#0f766e] group-hover:scale-110 flex items-center justify-center transition-transform shadow-xs">
                      <Icon size={22} />
                    </div>
                    <h4 className="text-base font-bold text-[#0f172a] group-hover:text-[#0f766e] transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
                    <CheckCircle2 size={13} />
                    <span>Audited Standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Profile Detail Modal */}
      {activeProfile && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in"
          onClick={() => setActiveProfile(null)}
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveProfile(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-slate-100 shrink-0">
                <Image
                  src={activeProfile.image}
                  alt={activeProfile.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-xs font-bold text-[#0f766e] uppercase tracking-wider">
                  {activeProfile.department}
                </span>
                <h3 className="text-xl font-black text-[#0f172a]">
                  {activeProfile.name}
                </h3>
                <p className="text-xs text-slate-500 font-semibold">
                  {activeProfile.designation}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {activeProfile.bio}
            </p>

            {activeProfile.quote && (
              <div className="p-4 rounded-2xl bg-[#eff6ff] border-l-4 border-[#2563eb] mb-6">
                <p className="text-xs italic text-slate-700 font-medium">
                  &ldquo;{activeProfile.quote}&rdquo;
                </p>
              </div>
            )}

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <span className="text-xs text-slate-400 font-mono">
                [Official Verified Appointment]
              </span>
              <button
                onClick={() => setActiveProfile(null)}
                className="px-5 py-2 rounded-xl bg-[#0f172a] hover:bg-[#2563eb] text-white text-xs font-bold transition-colors"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
