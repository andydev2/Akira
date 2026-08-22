"use client";

import { m } from "framer-motion";
import { Icons } from "../ui/Icons";

const techStack = [
  "Next.js", "TypeScript", "React", "Node.js", "PostgreSQL",
  "Tailwind CSS", "Framer Motion", "Docker", "AWS", "GraphQL"
];

const services = [
  {
    title: "Frontend Engineering",
    description: "Building pixel-perfect, highly responsive, and accessible user interfaces that provide exceptional user experiences.",
    icon: Icons.code,
  },
  {
    title: "Backend & Distributed Systems",
    description: "Architecting scalable and resilient backend systems, REST/GraphQL APIs, and microservices for high-traffic applications.",
    icon: Icons.database,
  },
  {
    title: "Cloud & DevOps",
    description: "Deploying and managing infrastructure on AWS, containerizing applications with Docker, and setting up CI/CD pipelines.",
    icon: Icons.cloud,
  },
  {
    title: "Performance & Optimization",
    description: "Auditing and optimizing web applications for Core Web Vitals, achieving 100/100 Lighthouse scores, and reducing load times.",
    icon: Icons.cpu,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Sticky Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              style={{ willChange: "transform, opacity", z: 0 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What I build <span className="bg-gradient-to-r from-brand-red to-brand-purple text-transparent bg-clip-text">& architect.</span>

              </h2>
              <p className="text-neutral-400 text-lg mb-8">
                I specialize in modern web technologies, building everything from interactive frontend interfaces to robust backend infrastructure.
              </p>

              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <m.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    style={{ willChange: "transform, opacity", z: 0 }}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-neutral-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all cursor-default"
                  >
                    {tech}
                  </m.span>
                ))}
              </div>
            </m.div>
          </div>

          {/* Scrolling Right Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <m.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{ willChange: "transform, opacity", z: 0 }}
                  className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-red/20 to-brand-purple/20 flex items-center justify-center mb-6 border border-white/10 group-hover:border-white/20 transition-colors">
                    <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{service.description}</p>
                </m.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
