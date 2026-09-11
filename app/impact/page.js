import Link from "next/link";
import {
  Users,
  FolderCheck,
  HeartPulse,
  Building,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Heart,
  HandHeart,
  Layers,
  Leaf,
  Clock,
  Compass,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ImpactCounter from "@/components/ui/ImpactCounter";
import ImpactMap from "@/components/ui/ImpactMap";
import { impactData } from "@/data/impactData";

export const metadata = {
  title: "Our Impact – Measuring What Matters | ROYSONS TRUST",
  description:
    "Because meaningful change should be visible, measurable and accountable. Explore verified impact counters, impact areas, geographic map, and sequential process.",
};

const IMPACT_COUNTERS = [
  { label: "Communities Reached", value: 25, suffix: "+", desc: "Towns and villages with active verified interventions" },
  { label: "People Supported", value: 50000, suffix: "+", desc: "Beneficiaries directly touched across programs" },
  { label: "Projects Delivered", value: 100, suffix: "+", desc: "Completed and ongoing community social projects" },
  { label: "Volunteers Engaged", value: 500, suffix: "+", desc: "Medical professionals, teachers & field workers" },
  { label: "Partnerships", value: 18, suffix: "+", desc: "Verified corporate, municipal & NGO alliances" },
  { label: "Regions Served", value: 12, suffix: "+", desc: "Intervention districts across Punjab, Sindh & Balochistan" },
];

const IMPACT_AREAS = [
  {
    title: "Education",
    desc: "1,200+ academic scholarships awarded and 18 digital computer labs deployed to foster generational literacy.",
    icon: GraduationCap,
    stats: "94% Retention Rate",
    href: "/programs/education",
  },
  {
    title: "Healthcare",
    desc: "35,000+ patient consultations, free cataract surgeries, and weekly mobile clinic circuits.",
    icon: HeartPulse,
    stats: "65+ Free Clinics",
    href: "/programs/healthcare",
  },
  {
    title: "Community Development",
    desc: "22 solar-powered RO water plants delivering over 150,000 liters of pure drinking water daily.",
    icon: Building,
    stats: "22 Clean Water Plants",
    href: "/programs/community-development",
  },
  {
    title: "Humanitarian Support",
    desc: "28,000+ people provided emergency food hampers, winter survival packs, and disaster shelter.",
    icon: HandHeart,
    stats: "15,000+ Rations Given",
    href: "/programs/humanitarian-support",
  },
  {
    title: "Youth",
    desc: "1,850+ young adults and women graduated from technical stitching and digital freelancing academies.",
    icon: Sparkles,
    stats: "310+ Micro-Enterprises",
    href: "/programs/youth-empowerment",
  },
  {
    title: "Sustainability",
    desc: "Off-grid solar energy installations and regional community tree plantations protecting natural ecology.",
    icon: Leaf,
    stats: "120 kW Solar Installed",
    href: "/programs/sustainable-development",
  },
];

const IMPACT_PROCESS = [
  { step: "01", name: "Need", desc: "Empirical needs assessment and community consultation to identify acute vulnerabilities." },
  { step: "02", name: "Action", desc: "Mobilization of verified resources, budget approvals, and dedicated field coordinators." },
  { step: "03", name: "Implementation", desc: "Direct, dignified delivery of medical care, school rebuilds, or water plants." },
  { step: "04", name: "Measurement", desc: "Auditing of disbursements, beneficiary receipt logs, and healthcare progress indicators." },
  { step: "05", name: "Learning", desc: "Iterative review with local community elders to resolve operational bottlenecks." },
  { step: "06", name: "Long-Term Impact", desc: "Transitioning operational custody to community committees for enduring self-reliance." },
];

export default function ImpactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <PageHero
        badge="TRANSPARENT ACCOUNTABILITY"
        title="Measuring What Matters"
        description="Because meaningful change should be visible, measurable and accountable."
        breadcrumbs={[{ label: "Our Impact" }]}
      />

      {/* 2. Impact Counters (Animated Counting) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="VERIFIED STATISTICS"
            title="Verified Impact Metrics"
            subtitle="Audited statistics reflecting our on-ground progress across verified humanitarian corridors."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {IMPACT_COUNTERS.map((c, idx) => (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-white rounded-3xl p-8 border border-slate-200 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-3 flex flex-col justify-between"
              >
                <div>
                  <span className="block text-3xl sm:text-4xl lg:text-5xl font-black text-[#2563eb]">
                    <ImpactCounter target={c.value} suffix={c.suffix} />
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#0f172a] mt-2">
                    {c.label}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1">
                    {c.desc}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block pt-2 border-t border-slate-200/60">
                  [Verified Fiduciary Metric]
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-500 mt-8">
            Note: Statistics are audited and updated on a quarterly cycle in accordance with non-profit regulatory standards.
          </p>
        </div>
      </section>

      {/* 3. Impact Areas (Interactive Visual Cards) */}
      <section className="py-20 bg-[#f8fafc] border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="CORE PORTFOLIO"
            title="Impact Areas"
            subtitle="Explore how ROYSONS TRUST concentrates resources where societal need is most pressing."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {IMPACT_AREAS.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white rounded-3xl p-8 border border-slate-200 shadow-xs hover:shadow-xl hover:-translate-y-2 hover:border-[#0f766e] transition-all duration-300 space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-teal-50 text-[#0f766e] group-hover:scale-110 flex items-center justify-center transition-transform shadow-xs">
                      <Icon size={26} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0f172a] group-hover:text-[#0f766e] transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {area.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#2563eb]">
                      {area.stats}
                    </span>
                    <Link
                      href={area.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f766e] hover:text-[#2563eb] transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Interactive Impact Map */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="GEOGRAPHIC FOOTPRINT"
            title="Interactive Impact Map"
            subtitle="Verified on-ground operations hubs, mobile health routes, and clean water filtration plants."
          />

          <ImpactMap />
        </div>
      </section>

      {/* 5. Impact Process (Sequential Step Progression) */}
      <section className="py-20 sm:py-24 bg-[#f8fafc] border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="METHODOLOGY"
            title="The Impact Process"
            subtitle="How every verified initiative moves systematically from initial identification to permanent, generational change."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 pt-4">
            {IMPACT_PROCESS.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-lg hover:-translate-y-1.5 transition-all space-y-3 flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <span className="block text-2xl font-black text-[#2563eb]">
                    {step.step}
                  </span>
                  <h4 className="text-base font-bold text-[#0f172a] group-hover:text-[#0f766e] transition-colors">
                    {step.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 size={12} />
                  <span>Sequential Phase</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SDG Alignment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="GLOBAL TARGETS"
            title="Aligned with UN Sustainable Development Goals"
            subtitle="ROYSONS TRUST interventions contribute directly to global targets for poverty alleviation, universal health, and environmental sustainability."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactData.sdgAlignment.map((sdg) => (
              <div
                key={sdg.number}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className={`w-12 h-12 rounded-2xl text-white font-black text-lg flex items-center justify-center flex-shrink-0 ${sdg.color}`}>
                  {sdg.number}
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0f172a]">
                    {sdg.name}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {sdg.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/donate"
              className="btn-emerald inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white text-xs font-bold uppercase tracking-wider shadow-md"
            >
              <Heart size={15} className="fill-white" />
              <span>Contribute to Measurable Change</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
