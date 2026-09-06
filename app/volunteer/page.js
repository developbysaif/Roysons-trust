import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import VolunteerForm from "@/components/forms/VolunteerForm";
import {
  Users,
  HeartHandshake,
  GraduationCap,
  Stethoscope,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Volunteer – Be Part of the Change",
  description:
    "Give your time, medical skills, teaching passion, or logistics expertise to serve communities with Roysons Trust.",
};

export default function VolunteerPage() {
  const reasons = [
    {
      title: "Real On-Ground Purpose",
      desc: "Work directly in rural clinics, schools, and emergency distribution centers, witnessing tangible transformation.",
      icon: HeartHandshake,
    },
    {
      title: "Skill & Leadership Growth",
      desc: "Develop leadership, crisis management, project execution, and cross-cultural communication abilities.",
      icon: Sparkles,
    },
    {
      title: "Formal Non-Profit Certification",
      desc: "Receive recognized Roysons Trust service certificates and recommendations for your academic or professional portfolio.",
      icon: ShieldCheck,
    },
    {
      title: "Vibrant Community of Changemakers",
      desc: "Connect with dedicated doctors, educators, engineers, and humanitarian leaders across Pakistan.",
      icon: Users,
    },
  ];

  const opportunities = [
    {
      title: "Medical & Health Camp Volunteers",
      role: "Doctors, Nurses, Pharmacists, Medical Students",
      desc: "Conduct general patient screenings, dispense free medicines, monitor vitals, and assist surgical ophthalmologists.",
      icon: Stethoscope,
    },
    {
      title: "Education Mentors & STEM Tutors",
      role: "Teachers, University Students, Subject Experts",
      desc: "Deliver academic remedial classes, mentor high school scholarship recipients, and run basic computer literacy camps.",
      icon: GraduationCap,
    },
    {
      title: "Emergency Relief & Ration Distribution",
      role: "Logistics Assistants, Drivers, Field Coordinators",
      desc: "Package and transport sealed food hampers, set up emergency shelter tents, and ensure dignified queue management.",
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="GIVE BACK"
        title="Be Part of the Change"
        description="Your time, energy, and skills can ignite hope for a child, comfort a struggling family, or bring life-saving clinical care to a remote village."
        breadcrumbs={[{ label: "Get Involved", href: "/get-involved" }, { label: "Volunteer" }]}
      />

      {/* Why Volunteer */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="WHY VOLUNTEER WITH US"
            title="Meaningful Service with Tangible Results"
            subtitle="Join hundreds of volunteers who consider Roysons Trust their community home."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r, idx) => {
              const Icon = r.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#16A34A] flex items-center justify-center">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-base font-bold text-[#042E3A]">
                    {r.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Opportunities & Form Grid */}
      <section className="py-16 bg-[#F8FAFC] border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Opportunities Info (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#0F766E] bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                  Openings
                </span>
                <h3 className="text-2xl font-black text-[#042E3A] mt-2 mb-3">
                  Current Volunteer Tracks
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We match your availability, location, and professional expertise with on-ground operational needs:
                </p>
              </div>

              <div className="space-y-4">
                {opportunities.map((opp, idx) => {
                  const Icon = opp.icon;
                  return (
                    <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
                      <div className="flex items-center gap-2.5 text-[#042E3A] font-bold text-sm">
                        <Icon size={18} className="text-[#16A34A]" />
                        <span>{opp.title}</span>
                      </div>
                      <span className="block text-[11px] font-semibold text-[#0F766E]">
                        Target: {opp.role}
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {opp.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* How it Works */}
              <div className="p-6 rounded-2xl bg-teal-50/70 border border-teal-200 space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#042E3A]">
                  How the Process Works
                </h4>
                <ol className="space-y-2 text-xs text-slate-600 list-decimal pl-4">
                  <li>Fill in the volunteer application form on the right.</li>
                  <li>Our coordinator contacts you for a brief alignment call.</li>
                  <li>Receive orientation and join our next field drive or camp.</li>
                </ol>
              </div>
            </div>

            {/* Right: Volunteer Form (7 cols) */}
            <div className="lg:col-span-7">
              <VolunteerForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
