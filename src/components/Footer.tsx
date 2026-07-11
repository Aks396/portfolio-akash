"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Zap } from "lucide-react";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5" style={{ background: "#050505" }}>
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }} />

      <div className="container-tight py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left: Logo + tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center border border-white/8 bg-white/4">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="font-bold text-sm tracking-[-0.03em] text-white"
                style={{ fontFamily: "var(--font-geist), sans-serif" }}>
                AKASH SONI
              </div>
              <div className="text-[9px] font-mono text-slate-500 mt-0.5">
                Backend Engineer · AI Infrastructure
              </div>
            </div>
          </div>

          {/* Center: Status */}
          <div className="flex items-center gap-1.5 text-[9px] font-mono text-green-400 font-bold uppercase tracking-wider">
            <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
            Available for Opportunities
          </div>

          {/* Right: Socials */}
          <div className="flex items-center gap-3">
            {[
              { href: "https://github.com/Aks396", icon: Github, label: "GitHub" },
              { href: "https://linkedin.com/in/akash-soni396", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:sameersoni396@gmail.com", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                aria-label={label}
                className="w-8 h-8 rounded-full flex items-center justify-center border border-white/8 bg-white/2 hover:bg-white/5 transition-colors cursor-pointer"
              >
                <Icon className="w-4 h-4 text-slate-400" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-2 text-[9px] font-mono text-slate-600">
          <span>© {year} Akash Soni. All rights reserved.</span>
          <span>Built with Next.js · TypeScript · Framer Motion</span>
        </div>
      </div>
    </footer>
  );
};
