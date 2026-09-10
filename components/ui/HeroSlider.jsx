"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Sparkles, HeartPulse, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/trust/hero_slide_family.jpg",
    alt: "Roysons Trust – Rural Family Welfare Pakistan",
    caption: "Empowering Families",
  },
  {
    src: "/trust/hero_slide_education.jpg",
    alt: "Roysons Trust – Girls Education Pakistan",
    caption: "Scholarship for Girls",
  },
  {
    src: "/trust/hero_slide_healthcare.jpg",
    alt: "Roysons Trust – Free Medical Camp Pakistan",
    caption: "Free Medical Camps",
  },
  {
    src: "/trust/hero_slide_ration.jpg",
    alt: "Roysons Trust – Food Ration Distribution",
    caption: "Food Ration Distribution",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setIsTransitioning(false);
      }, 300);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  // Auto-play every 4 seconds
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="lg:col-span-5 relative reveal-item">
      <div className="relative mx-auto max-w-md lg:max-w-none">
        {/* Slider Container */}
        <div className="relative h-[300px] sm:h-[380px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                idx === current
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={idx === 0}
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#042E3A]/70 via-transparent to-transparent" />

              {/* Caption at bottom */}
              <div className="absolute bottom-4 left-4 z-20">
                <span className="text-xs font-bold text-white/90 uppercase tracking-widest bg-[#042E3A]/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                  {slide.caption}
                </span>
              </div>
            </div>
          ))}

          {/* Prev / Next Buttons */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white transition-all hover:scale-110"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white transition-all hover:scale-110"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  idx === current
                    ? "w-5 h-2 bg-white"
                    : "w-2 h-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Floating Impact Card */}
        <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl border border-slate-100 max-w-[240px] sm:max-w-[260px] animate-in fade-in slide-in-from-bottom duration-700 z-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl trust-gradient-primary text-white flex items-center justify-center shrink-0 shadow-md">
              <HeartPulse size={24} />
            </div>
            <div>
              <span className="block text-xl font-black text-[#042E3A]">
                10,000+
              </span>
              <span className="block text-xs text-slate-500 font-semibold leading-tight">
                Lives Directly Touched Across Pakistan
              </span>
            </div>
          </div>
        </div>

        {/* Floating Tag */}
        <div className="hidden sm:flex absolute -top-4 -right-4 bg-[#042E3A] text-white text-xs font-black uppercase tracking-wider px-4 py-2 rounded-xl shadow-lg border border-[#00A99D]/40 items-center gap-1.5 z-20">
          <Sparkles size={14} className="text-[#00A99D]" />
          <span>Purpose-Led Welfare</span>
        </div>
      </div>
    </div>
  );
}
