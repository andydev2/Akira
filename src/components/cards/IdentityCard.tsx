"use client";

import Image from "next/image";
import BentoCard from "../BentoCard";
import { useLanguage } from "../../context/LanguageContext";
import akiraImg from "../../../public/akiradev.jpg";

export default function IdentityCard() {
  const { t } = useLanguage();

  const techBadges = ["Next.js", "React", "TypeScript", "Node.js", "Tailwind"];

  return (
    <BentoCard className="p-7 sm:p-9 lg:p-11 flex flex-col justify-between min-h-[340px] lg:min-h-[400px] h-full relative" delay={80}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Large faded monogram */}
        <span className="absolute -right-6 -top-10 text-[13rem] sm:text-[17rem] font-black text-base/[0.04] leading-none tracking-tighter select-none transition-transform duration-500 group-hover/card:scale-105">
          AD
        </span>
        {/* Radial ambient glow behind avatar */}
        <div className="absolute top-4 right-4 w-48 h-48 rounded-full bg-accent/10 filter blur-3xl" />
      </div>

      {/* Top / Header Section */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-6 sm:gap-4 mb-6 sm:mb-0">
        <div className="order-2 sm:order-1 flex-1">
          {/* Section Indicator */}
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <span className="text-[10px] font-mono font-semibold text-accent tracking-widest px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 shrink-0">
              01
            </span>
            <span className="w-6 h-px bg-base/15 shrink-0" />
            <span className="text-[11px] font-mono text-slate-600 dark:text-slate-300 tracking-widest uppercase whitespace-nowrap">
              Identity
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gradient-primary leading-[1.08] mb-3">
            {t.identity.title}
          </h1>

          <div className="flex items-center gap-2.5 mb-4 sm:mb-6">
            <span className="w-3.5 h-[2px] rounded-full bg-accent shrink-0" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-gradient-accent whitespace-nowrap">
              {t.identity.subtitle}
            </span>
          </div>
        </div>

        {/* Profile Picture with Dynamic Gradient Aura */}
        <div className="order-1 sm:order-2 relative self-start sm:self-auto shrink-0">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full p-[3px] bg-gradient-to-tr from-accent via-accent-cyan to-emerald-400 shadow-[0_0_35px_rgba(52,211,153,0.25)] group-hover/card:shadow-[0_0_45px_rgba(52,211,153,0.4)] transition-shadow duration-500">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-background">
              <Image 
                src={akiraImg}
                alt="AkiraDev - Full Stack Developer"
                fill
                placeholder="blur"
                className="object-cover object-top transition-transform duration-500 group-hover/card:scale-105"
                sizes="(max-width: 640px) 96px, (max-width: 1024px) 112px, 128px"
                priority
                fetchPriority="high"
              />
            </div>
          </div>

          {/* Active status indicator badge */}
          <div className="absolute -bottom-1 -right-1 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-md border border-accent/40 shadow-lg text-[10px] font-medium text-base/90">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="hidden sm:inline text-[9px] font-mono text-accent uppercase tracking-wider whitespace-nowrap">Online</span>
          </div>
        </div>
      </div>

      {/* Description & Tech focus badges */}
      <div className="relative z-10 mt-auto">
        <p className="text-sm sm:text-[15px] leading-relaxed text-slate-700 dark:text-slate-300 max-w-[380px] mb-5">
          {t.identity.description}
        </p>

        {/* Micro Tech Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-base/[0.06]">
          {techBadges.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-base/[0.04] border border-slate-200 dark:border-base/[0.08] text-slate-700 dark:text-slate-300 hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-colors duration-200 whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}
