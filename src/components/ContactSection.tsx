"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Terminal, Send, CheckCircle, Mail, Linkedin, Github } from "lucide-react";

export const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [ts, setTs] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTs(Math.floor(Date.now() / 1000));
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setStatus("sending");
    setTimeout(() => setStatus("success"), 1500);
  };

  const socials = [
    { label: "GitHub", href: "https://github.com/Aks396", icon: Github, color: "#fff" },
    { label: "LinkedIn", href: "https://linkedin.com/in/akash-soni396", icon: Linkedin, color: "#0a66c2" },
    { label: "Email", href: "mailto:sameersoni396@gmail.com", icon: Mail, color: "#06b6d4" },
  ];

  return (
    <section id="contact" ref={ref} className="relative border-t"
      style={{ borderColor: "rgba(255,255,255,0.04)", background: "#030810" }}>
      <div className="absolute inset-0 grid-pattern-sm opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.3), transparent)" }} />

      <div className="container-tight section-padding">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="mb-14">
          <span className="mono-label">Contact</span>
          <h2 className="text-3xl md:text-4xl font-black tracking-[-0.03em] text-white"
            style={{ fontFamily: "var(--font-geist), sans-serif" }}>
            Start a <span className="gradient-text-cyan">Conversation</span>
          </h2>
          <p className="mt-3 text-sm font-mono text-slate-600 max-w-md">
            Open to backend engineering roles, AI infrastructure projects, and consulting opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* LEFT: API visualizer */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }} className="space-y-6">

            <div className="rounded-2xl overflow-hidden" style={{ background: "#060c1a", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-center justify-between px-5 py-3.5 border-b"
                style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(0,0,0,0.3)" }}>
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4" style={{ color: "#06b6d4" }} />
                  <span className="font-mono text-[10px] text-slate-500">POST /api/v1/contact</span>
                </div>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded"
                  style={{ background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.2)", color: "#06b6d4" }}>
                  JSON
                </span>
              </div>
              <pre className="p-5 font-mono text-[11px] leading-relaxed overflow-x-auto no-scrollbar"
                style={{ color: "#10b981" }}>
{`{
  "sender":   "${name || "your_name"}",
  "email":    "${email || "your@email.com"}",
  "payload":  "${message || "your message..."}",
  "ts":       ${ts},
  "ssl":      true
}`}
              </pre>
              <div className="px-5 py-3 border-t text-[10px] font-mono" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                <span style={{ color: "#475569" }}>{"// Status: "}</span>
                <span style={{ color: status === "success" ? "#10b981" : status === "sending" ? "#f59e0b" : "#475569" }}>
                  {status === "idle" ? "100 Continue — awaiting submit"
                    : status === "sending" ? "202 Processing — routing to Kafka..."
                    : "200 OK — message delivered ✓"}
                </span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-2">
              {socials.map(({ label, href, icon: Icon, color }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl card-hover group"
                  style={{ background: "#060c1a", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: `${color}12`, border: `1px solid ${color}25` }}>
                    <Icon className="w-4 h-4" style={{ color }} />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-slate-300 group-hover:text-white transition-colors">{label}</div>
                    <div className="text-[9px] font-mono text-slate-600">
                      {label === "GitHub" ? "github.com/Aks396"
                        : label === "LinkedIn" ? "linkedin.com/in/akash-soni396"
                        : "sameersoni396@gmail.com"}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Contact form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl overflow-hidden"
            style={{ background: "#060c1a", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: "linear-gradient(90deg, transparent, #06b6d4, transparent)" }} />

            <AnimatePresence mode="wait">
              {status !== "success" ? (
                <motion.form key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} className="p-7 space-y-5">
                  {[
                    { label: "Your Name", value: name, setter: setName, type: "text", placeholder: "John Smith" },
                    { label: "Email Address", value: email, setter: setEmail, type: "email", placeholder: "john@company.com" },
                  ].map(({ label, value, setter, type, placeholder }) => (
                    <div key={label} className="space-y-1.5">
                      <label className="text-[9px] font-mono uppercase tracking-widest text-slate-600">{label}</label>
                      <input type={type} value={value} onChange={(e) => setter(e.target.value)} required
                        placeholder={placeholder}
                        className="w-full px-4 py-3 rounded-xl text-sm font-mono text-slate-200 focus:outline-none transition-all"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.07)",
                        }}
                        onFocus={(e) => { e.target.style.borderColor = "rgba(6,182,212,0.4)"; e.target.style.boxShadow = "0 0 20px rgba(6,182,212,0.08)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.07)"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>
                  ))}
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-mono uppercase tracking-widest text-slate-600">Message</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={4}
                      placeholder="Describe the opportunity, project, or collaboration..."
                      className="w-full px-4 py-3 rounded-xl text-sm font-mono text-slate-200 focus:outline-none resize-none transition-all"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                      onFocus={(e) => { e.target.style.borderColor = "rgba(6,182,212,0.4)"; e.target.style.boxShadow = "0 0 20px rgba(6,182,212,0.08)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.07)"; e.target.style.boxShadow = "none"; }}
                    />
                  </div>
                  <motion.button type="submit" disabled={status === "sending"}
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl font-mono font-bold text-sm text-black flex items-center justify-center gap-2 disabled:opacity-50 transition-all"
                    style={{ background: "linear-gradient(135deg, #06b6d4, #3b82f6)", boxShadow: "0 0 30px rgba(6,182,212,0.3)" }}>
                    <Send className="w-4 h-4" />
                    {status === "sending" ? "TRANSMITTING..." : "SEND MESSAGE"}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="p-12 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center"
                    style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)" }}>
                    <CheckCircle className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h4 className="text-lg font-black font-mono text-white">Message Received</h4>
                  <p className="text-xs font-mono text-slate-500">
                    Your payload has been routed successfully. I&apos;ll respond within 24 hours.
                  </p>
                  <button onClick={() => { setStatus("idle"); setName(""); setEmail(""); setMessage(""); }}
                    className="px-6 py-2.5 rounded-xl text-xs font-mono border text-slate-400 hover:text-white hover:border-white/20 transition-all"
                    style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                    Send Another
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
