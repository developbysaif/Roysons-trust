"use client";

import Image from "next/image";
import Link from "next/link";
import { Quote, MapPin, ArrowRight } from "lucide-react";

export default function StoryCard({ story, layout = "vertical" }) {
  if (layout === "horizontal") {
    return (
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col lg:flex-row group">
        <div className="relative w-full lg:w-2/5 min-h-[280px] lg:min-h-full bg-neutral-100 flex-shrink-0">
          <Image
            src={story.image}
            alt={story.title}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-[#111111] shadow-xs">
              {story.category}
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs text-neutral-500 font-semibold">
              <MapPin size={14} className="text-[#009688]" />
              <span>{story.location}</span>
              <span>&bull;</span>
              <span className="text-[#111111] font-bold">{story.personName || story.beneficiaryAlias}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#111111] leading-snug">
              {story.title}
            </h3>

            {story.quote && (
              <div className="p-4 rounded-xl bg-neutral-50 border-l-4 border-[#009688]">
                <p className="text-xs sm:text-sm text-neutral-700 italic font-medium leading-relaxed">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </div>
            )}

            <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3">
              {story.story}
            </p>
          </div>

          <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
            <Link
              href={`/success-stories#${story.slug}`}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111111] group-hover:text-[#00779E] transition-colors"
            >
              <span>Read Full Story</span>
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Default Vertical Card for 3-Column Home Page Preview
  return (
    <div className="group bg-white rounded-2xl border border-neutral-200 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden">
      <div className="relative h-56 w-full overflow-hidden bg-neutral-100">
        <Image
          src={story.image}
          alt={story.title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-[#111111] shadow-xs">
            {story.category}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
          <p className="text-sm font-bold truncate">{story.personName || story.beneficiaryAlias}</p>
          <p className="text-xs text-neutral-200 flex items-center gap-1">
            <MapPin size={12} className="text-[#00A99D]" />
            <span>{story.location}</span>
          </p>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#00779E] transition-colors leading-snug">
            {story.title}
          </h3>
          <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3">
            {story.story}
          </p>
        </div>

        <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
          <Link
            href={`/success-stories#${story.slug}`}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111111] group-hover:text-[#00779E] transition-colors"
          >
            <span>Read Full Story</span>
            <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
