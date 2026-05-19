"use client";
import React from "react";
import { motion } from "framer-motion";
import { Award, Cloud, Database, Code, GraduationCap, Check } from "lucide-react";

const certifications = [
    {
        name: "AWS Certified Solutions Architect – Associate",
        issuer: "Amazon Web Services",
        date: "2024",
        icon: <Cloud className="h-5 w-5" />,
        validation: [
            "Cloud Architecture & Design Patterns",
            "High Availability & Scalability",
            "Security, Identity & Compliance"
        ]
    },
    {
        name: "Confluent Certified Data Streaming Engineer",
        issuer: "Confluent (Kafka)",
        date: "2024",
        icon: <Database className="h-5 w-5" />,
        validation: [
            "Event-Driven Microservices",
            "Kafka Cluster Optimization & Tuning"
        ]
    },
    {
        name: "SQL (Advanced) & REST API (Intermediate)",
        issuer: "HackerRank",
        date: "2023",
        icon: <Code className="h-5 w-5" />,
        validation: [
            "Complex Query & Database Optimization",
            "REST API Design & Lifecycle Practices"
        ]
    },
    {
        name: "Developer API & AWS Foundations",
        issuer: "LinkedIn Learning",
        date: "2023",
        icon: <Award className="h-5 w-5" />,
        validation: [
            "Programming Foundations: APIs & Web Services",
            "AWS Essential Training for Developers"
        ]
    }
];

const awards = [
    {
        title: "Ownership Award",
        issuer: "Tata Elxsi",
        description: "Recognized for outstanding backend ownership and end-to-end technical delivery."
    },
    {
        title: "Project Excellence Award",
        issuer: "Tata Elxsi",
        description: "Awarded for contribution towards high-performance service execution and cross-team delivery."
    },
    {
        title: "Extra Mile Award",
        issuer: "Tata Elxsi",
        description: "Recognized for cross-team contributions and proactive backend optimizations."
    }
];

const CertificationItem = ({ cert }: { cert: typeof certifications[0] }) => {
    const cardRef = React.useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cardRef.current.style.setProperty("--mouse-x", `${x}px`);
        cardRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className="glow-card p-6 rounded-2xl bg-card border border-border flex items-start space-x-4 shadow-sm hover:shadow-primary/5 transition-all group cursor-default"
        >
            <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0 relative z-10">
                {cert.icon}
            </div>
            <div className="space-y-2 relative z-10">
                <div>
                    <h5 className="font-bold text-xs leading-tight group-hover:text-primary transition-colors">{cert.name}</h5>
                    <p className="text-[9px] text-muted-foreground mt-1 uppercase font-mono">{cert.issuer} • {cert.date}</p>
                </div>
                {cert.validation && (
                    <ul className="space-y-1">
                        {cert.validation.map((v, i) => (
                            <li key={i} className="flex items-center text-[10px] text-muted-foreground">
                                <Check className="h-3 w-3 text-primary mr-2 shrink-0" />
                                {v}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export const CertificationsSkills = () => {
    return (
        <section id="certifications" className="bg-muted/30 border-t border-border/50">
            <div className="container-tight section-padding">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left Panel: Intro & Education (span 4) */}
                    <div className="lg:col-span-4 space-y-8">
                        <div>
                            <span className="mono-label">Validated Core</span>
                            <h2 className="text-3xl font-bold tracking-tight">Education & Awards</h2>
                            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                                Academic background and professional recognition for outstanding technical execution.
                            </p>
                        </div>

                        {/* Education Card */}
                        <div className="p-6 rounded-2xl bg-card border border-border space-y-4">
                            <div className="flex items-center space-x-3 text-primary">
                                <GraduationCap className="h-6 w-6" />
                                <h4 className="font-bold text-sm uppercase tracking-wider">Education</h4>
                            </div>
                            <div className="space-y-2">
                                <h5 className="font-bold text-[14px]">Madhav Institute of Technology & Science (MITS), Gwalior</h5>
                                <p className="text-xs text-muted-foreground">Bachelor of Technology (B.Tech) — Information Technology</p>
                                <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground pt-2">
                                    <span>2018 – 2022</span>
                                    <span className="text-success bg-success/5 px-2 py-0.5 rounded border border-success/10">CGPA: 7.77</span>
                                </div>
                            </div>
                        </div>

                        {/* Awards List */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3 text-primary">
                                <Award className="h-6 w-6" />
                                <h4 className="font-bold text-sm uppercase tracking-wider">Honors & Awards</h4>
                            </div>
                            <div className="space-y-3">
                                {awards.map((award) => (
                                    <div key={award.title} className="p-4 rounded-xl bg-card/50 border border-border/60">
                                        <h5 className="font-bold text-xs text-foreground flex items-center justify-between">
                                            <span>{award.title}</span>
                                            <span className="text-[10px] text-primary bg-primary/5 px-1.5 py-0.5 rounded font-mono font-normal">{award.issuer}</span>
                                        </h5>
                                        <p className="text-[11px] text-muted-foreground mt-1.5 leading-relaxed">{award.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: Certifications (span 8) */}
                    <div className="lg:col-span-8 space-y-6">
                        <div>
                            <span className="mono-label">Certifications</span>
                            <h3 className="text-2xl font-bold tracking-tight">Professional Credentials</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {certifications.map((cert) => (
                                <CertificationItem key={cert.name} cert={cert} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
