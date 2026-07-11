"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Brain, Database, Activity, ShieldCheck, HeartPulse } from "lucide-react";

export const AICapability = () => {
  // Vector search simulator states
  const [similarity, setSimilarity] = useState(0.9421);
  // Kafka offset tracking states
  const [offsets, setOffsets] = useState([1042, 3819, 908]);
  // Circuit breaker state
  const [circuit, setCircuit] = useState("CLOSED");
  const [failures, setFailures] = useState(0);

  useEffect(() => {
    // 1. Simulating vector searches
    const vInterval = setInterval(() => {
      setSimilarity(parseFloat((0.92 + Math.random() * 0.07).toFixed(4)));
    }, 2500);

    // 2. Simulating Kafka offsets
    const kInterval = setInterval(() => {
      setOffsets(prev => prev.map(o => o + Math.floor(Math.random() * 4)));
    }, 1200);

    // 3. Simulating Circuit Breaker checks
    const cInterval = setInterval(() => {
      if (Math.random() > 0.95) {
        setCircuit("OPEN (TRIPPED)");
        setFailures(prev => prev + 1);
        setTimeout(() => setCircuit("HALF-OPEN"), 2000);
        setTimeout(() => setCircuit("CLOSED"), 4000);
      }
    }, 3000);

    return () => {
      clearInterval(vInterval);
      clearInterval(kInterval);
      clearInterval(cInterval);
    };
  }, []);

  return (
    <section id="ai" className="relative border-t" style={{ borderColor: "rgba(255,255,255,0.04)", background: "#010208" }}>
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="container-tight section-padding">
        <div className="mb-12">
          <span className="mono-label">Intelligent Infrastructure</span>
          <h2 className="text-3xl font-bold tracking-tight text-white">AI-Ready Systems Capability</h2>
          <p className="text-xs font-mono text-slate-500 mt-2">
            Enterprise architectures built to route data, handle low-latency vector queries, and manage high-velocity inference systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Semantic Retrieval (Vector Database) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl glass-card flex flex-col justify-between gap-5 group"
            style={{ border: "1px solid rgba(255,255,255,0.05)" }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/5 text-cyan-400 shrink-0">
                <Database className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-foreground font-mono">Semantic Retrieval Ready</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Architecting pgvector and Redis clusters optimized for high-speed embedding indexing, hybrid indexing, and cosine similarity matches.
                </p>
              </div>
            </div>

            {/* Micro Visualization */}
            <div className="p-4 rounded-xl space-y-2" style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.04)" }}>
              <div className="flex items-center justify-between text-[8px] font-mono text-slate-500 mb-1">
                <span>COSINE SIMILARITY RETRIEVAL</span>
                <span className="text-cyan-400">pgvector index</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                  <span>Query: &quot;high-throughput kafka redirect&quot;</span>
                  <span className="text-emerald-400">cos(θ) = {similarity}</span>
                </div>
                <div className="h-1 rounded-full overflow-hidden bg-white/5">
                  <motion.div className="h-full bg-cyan-500" animate={{ width: `${similarity * 100}%` }} transition={{ duration: 0.3 }} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: ML-Ready Ingestion (Kafka offset tracking) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl glass-card flex flex-col justify-between gap-5 group"
            style={{ border: "1px solid rgba(255,255,255,0.05)" }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-purple-500/5 text-purple-400 shrink-0">
                <Activity className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-foreground font-mono">ML-Ready Ingestion Pipelines</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Designing low-latency Kafka topics and worker streams to preprocess, batch, and feed transactional payloads directly to ML systems.
                </p>
              </div>
            </div>

            {/* Micro Visualization */}
            <div className="p-4 rounded-xl" style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.04)" }}>
              <div className="flex items-center justify-between text-[8px] font-mono text-slate-500 mb-2">
                <span>INBOUND KAFKA KRAFT PARTITIONS</span>
                <span className="text-purple-400">Active Brokers</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {offsets.map((offset, i) => (
                  <div key={i} className="p-2 rounded-lg bg-black/20 border border-white/5 text-center font-mono">
                    <div className="text-[8px] text-slate-600">PARTITION {i}</div>
                    <div className="text-[11px] font-bold text-slate-300 mt-0.5">{offset}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 3: Inference Orchestration (Resilient Circuit Breaker) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl glass-card flex flex-col justify-between gap-5 group"
            style={{ border: "1px solid rgba(255,255,255,0.05)" }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-500/5 text-amber-400 shrink-0">
                <Brain className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-foreground font-mono">Inference Gateways & resilience</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Building Spring Boot gateways with circuit breakers, adaptive rate limiters, and model fallbacks to guard client interfaces.
                </p>
              </div>
            </div>

            {/* Micro Visualization */}
            <div className="p-4 rounded-xl flex items-center justify-between" style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.04)" }}>
              <div className="space-y-1">
                <div className="text-[8px] font-mono text-slate-500">RESILIENCE GATEWAY STATUS</div>
                <div className="text-[10px] font-mono font-bold" style={{ color: circuit.startsWith("OPEN") ? "#ef4444" : circuit === "HALF-OPEN" ? "#f59e0b" : "#10b981" }}>
                  STATE: {circuit}
                </div>
              </div>
              <div className="text-right">
                <span className="text-[8px] font-mono text-slate-500 block">FAILURES DETECTED</span>
                <span className="text-[10px] font-mono font-bold text-slate-400">{failures} total</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: PII-Safe Preprocessing (Text Masker) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl glass-card flex flex-col justify-between gap-5 group"
            style={{ border: "1px solid rgba(255,255,255,0.05)" }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/5 text-emerald-400 shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-foreground font-mono">PII-Safe Ingestion Filters</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Implementing secure pipeline tokenizers to scrub, hash, or mask PII / PHI records prior to feeding text to external model APIs.
                </p>
              </div>
            </div>

            {/* Micro Visualization */}
            <div className="p-4 rounded-xl space-y-1" style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.04)" }}>
              <div className="text-[8px] font-mono text-slate-500 mb-1">PII COMPLIANCE STRIPPER</div>
              <div className="font-mono text-[9px] leading-relaxed space-y-1">
                <div className="text-slate-500 truncate"><span className="text-red-400 font-bold">RAW:</span> &quot;Contact John Smith from company Acme Corp at john.smith@acme.com&quot;</div>
                <div className="text-emerald-400 truncate"><span className="text-emerald-500 font-bold">SCRUBBED:</span> &quot;Contact <span className="px-1 py-0.5 rounded bg-emerald-500/20 text-[8px] border border-emerald-500/30">[REDACTED_NAME]</span> from company <span className="px-1 py-0.5 rounded bg-emerald-500/20 text-[8px] border border-emerald-500/30">[REDACTED_ORG]</span>&quot;</div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Visual Accent */}
        <div className="mt-12 p-6 rounded-xl border border-dashed border-white/5 bg-slate-950/20 text-center">
          <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-[0.25em] flex items-center justify-center gap-2">
            <HeartPulse className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            Engineering secure, enterprise-ready pipelines for high-reliability integrations
          </p>
        </div>
      </div>
    </section>
  );
};
