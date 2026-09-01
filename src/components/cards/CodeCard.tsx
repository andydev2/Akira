"use client";

import { useMemo } from "react";
import BentoCard from "../BentoCard";
import { useLanguage } from "../../context/LanguageContext";

export default function CodeCard() {
  const { t } = useLanguage();

  // Generate a deterministic contribution graph
  const grid = useMemo(() => {
    const weeks = 26;
    const days = 7;
    const data: number[][] = [];
    // Use a seeded pseudo-random for consistent renders
    let seed = 42;
    const rand = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    for (let w = 0; w < weeks; w++) {
      const week: number[] = [];
      for (let d = 0; d < days; d++) {
        const val = rand();
        // Create a realistic-looking distribution
        if (val < 0.3) week.push(0);
        else if (val < 0.55) week.push(1);
        else if (val < 0.75) week.push(2);
        else if (val < 0.9) week.push(3);
        else week.push(4);
      }
      data.push(week);
    }
    return data;
  }, []);

  const levelColors = [
    "bg-base/[0.03]",
    "bg-accent/10",
    "bg-accent/20",
    "bg-accent/35",
    "bg-accent/55",
  ];

  return (
    <BentoCard className="p-6 sm:p-8 h-full" delay={360}>
      <div className="flex items-center gap-3 mb-5">
        <span className="text-[10px] font-mono text-base/60 tracking-widest">07</span>
        <span className="w-6 h-px bg-base/10" />
        <span className="text-[10px] font-mono text-base/70 tracking-widest uppercase">{t.code.title}</span>
      </div>

      {/* Contribution graph */}
      <div className="flex gap-[3px] mb-5 overflow-hidden">
        {grid.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-[3px]">
            {week.map((level, di) => (
              <div
                key={di}
                className={`w-[7px] h-[7px] rounded-[2px] ${levelColors[level]} transition-colors duration-200`}
              />
            ))}
          </div>
        ))}
      </div>

      {/* GitHub link */}
      <a
        href="https://github.com/andydev2"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
        className="group flex items-center gap-2 text-xs text-base/70 hover:text-base/90 transition-colors duration-200"
      >
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
        <span>{t.code.activity}</span>
        <svg
          className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </a>
    </BentoCard>
  );
}
