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
  const [activeSection, setActiveSection] = useState("");
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
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section to highlight active nav link
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -45% 0px" }
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
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

  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  return (
    <>
      {/* Floating Glass Navbar Wrapper */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl transition-all duration-500">
        <div className={cn(
          "w-full rounded-full border border-white/8 backdrop-blur-2xl transition-all duration-500 flex items-center justify-between px-5 py-2.5",
          isScrolled 
            ? "bg-black/50 shadow-[0_12px_40px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.08)] py-2 border-white/10" 
            : "bg-white/[0.03] shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
        )}>
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group cursor-pointer select-none">
            <div className="w-7 h-7 rounded-full flex items-center justify-center bg-white/10 border border-white/15 transition-all duration-300 group-hover:scale-105">
              <Zap className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="font-bold text-xs tracking-wider text-white">
              AKASH SONI
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/5 rounded-full p-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <Link key={link.name} href={link.href}
                  className={cn(
                    "relative px-4 py-1.5 text-[10px] font-mono tracking-widest uppercase transition-all duration-300 rounded-full select-none cursor-pointer",
                    isActive ? "text-black font-bold" : "text-slate-400 hover:text-white"
                  )}>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavHighlight"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-white rounded-full z-[-1]"
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Actions Block */}
          <div className="hidden md:flex items-center gap-3">
            {/* Cmd palette trigger */}
            <button onClick={() => setCmdOpen(true)}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[9px] font-mono text-slate-400 hover:text-white border border-white/8 bg-white/[0.04] hover:bg-white/[0.08] transition-all cursor-pointer">
              <Terminal className="w-3 h-3 text-white/50" />
              <span>⌘K</span>
            </button>

            <Link href="#contact"
              className="px-4 py-1.5 rounded-full text-[10px] font-mono font-bold text-black bg-white hover:bg-slate-200 transition-all select-none cursor-pointer">
              Hire Me
            </Link>
          </div>

          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center gap-1.5">
            <button onClick={() => setCmdOpen(true)} className="p-2 rounded-full border border-white/8 bg-white/[0.04] text-slate-400 cursor-pointer">
              <Terminal className="w-3.5 h-3.5" />
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded-full border border-white/8 bg-white/[0.04] text-slate-400 cursor-pointer">
              {mobileOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ opacity: 0, scale: 0.95, y: -10 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }} className="md:hidden mt-2 overflow-hidden rounded-3xl border border-white/10 bg-black/90 p-5 backdrop-blur-2xl space-y-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href} onClick={() => setMobileOpen(false)}
                    className="text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-white py-2 border-b border-white/5">
                    {link.name}
                  </Link>
                ))}
                <Link href="#contact" onClick={() => setMobileOpen(false)}
                  className="mt-2 py-3 rounded-full text-center text-xs font-mono font-bold text-black bg-white">
                  Hire Me
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
              className="absolute inset-0 bg-black/85 backdrop-blur-xl" />

            <motion.div initial={{ opacity: 0, scale: 0.96, y: -15 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full max-w-lg relative z-10 overflow-hidden rounded-3xl border border-white/10"
              style={{ background: "rgba(10, 10, 10, 0.95)", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(255,255,255,0.02)" }}>

              <div className="flex items-center gap-3 px-4 py-4 border-b border-white/5">
                <Search className="w-4 h-4 text-white/50 shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type a command or jump to section..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-sm font-mono text-slate-200 focus:outline-none"
                  style={{ caretColor: "#fff" }}
                />
                <kbd className="text-[9px] font-mono text-slate-500 border border-white/10 px-2 py-0.5 rounded-lg bg-white/5">ESC</kbd>
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
                          "w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-mono transition-all text-left border cursor-pointer",
                          isSelected
                            ? "bg-white/5 text-white border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                            : "text-slate-500 hover:text-white hover:bg-white/3 border-transparent"
                        )}
                      >
                        <span className="flex items-center gap-2.5">
                          {isNav ? (
                            <Code className="w-3.5 h-3.5 text-slate-400" />
                          ) : item.isEmail ? (
                            <Mail className="w-3.5 h-3.5 text-slate-400" />
                          ) : (
                            <User className="w-3.5 h-3.5 text-slate-400" />
                          )}
                          {item.isEmail && copied ? "Email Copied! ✓" : item.name}
                        </span>
                        <kbd className={cn(
                          "text-[8px] bg-white/5 border px-2 py-0.5 rounded-lg transition-colors font-mono",
                          isSelected ? "border-white/20 text-white" : "border-white/10 text-slate-600"
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
