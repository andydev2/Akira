"use client";

import { useEffect, useState } from "react";
import BentoCard from "../BentoCard";
import { useLanguage } from "../../context/LanguageContext";

export default function LocationCard() {
  const { t } = useLanguage();
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: "America/Guayaquil",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        });
        setTime(formatter.format(now));
      } catch {
        setTime("GMT-5");
      }
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <BentoCard className="p-6 sm:p-7 h-full flex flex-col justify-between relative overflow-hidden" delay={440}>
      {/* Top Section */}
      <div>
        <div className="flex items-center justify-between mb-4 gap-2">
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-[10px] font-mono font-semibold text-accent tracking-widest px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 shrink-0">
              08
            </span>
            <span className="w-5 h-px bg-base/15 shrink-0" />
            <h2 className="text-[11px] font-mono text-slate-600 dark:text-slate-300 tracking-widest uppercase whitespace-nowrap">
              {t.location.title}
            </h2>
          </div>
          <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 whitespace-nowrap shrink-0">GMT-5</span>
        </div>

        {/* Country & Flag */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl filter drop-shadow-md shrink-0" role="img" aria-label="Ecuador">🇪🇨</span>
          <div>
            <span className="text-base font-semibold text-slate-900 dark:text-slate-100 tracking-tight block whitespace-nowrap">
              {t.location.country}
            </span>
            <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 whitespace-nowrap">Quito / Guayaquil</span>
          </div>
        </div>

        {/* Live Clock Display */}
        <div className="px-3 py-2 rounded-xl bg-slate-50/80 dark:bg-base/[0.03] border border-slate-200/80 dark:border-base/[0.07] flex items-center justify-between font-mono gap-2">
          <span className="text-[11px] text-slate-600 dark:text-slate-400 whitespace-nowrap">{t.location.time}</span>
          <span className="text-xs font-semibold text-accent tracking-wider whitespace-nowrap shrink-0">
            {time || "12:00:00 PM"}
          </span>
        </div>
      </div>

      {/* Bottom Status with Radar Pulse */}
      <div className="pt-3 border-t border-base/[0.05] flex items-center gap-2.5">
        <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
          <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
        </span>
        <span className="text-xs font-medium text-slate-800 dark:text-slate-200 whitespace-nowrap">
          {t.location.available}
        </span>
      </div>
    </BentoCard>
  );
}
