"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Database, Server, Cloud, Activity, Code, ShieldCheck } from "lucide-react";

const stack = [
    {
        category: "Backend & Frameworks",
        icon: <Server className="h-4 w-4" />,
        items: ["Spring Boot", "Spring MVC", "Spring Data JPA", "Spring Security", "Hibernate", "FastAPI", "REST APIs", "JWT Authentication", "Microservices Architecture", "Event-Driven Architecture"]
    },
    {
        category: "Distributed Messaging",
        icon: <Activity className="h-4 w-4" />,
        items: ["Apache Kafka", "Redis Caching", "Asynchronous Processing", "Caching Strategies", "Pub/Sub Messaging", "Distributed Systems", "System Design", "Design Patterns", "Scalability Engineering", "Low-Latency Systems"]
    },
    {
        category: "Cloud & DevOps",
        icon: <Cloud className="h-4 w-4" />,
        items: ["AWS (EC2, S3, RDS, Lambda, API Gateway)", "Docker", "Kubernetes (Basics)", "Jenkins CI/CD", "GitHub Actions", "SonarQube Core"]
    },
    {
        category: "Languages & Databases",
        icon: <Database className="h-4 w-4" />,
        items: ["Java Enterprise", "Python", "SQL Query Tuning", "MySQL Tuning", "PostgreSQL Clusters"]
    },
    {
        category: "Testing & Quality",
        icon: <ShieldCheck className="h-4 w-4" />,
        items: ["JUnit", "Mockito", "TestNG", "JMeter Testing", "Test-Driven Development (TDD)", "Logging & Monitoring", "Application Debugging", "Performance Tuning"]
    },
    {
        category: "Frontend & Tools",
        icon: <Code className="h-4 w-4" />,
        items: ["React", "TypeScript", "Vite", "Tailwind CSS", "Git / GitHub", "Postman Client", "Swagger/OpenAPI", "Jira System"]
    }
];

const TechCard = ({ category, icon, items }: typeof stack[0]) => {
    const cardRef = useRef<HTMLDivElement>(null);

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
            className="glow-card p-6 rounded-2xl bg-card border border-border/60 hover:border-primary/40 transition-all flex flex-col space-y-4 shadow-sm"
        >
            <div className="flex items-center space-x-3 text-primary relative z-10">
                <div className="p-2 rounded-lg bg-primary/10">
                    {icon}
                </div>
                <h4 className="font-bold text-xs uppercase tracking-wider">{category}</h4>
            </div>
            <div className="flex flex-wrap gap-1.5 relative z-10">
                {items.map((item) => (
                    <span
                        key={item}
                        className="text-[10px] font-mono px-2 py-1 rounded bg-muted/40 border border-border/50 text-slate-300 hover:text-white hover:border-primary/30 transition-all cursor-default"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

export const TechStack = () => {
    return (
        <section id="skills" className="bg-background border-t border-border/50">
            <div className="container-tight section-padding">
                <div className="mb-12">
                    <span className="mono-label">Core Matrix</span>
                    <h2 className="text-3xl font-bold tracking-tight">Technical Ecosystem</h2>
                    <p className="text-sm text-muted-foreground mt-2 font-mono">
                        Categorized technologies, frameworks, and tools validated in production environments.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stack.map((group, index) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <TechCard {...group} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
