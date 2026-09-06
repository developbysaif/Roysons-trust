"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Accordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={idx}
            className={`rounded-xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "border-[#0F766E]/50 bg-teal-50/20 shadow-sm"
                : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-[#042E3A] hover:text-[#0F766E] transition-colors focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="text-sm sm:text-base pr-2">{item.question}</span>
              <ChevronDown
                size={18}
                className={`text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-[#0F766E]" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-teal-100/50 pt-3">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
