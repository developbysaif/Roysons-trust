import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  ArrowRight,
  GraduationCap,
  HeartPulse,
  Building,
  Sparkles,
  HandHeart,
  Layers,
  CheckCircle2,
  Users,
  Target,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { programsData } from "@/data/programsData";

export const metadata = {
  title: "Our Programs – Programs Designed for Meaningful Change",
  description:
    "Explore ROYSONS TRUST programs: Education & Skills, Healthcare & Wellbeing, Community Development, Youth & Empowerment, Humanitarian Assistance, and Sustainable Development.",
};

const CATEGORY_ICONS = {
  "Education & Skills": GraduationCap,
  "Healthcare & Wellbeing": HeartPulse,
  "Community Development": Building,
  "Youth Empowerment": Sparkles,
  "Humanitarian Support": HandHeart,
  "Sustainable Development": Layers,
};

export default function ProgramsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <PageHero
        badge="STRATEGIC PORTFOLIO"
        title="Programs Designed for Meaningful Change"
        description="From immediate support to long-term development."
        breadcrumbs={[{ label: "Our Programs" }]}
      />

      {/* Program Categories Overview Pills */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {programsData.map((prog) => {
              const Icon = CATEGORY_ICONS[prog.category] || Sparkles;
              return (
                <Link
                  key={prog.id}
                  href={`/programs/${prog.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 hover:bg-[#eff6ff] hover:text-[#2563eb] text-slate-700 text-xs font-bold border border-slate-200 transition-all shadow-2xs"
                >
                  <Icon size={14} className="text-[#0f766e]" />
                  <span>{prog.shortTitle}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROGRAM DETAIL CARDS */}
      <section className="py-16 sm:py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {programsData.map((prog, idx) => {
            const Icon = CATEGORY_ICONS[prog.category] || Sparkles;
            const isReversed = idx % 2 !== 0;

            return (
              <div
                key={prog.id}
                id={prog.slug}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${isReversed ? "lg:flex-row-reverse" : ""}`}>
                  {/* Program Image Column */}
                  <div className={`lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-slate-100 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <Image
                      src={prog.hero?.coverImage || prog.coverImage || "/trust/roysons_trust_hero.jpg"}
                      alt={prog.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/70 via-transparent to-transparent lg:hidden" />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-[#0f172a] shadow-sm">
                        <Icon size={14} className="text-[#2563eb]" />
                        <span>{prog.category}</span>
                      </span>
                    </div>
                  </div>

                  {/* Program Content Column */}
                  <div className={`lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="space-y-4">
                      <div className="hidden lg:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-[#0f766e] text-xs font-bold uppercase tracking-wider">
                        <Icon size={14} />
                        <span>{prog.category}</span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
                        {prog.title}
                      </h2>

                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                        {prog.hero?.description || prog.description || prog.tagline}
                      </p>

                      {/* Objectives */}
                      {prog.objectives && (
                        <div className="space-y-2 pt-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f172a] flex items-center gap-1.5">
                            <Target size={14} className="text-[#2563eb]" />
                            <span>Program Objectives</span>
                          </h4>
                          <ul className="space-y-1.5">
                            {prog.objectives.map((obj, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                                <span>{typeof obj === "string" ? obj : obj.title || obj.desc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Who We Serve & Expected Impact Dual Box */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                            <Users size={12} className="text-[#0f766e]" />
                            <span>Who We Serve</span>
                          </span>
                          <p className="text-xs text-slate-700 leading-relaxed">
                            {Array.isArray(prog.whoWeServe)
                              ? prog.whoWeServe.map((w) => (typeof w === "string" ? w : w.title)).join(" • ")
                              : prog.whoWeServe || "Vulnerable and marginalized communities"}
                          </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/60 space-y-1">
                          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1">
                            <Sparkles size={12} className="text-[#16a34a]" />
                            <span>Expected Impact</span>
                          </span>
                          <p className="text-xs text-slate-700 leading-relaxed">
                            {prog.tagline || (Array.isArray(prog.metrics) && prog.metrics.length > 0 ? `${prog.metrics[0].value} ${prog.metrics[0].label}` : "Sustainable long-term community transformation")}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/programs/${prog.slug}`}
                        className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-xs font-bold uppercase tracking-wider shadow-sm group"
                      >
                        <span>Explore Program Details</span>
                        <ArrowRight size={13} className="transform transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>

                      <Link
                        href={`/donate?cause=${encodeURIComponent(prog.category)}`}
                        className="btn-emerald inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-xs font-bold uppercase tracking-wider shadow-sm"
                      >
                        <Heart size={14} className="fill-white" />
                        <span>Support This Program</span>
                      </Link>

                      <Link
                        href="/contact"
                        className="btn-secondary inline-flex items-center gap-1.5 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider"
                      >
                        <span>Inquire About Partnership</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#0f172a] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Have a Specific Humanitarian Initiative in Mind?
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto">
            ROYSONS TRUST welcomes institutional donors, corporate CSR alliances, and family foundations to collaborate on tailored community development programs.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white text-xs font-bold uppercase tracking-wider shadow-lg"
            >
              <span>Contact Program Directors</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
