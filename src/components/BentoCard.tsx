"use client";

import { useRef, type ReactNode } from "react";

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
}: BentoCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--mouse-x", `-1000px`);
    el.style.setProperty("--mouse-y", `-1000px`);
  };

  return (
    <div
      ref={ref}
      id={id}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        bento-card-root relative overflow-hidden rounded-2xl sm:rounded-3xl
        group/card
        ${className}
      `}
      style={{
        // Default CSS custom properties for spotlight
        ["--mouse-x" as string]: "-1000px",
        ["--mouse-y" as string]: "-1000px",
      }}
    >
      {/* Top Specular Rim */}
      <div className="bento-top-rim" aria-hidden="true" />

      {/* Dynamic Cursor Spotlight via pure CSS custom properties (0 React re-renders) */}
      <div
        className="bento-spotlight opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(500px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), var(--accent-glow), transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Subtle corner specular highlight */}
      <div
        className="absolute -inset-px rounded-2xl sm:rounded-3xl pointer-events-none transition-opacity duration-300 opacity-0 group-hover/card:opacity-100 -z-10"
        style={{
          background: `radial-gradient(350px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(52, 211, 153, 0.15), transparent 80%)`,
        }}
        aria-hidden="true"
      />

      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}
