"use client";

import BentoCard from "../BentoCard";
import { useLanguage } from "../../context/LanguageContext";

export default function JourneyCard() {
  const { t } = useLanguage();

  const milestones = [
    { number: "01", label: t.journey.steps[0].title, description: t.journey.steps[0].description, status: "Foundation", active: false },
    { number: "02", label: t.journey.steps[1].title, description: t.journey.steps[1].description, status: "Craft", active: false },
    { number: "03", label: t.journey.steps[2].title, description: t.journey.steps[2].description, status: "Present", active: true },
  ];

  return (
    <BentoCard className="p-6 sm:p-8 h-full flex flex-col justify-between relative" delay={160}>
      <div>
        <div className="flex items-center justify-between mb-6 gap-2">
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-[10px] font-mono font-semibold text-accent tracking-widest px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 shrink-0">
              03
            </span>
            <span className="w-5 h-px bg-base/15 shrink-0" />
            <h2 className="text-[11px] font-mono text-slate-600 dark:text-slate-300 tracking-widest uppercase whitespace-nowrap">
              {t.journey.title}
            </h2>
          </div>
          <span className="text-[10px] font-mono text-accent font-medium whitespace-nowrap shrink-0">Evolution</span>
        </div>

        <div className="relative flex flex-col gap-6 my-2">
          {/* Glowing Connecting Line */}
          <div
            className="absolute left-[9px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-accent/30 via-accent/60 to-accent rounded-full shadow-[0_0_8px_rgba(52,211,153,0.3)]"
            aria-hidden="true"
          />

          {milestones.map((milestone) => (
            <div
              key={milestone.number}
              className="group/step relative flex items-start gap-4 p-2.5 -mx-2.5 rounded-xl hover:bg-base/[0.03] transition-colors duration-200"
            >
              {/* Dot Node with Glow */}
              <div className="relative z-10 flex-shrink-0 mt-0.5">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-transform duration-300 group-hover/step:scale-110 ${
                    milestone.active
                      ? "border-accent bg-accent/20 shadow-[0_0_15px_rgba(52,211,153,0.5)]"
                      : "border-base/20 bg-background/80 group-hover/step:border-accent/50"
                  }`}
                >
                  {milestone.active ? (
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  ) : (
                    <div className="w-1.5 h-1.5 rounded-full bg-base/40 group-hover/step:bg-accent/80 transition-colors" />
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 -mt-0.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[10px] font-mono font-medium text-accent/70 shrink-0">{milestone.number}</span>
                    <span
                      className={`text-sm font-semibold tracking-tight whitespace-nowrap ${
                        milestone.active ? "text-gradient-accent" : "text-base/85 group-hover/step:text-base"
                      }`}
                    >
                      {milestone.label}
                    </span>
                  </div>
                  <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-slate-100 dark:bg-base/[0.04] text-slate-700 dark:text-slate-400 whitespace-nowrap shrink-0">
                    {milestone.status}
                  </span>
                </div>
                <span className="text-xs text-slate-600 dark:text-slate-300 mt-1 block leading-normal">
                  {milestone.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-base/[0.06] flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono gap-2">
        <span className="whitespace-nowrap">Continuous Learning</span>
        <span className="text-accent whitespace-nowrap shrink-0">2026</span>
      </div>
    </BentoCard>
  );
}
