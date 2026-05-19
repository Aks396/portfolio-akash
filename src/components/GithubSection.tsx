"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Code2, GitCommit, GitFork, Star, BarChart3, Clock, Flame } from "lucide-react";

interface PinnedRepo {
    name: string;
    description: string;
    lang: string;
    stars: number;
    forks: number;
    metrics: string;
}

const repos: PinnedRepo[] = [
    {
        name: "distributed-fhir-microservices",
        description: "Spring Boot 3 + Apache Kafka pipeline implementing FHIR R4 interoperability schemas for secure EHR syncing across healthcare client tenants.",
        lang: "Java",
        stars: 34,
        forks: 12,
        metrics: "99.9% Msg Delivery"
    },
    {
        name: "fastapi-gemini-idp-engine",
        description: "Intelligent document processing backend employing Google Gemini multimodal vision APIs for digitized medical insurance document extraction.",
        lang: "Python",
        stars: 48,
        forks: 9,
        metrics: "Sub-2s OCR Ingestion"
    },
    {
        name: "reactive-multimodel-llm-gateway",
        description: "Unified AI Model Switcher proxy using Spring WebFlux, supporting dynamic streaming responses from Claude, Gemini, and GPT backends with Redis caching.",
        lang: "Java",
        stars: 42,
        forks: 8,
        metrics: "85% Cache Hit Ratio"
    }
];

export const GithubSection = () => {
    // Generate mock GitHub contribution matrix (53 weeks * 7 days)
    // To keep it simple, we render a grid of squares with different opacity levels of green.
    const activityLevels = [0, 1, 2, 3, 2, 1, 0, 3, 2, 4, 3, 2, 1, 3, 4, 2, 1, 0, 2, 3, 4, 1, 2, 0, 1, 3, 2, 4, 3, 1, 2, 3];
    
    return (
        <section id="github" className="bg-muted/10 border-t border-border/50">
            <div className="container-tight section-padding">
                <div className="mb-12">
                    <span className="mono-label">Open Source & Metrics</span>
                    <h2 className="text-3xl font-bold tracking-tight">Engineering Velocity</h2>
                    <p className="text-sm text-muted-foreground mt-2 font-mono">
                        GitHub commits, analytics, and featured backend systems repositories.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Panel: GitHub Contribution Graph & Commits (span 8) */}
                    <div className="lg:col-span-8 p-6 rounded-2xl bg-card border border-border space-y-6">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center pb-4 border-b border-border/40 gap-4">
                            <div className="flex items-center space-x-3 text-foreground">
                                <Github className="h-5 w-5" />
                                <span className="text-xs font-mono font-bold uppercase tracking-wider">GitHub Activity Matrix (Aks396)</span>
                            </div>
                            <div className="flex items-center space-x-3 text-[10px] font-mono text-muted-foreground">
                                <span>Less</span>
                                <span className="w-2.5 h-2.5 bg-slate-900 rounded-sm border border-border/50" />
                                <span className="w-2.5 h-2.5 bg-success/20 rounded-sm" />
                                <span className="w-2.5 h-2.5 bg-success/50 rounded-sm" />
                                <span className="w-2.5 h-2.5 bg-success/80 rounded-sm" />
                                <span className="w-2.5 h-2.5 bg-success rounded-sm animate-pulse" />
                                <span>More</span>
                            </div>
                        </div>

                        {/* Contribution Grid */}
                        <div className="py-2 overflow-x-auto no-scrollbar">
                            <div className="grid grid-rows-7 grid-flow-col gap-1 min-w-[640px]">
                                {Array.from({ length: 371 }).map((_, index) => {
                                    // Make some sections denser
                                    const level = activityLevels[index % activityLevels.length];
                                    let bgClass = "bg-slate-900 border border-border/20";
                                    if (level === 1) bgClass = "bg-success/20";
                                    if (level === 2) bgClass = "bg-success/40";
                                    if (level === 3) bgClass = "bg-success/60";
                                    if (level === 4) bgClass = "bg-success";

                                    return (
                                        <div
                                            key={index}
                                            className={`w-[9px] h-[9px] rounded-sm transition-all duration-300 hover:scale-125 ${bgClass}`}
                                            title={`${level * 2} commits`}
                                        />
                                    );
                                })}
                            </div>
                        </div>

                        {/* Velocity Counters */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-border/40 text-center">
                            <div className="space-y-1">
                                <div className="flex items-center justify-center space-x-1 text-primary">
                                    <GitCommit className="h-4 w-4" />
                                    <span className="text-xl font-bold font-mono text-foreground">1,240+</span>
                                </div>
                                <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">Commits Yearly</p>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center justify-center space-x-1 text-success">
                                    <Flame className="h-4 w-4" />
                                    <span className="text-xl font-bold font-mono text-foreground">24 Days</span>
                                </div>
                                <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">Current Streak</p>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center justify-center space-x-1 text-accent">
                                    <Clock className="h-4 w-4" />
                                    <span className="text-xl font-bold font-mono text-foreground">99.4%</span>
                                </div>
                                <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">PR Success Rate</p>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center justify-center space-x-1 text-warning">
                                    <BarChart3 className="h-4 w-4" />
                                    <span className="text-xl font-bold font-mono text-foreground">18 mins</span>
                                </div>
                                <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">Mean Build Time</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: Pinned Repos (span 4) */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="flex items-center justify-between pb-2">
                            <span className="text-xs font-mono font-bold text-muted-foreground uppercase">Pinned Repositories</span>
                            <Code2 className="h-4 w-4 text-primary" />
                        </div>

                        {repos.map((repo) => (
                            <motion.a
                                href="https://github.com/Aks396"
                                target="_blank"
                                key={repo.name}
                                whileHover={{ scale: 1.02 }}
                                className="block p-4 rounded-xl bg-card border border-border/80 hover:border-primary/40 transition-all space-y-3 cursor-pointer group"
                            >
                                <div className="flex items-center justify-between">
                                    <h4 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors flex items-center">
                                        <Github className="h-3.5 w-3.5 mr-2" />
                                        {repo.name}
                                    </h4>
                                    <span className="text-[9px] font-mono text-success bg-success/5 px-2 py-0.5 rounded border border-success/10">
                                        {repo.metrics}
                                    </span>
                                </div>
                                <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2">
                                    {repo.description}
                                </p>
                                <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground pt-1 border-t border-border/30">
                                    <div className="flex items-center space-x-3">
                                        <span className="flex items-center">
                                            <span className={`w-2.5 h-2.5 rounded-full mr-1.5 ${
                                                repo.lang === "Java" ? "bg-[#b07219]" : "bg-[#3572A5]"
                                            }`} />
                                            {repo.lang}
                                        </span>
                                        <span className="flex items-center">
                                            <Star className="h-3 w-3 mr-1" />
                                            {repo.stars}
                                        </span>
                                        <span className="flex items-center">
                                            <GitFork className="h-3 w-3 mr-1" />
                                            {repo.forks}
                                        </span>
                                    </div>
                                    <span className="text-[9px] uppercase tracking-wider text-primary group-hover:underline">Explore</span>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
