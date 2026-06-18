"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Activity } from "lucide-react";

const achievements = [
  "Architected scalable microservices using Java 21 and Spring Boot, improving service modularity and reducing cross-service dependencies by 40%.",
  "Engineered high-throughput RESTful APIs, caching schemas (Redis), and MySQL databases for low-latency redirection services (tinyurl-ai-platform).",
  "Designed and developed CURA-Autism-AI, a clinical diagnostic screening platform, and ATS-Checker, a resume intelligence feedback gateway using Gemini APIs.",
  "Optimized backend performance by 45% through asynchronous event pipelines (Apache Kafka), query optimization, and memory cache tuning.",
  "Developed secure authentication workflows using JWT and Spring Security for enterprise-grade applications and API endpoints.",
  "Increased automated test coverage from below 50% to 77% using JUnit, Mockito, and TestNG, reducing production defects by 20%.",
  "Collaborated with DevOps to implement CI/CD pipelines using Jenkins, Docker, and GitHub Actions, reducing deployment failures by 30%.",
];

const telemetryRows = [
  { label: "SERVICE SLA", value: "99.99%", color: "#10b981", sub: "UPTIME" },
  { label: "AVG LATENCY", value: "24 ms", color: "#06b6d4", sub: "P50" },
  { label: "THROUGHPUT", value: "12,420 rps", color: "#8b5cf6", sub: "PEAK" },
  { label: "TEST COVERAGE", value: "77%", color: "#f59e0b", sub: "UNIT/INT" },
];

export const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [clock, setClock] = useState("");

  useEffect(() => {
    const update = () => setClock(new Date().toLocaleTimeString("en-US", { hour12: false }));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="experience" ref={ref} className="relative border-t"
      style={{ borderColor: "rgba(255,255,255,0.04)", background: "#030810" }}>
      <div className="absolute inset-0 grid-pattern-sm opacity-40 pointer-events-none" />

      <div className="container-tight section-padding">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="mb-14">
          <span className="mono-label">Work History</span>
          <h2 className="text-3xl md:text-4xl font-black tracking-[-0.03em] text-white"
            style={{ fontFamily: "var(--font-geist), sans-serif" }}>
            Professional <span className="gradient-text-cyan">Experience</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* Main role card */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-8 rounded-2xl overflow-hidden"
            style={{ background: "#060c1a", border: "1px solid rgba(255,255,255,0.06)" }}>

            {/* Card header */}
            <div className="px-7 py-5 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] px-2 py-0.5 rounded"
                    style={{ background: "rgba(6,182,212,0.08)", border: "1px solid rgba(6,182,212,0.15)", color: "#06b6d4" }}>
                    JAN 2023 — PRESENT
                  </span>
                  <h3 className="text-xl font-black tracking-[-0.02em] text-white mt-3"
                    style={{ fontFamily: "var(--font-geist), sans-serif" }}>
                    Senior Software Engineer
                    <span className="text-base font-semibold text-slate-500 ml-2">— Full Stack &amp; Backend Systems</span>
                  </h3>
                  <p className="text-sm font-mono mt-0.5" style={{ color: "#06b6d4" }}>Tata Elxsi Ltd.</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-mono text-emerald-400 uppercase">Current</span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="px-7 py-5 space-y-3">
              {achievements.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.07 }}
                  className="flex items-start gap-3 text-[12px] font-mono text-slate-400 leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#06b6d4" }} />
                  {item}
                </motion.div>
              ))}
            </div>

            {/* Tags */}
            <div className="px-7 py-4 border-t flex flex-wrap gap-1.5" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
              {["Java", "Spring Boot", "Kafka", "Redis", "AWS", "Docker", "Jenkins", "JUnit", "Spring Security"].map((t) => (
                <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", color: "#475569" }}>
                  #{t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Telemetry sidebar */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 rounded-2xl overflow-hidden lg:sticky lg:top-24"
            style={{ background: "#060c1a", border: "1px solid rgba(255,255,255,0.06)" }}>

            <div className="px-5 py-4 border-b flex items-center justify-between"
              style={{ borderColor: "rgba(255,255,255,0.05)" }}>
              <span className="text-[9px] font-mono uppercase tracking-widest text-slate-600">JVM RUNTIME TELEMETRY</span>
              <span className="text-[9px] font-mono text-slate-600">{clock || "00:00:00"}</span>
            </div>

            <div className="p-5 space-y-3">
              {telemetryRows.map((row) => (
                <div key={row.label} className="p-3 rounded-xl"
                  style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.04)" }}>
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-slate-600">{row.label}</span>
                    <span className="text-[9px] font-mono text-slate-700">{row.sub}</span>
                  </div>
                  <div className="text-base font-black font-mono mt-1" style={{ color: row.color }}>{row.value}</div>
                </div>
              ))}

              {/* Heap bar */}
              <div className="p-3 rounded-xl space-y-2" style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.04)" }}>
                <div className="flex justify-between text-[9px] font-mono text-slate-600">
                  <span>JVM HEAP</span><span>2.4 / 4.0 GB</span>
                </div>
                <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
                  <motion.div className="h-full rounded-full" style={{ background: "#06b6d4" }}
                    initial={{ width: 0 }} animate={inView ? { width: "60%" } : {}}
                    transition={{ duration: 1.2, delay: 0.5 }} />
                </div>
              </div>

              {/* Threads */}
              <div className="p-3 rounded-xl flex items-center justify-between"
                style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.04)" }}>
                <span className="text-[9px] font-mono uppercase tracking-wider text-slate-600">VIRTUAL THREADS</span>
                <span className="flex items-center gap-1.5 text-[11px] font-mono font-bold" style={{ color: "#06b6d4" }}>
                  <Activity className="w-3 h-3 animate-pulse" />
                  142 Active
                </span>
              </div>

              <div className="text-[9px] font-mono text-slate-700 text-center leading-relaxed">
                Telemetry stream: connected over SSL to cluster.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
