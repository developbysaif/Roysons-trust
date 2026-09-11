"use client";

import { useState, useEffect, useCallback } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/storiesData";

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const active = testimonials[current];

  return (
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100 text-center relative overflow-hidden">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-[#eff6ff] text-[#2563eb] flex items-center justify-center mb-6 shadow-sm">
          <Quote size={32} className="rotate-180" />
        </div>

        <p className="text-lg sm:text-2xl font-medium text-[#0f172a] leading-relaxed mb-8 italic">
          "{active.quote}"
        </p>

        <div className="space-y-1">
          <h4 className="text-base sm:text-lg font-bold text-[#0f172a]">
            {active.personName}
          </h4>
          <p className="text-xs sm:text-sm text-[#0f766e] font-semibold">
            {active.location} &bull; <span className="text-[#64748b]">{active.program}</span>
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8 pt-6 border-t border-slate-100">
          <button
            onClick={prev}
            aria-label="Previous quote"
            className="w-10 h-10 rounded-full border border-slate-200 hover:border-[#2563eb] hover:bg-[#eff6ff] text-[#0f172a] hover:text-[#2563eb] flex items-center justify-center transition-all"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  idx === current
                    ? "w-7 h-2 bg-[#0f766e]"
                    : "w-2 h-2 bg-slate-200 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next quote"
            className="w-10 h-10 rounded-full border border-slate-200 hover:border-[#2563eb] hover:bg-[#eff6ff] text-[#0f172a] hover:text-[#2563eb] flex items-center justify-center transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
