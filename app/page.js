import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Users,
  CheckCircle2,
  FolderCheck,
  HeartPulse,
  Home as HomeIcon,
  GraduationCap,
  Droplets,
  ChevronRight,
  HandHeart,
  Building2,
  Award,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProgramCard from "@/components/ui/ProgramCard";
import ProjectCard from "@/components/ui/ProjectCard";
import ImpactCounter from "@/components/ui/ImpactCounter";
import StoryCard from "@/components/ui/StoryCard";
import { programsData } from "@/data/programsData";
import { projectsData } from "@/data/projectsData";
import { impactData } from "@/data/impactData";
import { storiesData } from "@/data/storiesData";
import { siteConfig } from "@/data/siteConfig";

export default function HomePage() {
  const featuredPrograms = programsData.slice(0, 6);
  const featuredProjects = projectsData.slice(0, 3);
  const featuredStory = storiesData[0];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[620px] lg:min-h-[700px] flex items-center bg-gradient-to-b from-[#f0fdfa] via-[#f8fafc] to-white pt-6 pb-10 lg:py-14 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-gradient-to-b from-[#00A99D]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#00A99D]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left reveal-item">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#00A99D]/30 shadow-xs backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#00A99D] animate-pulse" />
                <span className="text-xs font-black uppercase tracking-widest text-[#042E3A]">
                  A Purpose-Driven Humanitarian Mission
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#042E3A] tracking-tight leading-[1.12]">
                Creating Hope. <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#00A99D] to-[#059669]">
                  Changing Lives.
                </span>{" "}
                <br className="hidden sm:inline" />
                Building a Better Future.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Roysons Trust works to support communities, empower individuals and create meaningful opportunities through education, healthcare, social welfare and community development.
              </p>

              {/* Action Buttons (Strictly Single Line) */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/donate"
                  className="whitespace-nowrap w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl trust-btn-gradient text-white text-sm font-black uppercase tracking-wider shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:scale-95"
                >
                  <Heart size={18} className="fill-white animate-pulse shrink-0" />
                  <span className="whitespace-nowrap">Donate Now</span>
                </Link>

                <Link
                  href="/programs"
                  className="whitespace-nowrap w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 border-2 border-slate-300 hover:border-[#00A99D] text-[#042E3A] hover:text-[#00A99D] text-sm font-bold tracking-wide shadow-sm hover:shadow-md transition-all"
                >
                  <span className="whitespace-nowrap">Explore Our Work</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Verified Trust Badges */}
              <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-600 font-medium">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-[#00A99D]" />
                  <span>100% Verified Zakat Distribution</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-[#00A99D]" />
                  <span>Audited Financial Statements</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <HandHeart size={16} className="text-[#042E3A]" />
                  <span>Direct Beneficiary Delivery</span>
                </span>
              </div>
            </div>

            {/* Right Visual Column (5 cols) */}
            <div className="lg:col-span-5 relative reveal-item">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Photo */}
                <div className="relative h-[380px] sm:h-[460px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/trust/trust_hero_community.jpg"
                    alt="Roysons Trust Community Welfare in Pakistan"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#042E3A]/60 via-transparent to-transparent" />
                </div>

                {/* Floating Impact Card with Image 2 Gradient Icon */}
                <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl border border-slate-100 max-w-[240px] sm:max-w-[260px] animate-in fade-in slide-in-from-bottom duration-700">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl trust-gradient-primary text-white flex items-center justify-center shrink-0 shadow-md">
                      <HeartPulse size={24} />
                    </div>
                    <div>
                      <span className="block text-xl font-black text-[#042E3A]">
                        10,000+
                      </span>
                      <span className="block text-xs text-slate-500 font-semibold leading-tight">
                        Lives Directly Touched Across Pakistan
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Transparent Tag */}
                <div className="hidden sm:flex absolute -top-4 -right-4 bg-[#042E3A] text-white text-xs font-black uppercase tracking-wider px-4 py-2 rounded-xl shadow-lg border border-[#00A99D]/40 items-center gap-1.5">
                  <Sparkles size={14} className="text-[#00A99D]" />
                  <span>Purpose-Led Welfare</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST INTRODUCTION (SPLIT LAYOUT) */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Text */}
            <div className="lg:col-span-6 space-y-6 reveal-item">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A99D]/10 border border-[#00A99D]/30 text-xs font-black uppercase tracking-widest text-[#042E3A]">
                <span className="w-2 h-2 rounded-full bg-[#00A99D]" />
                Institutional Stewardship
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#042E3A] tracking-tight leading-tight">
                Making a Difference Where It Matters Most
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                Roysons Trust is founded on the immutable belief that true prosperity is measured by the welfare of the most vulnerable. Through rigorous programmatic governance, active field monitoring, and community partnership, we deliver life-altering interventions in education, clinical healthcare, clean water security, and immediate humanitarian relief.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1 hover:border-[#00A99D]/40 transition-colors">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#042E3A]">
                    <CheckCircle2 size={16} className="text-[#00A99D]" />
                    <span>Dignity First</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Beneficiaries receive support with the utmost respect and confidentiality.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1 hover:border-[#00A99D]/40 transition-colors">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#042E3A]">
                    <CheckCircle2 size={16} className="text-[#00A99D]" />
                    <span>Zero Leakage</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Strict segregation of Zakat and public funds with verified delivery.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-[#042E3A] hover:text-[#00A99D] transition-colors"
                >
                  <span>Learn About Us</span>
                  <ArrowRight size={16} className="text-[#00A99D]" />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6 relative reveal-item">
              <div className="relative h-[350px] sm:h-[420px] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/trust/trust_scholarship_girls.jpg"
                  alt="Roysons Trust Education Scholarships in Pakistan"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#042E3A]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xs uppercase tracking-widest text-[#00A99D] font-bold mb-1">
                    On-Ground Impact
                  </p>
                  <p className="text-lg sm:text-xl font-bold leading-snug">
                    "Every child equipped with books and a classroom is a family uplifted forever."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE PROGRAMS (AREAS OF IMPACT) */}
      <section className="py-10 sm:py-12 bg-[#F8FAFC] border-y border-slate-200/60 reveal-item">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OUR FOCUS AREAS"
            title="Our Areas of Impact"
            subtitle="Explore our comprehensive, sustainable humanitarian initiatives designed to break cycles of poverty and build enduring self-reliance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white border-2 border-slate-300 hover:border-[#00A99D] text-[#042E3A] hover:text-[#00A99D] font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all"
            >
              <span>View All 6 Strategic Programs</span>
              <ArrowRight size={14} className="text-[#00A99D]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. LIVE IMPACT DASHBOARD & METRIC COUNTERS */}
      <section className="py-10 bg-gradient-to-r from-[#042E3A] via-[#022028] to-[#042E3A] text-white relative overflow-hidden reveal-item">
        <div className="absolute inset-0 bg-[radial-gradient(#00A99D_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-black uppercase tracking-widest text-[#00A99D] bg-white/10 px-3.5 py-1.5 rounded-full border border-[#00A99D]/30">
              Measurable Accountability
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-2 drop-shadow-sm">
              Our Impact in Numbers
            </h2>
            <p className="text-sm sm:text-base text-slate-100 font-medium">
              Verified outcomes demonstrating how every contribution transforms real families.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {impactData.metrics.map((item) => (
              <div
                key={item.id}
                className="bg-white/5 backdrop-blur-xs border border-[#00A99D]/25 rounded-2xl p-5 hover:bg-white/10 hover:border-[#00A99D] transition-all duration-300 group hover:-translate-y-1 shadow-sm"
              >
                <span className="block text-2xl sm:text-3xl font-black text-white mb-1 group-hover:text-[#00A99D] transition-colors">
                  <ImpactCounter target={item.value} suffix={item.suffix} />
                </span>
                <span className="block text-xs font-bold text-teal-100 group-hover:text-white transition-colors">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/impact"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00A99D] hover:text-white transition-colors"
            >
              <span>Explore Comprehensive Impact Dashboard</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PROJECTS */}
      <section className="py-10 sm:py-12 bg-white reveal-item">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-7 gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#042E3A] bg-[#00A99D]/10 px-3.5 py-1.5 rounded-full border border-[#00A99D]/30">
                Active Interventions
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#042E3A] mt-3">
                Featured Projects on the Ground
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#042E3A] hover:text-[#00A99D] transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight size={15} className="text-[#00A99D]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. STORIES OF HOPE (FEATURED TRANSFORMATION) */}
      <section className="py-10 bg-[#F8FAFC] border-t border-slate-200/60 reveal-item">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="STORIES OF CHANGE"
            title="Voices of Transformation"
            subtitle="Respectful, dignity-centered narratives illustrating the life-changing ripple effect of your generous support."
          />

          <div className="max-w-4xl mx-auto">
            <StoryCard story={featuredStory} />
          </div>

          <div className="text-center mt-10">
            <Link
              href="/stories"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#042E3A] hover:text-[#00A99D] transition-colors"
            >
              <span>Read More Beneficiary Journeys</span>
              <ArrowRight size={14} className="text-[#00A99D]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. TRANSPARENCY & GOVERNANCE ASSURANCE BANNER */}
      <section className="py-10 bg-white border-t border-slate-200/60 reveal-item">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#00A99D]/10 via-[#042E3A]/5 to-white rounded-3xl border border-[#00A99D]/30 p-5 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <span className="text-xs font-black uppercase tracking-widest text-[#00A99D] font-bold">
                  Transparency Builds Trust
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#042E3A]">
                  Accountability in Every Rupee Disbursed
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                  Roysons Trust publishes audited financial statements, external audit reviews, and detailed project expenditure logs. Our core administration is independently backed by corporate endowments, guaranteeing maximum direct welfare value.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <Link
                  href="/transparency"
                  className="text-center py-3.5 px-6 rounded-xl bg-[#042E3A] hover:bg-[#00A99D] text-white text-xs font-black uppercase tracking-wider shadow-sm transition-all"
                >
                  View Annual Reports
                </Link>
                <Link
                  href="/certifications"
                  className="text-center py-3.5 px-6 rounded-xl bg-white border-2 border-slate-300 hover:border-[#00A99D] text-slate-800 hover:text-[#00A99D] text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Registration &amp; NTN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. DIRECT ENGAGEMENT CALL TO ACTION */}
      <section className="py-10 bg-gradient-to-b from-[#042E3A] via-[#022028] to-[#042E3A] text-white relative reveal-item">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl trust-gradient-primary text-white shadow-xl">
            <Heart size={28} className="fill-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-sm">
            Be the Catalyst for Change Today
          </h2>

          <p className="text-sm sm:text-base text-slate-100 leading-relaxed max-w-xl mx-auto font-medium">
            Whether you choose to sponsor a child’s education, fund a life-saving medical surgery, or volunteer your skills in our community camps, your support creates generational hope.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/donate"
              className="whitespace-nowrap w-full sm:w-auto px-9 py-4 rounded-xl trust-btn-gradient text-white font-black uppercase tracking-wider text-sm shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              Donate to Roysons Trust
            </Link>

            <Link
              href="/volunteer"
              className="whitespace-nowrap w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#00A99D] text-white font-bold uppercase tracking-wider text-sm transition-all"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
