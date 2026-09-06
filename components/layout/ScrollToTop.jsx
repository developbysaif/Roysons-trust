"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-20 md:bottom-6 left-5 z-40 p-3 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-slate-700 hover:text-[#0F766E] hover:border-teal-400 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
    >
      <ChevronUp size={20} />
    </button>
  );
}
