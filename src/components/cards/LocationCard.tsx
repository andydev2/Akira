"use client";

import BentoCard from "../BentoCard";
import { useLanguage } from "../../context/LanguageContext";

export default function LocationCard() {
  const { t } = useLanguage();

  return (
    <BentoCard className="p-6 sm:p-8 h-full" delay={440}>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[10px] font-mono text-base/20 tracking-widest">08</span>
        <span className="w-6 h-px bg-base/10" />
        <span className="text-[10px] font-mono text-base/30 tracking-widest uppercase">{t.location.title}</span>
      </div>

      <div className="flex items-center gap-2.5 mb-4">
        <span className="text-lg">🇪🇨</span>
        <span className="text-sm font-medium text-base/60">{t.location.country}</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
        </span>
        <span className="text-[11px] text-base/35">{t.location.available}</span>
      </div>
    </BentoCard>
  );
}
