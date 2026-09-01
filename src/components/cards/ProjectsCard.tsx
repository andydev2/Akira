"use client";

import { HmrTarget } from "next/dist/build/swc";
import BentoCard from "../BentoCard";
import { useLanguage } from "../../context/LanguageContext";

export default function ProjectsCard() {
  const { t } = useLanguage();

  const projects = [
    {
      number: "01",
      title: t.projects.mugen.title,
      description: t.projects.mugen.description,
      tech: "Next.js · MongoDB · TailwindCSS",
      year: "2026",
      href: "https://www.mugenwall.online",
      target: "_blank",
    },
    {
      number: "02",
      isSkeleton: true,
    },
    {
      number: "03",
      isSkeleton: true,
    },
  ];

  return (
    <BentoCard className="p-6 sm:p-8 h-full" id="projects" delay={200}>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[10px] font-mono text-base/60 tracking-widest">05</span>
        <span className="w-6 h-px bg-base/10" />
        <span className="text-[10px] font-mono text-base/70 tracking-widest uppercase">{t.projects.title}</span>
      </div>

      <div className="flex flex-col h-[calc(100%-3rem)]">
        {projects.map((project, i) =>
          project.isSkeleton ? (
            <div
              key={project.number}
              className="group relative flex flex-col py-5 border-t border-base/[0.05] first:border-t-0 first:pt-0 last:pb-0 flex-1 -mx-2 px-2 rounded-lg"
            >
              {/* Number + Skeleton Year */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-base/50">{project.number}</span>
                <div className="w-8 h-2.5 bg-base/[0.03] rounded-full animate-pulse" />
              </div>

              {/* Skeleton Title */}
              <div className="w-3/5 h-4 bg-base/[0.04] rounded-md animate-pulse mb-3 mt-1" />

              {/* Skeleton Description */}
              <div className="w-full h-2.5 bg-base/[0.02] rounded-md animate-pulse mb-1.5" />
              <div className="w-4/5 h-2.5 bg-base/[0.02] rounded-md animate-pulse mb-4" />

              {/* Skeleton Tech */}
              <div className="flex items-center justify-between mt-auto">
                <div className="w-1/2 h-2.5 bg-base/[0.03] rounded-full animate-pulse" />
              </div>
            </div>
          ) : (
            <a
              key={project.number}
              href={project.href}
              target={project.target}
              rel={project.target === "_blank" ? "noopener noreferrer" : undefined}
              aria-label={`View project: ${project.title}`}
              className="group relative flex flex-col py-5 border-t border-base/[0.05] first:border-t-0 first:pt-0 last:pb-0 flex-1 hover:bg-base/[0.02] -mx-2 px-2 rounded-lg transition-all duration-200"
            >
              {/* Number + Year */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-base/50">{project.number}</span>
                <span className="text-[10px] font-mono text-base/50">{project.year}</span>
              </div>

              {/* Title */}
              <h3 className="text-[15px] font-medium text-base/90 group-hover:text-base/100 transition-colors duration-200 mb-1.5">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] text-base/60 group-hover:text-base/70 transition-colors mb-2">
                {project.description}
              </p>

              {/* Tech + Arrow */}
              <div className="flex items-center justify-between mt-auto">
                <span className="text-[11px] text-base/60 group-hover:text-base/70 transition-colors">
                  {project.tech}
                </span>
                <svg
                  className="w-3.5 h-3.5 text-base/50 group-hover:text-accent/60 group-hover:translate-x-1 transition-all duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>

              {/* Decorative index */}
              {i === 0 && (
                <div className="absolute -right-1 top-1 text-[5rem] font-bold text-base/[0.05] leading-none select-none pointer-events-none" aria-hidden="true">
                  W
                </div>
              )}
            </a>
          )
        )}
      </div>
    </BentoCard>
  );
}
