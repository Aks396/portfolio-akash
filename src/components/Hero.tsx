"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform, type Variants } from "framer-motion";
import { ArrowRight, ChevronDown, Cpu, Database, Zap, Activity } from "lucide-react";

const terminalLines = [
  { text: "$ Initializing Spring Boot & Next.js microservice cluster...", delay: 0 },
  { text: "> Establishing Kafka event pipeline for URL analytics...", delay: 600 },
  { text: "> Redis cache layer: READY [hit-ratio: 94.2%]", delay: 1200 },
  { text: "> AI inference gateway: ONLINE [models: 4]", delay: 1800 },
  { text: "> System health: ALL SERVICES OPERATIONAL ✓", delay: 2400 },
];

const stats = [
  { value: "3.4+", label: "Years Experience", icon: Activity },
  { value: "99.9%", label: "SLA Uptime", icon: Zap },
  { value: "10k+", label: "Events/sec", icon: Database },
];

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 80, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 25 });
  
  const spotlightX = useTransform(springX, (v) => `${v}px`);
  const spotlightY = useTransform(springY, (v) => `${v}px`);

  // Parallax glass tilt factors
  const cardRotateX = useTransform(springY, (y) => {
    if (typeof window === "undefined") return 0;
    const midY = window.innerHeight / 2;
    return -((y - midY) / window.innerHeight) * 12;
  });

  const cardRotateY = useTransform(springX, (x) => {
    if (typeof window === "undefined") return 0;
    const midX = window.innerWidth / 2;
    return ((x - midX) / window.innerWidth) * 12;
  });

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
    const cols = ["255,255,255", "41,151,255", "191,90,242"];
    const pts: P[] = Array.from({ length: 50 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
      size: Math.random() * 1.2 + 0.4,
      opacity: Math.random() * 0.3 + 0.05,
      colorIdx: Math.floor(Math.random() * 3),
    }));

    const onResize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    const onMouse = (e: MouseEvent) => { mX = e.clientX; mY = e.clientY; };
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouse);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = "rgba(255,255,255,0.015)";
      ctx.lineWidth = 0.5;
      const gs = 60;
      for (let x = 0; x < w; x += gs) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
      for (let y = 0; y < h; y += gs) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }

      pts.forEach((p) => {
        const dx = mX - p.x, dy = mY - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 180) { p.vx += dx * 0.0002; p.vy += dy * 0.0002; }
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
          if (d < 140) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${0.04 * (1 - d / 140)})`;
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

  const cV: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } };
  const iV: Variants = {
    hidden: { opacity: 0, y: 25, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section ref={heroRef} onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "#050505" }}>

      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Subtle background lights (Apple Aurora Style) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-25%] left-[-15%] w-[800px] h-[800px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #2997ff, transparent 70%)", filter: "blur(120px)" }} />
        <div className="absolute bottom-[-15%] right-[-10%] w-[700px] h-[700px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #bf5af2, transparent 70%)", filter: "blur(120px)" }} />
      </div>

      {/* Spotlight follower */}
      <motion.div className="absolute pointer-events-none z-0"
        style={{
          left: spotlightX, top: spotlightY,
          width: "900px", height: "900px",
          marginLeft: "-450px", marginTop: "-450px",
          background: "radial-gradient(circle, rgba(255,255,255,0.015) 0%, transparent 60%)",
          borderRadius: "50%",
        }} />

      {/* Hero content */}
      <div className="container-tight relative z-10 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT: Typography & stats (span 6) */}
          <motion.div variants={cV} initial="hidden" animate={isLoaded ? "visible" : "hidden"} className="lg:col-span-6 flex flex-col space-y-8">
            <motion.div variants={iV}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[9px] font-mono tracking-widest uppercase border"
                style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)", color: "#86868b" }}>
                <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                Available for Roles
              </div>
            </motion.div>

            <motion.div variants={iV} className="space-y-1">
              <div className="font-mono text-[10px] tracking-[0.35em] uppercase text-slate-500 mb-2">&lt; Core Systems /&gt;</div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-[-0.04em] leading-[0.9]"
                style={{ fontFamily: "var(--font-geist), sans-serif", color: "#fff" }}>
                Akash Soni
              </h1>
            </motion.div>

            <motion.div variants={iV} className="space-y-3.5">
              <p className="text-lg md:text-xl font-bold tracking-tight text-slate-300"
                style={{ fontFamily: "var(--font-geist), sans-serif" }}>
                Backend Engineer <span className="text-slate-600 mx-1.5">·</span>
                <span className="text-white">AI Infrastructure</span>
              </p>
              <p className="text-xs text-slate-400 font-mono leading-relaxed max-w-sm">
                Architecting high-performance database layers, event pipelines, and robust service architectures.
              </p>
            </motion.div>

            <motion.div variants={iV} className="flex flex-wrap gap-3 pt-1">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo("projects")} className="px-5 py-2.5 rounded-full text-[10px] font-mono font-bold text-black bg-white hover:bg-slate-200 transition-all cursor-pointer flex items-center gap-2">
                Explore Projects <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo("architecture")} className="px-5 py-2.5 rounded-full text-[10px] font-mono font-bold text-slate-300 border border-white/8 hover:border-white/20 bg-white/2 hover:bg-white/5 transition-all cursor-pointer">
                View Architecture
              </motion.button>
            </motion.div>

            <motion.div variants={iV} className="grid grid-cols-3 gap-3 pt-6 border-t"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              {stats.map(({ value, label, icon: Icon }) => (
                <div key={label} className="text-left">
                  <Icon className="w-3.5 h-3.5 mb-1.5 text-white/70" />
                  <div className="text-lg font-bold font-mono text-white">{value}</div>
                  <div className="text-[9px] font-mono uppercase tracking-wider text-slate-500 mt-0.5">{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Terminal with 3D mouse parallax tilt (span 6) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-6 relative"
            style={{ perspective: 1000 }}
          >
            <motion.div
              style={{ rotateX: cardRotateX, rotateY: cardRotateY, transformStyle: "preserve-3d" }}
              className="relative rounded-3xl border liquid-glass overflow-hidden"
            >
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/8 bg-white/2">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <span className="font-mono text-[9px] text-slate-500 ml-2">system_monitor.sh</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-mono text-[9px] text-green-400">ACTIVE</span>
                </div>
              </div>

              <div className="p-5 space-y-2 font-mono text-[10px] min-h-[170px] text-slate-400">
                {terminalLines.map((line, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: -5 }}
                    animate={visibleLines.includes(i) ? { opacity: 1, x: 0 } : { opacity: 0, x: -5 }}
                    transition={{ duration: 0.4 }}
                    className={i === terminalLines.length - 1 ? "text-green-400" : ""}>
                    {line.text}
                  </motion.div>
                ))}
                {visibleLines.length < terminalLines.length && (
                  <span className="inline-block w-1.5 h-3 bg-white/50 animate-blink" />
                )}
              </div>

              <div className="grid grid-cols-2 gap-px border-t border-white/8" style={{ background: "rgba(255,255,255,0.01)" }}>
                {[
                  { label: "Throughput", value: "12,420 rps", color: "#ffffff" },
                  { label: "Avg Latency", value: "< 24 ms", color: "#30d158" },
                  { label: "Cache Hit", value: "94.2%", color: "#bf5af2" },
                  { label: "SLA Uptime", value: "99.99%", color: "#ff9f0a" },
                ].map((m) => (
                  <div key={m.label} className="p-4 bg-black/40">
                    <div className="text-[8px] font-mono uppercase tracking-wider text-slate-600 mb-0.5">{m.label}</div>
                    <div className="text-sm font-bold font-mono" style={{ color: m.color }}>{m.value}</div>
                  </div>
                ))}
              </div>

              <div className="px-5 py-3.5 border-t border-white/8 flex items-center gap-2 flex-wrap bg-white/2">
                <span className="text-[8px] font-mono text-slate-500 uppercase tracking-wider">Active Clusters:</span>
                {["FHIR-R4", "KAFKA-BUS", "REDIS-CACHE", "API-GW"].map((s, i) => (
                  <span key={s} className="text-[8px] font-mono px-2 py-0.5 rounded border"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      borderColor: "rgba(255,255,255,0.06)",
                      color: "#86868b",
                    }}>{s}</span>
                ))}
              </div>
            </motion.div>
            
            {/* Simulation label */}
            <div className="text-[8px] font-mono text-slate-600 text-center mt-3">
              * Simulated terminal monitoring panel — illustrative of architecture.
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-25"
        animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2.2 }}>
        <span className="text-[8px] font-mono uppercase tracking-widest text-slate-500">Scroll</span>
        <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
      </motion.div>
    </section>
  );
};
