"use client";

import BentoCard from "../BentoCard";
import { useLanguage } from "../../context/LanguageContext";

export default function ProjectsCard() {
  const { t } = useLanguage();

  return (
    <BentoCard className="p-6 sm:p-8 h-full flex flex-col justify-between" id="projects" delay={200}>
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-5 gap-2">
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span className="text-[10px] font-mono font-semibold text-accent tracking-widest px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 shrink-0">
              05
            </span>
            <span className="w-4 sm:w-5 h-px bg-base/15 shrink-0" />
            <h2 className="text-[11px] font-mono text-slate-600 dark:text-slate-300 tracking-widest uppercase whitespace-nowrap">
              {t.projects.title}
            </h2>
          </div>
          <span className="text-[10px] font-mono text-accent flex items-center gap-1.5 whitespace-nowrap shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shrink-0" />
            1 Live
          </span>
        </div>

        {/* Project List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4">
          {/* Featured Project: Mugen Wall */}
          <a
            href="https://www.mugenwall.online"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View project: ${t.projects.mugen.title}`}
            className="lg:col-span-7 group/project relative flex flex-col justify-between p-4 rounded-xl sm:rounded-2xl bg-base/[0.03] border border-base/[0.08] hover:bg-base/[0.06] hover:border-accent/40 transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            <div>
              {/* Visual Header bar */}
              <div className="flex items-center justify-between mb-2.5 gap-2">
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[10px] font-mono font-bold text-accent px-2 py-0.5 rounded-md bg-accent/15 border border-accent/30 shrink-0">
                    01
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium whitespace-nowrap shrink-0">
                    LIVE 2026
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-base/50 group-hover/project:text-accent transition-colors whitespace-nowrap shrink-0">
                  <span className="whitespace-nowrap">mugenwall.online</span>
                  <svg
                    className="w-3.5 h-3.5 group-hover/project:translate-x-0.5 group-hover/project:-translate-y-0.5 transition-transform duration-200 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-base sm:text-lg font-semibold text-base/95 group-hover/project:text-accent transition-colors duration-200 mb-1">
                {t.projects.mugen.title}
              </h3>
              <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                {t.projects.mugen.description}
              </p>

              {/* Abstract Visual Thumbnail Preview */}
              <div className="relative w-full h-14 sm:h-16 rounded-xl overflow-hidden mb-3 border border-base/[0.08] bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center shadow-inner">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/25 via-cyan-500/20 to-transparent opacity-70 group-hover/project:opacity-100 transition-opacity" />
                <div className="relative z-10 flex items-center gap-2 text-[11px] font-mono font-medium text-white">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
                  <span className="whitespace-nowrap text-white/95">Wallpaper Engine Platform</span>
                </div>
              </div>
            </div>

            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {["Next.js", "MongoDB", "TailwindCSS"].map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-base/[0.04] border border-slate-200 dark:border-base/[0.08] text-slate-800 dark:text-base/70 whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>

          {/* Right Column: Loading Skeleton Cards for Upcoming Projects */}
          <div className="lg:col-span-5 flex flex-col gap-3 justify-between">
            {/* Project 02: Skeleton Loader (In Development) */}
            <div className="relative flex flex-col justify-between p-4 rounded-xl sm:rounded-2xl bg-slate-50/60 dark:bg-base/[0.015] border border-slate-200/80 dark:border-base/[0.06] border-dashed overflow-hidden flex-1 group/skel">
              {/* Shimmer sweep effect */}
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_2.5s_infinite] bg-gradient-to-r from-transparent via-slate-200/50 dark:via-white/[0.04] to-transparent pointer-events-none" />

              <div>
                {/* Skeleton Header */}
                <div className="flex items-center justify-between mb-3 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-bold">02</span>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/25">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse shrink-0" />
                      <span className="text-[8px] font-mono font-semibold text-amber-600 dark:text-amber-400 tracking-wider uppercase whitespace-nowrap">
                        IN PROGRESS
                      </span>
                    </div>
                  </div>
                  <div className="h-3 w-12 rounded bg-slate-200 dark:bg-base/[0.06] animate-pulse" />
                </div>

                {/* Skeleton Title Bars */}
                <div className="space-y-1.5 mb-3">
                  <div className="h-4 w-4/5 rounded-md bg-slate-300/80 dark:bg-base/[0.08] animate-pulse" />
                  <div className="h-3 w-3/5 rounded-md bg-slate-200/70 dark:bg-base/[0.05] animate-pulse" />
                </div>

                {/* Skeleton Description lines */}
                <div className="space-y-1.5 mb-3">
                  <div className="h-2.5 w-full rounded bg-slate-200/70 dark:bg-base/[0.035] animate-pulse" />
                  <div className="h-2.5 w-4/5 rounded bg-slate-200/70 dark:bg-base/[0.035] animate-pulse" />
                </div>
              </div>

              {/* Skeleton Tech Pills */}
              <div className="flex gap-1.5 mt-auto pt-1">
                <div className="h-4 w-12 rounded bg-slate-200/80 dark:bg-base/[0.05] animate-pulse" />
                <div className="h-4 w-16 rounded bg-slate-200/80 dark:bg-base/[0.05] animate-pulse" />
                <div className="h-4 w-14 rounded bg-slate-200/80 dark:bg-base/[0.05] animate-pulse" />
              </div>
            </div>

            {/* Project 03: Skeleton Loader (Concept Lab) */}
            <div className="relative flex flex-col justify-between p-4 rounded-xl sm:rounded-2xl bg-slate-50/40 dark:bg-base/[0.01] border border-slate-200/70 dark:border-base/[0.05] border-dashed overflow-hidden flex-1 group/skel">
              {/* Shimmer sweep effect */}
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-slate-200/40 dark:via-white/[0.03] to-transparent pointer-events-none" />

              <div>
                {/* Skeleton Header */}
                <div className="flex items-center justify-between mb-3 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-bold">03</span>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shrink-0" />
                      <span className="text-[8px] font-mono font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase whitespace-nowrap">
                        CONCEPT LAB
                      </span>
                    </div>
                  </div>
                  <div className="h-3 w-14 rounded bg-slate-200 dark:bg-base/[0.05] animate-pulse" />
                </div>

                {/* Skeleton Title Bar */}
                <div className="space-y-1.5 mb-3">
                  <div className="h-4 w-2/3 rounded-md bg-slate-300/70 dark:bg-base/[0.07] animate-pulse" />
                </div>

                {/* Skeleton Description line */}
                <div className="space-y-1.5 mb-3">
                  <div className="h-2.5 w-full rounded bg-slate-200/60 dark:bg-base/[0.03] animate-pulse" />
                  <div className="h-2.5 w-3/4 rounded bg-slate-200/60 dark:bg-base/[0.03] animate-pulse" />
                </div>
              </div>

              {/* Skeleton Tech Pills */}
              <div className="flex gap-1.5 mt-auto pt-1">
                <div className="h-4 w-14 rounded bg-slate-200/70 dark:bg-base/[0.04] animate-pulse" />
                <div className="h-4 w-12 rounded bg-slate-200/70 dark:bg-base/[0.04] animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BentoCard>
  );
}
