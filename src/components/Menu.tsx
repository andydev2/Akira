"use client";

import { useEffect, useCallback, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/akiradev78/",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@akiradev",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/+593998386973",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
];

export default function Menu({ isOpen, onClose }: MenuProps) {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalBodyOverflow = document.body.style.overflow;
      const originalTouchAction = document.documentElement.style.touchAction;

      // Lock both html and body
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.documentElement.style.touchAction = "none";

      // Prevent window touch scrolling while menu is open
      const handleTouchMove = (e: TouchEvent) => {
        const target = e.target as HTMLElement | null;
        if (!target?.closest(".menu-scrollable")) {
          if (e.cancelable) e.preventDefault();
        }
      };

      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.touchAction = originalTouchAction;
        window.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, handleKeyDown]);

  const handleCopy = () => {
    navigator.clipboard.writeText("akiradev78@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { label: t.projects.title, href: "#projects" },
    { label: t.about.title, href: "#about" },
    { label: t.stack.title, href: "#stack" },
    { label: t.contact.title, href: "#contact" },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 overscroll-none touch-none ${
        isOpen ? "opacity-100 pointer-events-auto visible" : "opacity-0 pointer-events-none invisible"
      }`}
    >
      {/* Deep Glassmorphic Backdrop */}
      <div
        className="absolute inset-0 bg-background/90 backdrop-blur-3xl"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Top Close Button & Esc Hint */}
      <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-20 flex items-center gap-3">
        <span className="hidden sm:inline text-[11px] font-mono text-slate-500 dark:text-slate-400 whitespace-nowrap">Press ESC</span>
        <button
          onClick={onClose}
          className="cursor-pointer w-10 h-10 rounded-full bg-base/[0.05] border border-base/[0.1] hover:bg-base/[0.1] hover:border-accent/40 flex items-center justify-center text-slate-800 dark:text-slate-200 hover:text-accent transition-all duration-200"
          aria-label="Close menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Menu panel */}
      <div
        className={`menu-scrollable relative z-10 flex flex-col items-center justify-center min-h-[100dvh] max-h-[100dvh] overflow-y-auto px-4 py-16 sm:py-20 transition-all duration-500 overscroll-contain ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="menu-title"
      >
        <div className="flex flex-col items-center gap-6 sm:gap-8 max-w-2xl text-center w-full my-auto">
          {/* Section Navigation anchors */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-base/[0.03] border border-base/[0.08] hover:bg-accent/10 hover:border-accent/30 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-accent transition-all duration-200 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          <h2 id="menu-title" className="text-3xl sm:text-6xl font-bold tracking-tight leading-[1.1] text-gradient-primary">
            {t.menu.heading1} <br />
            <span className="text-gradient-accent">{t.menu.heading2}</span>
          </h2>

          <button
            onClick={handleCopy}
            className="cursor-pointer group relative w-full sm:w-auto px-8 py-5 rounded-2xl bg-base/[0.03] border border-base/[0.08] hover:bg-base/[0.06] hover:border-accent/40 hover:shadow-[0_0_30px_rgba(52,211,153,0.15)] transition-all duration-300"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-mono font-medium text-accent tracking-[0.2em] uppercase whitespace-nowrap">
                {t.menu.emailMe}
              </span>
              <span className={`text-base sm:text-xl font-mono transition-colors duration-300 whitespace-nowrap ${copied ? "text-accent font-semibold" : "text-slate-800 dark:text-slate-100"}`}>
                {copied ? t.contact.copied : "akiradev78@gmail.com"}
              </span>
            </div>
          </button>

          <div className="flex items-center gap-4 mt-1">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 sm:p-4 rounded-2xl bg-base/[0.03] border border-base/[0.08] hover:bg-accent/10 hover:border-accent/40 hover:text-accent text-slate-800 dark:text-slate-200 transition-all duration-300 shadow-md"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom info */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 whitespace-nowrap">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="whitespace-nowrap">{t.location.available}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
