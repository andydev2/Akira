"use client";

import { useState } from "react";
import { Icons } from "../ui/Icons";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "akiradev78@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    { name: "Instagram", icon: Icons.instagram, url: "https://www.instagram.com/akiradev78/" },
    { name: "WhatsApp", icon: Icons.whatsapp, url: "https://wa.me/593998386973" },
    { name: "Facebook", icon: Icons.facebook, url: "https://www.facebook.com/Akirashiraishi78/?locale=es_LA" },
  ];

  return (
    <footer id="contact" className="relative pt-32 pb-8 px-4 overflow-hidden bg-black flex flex-col items-center min-h-[500px] justify-center">
      
      {/* Giant Watermark Background */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-0">
        <span className="text-[20vw] font-black leading-none tracking-tighter whitespace-nowrap text-white/[0.03]">
          AkiraDev
        </span>
      </div>

      <div className="max-w-4xl w-full mx-auto relative z-10 flex flex-col items-center text-center mt-12 mb-24">
        
        {/* Top Pill */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 mb-8">
          <span className="text-[10px] font-bold tracking-widest text-red-500 uppercase">Let's Connect</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">
          Ready to build
        </h2>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] to-[#b366ff]">
          something great?
        </h2>

        {/* Subtext */}
        <p className="text-neutral-400 text-sm md:text-base max-w-md mb-12 leading-relaxed">
          Whether it's a new product, an API overhaul, or a performance
          <br className="hidden md:block" />
          rescue — I'm here to help architect and ship it.
        </p>

        {/* Email Pill */}
        <button
          onClick={handleCopy}
          className="group cursor-pointer relative flex items-center gap-4 px-6 py-3 rounded-full bg-neutral-950 border border-white/5 hover:border-white/20 transition-all mb-8 shadow-2xl"
          aria-label="Copy email address"
        >
          <Icons.mail className="w-4 h-4 text-red-500" aria-hidden="true" />
          <span className="text-sm md:text-base font-mono text-neutral-300 group-hover:text-white transition-colors">
            {email}
          </span>
          {copied ? (
            <Icons.check className="w-4 h-4 text-green-400" aria-hidden="true" />
          ) : (
            <Icons.copy className="w-4 h-4 text-neutral-500 group-hover:text-neutral-300 transition-colors" aria-hidden="true" />
          )}

          {copied && (
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-green-500/20 text-green-400 text-xs font-medium rounded-lg border border-green-500/20 animate-in fade-in slide-in-from-bottom-2">
              Copied!
            </span>
          )}
        </button>

        {/* Socials */}
        <div className="flex gap-4">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-10 h-10 rounded-full bg-neutral-950 border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/20 hover:-translate-y-1 transition-all shadow-xl"
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between relative z-10 pt-8 border-t border-white/5 gap-4">
        <div className="text-neutral-500 text-xs font-medium">
          © {new Date().getFullYear()} AkiraDev. Built with Next.js & caffeine.
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-neutral-900 text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-all"
        >
          <Icons.arrowUp className="w-3 h-3" />
          Back to top
        </button>
      </div>
    </footer>
  );
}
