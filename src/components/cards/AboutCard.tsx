"use client";

import BentoCard from "../BentoCard";
import { useLanguage } from "../../context/LanguageContext";

export default function AboutCard() {
  const { t } = useLanguage();

  return (
    <BentoCard className="p-6 sm:p-8 flex flex-col justify-between h-full" id="about" delay={240}>
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[10px] font-mono text-base/60 tracking-widest">02</span>
          <span className="w-6 h-px bg-base/10" />
          <span className="text-[10px] font-mono text-base/70 tracking-widest uppercase">{t.about.title}</span>
        </div>

        <p className="text-sm leading-[1.7] text-base/45 max-w-[320px]">
          {t.about.description}
        </p>
      </div>

      <div className="mt-6 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-accent/30" />
        <span className="text-[10px] text-base/60 tracking-wider uppercase">{t.about.learning}</span>
      </div>
    </BentoCard>
  );
}
