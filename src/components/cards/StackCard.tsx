"use client";

import BentoCard from "../BentoCard";
import { useLanguage } from "../../context/LanguageContext";

const stack = {
  FRONTEND: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js"],
  BACKEND: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
  DATABASE: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  TOOLS: ["Git", "GitHub", "Docker", "Figma"],
};

const categoryStyles: Record<
  string,
  { label: string; badge: string; pill: string; dot: string }
> = {
  FRONTEND: {
    label: "text-emerald-600 dark:text-emerald-400",
    badge: "bg-emerald-500/10 border-emerald-500/25 text-emerald-600 dark:text-emerald-400",
    pill: "hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-700 dark:hover:text-emerald-300",
    dot: "bg-emerald-500",
  },
  BACKEND: {
    label: "text-sky-600 dark:text-sky-400",
    badge: "bg-sky-500/10 border-sky-500/25 text-sky-600 dark:text-sky-400",
    pill: "hover:border-sky-500/40 hover:bg-sky-500/10 hover:text-sky-700 dark:hover:text-sky-300",
    dot: "bg-sky-500",
  },
  DATABASE: {
    label: "text-amber-600 dark:text-amber-400",
    badge: "bg-amber-500/10 border-amber-500/25 text-amber-600 dark:text-amber-400",
    pill: "hover:border-amber-500/40 hover:bg-amber-500/10 hover:text-amber-700 dark:hover:text-amber-300",
    dot: "bg-amber-500",
  },
  TOOLS: {
    label: "text-purple-600 dark:text-purple-400",
    badge: "bg-purple-500/10 border-purple-500/25 text-purple-600 dark:text-purple-400",
    pill: "hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-purple-700 dark:hover:text-purple-300",
    dot: "bg-purple-500",
  },
};

export default function StackCard() {
  const { t } = useLanguage();

  return (
    <BentoCard className="p-6 sm:p-8 h-full flex flex-col justify-between" id="stack" delay={400}>
      <div>
        <div className="flex items-center justify-between mb-6 gap-2">
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-[10px] font-mono font-semibold text-accent tracking-widest px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 shrink-0">
              04
            </span>
            <span className="w-5 h-px bg-base/15 shrink-0" />
            <h2 className="text-[11px] font-mono text-slate-600 dark:text-slate-300 tracking-widest uppercase whitespace-nowrap">
              {t.stack.title}
            </h2>
          </div>
          <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 whitespace-nowrap shrink-0">Core Toolkit</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
          {Object.entries(stack).map(([category, techs]) => {
            const style = categoryStyles[category] || {
              label: "text-base/80",
              badge: "bg-base/5 border-base/10 text-base/80",
              pill: "hover:border-accent/40 hover:bg-accent/10 hover:text-accent",
              dot: "bg-base/40",
            };

            return (
              <div key={category} className="flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-1.5 h-1.5 rounded-full ${style.dot} shadow-sm shrink-0`} />
                  <h3 className={`text-[10px] font-mono font-bold tracking-[0.16em] uppercase whitespace-nowrap ${style.label}`}>
                    {t.stack.categories[category as keyof typeof t.stack.categories]}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className={`
                        text-[11px] font-mono px-2.5 py-1 rounded-lg
                        bg-slate-100/80 dark:bg-base/[0.025] border border-slate-200/80 dark:border-base/[0.07] text-slate-800 dark:text-base/80
                        transition-all duration-200 cursor-default whitespace-nowrap
                        ${style.pill}
                      `}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pt-4 mt-6 border-t border-base/[0.06] flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400 gap-2">
        <span className="whitespace-nowrap">Frameworks & Libraries</span>
        <span className="text-accent whitespace-nowrap shrink-0">Constantly Evolving</span>
      </div>
    </BentoCard>
  );
}
