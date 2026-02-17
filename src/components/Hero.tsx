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
            <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-1/2 bg-accent/5 blur-[120px] rounded-full" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                        className="lg:col-span-7"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
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
                            <button className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all flex items-center group shadow-xl shadow-primary/20">
                                Explore Case Studies
                                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 rounded-lg bg-secondary text-secondary-foreground font-bold hover:bg-secondary/80 transition-all flex items-center">
                                Download CV
                                <Download className="ml-2 h-4 w-4" />
                            </button>
                        </motion.div>

                        {/* Key Stats / Focus Areas */}
                        <motion.div
                            variants={fadeInUp}
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-border"
                        >
                            <div className="space-y-1">
                                <div className="flex items-center space-x-2 text-primary">
                                    <Shield className="h-5 w-5" />
                                    <span className="font-bold">Security</span>
                                </div>
                                <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono">HIPAA / JWT / OWASP</p>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center space-x-2 text-primary">
                                    <Zap className="h-5 w-5" />
                                    <span className="font-bold">Streaming</span>
                                </div>
                                <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono">Kafka / Confluent</p>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center space-x-2 text-primary">
                                    <Database className="h-5 w-5" />
                                    <span className="font-bold">Performance</span>
                                </div>
                                <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono">HikariCP / SQL Tuning</p>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center space-x-2 text-primary">
                                    <BadgeCheck className="h-5 w-5" />
                                    <span className="font-bold">Compliance</span>
                                </div>
                                <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono">FHIR R4 / HL7 / EDI</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Profile Image Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative aspect-[4/5] w-full max-w-[400px] mx-auto overflow-hidden rounded-3xl border border-white/10 shadow-2xl group">
                            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                            <Image
                                src="/profile.jpg"
                                alt="Akash Soni - Senior Backend Architect"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                                priority
                            />

                            {/* Decorative Frame */}
                            <div className="absolute inset-4 border border-white/20 rounded-2xl pointer-events-none group-hover:inset-6 transition-all duration-500" />
                        </div>

                        {/* Experience Badge */}
                        <div className="absolute -bottom-6 -right-6 md:right-0 p-6 rounded-2xl bg-card border border-border shadow-2xl">
                            <div className="flex flex-col items-center">
                                <span className="text-3xl font-bold text-primary">3+</span>
                                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Years Exp.</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
