"use client";

import { m } from "framer-motion";

const metrics = [
  { value: "2+", label: "Years of Experience", subtext: "Modern Web & Fullstack Architecture" },
  { value: "150+", label: "Commits & Deployments", subtext: "Clean code shipped to production" },
  { value: "99.9%", label: "Uptime & Reliability", subtext: "Performance-optimized applications" },
  { value: "15+", label: "Projects & Clients", subtext: "Scalable web apps delivered" },
];

export default function TrackRecord() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ willChange: "transform, opacity", z: 0 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg border border-brand-red/30 bg-brand-red/5 text-brand-red text-xs font-mono tracking-widest uppercase mb-6">
            Track Record
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Numbers that speak.</h2>
          <p className="text-neutral-400 text-lg max-w-2xl">Battle-tested across startups, scale-ups, and enterprise — here's the impact.</p>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ willChange: "transform, opacity", z: 0 }}
          className="glass rounded-3xl overflow-hidden"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className={`p-4 md:p-8 lg:p-10 text-center flex flex-col items-center justify-center border-white/10 ${index === 0 ? "border-b border-r lg:border-b-0" :
                  index === 1 ? "border-b lg:border-b-0 lg:border-r" :
                    index === 2 ? "border-r" : ""
                  }`}
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-red">
                  {metric.value}
                </div>
                <div className="font-bold text-white text-xs md:text-base lg:text-lg mb-1 md:mb-2">{metric.label}</div>
                <div className="text-neutral-400 text-[10px] md:text-xs lg:text-sm max-w-[140px] md:max-w-full mx-auto leading-tight md:leading-normal">{metric.subtext}</div>
              </div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}
