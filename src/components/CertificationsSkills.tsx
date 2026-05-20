"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    subtitle: "Associate — SAA-C03",
    issuer: "Amazon Web Services",
    year: "2024",
    color: "#f59e0b",
    badge: "☁️",
  },
  {
    title: "Java SE 11 Developer",
    subtitle: "Oracle Certified Professional",
    issuer: "Oracle",
    year: "2023",
    color: "#ef4444",
    badge: "☕",
  },
];

const skills = [
  { category: "Core Languages", items: ["Java 17+", "Python 3.x", "TypeScript", "SQL"], color: "#06b6d4" },
  { category: "Backend Frameworks", items: ["Spring Boot 3.x", "Spring WebFlux", "FastAPI", "Spring Security"], color: "#3b82f6" },
  { category: "Messaging & Cache", items: ["Apache Kafka", "Redis", "RabbitMQ"], color: "#8b5cf6" },
  { category: "Cloud & DevOps", items: ["AWS (EC2, S3, RDS)", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"], color: "#10b981" },
  { category: "AI & Integration", items: ["Gemini API", "OpenAI GPT-4", "Claude", "FHIR R4", "HL7", "Tesseract OCR"], color: "#f59e0b" },
  { category: "Data & Testing", items: ["PostgreSQL", "MySQL", "JUnit 5", "Mockito", "TestNG"], color: "#ef4444" },
];

export const CertificationsSkills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" ref={ref} className="relative border-t"
      style={{ borderColor: "rgba(255,255,255,0.04)", background: "#010208" }}>
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="container-tight section-padding">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="mb-14">
          <span className="mono-label">Credentials</span>
          <h2 className="text-3xl md:text-4xl font-black tracking-[-0.03em] text-white"
            style={{ fontFamily: "var(--font-geist), sans-serif" }}>
            Certifications &amp; <span className="gradient-text-cyan">Skills</span>
          </h2>
        </motion.div>

        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {certifications.map((cert, i) => (
            <motion.div key={cert.title}
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 rounded-2xl card-hover relative overflow-hidden"
              style={{ background: "#060c1a", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)` }} />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-2xl mb-2">{cert.badge}</div>
                  <h3 className="text-sm font-bold text-white font-mono">{cert.title}</h3>
                  <p className="text-[11px] font-mono text-slate-500 mt-0.5">{cert.subtitle}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded"
                      style={{ background: `${cert.color}10`, border: `1px solid ${cert.color}20`, color: cert.color }}>
                      {cert.issuer}
                    </span>
                    <span className="text-[9px] font-mono text-slate-600">{cert.year}</span>
                  </div>
                </div>
                <Award className="w-5 h-5 shrink-0 mt-1" style={{ color: cert.color }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, si) => (
            <motion.div key={skill.category}
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + si * 0.08 }}
              className="p-5 rounded-2xl card-hover"
              style={{ background: "#060c1a", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full" style={{ background: skill.color }} />
                <span className="text-[9px] font-mono uppercase tracking-widest font-bold" style={{ color: skill.color }}>
                  {skill.category}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skill.items.map((item) => (
                  <span key={item} className="px-2 py-1 rounded-lg text-[10px] font-mono"
                    style={{ background: `${skill.color}08`, border: `1px solid ${skill.color}18`, color: "#64748b" }}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
