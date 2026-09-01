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
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    setScrolled(scrollTop > 20);

    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;
    setScrollProgress(Math.min(progress, 1));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-3"
          }`}
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5">
          <div
            className={`relative flex items-center justify-between h-14 px-4 sm:px-5 rounded-2xl transition-all duration-300 ${scrolled
              ? "bg-primary/80 backdrop-blur-xl border border-base/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
              : "bg-transparent"
              }`}
          >
            {/* Left — Brand */}
            <div className="flex items-center gap-3">
              {/* Monogram */}
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-base/[0.05] border border-base/[0.08] text-xs font-semibold tracking-wider text-base/80 select-none">
                AD
              </div>

              {/* Name */}
              <div className="hidden sm:flex items-center">
                <span className="text-sm font-medium text-base/70 tracking-wide">
                  AkiraDev
                </span>
              </div>
              <div className="sm:hidden flex items-center">
                <span className="text-sm font-medium text-base/70 tracking-wide">
                  AkiraDev
                </span>
              </div>
            </div>

            {/* Center — Scroll progress (desktop only) */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-24 h-[2px] bg-base/[0.06] rounded-full overflow-hidden">
              <div
                className="h-full bg-accent/60 rounded-full transition-all duration-150"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>

            {/* Right — Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Language toggle */}
              <button
                onClick={() => setLanguage(language === "en" ? "es" : "en")}
                className="flex cursor-pointer items-center justify-center w-10 h-10 rounded-xl bg-base/[0.04] border border-base/[0.08] hover:bg-base/[0.07] hover:border-base/[0.14] transition-all duration-200"
                aria-label="Toggle language"
              >
                <span className="text-xs font-semibold tracking-wider text-base/70">
                  {language.toUpperCase()}
                </span>
              </button>

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="flex cursor-pointer items-center justify-center w-10 h-10 rounded-xl bg-base/[0.04] border border-base/[0.08] hover:bg-base/[0.07] hover:border-base/[0.14] transition-all duration-200"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <svg className="w-4 h-4 text-base/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-base/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                  </svg>
                )}
              </button>

              {/* Menu button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex cursor-pointer flex-col items-center justify-center w-10 h-10 rounded-xl bg-base/[0.04] border border-base/[0.08] hover:bg-base/[0.07] hover:border-base/[0.14] transition-all duration-200 gap-[5px]"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                <span
                  className={`block w-4 h-[1.5px] bg-base/60 transition-all duration-300 origin-center ${menuOpen
                    ? "rotate-45 translate-y-[3.25px]"
                    : ""
                    }`}
                />
                <span
                  className={`block w-4 h-[1.5px] bg-base/60 transition-all duration-300 origin-center ${menuOpen
                    ? "-rotate-45 -translate-y-[3.25px]"
                    : ""
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
