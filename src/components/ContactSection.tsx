"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Terminal, Send, CheckCircle, Mail, Linkedin, Github, Play, ArrowRight } from "lucide-react";

export const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [ts, setTs] = useState(0);

  // REST client states
  const [httpMethod, setHttpMethod] = useState<"POST" | "GET" | "OPTIONS">("POST");
  const [activeRequestTab, setActiveRequestTab] = useState<"body" | "headers" | "auth">("body");
  
  // Pipeline animation trace states
  const [traceStep, setTraceStep] = useState(0);
  const [traceLogs, setTraceLogs] = useState<string[]>([]);
  const traceNodes = [
    { label: "API Ingress", delay: 400, log: "↳ [Ingress] Client request routed to Gateway node:8080" },
    { label: "Security Filter", delay: 900, log: "↳ [Spring Security] Cors allowed. JWT bearer token validated." },
    { label: "Kafka Broker", delay: 1400, log: "↳ [Kafka] Produced payload to topic: contact_incoming_events" },
    { label: "MySQL Store", delay: 1900, log: "↳ [Database] Write query successful. Index optimized." },
    { label: "Client Response", delay: 2400, log: "↳ [Gateway] Returned headers: HTTP/1.1 200 OK (26ms)" }
  ];

  useEffect(() => {
    setTs(Math.floor(Date.now() / 1000));
  }, [name, email, message]);

  const runTracePipeline = () => {
    setTraceStep(0);
    setTraceLogs([]);
    
    traceNodes.forEach((node, i) => {
      setTimeout(() => {
        setTraceStep(i + 1);
        setTraceLogs(prev => [...prev, node.log]);
        if (i === traceNodes.length - 1) {
          setTimeout(() => {
            setStatus("success");
          }, 600);
        }
      }, node.delay);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setStatus("sending");
    runTracePipeline();
  };

  const socials = [
    { label: "GitHub", href: "https://github.com/Aks396", icon: Github, color: "#fff" },
    { label: "LinkedIn", href: "https://linkedin.com/in/akash-soni396", icon: Linkedin, color: "#0a66c2" },
    { label: "Email", href: "mailto:sameersoni396@gmail.com", icon: Mail, color: "#06b6d4" },
  ];

  const requestHeaders = `{
  "Host": "api.akashsoni.dev",
  "User-Agent": "Aks-Console/v1.0",
  "Content-Type": "application/json",
  "Accept": "*/*"
}`;

  const requestAuth = `{
  "Type": "Bearer Token",
  "Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.akash-soni-secure-auth-token"
}`;

  return (
    <section id="contact" ref={ref} className="relative border-t"
      style={{ borderColor: "rgba(255,255,255,0.04)", background: "#030810" }}>
      <div className="absolute inset-0 grid-pattern-sm opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.3), transparent)" }} />

      <div className="container-tight section-padding">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="mb-14">
          <span className="mono-label">Contact API</span>
          <h2 className="text-3xl md:text-4xl font-black tracking-[-0.03em] text-white"
            style={{ fontFamily: "var(--font-geist), sans-serif" }}>
            Start a <span className="gradient-text-cyan">Conversation</span>
          </h2>
          <p className="mt-3 text-sm font-mono text-slate-500 max-w-md">
            Open to backend engineering roles, AI infrastructure projects, and consulting opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* LEFT: REST Client Console Interface (span 7) */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }} className="lg:col-span-7 flex flex-col justify-between border rounded-2xl overflow-hidden"
            style={{ background: "#080e1b", borderColor: "rgba(255,255,255,0.06)" }}>
            
            {/* Top Toolbar */}
            <div className="px-5 py-3 border-b bg-black/30 flex items-center justify-between flex-wrap gap-3"
              style={{ borderColor: "rgba(255,255,255,0.05)" }}>
              
              <div className="flex items-center gap-3">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-[10px] text-slate-500">HTTP REST CLIENT v1.0</span>
              </div>
              
              {/* Method and Endpoint Selector */}
              <div className="flex items-center gap-1.5 bg-black/40 border border-white/5 rounded-lg px-2 py-1">
                <select value={httpMethod} onChange={(e) => setHttpMethod(e.target.value as any)}
                  className="bg-transparent text-[9px] font-mono text-cyan-400 font-bold focus:outline-none cursor-pointer pr-1">
                  <option value="POST" className="bg-slate-950">POST</option>
                  <option value="GET" className="bg-slate-950">GET</option>
                  <option value="OPTIONS" className="bg-slate-950">OPTIONS</option>
                </select>
                <div className="w-px h-2.5 bg-white/10" />
                <span className="text-[9px] font-mono text-slate-400 select-all">/api/v1/contact</span>
              </div>
            </div>

            {/* Request tabs headers/auth/body */}
            {status !== "sending" ? (
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  {/* Tab switches */}
                  <div className="flex border-b" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                    {[
                      { id: "body", label: "Body (JSON)" },
                      { id: "headers", label: "Headers" },
                      { id: "auth", label: "Auth Token" }
                    ].map(tab => (
                      <button key={tab.id} onClick={() => setActiveRequestTab(tab.id as any)}
                        className={`px-4 py-2 text-[9px] font-mono border-b-2 cursor-pointer transition-colors ${activeRequestTab === tab.id ? "border-cyan-500 text-white" : "border-transparent text-slate-500"}`}>
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Code workspace */}
                  <div className="p-5">
                    {activeRequestTab === "body" && (
                      <pre className="font-mono text-[10px] leading-relaxed text-emerald-400 overflow-x-auto select-text">
{`{
  "sender":   "${name || "your_name"}",
  "email":    "${email || "your@email.com"}",
  "payload":  "${message || "your message..."}",
  "ts":       ${ts},
  "ssl":      true
}`}
                      </pre>
                    )}
                    {activeRequestTab === "headers" && (
                      <pre className="font-mono text-[10px] leading-relaxed text-slate-400 overflow-x-auto select-text">
                        {requestHeaders}
                      </pre>
                    )}
                    {activeRequestTab === "auth" && (
                      <pre className="font-mono text-[10px] leading-relaxed text-slate-400 overflow-x-auto select-text">
                        {requestAuth}
                      </pre>
                    )}
                  </div>
                </div>

                {/* Console footer */}
                <div className="px-5 py-3 border-t bg-black/10 text-[9px] font-mono text-slate-500 flex items-center justify-between"
                  style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                  <span>HTTP Status: 100 Continue</span>
                  <span className="text-slate-600">Awaiting Submit</span>
                </div>
              </div>
            ) : (
              // Inbound pipeline animation logs screen
              <div className="flex-1 p-5 font-mono text-[10px] space-y-4 flex flex-col justify-center">
                
                {/* Node graph flow */}
                <div className="flex justify-between items-center text-slate-500 select-none pb-2 border-b border-white/5">
                  <span>ROUTING HOP PIPELINE</span>
                  <span className="text-amber-500 animate-pulse">● ROUTING MESSAGE</span>
                </div>
                
                <div className="grid grid-cols-5 gap-1.5 text-center text-[7px] font-bold">
                  {traceNodes.map((node, i) => (
                    <div key={node.label} className="p-1 rounded border transition-all"
                      style={{
                        background: traceStep === i + 1 ? "rgba(6,182,212,0.15)" : traceStep > i + 1 ? "rgba(16,185,129,0.08)" : "rgba(255,255,255,0.02)",
                        borderColor: traceStep === i + 1 ? "#06b6d4" : traceStep > i + 1 ? "#10b981" : "rgba(255,255,255,0.06)",
                        color: traceStep === i + 1 ? "#06b6d4" : traceStep > i + 1 ? "#10b981" : "#475569"
                      }}>{node.label}</div>
                  ))}
                </div>

                {/* Live logger */}
                <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-1 h-24 overflow-y-auto no-scrollbar font-mono text-[9px]">
                  {traceLogs.map((log, idx) => (
                    <div key={idx} className="text-slate-400">{log}</div>
                  ))}
                  {traceStep < traceNodes.length && (
                    <span className="inline-block w-1.5 h-3 bg-cyan-400 animate-blink" />
                  )}
                </div>

                <div className="text-[8px] text-slate-600 text-center select-none">
                  Routing trace logging live: SSL/TLS handshakes cleared.
                </div>
              </div>
            )}
          </motion.div>

          {/* RIGHT: Contact Form (span 5) */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }} className="lg:col-span-5 rounded-2xl overflow-hidden glass-card flex flex-col justify-between"
            style={{ border: "1px solid rgba(255,255,255,0.05)" }}>
            
            <AnimatePresence mode="wait">
              {status !== "success" ? (
                <motion.form key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} className="p-6 space-y-5 flex-1 flex flex-col justify-between gap-4">
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">HTTP Headers Body</span>
                      <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    </div>

                    {[
                      { label: "Your Name", value: name, setter: setName, type: "text", placeholder: "John Smith" },
                      { label: "Email Address", value: email, setter: setEmail, type: "email", placeholder: "john@company.com" },
                    ].map(({ label, value, setter, type, placeholder }) => (
                      <div key={label} className="space-y-1.5">
                        <label className="text-[9px] font-mono uppercase tracking-widest text-slate-600">{label}</label>
                        <input type={type} value={value} onChange={(e) => setter(e.target.value)} required
                          disabled={status === "sending"}
                          placeholder={placeholder}
                          className="w-full px-4 py-3 rounded-xl text-xs font-mono text-slate-200 focus:outline-none transition-all disabled:opacity-50"
                          style={{
                            background: "rgba(255,255,255,0.02)",
                            border: "1px solid rgba(255,255,255,0.06)",
                          }}
                          onFocus={(e) => { e.target.style.borderColor = "rgba(6,182,212,0.4)"; e.target.style.boxShadow = "0 0 20px rgba(6,182,212,0.08)"; }}
                          onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.06)"; e.target.style.boxShadow = "none"; }}
                        />
                      </div>
                    ))}

                    <div className="space-y-1.5">
                      <label className="text-[9px] font-mono uppercase tracking-widest text-slate-600">Message</label>
                      <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={4}
                        disabled={status === "sending"}
                        placeholder="Describe the opportunity, project, or collaboration..."
                        className="w-full px-4 py-3 rounded-xl text-xs font-mono text-slate-200 focus:outline-none resize-none transition-all disabled:opacity-50"
                        style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                        onFocus={(e) => { e.target.style.borderColor = "rgba(6,182,212,0.4)"; e.target.style.boxShadow = "0 0 20px rgba(6,182,212,0.08)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.06)"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>
                  </div>

                  <motion.button type="submit" disabled={status === "sending"}
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl font-mono font-bold text-xs text-black flex items-center justify-center gap-2 disabled:opacity-50 transition-all cursor-pointer mt-4"
                    style={{ background: "linear-gradient(135deg, #06b6d4, #3b82f6)", boxShadow: "0 0 30px rgba(6,182,212,0.25)" }}>
                    <Send className="w-4 h-4" />
                    {status === "sending" ? "TRANSMITTING..." : "POST MESSAGE"}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="p-10 text-center space-y-6 flex-1 flex flex-col justify-center">
                  <div className="w-14 h-14 rounded-full mx-auto flex items-center justify-center"
                    style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)" }}>
                    <CheckCircle className="w-7 h-7 text-emerald-400 animate-bounce" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-base font-black font-mono text-white">HTTP 200 OK</h4>
                    <p className="text-[11px] font-mono text-slate-500 leading-relaxed max-w-xs mx-auto">
                      Message successfully ingested into Kafka Broker and written to database stores. I&apos;ll respond within 24 hours.
                    </p>
                  </div>
                  <button onClick={() => { setStatus("idle"); setName(""); setEmail(""); setMessage(""); setTraceStep(0); setTraceLogs([]); }}
                    className="px-6 py-2.5 rounded-xl text-[10px] font-mono border text-slate-400 hover:text-white hover:border-white/20 transition-all cursor-pointer w-fit mx-auto"
                    style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                    Send Another Payload
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

        {/* Social connections */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          {socials.map(({ label, href, icon: Icon, color }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl card-hover group"
              style={{ background: "#060c1a", border: "1px solid rgba(255,255,255,0.04)" }}>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: `${color}08`, border: `1px solid ${color}15` }}>
                <Icon className="w-3.5 h-3.5" style={{ color }} />
              </div>
              <div className="hidden sm:block truncate">
                <div className="text-[10px] font-mono font-bold text-slate-300 group-hover:text-white transition-colors">{label}</div>
                <div className="text-[8px] font-mono text-slate-600 truncate">
                  {label === "GitHub" ? "github.com/Aks396"
                    : label === "LinkedIn" ? "linkedin.com/in/akash-soni396"
                    : "sameersoni396@gmail.com"}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
