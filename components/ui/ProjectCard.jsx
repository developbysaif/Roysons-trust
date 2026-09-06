import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Calendar, CheckCircle2, Clock } from "lucide-react";

export default function ProjectCard({ project }) {
  const isActive = project.status === "Active";

  return (
    <div className="group relative bg-white rounded-3xl border-2 border-slate-200/80 shadow-sm trust-card-hover flex flex-col overflow-hidden">
      {/* Project Image */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#042E3A]/80 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

        {/* Category Badge */}
        <div className="absolute top-3.5 left-3.5">
          <span className="px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-black uppercase tracking-wider text-[#042E3A] shadow-md border border-[#00A99D]/30">
            {project.category}
          </span>
        </div>

        {/* Status Badge */}
        <div className="absolute top-3.5 right-3.5">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow-md ${
              isActive
                ? "bg-[#00A99D] text-white"
                : "bg-[#042E3A]/90 text-white"
            }`}
          >
            {isActive ? <Clock size={12} /> : <CheckCircle2 size={12} />}
            {project.status}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-medium mb-3">
            <span className="inline-flex items-center gap-1.5 text-[#042E3A]">
              <MapPin size={14} className="text-[#00A99D]" />
              <span className="truncate max-w-[160px] font-semibold">{project.location}</span>
            </span>
            <span className="text-slate-300">•</span>
            <span className="inline-flex items-center gap-1.5 text-slate-500">
              <Calendar size={13} className="text-[#00A99D]" />
              <span>{project.date}</span>
            </span>
          </div>

          <h3 className="text-xl font-black text-[#042E3A] group-hover:text-[#00A99D] transition-colors mb-2.5 line-clamp-2">
            {project.title}
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
            {project.shortDescription}
          </p>
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider text-[#042E3A] group-hover:text-[#00A99D] transition-colors"
          >
            <span>View Project Details</span>
            <ArrowRight size={15} className="transform group-hover:translate-x-2 transition-transform text-[#00A99D]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
