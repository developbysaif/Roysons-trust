"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Quote,
  Play,
  MapPin,
  CheckCircle2,
  Heart,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import VideoModal from "@/components/ui/VideoModal";
import TestimonialSlider from "@/components/ui/TestimonialSlider";
import { storiesData, videoStories } from "@/data/storiesData";

export default function SuccessStoriesPage() {
  const [activeVideo, setActiveVideo] = useState(null);
  const featuredStory = storiesData[0];
  const gridStories = storiesData.slice(1);

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <PageHero
        badge="STORIES OF HOPE"
        title="Real People. Real Stories. Real Change."
        description="Every statistic represents a human life restored. Explore inspiring journeys of dignity, resilience, and transformation."
        breadcrumbs={[{ label: "Success Stories" }]}
      />

      {/* 2. FEATURED STORY (LARGE SPLIT LAYOUT) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="FEATURED TRANSFORMATION"
            title="A Father’s Hope, A Daughter’s Dream"
            subtitle="How an academic scholarship broke the cycle of generational manual labor for a brilliant student in rural Punjab."
          />

          <div className="bg-slate-50 rounded-3xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left: Featured Image */}
            <div className="lg:col-span-6 relative h-[360px] sm:h-[480px] w-full bg-slate-200">
              <Image
                src={featuredStory.image}
                alt={featuredStory.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4 z-10">
                <span className="px-4 py-2 rounded-full bg-white/95 backdrop-blur-md text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#00779E] shadow-sm border border-slate-200">
                  {featuredStory.category}
                </span>
              </div>
            </div>

            {/* Right: Narrative & Quote */}
            <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 space-y-6">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-600">
                <MapPin size={16} className="text-[#00779E]" />
                <span>{featuredStory.location}</span>
                <span>&bull;</span>
                <span className="text-[#00779E]">{featuredStory.personName}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] leading-snug tracking-tight">
                {featuredStory.title}
              </h3>

              <div className="p-5 rounded-2xl bg-[#eff6ff] border-l-4 border-[#00779E]">
                <p className="text-base sm:text-lg text-slate-800 italic font-medium leading-relaxed">
                  &ldquo;{featuredStory.quote}&rdquo;
                </p>
              </div>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {featuredStory.story}
              </p>

              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs sm:text-sm text-slate-600 font-semibold">
                  Verified by ROYSONS TRUST Field Monitoring Unit
                </div>
                <Link
                  href="/donate"
                  className="btn-emerald inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-sm"
                >
                  <Heart size={16} className="fill-white" />
                  <span>Sponsor a Student</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STORY GRID */}
      <section className="py-20 bg-[#f8fafc] border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="COMMUNITY VOICES"
            title="Stories from the Field"
            subtitle="Respectful narratives showing the direct human impact of clean water, healthcare, and vocational skills."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridStories.map((story) => (
              <div
                key={story.id}
                id={story.slug}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#00779E] shadow-xs border border-slate-200">
                        {story.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-bold">
                      <MapPin size={15} className="text-[#00779E]" />
                      <span>{story.location}</span>
                      <span>&bull;</span>
                      <span className="text-[#00779E]">{story.beneficiaryAlias}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-[#0f172a] group-hover:text-[#00779E] transition-colors leading-snug">
                      {story.title}
                    </h3>

                    <div className="space-y-2.5">
                      <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-200/60">
                        <span className="text-xs sm:text-sm font-black text-rose-800 block mb-1">The Challenge:</span>
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed line-clamp-2">{story.challenge}</p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-teal-50/70 border border-teal-200/60">
                        <span className="text-xs sm:text-sm font-black text-[#0f766e] block mb-1">Support Received:</span>
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed line-clamp-2">{story.support}</p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/60">
                        <span className="text-xs sm:text-sm font-black text-emerald-800 block mb-1">Outcome:</span>
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed line-clamp-2">{story.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0">
                  <p className="text-sm sm:text-base text-slate-600 italic border-t border-slate-200 pt-4 line-clamp-2 font-medium">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VIDEO STORIES */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="DOCUMENTARY DISPATCHES"
            title="Video Stories"
            subtitle="Witness the on-ground impact through visual field recordings and personal testimonies."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoStories.map((vid) => (
              <div
                key={vid.id}
                className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                onClick={() => setActiveVideo(vid)}
              >
                <div>
                  <div className="relative h-56 w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={vid.thumbnail}
                      alt={vid.title}
                      fill
                      className="object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors" />

                    {/* Play Button Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/95 group-hover:bg-white text-[#00779E] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <Play size={26} className="fill-current ml-1" />
                      </div>
                    </div>

                    <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-bold px-2.5 py-1 rounded-md">
                      {vid.duration}
                    </div>

                    <div className="absolute top-3 left-3">
                      <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#00779E] shadow-xs">
                        {vid.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-3">
                    <h3 className="text-xl sm:text-2xl font-black text-[#0f172a] group-hover:text-[#00779E] transition-colors leading-snug">
                      {vid.title}
                    </h3>
                    <p className="text-base sm:text-lg text-slate-700 leading-relaxed line-clamp-2 font-normal">
                      {vid.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0 border-t border-slate-200 mt-2">
                  <span className="inline-flex items-center gap-2 text-sm sm:text-base font-extrabold text-[#00779E] group-hover:underline">
                    <span>Watch Story</span>
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIAL SLIDER */}
      <section className="py-20 sm:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="TESTIMONIALS"
            title="Voices of Community Partners"
            subtitle="Reflections from community elders, beneficiary families, and institutional partners."
          />

          <TestimonialSlider />
        </div>
      </section>

      {/* Video Modal Player */}
      {activeVideo && (
        <VideoModal
          isOpen={!!activeVideo}
          onClose={() => setActiveVideo(null)}
          videoUrl={activeVideo.videoUrl}
          title={activeVideo.title}
        />
      )}
    </div>
  );
}
