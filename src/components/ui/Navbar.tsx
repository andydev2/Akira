"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { m, useScroll, useMotionValueEvent } from "framer-motion";
import { Icons } from "./Icons";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      (window as any).lenis?.stop();
    } else {
      document.body.style.overflow = "unset";
      (window as any).lenis?.start();
    }
    return () => {
      document.body.style.overflow = "unset";
      (window as any).lenis?.start();
    };
  }, [isMobileMenuOpen]);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <m.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-150%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <div className="glass rounded-full px-6 py-3 flex items-center justify-between w-full max-w-5xl pointer-events-auto">
          {/* Logo & Status */}
          <div className="flex items-center gap-4">
            <Image
              src="/icon.png"
              alt="AkiraDev Logo"
              width={24}
              height={24}
              className="mix-blend-screen scale-[1.3]"
              priority={true}
            />
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Open for Projects
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 ">
            {["Work", "Stack", "Services", "Reviews", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 pl-3 pr-3 pt-1 pb-1 rounded-full cursor-pointer transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-1 text-neutral-400 hover:text-white min-h-[28px] min-w-[48px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <Icons.close className="w-6 h-6" aria-hidden="true" /> : <Icons.menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </m.header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center pt-20 pb-6 px-4">
          <nav className="flex flex-col items-center gap-8 text-xl">
            {["Work", "Stack", "Services", "Reviews", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="font-medium text-neutral-300 hover:text-white transition-colors py-2 px-6 min-h-[48px]"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
