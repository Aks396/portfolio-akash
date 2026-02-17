"use client";

import { motion } from "framer-motion";
import { Section } from "./ui/Section";
import { Zap, Shield, Lock, Share2, AlertCircle, RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";

export const StreamingSecuritySection = () => {
    return (
        <Section id="systems" className="relative group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Streaming Section */}
                <div className="space-y-8">
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                        className="p-3 w-fit rounded-xl bg-accent/20 text-accent cursor-default shadow-lg shadow-accent/5"
                    >
                        <Zap className="h-8 w-8" />
                    </motion.div>
                    <h3 className="text-3xl font-bold tracking-tight">Data Streaming & Event-Driven Architecture</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        Architecting real-time healthcare data pipelines using the <span className="text-foreground font-semibold">Confluent & Kafka ecosystem</span>.
                        Focused on low-latency transmission of patient vitals and async processing of intensive clinical workflows.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="mt-1 p-2 rounded-lg bg-muted border border-border">
                                <Share2 className="h-4 w-4" />
                            </div>
                            <div>
                                <h5 className="font-bold text-sm">Kafka-Based Interoperability</h5>
                                <p className="text-xs text-muted-foreground leading-relaxed mt-1">Decoupling microservices to ensure system resilience during peak traffic and hospital data bursts.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="mt-1 p-2 rounded-lg bg-muted border border-border">
                                <RefreshCcw className="h-4 w-4" />
                            </div>
                            <div>
                                <h5 className="font-bold text-sm">Async Clinical Workflows</h5>
                                <p className="text-xs text-muted-foreground leading-relaxed mt-1">Moving heavy document parsing and validation logic into background workers for sub-second API responses.</p>
                            </div>
                        </div>
                    </div>

                    {/* Visualizing Kafka Flow */}
                    <div className="p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-border relative overflow-hidden group shadow-2xl transition-all duration-500">
                        {/* Background Pulsing Grid */}
                        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none transition-colors"
                            style={{ backgroundImage: 'radial-gradient(var(--primary) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <Zap className="h-32 w-32" />
                        </div>

                        <div className="flex flex-col space-y-12 relative z-10">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col items-center space-y-2">
                                    <motion.div
                                        whileHover={{ scale: 1.1, borderColor: "var(--primary)" }}
                                        className="w-20 h-20 rounded-2xl border border-primary/30 flex flex-col items-center justify-center bg-primary/5 shadow-xl backdrop-blur-sm"
                                    >
                                        <div className="text-[10px] font-mono text-primary/60 mb-1">PRODUCER</div>
                                        <div className="font-bold text-xs uppercase tracking-tighter">API Source</div>
                                    </motion.div>
                                </div>

                                <div className="flex-1 flex flex-col justify-center space-y-4 px-4">
                                    {[0, 1, 2].map((path) => (
                                        <div key={path} className="h-px bg-gradient-to-r from-primary/40 to-accent/40 relative">
                                            {[0, 1, 2, 3].map((i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ left: "-10%" }}
                                                    animate={{ left: "110%" }}
                                                    transition={{
                                                        duration: 2.5 + path * 0.5,
                                                        repeat: Infinity,
                                                        delay: i * 0.8 + path * 0.3,
                                                        ease: "linear"
                                                    }}
                                                    className={cn(
                                                        "absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full blur-[1px] shadow-[0_0_8px_var(--primary)]",
                                                        path === 1 ? "bg-accent" : "bg-primary"
                                                    )}
                                                />
                                            ))}
                                            {path === 1 && (
                                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[8px] font-mono opacity-40 uppercase tracking-tighter text-center">
                                                    clinical_vitals
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="relative">
                                    <motion.div
                                        animate={{
                                            rotate: 360,
                                            boxShadow: ["0 0 20px rgba(14, 165, 233, 0.2)", "0 0 40px rgba(14, 165, 233, 0.4)", "0 0 20px rgba(14, 165, 233, 0.2)"]
                                        }}
                                        transition={{ rotate: { duration: 10, repeat: Infinity, ease: "linear" }, boxShadow: { duration: 2, repeat: Infinity } }}
                                        className="w-24 h-24 rounded-full border-2 border-dashed border-accent/40 p-2"
                                    />
                                    <motion.div
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center text-accent font-bold text-[10px] text-center px-2 leading-tight">
                                            KAFKA<br />CLUSTER
                                        </div>
                                    </motion.div>
                                </div>

                                <div className="flex-1 flex flex-col justify-center space-y-4 px-4">
                                    {[0, 1, 2].map((path) => (
                                        <div key={path} className="h-px bg-gradient-to-r from-accent/40 to-success/40 relative">
                                            {[0, 1, 2, 3].map((i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ left: "-10%" }}
                                                    animate={{ left: "110%" }}
                                                    transition={{
                                                        duration: 2 + path * 0.4,
                                                        repeat: Infinity,
                                                        delay: i * 0.7 + path * 0.2,
                                                        ease: "linear"
                                                    }}
                                                    className={cn(
                                                        "absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full blur-[1px] shadow-[0_0_8px_var(--success)]",
                                                        path === 1 ? "bg-success" : "bg-accent"
                                                    )}
                                                />
                                            ))}
                                        </div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-1 gap-3">
                                    <motion.div
                                        whileHover={{ scale: 1.1, x: 5 }}
                                        className="px-3 py-2 border border-border rounded-xl text-[10px] font-mono flex flex-col items-center justify-center bg-card shadow-lg"
                                    >
                                        <div className="text-success text-[8px] mb-1">ACTIVE</div>
                                        <div>CONS-1</div>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.1, x: 5 }}
                                        className="px-3 py-2 border border-border rounded-xl text-[10px] font-mono flex flex-col items-center justify-center bg-card shadow-lg"
                                    >
                                        <div className="text-success text-[8px] mb-1">ACTIVE</div>
                                        <div>CONS-2</div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Security Section */}
                <div className="space-y-8 bg-card p-10 rounded-3xl border border-border/50 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4">
                        <Shield className="h-6 w-6 text-primary animate-pulse" />
                    </div>

                    <div className="p-3 w-fit rounded-xl bg-primary/10 text-primary">
                        <Lock className="h-8 w-8" />
                    </div>
                    <h3 className="text-3xl font-bold tracking-tight">Security-First Engineering</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        Deep commitment to <span className="text-foreground font-semibold">HIPAA-aligned security</span>.
                        Implementation of enterprise authorization patterns and secure data handling.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <motion.div
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                            className="p-4 rounded-xl bg-muted/30 border border-border flex flex-col space-y-2 cursor-default transition-all shadow-sm hover:shadow-primary/5"
                        >
                            <h6 className="text-[10px] font-mono text-primary uppercase">Identity</h6>
                            <p className="text-xs font-bold font-mono">JWT / Spring Security</p>
                            <div className="w-full bg-border h-1 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "95%" }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className="bg-primary h-full"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                            className="p-4 rounded-xl bg-muted/30 border border-border flex flex-col space-y-2 cursor-default transition-all shadow-sm hover:shadow-primary/5"
                        >
                            <h6 className="text-[10px] font-mono text-primary uppercase">Data Encryption</h6>
                            <p className="text-xs font-bold font-mono">AES-256 / AWS KMS</p>
                            <div className="w-full bg-border h-1 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 1, delay: 0.4 }}
                                    className="bg-primary h-full"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                            className="p-4 rounded-xl bg-muted/30 border border-border flex flex-col space-y-2 cursor-default transition-all shadow-sm hover:shadow-primary/5"
                        >
                            <h6 className="text-[10px] font-mono text-primary uppercase">Best Practices</h6>
                            <p className="text-xs font-bold font-mono">OWASP / SonarQube</p>
                            <div className="w-full bg-border h-1 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "90%" }}
                                    transition={{ duration: 1, delay: 0.6 }}
                                    className="bg-primary h-full"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                            className="p-4 rounded-xl bg-muted/30 border border-border flex flex-col space-y-2 cursor-default transition-all shadow-sm hover:shadow-primary/5"
                        >
                            <h6 className="text-[10px] font-mono text-primary uppercase">Cloud Security</h6>
                            <p className="text-xs font-bold font-mono">IAM / VPC / Secrets</p>
                            <div className="w-full bg-border h-1 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "92%" }}
                                    transition={{ duration: 1, delay: 0.8 }}
                                    className="bg-primary h-full"
                                />
                            </div>
                        </motion.div>
                    </div>

                    <div className="pt-6 border-t border-border">
                        <div className="flex items-start space-x-3 text-warning">
                            <AlertCircle className="h-4 w-4 mt-0.5" />
                            <p className="text-[10px] font-mono uppercase tracking-tight">Focusing on preventing the Top 10 OWASP vulnerabilities in every architectural design.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
