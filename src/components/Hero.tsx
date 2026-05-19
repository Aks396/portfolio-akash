"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Shield, ArrowRight, Download, Activity, Code } from "lucide-react";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const techBadges = [
    "Java", "Spring Boot", "Kafka", "Redis", "AWS", "Docker", "Kubernetes", "FastAPI", "React", "AI/LLMs"
];

const terminalLogs = [
    "Initializing Spring Boot container context...",
    "Establishing connection to Kafka event cluster...",
    "Pre-checking Redis distributed cache pools...",
    "Securing API Gateway via OAuth2 & JWT checks...",
    "Health-Check status: UP & HEALTHY // 100% SLA"
];

export const Hero = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [typedText, setTypedText] = useState("");
    const [logIndex, setLogIndex] = useState(0);

    // Particle Background Effect
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const particles: Array<{
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;
        }> = [];

        // Generate particles
        for (let i = 0; i < 55; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                size: Math.random() * 2 + 1,
                color: Math.random() > 0.5 ? "rgba(59, 130, 246, 0.35)" : "rgba(14, 165, 233, 0.35)"
            });
        }

        const handleResize = () => {
            if (!canvas) return;
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);

        let mouseX = 0;
        let mouseY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            // Grid background simulation (SVG style)
            ctx.strokeStyle = "rgba(255, 255, 255, 0.015)";
            ctx.lineWidth = 1;
            const gridSize = 45;
            for (let x = 0; x < width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }
            for (let y = 0; y < height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }

            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;

                // Border check
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                // Mouse interaction pull
                const dx = mouseX - p.x;
                const dy = mouseY - p.y;
                const dist = Math.hypot(dx, dy);
                if (dist < 120) {
                    p.x += dx * 0.005;
                    p.y += dy * 0.005;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
            });

            // Draw link lines between close particles
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const pi = particles[i];
                    const pj = particles[j];
                    const dist = Math.hypot(pi.x - pj.x, pi.y - pj.y);
                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(pi.x, pi.y);
                        ctx.lineTo(pj.x, pj.y);
                        ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - dist / 100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // Typist effect
    useEffect(() => {
        let currentString = terminalLogs[logIndex];
        let currentLen = 0;
        let isDeleting = false;
        let typingSpeed = 50;

        const handleType = () => {
            if (!isDeleting) {
                setTypedText(currentString.substring(0, currentLen + 1));
                currentLen++;

                if (currentLen === currentString.length) {
                    isDeleting = true;
                    typingSpeed = 3000; // Delay before starting to delete
                } else {
                    typingSpeed = 40;
                }
            } else {
                setTypedText(currentString.substring(0, currentLen - 1));
                currentLen--;

                if (currentLen === 0) {
                    isDeleting = false;
                    setLogIndex((prev) => (prev + 1) % terminalLogs.length);
                    typingSpeed = 500;
                } else {
                    typingSpeed = 15;
                }
            }

            setTimeout(handleType, typingSpeed);
        };

        const timeoutId = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timeoutId);
    }, [logIndex]);

    return (
        <section className="relative overflow-hidden bg-background min-h-screen flex items-center">
            {/* Canvas Background particles */}
            <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none -z-10" />

            {/* Glowing blur effects */}
            <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-primary/10 blur-[100px] rounded-full -z-10" />
            <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-accent/10 blur-[100px] rounded-full -z-10" />

            <div className="container-tight pt-32 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left: Headline and Copy (span 7) */}
                    <div className="lg:col-span-7 flex flex-col space-y-8 text-left">
                        <motion.div
                            variants={staggerContainer}
                            initial="initial"
                            animate="animate"
                            className="space-y-6"
                        >
                            <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-primary/5 border border-primary/20 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest text-primary uppercase">
                                <Shield className="h-3.5 w-3.5" />
                                <span>Enterprise Systems Architect</span>
                            </motion.div>

                            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white leading-tight">
                                AKASH SONI<br />
                                <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                                    Backend Engineer
                                </span>
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="text-sm md:text-base text-slate-400 max-w-xl leading-relaxed">
                                Specializing in Java, Spring Boot, distributed microservices, event-driven pipelines (Kafka), 
                                low-latency persistent structures, and secure multi-provider AI routing cores.
                            </motion.p>

                            {/* Tech Badges */}
                            <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 pt-2">
                                {techBadges.map((badge) => (
                                    <span
                                        key={badge}
                                        className="text-[10px] font-mono px-2.5 py-1 rounded bg-muted/40 border border-border/80 text-slate-300 hover:text-primary hover:border-primary/20 transition-all cursor-default"
                                    >
                                        {badge}
                                    </span>
                                ))}
                            </motion.div>

                            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
                                <button
                                    onClick={() => {
                                        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                    className="px-6 py-3.5 rounded-xl bg-primary text-white font-mono font-bold text-xs flex items-center hover:bg-primary/95 transition-all shadow-lg hover:shadow-primary/20 cursor-pointer"
                                >
                                    <span>EXPLORE PROJECTS</span>
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </button>
                                <button
                                    onClick={() => {
                                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                    className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-mono font-bold text-xs flex items-center hover:bg-slate-850 hover:text-white transition-all cursor-pointer"
                                >
                                    <span>CONTACT ME</span>
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right: Simulated System Monitor Interface (span 5) */}
                    <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950 border border-border/80 shadow-2xl relative overflow-hidden font-mono text-xs text-slate-300 space-y-4">
                        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-accent" />
                        
                        {/* Terminal Header */}
                        <div className="flex justify-between items-center text-[10px] text-slate-500 pb-2 border-b border-border/20">
                            <span className="flex items-center space-x-1.5">
                                <Terminal className="h-4 w-4 text-primary" />
                                <span>CORE MONITOR // TATA_ELXSI</span>
                            </span>
                            <span className="flex items-center space-x-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                                <span>ONLINE</span>
                            </span>
                        </div>

                        {/* Interactive Typing Stream */}
                        <div className="min-h-[45px] text-[11px] text-success leading-relaxed flex items-start">
                            <span className="text-primary mr-2 shrink-0">$</span>
                            <p>
                                {typedText}
                                <span className="w-1.5 h-3.5 bg-success ml-1 inline-block animate-pulse" />
                            </p>
                        </div>

                        {/* System Stats Block */}
                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/20 text-[10px]">
                            <div className="space-y-1">
                                <span className="text-slate-500 uppercase">SYS THROUGHPUT</span>
                                <p className="text-white font-bold flex items-center">
                                    <Activity className="h-3.5 w-3.5 text-primary mr-1 shrink-0" />
                                    <span>10k+ events/sec</span>
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-slate-500 uppercase">LATENCY PROFILE</span>
                                <p className="text-white font-bold flex items-center">
                                    <Code className="h-3.5 w-3.5 text-accent mr-1 shrink-0" />
                                    <span>sub-50ms average</span>
                                </p>
                            </div>
                        </div>

                        {/* Visual Node Cluster Representation */}
                        <div className="pt-2 flex items-center space-x-2 text-[9px] text-slate-500">
                            <span>REPLICAS:</span>
                            <span className="px-1.5 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary">FHIR-01</span>
                            <span className="px-1.5 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary">FHIR-02</span>
                            <span className="px-1.5 py-0.5 rounded bg-accent/10 border border-accent/20 text-accent">IDP-01</span>
                        </div>
                    </div>

                </div>
            </div>
            
            {/* Credibility Strip */}
            <div className="absolute bottom-0 left-0 w-full border-y border-border/40 bg-muted/20 backdrop-blur-sm z-10">
                <div className="container-tight py-4 overflow-x-auto no-scrollbar">
                    <div className="flex items-center justify-between min-w-max gap-8 px-4 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400">
                        <div className="flex items-center space-x-2">
                            <span className="text-primary">/</span>
                            <span>FHIR R4 Interoperability</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-primary">/</span>
                            <span>Kafka Event Pipelines</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-primary">/</span>
                            <span>3.4+ Years Experience</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-primary">/</span>
                            <span>AWS Solutions Architect</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
