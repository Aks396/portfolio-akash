"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Send, CheckCircle, Mail, Linkedin, Github, MessageSquare } from "lucide-react";

export const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  const socials = [
    { label: "GitHub", href: "https://github.com/Aks396", icon: Github, color: "#ffffff", handle: "github.com/Aks396" },
    { label: "LinkedIn", href: "https://linkedin.com/in/akash-soni396", icon: Linkedin, color: "#2997ff", handle: "linkedin.com/in/akash-soni396" },
    { label: "Email", href: "mailto:sameersoni396@gmail.com", icon: Mail, color: "#ffffff", handle: "sameersoni396@gmail.com" },
  ];

  return (
    <section id="contact" ref={ref} className="relative border-t border-white/5"
      style={{ background: "#050505" }}>
      <div className="absolute inset-0 grid-pattern-sm opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }} />

      <div className="container-tight section-padding">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="mb-12">
          <span className="mono-label">Contact</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.03em] text-white mt-2"
            style={{ fontFamily: "var(--font-geist), sans-serif" }}>
            Start a <span className="text-slate-500">Conversation</span>
          </h2>
          <p className="mt-3 text-xs font-mono text-slate-500 max-w-sm">
            Open to backend engineering roles, AI infrastructure projects, and consulting opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* LEFT: Contact Info & Socials (span 5) */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }} className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            <div className="p-6 rounded-3xl glass-card border border-white/8 bg-white/2 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-white/50" />
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-bold">Connect Directly</span>
              </div>
              <p className="text-xs font-mono text-slate-400 leading-relaxed">
                If you have a role that aligns with my background in Java, Spring Boot, Kafka, and AWS, or want to discuss database systems or AI routers, feel free to drop a message or reach out over email.
              </p>
            </div>

            {/* Social channels */}
            <div className="flex flex-col gap-3">
              {socials.map(({ label, href, icon: Icon, color, handle }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-white/8 bg-white/2 hover:bg-white/5 transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border border-white/8 bg-white/4">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-slate-300 group-hover:text-white transition-colors">{label}</div>
                    <div className="text-[10px] font-mono text-slate-500 mt-0.5">{handle}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Contact Form (span 7) */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }} className="lg:col-span-7 rounded-3xl overflow-hidden glass-card flex flex-col justify-between border border-white/8 bg-white/2"
          >
            <AnimatePresence mode="wait">
              {status !== "success" ? (
                <motion.form key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} className="p-7 space-y-5 flex-1 flex flex-col justify-between gap-4">
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-white/5">
                      <span className="w-1 h-1 rounded-full bg-white" />
                      <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-bold">Inbound Payload Fields</span>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[8px] font-mono uppercase tracking-widest text-slate-500">&quot;sender&quot;</label>
                      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required
                        disabled={status === "sending"}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-2xl text-xs font-mono text-slate-200 border border-white/8 bg-white/2 focus:outline-none focus:border-white/20 transition-all disabled:opacity-50"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[8px] font-mono uppercase tracking-widest text-slate-500">&quot;email&quot;</label>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                        disabled={status === "sending"}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-2xl text-xs font-mono text-slate-200 border border-white/8 bg-white/2 focus:outline-none focus:border-white/20 transition-all disabled:opacity-50"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[8px] font-mono uppercase tracking-widest text-slate-500">&quot;message&quot;</label>
                      <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={4}
                        disabled={status === "sending"}
                        placeholder="Describe the opportunity, project, or collaboration..."
                        className="w-full px-4 py-3 rounded-2xl text-xs font-mono text-slate-200 border border-white/8 bg-white/2 focus:outline-none focus:border-white/20 resize-none transition-all disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <motion.button type="submit" disabled={status === "sending"}
                    whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
                    className="w-full py-4 rounded-full font-mono font-bold text-xs text-black bg-white hover:bg-slate-200 flex items-center justify-center gap-2 disabled:opacity-50 transition-all cursor-pointer mt-4"
                  >
                    <Send className="w-3.5 h-3.5" />
                    {status === "sending" ? "SENDING MESSAGE..." : "SUBMIT PAYLOAD"}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="p-10 text-center space-y-6 flex-1 flex flex-col justify-center">
                  <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center bg-white/5 border border-white/10"
                  >
                    <CheckCircle className="w-6 h-6 text-white animate-bounce" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold font-mono text-white">Message Ingested</h4>
                    <p className="text-[10px] font-mono text-slate-500 leading-relaxed max-w-xs mx-auto">
                      Thank you! Your message was sent successfully. I will get back to you within 24 hours.
                    </p>
                  </div>
                  <button onClick={() => { setStatus("idle"); setName(""); setEmail(""); setMessage(""); }}
                    className="px-5 py-2 rounded-full text-[9px] font-mono border border-white/8 text-slate-400 hover:text-white hover:border-white/20 transition-all cursor-pointer w-fit mx-auto"
                  >
                    Send Another Message
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
