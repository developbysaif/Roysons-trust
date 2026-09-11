import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export default function PageHero({
  badge = "ROYSONS TRUST",
  title,
  description,
  breadcrumbs = [],
}) {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#f9fafb] via-[#ffffff] to-white border-b border-neutral-200/80 pt-6 pb-8 sm:py-10 overflow-hidden">
      {/* Subtle Ambient Lighting Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-gradient-to-b from-[#00779E]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium mb-6">
          <Link href="/" className="inline-flex items-center gap-1 hover:text-[#00779E] transition-colors">
            <Home size={13} />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <ChevronRight size={12} className="text-neutral-400" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-[#00779E] transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-neutral-800 font-semibold">{crumb.label}</span>
              )}
            </div>
          ))}
        </nav>

        {/* Hero Content */}
        <div className="max-w-3xl">
          {badge && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-bold uppercase tracking-widest text-neutral-800 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A99D]" />
              {badge}
            </span>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight leading-[1.15] mb-4">
            {title}
          </h1>

          {description && (
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
