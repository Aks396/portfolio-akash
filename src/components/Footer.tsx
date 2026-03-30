"use client";

import { motion } from "framer-motion";
import { Shield, Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
    return (
        <footer id="contact" className="bg-slate-950 text-slate-200 py-24 relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-5" />
            
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
                            Ready to Build <span className="text-primary tracking-normal font-medium">AI-Ready Backend Systems?</span>
                        </h2>
                        <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            Senior Backend Engineer with 3+ years of expertise in Java, Spring Boot, and AWS (SAA-C03). 
                            I bridge the gap between core backend excellence and scalable AI-driven functionality, 
                            architecting the resilient data layers and secure APIs that make AI systems production-ready.
                        </p>
                        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-mono text-primary uppercase tracking-widest pt-4">
                            <span className="flex items-center"><Shield className="mr-2 h-3 w-3" /> Java Microservices (AI-Ready)</span>
                            <span className="flex items-center"><Shield className="mr-2 h-3 w-3" /> Intelligent Data Platforms</span>
                            <span className="flex items-center"><Shield className="mr-2 h-3 w-3" /> Distributed Systems for LLMs</span>
                            <span className="flex items-center"><Shield className="mr-2 h-3 w-3" /> Data/AI Infrastructure</span>
                        </div>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-4">
                        <motion.a
                            href="mailto:soni396aks@gmail.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-xl bg-primary text-white font-bold flex items-center shadow-lg shadow-primary/20"
                        >
                            <Mail className="mr-2 h-5 w-5" />
                            Email Me
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/akash-soni-a45457135"
                            target="_blank"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-xl bg-slate-900 text-white font-bold flex items-center border border-slate-800 hover:bg-slate-800 transition-colors"
                        >
                            <Linkedin className="mr-2 h-5 w-5" />
                            LinkedIn
                        </motion.a>
                        <motion.a
                            href="https://github.com/Aks396"
                            target="_blank"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-xl bg-slate-900 text-white font-bold flex items-center border border-slate-800 hover:bg-slate-800 transition-colors"
                        >
                            <Github className="mr-2 h-5 w-5" />
                            GitHub
                        </motion.a>
                    </div>

                    <div className="pt-24 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500 font-mono">
                        <div className="flex items-center space-x-2">
                            <Shield className="h-4 w-4 text-primary" />
                            <span>© 2024 Akash Soni. All rights reserved.</span>
                        </div>
                        <div className="flex items-center space-x-6">
                            <span className="hover:text-primary transition-colors cursor-default">HIPAA Compliant Dev</span>
                            <span className="hover:text-primary transition-colors cursor-default">AWS SAA-C03</span>
                            <span className="hover:text-primary transition-colors cursor-default">Java/Spring Expert</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
