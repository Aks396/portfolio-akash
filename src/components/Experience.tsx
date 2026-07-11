"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Activity, Server, Cpu, Database } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

const achievements = [
  "Architected scalable microservices using Java 21 and Spring Boot, improving service modularity and reducing cross-service dependencies by 40%.",
  "Engineered high-throughput RESTful APIs, caching schemas (Redis), and MySQL databases for low-latency redirection services (tinyurl-ai-platform).",
  "Designed and developed CURA-Autism-AI, a clinical diagnostic screening platform, and ATS-Checker, a resume intelligence feedback gateway using Gemini APIs.",
  "Optimized backend performance by 45% through asynchronous event pipelines (Apache Kafka), query optimization, and memory cache tuning.",
  "Developed secure authentication workflows using JWT and Spring Security for enterprise-grade applications and API endpoints.",
  "Increased automated test coverage from below 50% to 77% using JUnit, Mockito, and TestNG, reducing production defects by 20%.",
  "Collaborated with DevOps to implement CI/CD pipelines using Jenkins, Docker, and GitHub Actions, reducing deployment failures by 30%.",
];

const chartData = [
  { time: "10s", rps: 12100 },
  { time: "20s", rps: 12420 },
  { time: "30s", rps: 11950 },
  { time: "40s", rps: 12280 },
  { time: "50s", rps: 12610 },
  { time: "60s", rps: 12340 },
  { time: "70s", rps: 12480 },
  { time: "80s", rps: 12420 },
];

export const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [mounted, setMounted] = useState(false);
  const [clock, setClock] = useState("");

  useEffect(() => {
    setMounted(true);
    const updateClock = () => setClock(new Date().toLocaleTimeString("en-US", { hour12: false }));
    updateClock();
    const clockId = setInterval(updateClock, 1000);
    return () => clearInterval(clockId);
  }, []);

  return (
    <section id="experience" ref={ref} className="relative border-t border-white/5"
      style={{ background: "#050505" }}>
      <div className="absolute inset-0 grid-pattern-sm opacity-20 pointer-events-none" />

      <div className="container-tight section-padding">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="mb-14">
          <span className="mono-label">Work History</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.03em] text-white mt-2"
            style={{ fontFamily: "var(--font-geist), sans-serif" }}>
            Professional <span className="text-slate-500">Experience</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* Left: Timeline event milestone (span 7) */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 rounded-3xl overflow-hidden glass-card"
          >
            {/* Card Header */}
            <div className="px-6 py-5 border-b border-white/5 bg-white/2">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] px-2.5 py-1 rounded bg-white/5 border border-white/8 text-slate-400">
                    JAN 2023 — PRESENT
                  </span>
                  <h3 className="text-base font-bold tracking-tight text-white mt-3"
                    style={{ fontFamily: "var(--font-geist), sans-serif" }}>
                    Software Developer — Backend Engineering
                    <span className="text-xs font-semibold text-slate-500 ml-2 block sm:inline">— Distributed Systems</span>
                  </h3>
                  <p className="text-xs font-mono mt-0.5 text-slate-400">Tata Elxsi Ltd. · Bengaluru, Karnataka</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[9px] font-mono text-green-400 uppercase tracking-wider font-bold">Current</span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="px-6 py-5 space-y-4">
              {achievements.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  className="flex items-start gap-3.5 text-[11px] font-mono text-slate-400 leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-white shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Tech badges */}
            <div className="px-6 py-4 border-t border-white/5 flex flex-wrap gap-1.5 bg-white/2">
              {["Java", "Spring Boot", "Kafka", "Redis", "AWS", "Docker", "Jenkins", "JUnit", "Spring Security"].map((t) => (
                <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded-full border border-white/5 bg-white/3 text-slate-500">
                  #{t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Telemetry Sidebar (span 5) */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 rounded-3xl overflow-hidden glass-card lg:sticky lg:top-24"
          >
            <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between bg-white/2"
              style={{ borderColor: "rgba(255,255,255,0.05)" }}>
              <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500 font-bold">SYSTEM TELEMETRY SUMMARY</span>
              <span className="text-[9px] font-mono text-slate-600 select-none">{clock || "00:00:00"}</span>
            </div>

            <div className="p-5 space-y-4">
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-2xl bg-black/40 border border-white/5 space-y-1.5">
                  <div className="flex items-center justify-between text-[8px] font-mono text-slate-500">
                    <span>AVG LATENCY</span>
                    <Server className="w-2.5 h-2.5 text-slate-400" />
                  </div>
                  <div className="text-base font-bold font-mono text-white">24 ms</div>
                  <div className="text-[7px] font-mono text-slate-600">P50 INGRESS</div>
                </div>

                <div className="p-3 rounded-2xl bg-black/40 border border-white/5 space-y-1.5">
                  <div className="flex items-center justify-between text-[8px] font-mono text-slate-500">
                    <span>THROUGHPUT</span>
                    <Cpu className="w-2.5 h-2.5 text-white/50" />
                  </div>
                  <div className="text-base font-bold font-mono text-white">12,420 rps</div>
                  <div className="text-[7px] font-mono text-slate-600">PEAK INBOUND</div>
                </div>
              </div>

              {/* Recharts area chart */}
              <div className="p-3 rounded-2xl bg-black/45 border border-white/5 space-y-3">
                <div className="flex items-center justify-between text-[8px] font-mono text-slate-500">
                  <span>THROUGHPUT DRIFT TRACE</span>
                  <span className="text-[7px] bg-slate-500/10 px-1 py-0.2 rounded text-slate-400 border border-slate-500/20">STATIC TRACE</span>
                </div>
                
                <div className="w-full min-h-[110px] flex items-center justify-center">
                  {mounted ? (
                    <ResponsiveContainer width="100%" height={110}>
                      <AreaChart data={chartData} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
                        <defs>
                          <linearGradient id="colorRps" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0) rotate(90) scale(110)">
                            <stop offset="5%" stopColor="#ffffff" stopOpacity={0.15}/>
                            <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="time" stroke="#475569" fontSize={8} tickLine={false} axisLine={false} />
                        <YAxis stroke="#475569" fontSize={8} domain={[11000, 13000]} tickLine={false} axisLine={false} />
                        <Tooltip contentStyle={{ background: "#060c1a", border: "1px solid rgba(255,255,255,0.06)", fontSize: 8, fontFamily: "monospace" }} />
                        <Area type="monotone" dataKey="rps" stroke="#ffffff" strokeWidth={1.5} fillOpacity={1} fill="url(#colorRps)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="text-[9px] font-mono text-slate-600 animate-pulse">Initializing graph plotter...</div>
                  )}
                </div>
              </div>

              {/* JVM Heap memory stats bar */}
              <div className="p-3 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                <div className="flex justify-between text-[8px] font-mono text-slate-500">
                  <span>JVM HEAP ALLOCATION</span>
                  <span className="text-slate-400">2.4 / 4.0 GB</span>
                </div>
                <div className="h-1 rounded-full overflow-hidden bg-white/5">
                  <motion.div className="h-full bg-white/70 animate-pulse" initial={{ width: "60%" }} animate={{ width: "60%" }} />
                </div>
                <div className="flex justify-between text-[7px] font-mono text-slate-600">
                  <span>GC TYPE: G1GC</span>
                  <span>MAX: 4096MB</span>
                </div>
              </div>

              {/* Thread count status */}
              <div className="p-3 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[8px] font-mono text-slate-500">
                  <Database className="w-3.5 h-3.5 text-slate-400" />
                  <span>VIRTUAL CARRIER THREADS</span>
                </div>
                <span className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-white">
                  <Activity className="w-3.5 h-3.5" />
                  142 Active
                </span>
              </div>

              <div className="text-[8.5px] font-mono text-slate-500 text-center leading-normal border-t border-white/5 pt-2">
                * Simulated metrics — illustrative of production architectures I&apos;ve operated.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
