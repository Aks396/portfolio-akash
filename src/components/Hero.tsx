"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform, type Variants } from "framer-motion";
import { ArrowRight, ChevronDown, Cpu, Database, Zap, Bot, Activity } from "lucide-react";

const techBadges = [
  { label: "Java", color: "#f97316" },
  { label: "Spring Boot", color: "#6abf69" },
  { label: "TypeScript", color: "#3178c6" },
  { label: "Next.js", color: "#ffffff" },
  { label: "Kafka", color: "#1a97f5" },
  { label: "Redis", color: "#ef4444" },
  { label: "AWS", color: "#f59e0b" },
  { label: "Docker", color: "#06b6d4" },
  { label: "FastAPI", color: "#10b981" },
  { label: "AI/LLMs", color: "#8b5cf6" },
];

const terminalLines = [
  { text: "$ Initializing Spring Boot & Next.js microservice cluster...", delay: 0 },
  { text: "> Establishing Kafka event pipeline for URL analytics...", delay: 600 },
  { text: "> Redis cache layer: READY [hit-ratio: 94.2%]", delay: 1200 },
  { text: "> AI inference gateway: ONLINE [models: 4]", delay: 1800 },
  { text: "> System health: ALL SERVICES OPERATIONAL ✓", delay: 2400 },
];

const stats = [
  { value: "5+", label: "Years Experience", icon: Activity },
  { value: "99.9%", label: "SLA", icon: Zap },
  { value: "10k+", label: "Events/sec", icon: Database },
  { value: "4", label: "AI Models", icon: Bot },
];

const tickerItems = [
  "tinyurl-ai-platform · Java 21 & Redis",
  "CURA-Autism-AI · AI Diagnosis Screening",
  "ATS-Checker · AI Career Intelligence",
  "Newspaper-System-Design · Java & Architecture",
  "5+ Years Production Experience",
  "Spring Boot & Next.js Microservices",
  "Redis Distributed Caching · 94% Hit Ratio",
  "Docker · AWS · CI/CD Pipelines",
];

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const spotlightX = useTransform(springX, (v) => `${v}px`);
  const spotlightY = useTransform(springY, (v) => `${v}px`);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let rafId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let mX = w / 2, mY = h / 2;

    type P = { x: number; y: number; vx: number; vy: number; size: number; opacity: number; colorIdx: number };
    const cols = ["6,182,212", "59,130,246", "139,92,246"];
    const pts: P[] = Array.from({ length: 80 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
      colorIdx: Math.floor(Math.random() * 3),
    }));

    const onResize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    const onMouse = (e: MouseEvent) => { mX = e.clientX; mY = e.clientY; };
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouse);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = "rgba(6,182,212,0.025)";
      ctx.lineWidth = 0.5;
      const gs = 50;
      for (let x = 0; x < w; x += gs) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
      for (let y = 0; y < h; y += gs) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }

      pts.forEach((p) => {
        const dx = mX - p.x, dy = mY - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 200) { p.vx += dx * 0.0003; p.vy += dy * 0.0003; }
        p.vx *= 0.99; p.vy *= 0.99;
        p.x = (p.x + p.vx + w) % w;
        p.y = (p.y + p.vy + h) % h;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${cols[p.colorIdx]},${p.opacity})`;
        ctx.fill();
      });

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(6,182,212,${0.07 * (1 - d / 120)})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }
      rafId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  useEffect(() => {
    terminalLines.forEach((line, i) => {
      setTimeout(() => setVisibleLines((prev) => [...prev, i]), line.delay + 800);
    });
    setTimeout(() => setIsLoaded(true), 400);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }, [mouseX, mouseY]);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const cV: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.5 } } };
  const iV: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
  };
  const bV: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({ opacity: 1, scale: 1, transition: { delay: 1.2 + i * 0.06, duration: 0.4, ease: "backOut" as const } }),
  };

  return (
    <section ref={heroRef} onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, #010208 0%, #030712 100%)" }}>

      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Gradient orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.15]"
          style={{ background: "radial-gradient(circle, #06b6d4, transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute top-[10%] right-[-15%] w-[500px] h-[500px] rounded-full opacity-[0.1]"
          style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)", filter: "blur(100px)" }} />
        <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #3b82f6, transparent 70%)", filter: "blur(80px)" }} />
      </div>

      {/* Mouse spotlight */}
      <motion.div className="absolute pointer-events-none z-0"
        style={{
          left: spotlightX, top: spotlightY,
          width: "800px", height: "800px",
          marginLeft: "-400px", marginTop: "-400px",
          background: "radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 60%)",
          borderRadius: "50%",
        }} />

      {/* Scan line */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.03]">
        <div className="animate-scan-line absolute left-0 w-full h-[2px]"
          style={{ background: "linear-gradient(90deg, transparent, #06b6d4, transparent)" }} />
      </div>

      {/* Content */}
      <div className="container-tight relative z-10 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div variants={cV} initial="hidden" animate={isLoaded ? "visible" : "hidden"} className="flex flex-col space-y-8">
            <motion.div variants={iV}>
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase"
                style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)", color: "#10b981" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for Opportunities
              </div>
            </motion.div>

            <motion.div variants={iV} className="space-y-2">
              <div className="font-mono text-xs tracking-[0.3em] uppercase text-slate-500 mb-3">&lt; Portfolio /&gt;</div>
              <h1 className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[0.95]"
                style={{ fontFamily: "var(--font-geist), sans-serif" }}>
                <span className="gradient-text-white">AKASH</span><br />
                <span className="gradient-text-cyan glow-text-cyan">SONI</span>
              </h1>
            </motion.div>

            <motion.div variants={iV} className="space-y-2">
              <p className="text-lg md:text-xl font-semibold text-slate-300 tracking-tight"
                style={{ fontFamily: "var(--font-geist), sans-serif" }}>
                Senior Full Stack Developer <span className="mx-2 text-slate-600">·</span>
                <span className="gradient-text-cyan">AI Infrastructure</span>
                <span className="mx-2 text-slate-600">·</span>Distributed Systems
              </p>
              <p className="text-sm text-slate-500 font-mono leading-relaxed max-w-lg">
                Building scalable cloud-native systems, interactive full-stack dashboards, and AI-powered platforms at scale.
              </p>
            </motion.div>

            <motion.div variants={iV} className="flex flex-wrap gap-2">
              {techBadges.map((badge, i) => (
                <motion.span key={badge.label} custom={i} variants={bV} initial="hidden" animate="visible"
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="px-3 py-1 rounded-lg text-[11px] font-mono font-semibold cursor-default"
                  style={{ background: `${badge.color}12`, border: `1px solid ${badge.color}30`, color: badge.color }}>
                  {badge.label}
                </motion.span>
              ))}
            </motion.div>

            <motion.div variants={iV} className="flex flex-wrap gap-3 pt-2">
              <motion.button whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("projects")} className="btn-primary">
                Explore Projects <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
              <motion.button whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("architecture")} className="btn-ghost">
                <Cpu className="w-3.5 h-3.5" /> View Architecture
              </motion.button>
              <motion.button whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("contact")} className="btn-ghost">
                Contact
              </motion.button>
            </motion.div>

            <motion.div variants={iV} className="grid grid-cols-4 gap-3 pt-4 border-t"
              style={{ borderColor: "rgba(255,255,255,0.05)" }}>
              {stats.map(({ value, label, icon: Icon }) => (
                <div key={label} className="text-center">
                  <Icon className="w-3 h-3 mx-auto mb-1 text-slate-600" />
                  <div className="text-lg font-black font-mono gradient-text-cyan">{value}</div>
                  <div className="text-[9px] font-mono uppercase tracking-wider text-slate-600">{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Terminal */}
          <motion.div initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.8, ease: [0.23, 1, 0.32, 1] }} className="relative">

            <div className="absolute -inset-2 rounded-2xl opacity-30"
              style={{ background: "radial-gradient(ellipse, rgba(6,182,212,0.15), transparent 70%)", filter: "blur(20px)" }} />

            <div className="relative rounded-2xl overflow-hidden animate-border-pulse"
              style={{ background: "#060c1a", border: "1px solid rgba(6,182,212,0.12)" }}>
              <div className="flex items-center justify-between px-5 py-3.5 border-b"
                style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(0,0,0,0.3)" }}>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full" style={{ background: "rgba(239,68,68,0.7)" }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: "rgba(245,158,11,0.7)" }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: "rgba(16,185,129,0.7)" }} />
                  </div>
                  <span className="font-mono text-[10px] text-slate-500 ml-2">system_monitor.sh</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[10px] text-emerald-400">LIVE</span>
                </div>
              </div>

              <div className="p-5 space-y-2 font-mono text-[11px] min-h-[180px]">
                {terminalLines.map((line, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={visibleLines.includes(i) ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.4 }}
                    className={i === terminalLines.length - 1 ? "text-emerald-400" : "text-slate-400"}>
                    {line.text}
                  </motion.div>
                ))}
                {visibleLines.length < terminalLines.length && (
                  <span className="inline-block w-2 h-3.5 bg-cyan-400 animate-blink" />
                )}
              </div>

              <div className="grid grid-cols-2 gap-px border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                {[
                  { label: "Throughput", value: "12,420 rps", color: "#06b6d4" },
                  { label: "Avg Latency", value: "< 24 ms", color: "#10b981" },
                  { label: "Cache Hit", value: "94.2%", color: "#8b5cf6" },
                  { label: "SLA Uptime", value: "99.99%", color: "#f59e0b" },
                ].map((m) => (
                  <div key={m.label} className="p-4" style={{ background: "rgba(0,0,0,0.2)" }}>
                    <div className="text-[9px] font-mono uppercase tracking-wider text-slate-600 mb-1">{m.label}</div>
                    <div className="text-base font-bold font-mono" style={{ color: m.color }}>{m.value}</div>
                  </div>
                ))}
              </div>

              <div className="px-5 py-3 border-t flex items-center gap-2 flex-wrap"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                <span className="text-[9px] font-mono text-slate-600 uppercase tracking-wider">Active Services:</span>
                {["FHIR-01", "FHIR-02", "IDP-01", "LLM-GW"].map((s, i) => (
                  <span key={s} className="text-[9px] font-mono px-1.5 py-0.5 rounded"
                    style={{
                      background: i < 2 ? "rgba(6,182,212,0.1)" : "rgba(139,92,246,0.1)",
                      border: `1px solid ${i < 2 ? "rgba(6,182,212,0.2)" : "rgba(139,92,246,0.2)"}`,
                      color: i < 2 ? "#06b6d4" : "#8b5cf6",
                    }}>{s}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ticker */}
      <div className="absolute bottom-0 left-0 w-full border-t overflow-hidden"
        style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(6,182,212,0.02)" }}>
        <div className="flex animate-ticker whitespace-nowrap py-3">
          {[0, 1].map((rep) => (
            <div key={rep} className="flex items-center gap-8 shrink-0 pr-8">
              {tickerItems.map((item) => (
                <span key={item} className="font-mono text-[10px] uppercase tracking-widest text-slate-600 flex items-center gap-2">
                  <span style={{ color: "#164e63" }}>▸</span>{item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30"
        animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
        <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500">Scroll</span>
        <ChevronDown className="w-4 h-4 text-slate-500" />
      </motion.div>
    </section>
  );
};
