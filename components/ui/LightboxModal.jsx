"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, MapPin, Calendar, Tag } from "lucide-react";

export default function LightboxModal({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="relative max-w-4xl w-full bg-[#0F172A] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
          aria-label="Close preview"
        >
          <X size={20} />
        </button>

        {/* Image Container */}
        <div className="relative h-72 sm:h-96 md:h-[480px] w-full bg-black">
          <Image
            src={item.image}
            alt={item.title}
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Modal Info Footer */}
        <div className="p-5 sm:p-6 bg-[#0B1120] border-t border-slate-800 text-white">
          <div className="flex flex-wrap items-center gap-3 text-xs text-teal-400 mb-2 font-semibold">
            <span className="inline-flex items-center gap-1">
              <Tag size={13} />
              <span>{item.category}</span>
            </span>
            {item.location && (
              <>
                <span>•</span>
                <span className="inline-flex items-center gap-1 text-slate-300">
                  <MapPin size={13} />
                  <span>{item.location}</span>
                </span>
              </>
            )}
            {item.date && (
              <>
                <span>•</span>
                <span className="inline-flex items-center gap-1 text-slate-400">
                  <Calendar size={13} />
                  <span>{item.date}</span>
                </span>
              </>
            )}
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
            {item.title}
          </h3>

          {item.caption && (
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {item.caption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
