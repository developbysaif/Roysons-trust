import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  ShieldCheck,
  Target,
  Users,
  Compass,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Scale,
  Handshake,
  Layers,
  Leaf,
  Activity,
  FileCheck,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "About ROYSONS TRUST – Purpose. People. Progress.",
  description:
    "Learn about ROYSONS TRUST's commitment to social impact, human dignity, community empowerment, and transparent fiduciary stewardship.",
};

export default function AboutPage() {
  const approaches = [
    {
      title: "People First",
      desc: "Placing human dignity, confidentiality, and mutual respect at the foundation of every programmatic intervention.",
      icon: Users,
    },
    {
      title: "Purpose Driven",
      desc: "Directing resources with clarity of mission, ensuring each rupee creates tangible and meaningful generational change.",
      icon: Target,
    },
    {
      title: "Transparent Action",
      desc: "Unyielding fiduciary accountability, verified beneficiary identification, and open disclosure of audited financials.",
      icon: ShieldCheck,
    },
    {
      title: "Sustainable Impact",
      desc: "Building long-term self-reliance rather than perpetual dependence through education, clean water, and skills.",
      icon: Layers,
    },
  ];

  const values = [
    {
      title: "Integrity",
      desc: "Upholding the highest moral and fiduciary standards across all operations, financial accounting, and community engagements.",
      icon: ShieldCheck,
    },
    {
      title: "Compassion",
      desc: "Approaching every family and community with deep empathy, listening attentively, and serving with profound human warmth.",
      icon: Heart,
    },
    {
      title: "Accountability",
      desc: "Answering to our beneficiaries, donors, and society with measurable milestones and independent third-party audit verifications.",
      icon: FileCheck,
    },
    {
      title: "Inclusion",
      desc: "Delivering support impartially, ensuring women, children, persons with disabilities, and marginalized groups receive equal care.",
      icon: Users,
    },
    {
      title: "Collaboration",
      desc: "Partnering with verified civic institutions, medical professionals, and local elders to multiply our reach and effectiveness.",
      icon: Handshake,
    },
    {
      title: "Sustainability",
      desc: "Designing programs with environmental responsibility, renewable energy adoption, and enduring community ownership.",
      icon: Leaf,
    },
  ];

  const timelineSteps = [
    {
      number: "01",
      title: "Identify Need",
      desc: "On-ground empirical needs assessments and community consultation to identify vulnerable priority areas.",
    },
    {
      number: "02",
      title: "Plan",
      desc: "Rigorous feasibility modeling, resource allocation, risk mitigation, and milestone definition.",
    },
    {
      number: "03",
      title: "Partner",
      desc: "Engaging local community committees, technical experts, and verified institutional supporters.",
    },
    {
      number: "04",
      title: "Implement",
      desc: "Disciplined execution by field operations teams with direct delivery to verified beneficiaries.",
    },
    {
      number: "05",
      title: "Measure",
      desc: "Tracking empirical health indicators, school retention rates, and third-party audit reconciliation.",
    },
    {
      number: "06",
      title: "Improve",
      desc: "Iterative feedback loops and strategic program refinements to scale long-term social value.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <PageHero
        badge="ROYSONS TRUST"
        title="About ROYSONS TRUST"
        description="Purpose. People. Progress."
        breadcrumbs={[{ label: "About" }]}
      />

      {/* SECTION — OUR STORY */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[400px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                <Image
                  src="/trust/roysons_trust_hero.jpg"
                  alt="ROYSONS TRUST Social Development Commitment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/75 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold block mb-1">
                    Community Stewardship
                  </span>
                  <p className="text-lg sm:text-xl font-bold">
                    Working together with dignity, accountability, and hope.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eff6ff] text-xs font-black uppercase tracking-widest text-[#2563eb]">
                <span className="w-2 h-2 rounded-full bg-[#2563eb]" />
                <span>OUR STORY</span>
              </div>

              <h2 className="section-heading text-[#0f172a]">
                A Commitment to People and Communities
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                ROYSONS TRUST was established on the fundamental premise that genuine social progress occurs when compassion is paired with disciplined, transparent action. Our purpose is to serve as an enduring catalyst for community uplift, bridging systemic gaps in essential human needs.
              </p>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Throughout our journey, our commitment has remained steadfast: to empower families, expand educational access, provide life-saving healthcare, and build resilient infrastructure. We measure our success not by temporary goodwill, but by the lasting dignity and self-sufficiency of the communities we walk alongside.
              </p>

              <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-[#0f766e]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} />
                  <span>Verified Field Missions</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} />
                  <span>Audited Allocations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION — OUR APPROACH (4 CARDS) */}
      <section className="py-20 bg-[#f8fafc] border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="METHODOLOGY"
            title="Our Approach"
            subtitle="Four guiding pillars that inform our operational ethics, resource allocation, and program execution."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approaches.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-2 transition-all duration-300 space-y-4 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#eff6ff] text-[#2563eb] group-hover:scale-110 flex items-center justify-center transition-transform shadow-xs">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0f172a] group-hover:text-[#2563eb] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION — WHAT WE BELIEVE */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="text-xs font-black uppercase tracking-widest text-[#0f766e] bg-teal-50 px-4 py-1.5 rounded-full border border-teal-200">
            Core Conviction
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
            &ldquo;Stronger communities create stronger futures.&rdquo;
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            We believe that no community should be defined by its limitations, but rather by its boundless human potential. When we invest in a child&apos;s education, provide clean drinking water to an entire village, or equip a woman with a vocational craft, the ripple effects transform families for generations to come.
          </p>

          <div className="pt-4">
            <Link
              href="/donate"
              className="btn-emerald inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white text-sm font-bold uppercase tracking-wider shadow-md"
            >
              <Heart size={16} className="fill-white" />
              <span>Support Our Vision</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION — OUR VALUES (6 CARDS WITH HOVER ANIMATION) */}
      <section className="py-20 bg-[#f8fafc] border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="INSTITUTIONAL VALUES"
            title="Our Values"
            subtitle="The ethical principles that guide every decision, team member, and partner across ROYSONS TRUST."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-2 hover:border-[#0f766e]/40 transition-all duration-300 space-y-4"
                >
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 text-[#0f766e] group-hover:scale-110 flex items-center justify-center transition-transform shadow-xs">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0f172a] group-hover:text-[#0f766e] transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION — HOW WE WORK (HORIZONTAL ANIMATED TIMELINE) */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="PROCESS & GOVERNANCE"
            title="How We Work"
            subtitle="A disciplined, step-by-step methodology ensuring responsible implementation, verification, and scalability."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 pt-4">
            {timelineSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#2563eb] hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="block text-2xl font-black text-[#2563eb] group-hover:scale-110 transition-transform">
                    {step.number}
                  </span>
                  <h4 className="text-base font-bold text-[#0f172a]">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {idx < timelineSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                    &rarr;
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white text-xs font-bold uppercase tracking-wider"
            >
              <span>Partner With Us</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
