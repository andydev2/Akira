"use client";

import BentoCard from "../BentoCard";
import { useLanguage } from "../../context/LanguageContext";

export default function CapabilitiesCard() {
  const { t } = useLanguage();

  const capabilities = [
    { label: t.about.webapps, icon: "◆" },
    { label: t.about.ecommerce, icon: "◆" },
    { label: t.about.landing, icon: "◆" },
    { label: t.about.dashboards, icon: "◆" },
    { label: t.about.api, icon: "◆" },
  ];

  return (
    <BentoCard className="p-6 sm:p-8 h-full" delay={320}>
      <div className="flex items-center gap-3 mb-5">
        <span className="text-[10px] font-mono text-base/60 tracking-widest">06</span>
        <span className="w-6 h-px bg-base/10" />
        <span className="text-[10px] font-mono text-base/70 tracking-widest uppercase">{t.about.whatIBuild}</span>
      </div>

      <ul className="space-y-2.5">
        {capabilities.map((cap) => (
          <li key={cap.label} className="flex items-center gap-2.5 group">
            <span className="text-[6px] text-accent/40 group-hover:text-accent/70 transition-colors">
              {cap.icon}
            </span>
            <span className="text-xs text-base/80 group-hover:text-base/90 transition-colors duration-200">
              {cap.label}
            </span>
          </li>
        ))}
      </ul>
    </BentoCard>
  );
}
