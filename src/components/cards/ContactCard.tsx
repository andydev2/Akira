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
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <BentoCard className="p-6 sm:p-8 relative group/contact h-full" id="contact" delay={520}>
      {/* Subtle accent glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover/contact:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(52,211,153,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-5">
          <span className="text-[10px] font-mono text-base/60 tracking-widest">10</span>
          <span className="w-6 h-px bg-base/10" />
          <span className="text-[10px] font-mono text-accent/40 tracking-widest uppercase">{t.contact.title}</span>
        </div>

        <h2 className="text-lg sm:text-xl font-semibold text-base/100 mb-2 tracking-tight">
          {t.contact.heading}
        </h2>

        <p className="text-sm text-base/70 mb-6 leading-relaxed">
          {t.contact.subheading}
        </p>

        <button
          onClick={handleCopy}
          className="group cursor-pointer inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-accent/10 border border-accent/20 hover:bg-accent/15 hover:border-accent/30 transition-all duration-300"
          aria-label={t.contact.copy}
        >
          <span className="text-sm font-medium text-accent/80 group-hover:text-accent transition-colors">
            {copied ? t.contact.copied : t.contact.email}
          </span>
          {copied ? (
            <svg
              className="w-3.5 h-3.5 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          ) : (
            <svg
              className="w-3.5 h-3.5 text-accent/60 group-hover:text-accent transition-colors duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
      </div>
    </BentoCard>
  );
}
