import Link from "next/link";
import Image from "next/image";
import {
  Compass,
  Target,
  Heart,
  Users,
  Building,
  Sparkles,
  HeartPulse,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Mission & Vision – A Clear Purpose. A Better Future.",
  description:
    "Discover ROYSONS TRUST's enduring mission, long-term vision, 5 core mission pillars, and values driving social impact.",
};

export default function MissionVisionPage() {
  const missionPillars = [
    {
      title: "Empower People",
      desc: "Equipping individuals with quality literacy, technical skills, and economic tools to achieve lasting independence.",
      icon: Users,
    },
    {
      title: "Strengthen Communities",
      desc: "Investing in critical civic infrastructure, clean drinking water plants, and hygiene facilities for vulnerable neighborhoods.",
      icon: Building,
    },
    {
      title: "Expand Opportunities",
      desc: "Opening educational pathways, merit scholarships, and micro-enterprise linkages for next-generation youth.",
      icon: Sparkles,
    },
    {
      title: "Support Wellbeing",
      desc: "Delivering mobile clinical healthcare, subsidized surgeries, and dignified food security to families facing acute crisis.",
      icon: HeartPulse,
    },
    {
      title: "Create Sustainable Change",
      desc: "Championing renewable solar energy transition, environmental conservation, and enduring community stewardship models.",
      icon: Layers,
    },
  ];

  const interactiveValues = [
    {
      title: "Compassionate Dignity",
      desc: "Preserving the self-respect, honor, and confidentiality of every beneficiary we serve, without compromise.",
      icon: Heart,
    },
    {
      title: "Fiduciary Integrity",
      desc: "Operating with absolute financial honesty, zero leakage, and verified distribution backed by statutory audits.",
      icon: ShieldCheck,
    },
    {
      title: "Empirical Accountability",
      desc: "Measuring outcomes using verifiable metrics, community feedback loops, and open impact disclosures.",
      icon: Target,
    },
    {
      title: "Inclusive Service",
      desc: "Providing humanitarian assistance strictly on the basis of verified vulnerability, regardless of background.",
      icon: Users,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <PageHero
        badge="STRATEGIC DIRECTION"
        title="Our Mission & Vision"
        description="A Clear Purpose. A Better Future."
        breadcrumbs={[{ label: "Mission & Vision" }]}
      />

      {/* VISION SECTION (LARGE TYPOGRAPHY) */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eff6ff] text-[#2563eb] text-xs font-bold uppercase tracking-widest">
            <Compass size={14} />
            <span>OUR VISION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-[1.15]">
            A world where every individual lives with dignity, every child has access to quality learning, and every community is equipped to thrive sustainably.
          </h2>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
            We envision resilient societies where poverty is not an inescapable sentence, but an addressable barrier; where preventive healthcare is a shared reality; and where sustainable development preserves opportunities for future generations.
          </p>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-20 sm:py-24 bg-[#f8fafc] border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Narrative on Programmatic Conversion */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-[#0f766e] text-xs font-black uppercase tracking-widest border border-teal-200">
                <Target size={14} />
                <span>OUR MISSION</span>
              </div>

              <h2 className="section-heading text-[#0f172a]">
                Converting Compassionate Vision Into Measurable Community Action
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                ROYSONS TRUST translates its overarching vision into action through structured grassroots programs, strategic multi-sector partnerships, and verifiable social interventions. We focus on breaking systemic vulnerabilities at their root cause.
              </p>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                By mobilizing dedicated field teams, maintaining transparent Zakat and welfare accounts, and establishing community-owned infrastructure, we ensure that every initiative delivers immediate relief while generating long-term social return.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs font-semibold text-[#0f766e]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} />
                  <span>Evidence-Based Needs Assessments</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} />
                  <span>Zero Administrative Cut on Direct Zakat</span>
                </div>
              </div>
            </div>

            {/* Right: Mission Visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[380px] sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 group">
                <Image
                  src="/trust/trust_school_classroom.jpg"
                  alt="ROYSONS TRUST Mission in Action"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Deep bottom gradient protection */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

                {/* High-contrast floating frosted badge */}
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 rounded-2xl bg-black/75 backdrop-blur-md border border-white/20 shadow-2xl">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#00A99D] animate-pulse" />
                    <span className="text-xs uppercase tracking-widest text-[#00A99D] font-extrabold block">
                      Direct Impact
                    </span>
                  </div>
                  <p className="text-base sm:text-lg lg:text-xl font-extrabold text-white leading-snug drop-shadow-sm">
                    Transforming classrooms, restoring clinics, uplifting families.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION PILLARS (5 CARDS) */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="FIVE STRATEGIC PILLARS"
            title="Our Mission Pillars"
            subtitle="The foundational frameworks through which ROYSONS TRUST delivers tangible impact across Pakistan."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {missionPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-2 hover:border-[#2563eb]/40 transition-all duration-300 space-y-4 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#eff6ff] text-[#2563eb] group-hover:scale-110 flex items-center justify-center transition-transform shadow-xs">
                      <Icon size={26} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0f172a] group-hover:text-[#2563eb] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VALUES (INTERACTIVE CARDS: HOVER ELEVATION, ICON ANIMATION, GRADIENT BORDER) */}
      <section className="py-20 bg-[#f8fafc] border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="ETHICAL FOUNDATION"
            title="Values That Guide Us"
            subtitle="Hover to explore how our values shape our culture, governance, and daily decisions."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {interactiveValues.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white rounded-3xl p-8 border-2 border-transparent hover:border-[#0f766e] shadow-xs hover:shadow-2xl hover:-translate-y-2.5 transition-all duration-300 space-y-4 overflow-hidden"
                >
                  {/* Subtle hover gradient backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-50/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="w-14 h-14 rounded-2xl bg-teal-50 text-[#0f766e] group-hover:scale-125 group-hover:rotate-6 flex items-center justify-center transition-transform duration-300 shadow-xs relative z-10">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-bold text-[#0f172a] group-hover:text-[#0f766e] transition-colors relative z-10">
                    {v.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed relative z-10">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA Banner */}
          <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Join Hands with ROYSONS TRUST
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto">
              Together, we can fulfill this mission and bring life-changing opportunities to communities that need them most.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/donate"
                className="btn-emerald inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white text-xs font-bold uppercase tracking-wider shadow-md"
              >
                <span>Support Our Mission</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>View Our Programs</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
