"use client";

import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Play, RefreshCw, Terminal, CheckCircle2, AlertTriangle } from "lucide-react";

const projects = [
  {
    id: "idp",
    num: "01",
    title: "IDP Intel Engine",
    subtitle: "Intelligent Document Processing Platform",
    role: "Backend & AI Engineer",
    impact: "Gemini AI · Multi-Tenant SaaS",
    accentColor: "#06b6d4",
    description: "Multi-tenant SaaS platform automating clinical insurance form extraction using Google Gemini vision models and Tesseract OCR with a human-in-the-loop verification gateway.",
    metrics: [
      { label: "Extraction Accuracy", value: "98%" },
      { label: "Processing Speed", value: "<2s" },
      { label: "Tenants Supported", value: "Multi" },
    ],
    contributions: [
      "Designed FastAPI microservices with JWT-based role isolation for multi-tenant security",
      "Integrated Tesseract OCR with Gemini Vision prompt models for clinical text extraction",
      "Built human-in-the-loop audit gates before final database commits",
    ],
    tags: ["FastAPI", "Python", "Gemini AI", "Tesseract OCR", "MySQL", "JWT", "Docker"],
  },
  {
    id: "llm",
    num: "02",
    title: "MultiModel-LLM",
    subtitle: "Unified Multi-Provider AI Gateway",
    role: "Backend & Systems Engineer",
    impact: "Spring Boot · 4 AI Providers",
    accentColor: "#8b5cf6",
    description: "Secure gateway unifying OpenAI, Gemini, Claude, and Llama APIs under a single streaming routing proxy with AES-256 key vaulting and Redis-based deduplication cache.",
    metrics: [
      { label: "API Overhead Reduction", value: "85%" },
      { label: "AI Providers", value: "4" },
      { label: "Encryption", value: "AES-256" },
    ],
    contributions: [
      "Architected reactive Spring WebFlux backends for non-blocking event-stream responses",
      "Implemented Redis caching reducing API overhead by 85% on duplicate queries",
      "Built AES-256 key management vaulting client API credentials securely",
    ],
    tags: ["Java", "Spring WebFlux", "Redis", "AES-256", "JWT", "TypeScript"],
  },
  {
    id: "compliance",
    num: "03",
    title: "Label Process",
    subtitle: "AI-Powered MDR Compliance Audit",
    role: "AI & Full Stack Developer",
    impact: "EU MDR 2017/745 Compliance",
    accentColor: "#f59e0b",
    description: "Automated compliance audit dashboard validating medical device product labels against EU MDR 2017/745 regulations using Gemini multimodal AI and ISO 15223-1 symbol verification.",
    metrics: [
      { label: "Compliance Score", value: "94%" },
      { label: "Regulations", value: "EU MDR" },
      { label: "Checks", value: "Automated" },
    ],
    contributions: [
      "Developed Gemini multimodal prompt matrices detecting missing ISO 15223-1 symbols",
      "Designed automated compliance scorecard and PDF audit report generation",
      "Engineered overlay coordinate systems placing verification rectangles on labels",
    ],
    tags: ["FastAPI", "Python", "React", "Tesseract OCR", "Google Gemini", "MySQL"],
  },
  {
    id: "fhir",
    num: "04",
    title: "FHIR R4 Platform",
    subtitle: "Healthcare Interoperability Platform",
    role: "Backend Engineer",
    impact: "PostgreSQL · Kafka · FHIR R4",
    accentColor: "#10b981",
    description: "High-throughput FHIR R4-compliant integration layer automating care routing events across distributed healthcare EHR services with zero-loss Kafka message delivery guarantees.",
    metrics: [
      { label: "Message Delivery", value: "Zero-loss" },
      { label: "Standard", value: "FHIR R4" },
      { label: "Event Throughput", value: "10k+/s" },
    ],
    contributions: [
      "Implemented Spring Boot event-driven services parsing HL7 FHIR R4 clinical data",
      "Engineered Kafka message queues with zero-loss patient vitals delivery",
      "Optimized PostgreSQL connection pools for heavy concurrent ingestion flows",
    ],
    tags: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Microservices", "JUnit"],
  },
];

// Simulator components (kept from original, visually elevated)
const IDPSimulator = () => {
  const [step, setStep] = useState(0);
  const [logs, setLogs] = useState<string[]>(["System Idle — Awaiting Document Input"]);
  const nodes = ["File Ingest", "OCR Extract", "Gemini Validation", "Audit Check", "DB Persist"];

  const run = () => {
    setStep(1); setLogs(["[Ingest] Inbound document received: claim_form_109.pdf"]);
    const msgs = [
      "[OCR] Parsing PDF. Extracted 4 text blocks via Tesseract",
      "[Gemini AI] Validating attributes. Confidence: 98%",
      "[Audit] Score: 94 — Bypassing manual approval gate",
      "[Storage] Persisted in MySQL. Client notified ✓",
    ];
    msgs.forEach((m, i) => setTimeout(() => {
      setStep(i + 2); setLogs((p) => [...p, m]);
    }, (i + 1) * 1200));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-mono font-bold" style={{ color: "#06b6d4" }}>PIPELINE SIMULATION</span>
        <button onClick={run} disabled={step > 0 && step < 5}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold transition-all disabled:opacity-40"
          style={{ background: "rgba(6,182,212,0.08)", border: "1px solid rgba(6,182,212,0.2)", color: "#06b6d4" }}>
          <Play className="w-3 h-3" /> Run
        </button>
      </div>
      <div className="grid grid-cols-5 gap-1.5">
        {nodes.map((n, i) => (
          <div key={n} className="p-1.5 rounded-lg text-center text-[8px] font-mono font-bold border transition-all"
            style={{
              background: step === i + 1 ? "rgba(6,182,212,0.15)" : step > i + 1 ? "rgba(16,185,129,0.08)" : "rgba(255,255,255,0.02)",
              borderColor: step === i + 1 ? "#06b6d4" : step > i + 1 ? "#10b981" : "rgba(255,255,255,0.06)",
              color: step === i + 1 ? "#06b6d4" : step > i + 1 ? "#10b981" : "#475569",
              boxShadow: step === i + 1 ? "0 0 12px rgba(6,182,212,0.2)" : "none",
            }}>{n}</div>
        ))}
      </div>
      <div className="p-3 rounded-xl font-mono text-[10px] space-y-1 h-20 overflow-y-auto no-scrollbar"
        style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.05)" }}>
        {logs.map((l, i) => <p key={i} className="text-slate-400">{l}</p>)}
      </div>
    </div>
  );
};

const LLMSimulator = () => {
  const [model, setModel] = useState("gemini-pro");
  const [messages, setMessages] = useState<Array<{ sender: "user" | "ai"; text: string }>>([
    { sender: "ai", text: "Unified AI proxy online. Select model and send a query." },
  ]);
  const [streaming, setStreaming] = useState(false);
  const [metrics, setMetrics] = useState({ latency: 0, cache: "—", size: 0 });

  const send = (text: string) => {
    if (!text.trim() || streaming) return;
    setMessages((p) => [...p, { sender: "user", text }]);
    setStreaming(true);
    const latency = text.includes("Optimize") ? 15 : 240;
    setTimeout(() => {
      const resp = `Routed via ${model.toUpperCase()}. AES-256 validation passed. Response time: ${latency}ms.`;
      setMessages((p) => [...p, { sender: "ai", text: "" }]);
      let i = 0;
      const iv = setInterval(() => {
        setMessages((p) => { const n = [...p]; n[n.length - 1] = { sender: "ai", text: resp.slice(0, i + 1) }; return n; });
        if (++i >= resp.length) { clearInterval(iv); setStreaming(false); setMetrics({ latency, cache: latency === 15 ? "HIT" : "MISS", size: resp.length }); }
      }, 15);
    }, 800);
  };

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-mono font-bold" style={{ color: "#8b5cf6" }}>LIVE AI PROXY</span>
        <select value={model} onChange={(e) => setModel(e.target.value)}
          className="text-[10px] font-mono rounded-lg px-2 py-1 focus:outline-none"
          style={{ background: "#060c1a", border: "1px solid rgba(255,255,255,0.08)", color: "#94a3b8" }}>
          <option value="gemini-pro">Gemini Pro</option>
          <option value="gpt-4o">GPT-4o</option>
          <option value="claude-3">Claude 3</option>
          <option value="llama-3">Llama 3</option>
        </select>
      </div>
      <div className="h-28 rounded-xl p-3 space-y-2 overflow-y-auto no-scrollbar flex flex-col"
        style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.05)" }}>
        {messages.map((m, i) => (
          <div key={i} className={`max-w-[85%] p-2 rounded-lg text-[10px] font-mono ${m.sender === "user" ? "self-end" : "self-start"}`}
            style={{ background: m.sender === "user" ? "rgba(139,92,246,0.12)" : "rgba(255,255,255,0.04)", border: `1px solid ${m.sender === "user" ? "rgba(139,92,246,0.2)" : "rgba(255,255,255,0.06)"}`, color: "#94a3b8" }}>
            {m.text || <span className="animate-blink inline-block w-1.5 h-3 bg-purple-400" />}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        {["Optimize a Java connection pool", "Explain Kafka offsets"].map((p) => (
          <button key={p} onClick={() => send(p)} disabled={streaming}
            className="text-[9px] font-mono px-2 py-1 rounded-lg transition-all disabled:opacity-40"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", color: "#64748b" }}>
            {p}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 text-center text-[9px] font-mono">
        {[{ l: "Latency", v: `${metrics.latency}ms`, c: "#06b6d4" }, { l: "Cache", v: metrics.cache, c: "#10b981" }, { l: "Vault", v: "AES-256", c: "#8b5cf6" }].map((m) => (
          <div key={m.l} className="p-2 rounded-lg" style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <div className="text-slate-600 uppercase mb-0.5">{m.l}</div>
            <div className="font-bold" style={{ color: m.c }}>{m.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ComplianceSimulator = () => {
  const [scanning, setScanning] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [checks, setChecks] = useState<Array<{ name: string; status: "idle" | "success" | "warning" }>>([
    { name: "CE Certificate Mark Validation", status: "idle" },
    { name: "Sterility ISO Symbol Check", status: "idle" },
    { name: "Expiry Date Format Alignment", status: "idle" },
    { name: "Manufacturing Reference String", status: "idle" },
  ]);

  const run = () => {
    setScanning(true); setScore(null);
    setChecks((p) => p.map((c) => ({ ...c, status: "idle" })));
    const outcomes: Array<"success" | "warning"> = ["success", "warning", "success", "success"];
    outcomes.forEach((o, i) => {
      setTimeout(() => {
        setChecks((p) => p.map((c, ci) => ci === i ? { ...c, status: o } : c));
        if (i === outcomes.length - 1) { setScore(94); setScanning(false); }
      }, (i + 1) * 800);
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-mono font-bold" style={{ color: "#f59e0b" }}>MDR COMPLIANCE AUDIT</span>
        <button onClick={run} disabled={scanning}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold transition-all disabled:opacity-40"
          style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)", color: "#f59e0b" }}>
          <RefreshCw className={`w-3 h-3 ${scanning ? "animate-spin" : ""}`} /> Scan
        </button>
      </div>
      <div className="relative p-3 rounded-xl overflow-hidden" style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.05)" }}>
        {scanning && (
          <motion.div initial={{ top: 0 }} animate={{ top: "100%" }} transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
            className="absolute left-0 w-full h-0.5 z-10"
            style={{ background: "rgba(245,158,11,0.5)", boxShadow: "0 0 8px rgba(245,158,11,0.8)" }} />
        )}
        <div className="font-mono text-[10px] text-slate-500 space-y-1">
          <div className="flex justify-between"><span>REF: DEV-MDR-9812</span><span style={{ color: "#f59e0b" }}>[CE 0123]</span></div>
          <p>EXPIRY: 2028-09-12 // STERILE R</p>
        </div>
      </div>
      <div className="space-y-1.5">
        {checks.map((c) => (
          <div key={c.name} className="flex items-center justify-between p-2.5 rounded-lg text-[10px] font-mono"
            style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <span className="text-slate-500">{c.name}</span>
            {c.status === "idle" && <span className="text-slate-600">WAITING</span>}
            {c.status === "success" && <span className="flex items-center gap-1" style={{ color: "#10b981" }}><CheckCircle2 className="w-3 h-3" />VERIFIED</span>}
            {c.status === "warning" && <span className="flex items-center gap-1 animate-pulse" style={{ color: "#f59e0b" }}><AlertTriangle className="w-3 h-3" />WARN</span>}
          </div>
        ))}
      </div>
      {score !== null && (
        <div className="p-3 rounded-xl text-center" style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)" }}>
          <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 mb-1">Compliance Score</div>
          <div className="text-2xl font-black font-mono text-emerald-400">{score}%</div>
        </div>
      )}
    </div>
  );
};

const KafkaSimulator = () => {
  const [logs, setLogs] = useState<string[]>(["Topic 'fhir_inbound_patient' initialized"]);
  const [running, setRunning] = useState(false);

  const publish = () => {
    if (running) return;
    setRunning(true);
    const payloads = [
      '{"resourceType":"Observation","code":"8867-4","value":72}',
      '{"resourceType":"Observation","code":"8480-6","value":120}',
    ];
    payloads.forEach((p, i) => {
      setTimeout(() => {
        setLogs((prev) => [
          ...prev,
          `[Broker] Partition: ${i % 2} Offset: ${Math.floor(Math.random() * 100)}`,
          `[Consumer] Payload: ${p}`,
        ]);
        if (i === payloads.length - 1) setRunning(false);
      }, (i + 1) * 1200);
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-mono font-bold" style={{ color: "#10b981" }}>KAFKA EVENT STREAM</span>
        <button onClick={publish} disabled={running}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold transition-all disabled:opacity-40"
          style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)", color: "#10b981" }}>
          <Play className="w-3 h-3" /> Publish FHIR Vitals
        </button>
      </div>
      <div className="p-3 rounded-xl font-mono text-[10px] space-y-1 h-36 overflow-y-auto no-scrollbar"
        style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="flex justify-between text-slate-600 border-b border-white/5 pb-1.5 mb-1.5">
          <span>BROKER CONSOLE</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </div>
        {logs.map((l, i) => (
          <p key={i} style={{ color: l.includes("Payload") ? "#06b6d4" : l.includes("Broker") ? "#10b981" : "#475569" }}>{l}</p>
        ))}
      </div>
    </div>
  );
};

const simulators = { idp: IDPSimulator, llm: LLMSimulator, compliance: ComplianceSimulator, fhir: KafkaSimulator };

export const ArchitectureSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeId, setActiveId] = useState("idp");

  const active = projects.find((p) => p.id === activeId)!;
  const Simulator = simulators[activeId as keyof typeof simulators];

  return (
    <section id="projects" ref={ref} className="relative border-t" style={{ borderColor: "rgba(255,255,255,0.04)", background: "#030810" }}>
      <div className="absolute inset-0 grid-pattern-sm opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.3), transparent)" }} />

      <div className="container-tight section-padding">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="mb-14">
          <span className="mono-label">Case Studies</span>
          <h2 className="text-3xl md:text-4xl font-black tracking-[-0.03em] text-white"
            style={{ fontFamily: "var(--font-geist), sans-serif" }}>
            Technical <span className="gradient-text-cyan">Projects</span>
          </h2>
          <p className="mt-3 text-sm font-mono text-slate-600">
            Select a project to explore the architecture and trigger the live simulation.
          </p>
        </motion.div>

        {/* Project selector tabs */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {projects.map((p) => (
            <motion.button key={p.id} onClick={() => setActiveId(p.id)}
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="px-4 py-2 rounded-xl text-[10px] font-mono font-bold uppercase tracking-wider transition-all"
              style={{
                background: activeId === p.id ? `${p.accentColor}15` : "rgba(255,255,255,0.02)",
                border: `1px solid ${activeId === p.id ? p.accentColor : "rgba(255,255,255,0.06)"}`,
                color: activeId === p.id ? p.accentColor : "#475569",
                boxShadow: activeId === p.id ? `0 0 20px ${p.accentColor}20` : "none",
              }}>
              {p.num} {p.id.toUpperCase()}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeId}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* LEFT: Project info */}
            <div className="p-7 rounded-2xl relative overflow-hidden"
              style={{ background: "#060c1a", border: `1px solid ${active.accentColor}20` }}>
              {/* Top color bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(90deg, transparent, ${active.accentColor}, transparent)` }} />
              {/* Bg glow */}
              <div className="absolute top-0 right-0 w-48 h-48 opacity-5 rounded-full"
                style={{ background: active.accentColor, filter: "blur(40px)" }} />

              <div className="relative space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest mb-2" style={{ color: active.accentColor }}>
                      {active.impact}
                    </div>
                    <h3 className="text-xl font-black tracking-[-0.02em] text-white"
                      style={{ fontFamily: "var(--font-geist), sans-serif" }}>
                      {active.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 mt-0.5">{active.subtitle}</p>
                  </div>
                  <span className="text-[9px] font-mono px-2 py-1 rounded-lg shrink-0"
                    style={{ background: `${active.accentColor}10`, border: `1px solid ${active.accentColor}25`, color: active.accentColor }}>
                    {active.role}
                  </span>
                </div>

                <p className="text-[12px] font-mono text-slate-500 leading-relaxed">{active.description}</p>

                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-2">
                  {active.metrics.map((m) => (
                    <div key={m.label} className="p-3 rounded-xl text-center"
                      style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.04)" }}>
                      <div className="text-base font-black font-mono" style={{ color: active.accentColor }}>{m.value}</div>
                      <div className="text-[9px] font-mono text-slate-600 mt-0.5 uppercase">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Contributions */}
                <div className="space-y-2">
                  <p className="text-[9px] font-mono uppercase tracking-widest font-bold" style={{ color: active.accentColor }}>
                    Key Contributions
                  </p>
                  {active.contributions.map((c, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] font-mono text-slate-400 leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: active.accentColor }} />
                      {c}
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                  {active.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-md text-[9px] font-mono"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", color: "#475569" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Simulator */}
            <div className="p-7 rounded-2xl lg:sticky lg:top-24" style={{ background: "#060c1a", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-center gap-2 pb-4 mb-4 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                <Terminal className="w-4 h-4" style={{ color: active.accentColor }} />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-white">
                  Simulator · {active.id.toUpperCase()}
                </span>
                <span className="ml-auto text-[9px] font-mono px-2 py-0.5 rounded"
                  style={{ background: `${active.accentColor}10`, border: `1px solid ${active.accentColor}20`, color: active.accentColor }}>
                  LIVE DEMO
                </span>
              </div>
              <Simulator />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
