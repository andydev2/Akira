"use client";

import BentoCard from "../BentoCard";
import { useLanguage } from "../../context/LanguageContext";

export default function AboutCard() {
  const { t } = useLanguage();

  return (
    <BentoCard className="p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden" id="about" delay={240}>
      {/* Background decorative highlight */}
      <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-accent/5 rounded-full filter blur-2xl pointer-events-none" />

      <div>
        <div className="flex items-center justify-between mb-5 gap-2">
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-[10px] font-mono font-semibold text-accent tracking-widest px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 shrink-0">
              02
            </span>
            <span className="w-5 h-px bg-base/15 shrink-0" />
            <h2 className="text-[11px] font-mono text-slate-600 dark:text-slate-300 tracking-widest uppercase whitespace-nowrap">{t.about.title}</h2>
          </div>
          <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 whitespace-nowrap shrink-0">Philosophy</span>
        </div>

        <p className="text-sm sm:text-[15px] leading-[1.75] text-slate-700 dark:text-slate-300 max-w-[340px] font-normal mb-4">
          {t.about.description}
        </p>

        {/* Quick core values pill */}
        <div className="flex flex-wrap gap-2 my-2">
          {["Clean Code", "Modern UX", "Scalable Systems"].map((val) => (
            <span
              key={val}
              className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-base/[0.04] border border-slate-200 dark:border-base/[0.08] text-slate-700 dark:text-slate-300 whitespace-nowrap"
            >
              {val}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-base/[0.06] flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 shrink-0">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-[11px] font-mono font-medium text-accent tracking-wider uppercase whitespace-nowrap">
            {t.about.learning}
          </span>
        </div>
        <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 whitespace-nowrap shrink-0">2026</span>
      </div>
    </BentoCard>
  );
}
