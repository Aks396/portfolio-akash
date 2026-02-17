"use client";

import { motion } from "framer-motion";
import { Section } from "./ui/Section";
import { Zap, Shield, Lock, Share2, AlertCircle, RefreshCcw } from "lucide-react";

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
                    <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-border relative overflow-hidden group shadow-2xl transition-colors duration-500">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Zap className="h-24 w-24" />
                        </div>
                        <div className="flex items-center space-x-6">
                            <motion.div
                                whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.8)" }}
                                className="w-16 h-16 rounded-xl border border-primary/50 flex items-center justify-center text-[10px] font-mono bg-primary/5 shadow-inner"
                            >
                                APP
                            </motion.div>

                            <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent relative">
                                {[0, 1, 2].map((i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ left: "0%" }}
                                        animate={{ left: "100%" }}
                                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.6, ease: "linear" }}
                                        className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary blur-[1px]"
                                    />
                                ))}
                            </div>

                            <motion.div
                                animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 0px var(--accent)", "0 0 20px var(--accent)", "0 0 0px var(--accent)"] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="p-4 border-2 border-accent rounded-full text-accent font-bold text-xs bg-accent/5 z-10"
                            >
                                KAFKA CLUSTER
                            </motion.div>

                            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary/50 relative">
                                {[0, 1, 2].map((i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ left: "0%" }}
                                        animate={{ left: "100%" }}
                                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
                                        className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary/80 blur-[1px]"
                                    />
                                ))}
                            </div>

                            <div className="grid grid-cols-1 gap-2">
                                <motion.div
                                    whileHover={{ scale: 1.1, x: 5 }}
                                    className="w-12 h-6 border border-border rounded text-[8px] flex items-center justify-center bg-muted/50"
                                >
                                    WORKER 1
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.1, x: 5 }}
                                    className="w-12 h-6 border border-border rounded text-[8px] flex items-center justify-center bg-muted/50"
                                >
                                    WORKER 2
                                </motion.div>
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
