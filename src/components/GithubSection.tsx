"use client";

import React from "react";
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
        name: "ATS-Checker",
        description: "AI-powered ATS Checker and Career Intelligence Platform analyzing resumes, improving ATS scores, and matching candidates with job descriptions using Google Gemini AI.",
        lang: "TypeScript",
        stars: 1,
        forks: 0,
        metrics: "98% Parse Accuracy"
    },
    {
        name: "tinyurl-ai-platform",
        description: "AI-powered URL Shortener built with Java 21, Spring Boot, MySQL, JWT Security, and Redis caching. Integrates Gemini AI for destination safety threat analysis.",
        lang: "Java",
        stars: 0,
        forks: 0,
        metrics: "Sub-ms Redirection"
    },
    {
        name: "CURA-Autism-AI",
        description: "Early Autism screening, diagnosis support, and post-diagnosis care management platform utilizing AI to analyze developmental indicators.",
        lang: "TypeScript",
        stars: 0,
        forks: 0,
        metrics: "Early Screening AI"
    }
];

export const GithubSection = () => {
    // Generate mock GitHub contribution matrix (53 weeks * 7 days)
    // Render a grid of squares with different opacity levels of white/silver.
    const activityLevels = [0, 1, 2, 3, 2, 1, 0, 3, 2, 4, 3, 2, 1, 3, 4, 2, 1, 0, 2, 3, 4, 1, 2, 0, 1, 3, 2, 4, 3, 1, 2, 3];
    
    return (
        <section id="github" className="border-t border-white/5" style={{ background: "#050505" }}>
            <div className="container-tight section-padding">
                <div className="mb-12">
                    <span className="mono-label">Open Source & Metrics</span>
                    <h2 className="text-3xl font-extrabold tracking-tight text-white mt-2"
                        style={{ fontFamily: "var(--font-geist), sans-serif" }}>
                        Engineering <span className="text-slate-500">Velocity</span>
                    </h2>
                    <p className="text-xs text-slate-500 mt-2 font-mono">
                        GitHub commits, analytics, and featured backend systems repositories.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left Panel: GitHub Contribution Graph & Commits (span 8) */}
                    <div className="lg:col-span-8 p-6 rounded-3xl glass-card flex flex-col justify-between">
                        <div>
                            <div className="flex flex-col sm:flex-row justify-between sm:items-center pb-4 border-b border-white/5 gap-4">
                                <div className="flex items-center space-x-3 text-white">
                                    <Github className="h-4 w-4" />
                                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider">GitHub Activity Matrix (Aks396)</span>
                                </div>
                                <div className="flex items-center space-x-3 text-[9px] font-mono text-slate-500">
                                    <span>Less</span>
                                    <span className="w-2 h-2 bg-white/5 rounded-sm border border-white/10" />
                                    <span className="w-2 h-2 bg-white/15 rounded-sm" />
                                    <span className="w-2 h-2 bg-white/30 rounded-sm" />
                                    <span className="w-2 h-2 bg-white/60 rounded-sm" />
                                    <span className="w-2 h-2 bg-white rounded-sm" />
                                    <span>More</span>
                                </div>
                            </div>

                            {/* Contribution Grid */}
                            <div className="py-4 overflow-x-auto no-scrollbar">
                                <div className="grid grid-rows-7 grid-flow-col gap-1 min-w-[640px]">
                                    {Array.from({ length: 371 }).map((_, index) => {
                                        const level = activityLevels[index % activityLevels.length];
                                        let bgClass = "bg-white/5 border border-white/5";
                                        if (level === 1) bgClass = "bg-white/15";
                                        if (level === 2) bgClass = "bg-white/30";
                                        if (level === 3) bgClass = "bg-white/60";
                                        if (level === 4) bgClass = "bg-white";

                                        return (
                                            <div
                                                key={index}
                                                className={`w-[9px] h-[9px] rounded-sm transition-all duration-300 ${bgClass}`}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Velocity Counters */}
                        <div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/5 text-center">
                                <div className="space-y-1">
                                    <div className="flex items-center justify-center space-x-1">
                                        <GitCommit className="h-3.5 w-3.5 text-slate-400" />
                                        <span className="text-base font-bold font-mono text-white">1,240+</span>
                                    </div>
                                    <p className="text-[9px] uppercase tracking-wider text-slate-500 font-mono">Commits Yearly</p>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center justify-center space-x-1">
                                        <Flame className="h-3.5 w-3.5 text-slate-400" />
                                        <span className="text-base font-bold font-mono text-white">24 Days</span>
                                    </div>
                                    <p className="text-[9px] uppercase tracking-wider text-slate-500 font-mono">Current Streak</p>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center justify-center space-x-1">
                                        <Clock className="h-3.5 w-3.5 text-slate-400" />
                                        <span className="text-base font-bold font-mono text-white">99.4%</span>
                                    </div>
                                    <p className="text-[9px] uppercase tracking-wider text-slate-500 font-mono">PR Success Rate</p>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center justify-center space-x-1">
                                        <BarChart3 className="h-3.5 w-3.5 text-slate-400" />
                                        <span className="text-base font-bold font-mono text-white">18 mins</span>
                                    </div>
                                    <p className="text-[9px] uppercase tracking-wider text-slate-500 font-mono">Mean Build Time</p>
                                </div>
                            </div>

                            <div className="text-[8px] font-mono text-slate-600 text-center mt-4">
                                * Simulated activity matrix — illustrative of engineering velocity.
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: Pinned Repos (span 4) */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="flex items-center justify-between pb-2 border-b border-white/5">
                            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Pinned Repositories</span>
                            <Code2 className="h-3.5 w-3.5 text-white/50" />
                        </div>

                        {repos.map((repo) => (
                            <motion.a
                                href={`https://github.com/Aks396/${repo.name}`}
                                target="_blank"
                                key={repo.name}
                                whileHover={{ y: -2 }}
                                className="block p-5 rounded-3xl glass-card transition-all space-y-3 cursor-pointer group border border-white/8 bg-white/2"
                            >
                                <div className="flex items-center justify-between">
                                    <h4 className="text-xs font-bold text-white group-hover:text-slate-300 transition-colors flex items-center">
                                        <Github className="h-3.5 w-3.5 mr-2 text-slate-400" />
                                        {repo.name}
                                    </h4>
                                    <span className="text-[8px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                                        {repo.metrics}
                                    </span>
                                </div>
                                <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2">
                                    {repo.description}
                                </p>
                                <div className="flex items-center justify-between text-[9px] font-mono text-slate-500 pt-1 border-t border-white/5">
                                    <div className="flex items-center space-x-3">
                                        <span className="flex items-center">
                                            <span 
                                                className="w-1.5 h-1.5 rounded-full mr-1.5 bg-white" 
                                            />
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
                                    <span className="text-[8px] uppercase tracking-wider text-white group-hover:underline">Explore</span>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
