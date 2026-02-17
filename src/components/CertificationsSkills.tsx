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
        image: "/cert-aws-saa.png"
    },
    {
        name: "Confluent Certified Data Streaming Engineer",
        issuer: "Confluent",
        date: "2024",
        icon: <Database className="h-5 w-5" />,
        image: "/cert-confluent.png"
    },
    {
        name: "Rest API (Intermediate)",
        issuer: "HackerRank",
        date: "May 2025",
        icon: <Code className="h-5 w-5" />,
        image: "/cert-hackerrank.png"
    },
    {
        name: "AWS Cloud Practitioner Essentials",
        issuer: "Amazon Web Services (AWS)",
        date: "Sep 2025",
        icon: <ShieldCheck className="h-5 w-5" />,
        image: ""
    }
];

const skills = [
    { category: "Backend & Architecture", items: ["Java 17+", "Spring Boot 3", "Microservices", "System Design", "TDD", "REST APIs", "gRPC"] },
    { category: "Cloud & DevOps", items: ["AWS (EC2, S3, RDS, Lambda)", "Docker", "Jenkins", "CI/CD", "SonarQube", "Kubernetes (Basics)"] },
    { category: "Data & Streaming", items: ["Kafka", "Confluent", "RabbitMQ", "PostgreSQL", "MySQL", "HikariCP Tuning"] },
    { category: "Healthcare Standards", items: ["FHIR R4", "HL7", "EDI 837/835", "HIPAA Compliance", "EHR Integration"] },
    { category: "AI & LLM", items: ["Multi-LLM Integration", "Prompt Engineering", "IDP Pipelines", "Vector DBs"] }
];

const CertificationItem = ({ cert }: { cert: typeof certifications[0] }) => {
    const [imageError, setImageError] = React.useState(false);

    return (
        <motion.div
            whileHover={{ scale: 1.02, x: 5 }}
            className="p-6 rounded-2xl bg-card border border-border flex items-start space-x-4 shadow-lg hover:shadow-primary/5 transition-all group cursor-default"
        >
            <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="p-3 rounded-xl bg-primary/10 text-primary relative overflow-hidden flex items-center justify-center w-14 h-14 shrink-0"
            >
                {cert.image && !imageError ? (
                    <Image
                        src={cert.image}
                        alt={cert.name}
                        fill
                        className="object-contain p-1"
                        onError={() => setImageError(true)}
                        unoptimized
                    />
                ) : (
                    cert.icon
                )}
            </motion.div>
            <div>
                <h5 className="font-bold text-sm leading-tight group-hover:text-primary transition-colors">{cert.name}</h5>
                <p className="text-xs text-muted-foreground mt-1">{cert.issuer} • {cert.date}</p>
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
