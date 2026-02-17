"use client";

import Link from "next/link";
import { Shield, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export const Footer = () => {
    return (
        <footer id="contact" className="bg-background pt-24 pb-12 border-t border-border">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                            <Shield className="h-10 w-10 text-primary" />
                            <div className="flex flex-col">
                                <span className="font-bold text-2xl tracking-tighter leading-none">AKASH SONI</span>
                                <span className="text-xs text-muted-foreground font-mono uppercase tracking-widest">Architect / Engineer</span>
                            </div>
                        </div>
                        <p className="max-w-md text-muted-foreground leading-relaxed">
                            Open for collaboration on high-scale distributed systems, healthcare interoperability projects, and security-centric backend architectures.
                        </p>
                        <div className="flex items-center space-x-4">
                            <Link href="https://github.com/Aks396" target="_blank" className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
                                <Github className="h-5 w-5" />
                            </Link>
                            <Link href="https://www.linkedin.com/in/akash-soni-a45457135" target="_blank" className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link href="mailto:soni396aks@gmail.com" className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
                                <Mail className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-sm font-mono text-primary uppercase tracking-[0.2em]">Contact Inquiry</h4>
                        <div className="space-y-4">
                            <p className="text-3xl md:text-4xl font-bold tracking-tight">Let's build resilient systems together.</p>
                            <Link
                                href="mailto:soni396aks@gmail.com"
                                className="inline-flex items-center text-xl font-bold text-primary hover:underline group"
                            >
                                soni396aks@gmail.com
                                <ArrowUpRight className="ml-2 h-6 w-6 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="pt-8 grid grid-cols-2 gap-8 border-t border-border">
                            <div>
                                <h6 className="text-[10px] font-mono text-muted-foreground uppercase mb-2">Location</h6>
                                <p className="text-sm font-semibold">Bengaluru, India</p>
                            </div>
                            <div>
                                <h6 className="text-[10px] font-mono text-muted-foreground uppercase mb-2">Availability</h6>
                                <p className="text-sm font-semibold">Remote / On-site</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] text-muted-foreground font-mono uppercase tracking-[0.2em]">
                    <p>© 2024 AKASH SONI. ALL RIGHTS RESERVED.</p>
                    <div className="flex space-x-6">
                        <span>Built with Next.js & Framer Motion</span>
                        <span>Enterprise Grade</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
