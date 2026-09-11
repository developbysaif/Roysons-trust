import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Users,
  Building,
  Heart,
  BookOpen,
  GraduationCap,
  Award,
  HeartPulse,
  Droplets,
  Layers,
  MapPin,
  Quote,
  ShieldAlert,
  HandHeart,
  Target,
} from "lucide-react";
import ProgramHero from "@/components/programs/ProgramHero";
import ProgramApproach from "@/components/programs/ProgramApproach";
import ProgramGetInvolved from "@/components/programs/ProgramGetInvolved";
import ProgramFaqAccordion from "@/components/programs/ProgramFaqAccordion";
import ProgramCard from "@/components/ui/ProgramCard";
import ImpactCounter from "@/components/ui/ImpactCounter";
import { programsData } from "@/data/programsData";
import { projectsData } from "@/data/projectsData";
import { storiesData } from "@/data/storiesData";

const ICON_MAP = {
  BookOpen,
  GraduationCap,
  Sparkles,
  Heart,
  Users,
  Building,
  HeartPulse,
  AlertTriangle,
  Droplets,
  Award,
  CheckCircle2,
  ShieldCheck,
  ShieldAlert,
  HandHeart,
  Layers,
  MapPin,
  Target,
};

export async function generateStaticParams() {
  const params = [];
  programsData.forEach((prog) => {
    params.push({ slug: prog.slug });
    if (prog.aliases && prog.aliases.length > 0) {
      prog.aliases.forEach((alias) => {
        params.push({ slug: alias });
      });
    }
  });
  return params;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const program = programsData.find(
    (p) => p.slug === slug || (p.aliases && p.aliases.includes(slug))
  );

  if (!program) return {};

  return {
    title: `${program.title} | ROYSONS TRUST`,
    description: program.hero?.description || program.tagline,
    openGraph: {
      title: `${program.title} | ROYSONS TRUST`,
      description: program.hero?.description || program.tagline,
      images: [
        {
          url: program.hero?.coverImage || "/trust/roysons_trust_hero.jpg",
          width: 1200,
          height: 630,
          alt: program.title,
        },
      ],
    },
  };
}

export default async function ProgramDetailPage({ params }) {
  const { slug } = await params;

  // Resolve canonical or alias slug
  const program = programsData.find(
    (p) => p.slug === slug || (p.aliases && p.aliases.includes(slug))
  );

  if (!program) {
    notFound();
  }

  // Find 3 related programs as defined in data
  const relatedPrograms = program.relatedSlugs
    ? program.relatedSlugs
        .map((rSlug) => programsData.find((p) => p.slug === rSlug))
        .filter(Boolean)
    : programsData.filter((p) => p.slug !== program.slug).slice(0, 3);

  // Find linked Project & Story
  const spotlightProject =
    projectsData.find((p) => p.slug === program.spotlightProjectId) ||
    projectsData.find((p) => p.category.toLowerCase().includes(program.shortTitle.toLowerCase())) ||
    projectsData[0];

  const spotlightStory =
    storiesData.find((s) => s.id === program.spotlightStoryId) ||
    storiesData.find((s) => s.category.toLowerCase().includes(program.shortTitle.toLowerCase())) ||
    storiesData[0];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* 1 & 2. BREADCRUMBS & HERO SECTION */}
      <ProgramHero program={program} />

      {/* 3. PROGRAM INTRODUCTION */}
      <section className="py-20 sm:py-24 bg-white border-b border-neutral-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-neutral-100 text-neutral-800 border border-neutral-200">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: program.hero.accentColor }} />
                {program.intro.smallLabel}
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
                {program.intro.heading}
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
                {program.intro.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Quick Fiduciary Quote */}
              <div className="p-5 rounded-2xl bg-neutral-50 border-l-4 border-[#009688] space-y-1">
                <p className="text-sm font-semibold text-[#111111]">
                  Verified Organizational Commitment
                </p>
                <p className="text-xs text-neutral-600">
                  Every initiative is designed with local community participation, uncompromised transparency, and ongoing third-party accountability.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <div className="relative h-[340px] sm:h-[420px] w-full rounded-3xl overflow-hidden border border-neutral-200 shadow-xl group">
                <Image
                  src={program.intro.image || program.hero.coverImage}
                  alt={program.intro.heading}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/90 backdrop-blur-md text-neutral-900 shadow-lg border border-white/50">
                  <span className="text-xs font-bold text-[#009688] uppercase tracking-wider block">
                    Strategic Focus
                  </span>
                  <p className="text-sm font-bold text-[#111111] mt-0.5">
                    {program.tagline}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. THE CHALLENGE */}
      <section className="py-20 sm:py-24 bg-neutral-50 border-b border-neutral-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white text-neutral-800 border border-neutral-200 shadow-xs">
              <AlertTriangle size={13} className="text-[#009688]" />
              The Need We Address
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight">
              {program.challenge.heading}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              {program.challenge.content}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {program.challenge.cards.map((c, idx) => {
              const Icon = ICON_MAP[c.icon] || AlertTriangle;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-neutral-100 text-neutral-900 flex items-center justify-center font-bold">
                      <Icon size={26} className="text-[#009688]" />
                    </div>
                    <span className="text-xs font-mono font-bold text-neutral-400">
                      Challenge 0{idx + 1}
                    </span>
                    <h3 className="text-2xl font-bold text-[#111111]">
                      {c.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                      {c.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. OUR APPROACH (Dynamic renderer per program spec) */}
      <ProgramApproach
        approach={program.approach}
        accentColor={program.hero.accentColor}
      />

      {/* 6 & 7. WHO WE SERVE & FOCUS AREAS */}
      <section className="py-20 sm:py-24 bg-white border-b border-neutral-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-neutral-100 text-neutral-800 border border-neutral-200">
              <Users size={13} className="text-[#009688]" />
              Beneficiary Focus
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight">
              Who We Serve
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              Our interventions prioritize individuals, families, and settlements that face structural barriers to essential human welfare.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {program.whoWeServe.map((b, idx) => {
              const Icon = ICON_MAP[b.icon] || Users;
              return (
                <div
                  key={idx}
                  className="bg-neutral-50 rounded-3xl p-7 border border-neutral-200 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-white text-neutral-900 border border-neutral-200 flex items-center justify-center shadow-xs">
                      <Icon size={22} className="text-[#009688]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#111111]">
                      {b.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                      {b.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-neutral-200/60 flex items-center gap-2 text-[11px] font-bold text-[#009688] uppercase tracking-wider">
                    <CheckCircle2 size={13} />
                    <span>Verified Eligibility</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 8. PROGRAM OBJECTIVES (Strategic Numbered List) */}
      <section className="py-20 sm:py-24 bg-neutral-900 text-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-neutral-200 border border-white/15">
                <Target size={13} className="text-[#00A99D]" />
                Strategic Blueprint
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Core Program Objectives
              </h2>
              <p className="text-base text-neutral-300 leading-relaxed font-normal">
                Every programmatic allocation is governed by rigorous targets designed to translate philanthropic generosity into tangible, long-term human progress.
              </p>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#00A99D] font-bold block">
                  Audited Accountability
                </span>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Key performance metrics are verified independently through annual statutory audits and publicly disclosed outcome summaries.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {program.objectives.map((obj, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-5 sm:p-6 transition-all flex items-start gap-4"
                >
                  <span className="w-9 h-9 rounded-xl bg-white/10 text-white font-mono font-bold text-sm flex items-center justify-center flex-shrink-0 border border-white/20">
                    0{idx + 1}
                  </span>
                  <p className="text-sm sm:text-base text-neutral-200 font-medium leading-relaxed pt-1">
                    {obj}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 9 & 10. FEATURED ACTIVITIES */}
      <section className="py-20 sm:py-24 bg-white border-b border-neutral-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-neutral-100 text-neutral-800 border border-neutral-200">
              <Sparkles size={13} className="text-[#009688]" />
              On-Ground Interventions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight">
              Featured Program Activities
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              Structured operational initiatives implemented directly by ROYSONS TRUST field teams and local volunteer networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {program.featuredActivities.map((act, idx) => {
              const Icon = ICON_MAP[act.icon] || Sparkles;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-7 border border-neutral-200 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-100 text-neutral-900 flex items-center justify-center shadow-xs">
                      <Icon size={22} className="text-[#009688]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#111111]">
                      {act.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                      {act.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 11. IMPACT / STATISTICS COUNTERS */}
      <section className="py-20 bg-black text-white relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00A99D]">
              Verified Real-World Metrics
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Impact That Creates Possibility
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {program.stats.map((st, idx) => (
              <div
                key={idx}
                className="bg-neutral-900/90 rounded-3xl p-6 sm:p-8 border border-neutral-800 text-center space-y-2"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                  <ImpactCounter
                    target={parseInt(st.value.replace(/[^0-9]/g, ""), 10) || 0}
                    suffix={st.value.includes("+") ? "+" : st.value.includes("%") ? "%" : st.value.includes("kW") ? " kW" : ""}
                  />
                </div>
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-400">
                  {st.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 12. PROJECT SHOWCASE */}
      {spotlightProject && (
        <section className="py-20 sm:py-24 bg-white border-b border-neutral-200/80">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
            
            <div className="max-w-3xl mb-12 text-left space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#009688]">
                Active Field Showcase
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
                Featured Initiative
              </h2>
            </div>

            <div className="bg-neutral-50 rounded-3xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                
                <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-full min-h-[320px]">
                  <Image
                    src={spotlightProject.coverImage || program.hero.coverImage}
                    alt={spotlightProject.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
                      {spotlightProject.status || "Ongoing Initiative"}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 mb-2">
                      <MapPin size={14} className="text-[#009688]" />
                      <span>{spotlightProject.location}</span>
                      <span>•</span>
                      <span>{spotlightProject.date}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111]">
                      {spotlightProject.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                    {spotlightProject.overview || spotlightProject.shortDescription}
                  </p>

                  <div className="p-4 rounded-2xl bg-white border border-neutral-200 flex items-center gap-3">
                    <ShieldCheck size={20} className="text-[#009688] flex-shrink-0" />
                    <p className="text-xs sm:text-sm font-semibold text-neutral-800">
                      Direct Impact: {spotlightProject.impact}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/projects/${spotlightProject.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black hover:bg-neutral-800 text-white text-xs sm:text-sm font-bold tracking-wide transition-all group"
                    >
                      <span>View Project Details</span>
                      <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>
      )}

      {/* 13. SUCCESS STORY PREVIEW */}
      {spotlightStory && (
        <section className="py-20 bg-neutral-50 border-b border-neutral-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="w-16 h-16 rounded-full bg-white text-[#009688] flex items-center justify-center mx-auto border border-neutral-200 shadow-sm">
              <Quote size={28} />
            </div>

            <blockquote className="text-2xl sm:text-3xl font-extrabold text-[#111111] leading-relaxed tracking-tight">
              &ldquo;{spotlightStory.quote}&rdquo;
            </blockquote>

            <div className="space-y-1">
              <p className="text-base font-bold text-[#111111]">
                {spotlightStory.personName}
              </p>
              <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">
                Beneficiary • {spotlightStory.location}
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/success-stories"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#009688] hover:underline"
              >
                <span>Read More Human Impact Stories</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 14. GET INVOLVED CTA (4 CARDS) */}
      <ProgramGetInvolved programTitle={program.shortTitle} />

      {/* 15. GLOBAL PROGRAM FAQ ACCORDION */}
      <ProgramFaqAccordion faqs={program.faqs} />

      {/* 16. RELATED PROGRAMS */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#009688]">
                Holistic Welfare Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight mt-1">
                Explore More Programs
              </h2>
            </div>
            <Link
              href="/programs"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-neutral-800 hover:text-[#009688] transition-colors"
            >
              <span>View All 6 Programs</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPrograms.map((relProg) => (
              <ProgramCard key={relProg.id} program={relProg} />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
