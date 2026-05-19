"use client";
import React from "react";
import { motion } from "framer-motion";
import { Brain, Database, Activity, ShieldCheck } from "lucide-react";

const capabilities = [
    {
        title: "Semantic Retrieval Ready",
        description: "Architecting pgvector and Redis persistent layers optimized for high-speed embedding management and hybrid search.",
        icon: <Database className="h-5 w-5" />
    },
    {
        title: "ML-Ready Ingestion",
        description: "Designing event-driven Kafka streams to preprocess and feed high-velocity transactional data to inference engines.",
        icon: <Activity className="h-5 w-5" />
    },
    {
        title: "Inference Orchestration",
        description: "Building resilient Spring Boot backends with circuit breakers to manage unpredictable LLM latency.",
        icon: <Brain className="h-5 w-5" />
    },
    {
        title: "PHI-Safe Preprocessing",
        description: "Implementing HIPAA-compliant de-identification and filtering layers for healthcare data prior to ML consumption.",
        icon: <ShieldCheck className="h-5 w-5" />
    }
];

export const AICapability = () => {
    return (
        <section id="ai" className="bg-muted/30 border-t border-border/50">
            <div className="container-tight section-padding">
                <div className="mb-12">
                    <span className="mono-label">Intelligent Infrastructure</span>
                    <h2 className="text-3xl font-bold tracking-tight">AI-Ready Systems Capability</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {capabilities.map((cap, idx) => (
                        <motion.div
                            key={cap.title}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-card border border-border flex items-start space-x-4 group"
                        >
                            <div className="p-3 rounded-xl bg-primary/5 text-primary shrink-0 transition-colors group-hover:bg-primary/10">
                                {cap.icon}
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-[15px] font-bold text-foreground">{cap.title}</h4>
                                <p className="text-[13px] text-muted-foreground leading-relaxed italic">
                                    {cap.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                {/* Visual Accent */}
                <div className="mt-12 p-6 rounded-xl border border-dashed border-border bg-muted/50 text-center">
                    <p className="text-[11px] font-mono font-bold text-muted-foreground uppercase tracking-[0.2em]">
                        Engineering the Persistent Layers & Data Pipelines for Production Intelligence
                    </p>
                </div>
            </div>
        </section>
    );
};
