"use client";

import { motion } from "framer-motion";
import { Section } from "./ui/Section";
import { User, Target, Zap, Shield } from "lucide-react";

export const AboutSection = () => {
    return (
        <Section id="about" className="bg-background relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <div>
                        <h2 className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-4">Professional Profile</h2>
                        <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Engineering Scalable Foundations</h3>
                    </div>
                    
                    <div className="space-y-6 text-muted-foreground leading-relaxed">
                        <p>
                            <span className="text-foreground font-semibold">Senior Backend Engineer</span> specialized in architecting 
                            high-throughput Java microservices and <span className="text-primary font-bold italic">AI-ready data infrastructure</span>. 
                            With 3+ years of experience building distributed systems with Spring Boot, Kafka, and AWS (SAA-C03), 
                            I focus on scalable data pipelines and secure, low-latency backends for intelligent platforms.
                        </p>
                        <p>
                            I specialize in <span className="text-foreground font-semibold italic">bridging the gap</span> 
                            between core enterprise systems and production-grade AI services. My expertise lies in architecting 
                            vector-search storage (pgvector/Redis), streaming ingestion (Kafka), and PHI-safe preprocessing layers 
                            for high-scale intelligent applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                        <div className="flex items-start space-x-3">
                            <div className="mt-1 p-2 rounded-lg bg-primary/10 text-primary">
                                <Target className="h-4 w-4" />
                            </div>
                            <div>
                                <h5 className="font-bold text-sm">System Design</h5>
                                <p className="text-xs text-muted-foreground mt-1">Focusing on loosely coupled microservices and event-driven patterns.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="mt-1 p-2 rounded-lg bg-primary/10 text-primary">
                                <Shield className="h-4 w-4" />
                            </div>
                            <div>
                                <h5 className="font-bold text-sm">Security & Compliance</h5>
                                <p className="text-xs text-muted-foreground mt-1">Implementing HIPAA-aligned security and OWASP best practices.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="p-8 rounded-3xl bg-muted/50 border border-border shadow-inner">
                        <pre className="text-[10px] md:text-xs font-mono text-muted-foreground overflow-hidden">
                            <code className="block">
{`{
  "engineer": {
    "name": "Akash Soni",
    "role": "Senior Backend Engineer",
    "specialization": "Distributed Systems",
    "certified": "AWS SAA-C03",
    "stack": ["Java", "Spring Boot", "Kafka", "AWS"],
    "mindset": {
      "clean_code": true,
      "performance_obsessed": true,
      "ownership": "Full SDLC"
    }
  }
}`}
                            </code>
                        </pre>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 blur-2xl rounded-full" />
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 blur-2xl rounded-full" />
                </div>
            </div>
        </Section>
    );
};
