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
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@akiradev",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/+593998386973",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
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
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  const handleCopy = () => {
    navigator.clipboard.writeText("akiradev78@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`fixed inset-0 z-40 transition-all duration-300 ${isOpen
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
        }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/95 backdrop-blur-3xl"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu panel */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center min-h-screen transition-all duration-500 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]"
          }`}
        role="dialog"
        aria-modal="true"
        aria-label="Quick connect menu"
      >
        <div className="flex flex-col items-center gap-10 max-w-2xl text-center px-4 w-full">
          <h2 className="text-2xl sm:text-6xl font-semibold text-base/95 tracking-tight leading-[1.1]"
            style={{
              transform: isOpen ? "translateY(0)" : "translateY(20px)",
              opacity: isOpen ? 1 : 0,
              transition: "transform 0.5s ease 0.1s, opacity 0.5s ease 0.1s"
            }}
          >
            {t.menu.heading1} <br />
            <span className="text-accent">{t.menu.heading2}</span>
          </h2>

          <button
            onClick={handleCopy}
            className="group relative w-full sm:w-auto px-8 py-6 rounded-3xl bg-base/[0.02] border border-base/[0.06] hover:bg-base/[0.04] hover:border-accent/30 transition-all duration-300"
            style={{
              transform: isOpen ? "translateY(0)" : "translateY(20px)",
              opacity: isOpen ? 1 : 0,
              transition: "transform 0.5s ease 0.2s, opacity 0.5s ease 0.2s"
            }}
          >
            <div className="flex flex-col items-center gap-3">
              <span className="text-xs font-medium text-base/40 tracking-[0.2em] uppercase">
                {t.menu.emailMe}
              </span>
              <span className={`text-lg sm:text-xl font-light transition-colors duration-300 ${copied ? 'text-accent' : 'text-base/80 group-hover:text-base'}`}>
                {copied ? t.contact.copied : "akiradev78@gmail.com"}
              </span>
            </div>
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 rounded-3xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
          </button>

          <div className="flex items-center gap-6 mt-4"
            style={{
              transform: isOpen ? "translateY(0)" : "translateY(20px)",
              opacity: isOpen ? 1 : 0,
              transition: "transform 0.5s ease 0.3s, opacity 0.5s ease 0.3s"
            }}
          >
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-full bg-base/[0.02] border border-base/[0.06] hover:bg-accent/10 hover:border-accent/30 hover:text-accent text-base/50 transition-all duration-300 shadow-xl"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom info */}
        <div
          className="absolute bottom-12 left-0 right-0 flex justify-center"
          style={{
            opacity: isOpen ? 1 : 0,
            transition: "opacity 0.5s ease 0.4s",
          }}
        >
          <div className="flex items-center gap-3 text-xs text-base/20">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
            </span>
            <span>{t.location.available}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
