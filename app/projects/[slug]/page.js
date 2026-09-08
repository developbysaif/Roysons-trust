import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  Users,
  AlertTriangle,
  ArrowRight,
  Heart,
  ShieldCheck,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ProjectCard from "@/components/ui/ProjectCard";
import { projectsData } from "@/data/projectsData";

export async function generateStaticParams() {
  return projectsData.map((proj) => ({
    slug: proj.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} – Roysons Trust Projects`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projectsData.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge={`PROJECT / ${project.category.toUpperCase()}`}
        title={project.title}
        description={project.shortDescription}
        breadcrumbs={[
          { label: "Our Projects", href: "/projects" },
          { label: project.title },
        ]}
      />

      {/* Project Main Showcase */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              {/* Main Project Hero Image */}
              <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full bg-white/95 text-xs font-black uppercase tracking-wider text-[#0F766E] shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Overview */}
              <div className="space-y-3">
                <h2 className="text-2xl font-black text-[#042E3A]">
                  Project Overview &amp; Context
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {project.shortDescription} This intervention forms an integral pillar of Roysons Trust’s commitment to sustainable grassroots development.
                </p>
              </div>

              {/* Challenge vs Response Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-2.5">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider">
                    <AlertTriangle size={16} />
                    <span>The Challenge Faced</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-2.5">
                  <div className="flex items-center gap-2 text-[#0F766E] font-bold text-xs uppercase tracking-wider">
                    <CheckCircle2 size={16} />
                    <span>Our Strategic Response</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {project.response}
                  </p>
                </div>
              </div>

              {/* Verified Results */}
              <div className="space-y-4">
                <h3 className="text-xl font-black text-[#042E3A]">
                  Key Outcomes &amp; Measurable Results
                </h3>
                <div className="space-y-3">
                  {project.results.map((res, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 size={16} className="text-[#16A34A] flex-shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Project Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-4">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#042E3A] border-b border-slate-200 pb-2">
                  Project Factsheet
                </h4>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-slate-400 block mb-0.5">Project Status</span>
                    <span className="font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md inline-block">
                      {project.status}
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-400 block mb-0.5">Location</span>
                    <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                      <MapPin size={14} className="text-[#0F766E]" />
                      {project.location}
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-400 block mb-0.5">Timeline</span>
                    <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                      <Calendar size={14} className="text-[#0F766E]" />
                      {project.date} ({project.timeline})
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-400 block mb-0.5">Direct Beneficiaries</span>
                    <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                      <Users size={14} className="text-[#0F766E]" />
                      {project.beneficiaries}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <Link
                    href="/donate"
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#16A34A] to-[#0F766E] hover:from-[#15803D] hover:to-[#0D9488] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <Heart size={14} className="fill-white" />
                    <span>Support This Work</span>
                  </Link>
                </div>
              </div>

              {/* Transparency Notice */}
              <div className="p-5 rounded-2xl bg-teal-50 border border-teal-200 text-xs text-slate-700 space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#0F766E]">
                  <ShieldCheck size={16} />
                  <span>Audit Assurance</span>
                </div>
                <p className="leading-relaxed text-[11px] text-slate-600">
                  All expenditures for this project are verified by independent chartered accountants. Full field monitoring logs are archived at the secretariat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 bg-[#F8FAFC] border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-[#042E3A]">
              Related Projects
            </h3>
            <Link
              href="/projects"
              className="text-xs font-bold uppercase tracking-wider text-[#0F766E] hover:text-[#16A34A] transition-colors"
            >
              View Catalog →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
