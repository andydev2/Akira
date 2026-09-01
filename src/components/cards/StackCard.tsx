"use client";

import BentoCard from "../BentoCard";
import { useLanguage } from "../../context/LanguageContext";

const stack = {
  FRONTEND: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js"],
  BACKEND: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
  DATABASE: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  TOOLS: ["Git", "GitHub", "Docker", "Figma"],
};

const categoryColors: Record<string, string> = {
  FRONTEND: "text-accent/60",
  BACKEND: "text-blue-400/50",
  DATABASE: "text-amber-400/50",
  TOOLS: "text-purple-400/50",
};

export default function StackCard() {
  const { t } = useLanguage();

  return (
    <BentoCard className="p-6 sm:p-8 h-full" id="stack" delay={400}>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[10px] font-mono text-base/20 tracking-widest">04</span>
        <span className="w-6 h-px bg-base/10" />
        <span className="text-[10px] font-mono text-base/30 tracking-widest uppercase">{t.stack.title}</span>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-5">
        {Object.entries(stack).map(([category, techs]) => (
          <div key={category}>
            <h3
              className={`text-[10px] font-semibold tracking-[0.15em] uppercase mb-3 ${
                categoryColors[category] || "text-base/30"
              }`}
            >
              {t.stack.categories[category as keyof typeof t.stack.categories]}
            </h3>
            <ul className="space-y-1.5">
              {techs.map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-base/10 flex-shrink-0" />
                  <span className="text-xs text-base/40 hover:text-base/60 transition-colors duration-200">
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}
