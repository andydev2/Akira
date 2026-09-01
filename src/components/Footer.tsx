"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative z-10 w-full border-t border-base/[0.04]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          {/* Left — Brand */}
          <div>
            <p className="text-sm font-medium text-base/90 mb-1">{t.identity.title}</p>
            <p className="text-xs text-base/60">{t.identity.subtitle}</p>
          </div>

          {/* Center — Socials */}
          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/akiradev78/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base/60 hover:text-base/80 transition-colors duration-200"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="https://tiktok.com/@akiradev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base/60 hover:text-base/80 transition-colors duration-200"
              aria-label="TikTok"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
              </svg>
            </a>
            <a
              href="https://wa.me/+593998386973"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base/60 hover:text-base/80 transition-colors duration-200"
              aria-label="WhatsApp"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>
          </div>

          {/* Right — Copyright */}
          <div className="text-right">
            <p className="text-[11px] text-base/50 mb-0.5">© 2026 AkiraDev</p>
            <p className="text-[10px] text-base/40">{t.footer.designer}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
