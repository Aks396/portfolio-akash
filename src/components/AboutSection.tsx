"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Zap, Cpu, BarChart2, Star, Shield } from "lucide-react";

interface TimelineItem {
    year: string;
    role: string;
    org: string;
    description: string;
    icon: React.ReactNode;
    type: "work" | "edu";
}

const timeline: TimelineItem[] = [
    {
        year: "JAN 2023 — PRESENT",
        role: "Software Developer (Backend Engineering)",
        org: "Tata Elxsi Ltd.",
        description: "Designing microservices, asynchronous Kafka event pipelines, secure Spring Boot frameworks, and optimizing persistent data queries.",
        icon: <Briefcase className="h-4 w-4" />,
        type: "work"
    },
    {
        year: "2018 — 2022",
        role: "B.Tech in Information Technology (7.77 CGPA)",
        org: "Madhav Institute of Technology & Science (MITS)",
        description: "Studied core software systems engineering, relational databases, data structures, algorithms, and distributed computing models.",
        icon: <GraduationCap className="h-4 w-4" />,
        type: "edu"
    }
];

export const AboutSection = () => {
    const [activeTab, setActiveTab] = useState<"philosophy" | "metrics">("philosophy");

    return (
        <section id="about" className="bg-background relative border-t border-border/50">
            <div className="absolute inset-0 grid-pattern opacity-[0.06] -z-10" />
            
            <div className="container-tight section-padding">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    
                    {/* Left: Bio & Stats Cards (span 7) */}
                    <div className="lg:col-span-7 space-y-8">
                        <div>
                            <span className="mono-label">Architectural Identity</span>
                            <h2 className="text-3xl font-bold tracking-tight text-white">Engineering Scale & Reliability</h2>
                            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                                Bridging scalable core Java enterprise systems with cutting-edge AI orchestration layers.
                            </p>
                        </div>

                        {/* Engineering Metrics Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="p-4 rounded-xl bg-card border border-border/60 hover:border-primary/40 transition-colors">
                                <h4 className="text-2xl font-bold text-foreground font-mono">3.4+ Yrs</h4>
                                <p className="text-[10px] text-muted-foreground uppercase font-mono mt-1">Prod Experience</p>
                            </div>
                            <div className="p-4 rounded-xl bg-card border border-border/60 hover:border-primary/40 transition-colors">
                                <h4 className="text-2xl font-bold text-foreground font-mono">10+</h4>
                                <p className="text-[10px] text-muted-foreground uppercase font-mono mt-1">Backend Projects</p>
                            </div>
                            <div className="p-4 rounded-xl bg-card border border-border/60 hover:border-primary/40 transition-colors">
                                <h4 className="text-2xl font-bold text-foreground font-mono">99.9%</h4>
                                <p className="text-[10px] text-muted-foreground uppercase font-mono mt-1">API Reliability</p>
                            </div>
                            <div className="p-4 rounded-xl bg-card border border-border/60 hover:border-primary/40 transition-colors">
                                <h4 className="text-2xl font-bold text-foreground font-mono">+30%</h4>
                                <p className="text-[10px] text-muted-foreground uppercase font-mono mt-1">Throughput Gain</p>
                            </div>
                            <div className="p-4 rounded-xl bg-card border border-border/60 hover:border-primary/40 transition-colors">
                                <h4 className="text-2xl font-bold text-foreground font-mono">-25%</h4>
                                <p className="text-[10px] text-muted-foreground uppercase font-mono mt-1">Latency Reduced</p>
                            </div>
                            <div className="p-4 rounded-xl bg-card border border-border/60 hover:border-primary/40 transition-colors">
                                <h4 className="text-2xl font-bold text-foreground font-mono">-45%</h4>
                                <p className="text-[10px] text-muted-foreground uppercase font-mono mt-1">CPU Overhead Saved</p>
                            </div>
                        </div>

                        {/* Interactive Philosophy Panel */}
                        <div className="space-y-4">
                            <div className="flex border-b border-border/40">
                                <button
                                    onClick={() => setActiveTab("philosophy")}
                                    className={`pb-3 text-xs font-mono font-bold uppercase tracking-wider transition-colors border-b-2 ${
                                        activeTab === "philosophy" ? "text-primary border-primary" : "text-muted-foreground border-transparent hover:text-foreground"
                                    } mr-6`}
                                >
                                    Engineering Mindset
                                </button>
                                <button
                                    onClick={() => setActiveTab("metrics")}
                                    className={`pb-3 text-xs font-mono font-bold uppercase tracking-wider transition-colors border-b-2 ${
                                        activeTab === "metrics" ? "text-primary border-primary" : "text-muted-foreground border-transparent hover:text-foreground"
                                    }`}
                                >
                                    Target Core KPIs
                                </button>
                            </div>

                            <div className="min-h-[120px] text-sm text-muted-foreground leading-relaxed font-mono py-2">
                                {activeTab === "philosophy" ? (
                                    <div className="space-y-3">
                                        <p>
                                            &gt; I design microservices-based backends using Java and Spring Boot, focusing on loose coupling and clear boundaries.
                                        </p>
                                        <p>
                                            &gt; I prioritize asynchronous event pipelines (Kafka) and caching structures (Redis) to decouple slow systems and provide sub-millisecond query responses.
                                        </p>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="flex items-start space-x-2">
                                            <Zap className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                            <span>API response latency target: &lt; 50ms</span>
                                        </div>
                                        <div className="flex items-start space-x-2">
                                            <Cpu className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                            <span>Thread contention overhead: &lt; 2%</span>
                                        </div>
                                        <div className="flex items-start space-x-2">
                                            <BarChart2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                            <span>Unit testing statement coverage: &gt; 75%</span>
                                        </div>
                                        <div className="flex items-start space-x-2">
                                            <Shield className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                            <span>Zero-trust JWT authentication schemas</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right: Timeline (span 5) */}
                    <div className="lg:col-span-5 p-6 rounded-2xl bg-card border border-border space-y-6">
                        <div className="flex items-center justify-between pb-3 border-b border-border/40">
                            <span className="text-xs font-mono font-bold text-muted-foreground uppercase">Interactive Timeline</span>
                            <span className="text-[10px] text-primary font-mono">STATUS: ACTIVE</span>
                        </div>

                        <div className="relative pl-6 border-l border-border/60 space-y-8">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative space-y-2 group"
                                >
                                    {/* Icon badge */}
                                    <div className="absolute -left-[37px] top-0 p-1.5 rounded-full bg-card border border-border text-primary group-hover:border-primary transition-colors">
                                        {item.icon}
                                    </div>

                                    <div>
                                        <span className="text-[10px] font-mono text-muted-foreground bg-muted/60 px-2 py-0.5 rounded">
                                            {item.year}
                                        </span>
                                        <h4 className="text-sm font-bold text-foreground mt-2 group-hover:text-primary transition-colors">
                                            {item.role}
                                        </h4>
                                        <p className="text-xs font-mono text-primary/80 font-medium">
                                            {item.org}
                                        </p>
                                    </div>

                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
