import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  AlertTriangle,
  Compass,
  Users,
  Award,
  Heart,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ProgramCard from "@/components/ui/ProgramCard";
import { programsData } from "@/data/programsData";

export async function generateStaticParams() {
  return programsData.map((prog) => ({
    slug: prog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const program = programsData.find((p) => p.slug === slug);
  if (!program) return {};

  return {
    title: `${program.title} – Roysons Trust`,
    description: program.summary,
  };
}

export default async function ProgramDetailPage({ params }) {
  const { slug } = await params;
  const program = programsData.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  const relatedPrograms = programsData.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge={`PROGRAM / ${program.shortTitle.toUpperCase()}`}
        title={program.title}
        description={program.tagline}
        breadcrumbs={[
          { label: "Our Programs", href: "/programs" },
          { label: program.shortTitle },
        ]}
      />

      {/* Program Summary & Hero Image */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-black uppercase tracking-widest text-[#0F766E] bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Program Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#042E3A] leading-tight">
                {program.tagline}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {program.summary}
              </p>

              {/* Stats Bar */}
              {program.stats && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-100">
                  {program.stats.map((s, idx) => (
                    <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-center">
                      <span className="block text-xl font-black text-[#0F766E]">
                        {s.value}
                      </span>
                      <span className="block text-[11px] text-slate-500 font-medium">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src={program.coverImage}
                  alt={program.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge vs. Approach Grid */}
      <section className="py-16 bg-[#F8FAFC] border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Challenge */}
            <div className="bg-white p-8 rounded-2xl border border-rose-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2.5 text-rose-700 font-black text-xs uppercase tracking-wider">
                <AlertTriangle size={18} />
                <span>The Challenge</span>
              </div>
              <h3 className="text-xl font-bold text-[#042E3A]">
                Understanding Root Causes
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {program.theChallenge}
              </p>
            </div>

            {/* Our Approach */}
            <div className="bg-white p-8 rounded-2xl border border-teal-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2.5 text-[#0F766E] font-black text-xs uppercase tracking-wider">
                <Compass size={18} />
                <span>Our Strategic Approach</span>
              </div>
              <h3 className="text-xl font-bold text-[#042E3A]">
                Sustainable, Dignity-First Solutions
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {program.ourApproach}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do & Who We Support */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* What We Do (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#16A34A]">
                Execution Roadmap
              </span>
              <h3 className="text-2xl font-black text-[#042E3A]">
                What We Deliver on the Ground
              </h3>
              <ul className="space-y-3.5">
                {program.whatWeDo.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 size={18} className="text-[#16A34A] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who We Support (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-gradient-to-br from-teal-50 to-emerald-50/70 p-6 sm:p-8 rounded-3xl border border-teal-200/80 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#0F766E] text-white flex items-center justify-center">
                  <Users size={20} />
                </div>
                <h4 className="text-lg font-black text-[#042E3A]">
                  Who We Support
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {program.whoWeSupport}
                </p>

                <div className="pt-4 border-t border-teal-200/60 space-y-2 text-xs text-[#042E3A] font-medium">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-[#16A34A]" />
                    <span>Independent Beneficiary Verification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-[#16A34A]" />
                    <span>Zero Middleman Leakage Guarantee</span>
                  </div>
                </div>
              </div>

              {/* How You Can Help Box */}
              <div className="bg-[#042E3A] text-white p-6 sm:p-8 rounded-3xl space-y-4">
                <span className="text-xs font-black uppercase tracking-widest text-[#2DD4BF]">
                  Take Action
                </span>
                <h4 className="text-lg font-bold text-white">
                  Sponsor This Program
                </h4>
                <p className="text-xs text-teal-100/80 leading-relaxed">
                  Direct your contribution specifically toward this cause. Receive verified progress updates and receipt.
                </p>
                <Link
                  href="/donate"
                  className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-black text-xs uppercase tracking-wider transition-all"
                >
                  <Heart size={14} className="fill-white mr-1.5" />
                  Donate to {program.shortTitle}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Programs */}
      <section className="py-16 bg-[#F8FAFC] border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-[#042E3A]">
              Explore Related Programs
            </h3>
            <Link
              href="/programs"
              className="text-xs font-bold uppercase tracking-wider text-[#0F766E] hover:text-[#16A34A] transition-colors"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPrograms.map((p) => (
              <ProgramCard key={p.id} program={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
