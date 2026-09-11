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
          <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-[#111111] shadow-xs border border-neutral-200">
            {project.category}
          </span>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold shadow-xs ${
              isOngoing
                ? "bg-[#009688] text-white"
                : project.status === "Completed"
                ? "bg-neutral-900 text-white"
                : "bg-neutral-700 text-white"
            }`}
          >
            {isOngoing ? <Clock size={12} /> : <CheckCircle2 size={12} />}
            <span>{project.status}</span>
          </span>
        </div>

        {/* Impact Indicator Tag on Image Bottom */}
        {project.impact && (
          <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center gap-1.5 text-xs font-semibold text-white bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
            <Sparkles size={13} className="text-[#00A99D]" />
            <span>Impact: {project.impact}</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-semibold">
            <MapPin size={14} className="text-[#009688]" />
            <span>{project.location}</span>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-[#111111] group-hover:text-[#00779E] transition-colors leading-snug">
            {project.title}
          </h3>

          {/* Short Description */}
          <p className="text-sm text-neutral-600 line-clamp-2 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111111] group-hover:text-[#00779E] transition-colors"
          >
            <span>View Project</span>
            <ArrowRight
              size={14}
              className="transform group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
