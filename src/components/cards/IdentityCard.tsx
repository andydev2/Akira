"use client";

import Image from "next/image";
import BentoCard from "../BentoCard";
import { useLanguage } from "../../context/LanguageContext";
import akiraImg from "../../../public/akiradev.jpg";

export default function IdentityCard() {
  const { t } = useLanguage();

  return (
    <BentoCard className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between min-h-[320px] lg:min-h-[380px] h-full" delay={80}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        {/* Large faded monogram */}
        <span className="absolute -right-4 -top-6 text-[12rem] sm:text-[16rem] font-bold text-base/[0.015] leading-none tracking-tighter select-none">
          AD
        </span>
        {/* Subtle grid lines */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(color-mix(in oklab, var(--color-base) 30%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, var(--color-base) 30%, transparent) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-8 sm:gap-4 mb-4 sm:mb-0">
        <div className="order-2 sm:order-1">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <span className="text-[10px] font-mono text-base/20 tracking-widest">01</span>
            <span className="w-8 h-px bg-base/10" />
            <span className="text-[10px] font-mono text-accent/50 tracking-widest uppercase">Identity</span>
          </div>

          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-base/95 leading-[1.1] mb-3">
            {t.identity.title}
          </h1>

          <div className="flex items-center gap-2 mb-2 sm:mb-6">
            <span className="w-3 h-px bg-accent/60" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent/70">
              {t.identity.subtitle}
            </span>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="order-1 sm:order-2 relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 shrink-0 rounded-full overflow-hidden border border-base/10 shadow-[0_0_40px_rgba(52,211,153,0.15)] ring-4 ring-base/[0.02]">
          <Image 
            src={akiraImg}
            alt="AkiraDev - Full Stack Developer"
            fill
            placeholder="blur"
            className="object-cover object-top"
            sizes="(max-width: 640px) 96px, (max-width: 1024px) 112px, 128px"
            priority
          />
        </div>
      </div>

      <p className="relative z-10 text-sm sm:text-[15px] leading-relaxed text-base/40 max-w-[340px]">
        {t.identity.description}
      </p>
    </BentoCard>
  );
}
