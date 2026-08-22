"use client";

import { m } from "framer-motion";
import { Button } from "../ui/Button";
import { Icons } from "../ui/Icons";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-32 pb-16 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-brand-red/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-6xl w-full px-4 flex flex-col items-center text-center mt-8 md:mt-0">

        {/* Top Pill */}
        <m.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ willChange: "transform, opacity", z: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for Fullstack Projects
        </m.div>

        {/* Heading */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ willChange: "transform, opacity", z: 0 }}
          className="w-full"
        >
          <h1 className="font-extrabold tracking-tighter text-white" style={{ fontSize: "clamp(2rem, 11vw, 5.5rem)", lineHeight: 1 }}>
            CODE<br />
            <span className="bg-gradient-to-r from-brand-red to-brand-purple bg-clip-text text-transparent break-all sm:break-normal">ARCHITECTURE.</span>
          </h1>
        </m.div>

        {/* Terminal Box with Floating Icons */}
        <m.div
          id="stack"
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          style={{ willChange: "transform, opacity", z: 0 }}
          className="relative mt-16 w-full max-w-2xl scroll-mt-32"
        >
          {/* Floating Icons */}
          <m.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-5 left-0 md:-top-8 md:-left-12 p-2.5 md:p-3 bg-background border border-brand-red/30 rounded-xl shadow-lg shadow-brand-red/10 z-10"
          >
            <Icons.terminal className="text-brand-red w-5 h-5 md:w-6 md:h-6" />
          </m.div>
          <m.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -top-5 right-0 md:-top-8 md:-right-12 p-2.5 md:p-3 bg-background border border-brand-purple/30 rounded-xl shadow-lg shadow-brand-purple/10 z-10"
          >
            <Icons.database className="text-brand-purple w-5 h-5 md:w-6 md:h-6" />
          </m.div>
          <m.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-5 left-0 md:-bottom-8 md:-left-12 p-2.5 md:p-3 bg-background border border-blue-500/30 rounded-xl shadow-lg shadow-blue-500/10 z-10"
          >
            <Icons.cloud className="text-blue-400 w-5 h-5 md:w-6 md:h-6" />
          </m.div>
          <m.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-5 right-0 md:-bottom-8 md:-right-12 p-2.5 md:p-3 bg-background border border-yellow-500/30 rounded-xl shadow-lg shadow-yellow-500/10 z-10"
          >
            <Icons.code className="text-yellow-400 w-5 h-5 md:w-6 md:h-6" />
          </m.div>

          <div className="glass rounded-xl md:rounded-2xl overflow-hidden border border-white/10 p-5 md:p-8 text-left shadow-2xl relative z-0">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red to-brand-purple opacity-50" />
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="text-xs text-neutral-500 ml-2 font-mono hidden sm:block">~/akiradev</div>
            </div>
            <pre className="font-mono text-[13px] md:text-sm text-neutral-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">
              <code>
                <span className="text-brand-purple">{">"}</span> akira --stack<br /><br />
                <span className="text-brand-red">frontend:</span> React, Next.js, TypeScript<br />
                <span className="text-blue-400">backend:</span> Node.js, Python, Go<br />
                <span className="text-yellow-400">database:</span> PostgreSQL, Redis, MongoDB<br />
                <span className="text-green-400">cloud:</span> AWS, Docker, CI/CD<br /><br />
                <span className="text-brand-purple">{">"}</span> status <span className="animate-pulse">|</span>
              </code>
            </pre>
          </div>
        </m.div>

        {/* Subtext */}
        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          style={{ willChange: "transform, opacity", z: 0 }}
          className="mt-14 max-w-2xl text-base md:text-lg text-neutral-400 font-medium"
        >
          I bridge complex backend architectures with pixel-perfect, high-performance web experiences.
        </m.p>

        {/* Buttons */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          style={{ willChange: "transform, opacity", z: 0 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button 
            size="lg" 
            variant="gradient" 
            className="gap-2 rounded-full px-8" 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book a call
            <Icons.arrowRight className="w-4 h-4" aria-hidden="true" />
          </Button>
          <Button 
            size="lg" 
            variant="glass" 
            className="rounded-full px-8 gap-2" 
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Icons.layers className="w-4 h-4" aria-hidden="true" />
            View Projects
          </Button>
        </m.div>

      </div>
    </section>
  );
}
