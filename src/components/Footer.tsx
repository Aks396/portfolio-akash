"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Zap } from "lucide-react";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t" style={{ borderColor: "rgba(255,255,255,0.04)", background: "#010208" }}>
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.4), rgba(139,92,246,0.2), transparent)" }} />

      <div className="container-tight py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left: Logo + tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "rgba(6,182,212,0.08)", border: "1px solid rgba(6,182,212,0.15)" }}>
              <Zap className="w-4 h-4" style={{ color: "#06b6d4" }} />
            </div>
            <div>
              <div className="font-black text-sm tracking-[-0.03em] text-white"
                style={{ fontFamily: "var(--font-geist), sans-serif" }}>
                AKASH SONI
              </div>
              <div className="text-[9px] font-mono text-slate-600 mt-0.5">
                Backend Engineer · AI Infrastructure
              </div>
            </div>
          </div>

          {/* Center: Status */}
          <div className="flex items-center gap-1.5 text-[10px] font-mono"
            style={{ color: "#10b981" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for New Opportunities
          </div>

          {/* Right: Socials */}
          <div className="flex items-center gap-3">
            {[
              { href: "https://github.com/Aks396", icon: Github, label: "GitHub" },
              { href: "https://linkedin.com/in/akash-soni396", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:sameersoni396@gmail.com", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}
                aria-label={label}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(6,182,212,0.3)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(6,182,212,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                }}>
                <Icon className="w-4 h-4 text-slate-500" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-2 text-[9px] font-mono text-slate-700"
          style={{ borderColor: "rgba(255,255,255,0.04)" }}>
          <span>© {year} Akash Soni. All rights reserved.</span>
          <span>Built with Next.js · TypeScript · Framer Motion</span>
        </div>
      </div>
    </footer>
  );
};
