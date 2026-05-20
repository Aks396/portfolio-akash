"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Terminal, Menu, X, Search, Code, User, Mail, Zap } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about", shortcut: "A" },
  { name: "Projects", href: "#projects", shortcut: "P" },
  { name: "Architecture", href: "#architecture", shortcut: "R" },
  { name: "Experience", href: "#experience", shortcut: "E" },
  { name: "Contact", href: "#contact", shortcut: "C" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText("sameersoni396@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const commandItems = [
    { name: "Jump to About", href: "#about", shortcut: "A", type: "nav" },
    { name: "Jump to Projects", href: "#projects", shortcut: "P", type: "nav" },
    { name: "Jump to Architecture", href: "#architecture", shortcut: "R", type: "nav" },
    { name: "Jump to Experience", href: "#experience", shortcut: "E", type: "nav" },
    { name: "Jump to Contact", href: "#contact", shortcut: "C", type: "nav" },
    { name: "Copy Email Address", shortcut: "M", type: "action", action: copyEmail, isEmail: true },
    { name: "GitHub Profile", shortcut: "G", type: "action", action: () => window.open("https://github.com/Aks396", "_blank"), isEmail: false },
  ];

  const filteredItems = commandItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCmdOpen((p) => !p);
      }
      if (e.key === "Escape") {
        setCmdOpen(false);
        setMobileOpen(false);
      }

      if (cmdOpen) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex((prev) => (filteredItems.length ? (prev + 1) % filteredItems.length : 0));
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex((prev) => (filteredItems.length ? (prev - 1 + filteredItems.length) % filteredItems.length : 0));
        } else if (e.key === "Enter") {
          e.preventDefault();
          const selected = filteredItems[selectedIndex];
          if (selected) {
            if (selected.type === "nav" && selected.href) {
              const el = document.getElementById(selected.href.substring(1));
              if (el) el.scrollIntoView({ behavior: "smooth" });
              setCmdOpen(false);
            } else if (selected.type === "action" && selected.action) {
              selected.action();
              setCmdOpen(false);
            }
          }
        } else {
          // Alt+Shortcut globally, or single-key shortcut if input is not focused
          const isInputFocused = document.activeElement === inputRef.current;
          if (e.altKey || !isInputFocused) {
            const key = e.key.toLowerCase();
            const matched = commandItems.find(item => item.shortcut.toLowerCase() === key);
            if (matched) {
              e.preventDefault();
              if (matched.type === "nav" && matched.href) {
                const el = document.getElementById(matched.href.substring(1));
                if (el) el.scrollIntoView({ behavior: "smooth" });
                setCmdOpen(false);
              } else if (matched.type === "action" && matched.action) {
                matched.action();
                setCmdOpen(false);
              }
            }
          }
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [cmdOpen, filteredItems, selectedIndex]);

  useEffect(() => {
    if (cmdOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setSearchQuery("");
      setSelectedIndex(0);
    }
  }, [cmdOpen]);

  // Reset selectedIndex when filter query changes to prevent index out of bounds
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  return (
    <>
      <nav className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        isScrolled
          ? "py-3"
          : "py-5 bg-transparent"
      )}>
        {isScrolled && (
          <div className="absolute inset-0 glass-strong border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }} />
        )}

        <div className="container-tight relative flex items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
                style={{ background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.25)" }}>
                <Zap className="w-4 h-4" style={{ color: "#06b6d4" }} />
              </div>
              <div>
                <div className="font-black text-sm tracking-[-0.03em] leading-none"
                  style={{ fontFamily: "var(--font-geist), sans-serif", color: "#fff" }}>
                  AKASH SONI
                </div>
                <div className="text-[9px] font-mono uppercase tracking-[0.2em] mt-0.5" style={{ color: "#06b6d4" }}>
                  Backend Engineer
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.div key={link.name} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}>
                <Link href={link.href}
                  className="relative px-3 py-2 text-xs font-mono font-medium text-slate-400 hover:text-white transition-all duration-200 rounded-lg hover:bg-white/5 group">
                  {link.name}
                  <span className="absolute bottom-1 left-3 right-3 h-px bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-60" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right area */}
          <div className="hidden md:flex items-center gap-3">
            {/* Availability */}
            <div className="flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-mono"
              style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.15)", color: "#10b981" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              AVAILABLE
            </div>

            {/* Cmd palette trigger */}
            <button onClick={() => setCmdOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] font-mono text-slate-500 hover:text-slate-300 transition-all cursor-pointer"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <Terminal className="w-3 h-3" style={{ color: "#06b6d4" }} />
              <span>⌘K</span>
            </button>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="#contact"
                className="px-4 py-2 rounded-lg text-[11px] font-mono font-bold text-black transition-all"
                style={{ background: "linear-gradient(135deg, #06b6d4, #3b82f6)", boxShadow: "0 0 20px rgba(6,182,212,0.25)" }}>
                Hire Me →
              </Link>
            </motion.div>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-2">
            <button onClick={() => setCmdOpen(true)} className="p-2 rounded-lg text-slate-400"
              style={{ background: "rgba(255,255,255,0.04)" }}>
              <Terminal className="w-4 h-4" style={{ color: "#06b6d4" }} />
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded-lg text-slate-400"
              style={{ background: "rgba(255,255,255,0.04)" }}>
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }} className="md:hidden overflow-hidden"
              style={{ background: "rgba(6,12,26,0.98)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              <div className="container-tight py-6 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href} onClick={() => setMobileOpen(false)}
                    className="text-sm font-mono text-slate-400 hover:text-white py-2 transition-colors">
                    {link.name}
                  </Link>
                ))}
                <Link href="#contact" onClick={() => setMobileOpen(false)}
                  className="mt-2 py-3 rounded-xl text-center text-sm font-mono font-bold text-black"
                  style={{ background: "linear-gradient(135deg, #06b6d4, #3b82f6)" }}>
                  Hire Me →
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Command Palette */}
      <AnimatePresence>
        {cmdOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setCmdOpen(false)}
              className="absolute inset-0" style={{ background: "rgba(1,2,8,0.85)", backdropFilter: "blur(12px)" }} />

            <motion.div initial={{ opacity: 0, scale: 0.95, y: -20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full max-w-lg relative z-10 overflow-hidden rounded-2xl"
              style={{ background: "#080d1a", border: "1px solid rgba(6,182,212,0.15)", boxShadow: "0 0 80px rgba(6,182,212,0.1), 0 25px 50px rgba(0,0,0,0.7)" }}>

              <div className="flex items-center gap-3 px-4 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                <Search className="w-4 h-4 shrink-0" style={{ color: "#06b6d4" }} />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type a command or jump to section..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-sm font-mono text-slate-300 focus:outline-none"
                  style={{ caretColor: "#06b6d4" }}
                />
                <kbd className="text-[10px] font-mono text-slate-500 border border-white/10 px-1.5 py-0.5 rounded bg-white/5">ESC</kbd>
              </div>

              <div className="p-2 max-h-72 overflow-y-auto no-scrollbar space-y-1">
                {filteredItems.length === 0 ? (
                  <p className="px-3 py-4 text-center text-xs font-mono text-slate-500">
                    No results found for &quot;{searchQuery}&quot;
                  </p>
                ) : (
                  filteredItems.map((item, index) => {
                    const isSelected = index === selectedIndex;
                    const isNav = item.type === "nav";

                    const handleItemClick = (e: React.MouseEvent) => {
                      if (isNav && item.href) {
                        e.preventDefault();
                        const el = document.getElementById(item.href.substring(1));
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                        setCmdOpen(false);
                      } else if (item.action) {
                        item.action();
                        setCmdOpen(false);
                      }
                    };

                    return (
                      <button
                        key={item.name}
                        onClick={handleItemClick}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={cn(
                          "w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-mono transition-all text-left border cursor-pointer",
                          isSelected
                            ? "bg-white/5 text-white border-cyan-500/30"
                            : "text-slate-400 hover:text-white hover:bg-white/3 border-transparent"
                        )}
                      >
                        <span className="flex items-center gap-2">
                          {isNav ? (
                            <Code className="w-3.5 h-3.5" style={{ color: "#06b6d4" }} />
                          ) : item.isEmail ? (
                            <Mail className="w-3.5 h-3.5" style={{ color: "#06b6d4" }} />
                          ) : (
                            <User className="w-3.5 h-3.5" style={{ color: "#06b6d4" }} />
                          )}
                          {item.isEmail && copied ? "Email Copied! ✓" : item.name}
                        </span>
                        <kbd className={cn(
                          "text-[9px] bg-white/5 border px-1.5 py-0.5 rounded transition-colors font-mono",
                          isSelected ? "border-cyan-500/30 text-cyan-400" : "border-white/10 text-slate-500"
                        )}>
                          {item.shortcut}
                        </kbd>
                      </button>
                    );
                  })
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
