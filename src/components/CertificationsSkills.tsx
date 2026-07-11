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
    color: "#ff9f0a",
    badge: "☁️",
  },
  {
    title: "Data Streaming Engineer",
    subtitle: "Certified SME (Confluent/Kafka)",
    issuer: "Confluent",
    year: "2023",
    color: "#30d158",
    badge: "📨",
  },
];

const skills = [
  { category: "Core Languages", items: ["Java 21 / 17", "Python 3.x", "TypeScript", "SQL"], color: "#ffffff" },
  { category: "Backend Frameworks", items: ["Spring Boot 3.x", "Spring WebFlux", "FastAPI", "Spring Security"], color: "#2997ff" },
  { category: "Messaging & Cache", items: ["Apache Kafka", "Redis", "RabbitMQ"], color: "#bf5af2" },
  { category: "Cloud & DevOps", items: ["AWS (EC2, S3, RDS)", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"], color: "#30d158" },
  { category: "AI & Integration", items: ["Gemini API", "OpenAI GPT-4", "Claude", "Prompt Engineering", "Resume Intelligence", "Tesseract OCR"], color: "#ff9f0a" },
  { category: "Data & Testing", items: ["PostgreSQL", "MySQL", "JUnit 5", "Mockito", "TestNG"], color: "#ff453a" },
];

export const CertificationsSkills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" ref={ref} className="relative border-t border-white/5"
      style={{ background: "#050505" }}>
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

      <div className="container-tight section-padding">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="mb-14">
          <span className="mono-label">Credentials</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.03em] text-white mt-2"
            style={{ fontFamily: "var(--font-geist), sans-serif" }}>
            Certifications &amp; <span className="text-slate-500">Skills</span>
          </h2>
        </motion.div>

        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {certifications.map((cert, i) => (
            <motion.div key={cert.title}
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="p-6 rounded-3xl glass-card relative overflow-hidden group border border-white/8 bg-white/2">
              <div className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(90deg, transparent, ${cert.color}40, transparent)` }} />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xl mb-3">{cert.badge}</div>
                  <h3 className="text-sm font-bold text-white font-mono">{cert.title}</h3>
                  <p className="text-[10px] font-mono text-slate-500 mt-1">{cert.subtitle}</p>
                  <div className="flex items-center gap-2 mt-4">
                    <span className="text-[9px] font-mono px-2.5 py-0.5 rounded-full border border-white/8 bg-white/4 text-slate-400">
                      {cert.issuer}
                    </span>
                    <span className="text-[9px] font-mono text-slate-600">{cert.year}</span>
                  </div>
                </div>
                <Award className="w-5 h-5 shrink-0 mt-1 text-slate-400" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, si) => (
            <motion.div key={skill.category}
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + si * 0.06 }}
              className="p-5 rounded-3xl glass-card border border-white/8 bg-white/2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: skill.color }} />
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] font-bold" style={{ color: skill.color }}>
                  {skill.category}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skill.items.map((item) => (
                  <span key={item} className="px-2.5 py-1 rounded-full text-[9px] font-mono border border-white/5 bg-white/2 text-slate-400">
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
