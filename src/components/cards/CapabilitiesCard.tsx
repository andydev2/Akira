"use client";

import BentoCard from "../BentoCard";
import { useLanguage } from "../../context/LanguageContext";

export default function CapabilitiesCard() {
  const { t } = useLanguage();

  const capabilities = [
    {
      label: t.about.webapps,
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
      ),
    },
    {
      label: t.about.ecommerce,
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
      ),
    },
    {
      label: t.about.landing,
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        </svg>
      ),
    },
    {
      label: t.about.dashboards,
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="7" height="9" x="3" y="3" rx="1" />
          <rect width="7" height="5" x="14" y="3" rx="1" />
          <rect width="7" height="9" x="14" y="12" rx="1" />
          <rect width="7" height="5" x="3" y="16" rx="1" />
        </svg>
      ),
    },
    {
      label: t.about.api,
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 16 4-4-4-4" />
          <path d="m6 8-4 4 4 4" />
          <path d="m14.5 4-5 16" />
        </svg>
      ),
    },
  ];

  return (
    <BentoCard className="p-5 sm:p-7 h-full flex flex-col justify-between" delay={320}>
      <div>
        <div className="flex items-center justify-between mb-4 gap-2">
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span className="text-[10px] font-mono font-semibold text-accent tracking-widest px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 shrink-0">
              06
            </span>
            <span className="w-4 sm:w-5 h-px bg-base/15 shrink-0" />
            <h2 className="text-[11px] font-mono text-slate-600 dark:text-slate-300 tracking-widest uppercase whitespace-nowrap">
              {t.about.whatIBuild}
            </h2>
          </div>
          <span className="text-[10px] font-mono text-accent font-medium whitespace-nowrap shrink-0">Solutions</span>
        </div>

        <ul className="space-y-2">
          {capabilities.map((cap) => (
            <li
              key={cap.label}
              className="flex items-center gap-3 px-3 py-2 rounded-xl bg-slate-50/80 dark:bg-base/[0.02] border border-slate-200/80 dark:border-base/[0.05] hover:bg-base/[0.05] hover:border-accent/30 group transition-all duration-200"
            >
              <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-accent/10 text-accent group-hover:scale-110 transition-transform duration-200 shrink-0" aria-hidden="true">
                {cap.icon}
              </div>
              <span className="text-xs font-medium text-slate-800 dark:text-slate-200 group-hover:text-base/100 transition-colors whitespace-nowrap">
                {cap.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-3 border-t border-base/[0.05] flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400 whitespace-nowrap gap-2">
        <span className="whitespace-nowrap">Production Ready</span>
        <span className="text-accent/80 whitespace-nowrap">100% Custom</span>
      </div>
    </BentoCard>
  );
}
