"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, ShieldCheck, Heart } from "lucide-react";

export default function ProgramHero({ program }) {
  const { hero, shortTitle } = program;

  return (
    <section className="relative w-full min-h-[70vh] lg:min-h-[78vh] flex items-center bg-black overflow-hidden py-16 lg:py-24">
      {/* Background Subtle Ambient Glow */}
      <div
        className="absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ backgroundColor: hero.accentColor || "#00779E" }}
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ backgroundColor: hero.accentColor || "#009688" }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Breadcrumb, Eyebrow, Heading, Description & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-xs text-neutral-400 font-medium"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight size={13} className="text-neutral-600" />
              <Link href="/programs" className="hover:text-white transition-colors">
                Our Programs
              </Link>
              <ChevronRight size={13} className="text-neutral-600" />
              <span className="text-white font-semibold">{shortTitle}</span>
            </nav>

            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-wider">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: hero.accentColor || "#00A99D" }}
              />
              <span>{hero.eyebrow}</span>
              <span className="text-neutral-500">•</span>
              <span className="text-neutral-300 font-normal">{program.category}</span>
            </div>

            {/* Large Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] drop-shadow-sm">
              {hero.heading}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed font-normal max-w-2xl">
              {hero.description}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href={hero.primaryCta.href}
                className="btn-gradient inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-sm font-bold tracking-wide shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all group"
              >
                <Heart size={16} className="fill-white" />
                <span>{hero.primaryCta.label}</span>
              </Link>

              {hero.secondaryCta && (
                <Link
                  href={hero.secondaryCta.href}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 hover:border-white text-white text-sm font-bold tracking-wide hover:scale-[1.02] transition-all group"
                >
                  <span>{hero.secondaryCta.label}</span>
                  <ArrowRight
                    size={15}
                    className="transform group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              )}
            </div>

            {/* Trust Assurance Badge */}
            <div className="pt-3 flex items-center gap-2 text-xs text-neutral-400">
              <ShieldCheck size={16} className="text-[#00A99D]" />
              <span>100% audited institutional delivery • Verified community impact</span>
            </div>
          </div>

          {/* Right Column: Large Program Image / Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[340px] sm:h-[420px] lg:h-[480px] w-full rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl group">
              <Image
                src={hero.coverImage}
                alt={hero.heading}
                fill
                priority
                className="object-cover object-center ken-burns group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              {/* Subtle multi-layer gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

              {/* Floating Bottom Card Inside Image */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/65 backdrop-blur-md border border-white/15 text-white flex items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold block">
                    Focus Pillar
                  </span>
                  <p className="text-sm font-bold text-white truncate">{program.shortTitle}</p>
                </div>
                <div
                  className="px-3 py-1 rounded-full text-xs font-bold text-white flex-shrink-0"
                  style={{
                    background: `linear-gradient(90deg, #00779E 0%, #009688 50%, #059669 100%)`,
                  }}
                >
                  Verified Field Initiative
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
