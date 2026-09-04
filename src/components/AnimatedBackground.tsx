"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number | null = null;
    const handlePointerMove = (e: PointerEvent) => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (spotlightRef.current) {
          spotlightRef.current.style.transform = `translate3d(${e.clientX * 0.12}px, ${e.clientY * 0.12}px, 0)`;
        }
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Deep Background base */}
      <div className="absolute inset-0 bg-background transition-colors duration-500" />

      {/* Aurora Ambient Mesh - Primary Emerald Glow */}
      <div
        className="absolute -top-[15%] left-[10%] w-[55vw] h-[55vw] rounded-full animate-aurora-1 filter blur-[100px] sm:blur-[140px] opacity-[0.07] dark:opacity-[0.18]"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent) 0%, rgba(16, 185, 129, 0.4) 45%, transparent 75%)",
        }}
      />

      {/* Aurora Ambient Mesh - Secondary Cyan / Sky Glow */}
      <div
        className="absolute top-[40%] -right-[10%] w-[50vw] h-[50vw] rounded-full animate-aurora-2 filter blur-[110px] sm:blur-[150px] opacity-[0.05] dark:opacity-[0.15]"
        style={{
          background:
            "radial-gradient(circle, #0284c7 0%, #38bdf8 35%, transparent 70%)",
        }}
      />

      {/* Aurora Ambient Mesh - Tertiary Indigo Violet Accent */}
      <div
        className="absolute -bottom-[20%] left-[20%] w-[45vw] h-[45vw] rounded-full filter blur-[120px] sm:blur-[160px] opacity-[0.04] dark:opacity-[0.12]"
        style={{
          background:
            "radial-gradient(circle, #6366f1 0%, rgba(99, 102, 241, 0.3) 40%, transparent 70%)",
        }}
      />

      {/* Interactive Cursor Spotlight Glow (GPU accelerated) */}
      <div
        ref={spotlightRef}
        className="absolute -inset-[300px] transition-transform duration-500 ease-out will-change-transform"
        style={{ transform: "translate3d(0, 0, 0)" }}
      >
        <div
          className="w-[450px] h-[450px] rounded-full filter blur-[90px] opacity-[0.04] dark:opacity-[0.14]"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, var(--color-accent) 0%, #06b6d4 50%, transparent 80%)",
          }}
        />
      </div>

      {/* Modern High-Tech Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--color-base) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-base) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at 50% 30%, black 40%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, black 40%, transparent 85%)",
        }}
      />

      {/* Delicate floating and twinkling stars (active in dark mode) */}
      <div className="hidden dark:block">
        {[
          { w: 2.5, l: 12, t: 15, d: 0, dur: 7, color: "var(--color-accent)" },
          { w: 1.5, l: 24, t: 45, d: 1.5, dur: 9, color: "var(--color-base)" },
          { w: 2.0, l: 38, t: 20, d: 3.2, dur: 8, color: "#38bdf8" },
          { w: 3.0, l: 52, t: 65, d: 2.1, dur: 11, color: "var(--color-accent)" },
          { w: 1.8, l: 68, t: 12, d: 4.5, dur: 6, color: "var(--color-base)" },
          { w: 2.2, l: 82, t: 40, d: 0.8, dur: 10, color: "#38bdf8" },
          { w: 1.5, l: 90, t: 75, d: 2.8, dur: 8, color: "var(--color-accent)" },
          { w: 2.0, l: 18, t: 82, d: 5.0, dur: 9, color: "var(--color-base)" },
          { w: 2.4, l: 75, t: 90, d: 1.2, dur: 7, color: "var(--color-accent)" },
          { w: 1.6, l: 45, t: 92, d: 3.8, dur: 10, color: "#38bdf8" },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-particle"
            style={{
              width: `${p.w}px`,
              height: `${p.w}px`,
              left: `${p.l}%`,
              top: `${p.t}%`,
              backgroundColor: p.color,
              boxShadow: `0 0 8px ${p.color}`,
              animationDelay: `${p.d}s`,
              animationDuration: `${p.dur}s`,
            }}
          />
        ))}
      </div>

      {/* Very subtle luxury noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />
    </div>
  );
}
