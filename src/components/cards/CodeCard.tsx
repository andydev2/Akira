"use client";

import { useMemo, useState } from "react";
import BentoCard from "../BentoCard";
import { useLanguage } from "../../context/LanguageContext";

export default function CodeCard() {
  const { t } = useLanguage();
  const [hoveredCell, setHoveredCell] = useState<string | null>(null);

  // Generate a deterministic contribution graph without mutable outer variables
  const grid = useMemo(() => {
    const weeks = 24;
    const days = 7;
    const data: number[][] = [];

    // Pure LCG pseudo-random generator
    const getLevel = (w: number, d: number) => {
      const idx = w * 7 + d + 1;
      const hash = (idx * 16807 + 1013904223) % 2147483647;
      const normalized = hash / 2147483647;
      if (normalized < 0.28) return 0;
      if (normalized < 0.52) return 1;
      if (normalized < 0.74) return 2;
      if (normalized < 0.90) return 3;
      return 4;
    };

    for (let w = 0; w < weeks; w++) {
      const week: number[] = [];
      for (let d = 0; d < days; d++) {
        week.push(getLevel(w, d));
      }
      data.push(week);
    }
    return data;
  }, []);

  const levelColors = [
    "bg-slate-200/70 dark:bg-base/[0.04] border-transparent",
    "bg-emerald-500/30 border-emerald-500/25",
    "bg-emerald-500/50 border-emerald-500/35",
    "bg-emerald-500/75 dark:bg-emerald-400/70 border-emerald-500/40 shadow-[0_0_6px_rgba(52,211,153,0.25)]",
    "bg-emerald-600 dark:bg-emerald-300 border-emerald-600/60 shadow-[0_0_8px_rgba(52,211,153,0.4)]",
  ];

  return (
    <BentoCard className="p-5 sm:p-7 h-full flex flex-col justify-between" delay={360}>
      <div>
        <div className="flex items-center justify-between mb-4 gap-2">
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span className="text-[10px] font-mono font-semibold text-accent tracking-widest px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 shrink-0">
              07
            </span>
            <span className="w-4 sm:w-5 h-px bg-base/15 shrink-0" />
            <h2 className="text-[11px] font-mono text-slate-600 dark:text-slate-300 tracking-widest uppercase whitespace-nowrap">
              {t.code.title}
            </h2>
          </div>
          <span className="text-[10px] font-mono text-accent font-medium whitespace-nowrap shrink-0">Daily Craft</span>
        </div>

        {/* Contribution Graph Heatmap */}
        <div className="p-2.5 rounded-xl bg-slate-50/80 dark:bg-base/[0.02] border border-slate-200/80 dark:border-base/[0.06] mb-3 overflow-hidden" aria-hidden="true">
          <div className="flex gap-[3px] justify-between">
            {grid.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.map((level, di) => (
                  <div
                    key={di}
                    onMouseEnter={() => setHoveredCell(`w${wi}-d${di}`)}
                    onMouseLeave={() => setHoveredCell(null)}
                    className={`
                      w-[7px] h-[7px] rounded-[2px] border ${levelColors[level]}
                      transition-all duration-150 cursor-pointer
                      ${hoveredCell === `w${wi}-d${di}` ? "scale-150 z-10 brightness-125" : ""}
                    `}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Activity Metrics Grid to eliminate empty void */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="flex flex-col p-2 rounded-lg bg-slate-50/70 dark:bg-base/[0.02] border border-slate-200/70 dark:border-base/[0.05]">
            <span className="text-[9px] font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider whitespace-nowrap">Commits</span>
            <span className="text-sm font-mono font-bold text-accent whitespace-nowrap">1,200+</span>
          </div>
          <div className="flex flex-col p-2 rounded-lg bg-slate-50/70 dark:bg-base/[0.02] border border-slate-200/70 dark:border-base/[0.05]">
            <span className="text-[9px] font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider whitespace-nowrap">Repos</span>
            <span className="text-sm font-mono font-bold text-slate-900 dark:text-slate-100 whitespace-nowrap">18+</span>
          </div>
          <div className="flex flex-col p-2 rounded-lg bg-slate-50/70 dark:bg-base/[0.02] border border-slate-200/70 dark:border-base/[0.05]">
            <span className="text-[9px] font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider whitespace-nowrap">Streak</span>
            <span className="text-sm font-mono font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">Active</span>
          </div>
        </div>
      </div>

      {/* GitHub Profile Action button with protected no-wrap and zero clipping */}
      <a
        href="https://github.com/andydev2"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile Andy Mendoza"
        className="group/btn flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl bg-slate-50/80 dark:bg-base/[0.03] border border-slate-200/80 dark:border-base/[0.08] hover:bg-slate-100 dark:hover:bg-base/[0.07] hover:border-accent/40 transition-all duration-200 w-full"
      >
        <div className="flex items-center gap-2 min-w-0">
          <svg className="w-4 h-4 text-base/80 group-hover/btn:text-accent transition-colors shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span className="font-mono text-[11px] font-semibold text-slate-800 dark:text-slate-100 group-hover/btn:text-base/100 whitespace-nowrap">@andydev2</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-accent whitespace-nowrap shrink-0">
          <span>{t.code.activity}</span>
          <svg
            className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-200 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </a>
    </BentoCard>
  );
}
