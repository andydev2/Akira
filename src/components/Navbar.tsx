"use client";

import { useState, useEffect, useCallback } from "react";
import Menu from "./Menu";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    setScrolled(scrollTop > 15);

    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;
    setScrollProgress(Math.min(progress, 1));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);


  return (
    <>
      <nav
        aria-label="Main Navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5">
          <div
            className={`relative flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 rounded-2xl sm:rounded-3xl transition-all duration-300 ${
              scrolled
                ? "bg-card/80 backdrop-blur-2xl border border-base/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
                : "bg-card/40 backdrop-blur-md border border-base/[0.05]"
            }`}
          >
            {/* Top specular rim on navbar */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-base/20 to-transparent pointer-events-none rounded-t-2xl sm:rounded-t-3xl" aria-hidden="true" />

            {/* Left — Brand */}
            <div className="flex items-center gap-3">
              {/* Monogram with dynamic border aura */}
              <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-base/[0.04] border border-base/[0.08] text-xs font-bold tracking-wider text-base/90 select-none shadow-sm group">
                <span className="relative z-10 font-mono">AD</span>
                <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-accent border-2 border-background" />
              </div>

              {/* Name */}
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-[15px] font-semibold tracking-tight text-gradient-primary">
                  AkiraDev
                </span>
                <span className="hidden md:inline text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium">
                  Portfolio
                </span>
              </div>
            </div>

            {/* Center — Dynamic Scroll progress (desktop only) */}
            <div className="hidden md:flex items-center gap-2.5 absolute left-1/2 -translate-x-1/2" aria-hidden="true">
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">Read</span>
              <div className="w-28 h-[3px] bg-base/[0.08] rounded-full overflow-hidden relative">
                <div
                  className="h-full bg-gradient-to-r from-accent to-accent-cyan rounded-full transition-all duration-150 shadow-[0_0_8px_rgba(52,211,153,0.5)]"
                  style={{ width: `${scrollProgress * 100}%` }}
                />
              </div>
              <span className="text-[10px] font-mono text-accent">
                {Math.round(scrollProgress * 100)}%
              </span>
            </div>

            {/* Right — Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Language toggle */}
              <button
                onClick={() => setLanguage(language === "en" ? "es" : "en")}
                className="flex cursor-pointer items-center justify-center px-3 h-9 sm:h-10 rounded-xl bg-base/[0.03] border border-base/[0.08] hover:bg-base/[0.07] hover:border-accent/40 transition-all duration-200"
                aria-label={`Switch to ${language === "en" ? "Spanish" : "English"}`}
              >
                <span className="text-xs font-mono font-semibold tracking-wider text-slate-800 dark:text-slate-200 hover:text-accent">
                  {language.toUpperCase()}
                </span>
              </button>

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="flex cursor-pointer items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-base/[0.03] border border-base/[0.08] hover:bg-base/[0.07] hover:border-accent/40 transition-all duration-200 text-slate-800 dark:text-slate-200 hover:text-accent"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                  </svg>
                )}
              </button>

              {/* Menu button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex cursor-pointer flex-col items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-accent/10 border border-accent/30 hover:bg-accent/20 hover:border-accent/50 transition-all duration-200 gap-[5px]"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                <span
                  className={`block w-4 h-[2px] bg-accent transition-all duration-300 origin-center ${
                    menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
                  }`}
                />
                <span
                  className={`block w-4 h-[2px] bg-accent transition-all duration-300 origin-center ${
                    menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
