"use client";

import { motion } from "framer-motion";
import { Section } from "./ui/Section";
import { Database, Server, ExternalLink, Activity, Layers, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
    {
        title: "Healthcare Microservices Ecosystem",
        role: "Lead Backend Engineer",
        impact: "99.99% Reliability | 40% Latency Reduction",
        description: "Designed and implemented a suite of Spring Boot microservices for high-volume patient data processing, focusing on HikariCP stability and PostgreSQL optimization.",
        tags: ["Spring Boot 3", "PostgreSQL", "AWS S3", "Docker"],
        icon: <Server className="h-6 w-6" />
    },
    {
        title: "FHIR R4 Interoperability Layer",
        role: "System Architect",
        impact: "HIPAA Compliant | Real-time Sync",
        description: "Architected a secure data exchange platform between hospitals and insurers using FHIR R4 standards and Kafka for event-driven synchronization.",
        tags: ["Kafka", "FHIR R4", "Java 17", "Spring Security"],
        icon: <Layers className="h-6 w-6" />
    },
    {
        title: "AI Medical Document Processor",
        role: "Full Stack Engineer",
        impact: "85% Automation Gain",
        description: "Built an intelligent processing pipeline for EDI 837 and UB-92 forms using multi-LLM configurations and queue-based backend architecture.",
        tags: ["LLM", "Python", "React", "RabbitMQ"],
        icon: <Terminal className="h-6 w-6" />
    }
];

export const ArchitectureSection = () => {
    return (
        <Section id="projects" className="bg-slate-950/50">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
                <div className="max-w-2xl">
                    <h2 className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-4">Engineering Portfolio</h2>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Enterprise Case Studies</h3>
                </div>
                <p className="text-muted-foreground font-mono text-xs uppercase tracking-widest">
                    Scroll to explore systems architecture
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/10"
                    >
                        {/* Hover Background Effect */}
                        <div className="absolute top-0 right-0 -z-10 w-32 h-32 bg-primary/5 blur-3xl rounded-full group-hover:bg-primary/20 transition-all duration-700 group-hover:scale-150" />

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
                                    <span className="text-primary mr-2">/</span> Stabilized database performance by optimizing connection wait times.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">/</span> Implemented complex query rewrites reducing execution time by 60%.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">/</span> Designed robust domain models for sensitive healthcare entities.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative aspect-video rounded-xl bg-slate-900 border border-border p-4 shadow-2xl overflow-hidden group">
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
