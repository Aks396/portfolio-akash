"use client";

import { motion } from "framer-motion";
import { Section } from "./ui/Section";
import { Zap, Shield, Lock, Share2, AlertCircle, RefreshCcw } from "lucide-react";

export const StreamingSecuritySection = () => {
    return (
        <Section id="security" className="relative group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Streaming Section */}
                <div className="space-y-8">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="p-3 w-fit rounded-full border border-white/8 bg-white/4 text-white shrink-0"
                    >
                        <Zap className="h-6 w-6" />
                    </motion.div>
                    <h3 className="text-3xl font-extrabold tracking-tight text-white"
                        style={{ fontFamily: "var(--font-geist), sans-serif" }}>
                        Data Streaming &amp; <span className="text-slate-500">Event-Driven Design</span>
                    </h3>
                    <p className="text-xs text-slate-400 font-mono leading-relaxed">
                        Architecting real-time event streaming pipelines using the <span className="text-white font-bold">Apache Kafka ecosystem</span>. Focused on low-latency decoupled publishing and highly resilient message processing.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="mt-1 p-2 rounded-xl border border-white/8 bg-white/2">
                                <Share2 className="h-4 w-4 text-slate-400" />
                            </div>
                            <div>
                                <h5 className="font-bold text-xs font-mono text-white">Kafka-Based Decoupling</h5>
                                <p className="text-[11px] text-slate-500 leading-relaxed mt-1">Decoupling microservices to safeguard data pipeline ingestion threads during peak traffic spikes.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="mt-1 p-2 rounded-xl border border-white/8 bg-white/2">
                                <RefreshCcw className="h-4 w-4 text-slate-400" />
                            </div>
                            <div>
                                <h5 className="font-bold text-xs font-mono text-white">Asynchronous Task Handlers</h5>
                                <p className="text-[11px] text-slate-500 leading-relaxed mt-1">Delegating heavy document scanning and validation payloads to background thread consumers.</p>
                            </div>
                        </div>
                    </div>

                    {/* Visualizing Kafka Flow */}
                    <div className="p-8 rounded-3xl glass-card relative overflow-hidden group border border-white/8 bg-white/2">
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <Zap className="h-32 w-32 text-white" />
                        </div>

                        <div className="flex flex-col space-y-12 relative z-10">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col items-center space-y-2">
                                    <div className="w-8 h-8 rounded-full border border-white/8 bg-white/4 flex items-center justify-center text-[10px] font-mono text-white">PROD</div>
                                    <span className="text-[8px] font-mono text-slate-600">Publisher</span>
                                </div>

                                <div className="flex-1 px-4">
                                    <div className="h-1 bg-white/10 rounded-full relative overflow-hidden">
                                        <motion.div
                                            animate={{ x: ["-100%", "100%"] }}
                                            transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
                                            className="absolute top-0 left-0 w-1/3 h-full bg-white/30"
                                        />
                                    </div>
                                    <div className="text-[7.5px] font-mono text-slate-600 text-center mt-1">Topic: articles_publish</div>
                                </div>

                                <div className="grid grid-cols-1 gap-2">
                                    <div className="px-3 py-1.5 border border-white/8 rounded-xl text-[9px] font-mono flex flex-col items-center justify-center bg-white/2">
                                        <div className="text-green-400 text-[8px] font-bold">ACTIVE</div>
                                        <div className="text-white">CONS-1</div>
                                    </div>
                                    <div className="px-3 py-1.5 border border-white/8 rounded-xl text-[9px] font-mono flex flex-col items-center justify-center bg-white/2">
                                        <div className="text-green-400 text-[8px] font-bold">ACTIVE</div>
                                        <div className="text-white">CONS-2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Security Section */}
                <div className="space-y-8 glass-card p-8 rounded-3xl border border-white/8 bg-white/2 relative overflow-hidden flex flex-col justify-between">
                    <div>
                        <div className="absolute top-4 right-4">
                            <Shield className="h-4 w-4 text-white/50 animate-pulse" />
                        </div>

                        <div className="p-3 w-fit rounded-full border border-white/8 bg-white/4 text-white mb-6">
                            <Lock className="h-6 w-6" />
                        </div>
                        <h3 className="text-3xl font-extrabold tracking-tight text-white"
                            style={{ fontFamily: "var(--font-geist), sans-serif" }}>
                            Security-First <span className="text-slate-500">Architecture</span>
                        </h3>
                        <p className="text-xs text-slate-400 font-mono leading-relaxed mt-4">
                            Uncompromising commitment to system authentication rules. Implementation of OAuth2, structured token signing, and secure PII compliance patterns.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 rounded-2xl border border-white/5 bg-black/40 flex flex-col space-y-2">
                            <h6 className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Identity</h6>
                            <p className="text-[11px] font-bold font-mono text-white">JWT / Spring Security</p>
                            <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "95%" }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className="bg-white h-full"
                                />
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl border border-white/5 bg-black/40 flex flex-col space-y-2">
                            <h6 className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Standards</h6>
                            <p className="text-[11px] font-bold font-mono text-white">OAuth 2.0 / HIPAA</p>
                            <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "88%" }}
                                    transition={{ duration: 1, delay: 0.3 }}
                                    className="bg-white h-full"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="p-4 rounded-2xl border border-white/5 bg-black/50 text-[9px] font-mono text-slate-500 flex items-start space-x-2">
                        <AlertCircle className="w-3.5 h-3.5 text-slate-600 shrink-0 mt-0.5" />
                        <span>All interfaces comply with standard TLS encryption, sanitizing input data and stripping active cross-origin tokens.</span>
                    </div>
                </div>
            </div>
        </Section>
    );
};
