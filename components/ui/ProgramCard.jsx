import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  GraduationCap,
  HeartPulse,
  Utensils,
  ShieldAlert,
  Building,
  Sparkles,
} from "lucide-react";

const ICON_MAP = {
  GraduationCap,
  HeartPulse,
  Utensils,
  ShieldAlert,
  Building,
  Sparkles,
};

export default function ProgramCard({ program }) {
  const IconComponent = ICON_MAP[program.icon] || Sparkles;

  return (
    <div className="group relative bg-white rounded-3xl border-2 border-slate-200/80 shadow-sm trust-card-hover flex flex-col overflow-hidden">
      {/* Top Image Container with Zoom */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100">
        <Image
          src={program.coverImage}
          alt={program.title}
          fill
          className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#042E3A]/85 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Floating Category Badge */}
        <div className="absolute top-3.5 left-3.5">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-black uppercase tracking-wider text-[#042E3A] shadow-md border border-[#00A99D]/30">
            <IconComponent size={14} className="text-[#00A99D]" />
            {program.shortTitle}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-black text-[#042E3A] group-hover:text-[#00A99D] transition-colors mb-2.5 line-clamp-1">
            {program.title}
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-5">
            {program.summary}
          </p>

          {/* Quick Metrics Chips */}
          {program.stats && (
            <div className="grid grid-cols-2 gap-2.5 pt-3 pb-2 border-t border-slate-100">
              {program.stats.slice(0, 2).map((s, idx) => (
                <div key={idx} className="bg-teal-50/40 rounded-xl p-2.5 text-center border border-teal-100/60">
                  <span className="block text-base font-black text-[#00A99D]">
                    {s.value}
                  </span>
                  <span className="block text-xs text-slate-500 font-medium truncate">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="pt-3 border-t border-slate-100">
          <Link
            href={`/programs/${program.slug}`}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider text-[#042E3A] group-hover:text-[#00A99D] transition-colors"
          >
            <span>Learn More About {program.shortTitle}</span>
            <ArrowRight
              size={15}
              className="transform group-hover:translate-x-2 transition-transform text-[#00A99D]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
