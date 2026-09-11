"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, ChevronLeft, ChevronRight, Sparkles, ShieldCheck } from "lucide-react";

const slides = [
  {
    id: 1,
    headline: "Creating Hope. Empowering Communities. Transforming Lives.",
    description:
      "ROYSONS TRUST works to build stronger communities by supporting people, creating opportunities and delivering meaningful social-impact initiatives.",
    primaryCta: { label: "Explore Our Impact", href: "/impact" },
    secondaryCta: { label: "Make an Impact", href: "/donate" },
    badge: "Global Humanitarian Trust",
    image: "/trust/roysons_trust_hero.jpg",
    alt: "ROYSONS TRUST Community Humanitarian Support",
  },
  {
    id: 2,
    headline: "Together, We Can Build a Better Tomorrow",
    description:
      "From education and healthcare to community development and humanitarian support, every initiative is designed to create lasting positive change.",
    primaryCta: { label: "Explore Our Programs", href: "/programs" },
    secondaryCta: { label: "Support Our Mission", href: "/donate" },
    badge: "Sustainable Development",
    image: "/trust/trust_scholarship_girls.jpg",
    alt: "ROYSONS TRUST Education and Youth Development",
  },
  {
    id: 3,
    headline: "Every Contribution Creates an Impact",
    description:
      "Your support helps transform ideas into action and action into opportunities for people and communities that need them most.",
    primaryCta: { label: "Support Our Mission", href: "/donate" },
    secondaryCta: { label: "View Our Projects", href: "/projects" },
    badge: "Transparent Fiduciary Giving",
    image: "/trust/trust_medical_clinic.jpg",
    alt: "ROYSONS TRUST Free Clinical Care and Medical Camps",
  },
  {
    id: 4,
    headline: "Building Stronger Communities for Future Generations",
    description:
      "We believe sustainable development begins with empowered people, stronger communities and equal opportunities.",
    primaryCta: { label: "Discover Our Story", href: "/about" },
    secondaryCta: { label: "Explore Our Impact", href: "/impact" },
    badge: "Generational Empowerment",
    image: "/trust/trust_water_plant.jpg",
    alt: "ROYSONS TRUST Clean Drinking Water and Community Projects",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  return (
    <div
      className="relative w-full min-h-[580px] sm:min-h-[620px] md:min-h-[660px] lg:min-h-[700px] lg:h-[88vh] lg:max-h-[850px] py-16 md:py-20 overflow-hidden bg-black flex flex-col justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="ROYSONS TRUST Hero Slideshow"
    >
      {/* Background Slides with Ken Burns Effect */}
      {slides.map((slide, idx) => {
        const isActive = idx === current;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <div className={`relative w-full h-full ${isActive ? "ken-burns" : ""}`}>
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={idx === 0}
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
            {/* Cinematic multi-layered gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/50" />
          </div>
        );
      })}

      {/* Floating Ambient Subtle Gradient Shapes */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#00779E]/15 rounded-full blur-3xl pointer-events-none z-10" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#009688]/15 rounded-full blur-3xl pointer-events-none z-10" />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto w-full h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-3xl space-y-4 sm:space-y-5 text-left">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-wider animate-in fade-in slide-in-from-top-4 duration-500">
            <span className="w-2 h-2 rounded-full bg-[#00A99D] animate-pulse" />
            <span>{slides[current].badge}</span>
          </div>

          {/* Headline */}
          <h1 className="hero-heading text-white tracking-tight drop-shadow-sm font-extrabold animate-in fade-in slide-in-from-bottom-6 duration-700">
            {slides[current].headline}
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg text-neutral-200 leading-relaxed max-w-2xl font-normal drop-shadow animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            {slides[current].description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
            <Link
              href={slides[current].primaryCta.href}
              className="btn-gradient inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all group"
            >
              <span>{slides[current].primaryCta.label}</span>
              <ArrowRight
                size={15}
                className="transform group-hover:translate-x-1 transition-transform"
              />
            </Link>

            {slides[current].secondaryCta && (
              <Link
                href={slides[current].secondaryCta.href}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 hover:border-white text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:scale-[1.02] transition-all group"
              >
                <span>{slides[current].secondaryCta.label}</span>
                <ArrowRight
                  size={15}
                  className="transform group-hover:translate-x-1 transition-transform"
                />
              </Link>
            )}
          </div>

          {/* Verified Trust Badges */}
          <div className="pt-3 sm:pt-4 flex flex-wrap items-center gap-5 sm:gap-8 text-sm sm:text-base md:text-[17px] text-white font-semibold">
            <div className="flex items-center gap-2.5">
              <ShieldCheck size={20} className="text-[#00A99D] shrink-0" />
              <span className="tracking-wide">100% Direct Welfare Delivery</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Sparkles size={20} className="text-[#00779E] shrink-0" />
              <span className="tracking-wide">Audited &amp; Verified Reporting</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicators & Slide Switcher */}
      <div className="absolute bottom-6 sm:bottom-8 right-24 sm:right-28 md:right-32 z-20 flex items-center gap-3 sm:gap-4">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-all backdrop-blur-md cursor-pointer hover:scale-105 active:scale-95"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Progress Bar Indicators */}
        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                idx === current
                  ? "w-8 bg-gradient-to-r from-[#00779E] to-[#059669]"
                  : "w-2 bg-white/35 hover:bg-white/65"
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-all backdrop-blur-md cursor-pointer hover:scale-105 active:scale-95"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
