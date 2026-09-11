import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Calendar,
  Sparkles,
  CheckCircle2,
  Clock,
  Heart,
  ArrowRight,
  ShieldCheck,
  Building,
  Target,
  Users,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ProjectCard from "@/components/ui/ProjectCard";
import { projectsData } from "@/data/projectsData";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found | ROYSONS TRUST" };

  return {
    title: `${project.title} – Field Project Details | ROYSONS TRUST`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projectsData
    .filter((p) => p.id !== project.id)
    .slice(0, 2);

  const isOngoing = project.status === "Ongoing" || project.status === "Active";

  return (
    <div className="flex flex-col w-full">
      {/* 1. Project Hero */}
      <PageHero
        badge={project.category}
        title={project.title}
        description={project.shortDescription}
        breadcrumbs={[
          { label: "Our Projects", href: "/projects" },
          { label: project.title },
        ]}
      />

      {/* Main Project Details Layout */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              {/* Featured Cover Image */}
              <div className="relative h-[360px] sm:h-[460px] w-full rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute top-4 right-4 z-10">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md ${
                      isOngoing ? "bg-emerald-500 text-white" : "bg-blue-600 text-white"
                    }`}
                  >
                    {isOngoing ? <Clock size={13} /> : <CheckCircle2 size={13} />}
                    <span>{project.status}</span>
                  </span>
                </div>
              </div>

              {/* 2. Project Overview */}
              <div className="space-y-4">
                <span className="text-xs font-black uppercase tracking-widest text-[#2563eb]">
                  Project Overview
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0f172a]">
                  Turning Compassionate Vision Into Verifiable Reality
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  {project.overview || project.shortDescription}
                </p>
              </div>

              {/* 3. The Challenge & 4. Our Approach */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-3xl bg-rose-50/50 border border-rose-100 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-700 block">
                    The Challenge
                  </span>
                  <h3 className="text-lg font-bold text-[#0f172a]">
                    Root-Cause Obstacle
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-teal-50/50 border border-teal-100 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0f766e] block">
                    Our Approach
                  </span>
                  <h3 className="text-lg font-bold text-[#0f172a]">
                    Strategic Intervention
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {project.approach || project.shortDescription}
                  </p>
                </div>
              </div>

              {/* 5. Implementation */}
              <div className="space-y-4">
                <span className="text-xs font-black uppercase tracking-widest text-[#0f766e]">
                  Field Execution
                </span>
                <h3 className="text-2xl font-black text-[#0f172a]">
                  Implementation Strategy
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {project.implementation || project.response}
                </p>
              </div>

              {/* 6. Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="space-y-4">
                  <span className="text-xs font-black uppercase tracking-widest text-[#2563eb]">
                    Visual Documentation
                  </span>
                  <h3 className="text-2xl font-black text-[#0f172a]">
                    Project Gallery
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {project.gallery.map((img, i) => (
                      <div
                        key={i}
                        className="relative h-44 rounded-2xl overflow-hidden bg-slate-100 shadow-xs border border-slate-100 group"
                      >
                        <Image
                          src={img}
                          alt={`${project.title} photo ${i + 1}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 7. Impact & Results */}
              <div className="space-y-4">
                <span className="text-xs font-black uppercase tracking-widest text-emerald-600">
                  Measurable Outcomes
                </span>
                <h3 className="text-2xl font-black text-[#0f172a]">
                  Verified Impact Metrics
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.results?.map((res, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2"
                    >
                      <CheckCircle2 size={18} className="text-emerald-500" />
                      <p className="text-xs text-slate-700 leading-relaxed font-medium">
                        {res}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar: Timeline, Partners, Quick Metadata, CTA (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Project Snapshot Card */}
              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 space-y-4">
                <h4 className="text-base font-bold text-[#0f172a]">
                  Project Information
                </h4>

                <div className="space-y-3 text-xs text-slate-600 border-t border-slate-200/60 pt-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-500">Location:</span>
                    <span className="font-bold text-[#0f172a] text-right truncate max-w-[180px]">
                      {project.location}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-500">Category:</span>
                    <span className="font-bold text-[#2563eb]">{project.category}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-500">Status:</span>
                    <span className="font-bold text-emerald-600">{project.status}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-500">Beneficiaries:</span>
                    <span className="font-bold text-[#0f172a]">{project.beneficiaries}</span>
                  </div>
                </div>
              </div>

              {/* 8. Project Timeline */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0f766e]">
                  <Calendar size={15} />
                  <span>Project Timeline</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-medium">
                  {project.timeline}
                </p>
              </div>

              {/* 9. Partners */}
              {project.partners && project.partners.length > 0 && (
                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2563eb]">
                    <Users size={15} />
                    <span>Project Partners</span>
                  </div>
                  <ul className="space-y-1.5">
                    {project.partners.map((partner, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-emerald-500" />
                        <span>{partner}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 11. CTA — Support This Work */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white space-y-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#0f766e] text-white flex items-center justify-center">
                  <Heart size={20} className="fill-white" />
                </div>
                <h4 className="text-lg font-bold text-white">
                  Support This Work
                </h4>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Your donation directly funds verified field equipment, construction materials, and patient care for this project.
                </p>
                <Link
                  href={`/donate?project=${encodeURIComponent(project.title)}`}
                  className="btn-emerald w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md"
                >
                  <Heart size={14} className="fill-white" />
                  <span>Donate to This Project</span>
                </Link>
              </div>
            </div>
          </div>

          {/* 10. Related Projects */}
          {relatedProjects.length > 0 && (
            <div className="mt-20 pt-12 border-t border-slate-200">
              <h3 className="text-2xl font-black text-[#0f172a] mb-8">
                Related Initiatives
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedProjects.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
