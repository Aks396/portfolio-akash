"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Server, Shield, Database, Activity, Cpu, ArrowRight, Share2, Layers } from "lucide-react";

interface Node {
    id: string;
    title: string;
    description: string;
    tech: string;
    icon: React.ReactNode;
    status: "healthy" | "active" | "standby";
    details: string[];
}

const nodes: Node[] = [
    {
        id: "client",
        title: "Client Layer",
        description: "React / Next.js / TypeScript App",
        tech: "React 19 & HTTPS",
        icon: <Layers className="h-5 w-5" />,
        status: "healthy",
        details: [
            "Framer-motion smooth client-side interactions",
            "Responsive dashboard UI tailored for healthcare & SaaS operations",
            "Encrypted API keys and secure session authorization states"
        ]
    },
    {
        id: "gateway",
        title: "API Gateway Layer",
        description: "Spring Cloud Gateway / CORS & Rate Limiter",
        tech: "Spring Boot Gateway & WebFlux",
        icon: <Share2 className="h-5 w-5" />,
        status: "active",
        details: [
            "Centralized request routing with sub-5ms routing overhead",
            "Rate limiting based on Redis Token Bucket algorithm",
            "Dynamic path rewriting and CORS validation filters"
        ]
    },
    {
        id: "auth",
        title: "Auth & Security (JWT)",
        description: "Spring Security / Encrypted Key Rotation",
        tech: "JWT & Spring Security",
        icon: <Shield className="h-5 w-5" />,
        status: "healthy",
        details: [
            "Role-Based Access Control (RBAC) validations per organization",
            "Asymmetric signing key vaults and secure JWT validations",
            "Encrypted connection parameters with AES-256 standards"
        ]
    },
    {
        id: "kafka",
        title: "Kafka Event Broker",
        description: "Pub/Sub Streaming Broker",
        tech: "Apache Kafka & Confluent",
        icon: <Activity className="h-5 w-5" />,
        status: "active",
        details: [
            "Event-driven topics: 'clinical_events', 'audit_reports'",
            "Optimized partitions for zero-loss message processing",
            "Guaranteed low-latency message streaming backbones"
        ]
    },
    {
        id: "microservice",
        title: "FHIR Interoperability Core",
        description: "Spring Boot Microservice Cluster",
        tech: "Spring Boot 3 & Java 17",
        icon: <Server className="h-5 w-5" />,
        status: "healthy",
        details: [
            "FHIR R4 standard parser for secure EHR data exchange",
            "Asynchronous processing utilizing virtual thread integrations",
            "HikariCP optimized connection pool checkout (<2ms average)"
        ]
    },
    {
        id: "redis",
        title: "Redis Distributed Cache",
        description: "Caching Layer & Session State",
        tech: "Redis Cluster",
        icon: <Cpu className="h-5 w-5" />,
        status: "active",
        details: [
            "Inference results and hot clinical keys lookup caching",
            "Sub-millisecond data query responses",
            "Distributed locking mechanisms to prevent concurrency races"
        ]
    },
    {
        id: "database",
        title: "Persistent Databases",
        description: "PostgreSQL & MySQL Cluster",
        tech: "PostgreSQL & MySQL",
        icon: <Database className="h-5 w-5" />,
        status: "healthy",
        details: [
            "Multi-tenant database schema isolation per client organization",
            "Optimized query structures with B-Tree and GIST vector indexing",
            "Highly available clusters with auto-replication configurations"
        ]
    }
];

export const SystemArchitecture = () => {
    const [selectedNode, setSelectedNode] = useState<Node>(nodes[3]); // Default to Kafka

    return (
        <section id="systems" className="bg-background relative border-t border-border/50">
            <div className="absolute inset-0 grid-pattern opacity-[0.1] -z-10" />
            <div className="container-tight section-padding">
                <div className="mb-12">
                    <span className="mono-label">Interactive Infrastructure</span>
                    <h2 className="text-3xl font-bold tracking-tight">Enterprise Distributed Systems</h2>
                    <p className="text-sm text-muted-foreground mt-2 font-mono">
                        Visualizing how request data routes through the secure, high-throughput backend architecture.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Visual Node Diagram (span 8) */}
                    <div className="lg:col-span-8 p-6 rounded-2xl bg-card border border-border flex flex-col space-y-8 relative overflow-hidden">
                        <div className="flex justify-between items-center pb-4 border-b border-border/40 text-xs font-mono text-muted-foreground">
                            <span>SYSTEM SCHEMATIC // PROD ENV</span>
                            <span className="flex items-center space-x-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-success animate-pulse" />
                                <span className="text-foreground">ONLINE & SECURE</span>
                            </span>
                        </div>

                        {/* Flex Graph Representation */}
                        <div className="flex flex-col space-y-6 md:space-y-0 md:grid md:grid-cols-3 gap-6 relative">
                            {/* Connector SVG Line Overlay (Desktop only) */}
                            <div className="hidden md:block absolute inset-0 pointer-events-none -z-10">
                                <svg className="w-full h-full" style={{ minHeight: "350px" }}>
                                    {/* Line Client -> Gateway */}
                                    <line x1="16.6%" y1="15%" x2="50%" y2="15%" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="2" strokeDasharray="4 4" />
                                    {/* Line Gateway -> Auth */}
                                    <line x1="50%" y1="15%" x2="83.3%" y2="15%" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="2" />
                                    {/* Line Gateway -> Kafka */}
                                    <line x1="50%" y1="15%" x2="50%" y2="50%" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2" />
                                    {/* Line Kafka -> Microservice */}
                                    <line x1="50%" y1="50%" x2="16.6%" y2="50%" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="2" />
                                    {/* Line Microservice -> Redis */}
                                    <line x1="16.6%" y1="50%" x2="16.6%" y2="85%" stroke="rgba(14, 165, 233, 0.3)" strokeWidth="2" />
                                    {/* Line Microservice -> DB */}
                                    <line x1="16.6%" y1="50%" x2="50%" y2="85%" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="2" />
                                </svg>
                            </div>

                            {/* Node Widgets */}
                            {nodes.map((node) => {
                                const isSelected = selectedNode.id === node.id;
                                return (
                                    <motion.div
                                        key={node.id}
                                        whileHover={{ scale: 1.03 }}
                                        onClick={() => setSelectedNode(node)}
                                        className={`p-4 rounded-xl border cursor-pointer transition-all ${
                                            isSelected
                                                ? "bg-primary/5 border-primary shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                                                : "bg-card border-border hover:border-muted-foreground/40"
                                        } flex items-start space-x-3`}
                                    >
                                        <div className={`p-2 rounded-lg shrink-0 ${
                                            isSelected ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                                        }`}>
                                            {node.icon}
                                        </div>
                                        <div className="space-y-1 min-w-0">
                                            <div className="flex items-center space-x-2">
                                                <h4 className="text-xs font-bold text-foreground truncate">{node.title}</h4>
                                                <span className={`w-1.5 h-1.5 rounded-full ${
                                                    node.status === "active" ? "bg-accent animate-pulse" : node.status === "healthy" ? "bg-success" : "bg-warning"
                                                }`} />
                                            </div>
                                            <p className="text-[10px] text-muted-foreground font-mono truncate">{node.tech}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Interactive Data Flow Simulation */}
                        <div className="p-4 rounded-xl bg-slate-950 border border-border/40 font-mono text-[10px] text-slate-400 space-y-1 relative">
                            <span className="absolute top-2 right-2 text-[8px] text-primary font-bold">SIMULATION ACTIVE</span>
                            <p className="text-primary-400">// Dynamic Flow Log</p>
                            <div className="h-[60px] overflow-y-auto no-scrollbar space-y-0.5">
                                <p><span className="text-slate-500">[17:21:05.120]</span> GET /api/v1/fhir/patient/1209 - Incoming Client Request</p>
                                <p className="text-success-400"><span className="text-slate-500">[17:21:05.122]</span> AUTH OK - JWT Validated. User Organization ID: TataElxsi_H1</p>
                                <p className="text-accent-400"><span className="text-slate-500">[17:21:05.123]</span> CACHE HIT - Redis key Lookup (patient_1209) returned in 0.45ms</p>
                                <p className="text-slate-500"><span className="text-slate-500">[17:21:05.124]</span> PUBLISHING Event - Topic: 'system_logs' Partition: 2</p>
                            </div>
                        </div>
                    </div>

                    {/* Node Details Panel (span 4) */}
                    <div className="lg:col-span-4 p-6 rounded-2xl bg-card border border-border space-y-6 lg:sticky lg:top-24">
                        <div className="flex items-center justify-between pb-4 border-b border-border/40">
                            <div>
                                <span className="text-[9px] font-mono text-primary font-bold uppercase tracking-widest">Node Properties</span>
                                <h3 className="text-lg font-bold">{selectedNode.title}</h3>
                            </div>
                            <span className="p-2 rounded-lg bg-primary/5 text-primary">
                                {selectedNode.icon}
                            </span>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h5 className="text-[10px] font-mono uppercase text-muted-foreground">Framework / Infrastructure</h5>
                                <p className="text-xs font-mono font-bold text-foreground mt-1">{selectedNode.tech}</p>
                            </div>

                            <div>
                                <h5 className="text-[10px] font-mono uppercase text-muted-foreground">Functional Objective</h5>
                                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{selectedNode.description}</p>
                            </div>

                            <div className="space-y-2">
                                <h5 className="text-[10px] font-mono uppercase text-muted-foreground">Architectural Specifications</h5>
                                <ul className="space-y-2">
                                    {selectedNode.details.map((detail, index) => (
                                        <li key={index} className="flex items-start text-[11px] leading-relaxed text-slate-300">
                                            <span className="text-primary mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
