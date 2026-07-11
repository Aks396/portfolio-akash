"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const categories = [
  {
    label: "Languages",
    color: "#ffffff",
    skills: ["Java 17+", "Python 3.x", "TypeScript", "SQL", "Bash"],
  },
  {
    label: "Frameworks",
    color: "#2997ff",
    skills: ["Spring Boot", "Spring WebFlux", "FastAPI", "React.js", "Next.js", "JUnit / Mockito"],
  },
  {
    label: "Infrastructure",
    color: "#bf5af2",
    skills: ["Apache Kafka", "Redis", "Docker", "Kubernetes", "AWS", "Jenkins", "GitHub Actions", "PostgreSQL", "MySQL"],
  },
  {
    label: "AI & Integrations",
    color: "#30d158",
    skills: ["Google Gemini", "OpenAI GPT-4", "Claude", "Llama", "Tesseract OCR", "AI Diagnostics & Parsing", "Spring Security", "OAuth2 / JWT"],
  },
];

export const TechStack = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="relative border-t border-white/5" style={{ background: "#050505" }}>
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

      <div className="container-tight section-padding">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="mb-14 text-center">
          <span className="mono-label">Technology Stack</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.03em] text-white mt-2"
            style={{ fontFamily: "var(--font-geist), sans-serif" }}>
            Engineering <span className="text-slate-500">Arsenal</span>
          </h2>
          <p className="mt-3 text-xs font-mono text-slate-500 max-w-sm mx-auto">
            Production-grade systems, tools, and platforms I operate and integrate.
          </p>
        </motion.div>

        {/* Constellation Grid of Glass Chips */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {categories.map((cat, ci) => (
            <motion.div key={cat.label}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.08 }}
              className="p-6 rounded-3xl glass-card relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[1.5px]"
                style={{ background: `linear-gradient(90deg, transparent, ${cat.color}25, transparent)` }} />

              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}` }} />
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold" style={{ color: cat.color }}>
                  {cat.label}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span key={skill}
                    initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: ci * 0.08 + si * 0.03 }}
                    whileHover={{ scale: 1.05, y: -1, backgroundColor: "rgba(255, 255, 255, 0.08)", borderColor: "rgba(255,255,255,0.25)" }}
                    className="px-3.5 py-1.5 rounded-full text-[10px] font-mono text-slate-400 border border-white/5 bg-white/2 cursor-default transition-colors">
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Progress Visualizations */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: "Java / Spring Boot", pct: 90, color: "#ffffff" },
            { name: "Apache Kafka", pct: 82, color: "#2997ff" },
            { name: "Python / FastAPI", pct: 78, color: "#30d158" },
            { name: "AWS / Cloud Infra", pct: 80, color: "#bf5af2" },
          ].map((item) => (
            <div key={item.name} className="space-y-2 p-4 rounded-2xl border border-white/5 bg-white/2">
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>{item.name}</span>
                <span style={{ color: item.color }}>{item.pct}%</span>
              </div>
              <div className="h-1 rounded-full overflow-hidden bg-white/5">
                <motion.div className="h-full rounded-full" style={{ background: item.color }}
                  initial={{ width: 0 }} animate={inView ? { width: `${item.pct}%` } : {}}
                  transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
