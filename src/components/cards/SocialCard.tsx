"use client";

import BentoCard from "../BentoCard";
import { useLanguage } from "../../context/LanguageContext";

const socials = [
  {
    label: "Instagram",
    handle: "@akiradev78",
    href: "https://www.instagram.com/akiradev78/",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    handle: "@akiradev",
    href: "https://tiktok.com/@akiradev",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    handle: "Direct Chat",
    href: "https://wa.me/+593998386973",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
];

export default function SocialCard() {
  const { t } = useLanguage();

  return (
    <BentoCard className="p-6 sm:p-7 h-full flex flex-col justify-between" delay={480}>
      <div>
        <div className="flex items-center gap-3 mb-4 shrink-0">
          <span className="text-[10px] font-mono font-semibold text-accent tracking-widest px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 shrink-0">
            09
          </span>
          <span className="w-5 h-px bg-base/15 shrink-0" />
          <h2 className="text-[11px] font-mono text-slate-600 dark:text-slate-300 tracking-widest uppercase whitespace-nowrap">{t.social.title}</h2>
        </div>

        <div className="flex flex-col gap-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/item flex items-center justify-between p-2.5 rounded-xl bg-slate-50/80 dark:bg-base/[0.025] border border-slate-200/80 dark:border-base/[0.06] hover:bg-slate-100 dark:hover:bg-base/[0.06] hover:border-accent/30 transition-all duration-200"
              aria-label={social.label}
            >
              <div className="flex items-center gap-2.5 shrink-0">
                <span className="text-base/70 group-hover/item:text-accent transition-colors duration-200 shrink-0" aria-hidden="true">
                  {social.icon}
                </span>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover/item:text-base/100 leading-tight whitespace-nowrap">
                    {social.label}
                  </span>
                  <span className="text-[10px] font-mono text-slate-600 dark:text-slate-400 whitespace-nowrap">
                    {social.handle}
                  </span>
                </div>
              </div>
              <svg
                className="w-3.5 h-3.5 text-base/30 group-hover/item:text-accent group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all duration-200 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          ))}
        </div>
      </div>

      <div className="pt-2 border-t border-base/[0.05] text-[10px] font-mono text-slate-500 dark:text-slate-400 flex justify-between gap-2">
        <span className="whitespace-nowrap">Fast Response</span>
        <span className="text-accent/80 whitespace-nowrap shrink-0">Active</span>
      </div>
    </BentoCard>
  );
}
