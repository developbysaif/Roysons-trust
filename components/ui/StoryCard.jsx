"use client";

import Image from "next/image";
import Link from "next/link";
import { Quote, MapPin, ArrowRight } from "lucide-react";

export default function StoryCard({ story, layout = "vertical" }) {
  if (layout === "horizontal") {
    return (
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col lg:flex-row group">
        <div className="relative w-full lg:w-2/5 min-h-[280px] lg:min-h-full bg-slate-100 flex-shrink-0">
          <Image
            src={story.image}
            alt={story.title}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#00779E] shadow-xs border border-slate-200">
              {story.category}
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-8 lg:p-10 flex-1 flex flex-col justify-between space-y-5">
          <div className="space-y-3.5">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-bold">
              <MapPin size={16} className="text-[#00779E]" />
              <span>{story.location}</span>
              <span>&bull;</span>
              <span className="text-[#00779E]">{story.personName || story.beneficiaryAlias}</span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0f172a] leading-snug">
              {story.title}
            </h3>

            {story.quote && (
              <div className="p-4 sm:p-5 rounded-2xl bg-teal-50/50 border-l-4 border-[#00779E]">
                <p className="text-sm sm:text-base text-slate-800 italic font-medium leading-relaxed">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </div>
            )}

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed line-clamp-3 font-normal">
              {story.story}
            </p>
          </div>

          <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
            <Link
              href={`/success-stories#${story.slug}`}
              className="inline-flex items-center gap-2 text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#0f172a] group-hover:text-[#00779E] transition-colors"
            >
              <span>Read Full Story</span>
              <ArrowRight size={16} className="transform group-hover:translate-x-1.5 transition-transform text-[#00779E]" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Default Vertical Card for 3-Column Home Page Preview
  return (
    <div className="group bg-white rounded-3xl border border-slate-200 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden">
      <div className="relative h-60 w-full overflow-hidden bg-slate-100">
        <Image
          src={story.image}
          alt={story.title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        <div className="absolute top-4 left-4 z-10">
          <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#00779E] shadow-xs border border-slate-200">
            {story.category}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
          <p className="text-base font-extrabold truncate">{story.personName || story.beneficiaryAlias}</p>
          <p className="text-xs sm:text-sm text-slate-200 flex items-center gap-1.5 font-medium mt-0.5">
            <MapPin size={14} className="text-[#00A99D]" />
            <span>{story.location}</span>
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <h3 className="text-xl sm:text-2xl font-black text-[#0f172a] group-hover:text-[#00779E] transition-colors leading-snug">
            {story.title}
          </h3>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed line-clamp-3 font-normal">
            {story.story}
          </p>
        </div>

        <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
          <Link
            href={`/success-stories#${story.slug}`}
            className="inline-flex items-center gap-2 text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#0f172a] group-hover:text-[#00779E] transition-colors"
          >
            <span>Read Full Story</span>
            <ArrowRight size={16} className="transform group-hover:translate-x-1.5 transition-transform text-[#00779E]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
