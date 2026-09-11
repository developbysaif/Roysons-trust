"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function ProgramFaqAccordion({ faqs = [] }) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-20 sm:py-24 bg-neutral-50 border-t border-neutral-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white text-neutral-800 border border-neutral-200 shadow-xs">
            <HelpCircle size={14} className="text-[#009688]" />
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
            Program Questions &amp; Answers
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl mx-auto font-normal">
            Clear, transparent details regarding operations, donor governance, and on-ground beneficiary verification.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-neutral-300 shadow-md"
                    : "bg-white/80 border-neutral-200 hover:border-neutral-300 hover:bg-white"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#111111] tracking-tight">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 bg-black text-white"
                        : "bg-neutral-100 text-neutral-600"
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal border-t border-neutral-100 animate-in fade-in slide-in-from-top-1 duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
