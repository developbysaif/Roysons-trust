import {
  ShieldCheck,
  FileCheck,
  Scale,
  HeartHandshake,
  Activity,
  CheckCircle2,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import BoardOfTrustees from "@/components/trustees/BoardOfTrustees";
import SpecializedTrusteeBoard from "@/components/trustees/SpecializedTrusteeBoard";
import { teamData } from "@/data/teamData";

export const metadata = {
  title: "Board of Trustees & Leadership | ROYSONS TRUST",
  description:
    "Meet the Board of Trustees of ROYSONS TRUST, guided by responsible governance, strategic direction, and institutional accountability.",
};

const GOVERNANCE_ICONS = {
  ShieldCheck,
  FileCheck,
  Scale,
  HeartHandshake,
  Activity,
};

export default function LeadershipTrusteesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <PageHero
        badge="GOVERNANCE & STEWARDSHIP"
        title="Leadership With Purpose"
        description="Guided by Responsibility. Driven by Impact."
        breadcrumbs={[{ label: "Leadership & Trustees" }]}
      />

      {/* MASTER BOARD OF TRUSTEES SECTION */}
      <BoardOfTrustees />

      {/* SPECIALIZED TRUSTEE BOARD SECTION */}
      <SpecializedTrusteeBoard />

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
    </div>
  );
}
