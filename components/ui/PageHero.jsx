import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export default function PageHero({
  badge = "ROYSONS TRUST",
  title,
  description,
  breadcrumbs = [],
}) {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#f0fdfa] via-[#f8fafc] to-white border-b border-slate-200/60 pt-12 pb-16 sm:py-20 overflow-hidden">
      {/* Subtle Ambient Lighting Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-gradient-to-b from-teal-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-6">
          <Link href="/" className="inline-flex items-center gap-1 hover:text-[#0F766E] transition-colors">
            <Home size={13} />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <ChevronRight size={12} className="text-slate-400" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-[#0F766E] transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-slate-800 font-semibold">{crumb.label}</span>
              )}
            </div>
          ))}
        </nav>

        {/* Hero Content */}
        <div className="max-w-3xl">
          {badge && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-xs font-black uppercase tracking-widest text-[#0F766E] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
              {badge}
            </span>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#042E3A] tracking-tight leading-[1.15] mb-4">
            {title}
          </h1>

          {description && (
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
