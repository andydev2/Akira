"use client";

import BentoCard from "../BentoCard";
import { useLanguage } from "../../context/LanguageContext";

export default function JourneyCard() {
  const { t } = useLanguage();

  const milestones = [
    { number: "01", label: t.journey.steps[0].title, description: t.journey.steps[0].description, active: false },
    { number: "02", label: t.journey.steps[1].title, description: t.journey.steps[1].description, active: false },
    { number: "03", label: t.journey.steps[2].title, description: t.journey.steps[2].description, active: true },
  ];

  return (
    <BentoCard className="p-6 sm:p-8 h-full" delay={160}>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[10px] font-mono text-base/60 tracking-widest">03</span>
        <span className="w-6 h-px bg-base/10" />
        <span className="text-[10px] font-mono text-base/70 tracking-widest uppercase">{t.journey.title}</span>
      </div>

      <div className="relative flex flex-col gap-5">
        {/* Connecting line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-base/10 via-base/10 to-accent/30" aria-hidden="true" />

        {milestones.map((milestone) => (
          <div key={milestone.number} className="relative flex items-start gap-4 pl-0">
            {/* Dot */}
            <div className="relative z-10 flex-shrink-0 mt-0.5">
              <div
                className={`w-[15px] h-[15px] rounded-full border-2 flex items-center justify-center ${
                  milestone.active
                    ? "border-accent/60 bg-accent/10"
                    : "border-base/10 bg-base/[0.03]"
                }`}
              >
                {milestone.active && (
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/80" />
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 -mt-0.5">
              <div className="flex items-baseline gap-2">
                <span className="text-[10px] font-mono text-base/50">{milestone.number}</span>
                <span className={`text-sm font-medium ${milestone.active ? "text-base/100" : "text-base/80"}`}>
                  {milestone.label}
                </span>
              </div>
              <span className="text-[11px] text-base/60 mt-0.5 block">{milestone.description}</span>
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}
