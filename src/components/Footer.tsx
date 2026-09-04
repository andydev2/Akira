"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 w-full border-t border-base/[0.06] bg-card/20 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          {/* Left — Brand & Role */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-base/[0.04] border border-base/[0.08] text-xs font-mono font-bold text-accent" aria-hidden="true">
              AD
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 tracking-tight whitespace-nowrap">{t.identity.title}</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 whitespace-nowrap">{t.identity.subtitle}</p>
            </div>
          </div>

          {/* Center — Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/akiradev78/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-accent hover:bg-base/[0.04] transition-all duration-200"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://tiktok.com/@akiradev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-accent hover:bg-base/[0.04] transition-all duration-200"
              aria-label="TikTok"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
            <a
              href="https://wa.me/+593998386973"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-accent hover:bg-base/[0.04] transition-all duration-200"
              aria-label="WhatsApp"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>

            <button
              onClick={scrollToTop}
              className="cursor-pointer ml-2 flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-base/[0.03] border border-slate-200 dark:border-base/[0.08] hover:bg-slate-200 dark:hover:bg-base/[0.08] hover:border-accent/30 text-[11px] font-mono text-slate-700 dark:text-slate-300 hover:text-accent transition-all duration-200 whitespace-nowrap"
              aria-label="Back to top"
            >
              <span>Top</span>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </button>
          </div>

          {/* Right — Copyright */}
          <div className="text-left sm:text-right">
            <p className="text-xs font-mono text-slate-600 dark:text-slate-400 mb-0.5 whitespace-nowrap">© 2026 AkiraDev</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 whitespace-nowrap">{t.footer.designer}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
