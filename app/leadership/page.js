import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { teamData } from "@/data/teamData";
import { ShieldCheck, Award, Users, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Leadership & Board of Trustees – Institutional Governance",
  description:
    "Meet the visionary Board of Trustees, executive directors, and advisory council guiding Roysons Trust with integrity and compassion.",
};

export default function LeadershipPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="GOVERNANCE & STEWARDSHIP"
        title="Leadership &amp; Board of Trustees"
        description="Guided by proven leaders with decades of experience across public welfare, industrial stewardship, medicine, and education."
        breadcrumbs={[{ label: "About Us", href: "/about" }, { label: "Leadership" }]}
      />

      {/* Board of Trustees */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="FIDUCIARY LEADERSHIP"
            title="Board of Trustees"
            subtitle="The Board provides strategic governance, ethical oversight, and fiduciary stewardship for all Roysons Trust assets and public contributions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamData.boardOfTrustees.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:border-[#0F766E]/50"
              >
                {/* Profile Photo */}
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden bg-slate-100 border-2 border-slate-200 flex-shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* Profile Info */}
                <div className="space-y-2.5 text-center sm:text-left flex-1">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#0F766E] bg-teal-50 px-2.5 py-0.5 rounded-full inline-block mb-1">
                      {member.focus}
                    </span>
                    <h3 className="text-xl font-black text-[#042E3A]">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold text-slate-500">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-16 bg-[#F8FAFC] border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="FIELD OPERATIONS"
            title="Executive Management Team"
            subtitle="Our operational directors oversee daily on-ground logistics, medical camp execution, and volunteer coordination."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamData.managementTeam.map((exec, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#16A34A] flex items-center justify-center font-bold text-sm">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#042E3A]">
                    {exec.name}
                  </h4>
                  <span className="text-xs font-bold text-[#0F766E] block">
                    {exec.role}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2">
                  {exec.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Council */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="EXPERT ADVISORY"
            title="Advisory Council &amp; Shariah Board"
            subtitle="Distinguished jurists, water scientists, and Islamic scholars providing specialized policy counsel."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamData.advisoryCouncil.map((adv, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3.5"
              >
                <div className="w-9 h-9 rounded-lg bg-teal-100 text-[#0F766E] flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#042E3A]">
                    {adv.name}
                  </h4>
                  <span className="text-xs text-slate-500">
                    {adv.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
