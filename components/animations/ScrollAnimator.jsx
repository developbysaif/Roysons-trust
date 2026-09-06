"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    // Collect all reveal items or automatically tag major sections & cards
    const elements = document.querySelectorAll(
      ".reveal-item, section, .trust-card-hover, .group"
    );

    elements.forEach((el) => {
      if (!el.classList.contains("reveal-item")) {
        el.classList.add("reveal-item");
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
