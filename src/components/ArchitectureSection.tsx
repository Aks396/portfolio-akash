"use client";

import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Play, RefreshCw, Terminal, CheckCircle2, AlertTriangle, FileCode, ServerCrash, LayoutDashboard } from "lucide-react";

const projects = [
  {
    id: "ats",
    num: "01",
    title: "ATS-Checker",
    subtitle: "AI-Powered Career Intelligence Platform",
    role: "Full Stack & AI Developer",
    impact: "Gemini AI · Career Analytics",
    accentColor: "#06b6d4",
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
    accentColor: "#8b5cf6",
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
    accentColor: "#f59e0b",
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
    accentColor: "#10b981",
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

// Simulator components (visually elevated)
const ATSSimulator = () => {
  const [step, setStep] = useState(0);
  const [logs, setLogs] = useState<string[]>(["System Idle — Awaiting Resume Upload"]);
  const nodes = ["File Ingest", "AI Parse", "Keywords", "Score Calc", "Report Ready"];

  const run = () => {
    setStep(1); setLogs(["[Ingest] Inbound resume received: cv_software_engineer.pdf"]);
    const msgs = [
      "[AI Parse] Extracting text and sections using Gemini. Confidence: 99%",
      "[Keywords] Comparing qualifications against job description. Found 87% match",
      "[Score Calc] Calculating ATS Score: 88/100. Key keywords matched: Java, Spring Boot, Redis",
      "[Report] Ingestion complete. Generated recruiter feedback report ✓",
    ];
    msgs.forEach((m, i) => setTimeout(() => {
      setStep(i + 2); setLogs((p) => [...p, m]);
    }, (i + 1) * 1200));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-mono font-bold text-cyan-400">ATS SCAN PIPELINE</span>
        <button onClick={run} disabled={step > 0 && step < 5}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold transition-all disabled:opacity-40 cursor-pointer"
          style={{ background: "rgba(6,182,212,0.08)", border: "1px solid rgba(6,182,212,0.2)", color: "#06b6d4" }}>
          <Play className="w-3 h-3" /> Analyze Resume
        </button>
      </div>
      <div className="grid grid-cols-5 gap-1.5">
        {nodes.map((n, i) => (
          <div key={n} className="p-1.5 rounded-lg text-center text-[8px] font-mono font-bold border transition-all"
            style={{
              background: step === i + 1 ? "rgba(6,182,212,0.15)" : step > i + 1 ? "rgba(16,185,129,0.08)" : "rgba(255,255,255,0.02)",
              borderColor: step === i + 1 ? "#06b6d4" : step > i + 1 ? "#10b981" : "rgba(255,255,255,0.06)",
              color: step === i + 1 ? "#06b6d4" : step > i + 1 ? "#10b981" : "#475569",
              boxShadow: step === i + 1 ? "0 0 12px rgba(6,182,212,0.2)" : "none",
            }}>{n}</div>
        ))}
      </div>
      <div className="p-3 rounded-xl font-mono text-[10px] space-y-1 h-20 overflow-y-auto no-scrollbar"
        style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.05)" }}>
        {logs.map((l, i) => <p key={i} className="text-slate-400">{l}</p>)}
      </div>
    </div>
  );
};

const TinyURLSimulator = () => {
  const [messages, setMessages] = useState<Array<{ sender: "user" | "ai"; text: string }>>([
    { sender: "ai", text: "TinyURL API online. Choose a URL to shorten and analyze." },
  ]);
  const [streaming, setStreaming] = useState(false);
  const [metrics, setMetrics] = useState({ latency: 0, cache: "—", status: "—" });

  const send = (selectedUrl: string) => {
    if (!selectedUrl.trim() || streaming) return;
    setMessages((p) => [...p, { sender: "user", text: `Shorten: ${selectedUrl}` }]);
    setStreaming(true);
    
    const isSafe = !selectedUrl.includes("malicious-phishing.com");
    const latency = isSafe ? 12 : 280;

    setTimeout(() => {
      const shortAlias = `https://t.ly/${isSafe ? "sf39b" : "bl821"}`;
      const safetyScore = isSafe ? "98/100 (Safe)" : "12/100 (HIGH RISK - Phishing Threat)";
      const resp = `Shortened: ${shortAlias} | AI Security Score: ${safetyScore}. Redis Cache: ${latency === 12 ? "HIT" : "MISS"}`;
      
      setMessages((p) => [...p, { sender: "ai", text: "" }]);
      let i = 0;
      const iv = setInterval(() => {
        setMessages((p) => { const n = [...p]; n[n.length - 1] = { sender: "ai", text: resp.slice(0, i + 1) }; return n; });
        if (++i >= resp.length) { 
          clearInterval(iv); 
          setStreaming(false); 
          setMetrics({ latency, cache: latency === 12 ? "HIT" : "MISS", status: isSafe ? "SAFE" : "THREAT" }); 
        }
      }, 15);
    }, 800);
  };

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-mono font-bold text-purple-400 font-mono">AI URL SHORTENER & SCANNER</span>
      </div>
      <div className="h-28 rounded-xl p-3 space-y-2 overflow-y-auto no-scrollbar flex flex-col"
        style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.05)" }}>
        {messages.map((m, i) => (
          <div key={i} className={`max-w-[85%] p-2 rounded-lg text-[10px] font-mono ${m.sender === "user" ? "self-end" : "self-start"}`}
            style={{ background: m.sender === "user" ? "rgba(139,92,246,0.12)" : "rgba(255,255,255,0.04)", border: `1px solid ${m.sender === "user" ? "rgba(139,92,246,0.2)" : "rgba(255,255,255,0.06)"}`, color: "#94a3b8" }}>
            {m.text || <span className="animate-blink inline-block w-1.5 h-3 bg-purple-400" />}
          </div>
        ))}
      </div>
      <div className="flex gap-2 flex-wrap">
        {["https://github.com/Aks396/portfolio", "https://malicious-phishing.com/bank"].map((p) => (
          <button key={p} onClick={() => send(p)} disabled={streaming}
            className="text-[9px] font-mono px-2 py-1 rounded-lg transition-all disabled:opacity-40 truncate max-w-[200px] cursor-pointer"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", color: "#64748b" }}>
            {p.substring(8)}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 text-center text-[9px] font-mono">
        {[{ l: "Latency", v: `${metrics.latency}ms`, c: "#06b6d4" }, { l: "Cache Status", v: metrics.cache, c: "#10b981" }, { l: "Threat Status", v: metrics.status, c: metrics.status === "SAFE" ? "#10b981" : metrics.status === "THREAT" ? "#ef4444" : "#8b5cf6" }].map((m) => (
          <div key={m.l} className="p-2 rounded-lg" style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <div className="text-slate-600 uppercase mb-0.5">{m.l}</div>
            <div className="font-bold" style={{ color: m.c }}>{m.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CURASimulator = () => {
  const [scanning, setScanning] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [checks, setChecks] = useState<Array<{ name: string; status: "idle" | "success" | "warning" }>>([
    { name: "Sensory Overload Checklist Scan", status: "idle" },
    { name: "Cognitive Response Benchmark Assessment", status: "idle" },
    { name: "Early Autism Diagnostic Index Check", status: "idle" },
    { name: "Care Plan Resource Auto-Mapping", status: "idle" },
  ]);

  const run = () => {
    setScanning(true); setScore(null);
    setChecks((p) => p.map((c) => ({ ...c, status: "idle" })));
    const outcomes: Array<"success" | "warning"> = ["success", "success", "success", "success"];
    outcomes.forEach((o, i) => {
      setTimeout(() => {
        setChecks((p) => p.map((c, ci) => ci === i ? { ...c, status: o } : c));
        if (i === outcomes.length - 1) { setScore(96); setScanning(false); }
      }, (i + 1) * 800);
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-mono font-bold text-amber-400">CURA AI SCREENING DIAGNOSIS</span>
        <button onClick={run} disabled={scanning}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold transition-all disabled:opacity-40 cursor-pointer"
          style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)", color: "#f59e0b" }}>
          <RefreshCw className={`w-3 h-3 ${scanning ? "animate-spin" : ""}`} /> Analyze Indicators
        </button>
      </div>
      <div className="relative p-3 rounded-xl overflow-hidden" style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.05)" }}>
        {scanning && (
          <motion.div initial={{ top: 0 }} animate={{ top: "100%" }} transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
            className="absolute left-0 w-full h-0.5 z-10"
            style={{ background: "rgba(245,158,11,0.5)", boxShadow: "0 0 8px rgba(245,158,11,0.8)" }} />
        )}
        <div className="font-mono text-[10px] text-slate-500 space-y-1">
          <div className="flex justify-between"><span>PATIENT RECORD: CURA-9812</span><span style={{ color: "#f59e0b" }}>[SCREENING ACTIVE]</span></div>
          <p>ASSESSMENT: M-CHAT-R/F // AGE: 36 MONTHS</p>
        </div>
      </div>
      <div className="space-y-1.5">
        {checks.map((c) => (
          <div key={c.name} className="flex items-center justify-between p-2.5 rounded-lg text-[10px] font-mono"
            style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <span className="text-slate-500">{c.name}</span>
            {c.status === "idle" && <span className="text-slate-600">WAITING</span>}
            {c.status === "success" && <span className="flex items-center gap-1" style={{ color: "#10b981" }}><CheckCircle2 className="w-3 h-3" />COMPLETED</span>}
            {c.status === "warning" && <span className="flex items-center gap-1 animate-pulse" style={{ color: "#f59e0b" }}><AlertTriangle className="w-3 h-3" />WARN</span>}
          </div>
        ))}
      </div>
      {score !== null && (
        <div className="p-3 rounded-xl text-center" style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)" }}>
          <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 mb-1">Pathway Alignment Score</div>
          <div className="text-2xl font-black font-mono text-emerald-400">{score}%</div>
        </div>
      )}
    </div>
  );
};

const KafkaSimulator = () => {
  const [logs, setLogs] = useState<string[]>(["Topic 'newspaper_articles_publish' initialized"]);
  const [running, setRunning] = useState(false);

  const publish = () => {
    if (running) return;
    setRunning(true);
    const payloads = [
      '{"articleId":"art_9182","action":"PUBLISH","authorId":"usr_41"}',
      '{"articleId":"art_9182","action":"DISTRIBUTE","target":"web_cdn"}',
    ];
    payloads.forEach((p, i) => {
      setTimeout(() => {
        setLogs((prev) => [
          ...prev,
          `[Broker] Partition: ${i % 2} Offset: ${Math.floor(Math.random() * 100)}`,
          `[Consumer] Payload: ${p}`,
        ]);
        if (i === payloads.length - 1) setRunning(false);
      }, (i + 1) * 1200);
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-mono font-bold text-emerald-400">KAFKA EVENT STREAM</span>
        <button onClick={publish} disabled={running}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold transition-all disabled:opacity-40 cursor-pointer"
          style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)", color: "#10b981" }}>
          <Play className="w-3 h-3" /> Publish CMS Article
        </button>
      </div>
      <div className="p-3 rounded-xl font-mono text-[10px] space-y-1 h-36 overflow-y-auto no-scrollbar"
        style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="flex justify-between text-slate-600 border-b border-white/5 pb-1.5 mb-1.5">
          <span>BROKER CONSOLE</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </div>
        {logs.map((l, i) => (
          <p key={i} style={{ color: l.includes("Payload") ? "#06b6d4" : l.includes("Broker") ? "#10b981" : "#475569" }}>{l}</p>
        ))}
      </div>
    </div>
  );
};

const simulators = { ats: ATSSimulator, tinyurl: TinyURLSimulator, cura: CURASimulator, newspaper: KafkaSimulator };

export const ArchitectureSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeId, setActiveId] = useState("ats");
  const [activeTab, setActiveTab] = useState<"simulation" | "code" | "diagram">("simulation");

  const active = projects.find((p) => p.id === activeId)!;
  const Simulator = simulators[activeId as keyof typeof simulators];

  // Helper for inline syntax highlighting replacement in static pre block
  const renderHighlightedCode = (codeText: string, lang: string) => {
    // Simple mock coloring for files
    const lines = codeText.split("\n");
    return (
      <pre className="text-[10px] font-mono leading-relaxed text-slate-400 overflow-x-auto p-4 select-text">
        <code>
          {lines.map((line, idx) => {
            let processed = line;
            // Simple keyword replacements using HTML strings (safe since it is fixed code)
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
    <section id="projects" ref={ref} className="relative border-t" style={{ borderColor: "rgba(255,255,255,0.04)", background: "#030810" }}>
      <div className="absolute inset-0 grid-pattern-sm opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.3), transparent)" }} />

      <div className="container-tight section-padding">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="mb-10">
          <span className="mono-label">Case Studies</span>
          <h2 className="text-3xl md:text-4xl font-black tracking-[-0.03em] text-white"
            style={{ fontFamily: "var(--font-geist), sans-serif" }}>
            Technical <span className="gradient-text-cyan">Projects</span>
          </h2>
          <p className="mt-3 text-sm font-mono text-slate-500">
            Select a project case study to explore the architecture diagram, review clean source code, and run the simulator.
          </p>
        </motion.div>

        {/* Project selector tabs */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {projects.map((p) => (
            <motion.button key={p.id} onClick={() => { setActiveId(p.id); }}
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="px-4 py-2.5 rounded-xl text-[10px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer"
              style={{
                background: activeId === p.id ? `${p.accentColor}12` : "rgba(255,255,255,0.02)",
                border: `1px solid ${activeId === p.id ? p.accentColor : "rgba(255,255,255,0.06)"}`,
                color: activeId === p.id ? p.accentColor : "#475569",
                boxShadow: activeId === p.id ? `0 0 20px ${p.accentColor}15` : "none",
              }}>
              {p.num} {p.id.toUpperCase()}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeId}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

            {/* LEFT: Project info (span 5) */}
            <div className="lg:col-span-5 p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between gap-6"
              style={{ background: "#060c1a", border: `1px solid ${active.accentColor}18` }}>
              <div className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(90deg, transparent, ${active.accentColor}, transparent)` }} />
              
              <div className="space-y-4">
                <div>
                  <div className="text-[9px] font-mono uppercase tracking-widest mb-1.5" style={{ color: active.accentColor }}>
                    {active.impact}
                  </div>
                  <h3 className="text-xl font-black tracking-[-0.02em] text-white"
                    style={{ fontFamily: "var(--font-geist), sans-serif" }}>
                    {active.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-500 mt-0.5">{active.subtitle}</p>
                </div>
                
                <p className="text-[12px] font-mono text-slate-400 leading-relaxed">{active.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2">
                  {active.metrics.map((m) => (
                    <div key={m.label} className="p-2.5 rounded-xl text-center bg-black/35"
                      style={{ border: "1px solid rgba(255,255,255,0.04)" }}>
                      <div className="text-sm font-black font-mono" style={{ color: active.accentColor }}>{m.value}</div>
                      <div className="text-[8px] font-mono text-slate-500 mt-0.5 uppercase tracking-tighter">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Contributions */}
                <div className="space-y-1.5">
                  <p className="text-[9px] font-mono uppercase tracking-widest font-bold" style={{ color: active.accentColor }}>
                    Contributions
                  </p>
                  {active.contributions.map((c, i) => (
                    <div key={i} className="flex items-start gap-2 text-[10px] font-mono text-slate-400 leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: active.accentColor }} />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                {active.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-md text-[9px] font-mono"
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", color: "#475569" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT: IDE Mockup (span 7) */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden flex flex-col justify-between border"
              style={{ background: "#080e1b", borderColor: "rgba(255,255,255,0.06)" }}>
              
              {/* IDE Top Bar */}
              <div className="flex items-center justify-between px-4 py-2 border-b bg-black/30"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                
                {/* File tab group */}
                <div className="flex items-center gap-1.5">
                  {[
                    { id: "simulation", label: "simulation.sh", icon: Terminal },
                    { id: "code", label: active.fileName, icon: FileCode },
                    { id: "diagram", label: "architecture.txt", icon: LayoutDashboard },
                  ].map((tab) => {
                    const Icon = tab.icon;
                    const isTabActive = activeTab === tab.id;
                    return (
                      <button key={tab.id} onClick={() => setActiveTab(tab.id as typeof activeTab)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-mono transition-colors cursor-pointer select-none"
                        style={{
                          background: isTabActive ? "rgba(255,255,255,0.05)" : "transparent",
                          color: isTabActive ? "#fff" : "#475569",
                        }}>
                        <Icon className="w-3.5 h-3.5" style={{ color: isTabActive ? active.accentColor : "#475569" }} />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Workspace</span>
                </div>
              </div>

              {/* IDE Window Workspace */}
              <div className="flex-1 p-6 min-h-[300px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {activeTab === "simulation" && (
                    <motion.div key="sim" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                      <Simulator />
                    </motion.div>
                  )}
                  {activeTab === "code" && (
                    <motion.div key="code" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}
                      className="bg-black/40 rounded-xl border border-white/5 max-h-[320px] overflow-y-auto custom-scrollbar">
                      {renderHighlightedCode(active.code, active.id === "ats" || active.id === "cura" ? "typescript" : "java")}
                    </motion.div>
                  )}
                  {activeTab === "diagram" && (
                    <motion.div key="diag" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                      <pre className="text-[10px] font-mono leading-relaxed text-slate-500 bg-black/40 p-5 rounded-xl border border-white/5 overflow-x-auto">
                        <code>{active.diagram}</code>
                      </pre>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* IDE Terminal Footer */}
              <div className="px-4 py-2 border-t bg-black/20 text-[9px] font-mono text-slate-600 flex items-center justify-between"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                <span>bash - terminal - port: 8080</span>
                <span>UTF-8</span>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
