import Image from "next/image";
import Link from "next/link";
import { Quote, Sparkles, MapPin, CheckCircle } from "lucide-react";

export default function StoryCard({ story }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col lg:flex-row hover:border-[#0F766E]/40">
      {/* Image Side */}
      <div className="relative w-full lg:w-2/5 min-h-[260px] lg:min-h-full bg-slate-100 flex-shrink-0">
        <Image
          src={story.image}
          alt={story.title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-black uppercase tracking-wider text-[#0F766E] shadow-sm">
            {story.category}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 lg:hidden text-white text-xs font-medium flex items-center gap-1">
          <MapPin size={12} className="text-emerald-400" />
          <span>{story.location}</span>
        </div>
      </div>

      {/* Narrative Side */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
        <div>
          <div className="hidden lg:flex items-center gap-2 text-xs text-slate-500 font-semibold mb-2">
            <MapPin size={13} className="text-[#0F766E]" />
            <span>{story.location}</span>
            <span>•</span>
            <span className="text-slate-400 italic">{story.beneficiaryAlias}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-[#042E3A] mb-3 leading-snug">
            {story.title}
          </h3>

          {/* Quote Pill */}
          <div className="relative bg-emerald-50/70 border-l-4 border-[#16A34A] p-3.5 rounded-r-lg mb-5">
            <Quote size={16} className="text-[#16A34A] mb-1 opacity-60" />
            <p className="text-xs sm:text-sm text-slate-700 italic font-medium leading-relaxed">
              "{story.quote}"
            </p>
          </div>

          {/* Structured Transformation Progression */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
              <span className="font-bold text-slate-900 block mb-1 text-[11px] uppercase tracking-wider text-rose-700">
                The Challenge
              </span>
              <p className="text-slate-600 line-clamp-3 leading-relaxed">
                {story.challenge}
              </p>
            </div>

            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
              <span className="font-bold text-slate-900 block mb-1 text-[11px] uppercase tracking-wider text-[#0F766E]">
                Roysons Trust Support
              </span>
              <p className="text-slate-600 line-clamp-3 leading-relaxed">
                {story.support}
              </p>
            </div>
          </div>
        </div>

        {/* Outcome summary bar */}
        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-bold">
            <CheckCircle size={15} />
            <span>{story.outcome.slice(0, 75)}...</span>
          </div>

          <Link
            href="/stories"
            className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-[#0F766E] hover:text-[#16A34A] transition-colors"
          >
            Read All Stories →
          </Link>
        </div>
      </div>
    </div>
  );
}
