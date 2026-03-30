"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Cloud, ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

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

export const Hero = () => {
    return (
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 grid-pattern opacity-[0.4] -z-20" />
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                        className="lg:col-span-7"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6 backdrop-blur-sm">
                            <BadgeCheck className="h-4 w-4" />
                            <span className="text-xs font-bold uppercase tracking-widest">AWS Certified Solutions Architect</span>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6">
                            Architecting <span className="text-primary italic">Resilient</span> <br />
                            AI-Ready Backend Systems.
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                            I am <span className="text-foreground font-semibold">Akash Soni</span>, a Senior Backend Engineer specialized in 
                            architecting high-throughput Java microservices and <span className="text-primary font-bold italic">AI-ready data infrastructure</span>. 
                            AWS SAA-C03 certified, bridging the gap between core systems and production-grade AI services.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-16">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold transition-all flex items-center group shadow-lg shadow-primary/25"
                            >
                                View Systems Architecture
                                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.02, backgroundColor: "var(--secondary)" }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-4 rounded-lg bg-secondary text-secondary-foreground font-bold transition-all flex items-center border border-border shadow-sm"
                            >
                                Download Technical CV
                                <Download className="ml-2 h-4 w-4" />
                            </motion.button>
                        </motion.div>

                        {/* Production Stats */}
                        <motion.div
                            variants={fadeInUp}
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-border/50"
                        >
                            <div className="space-y-1">
                                <span className="text-2xl font-bold text-foreground">3+</span>
                                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">Years Exp.</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-2xl font-bold text-foreground">99.99%</span>
                                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">Reliability</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-2xl font-bold text-foreground">40%</span>
                                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">Latency Red.</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-2xl font-bold text-foreground">10k+</span>
                                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">Daily Txns</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Minimal Profile Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-5 relative flex justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-[320px] aspect-square">
                            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full animate-pulse" />
                            <div className="relative w-full h-full overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
                                <Image
                                    src="/profile.jpg"
                                    alt="Akash Soni - Senior Backend Architect"
                                    fill
                                    className="object-cover grayscale active:grayscale-0 transition-all duration-700 hover:scale-105"
                                    priority
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                            </div>
                            
                            {/* AWS Certification Badge Overlay */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="absolute -bottom-4 -right-4 p-4 rounded-xl bg-card border border-border shadow-2xl z-20 flex items-center space-x-3"
                            >
                                <Cloud className="h-6 w-6 text-primary" />
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold uppercase tracking-tight">AWS Certified</span>
                                    <span className="text-[8px] text-muted-foreground font-mono">Solutions Architect</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
