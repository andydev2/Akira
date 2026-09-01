"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export default function BentoCard({
  children,
  className = "",
  id,
  delay = 0,
}: BentoCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "40px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      className={`
        relative overflow-hidden rounded-2xl
        bg-base/[0.025] border border-base/[0.06]
        hover:bg-base/[0.04] hover:border-base/[0.1]
        transition-all duration-300 ease-out
        ${className}
      `}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms, background-color 0.3s ease, border-color 0.3s ease`,
      }}
    >
      {children}
    </div>
  );
}
