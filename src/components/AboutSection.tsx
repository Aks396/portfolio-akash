"use client";

import { useRef } from "react";
import { motion, type Variants, useInView } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Award, Code2, Server } from "lucide-react";

const metrics = [
  { value: "5+", label: "Years Experience", color: "#06b6d4" },
  { value: "99.9%", label: "SLA Maintained", color: "#10b981" },
  { value: "10k+", label: "Events / Second", color: "#8b5cf6" },
  { value: "45%", label: "Perf. Improvement", color: "#f59e0b" },
];

const highlights = [
  { icon: Server, label: "Backend Architecture", desc: "Microservices, event-driven systems, API gateways" },
  { icon: Code2, label: "AI Engineering", desc: "LLM routing, OCR pipelines, multimodal AI" },
  { icon: Award, label: "Cloud Infrastructure", desc: "AWS certified, Docker, Kubernetes, CI/CD" },
];

export const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const sV: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
  const iV: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section id="about" ref={ref} className="relative border-t" style={{ borderColor: "rgba(255,255,255,0.04)", background: "#030810" }}>
      <div className="absolute inset-0 grid-pattern-sm opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.3), transparent)" }} />

      <div className="container-tight section-padding">
        <motion.div variants={sV} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Bio */}
          <div className="space-y-8">
            <motion.div variants={iV}>
              <span className="mono-label">About</span>
              <h2 className="text-3xl md:text-4xl font-black tracking-[-0.03em] text-white mt-2"
                style={{ fontFamily: "var(--font-geist), sans-serif" }}>
                Engineering Systems{" "}
                <span className="gradient-text-cyan">That Scale</span>
              </h2>
            </motion.div>

            <motion.div variants={iV} className="space-y-4 text-sm text-slate-400 font-mono leading-relaxed">
              <p>
                Senior Full Stack Developer at <span className="text-cyan-400 font-semibold">Tata Elxsi</span>, specializing in highly scalable backend architectures and AI-driven full-stack applications. I design distributed url redirection services, AI career platforms, cognitive diagnostics tools, and high-performance system designs.
              </p>
              <p>
                My engineering philosophy: every system should be observable, resilient, and built for 10x traffic without rearchitecting. I approach software like infrastructure — designed once, operated forever.
              </p>
            </motion.div>

            <motion.div variants={iV} className="space-y-2">
              {[
                { icon: Briefcase, text: "Tata Elxsi Ltd. — Senior Software Engineer" },
                { icon: MapPin, text: "Pune, India" },
                { icon: GraduationCap, text: "B.E. Computer Engineering" },
                { icon: Award, text: "AWS Certified Solutions Architect – Associate" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-[12px] font-mono text-slate-500">
                  <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: "#06b6d4" }} />
                  {text}
                </div>
              ))}
            </motion.div>

            {/* Capability highlights */}
            <motion.div variants={iV} className="space-y-3">
              {highlights.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-start gap-3 p-3 rounded-xl card-hover cursor-default"
                  style={{ background: "rgba(6,182,212,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.2)" }}>
                    <Icon className="w-3.5 h-3.5" style={{ color: "#06b6d4" }} />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-slate-200">{label}</div>
                    <div className="text-[11px] font-mono text-slate-600 mt-0.5">{desc}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Metrics */}
          <motion.div variants={iV} className="space-y-4">
            {/* Metrics grid */}
            <div className="grid grid-cols-2 gap-3">
              {metrics.map(({ value, label, color }) => (
                <div key={label} className="p-5 rounded-2xl card-hover relative overflow-hidden group"
                  style={{ background: "#060c1a", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
                  <div className="text-2xl md:text-3xl font-black font-mono mb-1" style={{ color }}>{value}</div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-600">{label}</div>
                </div>
              ))}
            </div>

            {/* Experience card */}
            <div className="p-6 rounded-2xl" style={{ background: "#060c1a", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-600">Professional Timeline</span>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Current
                </span>
              </div>
              <div className="space-y-4">
                <div className="relative pl-4 border-l" style={{ borderColor: "rgba(6,182,212,0.2)" }}>
                  <div className="absolute -left-1.5 top-1 w-2.5 h-2.5 rounded-full"
                    style={{ background: "#06b6d4", boxShadow: "0 0 10px rgba(6,182,212,0.5)" }} />
                  <div className="text-xs font-mono font-bold text-white">Tata Elxsi Ltd.</div>
                  <div className="text-[10px] font-mono text-slate-500">Senior Software Engineer · Jan 2023 – Present</div>
                  <div className="text-[10px] font-mono text-cyan-400 mt-0.5">Full Stack &amp; Backend Systems · AI Integrations</div>
                </div>
                <div className="relative pl-4 border-l" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                  <div className="absolute -left-1.5 top-1 w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="text-xs font-mono font-bold text-slate-400">B.E. Computer Engineering</div>
                  <div className="text-[10px] font-mono text-slate-600">University · 2019 – 2023</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
