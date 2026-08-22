"use client";

import { m, AnimatePresence, useScroll, useTransform, useMotionValueEvent, MotionValue } from "framer-motion";
import { Icons } from "../ui/Icons";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Mugenwall",
    description: "High-quality wallpaper platform for desktop and PC built with Next.js, responsive layouts, and modern web optimization.",
    tags: ["Next.js", "React", "Tailwind CSS", "Modern Web"],
    link: "https://www.mugenwall.online/",
    live: true,
    color: "rgba(220, 38, 38, 0.15)", // red
    accent: "text-red-500",
    borderColor: "border-red-500/30",
    bgGradient: "from-red-500/10 via-black to-black",
  },
  {
    title: "AkiraVS",
    description: "Modern e-commerce platform for digital streaming accounts and subscriptions, featuring Next.js, interactive UI, and checkout flows.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "E-commerce"],
    link: "https://akiravs.vercel.app/",
    live: true,
    color: "rgba(168, 85, 247, 0.15)", // purple
    accent: "text-purple-500",
    borderColor: "border-purple-500/30",
    bgGradient: "from-purple-500/10 via-black to-black",
  },
  {
    title: "Project Alpha",
    description: "New platform focusing on data visualization and real-time analytics. Currently in heavy development.",
    tags: ["Next.js", "GraphQL", "Tailwind CSS"],
    link: "#",
    live: false,
    color: "rgba(59, 130, 246, 0.15)", // blue
    accent: "text-blue-500",
    borderColor: "border-blue-500/30",
    bgGradient: "from-blue-500/10 via-black to-black",
  },
  {
    title: "Project Beta",
    description: "Internal tooling for managing automated workflows and client deliverables. Scaling up infrastructure.",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "#",
    live: false,
    color: "rgba(34, 197, 94, 0.15)", // green
    accent: "text-green-500",
    borderColor: "border-green-500/30",
    bgGradient: "from-green-500/10 via-black to-black",
  },
];

// Inner component to handle individual card scroll physics
const ProjectCard = ({ 
  project, 
  index, 
  scrollYProgress 
}: { 
  project: typeof projects[0]; 
  index: number; 
  scrollYProgress: MotionValue<number>;
}) => {
  // Define entrance points based on index (0.25 chunks for 4 projects)
  const start = index === 0 ? 0 : index * 0.25 - 0.05;
  const end = index === 0 ? 0.15 : index * 0.25 + 0.15;

  const scale = useTransform(scrollYProgress, [start, end], index === 0 ? [1, 1] : [0.75, 1]);
  const y = useTransform(scrollYProgress, [start, end], index === 0 ? [0, 0] : [120, 0]);
  const opacity = useTransform(scrollYProgress, [start, end], index === 0 ? [1, 1] : [0, 1]);

  return (
    <m.div
      style={{ scale, y, opacity, zIndex: index, z: 0, willChange: "transform, opacity" }}
      className={cn(
        "absolute inset-0 h-[260px] md:h-[500px] w-full rounded-2xl md:rounded-3xl border glass shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden",
        project.borderColor
      )}
    >
      {/* Browser Chrome */}
      <div className="absolute top-0 w-full h-10 md:h-12 bg-black/60 border-b border-white/10 backdrop-blur-xl flex items-center px-4 z-20">
        <div className="flex gap-1.5 md:gap-2">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="mx-auto flex items-center gap-2 px-2 py-1 md:px-4 md:py-1.5 rounded-md bg-white/5 border border-white/5 text-[10px] md:text-xs text-neutral-500 font-mono w-1/2 justify-center">
          <Icons.globe className="w-3 h-3" />
          {project.live ? project.link.replace('https://', '') : 'localhost:3000'}
        </div>
      </div>

      {/* Mockup Content Skeleton */}
      <div className="absolute inset-0 pt-10 md:pt-12 bg-neutral-950 p-4 md:p-8 z-10 overflow-hidden">
        {project.live ? (
          <div className="space-y-3 md:space-y-4">
            <div className={cn("h-6 md:h-8 rounded-lg w-3/4 opacity-20", project.bgGradient.replace('from-', 'bg-').split(' ')[0])} />
            <div className="h-4 bg-white/5 rounded-md w-full" />
            <div className="h-4 bg-white/5 rounded-md w-5/6" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-6 md:mt-8 pt-2">
              <div className={cn("h-24 md:h-32 rounded-xl opacity-10", project.bgGradient.replace('from-', 'bg-').split(' ')[0])} />
              <div className="h-24 md:h-32 bg-white/5 rounded-xl" />
              <div className="h-24 md:h-32 bg-white/5 rounded-xl hidden md:block" />
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center space-y-4 opacity-30">
            <Icons.code className="w-12 h-12 md:w-16 md:h-16 text-neutral-600" />
            <div className="h-3 bg-neutral-800 rounded w-1/2" />
            <div className="h-3 bg-neutral-800 rounded w-1/3" />
          </div>
        )}
      </div>

      {/* Dynamic Glow Overlay */}
      <div 
        className="absolute inset-0 z-30 pointer-events-none mix-blend-overlay opacity-30"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${project.color}, transparent 60%)`
        }}
      />
    </m.div>
  );
};

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) setActiveIndex(0);
    else if (latest < 0.5) setActiveIndex(1);
    else if (latest < 0.75) setActiveIndex(2);
    else setActiveIndex(3);
  });

  const activeProject = projects[activeIndex];

  return (
    <section ref={containerRef} id="work" className="relative h-[400vh] bg-black">
      
      {/* Sticky Viewport Lock */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* Dynamic Background Morph */}
        <AnimatePresence mode="wait">
          <m.div
            key={`bg-${activeIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ z: 0, willChange: "opacity" }}
            className={cn("absolute inset-0 bg-gradient-to-b opacity-50 z-0", activeProject.bgGradient)}
          />
        </AnimatePresence>

        {/* Fixed Title at the top */}
        <div className="absolute top-6 md:top-24 left-0 w-full text-center z-20 px-4">
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-1 md:mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-neutral-600">Showcase.</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-lg max-w-2xl mx-auto hidden sm:block">
            Scroll down to explore the projects in detail.
          </p>
        </div>

        {/* Content Container (2 Columns) */}
        <div className="w-full max-w-6xl mx-auto px-4 z-10 flex items-center justify-center mt-12 md:mt-12 h-full">
          
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Left Column (Pinned Info) */}
            <div className="md:col-span-5 flex flex-col justify-center h-[280px] md:h-[400px] order-2 md:order-1 relative">
              <AnimatePresence mode="wait">
                <m.div
                  key={`info-${activeIndex}`}
                  initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{ z: 0, willChange: "transform, opacity, filter" }}
                  className="flex flex-col absolute inset-0 pt-0 md:pt-0"
                >
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                    <span className={cn("text-[10px] font-bold tracking-widest uppercase px-2 md:px-3 py-1 rounded-full border glass", activeProject.accent, activeProject.borderColor)}>
                      0{activeIndex + 1} // 04
                    </span>
                    {activeProject.live ? (
                      <div className="flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-[10px] text-green-400 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Live
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-[10px] text-yellow-400 font-medium">
                        🚧 Upcoming
                      </div>
                    )}
                  </div>

                  <h3 className={cn("text-2xl md:text-5xl font-black mb-1 md:mb-4 tracking-tight drop-shadow-lg", activeProject.accent)}>
                    {activeProject.title}
                  </h3>
                  
                  <p className="text-neutral-300 text-xs md:text-base leading-relaxed mb-3 md:mb-8 line-clamp-3 md:line-clamp-none">
                    {activeProject.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-8">
                    {activeProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-md text-xs font-medium bg-white/5 text-neutral-300 border border-white/10 backdrop-blur-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div>
                    {activeProject.live ? (
                      <a
                        href={activeProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn("inline-flex items-center gap-1.5 md:gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full font-bold text-xs md:text-sm bg-white/5 hover:bg-white/10 border border-white/10 transition-colors shadow-xl", activeProject.accent)}
                      >
                        Launch Project
                        <Icons.arrowRight className="w-3 h-3 md:w-4 md:h-4" />
                      </a>
                    ) : (
                      <div className="inline-flex items-center gap-1.5 md:gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full font-bold text-xs md:text-sm bg-neutral-900 border border-neutral-800 text-neutral-600 cursor-not-allowed">
                        <Icons.code className="w-3 h-3 md:w-4 md:h-4" />
                        In Development
                      </div>
                    )}
                  </div>
                </m.div>
              </AnimatePresence>
            </div>

            {/* Right Column (Stacking Card Deck) */}
            <div className="md:col-span-7 relative h-[260px] md:h-[500px] w-full order-1 md:order-2 mt-4 md:mt-0">
              {projects.map((project, i) => (
                <ProjectCard 
                  key={project.title} 
                  project={project} 
                  index={i} 
                  scrollYProgress={scrollYProgress} 
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
