"use client";

import { useEffect, useRef, useState } from "react";

export default function ImpactCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 1600,
}) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const endValue = Number(target) || 0;

    const startCounting = () => {
      let startTime = null;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeOut * endValue));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(endValue);
        }
      };

      window.requestAnimationFrame(step);
    };

    if (!("IntersectionObserver" in window)) {
      startCounting();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          observer.disconnect();
          startCounting();
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={elementRef} className="tabular-nums font-black inline-block tracking-tight">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
