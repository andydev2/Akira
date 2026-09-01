"use client";

import BentoCard from "../BentoCard";
import { useLanguage } from "../../context/LanguageContext";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/akiradev78/",
    target: "_blank",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/+593998386973",
    target: "_blank",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    ),
  },
];

export default function SocialCard() {
  const { t } = useLanguage();

  return (
    <BentoCard className="p-6 sm:p-8 h-full" delay={480}>
      <div className="flex items-center gap-3 mb-5">
        <span className="text-[10px] font-mono text-base/20 tracking-widest">09</span>
        <span className="w-6 h-px bg-base/10" />
        <span className="text-[10px] font-mono text-base/30 tracking-widest uppercase">{t.social.title}</span>
      </div>

      <div className="flex flex-col gap-3">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith("mailto") ? undefined : "_blank"}
            rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            className="group flex items-center gap-3 text-base/40 hover:text-base/80 transition-colors duration-200"
            aria-label={social.label}
          >
            <span className="group-hover:text-accent/70 transition-colors duration-200">
              {social.icon}
            </span>
            <span className="text-xs font-medium">{social.label}</span>
          </a>
        ))}
      </div>
    </BentoCard>
  );
}
