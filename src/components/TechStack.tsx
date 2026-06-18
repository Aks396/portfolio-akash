"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const categories = [
  {
    label: "Languages",
    color: "#06b6d4",
    skills: ["Java 17+", "Python 3.x", "TypeScript", "SQL", "Bash"],
  },
  {
    label: "Frameworks",
    color: "#3b82f6",
    skills: ["Spring Boot", "Spring WebFlux", "FastAPI", "React.js", "Next.js", "JUnit / Mockito"],
  },
  {
    label: "Infrastructure",
    color: "#8b5cf6",
    skills: ["Apache Kafka", "Redis", "Docker", "Kubernetes", "AWS", "Jenkins", "GitHub Actions", "PostgreSQL", "MySQL"],
  },
  {
    label: "AI & Integrations",
    color: "#10b981",
    skills: ["Google Gemini", "OpenAI GPT-4", "Claude", "Llama", "Tesseract OCR", "AI Diagnostics & Parsing", "Spring Security", "OAuth2 / JWT"],
  },
];

export const TechStack = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="relative border-t" style={{ borderColor: "rgba(255,255,255,0.04)", background: "#010208" }}>
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      <div className="container-tight section-padding">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="mb-14 text-center">
          <span className="mono-label">Technology Stack</span>
          <h2 className="text-3xl md:text-4xl font-black tracking-[-0.03em] text-white"
            style={{ fontFamily: "var(--font-geist), sans-serif" }}>
            Engineering <span className="gradient-text-cyan">Arsenal</span>
          </h2>
          <p className="mt-3 text-sm font-mono text-slate-600 max-w-md mx-auto">
            Production-grade tools I use daily to build and operate distributed systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((cat, ci) => (
            <motion.div key={cat.label}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
              className="p-6 rounded-2xl card-hover relative overflow-hidden"
              style={{ background: "#060c1a", border: "1px solid rgba(255,255,255,0.06)" }}>
              {/* Colored top strip */}
              <div className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(90deg, transparent, ${cat.color}80, transparent)` }} />
              {/* Corner glow */}
              <div className="absolute top-0 left-0 w-24 h-24 rounded-br-full opacity-5"
                style={{ background: cat.color }} />

              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full" style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}` }} />
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold" style={{ color: cat.color }}>
                  {cat.label}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span key={skill}
                    initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: ci * 0.1 + si * 0.04 }}
                    whileHover={{ scale: 1.06, y: -2 }}
                    className="px-3 py-1.5 rounded-lg text-[11px] font-mono font-medium cursor-default transition-all"
                    style={{
                      background: `${cat.color}08`,
                      border: `1px solid ${cat.color}20`,
                      color: "#94a3b8",
                    }}>
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency bars */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: "Java / Spring Boot", pct: 90, color: "#06b6d4" },
            { name: "Apache Kafka", pct: 82, color: "#3b82f6" },
            { name: "Python / FastAPI", pct: 78, color: "#10b981" },
            { name: "AWS / Cloud Infra", pct: 80, color: "#8b5cf6" },
          ].map((item) => (
            <div key={item.name} className="space-y-2">
              <div className="flex justify-between text-[11px] font-mono text-slate-500">
                <span>{item.name}</span>
                <span style={{ color: item.color }}>{item.pct}%</span>
              </div>
              <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
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
