"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Sparkles, CheckCircle2, Clock } from "lucide-react";

export default function ProjectCard({ project }) {
  const isOngoing = project.status === "Ongoing" || project.status === "Active";

  return (
    <div className="group relative bg-white rounded-2xl border border-neutral-200 shadow-xs hover:shadow-xl hover:-translate-y-1.5 hover:border-neutral-300 transition-all duration-300 flex flex-col overflow-hidden">
      {/* Project Image Container */}
      <div className="relative h-56 w-full overflow-hidden bg-neutral-100">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Dynamic Dark Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0f172a] shadow-xs border border-slate-200">
            {project.category}
          </span>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-xs ${
              isOngoing
                ? "bg-[#00779E] text-white"
                : project.status === "Completed"
                ? "bg-[#0f172a] text-white"
                : "bg-slate-700 text-white"
            }`}
          >
            {isOngoing ? <Clock size={14} /> : <CheckCircle2 size={14} />}
            <span>{project.status}</span>
          </span>
        </div>

        {/* Impact Indicator Tag on Image Bottom */}
        {project.impact && (
          <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center gap-2 text-xs sm:text-sm font-bold text-white bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20">
            <Sparkles size={15} className="text-[#00A99D]" />
            <span>Impact: {project.impact}</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          {/* Location */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-bold">
            <MapPin size={16} className="text-[#00779E]" />
            <span>{project.location}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-black text-[#0f172a] group-hover:text-[#00779E] transition-colors leading-snug">
            {project.title}
          </h3>

          {/* Short Description */}
          <p className="text-base sm:text-lg text-slate-700 line-clamp-2 leading-relaxed font-normal">
            {project.shortDescription}
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#0f172a] group-hover:text-[#00779E] transition-colors"
          >
            <span>View Project</span>
            <ArrowRight
              size={16}
              className="transform group-hover:translate-x-1.5 transition-transform text-[#00779E]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
