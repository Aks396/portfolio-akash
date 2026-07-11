"use client";

import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Play, RefreshCw, Terminal, CheckCircle2, AlertTriangle, FileCode, ServerCrash, X, Code2, Link as LinkIcon, Info } from "lucide-react";

const projects = [
  {
    id: "ats",
    num: "01",
    title: "ATS-Checker",
    subtitle: "AI-Powered Career Intelligence Platform",
    role: "Full Stack & AI Developer",
    impact: "Gemini AI · Career Analytics",
    accentColor: "#ffffff",
    githubUrl: "https://github.com/Aks396/ATS-Checker",
    liveUrl: "https://github.com/Aks396/ATS-Checker",
    fileName: "ResumeParser.ts",
    diagram: `[PDF Inbound] -> [Scrape Bytes Node] -> [Gemini 2.5 API]
                                            |
                                            v (Extract Resume Sections)
[Dashboard Analytics UI] <--- [JSON Result Object]`,
    description: "AI-powered platform that analyzes resumes, improves ATS scores, and matches candidates with job descriptions using advanced AI parser models, keyword relevance metrics, and recruiter-style feedback.",
    metrics: [
      { label: "Resume Parse Accuracy", value: "98%" },
      { label: "Scan Speed", value: "<1.5s" },
      { label: "Recruiter Feedback", value: "Automated" },
    ],
    contributions: [
      "Engineered automated resume parsing pipeline utilizing Gemini multimodal vision and extraction APIs",
      "Designed keyword density scoring algorithms to assess job description matching accuracy",
      "Built a modern React-based candidate feedback dashboard with detailed analytics and PDF reports",
    ],
    tags: ["TypeScript", "Next.js", "Gemini AI", "Tailwind CSS", "Node.js", "Docker"],
    code: `import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: Request) {
  const { pdfBytes, jobDescription } = await req.json();
  const model = ai.models.get("gemini-2.5-flash");
  const response = await model.generateContent([
    { inlineData: { mimeType: "application/pdf", data: pdfBytes } },
    \`Compare this resume with the job description: \${jobDescription}. Return JSON: { score: number, matches: string[], missing: string[] }\`
  ]);
  return Response.json(JSON.parse(response.text));
}`
  },
  {
    id: "tinyurl",
    num: "02",
    title: "TinyURL AI Platform",
    subtitle: "Smart URL Shortener & Analytics Platform",
    role: "Backend & Systems Engineer",
    impact: "Spring Boot · Redis Caching",
    accentColor: "#2997ff",
    githubUrl: "https://github.com/Aks396/tinyurl-ai-platform",
    liveUrl: "https://github.com/Aks396/tinyurl-ai-platform",
    fileName: "RedirectionController.java",
    diagram: `[HTTP Get /alias] -> [Redis Cache Check] --(Hit)----> [Redirect 301]
                             |
                          (Miss)
                             v
                       [MySQL Query] -> [Write Redis Cache] -> [Redirect 301]`,
    description: "AI-powered URL shortener platform built with Java 21, Spring Boot, MySQL, and Redis caching. Employs AI-based URL safety analysis, smart alias generation, and real-time security scoring.",
    metrics: [
      { label: "Redirection SLA", value: "Sub-ms" },
      { label: "Threat Detection", value: "Real-time" },
      { label: "Cache Hit Ratio", value: "94%" },
    ],
    contributions: [
      "Architected high-throughput redirection endpoints using Redis distributed caching to minimize database reads",
      "Integrated Gemini API to analyze destination URL safety and dynamically generate semantic aliases",
      "Implemented JWT security, role-based authorization, and real-time click analytics dashboard pipelines",
    ],
    tags: ["Java 21", "Spring Boot", "Redis", "MySQL", "Spring Security", "JWT", "Docker"],
    code: `@RestController
@RequestMapping("/api/v1/tinyurl")
public class RedirectionController {
    @Autowired private RedisTemplate<String, String> redis;
    @Autowired private UrlRepository repository;
    
    @GetMapping("/{alias}")
    @Cacheable(value = "urls", key = "#alias")
    public ResponseEntity<?> redirect(@PathVariable String alias) {
        String dest = redis.opsForValue().get(alias);
        if (dest != null) {
            return ResponseEntity.status(301).location(URI.create(dest)).build();
        }
        Url url = repository.findByAlias(alias)
            .orElseThrow(() -> new ResourceNotFoundException());
        redis.opsForValue().set(alias, url.getDestination(), Duration.ofHours(24));
        return ResponseEntity.status(301).location(URI.create(url.getDestination())).build();
    }
}`
  },
  {
    id: "cura",
    num: "03",
    title: "CURA Autism AI",
    subtitle: "AI-Enabled Early Autism Screening & Care Management",
    role: "Full Stack Developer",
    impact: "Clinical AI · Diagnostics Support",
    accentColor: "#ff9f0a",
    githubUrl: "https://github.com/Aks396/CURA-Autism-AI",
    liveUrl: "https://github.com/Aks396/CURA-Autism-AI",
    fileName: "AutismScreeningService.py",
    diagram: `[User Screening Inputs] -> [Gemini API Evaluation]
                                   |
                                   v (Developmental Score)
                           [MySQL Care Plans DB]
                                   |
                                   v
                           [HIPAA Secured Family Portal]`,
    description: "Early autism screening, diagnosis support, and post-diagnosis care management platform employing AI algorithms to analyze diagnostic indicators and generate personalized care pathways.",
    metrics: [
      { label: "Screening Indicators", value: "Verified" },
      { label: "Pathway Latency", value: "Instant" },
      { label: "Care Management", value: "Dynamic" },
    ],
    contributions: [
      "Built screening models using Gemini Vision APIs to evaluate user sensory and cognitive responses",
      "Designed a dynamic post-screening care generator creating customized daily guides and clinical resources",
      "Developed a HIPAA-aligned client dashboard for therapists and families to monitor cognitive progression",
    ],
    tags: ["Next.js", "Python", "Google Gemini", "React", "MySQL", "Tailwind CSS"],
    code: `from google import genai
import os

client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])

def evaluate_assessment(patient_responses: list) -> dict:
    prompt = f"Analyze child sensory indicators: {patient_responses}. Evaluate M-CHAT score and care pathway."
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )
    return parse_ai_response(response.text)`
  },
  {
    id: "newspaper",
    num: "04",
    title: "Newspaper System Design",
    subtitle: "High-Throughput Content Management System",
    role: "Backend Architect",
    impact: "Java · System Architecture",
    accentColor: "#30d158",
    githubUrl: "https://github.com/Aks396",
    liveUrl: "https://github.com/Aks396",
    fileName: "ArticlePublisher.java",
    diagram: `[Ingest Article] -> [Kafka Publish Thread] -> [Topic: articles_publish]
                                                      |
                                           +----------+----------+
                                           |                     |
                                           v                     v
                                     [CDN Web Sync]       [MySQL Persistence]`,
    description: "Java-based system design application built to handle heavy concurrent publishing, search, and distribution of articles utilizing high-throughput event queues and relational schemas.",
    metrics: [
      { label: "Event Delivery", value: "Zero-loss" },
      { label: "Concurrency Scale", value: "High" },
      { label: "Ingestion Speed", value: "<10ms" },
    ],
    contributions: [
      "Design database schema with query optimizations for heavy read-write operations under load",
      "Implemented decoupled messaging publisher-subscriber architecture to handle distribution event queues",
      "Engineered automated JUnit suite with Mockito to validate concurrency safety and database txn isolation",
    ],
    tags: ["Java", "System Design", "Apache Kafka", "MySQL", "Concurrency", "JUnit", "Mockito"],
    code: `@Service
public class ArticlePublisher {
    @Autowired private KafkaTemplate<String, String> kafkaTemplate;
    private static final String TOPIC = "newspaper_articles_publish";
    
    public void publish(Article article) {
        String payload = JsonMapper.writeValueAsString(article);
        CompletableFuture<SendResult<String, String>> future = 
            kafkaTemplate.send(TOPIC, article.getId(), payload);
        future.whenComplete((result, ex) -> {
            if (ex == null) {
                log.info("Article delivered offset: {}", result.getRecordMetadata().offset());
            } else {
                log.error("Kafka delivery failure", ex);
            }
        });
    }
}`
  },
];

// Visual Simulator Components
const ATSSimulator = () => {
  const [step, setStep] = useState(0);
  const [logs, setLogs] = useState<string[]>(["System Idle — Awaiting Resume Upload"]);
  const nodes = ["File Ingest", "AI Parse", "Keywords", "Score Calc", "Report Ready"];

  const run = () => {
    setStep(1); setLogs(["[Ingest] Inbound resume received: cv_software_engineer.pdf"]);
    const msgs = [
      "[AI Parse] Extracting text and sections using Gemini. Confidence: 99%",
      "[Keywords] Density: Java (4.2%), Spring Boot (3.1%), Kafka (1.8%)",
      "[Score Calc] Match score computed: 88/100",
      "[Report Ready] Success response compiled. Return JSON to Client ✓"
    ];
    msgs.forEach((m, idx) => {
      setTimeout(() => {
        setStep(idx + 2);
        setLogs((p) => [...p, m]);
      }, (idx + 1) * 1200);
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Simulator: Ingest & Parse</span>
        <button onClick={run} disabled={step > 0}
          className="px-3 py-1 rounded-full text-[9px] font-mono font-bold text-black bg-white hover:bg-slate-200 transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50">
          <Play className="w-2.5 h-2.5" /> RUN SIMULATOR
        </button>
      </div>

      <div className="flex justify-between items-center px-4 py-2.5 rounded-xl border border-white/5 bg-black/40">
        {nodes.map((n, idx) => (
          <div key={n} className="flex items-center gap-1">
            <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[7px] font-mono font-bold border transition-colors ${
              step > idx ? "bg-white border-white text-black" : "border-white/10 text-slate-600"
            }`}>
              {idx + 1}
            </div>
            <span className={`text-[8px] font-mono hidden sm:inline ${step > idx ? "text-white" : "text-slate-600"}`}>{n}</span>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-xl border border-white/5 bg-black/60 font-mono text-[9px] text-slate-400 space-y-1.5 h-32 overflow-y-auto no-scrollbar">
        {logs.map((l, i) => (
          <p key={i} className="flex items-start gap-1.5">
            <span className="text-slate-600 font-bold">&gt;</span>
            <span>{l}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

const TinyURLSimulator = () => {
  const [step, setStep] = useState(0);
  const [logs, setLogs] = useState<string[]>(["Redirection Router: Idle"]);

  const run = () => {
    setStep(1); setLogs(["[Router] GET /t/short-alias -> Inbound redirect request"]);
    setTimeout(() => {
      setStep(2); setLogs((p) => [...p, "[Cache] Redis check: 'urls:short-alias' -> MISS"]);
    }, 1000);
    setTimeout(() => {
      setStep(3); setLogs((p) => [...p, "[MySQL] Query: SELECT destination FROM urls WHERE alias='short-alias' -> Found"]);
    }, 2000);
    setTimeout(() => {
      setStep(4); setLogs((p) => [...p, "[Cache] Redis write: 'urls:short-alias' -> Cached for 24h"]);
    }, 3000);
    setTimeout(() => {
      setStep(5); setLogs((p) => [...p, "[Router] Response: 301 Redirect -> Location: https://dest.com/original-url ✓"]);
    }, 4000);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Simulator: cache & router</span>
        <button onClick={run} disabled={step > 0}
          className="px-3 py-1 rounded-full text-[9px] font-mono font-bold text-black bg-white hover:bg-slate-200 transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50">
          <Play className="w-2.5 h-2.5" /> RUN SIMULATOR
        </button>
      </div>

      <div className="grid grid-cols-5 gap-1.5 text-center">
        {["Client", "Router", "Redis", "MySQL", "Redirect"].map((n, idx) => (
          <div key={n} className={`p-2 rounded-lg border text-[8px] font-mono ${
            step > idx ? "bg-white border-white text-black font-bold" : "border-white/5 text-slate-600"
          }`}>{n}</div>
        ))}
      </div>

      <div className="p-4 rounded-xl border border-white/5 bg-black/60 font-mono text-[9px] text-slate-400 space-y-1.5 h-32 overflow-y-auto no-scrollbar">
        {logs.map((l, i) => (
          <p key={i} className="flex items-start gap-1.5">
            <span className="text-slate-600 font-bold">&gt;</span>
            <span>{l}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

const CURASimulator = () => {
  const [step, setStep] = useState(0);
  const [logs, setLogs] = useState<string[]>(["Diagnosis Engine: Idle"]);

  const run = () => {
    setStep(1); setLogs(["[Ingress] Screening metadata package received"]);
    setTimeout(() => {
      setStep(2); setLogs((p) => [...p, "[AI Model] Sending indicators to Gemini Flash context"]);
    }, 1200);
    setTimeout(() => {
      setStep(3); setLogs((p) => [...p, "[AI Model] Gemini: Evaluation score 8/10, M-CHAT pathway indicated"]);
    }, 2400);
    setTimeout(() => {
      setStep(4); setLogs((p) => [...p, "[Database] Saving pathway metadata and generating care guide"]);
    }, 3600);
    setTimeout(() => {
      setStep(5); setLogs((p) => [...p, "[Ingress] Response compiled. Clinical portal updated ✓"]);
    }, 4800);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Simulator: AI Assessment</span>
        <button onClick={run} disabled={step > 0}
          className="px-3 py-1 rounded-full text-[9px] font-mono font-bold text-black bg-white hover:bg-slate-200 transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50">
          <Play className="w-2.5 h-2.5" /> RUN SIMULATOR
        </button>
      </div>

      <div className="flex justify-between items-center px-4 py-2.5 rounded-xl border border-white/5 bg-black/40">
        {["Screening", "Evaluation", "Diagnosis", "Care Pathway"].map((n, idx) => (
          <div key={n} className="flex items-center gap-1">
            <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[7px] font-mono font-bold border ${
              step > idx ? "bg-white border-white text-black" : "border-white/10 text-slate-600"
            }`}>
              {idx + 1}
            </div>
            <span className={`text-[8px] font-mono hidden sm:inline ${step > idx ? "text-white" : "text-slate-600"}`}>{n}</span>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-xl border border-white/5 bg-black/60 font-mono text-[9px] text-slate-400 space-y-1.5 h-32 overflow-y-auto no-scrollbar">
        {logs.map((l, i) => (
          <p key={i} className="flex items-start gap-1.5">
            <span className="text-slate-600 font-bold">&gt;</span>
            <span>{l}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

const KafkaSimulator = () => {
  const [logs, setLogs] = useState<string[]>(["Broker Cluster: Standing By"]);
  const [running, setRunning] = useState(false);

  const run = () => {
    setRunning(true);
    setLogs(["[Broker] Inbound event publisher: ArticlePublisher initialized"]);
    setTimeout(() => {
      setLogs((p) => [...p, "[Kafka] Publishing article: 'id_3962' to topic 'newspaper_articles_publish'"]);
    }, 800);
    setTimeout(() => {
      setLogs((p) => [...p, "[Kafka] Event delivered successfully. Offset: 1420"]);
    }, 1600);
    setTimeout(() => {
      setLogs((p) => [...p, "[CDN Sync] Synced CDN cache layer for rapid delivery"]);
    }, 2400);
    setTimeout(() => {
      setLogs((p) => [...p, "[MySQL] Persistent write completed. Article operational ✓"]);
      setRunning(false);
    }, 3200);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Simulator: message broker</span>
        <button onClick={run} disabled={running}
          className="px-3 py-1 rounded-full text-[9px] font-mono font-bold text-black bg-white hover:bg-slate-200 transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50">
          <Play className="w-2.5 h-2.5" /> PUBLISH EVENT
        </button>
      </div>

      <div className="p-4 rounded-xl border border-white/5 bg-black/60 font-mono text-[9px] text-slate-400 space-y-1.5 h-32 overflow-y-auto no-scrollbar">
        {logs.map((l, i) => (
          <p key={i} className="flex items-start gap-1.5">
            <span className="text-slate-600 font-bold">&gt;</span>
            <span>{l}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

const simulators = { ats: ATSSimulator, tinyurl: TinyURLSimulator, cura: CURASimulator, newspaper: KafkaSimulator };

export const ArchitectureSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  
  // Selected project state for Apple WWDC-style detailed overlay modal
  const [selectedProj, setSelectedProj] = useState<typeof projects[0] | null>(null);
  const [activeTab, setActiveTab] = useState<"simulation" | "code" | "diagram">("simulation");

  const Simulator = selectedProj ? simulators[selectedProj.id as keyof typeof simulators] : () => null;

  const renderHighlightedCode = (codeText: string) => {
    const lines = codeText.split("\n");
    return (
      <pre className="text-[10px] font-mono leading-relaxed text-slate-400 overflow-x-auto p-4 select-text">
        <code>
          {lines.map((line, idx) => {
            let processed = line;
            processed = processed
              .replace(/import|from|export|async|function|class|public|private|new|return|def|var|const|await/g, (m) => `<span class="text-purple-400">${m}</span>`)
              .replace(/(@RestController|@RequestMapping|@Autowired|@Cacheable|@GetMapping|@PathVariable|@Service)/g, (m) => `<span class="text-amber-500">${m}</span>`)
              .replace(/(".*?"|'.*?'|`.*?`)/g, (m) => `<span class="text-emerald-400">${m}</span>`)
              .replace(/(\bUrl\b|\bResponseEntity\b|\bRedisTemplate\b|\bCompletableFuture\b|\bGoogleGenAI\b)/g, (m) => `<span class="text-blue-400">${m}</span>`);
            return (
              <div key={idx} className="table-row">
                <span className="table-cell text-right pr-4 text-slate-700 select-none w-6">{idx + 1}</span>
                <span className="table-cell" dangerouslySetInnerHTML={{ __html: processed || "&nbsp;" }} />
              </div>
            );
          })}
        </code>
      </pre>
    );
  };

  return (
    <section id="projects" ref={ref} className="relative border-t border-white/5" style={{ background: "#050505" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }} />

      <div className="container-tight section-padding">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="mb-14">
          <span className="mono-label">Case Studies</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.03em] text-white mt-2"
            style={{ fontFamily: "var(--font-geist), sans-serif" }}>
            Technical <span className="text-slate-500">Projects</span>
          </h2>
          <p className="mt-3 text-xs font-mono text-slate-500 max-w-sm">
            Explore architectural systems, source code syntax, and interactive simulators.
          </p>
        </motion.div>

        {/* Apple Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl glass-card relative overflow-hidden flex flex-col justify-between min-h-[260px] group border border-white/8 bg-white/2"
            >
              <div className="absolute top-0 left-0 right-0 h-[1.5px]"
                style={{ background: `linear-gradient(90deg, transparent, ${p.accentColor}30, transparent)` }} />

              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-slate-500">{p.impact}</span>
                  <span className="text-xs font-mono font-bold text-slate-700">{p.num}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-white">{p.title}</h3>
                  <p className="text-[11px] font-mono text-slate-500 mt-0.5">{p.subtitle}</p>
                </div>
                <p className="text-xs text-slate-400 font-mono leading-relaxed line-clamp-3">
                  {p.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4">
                {p.tags.slice(0, 4).map((t) => (
                  <span key={t} className="text-[8.5px] font-mono px-2 py-0.5 rounded-full border border-white/5 bg-white/2 text-slate-500">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[8.5px] font-mono text-slate-600 uppercase tracking-widest">Active System</span>
                <button
                  onClick={() => { setSelectedProj(p); setActiveTab("simulation"); }}
                  className="px-3.5 py-1.5 rounded-full text-[9px] font-mono font-bold text-black bg-white hover:bg-slate-200 transition-all cursor-pointer"
                >
                  Explore Case Study
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Screen Backdrop Detail Modal Overlay */}
      <AnimatePresence>
        {selectedProj && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedProj(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-xl" />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              className="w-full max-w-4xl h-[85vh] relative z-10 overflow-hidden rounded-3xl border border-white/10 flex flex-col justify-between"
              style={{ background: "#060c1a", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.8)" }}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-black/30">
                <div className="flex items-center gap-3">
                  <span className="text-[9px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/8 text-slate-400">
                    CASE STUDY: {selectedProj.num}
                  </span>
                  <h3 className="text-sm font-bold text-white font-mono">{selectedProj.title}</h3>
                </div>
                <button onClick={() => setSelectedProj(null)}
                  className="p-1 rounded-full border border-white/8 hover:border-white/20 bg-white/3 text-slate-500 hover:text-white transition-colors cursor-pointer">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Modal Body Container */}
              <div className="flex-1 overflow-y-auto no-scrollbar p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Left pane: Details (span 5) */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="space-y-2">
                    <span className="text-[8px] font-mono uppercase tracking-[0.2em] font-bold text-cyan-400">{selectedProj.impact}</span>
                    <h4 className="text-base font-black text-white">{selectedProj.title}</h4>
                    <p className="text-[10px] font-mono text-slate-400 leading-relaxed">{selectedProj.description}</p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2">
                    {selectedProj.metrics.map((m) => (
                      <div key={m.label} className="p-2.5 rounded-xl text-center bg-black/40 border border-white/5">
                        <div className="text-xs font-bold text-white font-mono">{m.value}</div>
                        <div className="text-[7.5px] font-mono text-slate-600 mt-0.5 uppercase tracking-tighter">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Contributions */}
                  <div className="space-y-2 border-t border-white/5 pt-4">
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block">Key Engineering Deliverables</span>
                    <div className="space-y-2">
                      {selectedProj.contributions.map((c, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[9.5px] font-mono text-slate-400 leading-normal">
                          <CheckCircle2 className="w-3 h-3 text-green-400 shrink-0 mt-0.5" />
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-2 pt-2">
                    <a href={selectedProj.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl text-[9px] font-mono font-bold text-slate-200 border border-white/8 hover:border-white/20 bg-white/2 hover:bg-white/5 transition-all flex items-center gap-1.5 cursor-pointer">
                      <Code2 className="w-3 h-3" /> GitHub Repo
                    </a>
                    <a href={selectedProj.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl text-[9px] font-mono font-bold text-black bg-white hover:bg-slate-200 transition-all flex items-center gap-1.5 cursor-pointer">
                      <LinkIcon className="w-3 h-3" /> Live Demo
                    </a>
                  </div>
                </div>

                {/* Right pane: Interactive workspace tab panel (span 7) */}
                <div className="lg:col-span-7 flex flex-col justify-between border border-white/8 rounded-2xl overflow-hidden bg-black/40 h-[380px] lg:h-auto">
                  
                  {/* Tab header */}
                  <div className="flex justify-between items-center px-4 py-2.5 border-b border-white/5 bg-black/20">
                    <div className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-slate-500" />
                      <span className="font-mono text-[9px] text-slate-400">{selectedProj.fileName}</span>
                    </div>

                    <div className="flex gap-1.5 bg-white/3 border border-white/5 p-0.5 rounded-lg">
                      {[
                        { id: "simulation", label: "Simulator" },
                        { id: "code", label: "Source" },
                        { id: "diagram", label: "Diagram" },
                      ].map((t) => (
                        <button key={t.id} onClick={() => setActiveTab(t.id as any)}
                          className={`px-2.5 py-1 rounded-md text-[8px] font-mono font-bold uppercase transition-all cursor-pointer ${
                            activeTab === t.id ? "bg-white text-black shadow-sm" : "text-slate-500 hover:text-slate-300"
                          }`}>
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tab content area */}
                  <div className="flex-1 overflow-auto p-4">
                    {activeTab === "simulation" && (
                      <div className="h-full flex flex-col justify-between">
                        <Simulator />
                      </div>
                    )}

                    {activeTab === "code" && (
                      <div className="rounded-xl border border-white/5 bg-black/50 overflow-hidden">
                        {renderHighlightedCode(selectedProj.code)}
                      </div>
                    )}

                    {activeTab === "diagram" && (
                      <div className="h-full flex flex-col justify-between gap-4">
                        <div className="flex items-center gap-1.5">
                          <Info className="w-3.5 h-3.5 text-slate-500" />
                          <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">ASCIi Architecture Graph</span>
                        </div>
                        <pre className="p-4 rounded-xl border border-white/5 bg-black/50 text-[9px] font-mono text-cyan-400 leading-normal overflow-x-auto select-all">
                          {selectedProj.diagram}
                        </pre>
                        <div className="text-[7.5px] font-mono text-slate-600 text-center leading-normal">
                          Diagram maps logical request hops through container endpoints.
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
