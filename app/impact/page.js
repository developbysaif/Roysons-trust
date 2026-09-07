import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ImpactCounter from "@/components/ui/ImpactCounter";
import { impactData } from "@/data/impactData";
import Link from "next/link";
import {
  Users,
  FolderCheck,
  HeartPulse,
  Home,
  GraduationCap,
  Droplets,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  PieChart,
  ArrowRight,
  Heart,
} from "lucide-react";

export const metadata = {
  title: "Our Impact – Verified Metrics & Transparency Dashboard",
  description:
    "Explore our impact metrics, lives touched, clean water output, academic scholarships, and UN Sustainable Development Goal alignment.",
};

const ICONS = {
  Users,
  FolderCheck,
  HeartPulse,
  Home,
  GraduationCap,
  Droplets,
};

export default function ImpactPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="TRANSPARENT ACCOUNTABILITY"
        title="Our Measurable Impact"
        description="Every initiative at Roysons Trust is guided by verified data, independent audits, and long-term societal outcomes across underserved communities."
        breadcrumbs={[{ label: "Our Impact" }]}
      />

      {/* Main Metric Cards */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="VERIFIED OUTCOMES"
            title="Key Impact Indicators"
            subtitle="Verified milestones reflecting our on-ground progress in education, clinical healthcare, hunger alleviation, and disaster response."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {impactData.metrics.map((m) => {
              const IconComp = ICONS[m.icon] || Users;
              return (
                <div
                  key={m.id}
                  className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-[#0F766E] shadow-sm hover:shadow-xl transition-all space-y-4"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100/80 text-[#16A34A] flex items-center justify-center">
                    <IconComp size={28} />
                  </div>
                  <div>
                    <span className="block text-3xl sm:text-4xl font-black text-[#042E3A]">
                      <ImpactCounter target={m.value} suffix={m.suffix} />
                    </span>
                    <span className="block text-base font-bold text-[#0F766E] mt-1">
                      {m.label}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                    {m.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-teal-50 border border-teal-200 text-center text-xs text-slate-600 max-w-2xl mx-auto">
            <span className="font-semibold text-[#0F766E]">Note on Data Verification: </span>
            Metrics are audited and updated on a quarterly basis in accordance with statutory non-profit standards.
          </div>
        </div>
      </section>

      {/* Geographic Reach */}
      <section className="py-16 bg-[#F8FAFC] border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="GEOGRAPHIC FOOTPRINT"
            title="Where We Serve Across Pakistan"
            subtitle="Our mobile healthcare vans, clean water plants, and emergency food convoys reach deep into rural and peri-urban districts."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactData.geographicReach.map((geo, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0F766E]">
                  <MapPin size={16} />
                  <span>{geo.region}</span>
                </div>
                <h4 className="text-base font-bold text-[#042E3A]">
                  {geo.coverage}
                </h4>
                <div className="pt-2 border-t border-slate-100 text-xs text-slate-500">
                  <span className="font-semibold text-slate-700 block mb-0.5">Focus Areas:</span>
                  <span>{geo.focus}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="GLOBAL DEVELOPMENT"
            title="Aligned with UN Sustainable Development Goals"
            subtitle="Roysons Trust designs interventions that contribute directly to global targets for poverty alleviation, universal health, and gender equity."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactData.sdgAlignment.map((sdg) => (
              <div
                key={sdg.number}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className={`w-12 h-12 rounded-xl text-white font-black text-lg flex items-center justify-center flex-shrink-0 ${sdg.color}`}>
                  {sdg.number}
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#042E3A]">
                    {sdg.name}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {sdg.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fund Utilization */}
      <section className="py-16 bg-[#042E3A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="text-xs font-black uppercase tracking-widest text-[#2DD4BF]">
            Fund Stewardship
          </span>
          <h2 className="text-3xl font-black text-white">
            How Every Contribution is Utilized
          </h2>
          <p className="text-xs sm:text-sm text-slate-100 font-medium max-w-xl mx-auto">
            Thanks to institutional endowments covering administrative overhead, your donations flow directly to the field.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
            {impactData.fundUtilization.map((f, idx) => (
              <div key={idx} className="bg-white/5 border border-teal-500/20 p-5 rounded-2xl space-y-2">
                <span className="text-3xl font-black text-emerald-400 block">
                  {f.percentage}%
                </span>
                <span className="text-xs font-bold text-white block">
                  {f.category}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-black text-xs uppercase tracking-wider shadow-lg transition-all"
            >
              <Heart size={15} className="fill-white" />
              <span>Contribute to Roysons Trust</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
