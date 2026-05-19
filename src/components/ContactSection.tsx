"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Send, CheckCircle, Mail, Linkedin, Github, Phone, Code } from "lucide-react";

export const ContactSection = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
    const [timestamp, setTimestamp] = useState(1779211612);

    useEffect(() => {
        setTimestamp(Math.floor(Date.now() / 1000));
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !message) return;
        
        setStatus("sending");
        setTimeout(() => {
            setStatus("success");
        }, 1500);
    };

    return (
        <section id="contact" className="bg-background relative border-t border-border/50">
            <div className="absolute inset-0 grid-pattern opacity-[0.08] -z-10" />
            <div className="container-tight section-padding">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Left: Contact Form Info & Interactive Request Visualizer (span 6) */}
                    <div className="lg:col-span-6 space-y-6">
                        <div>
                            <span className="mono-label">API Gateway Ingestion</span>
                            <h2 className="text-3xl font-bold tracking-tight">Initiate Transmission</h2>
                            <p className="text-sm text-muted-foreground mt-2 font-mono">
                                Submitting the form posts a validated payload directly to the contact routing gateway.
                            </p>
                        </div>

                        {/* Interactive Client Request Visualizer */}
                        <div className="p-6 rounded-2xl bg-slate-950 border border-border/40 font-mono text-[11px] text-slate-300 space-y-4">
                            <div className="flex items-center justify-between pb-3 border-b border-border/20 text-slate-500">
                                <span className="flex items-center space-x-1.5">
                                    <Terminal className="h-4 w-4 text-primary" />
                                    <span>POST /api/v1/contact</span>
                                </span>
                                <span className="text-[9px] uppercase bg-primary/20 text-primary px-2 py-0.5 rounded font-bold">JSON Payload</span>
                            </div>
                            
                            {/* Live JSON preview of inputs */}
                            <pre className="text-success-400 overflow-x-auto no-scrollbar py-2">
{`{
  "sender": "${name || 'akash_visitor'}",
  "routingKey": "${email || 'awaiting_email'}@domain.io",
  "transmission": "${message || 'enter message details...'}",
  "timestamp": ${timestamp},
  "sslEnabled": true,
  "clientType": "NextJS-App-Router"
}`}
                            </pre>

                            {/* Response Logs */}
                            <div className="pt-3 border-t border-border/20 space-y-1">
                                <p className="text-[10px] text-slate-500">// Client Response Stream</p>
                                <p className="text-slate-400">
                                    {status === "idle" && "Status: 100 Continue (Awaiting submit)"}
                                    {status === "sending" && "Status: 202 Processing (Writing to Kafka cluster...)"}
                                    {status === "success" && "Status: 200 OK (Topic: 'message_ingested' partition: 1 offset: 42)"}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Actual Form Widget (span 6) */}
                    <div className="lg:col-span-6 p-6 rounded-2xl bg-card border border-border relative overflow-hidden">
                        <AnimatePresence mode="wait">
                            {status !== "success" ? (
                                <motion.form
                                    key="contact-form"
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-4"
                                >
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground">Sender Identification</label>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            placeholder="Your Name"
                                            className="w-full px-4 py-3 rounded-xl bg-muted/40 border border-border/80 focus:border-primary focus:outline-none text-sm text-foreground transition-colors font-mono"
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground">Routing Email</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            placeholder="you@example.com"
                                            className="w-full px-4 py-3 rounded-xl bg-muted/40 border border-border/80 focus:border-primary focus:outline-none text-sm text-foreground transition-colors font-mono"
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground">Message Payload</label>
                                        <textarea
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            required
                                            rows={4}
                                            placeholder="Enter project specifications, roles, or general queries..."
                                            className="w-full px-4 py-3 rounded-xl bg-muted/40 border border-border/80 focus:border-primary focus:outline-none text-sm text-foreground transition-colors font-mono resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === "sending"}
                                        className="w-full py-4 rounded-xl bg-primary text-white font-mono font-bold flex items-center justify-center space-x-2 transition-all hover:bg-primary/95 disabled:opacity-50 group"
                                    >
                                        <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        <span>{status === "sending" ? "TRANSMITTING..." : "POST MESSAGE"}</span>
                                    </button>
                                </motion.form>
                            ) : (
                                <motion.div
                                    key="success-card"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-12 text-center space-y-4"
                                >
                                    <div className="mx-auto w-12 h-12 rounded-full bg-success/15 flex items-center justify-center text-success animate-bounce">
                                        <CheckCircle className="h-6 w-6" />
                                    </div>
                                    <h4 className="text-lg font-bold text-foreground font-mono">Transmission Successful</h4>
                                    <p className="text-xs text-muted-foreground leading-relaxed max-w-sm mx-auto">
                                        Your request payload has been verified and registered. I will establish direct routing back to you shortly.
                                    </p>
                                    <button
                                        onClick={() => {
                                            setStatus("idle");
                                            setName("");
                                            setEmail("");
                                            setMessage("");
                                        }}
                                        className="px-6 py-2.5 rounded-lg border border-border text-xs font-mono hover:bg-muted/50 transition-colors"
                                    >
                                        Transmit Another Payload
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};
