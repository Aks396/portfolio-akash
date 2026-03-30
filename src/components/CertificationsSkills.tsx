"use client";
import React from "react";

import { motion } from "framer-motion";
import { Section } from "./ui/Section";
import { Award, CheckCircle2, Cloud, Database, Code, Globe, ShieldCheck } from "lucide-react";
import Image from "next/image";

const certifications = [
    {
        name: "AWS Solutions Architect Associate (SAA-C03)",
        issuer: "Amazon Web Services",
        date: "2024",
        icon: <Cloud className="h-5 w-5" />,
        validation: [
            "Cloud Architecture & Scalability",
            "Security & HIPAA Compliance",
            "Cost Optimization Patterns",
            "Disaster Recovery (High Availability)"
        ]
    },
    {
        name: "Confluent Certified Data Streaming Engineer",
        issuer: "Confluent",
        date: "2024",
        icon: <Database className="h-5 w-5" />,
        validation: ["Event-Driven Microservices", "Kafka Cluster Optimization"]
    }
];

const skills = [
    { 
        category: "Backend & Distributed Systems", 
        items: ["Java 17+", "Spring Boot 3", "Microservices", "System Design", "TDD", "gRPC", "CompletableFuture Performance"] 
    },
    { 
        category: "AI-Infrastructure (Support Layer)", 
        items: ["PostgreSQL (pgvector & Hybrid Search)", "Redis (Inference Caching & RAG)", "Semantic Retrieval Readiness", "Vector Storage Architecture", "Spring AI Orchestration", "PHI-Safe Preprocessing"] 
    },
    { 
        category: "Cloud & Data Streaming", 
        items: ["AWS (RDS, MSK, EKS, Lambda, VPC)", "Kafka (Streaming Backbone for ML)", "Confluent", "Docker", "CI/CD (Jenkins)"] 
    },
    { 
        category: "Compliance & Orchestration", 
        items: ["HIPAA-Compliant AI Pipelines", "FHIR R4 Interoperability", "Orchestrating AI-facing APIs", "JUnit", "SonarQube", "TypeScript"] 
    }
];

const CertificationItem = ({ cert }: { cert: typeof certifications[0] }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02, x: 5 }}
            className="p-6 rounded-2xl bg-card border border-border flex items-start space-x-4 shadow-lg hover:shadow-primary/5 transition-all group cursor-default"
        >
            <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                {cert.icon}
            </div>
            <div className="space-y-2">
                <div>
                    <h5 className="font-bold text-sm leading-tight group-hover:text-primary transition-colors">{cert.name}</h5>
                    <p className="text-[10px] text-muted-foreground mt-1 uppercase font-mono">{cert.issuer} • {cert.date}</p>
                </div>
                {cert.validation && (
                    <ul className="space-y-1">
                        {cert.validation.map((v, i) => (
                            <li key={i} className="flex items-center text-[10px] text-muted-foreground">
                                <CheckCircle2 className="h-3 w-3 text-primary mr-2 shrink-0" />
                                {v}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </motion.div>
    );
};

export const CertificationsSkills = () => {
    return (
        <Section id="certifications" className="bg-muted/30 transition-colors duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                {/* Certifications */}
                <div className="lg:col-span-1 space-y-8">
                    <div>
                        <h2 className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-4">Credentials</h2>
                        <h3 className="text-3xl font-bold tracking-tight">Professional Certifications</h3>
                    </div>

                    <div className="space-y-4">
                        {certifications.map((cert) => (
                            <CertificationItem key={cert.name} cert={cert} />
                        ))}
                    </div>

                    <div className="p-6 rounded-2xl border-2 border-dashed border-border flex items-center justify-center text-muted-foreground text-xs font-mono uppercase tracking-widest">
                        More Credentials Pending
                    </div>
                </div>

                {/* Skills Matrix */}
                <div className="lg:col-span-2 space-y-8">
                    <div>
                        <h2 className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-4">Tech Stack</h2>
                        <h3 className="text-3xl font-bold tracking-tight">Core Expertise Matrix</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skills.map((group) => (
                            <div key={group.category} className="space-y-4">
                                <h5 className="text-xs font-bold uppercase tracking-widest text-muted-foreground border-b border-border pb-2">
                                    {group.category}
                                </h5>
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((item) => (
                                        <motion.span
                                            key={item}
                                            whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.1)", borderColor: "rgba(59, 130, 246, 0.5)" }}
                                            className="px-3 py-1.5 rounded-lg bg-muted border border-border text-xs font-medium transition-colors cursor-default"
                                        >
                                            {item}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </Section>
    );
};
