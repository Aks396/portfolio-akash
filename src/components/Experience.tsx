"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Activity, Cpu, Database, AlertCircle, CheckCircle2 } from "lucide-react";

const achievements = [
    "Architected scalable microservices-based backend systems using Java and Spring Boot, improving service modularity and reducing cross-service dependencies by 40%.",
    "Engineered high-throughput RESTful APIs and API gateway integrations, increasing system throughput by 30% while reducing API latency by 25% under peak load conditions.",
    "Optimized backend application performance by 45% through asynchronous processing, Kafka-based event pipelines, query optimization, and refactoring legacy services.",
    "Implemented caching strategies (Redis) and optimized database interactions for low-latency API responses and improved backend scalability.",
    "Developed secure authentication and authorization workflows using JWT and Spring Security for enterprise-grade healthcare platforms.",
    "Increased automated test coverage from below 50% to 77% using JUnit, Mockito, and TestNG, reducing production defects by 20%.",
    "Collaborated with DevOps teams to implement CI/CD pipelines using Jenkins, Docker, and GitHub Actions workflows, improving deployment reliability and reducing deployment failures by 30%.",
    "Integrated third-party healthcare APIs and real-time data services enabling seamless interoperability across distributed healthcare ecosystems.",
    "Participated in production support, debugging, performance tuning, and monitoring activities for scalable distributed systems deployed in enterprise environments."
];

const tags = [
    "Java", "Spring Boot", "Kafka", "Redis", "AWS", "Docker", "Jenkins", "JUnit", "Spring Security", "TDD"
];

export const Experience = () => {
    const [currentTime, setCurrentTime] = useState("");
    
    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString());
        };
        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="experience" className="bg-background relative border-t border-border/50">
            <div className="absolute inset-0 grid-pattern opacity-[0.06] -z-10" />
            <div className="container-tight section-padding">
                <div className="mb-12">
                    <span className="mono-label">Professional History</span>
                    <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
                    <p className="text-sm text-muted-foreground mt-2 font-mono">
                        Detailed roles, responsibilities, and runtime production telemetry.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Role description & Bullet points (span 8) */}
                    <div className="lg:col-span-8 p-6 rounded-2xl bg-card border border-border space-y-6">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center pb-4 border-b border-border/40 gap-2">
                            <div>
                                <span className="text-[10px] font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">
                                    JAN 2023 — PRESENT
                                </span>
                                <h3 className="text-xl font-bold text-foreground mt-2">Software Developer (Backend Engineering)</h3>
                                <p className="text-xs font-mono text-primary font-medium">Tata Elxsi Ltd.</p>
                            </div>
                        </div>

                        <ul className="space-y-4">
                            {achievements.map((item, i) => (
                                <li key={i} className="flex items-start text-xs leading-relaxed text-slate-300">
                                    <span className="text-primary mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-4 border-t border-border/40">
                            {tags.map((tag) => (
                                <span key={tag} className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right: Telemetry Dashboard widget (span 4) */}
                    <div className="lg:col-span-4 p-6 rounded-2xl bg-card border border-border lg:sticky lg:top-24 space-y-6">
                        <div className="flex justify-between items-center pb-3 border-b border-border/40 text-[10px] font-mono text-slate-500">
                            <span>JVM RUNTIME METRICS</span>
                            <span>{currentTime || "ACTIVE"}</span>
                        </div>

                        {/* Telemetry rows */}
                        <div className="space-y-4 font-mono text-[10px] text-slate-400">
                            <div className="p-3 rounded-lg bg-slate-950 border border-border/20 flex items-center justify-between">
                                <span className="text-slate-500">SERVICE SLA</span>
                                <span className="font-bold text-success flex items-center">
                                    <CheckCircle2 className="h-3.5 w-3.5 mr-1 text-success shrink-0" />
                                    99.99% UP
                                </span>
                            </div>

                            <div className="p-3 rounded-lg bg-slate-950 border border-border/20 flex items-center justify-between">
                                <span className="text-slate-500">AVG SERVICE LATENCY</span>
                                <span className="font-bold text-foreground">24 ms</span>
                            </div>

                            <div className="p-3 rounded-lg bg-slate-950 border border-border/20 flex items-center justify-between">
                                <span className="text-slate-500">THROUGHPUT RATE</span>
                                <span className="font-bold text-white flex items-center">
                                    <Activity className="h-3.5 w-3.5 text-primary mr-1 shrink-0 animate-pulse" />
                                    12,420 rps
                                </span>
                            </div>

                            {/* Heap Usage visual slider */}
                            <div className="p-3 rounded-lg bg-slate-950 border border-border/20 space-y-2">
                                <div className="flex justify-between text-slate-500">
                                    <span>JVM HEAP MEMORY</span>
                                    <span>2.4 GB / 4.0 GB</span>
                                </div>
                                <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
                                    <div className="bg-primary h-full rounded-full" style={{ width: "60%" }} />
                                </div>
                            </div>

                            {/* Active Threads */}
                            <div className="p-3 rounded-lg bg-slate-950 border border-border/20 space-y-1">
                                <div className="flex justify-between text-slate-500">
                                    <span>ACTIVE VIRTUAL THREADS</span>
                                    <span className="text-foreground font-bold">142 Active</span>
                                </div>
                            </div>
                        </div>

                        <div className="text-[9px] font-mono text-slate-500 text-center leading-relaxed">
                            Telemetry sync: Connected securely over SSL to cluster deployment.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
