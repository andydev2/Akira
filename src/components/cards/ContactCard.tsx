"use client";

import { useState } from "react";
import BentoCard from "../BentoCard";
import { useLanguage } from "../../context/LanguageContext";

export default function ContactCard() {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  const handleCopy = () => {
    navigator.clipboard.writeText("akiradev78@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <BentoCard className="p-6 sm:p-8 relative group/contact h-full flex flex-col justify-between" id="contact" delay={520}>
      {/* Accent Radial Background Glow */}
      <div
        className="absolute -right-12 -top-12 w-44 h-44 rounded-full bg-accent/10 filter blur-3xl group-hover/contact:bg-accent/20 transition-colors duration-500 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4 gap-2">
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span className="text-[10px] font-mono font-semibold text-accent tracking-widest px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 shrink-0">
              10
            </span>
            <span className="w-5 h-px bg-base/15 shrink-0" />
            <h2 className="text-[11px] font-mono text-slate-600 dark:text-slate-300 tracking-widest uppercase whitespace-nowrap">
              {t.contact.title}
            </h2>
          </div>
          <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-medium whitespace-nowrap shrink-0">Let&apos;s Talk</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-base/100 mb-2 tracking-tight leading-snug">
          {t.contact.heading}
        </h3>

        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-6 leading-relaxed max-w-[320px]">
          {t.contact.subheading}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {/* Copy button */}
          <button
            onClick={handleCopy}
            className={`
              group/btn cursor-pointer w-full inline-flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl
              border transition-all duration-300 font-medium text-xs sm:text-sm whitespace-nowrap
              ${
                copied
                  ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-600 dark:text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.3)]"
                  : "bg-emerald-500/10 dark:bg-accent/10 border-emerald-500/25 dark:border-accent/25 text-emerald-700 dark:text-accent hover:bg-emerald-500/15 dark:hover:bg-accent/20 hover:border-emerald-500/40"
              }
            `}
            aria-label={t.contact.copy}
          >
            <span className="truncate font-mono text-xs">{copied ? t.contact.copied : t.contact.email}</span>
            {copied ? (
              <svg className="w-4 h-4 text-emerald-600 dark:text-accent animate-scale-in shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-emerald-600/80 dark:text-accent/70 group-hover/btn:text-emerald-700 dark:group-hover/btn:text-accent transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>

          {/* Direct mailto link */}
          <a
            href="mailto:akiradev78@gmail.com"
            className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-50/80 dark:bg-base/[0.03] border border-slate-200/80 dark:border-base/[0.08] hover:bg-slate-100 dark:hover:bg-base/[0.07] hover:border-accent/30 text-xs font-mono text-slate-800 dark:text-slate-200 hover:text-accent transition-all duration-200 whitespace-nowrap"
            aria-label="Send email directly"
          >
            <span className="whitespace-nowrap">Send Email Directly</span>
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>
      </div>

      <div className="pt-4 mt-6 border-t border-base/[0.06] flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400 gap-2">
        <span className="truncate">akiradev78@gmail.com</span>
        <span className="text-accent whitespace-nowrap shrink-0">Open for inquiries</span>
      </div>
    </BentoCard>
  );
}
