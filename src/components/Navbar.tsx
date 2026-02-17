"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Shield, Menu, X } from "lucide-react";

const navLinks = [
    { name: "Expertise", href: "#expertise" },
    { name: "Projects", href: "#projects" },
    { name: "Systems", href: "#systems" },
    { name: "Security", href: "#security" },
    { name: "Certifications", href: "#certifications" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link href="/" className="flex items-center space-x-2 group">
                        <Shield className="h-8 w-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
                        <div className="flex flex-col">
                            <span className="font-bold text-xl tracking-tighter leading-none group-hover:text-primary transition-colors">
                                AKASH SONI
                            </span>
                            <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">
                                Architect / Engineer
                            </span>
                        </div>
                    </Link>
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={link.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                            </Link>
                        </motion.div>
                    ))}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link
                            href="#contact"
                            className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 flex items-center group"
                        >
                            Get In Touch
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                                className="ml-2"
                            >
                                →
                            </motion.span>
                        </Link>
                    </motion.div>
                </div>

                {/* Mobile Toggle */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="md:hidden text-foreground"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border py-6 px-4 flex flex-col space-y-4 shadow-xl overflow-hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium hover:text-primary transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className="w-full text-center py-3 rounded-lg bg-primary text-primary-foreground font-semibold"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Get In Touch
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
