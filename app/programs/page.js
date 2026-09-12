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
      <section className="py-8 sm:py-10 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-5">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#00779E]">
              Quick Navigation
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
              Select a Program Pillar
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5">
            {programsData.map((prog) => {
              const Icon = CATEGORY_ICONS[prog.category] || Sparkles;
              return (
                <a
                  key={prog.id}
                  href={`#${prog.slug}`}
                  className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl bg-slate-50 hover:bg-[#eff6ff] hover:text-[#00779E] text-slate-800 text-sm sm:text-base font-bold border border-slate-200 hover:border-[#00779E]/40 transition-all shadow-2xs"
                >
                  <Icon size={18} className="text-[#00779E]" />
                  <span>{prog.shortTitle}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROGRAM DETAIL CARDS */}
      <section className="py-16 sm:py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          {programsData.map((prog, idx) => {
            const Icon = CATEGORY_ICONS[prog.category] || Sparkles;
            const isReversed = idx % 2 !== 0;

            return (
              <div
                key={prog.id}
                id={prog.slug}
                className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden scroll-mt-28"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Program Image Column */}
                  <div className={`lg:col-span-5 relative min-h-[320px] sm:min-h-[380px] lg:min-h-[460px] bg-slate-100 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <Image
                      src={prog.hero?.coverImage || prog.coverImage || "/trust/roysons_trust_hero.jpg"}
                      alt={prog.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/70 via-transparent to-transparent lg:hidden" />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0f172a] shadow-sm border border-slate-200">
                        <Icon size={16} className="text-[#00779E]" />
                        <span>{prog.category}</span>
                      </span>
                    </div>
                  </div>

                  {/* Program Content Column */}
                  <div className={`lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6 sm:space-y-7 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="space-y-5">
                      <div className="hidden lg:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-[#00779E] text-xs sm:text-sm font-bold uppercase tracking-wider border border-teal-200/50">
                        <Icon size={16} />
                        <span>{prog.category}</span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-snug">
                        {prog.title}
                      </h2>

                      <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                        {prog.hero?.description || prog.description || prog.tagline}
                      </p>

                      {/* Objectives */}
                      {prog.objectives && (
                        <div className="space-y-3 pt-2">
                          <h4 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#0f172a] flex items-center gap-2">
                            <Target size={18} className="text-[#00779E]" />
                            <span>Program Objectives</span>
                          </h4>
                          <ul className="space-y-2">
                            {prog.objectives.map((obj, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700 font-medium">
                                <CheckCircle2 size={19} className="text-emerald-600 shrink-0 mt-0.5" />
                                <span>{typeof obj === "string" ? obj : obj.title || obj.desc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Who We Serve & Expected Impact Dual Box */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                            <Users size={16} className="text-[#00779E]" />
                            <span>Who We Serve</span>
                          </span>
                          <p className="text-sm text-slate-800 leading-relaxed font-semibold">
                            {Array.isArray(prog.whoWeServe)
                              ? prog.whoWeServe.map((w) => (typeof w === "string" ? w : w.title)).join(" • ")
                              : prog.whoWeServe || "Vulnerable and marginalized communities"}
                          </p>
                        </div>

                        <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-1.5">
                          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                            <Sparkles size={16} className="text-[#16a34a]" />
                            <span>Expected Impact</span>
                          </span>
                          <p className="text-sm text-slate-800 leading-relaxed font-semibold">
                            {prog.tagline || (Array.isArray(prog.metrics) && prog.metrics.length > 0 ? `${prog.metrics[0].value} ${prog.metrics[0].label}` : "Sustainable long-term community transformation")}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-3 sm:gap-4">
                      <Link
                        href={`/programs/${prog.slug}`}
                        className="btn-primary inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm"
                      >
                        <span>Explore Program Details</span>
                        <ArrowRight size={15} />
                      </Link>

                      <Link
                        href={`/donate?cause=${encodeURIComponent(prog.category)}`}
                        className="btn-emerald inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm"
                      >
                        <Heart size={15} className="fill-white" />
                        <span>Support This Program</span>
                      </Link>

                      <Link
                        href="/contact"
                        className="btn-secondary inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider"
                      >
                        <span>Inquire About Partnership</span>
                        <ArrowRight size={15} />
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
      <section className="py-20 bg-[#0f172a] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-5">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Have a Specific Humanitarian Initiative in Mind?
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            ROYSONS TRUST welcomes institutional donors, corporate CSR alliances, and family foundations to collaborate on tailored community development programs.
          </p>
          <div className="pt-3">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg hover:scale-[1.02] transition-all"
            >
              <span>Contact Program Directors</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
