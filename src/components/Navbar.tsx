"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Shield, Menu, X, Terminal, Search, Code, User, Briefcase, Mail } from "lucide-react";
import { ThemeToggle } from "./ui/ThemeToggle";

const navLinks = [
    { name: "Skills", href: "#skills", shortcut: "S" },
    { name: "Projects", href: "#projects", shortcut: "P" },
    { name: "Experience", href: "#experience", shortcut: "E" },
    { name: "Security & Scale", href: "#security", shortcut: "K" },
    { name: "Credentials", href: "#certifications", shortcut: "C" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setCommandPaletteOpen((prev) => !prev);
            }
            if (e.key === "Escape") {
                setCommandPaletteOpen(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const copyEmail = () => {
        navigator.clipboard.writeText("sameersoni396@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 z-50 w-full transition-all duration-500",
                    isScrolled
                        ? "bg-background/60 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                        : "bg-transparent py-5"
                )}
            >
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Link href="/" className="flex items-center space-x-2 group">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm border border-primary/20">
                                <Shield className="h-5 w-5" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-lg tracking-tighter leading-none group-hover:text-primary transition-colors">
                                    AKASH SONI
                                </span>
                                <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-[0.2em] mt-0.5">
                                    Backend Engineer
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
                                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all relative group font-mono"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                                </Link>
                            </motion.div>
                        ))}
                        
                        {/* Command Palette Indicator */}
                        <button
                            onClick={() => setCommandPaletteOpen(true)}
                            className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-muted/60 border border-border text-[10px] text-muted-foreground font-mono hover:text-foreground hover:border-primary/30 transition-all"
                            title="Open Command Palette"
                        >
                            <Terminal className="h-3.5 w-3.5 text-primary" />
                            <span>Command Menu</span>
                            <kbd className="bg-background px-1 rounded border border-border/80 text-[8px]">⌘K</kbd>
                        </button>

                        <div className="flex items-center space-x-4">
                            <ThemeToggle />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Link
                                    href="#contact"
                                    className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 flex items-center group font-mono text-[11px]"
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
                    </div>

                    {/* Mobile Area */}
                    <div className="flex items-center space-x-4 md:hidden">
                        <button
                            onClick={() => setCommandPaletteOpen(true)}
                            className="p-2 rounded-lg bg-muted text-muted-foreground"
                        >
                            <Terminal className="h-4 w-4 text-primary" />
                        </button>
                        <ThemeToggle />
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            className="text-foreground"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </motion.button>
                    </div>
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

            {/* Command Palette Overlay */}
            <AnimatePresence>
                {commandPaletteOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setCommandPaletteOpen(false)}
                            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                        />
                        
                        {/* Palette Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            className="w-full max-w-lg bg-card border border-border rounded-2xl shadow-2xl relative z-10 overflow-hidden"
                        >
                            {/* Search Input Simulation */}
                            <div className="flex items-center px-4 py-4 border-b border-border/40 space-x-3 bg-muted/20">
                                <Search className="h-4 w-4 text-primary shrink-0" />
                                <input
                                    type="text"
                                    placeholder="Type a command or jump to..."
                                    readOnly
                                    className="w-full bg-transparent text-sm focus:outline-none text-foreground font-mono"
                                    value="Quick Navigation Gateway"
                                />
                                <kbd className="text-[10px] font-mono text-muted-foreground border border-border/60 px-1.5 py-0.5 rounded bg-background">ESC</kbd>
                            </div>

                            {/* Options List */}
                            <div className="p-2 space-y-1 max-h-[300px] overflow-y-auto no-scrollbar font-mono text-xs">
                                <span className="px-3 py-1.5 text-[10px] font-bold text-muted-foreground block uppercase">Anchor Navigation</span>
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setCommandPaletteOpen(false)}
                                        className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-primary/5 hover:text-primary transition-colors text-slate-300 group"
                                    >
                                        <span className="flex items-center space-x-2">
                                            <Code className="h-3.5 w-3.5" />
                                            <span>Jump to {link.name}</span>
                                        </span>
                                        <kbd className="bg-muted px-1.5 py-0.5 rounded border border-border group-hover:border-primary/30 text-[9px]">{link.shortcut}</kbd>
                                    </Link>
                                ))}

                                <span className="px-3 py-1.5 text-[10px] font-bold text-muted-foreground block uppercase mt-2">Actions</span>
                                <button
                                    onClick={copyEmail}
                                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-primary/5 hover:text-primary transition-colors text-slate-300 group text-left"
                                >
                                    <span className="flex items-center space-x-2">
                                        <Mail className="h-3.5 w-3.5" />
                                        <span>{copied ? "Email Copied!" : "Copy Contact Email"}</span>
                                    </span>
                                    <kbd className="bg-muted px-1.5 py-0.5 rounded border border-border text-[9px]">C</kbd>
                                </button>

                                <a
                                    href="https://github.com/Aks396"
                                    target="_blank"
                                    className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-primary/5 hover:text-primary transition-colors text-slate-300 group text-left"
                                >
                                    <span className="flex items-center space-x-2">
                                        <User className="h-3.5 w-3.5" />
                                        <span>Explore GitHub Repos</span>
                                    </span>
                                    <kbd className="bg-muted px-1.5 py-0.5 rounded border border-border text-[9px]">G</kbd>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};
