import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Users,
  CheckCircle2,
  GraduationCap,
  HeartPulse,
  Building,
  HandHeart,
  Calendar,
  Layers,
  Clock,
  Compass,
  MapPin,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import HeroSlider from "@/components/ui/HeroSlider";
import ImpactCounter from "@/components/ui/ImpactCounter";
import ProjectCard from "@/components/ui/ProjectCard";
import StoryCard from "@/components/ui/StoryCard";
import PartnersMarquee from "@/components/ui/PartnersMarquee";
import { programsData } from "@/data/programsData";
import { projectsData } from "@/data/projectsData";
import { storiesData } from "@/data/storiesData";
import { newsData } from "@/data/newsData";

export default function HomePage() {
  const featuredProjects = projectsData.slice(0, 3);
  const featuredStories = storiesData.slice(0, 3);
  const featuredNews = newsData.slice(0, 4);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* SECTION 1 — HERO SLIDER (FULL-SCREEN PREMIUM) */}
      <HeroSlider />

      {/* SECTION 2 — TRUST STATEMENT */}
      <section className="py-20 sm:py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 text-neutral-800 text-xs font-bold uppercase tracking-widest border border-neutral-200">
            <span className="w-2 h-2 rounded-full bg-[#00A99D] animate-pulse" />
            <span>Guiding Institutional Belief</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
            &ldquo;Real change begins when people come together with purpose.&rdquo;
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto font-normal">
            ROYSONS TRUST is committed to meaningful, transparent and sustainable social development. Through structured programmatic governance, compassionate community partnerships, and verified on-ground execution, we transform compassion into enduring human opportunity.
          </p>

          <div className="pt-2 flex items-center justify-center gap-2 text-xs font-semibold text-[#009688]">
            <ShieldCheck size={16} />
            <span>Dedicated to 100% transparent and audited humanitarian initiatives</span>
          </div>
        </div>
      </section>

      {/* SECTION 3 — IMPACT COUNTERS */}
      <section className="py-16 bg-black text-white relative overflow-hidden border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {/* Counter 1: 25+ Communities Reached */}
            <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 sm:p-8 hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300 group">
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-black text-white group-hover:text-[#00A99D] transition-colors mb-2">
                <ImpactCounter target={25} suffix="+" />
              </span>
              <span className="block text-sm sm:text-base font-bold text-neutral-200">
                Communities Reached
              </span>
              <span className="text-[11px] text-neutral-400 uppercase tracking-wider block mt-1">
                [Verified Regional Scope]
              </span>
            </div>

            {/* Counter 2: 50K+ Lives Impacted */}
            <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 sm:p-8 hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300 group">
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-black text-white group-hover:text-[#00A99D] transition-colors mb-2">
                <ImpactCounter target={50} suffix="K+" />
              </span>
              <span className="block text-sm sm:text-base font-bold text-neutral-200">
                Lives Impacted
              </span>
              <span className="text-[11px] text-neutral-400 uppercase tracking-wider block mt-1">
                [Verified Beneficiary Metric]
              </span>
            </div>

            {/* Counter 3: 100+ Community Initiatives */}
            <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 sm:p-8 hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300 group">
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-black text-white group-hover:text-[#00A99D] transition-colors mb-2">
                <ImpactCounter target={100} suffix="+" />
              </span>
              <span className="block text-sm sm:text-base font-bold text-neutral-200">
                Community Initiatives
              </span>
              <span className="text-[11px] text-neutral-400 uppercase tracking-wider block mt-1">
                [Programs &amp; Projects Delivered]
              </span>
            </div>

            {/* Counter 4: 15+ Years of Service */}
            <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 sm:p-8 hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300 group">
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-black text-white group-hover:text-[#00A99D] transition-colors mb-2">
                <ImpactCounter target={15} suffix="+" />
              </span>
              <span className="block text-sm sm:text-base font-bold text-neutral-200">
                Years of Service
              </span>
              <span className="text-[11px] text-neutral-400 uppercase tracking-wider block mt-1">
                [Fiduciary Commitment]
              </span>
            </div>
          </div>

          <p className="text-center text-xs text-neutral-400 mt-8">
            Note: Statistics reflect verified program milestones and client-supplied organizational reporting.
          </p>
        </div>
      </section>

      {/* SECTION 4 — WHO WE ARE */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Large High-Resolution Humanitarian Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[380px] sm:h-[460px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                <Image
                  src="/trust/trust_hero_community.jpg"
                  alt="ROYSONS TRUST Community Humanitarian Work"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold block mb-1">
                    Humanity in Action
                  </span>
                  <p className="text-lg sm:text-xl font-bold leading-snug">
                    Building stronger, safer, and self-sufficient communities.
                  </p>
                </div>
              </div>

              {/* Decorative Accent Card */}
              <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 max-w-xs items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#eff6ff] text-[#2563eb] flex items-center justify-center shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <span className="block text-sm font-bold text-[#0f172a]">
                    Zero Fiduciary Leakage
                  </span>
                  <span className="block text-xs text-slate-500">
                    Direct beneficiary delivery protocol
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Narrative Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eff6ff] border border-blue-200 text-xs font-black uppercase tracking-widest text-[#2563eb]">
                <span className="w-2 h-2 rounded-full bg-[#2563eb]" />
                <span>WHO WE ARE</span>
              </div>

              <h2 className="section-heading text-[#0f172a]">
                Working Together to Create Meaningful Change
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                ROYSONS TRUST is built around the belief that sustainable progress comes through people, partnerships and purposeful action. Our work focuses on initiatives that strengthen communities, expand opportunities and support individuals and families in need.
              </p>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                We bring together compassion, responsible action and long-term thinking to support programs that can create measurable and lasting impact.
              </p>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white text-sm font-bold uppercase tracking-wider shadow-md"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — OUR FOCUS AREAS (6 INTERACTIVE CARDS) */}
      <section className="py-20 bg-[#f8fafc] border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="AREAS OF FOCUS"
            title="Where We Create Impact"
            subtitle="Every initiative is designed with community ownership and long-term human dignity at the center."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Education */}
            <div className="group bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 hover:border-slate-400/80 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/40 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#eff6ff] text-[#2563eb] group-hover:scale-[1.08] flex items-center justify-center transition-transform duration-300 shadow-xs">
                  <GraduationCap size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#0f172a] group-hover:text-[#2563eb] transition-colors">
                  Education
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Creating opportunities for learning, skills development and a brighter future.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/programs/education"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0f766e] group-hover:text-[#2563eb] transition-colors"
                >
                  <span>Explore Program</span>
                  <ArrowRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>

            {/* 2. Healthcare */}
            <div className="group bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 hover:border-slate-400/80 hover:bg-gradient-to-br hover:from-white hover:to-teal-50/40 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 text-[#0f766e] group-hover:scale-[1.08] flex items-center justify-center transition-transform duration-300 shadow-xs">
                  <HeartPulse size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#0f172a] group-hover:text-[#0f766e] transition-colors">
                  Healthcare
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Supporting access to healthcare, awareness and essential wellbeing initiatives.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/programs/healthcare"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0f766e] group-hover:text-[#2563eb] transition-colors"
                >
                  <span>Explore Program</span>
                  <ArrowRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>

            {/* 3. Community Development */}
            <div className="group bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 hover:border-slate-400/80 hover:bg-gradient-to-br hover:from-white hover:to-emerald-50/40 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#dcfce7] text-[#16a34a] group-hover:scale-[1.08] flex items-center justify-center transition-transform duration-300 shadow-xs">
                  <Building size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#0f172a] group-hover:text-[#16a34a] transition-colors">
                  Community Development
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Helping communities become stronger, safer and more resilient.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/programs/community-development"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0f766e] group-hover:text-[#2563eb] transition-colors"
                >
                  <span>Explore Program</span>
                  <ArrowRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>

            {/* 4. Humanitarian Support */}
            <div className="group bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 hover:border-slate-400/80 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/40 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#eff6ff] text-[#2563eb] group-hover:scale-[1.08] flex items-center justify-center transition-transform duration-300 shadow-xs">
                  <HandHeart size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#0f172a] group-hover:text-[#2563eb] transition-colors">
                  Humanitarian Support
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Providing meaningful support to people facing difficult circumstances.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/programs/humanitarian-support"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0f766e] group-hover:text-[#2563eb] transition-colors"
                >
                  <span>Explore Program</span>
                  <ArrowRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>

            {/* 5. Youth Empowerment */}
            <div className="group bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 hover:border-slate-400/80 hover:bg-gradient-to-br hover:from-white hover:to-teal-50/40 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 text-[#0f766e] group-hover:scale-[1.08] flex items-center justify-center transition-transform duration-300 shadow-xs">
                  <Sparkles size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#0f172a] group-hover:text-[#0f766e] transition-colors">
                  Youth Empowerment
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Creating pathways for young people to learn, grow and contribute.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/programs/youth-empowerment"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0f766e] group-hover:text-[#2563eb] transition-colors"
                >
                  <span>Explore Program</span>
                  <ArrowRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>

            {/* 6. Sustainable Development */}
            <div className="group bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 hover:border-slate-400/80 hover:bg-gradient-to-br hover:from-white hover:to-emerald-50/40 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#dcfce7] text-[#16a34a] group-hover:scale-[1.08] flex items-center justify-center transition-transform duration-300 shadow-xs">
                  <Layers size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#0f172a] group-hover:text-[#16a34a] transition-colors">
                  Sustainable Development
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Supporting initiatives designed to generate long-term social value.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/programs/sustainable-development"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0f766e] group-hover:text-[#2563eb] transition-colors"
                >
                  <span>Explore Program</span>
                  <ArrowRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FEATURED PROJECTS */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#2563eb] bg-[#eff6ff] px-4 py-1.5 rounded-full border border-blue-200">
                Active Interventions
              </span>
              <h2 className="section-heading text-[#0f172a] mt-3">
                Turning Purpose Into Action
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0f766e] hover:text-[#2563eb] transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — OUR IMPACT (VISUALLY STRONG SECTION WITH PROGRESS BARS) */}
      <section className="py-20 bg-[#f8fafc] border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Large Impact Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[420px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                <Image
                  src="/trust/trust_scholarship_girls.jpg"
                  alt="ROYSONS TRUST Impact on Ground"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/80 text-white text-xs font-bold">
                    <Sparkles size={13} />
                    <span>Real-World Transformation</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold">
                    Empowering Next-Generation Leaders Through Education
                  </h4>
                </div>
              </div>
            </div>

            {/* Right: Content, Mini Stats, Animated Progress Bars */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eff6ff] text-xs font-black uppercase tracking-widest text-[#2563eb]">
                <span className="w-2 h-2 rounded-full bg-[#2563eb]" />
                <span>MEASURABLE ACCOUNTABILITY</span>
              </div>

              <h2 className="section-heading text-[#0f172a]">
                Impact That Goes Beyond Numbers
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Our work is measured not only by the number of initiatives delivered, but by the opportunities created, communities strengthened and lives positively influenced.
              </p>

              {/* Progress Bars */}
              <div className="space-y-4 pt-2">
                <div>
                  <div className="flex justify-between text-xs sm:text-sm font-bold text-[#0f172a] mb-1.5">
                    <span>Direct Welfare Fund Allocation</span>
                    <span className="text-[#0f766e]">94% Direct Deployment</span>
                  </div>
                  <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#2563eb] to-[#0f766e] rounded-full w-[94%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs sm:text-sm font-bold text-[#0f172a] mb-1.5">
                    <span>Zakat Tamleek &amp; Shariah Compliance</span>
                    <span className="text-[#16a34a]">100% Direct Delivery</span>
                  </div>
                  <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#0f766e] to-[#16a34a] rounded-full w-[100%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs sm:text-sm font-bold text-[#0f172a] mb-1.5">
                    <span>Student Academic Retention Rate</span>
                    <span className="text-[#2563eb]">94% Graduated</span>
                  </div>
                  <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#2563eb] to-[#0f766e] rounded-full w-[94%]" />
                  </div>
                </div>
              </div>

              {/* Mini Statistics Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <span className="block text-xl sm:text-2xl font-black text-[#2563eb]">1,200+</span>
                  <span className="text-xs font-semibold text-slate-500">Scholarships</span>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <span className="block text-xl sm:text-2xl font-black text-[#0f766e]">35,000+</span>
                  <span className="text-xs font-semibold text-slate-500">Patients Treated</span>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <span className="block text-xl sm:text-2xl font-black text-[#16a34a]">22 Plants</span>
                  <span className="text-xs font-semibold text-slate-500">Clean Water</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/impact"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0f766e] hover:text-[#2563eb] transition-colors"
                >
                  <span>Explore Full Impact Dashboard</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — SUCCESS STORIES PREVIEW */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#0f766e] bg-teal-50 px-4 py-1.5 rounded-full border border-teal-200">
                Real Beneficiary Journeys
              </span>
              <h2 className="section-heading text-[#0f172a] mt-3">
                Stories of Change
              </h2>
            </div>
            <Link
              href="/success-stories"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0f766e] hover:text-[#2563eb] transition-colors"
            >
              <span>View All Stories</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — DONATION CTA (FULL-WIDTH WITH CINEMATIC OVERLAY) */}
      <section className="relative py-24 sm:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/trust/trust_hero_community.jpg"
            alt="Support ROYSONS TRUST Humanitarian Mission"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Cinematic Black Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#00779E] via-[#009688] to-[#059669] text-white shadow-xl mx-auto">
            <Heart size={28} className="fill-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Your Support Can Become Someone&apos;s Opportunity
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto font-normal">
            A contribution today can help support programs that create opportunities, strengthen communities and bring meaningful assistance to people who need it.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/donate"
              className="btn-gradient w-full sm:w-auto px-8 py-3.5 rounded-full text-white font-bold uppercase tracking-wider text-xs sm:text-sm shadow-xl inline-flex items-center justify-center gap-2 group"
            >
              <span>Make an Impact</span>
              <ArrowRight size={15} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/programs"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold uppercase tracking-wider text-xs sm:text-sm transition-all inline-flex items-center justify-center gap-2 group"
            >
              <span>Learn About Our Work</span>
              <ArrowRight size={15} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 10 — PARTNERS / SUPPORTERS */}
      <section className="py-16 bg-white border-b border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
            Collaborative Philanthropy
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111]">
            Together, We Create Greater Impact
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 max-w-xl mx-auto">
            We work alongside verified institutional supporters, development bodies, and community partners to deliver high-impact interventions.
          </p>

          <div className="pt-6">
            <PartnersMarquee />
          </div>
        </div>
      </section>

      {/* SECTION 11 — NEWS / UPDATES */}
      <section className="py-20 sm:py-24 bg-[#f9fafb] border-b border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-800 bg-neutral-100 px-4 py-1.5 rounded-full border border-neutral-200">
                Dispatches &amp; Announcements
              </span>
              <h2 className="section-heading text-[#111111] mt-3">
                Latest From ROYSONS TRUST
              </h2>
            </div>
            <Link
              href="/news"
              className="btn-secondary inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider"
            >
              <span>View All Updates</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredNews.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl border border-neutral-200 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col overflow-hidden"
              >
                <div className="relative h-44 w-full bg-neutral-100 overflow-hidden">
                  <Image
                    src={item.featuredImage}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-white/95 text-[11px] font-bold uppercase tracking-wider text-[#111111] shadow-xs border border-neutral-200/60">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <span className="text-xs text-neutral-400 font-medium">
                      {item.date}
                    </span>
                    <h3 className="text-base font-bold text-[#111111] group-hover:text-[#00779E] transition-colors line-clamp-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>

                  <Link
                    href={`/news/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111111] group-hover:text-[#00779E] transition-colors pt-2 border-t border-neutral-100"
                  >
                    <span>Read Update</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 — HOME CONTACT CTA */}
      <section className="py-20 bg-black text-white relative border-t border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00A99D] bg-neutral-900 px-4 py-1.5 rounded-full border border-neutral-800">
            Get Involved Today
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Be Part of the Change
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Whether you want to support our mission, collaborate on an initiative or learn more about our work, we welcome meaningful partnerships.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/donate"
              className="btn-gradient w-full sm:w-auto px-8 py-3.5 rounded-full text-white font-bold uppercase tracking-wider text-xs sm:text-sm shadow-xl inline-flex items-center justify-center gap-2 group"
            >
              <span>Make an Impact</span>
              <ArrowRight size={15} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold uppercase tracking-wider text-xs sm:text-sm transition-all inline-flex items-center justify-center gap-2 group"
            >
              <span>Contact Us</span>
              <ArrowRight size={15} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
