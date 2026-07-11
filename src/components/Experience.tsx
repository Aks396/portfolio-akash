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

export const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [mounted, setMounted] = useState(false);
  const [clock, setClock] = useState("");
  const [throughput, setThroughput] = useState(12420);
  const [latency, setLatency] = useState(24);
  const [heap, setHeap] = useState(2.4);
  const [chartData, setChartData] = useState<Array<{ time: string; rps: number }>>([]);

  useEffect(() => {
    setMounted(true);
    const updateClock = () => setClock(new Date().toLocaleTimeString("en-US", { hour12: false }));
    updateClock();
    const clockId = setInterval(updateClock, 1000);

    // Initialize mock historical data
    const initialData = Array.from({ length: 8 }).map((_, idx) => ({
      time: `T-${16 - idx * 2}s`,
      rps: 12000 + Math.floor(Math.random() * 800),
    }));
    setChartData(initialData);

    // Dynamic metrics simulation loop
    const simId = setInterval(() => {
      setThroughput(prev => {
        const delta = Math.floor((Math.random() - 0.5) * 150);
        return Math.max(11500, Math.min(13000, prev + delta));
      });
      setLatency(prev => {
        const delta = Math.floor((Math.random() - 0.5) * 4);
        return Math.max(18, Math.min(30, prev + delta));
      });
      setHeap(prev => {
        const delta = parseFloat(((Math.random() - 0.5) * 0.05).toFixed(2));
        return Math.max(2.1, Math.min(2.8, parseFloat((prev + delta).toFixed(2))));
      });
      setChartData(prev => {
        const nextRps = 12000 + Math.floor(Math.random() * 800);
        const timeStamp = new Date().toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
        return [...prev.slice(1), { time: timeStamp.substring(6), rps: nextRps }];
      });
    }, 2000);

    return () => {
      clearInterval(clockId);
      clearInterval(simId);
    };
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

          {/* Left: Main role details (span 7) */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 rounded-2xl overflow-hidden glass-card"
            style={{ border: "1px solid rgba(255,255,255,0.05)" }}>

            {/* Card header */}
            <div className="px-6 py-5 border-b bg-black/10" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    JAN 2023 — PRESENT
                  </span>
                  <h3 className="text-lg font-black tracking-[-0.02em] text-white mt-3"
                    style={{ fontFamily: "var(--font-geist), sans-serif" }}>
                    Senior Software Engineer
                    <span className="text-sm font-semibold text-slate-500 ml-2 block sm:inline">— Full Stack &amp; Backend Systems</span>
                  </h3>
                  <p className="text-xs font-mono mt-0.5 text-cyan-400">Tata Elxsi Ltd.</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-wider">Current</span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="px-6 py-5 space-y-3.5">
              {achievements.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.07 }}
                  className="flex items-start gap-3 text-[11px] font-mono text-slate-400 leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#06b6d4" }} />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Tags */}
            <div className="px-6 py-4 border-t flex flex-wrap gap-1.5 bg-black/10" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
              {["Java", "Spring Boot", "Kafka", "Redis", "AWS", "Docker", "Jenkins", "JUnit", "Spring Security"].map((t) => (
                <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/2 border border-white/5 text-slate-500">
                  #{t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Telemetry Sidebar (span 5) */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 rounded-2xl overflow-hidden glass-card lg:sticky lg:top-24"
            style={{ border: "1px solid rgba(255,255,255,0.05)" }}>

            <div className="px-5 py-4 border-b flex items-center justify-between bg-black/10"
              style={{ borderColor: "rgba(255,255,255,0.05)" }}>
              <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500">JVM CLUSTER METRICS TELEMETRY</span>
              <span className="text-[9px] font-mono text-slate-600 select-none">{clock || "00:00:00"}</span>
            </div>

            <div className="p-5 space-y-4">
              
              {/* Core Telemetry Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-black/20 border border-white/5 space-y-1.5">
                  <div className="flex items-center justify-between text-[8px] font-mono text-slate-500">
                    <span>AVG LATENCY</span>
                    <Server className="w-2.5 h-2.5 text-cyan-400" />
                  </div>
                  <div className="text-base font-black font-mono text-cyan-400">{latency} ms</div>
                  <div className="text-[7px] font-mono text-slate-600">P50 INGRESS</div>
                </div>

                <div className="p-3 rounded-xl bg-black/20 border border-white/5 space-y-1.5">
                  <div className="flex items-center justify-between text-[8px] font-mono text-slate-500">
                    <span>THROUGHPUT</span>
                    <Cpu className="w-2.5 h-2.5 text-purple-400" />
                  </div>
                  <div className="text-base font-black font-mono text-purple-400">{throughput.toLocaleString()} rps</div>
                  <div className="text-[7px] font-mono text-slate-600">PEAK INBOUND</div>
                </div>
              </div>

              {/* Recharts Area Chart */}
              <div className="p-3 rounded-xl bg-black/25 border border-white/5 space-y-3">
                <div className="flex items-center justify-between text-[8px] font-mono text-slate-500">
                  <span>THROUGHPUT DRIFT TRACE</span>
                  <span className="text-[7px] bg-cyan-500/10 px-1 py-0.2 rounded text-cyan-400 border border-cyan-500/20">LIVE DATA</span>
                </div>
                
                <div className="w-full min-h-[110px] flex items-center justify-center">
                  {mounted && chartData.length > 0 ? (
                    <ResponsiveContainer width="100%" height={110}>
                      <AreaChart data={chartData} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
                        <defs>
                          <linearGradient id="colorRps" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0) rotate(90) scale(110)">
                            <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.25}/>
                            <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="time" stroke="#475569" fontSize={8} tickLine={false} axisLine={false} />
                        <YAxis stroke="#475569" fontSize={8} domain={[11000, 13500]} tickLine={false} axisLine={false} />
                        <Tooltip contentStyle={{ background: "#060c1a", border: "1px solid rgba(255,255,255,0.06)", fontSize: 8, fontFamily: "monospace" }} />
                        <Area type="monotone" dataKey="rps" stroke="#06b6d4" strokeWidth={1.5} fillOpacity={1} fill="url(#colorRps)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="text-[9px] font-mono text-slate-600 animate-pulse">Initializing graph plotter...</div>
                  )}
                </div>
              </div>

              {/* JVM Heap memory stats bar */}
              <div className="p-3 rounded-xl bg-black/20 border border-white/5 space-y-2">
                <div className="flex justify-between text-[8px] font-mono text-slate-500">
                  <span>JVM HEAP ALLOCATION</span>
                  <span className="text-slate-400">{heap} / 4.0 GB</span>
                </div>
                <div className="h-1 rounded-full overflow-hidden bg-white/5">
                  <motion.div className="h-full bg-cyan-400" animate={{ width: `${(heap / 4.0) * 100}%` }} transition={{ duration: 0.3 }} />
                </div>
                <div className="flex justify-between text-[7px] font-mono text-slate-600">
                  <span>GC TYPE: G1GC</span>
                  <span>MAX: 4096MB</span>
                </div>
              </div>

              {/* Thread count status */}
              <div className="p-3 rounded-xl bg-black/20 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[8px] font-mono text-slate-500">
                  <Database className="w-3 h-3 text-emerald-400" />
                  <span>VIRTUAL CARRIER THREADS</span>
                </div>
                <span className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-400">
                  <Activity className="w-3 h-3 animate-pulse" />
                  142 Active
                </span>
              </div>

              <div className="text-[8px] font-mono text-slate-600 text-center leading-relaxed select-none">
                Telemetry securely piped. Connection status: encrypted.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
