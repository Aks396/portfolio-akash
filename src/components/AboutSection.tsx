"use client";

import { useRef, useState, useEffect } from "react";
import { motion, type Variants, useInView } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Award, Code2, Server, Terminal as TermIcon, Shield } from "lucide-react";

const metrics = [
  { value: "3.4+", label: "Years Experience", color: "#ffffff", desc: "Production code delivery" },
  { value: "99.9%", label: "SLA Maintained", color: "#30d158", desc: "For distributed gateways" },
  { value: "10k+", label: "Events / Sec", color: "#2997ff", desc: "Peak Kafka ingestion streams" },
  { value: "45%", label: "Perf. Boost", color: "#ff9f0a", desc: "Distributed cache cache hit" },
];

const highlights = [
  { icon: Server, label: "Backend Architecture", desc: "Spring Boot, Kafka pipelines, high-concurrency microservices" },
  { icon: Code2, label: "AI Engineering & Routing", desc: "Gemini vision OCR pipelines, prompt filters" },
  { icon: Shield, label: "Cloud & Security Design", desc: "AWS certified, OAuth2/JWT secure gateway tokens" },
];

const IngressSVG = () => (
  <svg className="w-full h-full min-h-[140px] opacity-40 group-hover:opacity-75 transition-opacity" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="80" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
    <circle cx="100" cy="100" r="55" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1.5" strokeDasharray="5 5" className="animate-spin" style={{ animationDuration: '40s' }} />
    <circle cx="100" cy="100" r="30" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
    
    <motion.circle cx="100" cy="45" r="3" fill="#ffffff" animate={{ y: [0, 110, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} />
    <motion.circle cx="45" cy="100" r="3.5" fill="#2997ff" animate={{ x: [0, 110, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} />
    <motion.circle cx="155" cy="100" r="2.5" fill="#30d158" animate={{ x: [0, -110, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }} />

    <circle cx="100" cy="100" r="10" fill="url(#centerGrad)" />
    <circle cx="100" cy="100" r="5" fill="#050505" />
    <circle cx="100" cy="100" r="2" fill="#ffffff" className="animate-pulse" />

    <defs>
      <radialGradient id="centerGrad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100 100) rotate(90) scale(10)">
        <stop stopColor="#ffffff" />
        <stop offset="1" stopColor="#2997ff" />
      </radialGradient>
    </defs>
  </svg>
);

const TelemetryLogs = () => {
  const [logs, setLogs] = useState<string[]>([
    "Initializing gateway monitor...",
    "Securing credentials channel...",
    "Health-Check [IDLE] status: online"
  ]);

  useEffect(() => {
    const endpoints = ["/api/v1/auth/verify", "/api/v1/tinyurl/redirect", "/api/v1/cura/diagnose", "/api/v1/ats/scan"];
    const methods = ["POST", "GET", "POST", "POST"];
    const interval = setInterval(() => {
      const idx = Math.floor(Math.random() * endpoints.length);
      const latency = (Math.random() * 12 + 2).toFixed(1);
      const newLog = `[${methods[idx]}] ${endpoints[idx]} -> 200 OK (${latency}ms)`;
      setLogs((p) => [...p.slice(-4), newLog]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 rounded-2xl font-mono text-[9px] space-y-1 h-32 overflow-hidden flex flex-col justify-end border border-white/5 bg-black/40">
      <div className="text-slate-600 border-b border-white/5 pb-1 mb-1.5 flex justify-between">
        <span>CLUSTER TRAFFIC LOGGER</span>
        <span className="text-green-400 animate-pulse font-bold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
          CONNECTED
        </span>
      </div>
      {logs.map((log, idx) => (
        <div key={idx} className="text-slate-400 font-mono tracking-tight flex items-center justify-between">
          <span className="truncate">{log}</span>
          <span className="text-slate-600 shrink-0">now</span>
        </div>
      ))}
    </div>
  );
};

export const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const sV: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
  const iV: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" ref={ref} className="relative border-t border-white/5" style={{ background: "#050505" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }} />

      <div className="container-tight section-padding">
        <motion.div variants={sV} initial="hidden" animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="mb-8">
          <span className="mono-label">About</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.03em] text-white mt-2"
            style={{ fontFamily: "var(--font-geist), sans-serif" }}>
            Engineering Systems{" "}
            <span className="text-slate-500">That Scale</span>
          </h2>
        </motion.div>

        <motion.div variants={sV} initial="hidden" animate={inView ? "visible" : "hidden"} className="space-y-6">

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            
            {/* Grid Item 1: Bio (span 7) */}
            <motion.div variants={iV} className="lg:col-span-7 p-6 rounded-3xl glass-card relative overflow-hidden group flex flex-col justify-between gap-6">
              <div className="absolute top-0 left-0 right-0 h-[1.5px]"
                style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)" }} />
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">SYNTHESIZING SYSTEMS DESIGN</span>
                  </div>
                  <h3 className="text-base font-bold text-white font-mono">Backend Engineer @ Tata Elxsi</h3>
                  <p className="text-xs text-slate-400 font-mono leading-relaxed">
                    I build distributed url redirection layers, clinical diagnostic screenings, career parser gateways, and decoupled high-volume messaging buses. Focused on creating software that is fully observable, resilient to load, and robust.
                  </p>
                </div>
                <div className="md:col-span-4 flex items-center justify-center">
                  <IngressSVG />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4">
                {[
                  { icon: Briefcase, text: "Tata Elxsi Ltd. — Software Developer — Backend Engineering" },
                  { icon: MapPin, text: "Bengaluru, Karnataka" },
                  { icon: GraduationCap, text: "B.Tech — Information Technology" },
                  { icon: Award, text: "AWS Solutions Architect" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2.5 text-[9px] font-mono text-slate-500">
                    <Icon className="w-3.5 h-3.5 shrink-0 text-white/50" />
                    <span className="truncate" title={text}>{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Grid Item 2: Telemetry Logger (span 5) */}
            <motion.div variants={iV} className="lg:col-span-5 p-6 rounded-3xl glass-card flex flex-col justify-between gap-4">
              <div className="absolute top-0 left-0 right-0 h-[1.5px]"
                style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)" }} />
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <TermIcon className="w-3.5 h-3.5 text-white/50" />
                  <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Active Node Inbound</span>
                </div>
                <p className="text-xs text-slate-400 font-mono leading-relaxed">
                  Real-time cluster simulator showing endpoint request flow and routing latencies through microservice controllers.
                </p>
              </div>
              <div>
                <TelemetryLogs />
                <div className="text-[7.5px] font-mono text-slate-600 text-center mt-1.5">
                  * Simulated traffic logger — illustrative of system architectures.
                </div>
              </div>
            </motion.div>

            {/* Grid Item 3: Highlights (span 5) */}
            <motion.div variants={iV} className="lg:col-span-5 p-6 rounded-3xl glass-card flex flex-col justify-between gap-5">
              <div className="space-y-4">
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block">Featured Highlights</span>
                <div className="space-y-3.5">
                  {highlights.map(({ icon: Icon, label, desc }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-xl flex items-center justify-center shrink-0 border border-white/8 bg-white/2">
                        <Icon className="w-3.5 h-3.5 text-white/70" />
                      </div>
                      <div>
                        <div className="text-[11px] font-mono font-bold text-slate-200">{label}</div>
                        <div className="text-[10px] font-mono text-slate-500 mt-0.5">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Grid Item 4: Timeline (span 7) */}
            <motion.div variants={iV} className="lg:col-span-7 p-6 rounded-3xl glass-card flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block mb-4">Professional Timeline</span>
                <div className="space-y-5">
                  <div className="relative pl-5 border-l border-white/10">
                    <div className="absolute -left-[5.5px] top-1 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <div className="text-xs font-mono font-bold text-white">Tata Elxsi Ltd.</div>
                        <div className="text-[9px] font-mono text-slate-500 mt-0.5">Software Developer — Backend Engineering</div>
                      </div>
                      <span className="text-[9px] font-mono text-white shrink-0">Jan 2023 – Present</span>
                    </div>
                  </div>
                  <div className="relative pl-5 border-l border-white/5">
                    <div className="absolute -left-[5.5px] top-1 w-2.5 h-2.5 rounded-full bg-slate-800" />
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <div className="text-xs font-mono font-bold text-slate-400">B.Tech — Information Technology</div>
                        <div className="text-[9px] font-mono text-slate-500 mt-0.5">Madhav Institute of Technology & Science (MITS), Gwalior</div>
                        <div className="text-[9px] font-mono text-slate-600 mt-0.5">Undergraduate program</div>
                      </div>
                      <span className="text-[9px] font-mono text-slate-600 shrink-0">Jul 2018 – Jun 2022</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[9px] font-mono text-slate-600 border-t border-white/5 pt-3 mt-4">
                * Design philosophy: observable, secure, resilient distributed architectures.
              </div>
            </motion.div>

          </div>

          {/* Metrics grid underneath */}
          <motion.div variants={iV} className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            {metrics.map(({ value, label, color, desc }) => (
              <div key={label} className="p-4 rounded-2xl relative overflow-hidden group glass-card">
                <div className="absolute top-0 left-0 right-0 h-[1.5px]"
                  style={{ background: `linear-gradient(90deg, transparent, ${color}30, transparent)` }} />
                <div className="text-xl md:text-2xl font-black font-mono" style={{ color }}>{value}</div>
                <div className="text-[9px] font-mono uppercase tracking-wider text-slate-400 mt-1">{label}</div>
                <div className="text-[9px] font-mono text-slate-600 mt-0.5">{desc}</div>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
