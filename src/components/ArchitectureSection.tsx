"use client";

import { motion } from "framer-motion";
import { Section } from "./ui/Section";
import { Database, Server, ExternalLink, Activity, Layers, Terminal, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
    {
        title: "Semantic Search Microservice Architecture",
        role: "Senior Backend Engineer",
        impact: "pgvector + Hybrid Search | 40% Latency Red.",
        description: "Architected a Java microservice acting as a RAG orchestration layer. Implemented dual-storage (PostgreSQL for metadata, Redis for vector caching) and integrated pgvector for high-dimensional document retrieval.",
        tags: ["Java 17", "Spring Boot", "pgvector", "Redis Cluster", "AWS ECS"],
        icon: <Layers className="h-6 w-6" />
    },
    {
        title: "Streaming Ingestion for Intelligent Analytics",
        role: "Distributed Systems Engineer",
        impact: "10k+ Events/Sec | Real-time ML Enrichment",
        description: "Built an event-driven Kafka pipeline to capture and enrich CDC events from MySQL with historical context from Redis, delivering ML-ready datasets to inference platforms with end-to-end encryption.",
        tags: ["Kafka", "Spring Cloud Stream", "Redis", "MySQL CDC", "AWS KMS"],
        icon: <Activity className="h-6 w-6" />
    },
    {
        title: "Healthcare Interoperability & PHI Security",
        role: "Backend Lead",
        impact: "HIPAA Compliant | 99.99% Reliability",
        description: "Designed secure, FHIR-compliant gateways with PHI-safe preprocessing layers. Optimized HikariCP and RDS schemas to ensure mission-critical availability for sensitive clinical data.",
        tags: ["Spring Boot", "FHIR R4", "PostgreSQL", "HIPAA", "Security"],
        icon: <Shield className="h-6 w-6" />
    }
];

export const ArchitectureSection = () => {
    return (
        <Section id="projects" className="bg-slate-50/50 dark:bg-slate-950/20 transition-colors duration-500">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
                <div className="max-w-2xl">
                    <h2 className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-4">Production Systems</h2>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Engineering Case Studies</h3>
                </div>
                <p className="text-muted-foreground font-mono text-xs uppercase tracking-widest">
                    Action Verb + System + Scale + Impact
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
                    >
                        {/* Hover Background Effect */}
                        <div className="absolute -top-24 -right-24 -z-10 w-48 h-48 bg-primary/10 blur-[80px] rounded-full group-hover:bg-primary/30 transition-all duration-700 group-hover:scale-110" />

                        <motion.div
                            whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                            className="mb-6 p-3 w-fit rounded-xl bg-primary/10 text-primary"
                        >
                            {project.icon}
                        </motion.div>

                        <div className="space-y-4">
                            <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h4>
                            <motion.p
                                initial={{ opacity: 0.8 }}
                                whileHover={{ opacity: 1, scale: 1.05 }}
                                className="text-xs font-bold text-success uppercase tracking-wider bg-success/10 w-fit px-2 py-1 rounded cursor-default"
                            >
                                Impact: {project.impact}
                            </motion.p>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {project.description}
                            </p>

                            <div className="pt-4 flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <motion.span
                                        key={tag}
                                        whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                                        className="text-[10px] font-mono border border-border px-2 py-1 rounded bg-muted/50 transition-colors"
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            </div>

                            <div className="pt-6 border-t border-border mt-auto">
                                <motion.button
                                    whileHover={{ x: 5 }}
                                    className="text-xs font-bold flex items-center text-primary group/link"
                                >
                                    View Architecture Diagram
                                    <ExternalLink className="ml-1 h-3 w-3 opacity-50 group-hover/link:opacity-100 transition-opacity" />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Production Engineering Highlights */}
            <div className="mt-20 p-8 rounded-3xl bg-primary/5 border border-primary/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center space-x-2 text-primary mb-4">
                            <Activity className="h-5 w-5" />
                            <span className="text-sm font-bold uppercase tracking-widest">Production Reliability</span>
                        </div>
                        <h4 className="text-2xl md:text-3xl font-bold mb-6">Database & Connection Pool Optimization</h4>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                Specialized in <span className="text-foreground font-semibold italic">HikariCP tuning</span> and
                                PostgreSQL/MySQL query optimization under high production load.
                            </p>
                            <ul className="space-y-3 font-mono text-xs">
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">/</span> Optimized Redis-based inference performance by 40% for retrieval-augmented systems.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">/</span> Architected Kafka CDC pipelines for real-time synchronization with vector databases.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">/</span> Provisioned scalable AWS infrastructure (SAA-C03) for high-burst ML data preprocessing.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">/</span> Implemented pgvector strategies for hybrid search combining relational + vector data.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative aspect-video rounded-xl bg-slate-100 dark:bg-slate-900 border border-border p-4 shadow-2xl overflow-hidden group transition-colors duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
                        <div className="relative font-mono text-[10px] space-y-1 text-primary-200 opacity-80 group-hover:opacity-100 transition-opacity">
                            <p className="text-muted-foreground">// HikariCP Tuning - Performance Logs</p>
                            <p>DEBUG com.zaxxer.hikari.pool.HikariPool - Pool stats (total=10, active=2, idle=8, waiting=0)</p>
                            <p className="text-success">INFO  o.s.b.c.e.t.TomcatWebServer - Tomcat started on port 443</p>
                            <p>Executing optimized query in 12ms...</p>
                            <p className="text-warning">WARN  Performance limit check: OK</p>
                            <p className="text-primary opacity-50">------------------------------------------</p>
                            <p className="text-primary opacity-50">SQL QUERY PLAN: Index Scan using idx_patient_id</p>
                            <p className="text-primary opacity-50">Execution Time: 0.045 ms</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
