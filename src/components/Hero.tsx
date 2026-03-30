"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Database, Shield, Zap, ArrowRight, Download } from "lucide-react";
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
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 grid-pattern opacity-[0.2] -z-20" />
            <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/3 bg-primary/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-1/2 bg-accent/10 blur-[120px] rounded-full" />

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
                            <span className="text-xs font-bold uppercase tracking-wider">AWS Certified Solution Architect</span>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6">
                            Architecting <span className="text-primary italic">Resilient</span> <br />
                            Healthcare Systems.
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                            I am <span className="text-foreground font-semibold">Akash Soni</span>, a Senior Backend & Streaming Systems Engineer.
                            I build high-performance, FHIR-compliant microservices and real-time data pipelines
                            for the modern healthcare enterprise.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-16">
                            <motion.button
                                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold transition-all flex items-center group shadow-xl shadow-primary/20 relative overflow-hidden"
                            >
                                <span className="relative z-10">Explore Case Studies</span>
                                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform relative z-10" />
                                <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-400 to-primary opacity-0 group-hover:opacity-20 transition-opacity" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.02, backgroundColor: "var(--secondary)", opacity: 0.9 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-4 rounded-lg bg-secondary/50 backdrop-blur-md text-secondary-foreground font-bold transition-all flex items-center shadow-lg border border-border"
                            >
                                Download CV
                                <Download className="ml-2 h-4 w-4" />
                            </motion.button>
                        </motion.div>

                        {/* Key Stats / Focus Areas */}
                        <motion.div
                            variants={fadeInUp}
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-border"
                        >
                            <motion.div whileHover={{ y: -5 }} className="space-y-1 group cursor-default">
                                <div className="flex items-center space-x-2 text-primary">
                                    <Shield className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                                    <span className="font-bold">Security</span>
                                </div>
                                <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono">HIPAA / JWT / OWASP</p>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} className="space-y-1 group cursor-default">
                                <div className="flex items-center space-x-2 text-primary">
                                    <Zap className="h-5 w-5 group-hover:scale-110 transition-transform" />
                                    <span className="font-bold">Streaming</span>
                                </div>
                                <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono">Kafka / Confluent</p>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} className="space-y-1 group cursor-default">
                                <div className="flex items-center space-x-2 text-primary">
                                    <Database className="h-5 w-5 group-hover:rotate-[-10deg] transition-transform" />
                                    <span className="font-bold">Performance</span>
                                </div>
                                <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono">HikariCP / SQL Tuning</p>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} className="space-y-1 group cursor-default">
                                <div className="flex items-center space-x-2 text-primary">
                                    <BadgeCheck className="h-5 w-5 group-hover:scale-110 transition-transform" />
                                    <span className="font-bold">Compliance</span>
                                </div>
                                <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono">FHIR R4 / HL7 / EDI</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Profile Image Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-5 relative flex justify-center lg:justify-end"
                    >
                        <div className="relative aspect-square w-full max-w-[320px] overflow-hidden rounded-full border-4 border-primary/20 shadow-[0_0_50px_rgba(59,130,246,0.2)] group transition-all duration-500 hover:border-primary/50">
                            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500" />
                            <Image
                                src="/profile.jpg"
                                alt="Akash Soni - Senior Backend Architect"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                                priority
                                unoptimized
                            />
                            
                            {/* Animated Ring */}
                            <div className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none" />
                        </div>

                        {/* Experience Badge */}
                        <motion.div
                            initial={{ y: 0 }}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-2 -left-2 md:bottom-4 md:left-4 lg:-left-6 p-4 rounded-2xl bg-card/80 backdrop-blur-xl border border-border shadow-2xl z-20"
                        >
                            <div className="flex flex-col items-center">
                                <span className="text-2xl font-bold text-primary">3+</span>
                                <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Years Exp.</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
