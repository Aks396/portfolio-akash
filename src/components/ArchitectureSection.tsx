"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Server, Shield, Database, Activity, Layers, Play, RefreshCw, Send, Terminal, AlertTriangle, CheckCircle2 } from "lucide-react";

interface Project {
    id: string;
    title: string;
    role: string;
    impact: string;
    description: string;
    contributions: string[];
    tags: string[];
}

const projects: Project[] = [
    {
        id: "idp",
        title: "IDP Intel Engine — Intelligent Document Processing Platform",
        role: "Backend & AI Engineer",
        impact: "Gemini AI | Multi-Tenant SaaS",
        description: "Built a multi-tenant SaaS Intelligent Document Processing platform automated to extract, analyze, and digitize clinical insurance forms using Google Gemini vision models.",
        contributions: [
            "Designed FastAPI microservices with JWT-based role isolation filters, securing multi-tenant operations.",
            "Integrated Tesseract OCR with Gemini Vision prompt models for high-fidelity clinical text extraction.",
            "Structured human-in-the-loop audit verification gateways before final database commits."
        ],
        tags: ["FastAPI", "Python", "Google Gemini AI", "Tesseract OCR", "MySQL", "JWT", "Docker"]
    },
    {
        id: "llm",
        title: "MultiModel-LLM — Unified Multi-Provider AI Platform",
        role: "Backend & Systems Engineer",
        impact: "Spring Boot | Unified AI Gateway",
        description: "Developed a secure gateway model integrating OpenAI, Gemini, Claude, and Llama APIs under a unified streaming routing proxy.",
        contributions: [
            "Architected reactive Spring WebFlux backends for scalable non-blocking event-stream responses.",
            "Implemented Redis-based caching patterns, reducing API overhead by 85% on duplicate queries.",
            "Built a key management service securing client API key vaults with AES-256 encryption."
        ],
        tags: ["Java", "Spring Boot", "Spring WebFlux", "Redis", "AES-256", "JWT", "TypeScript"]
    },
    {
        id: "compliance",
        title: "Label Process — AI-Powered MDR Compliance Audit System",
        role: "AI & Full Stack Developer",
        impact: "OCR + Gemini | EU MDR Compliance",
        description: "Created an automated compliance audit dashboard validating medical device product labels against EU MDR 2017/745 regulations.",
        contributions: [
            "Developed Gemini multimodal prompt matrices detecting missing ISO 15223-1 medical symbols.",
            "Designed automated compliance score cards and PDF audit report generation backend scripts.",
            "Engineered overlay coordinate systems placing target verification rectangles on labels."
        ],
        tags: ["FastAPI", "Python", "React", "Tesseract OCR", "Google Gemini", "MySQL"]
    },
    {
        id: "fhir",
        title: "FHIR R4 Healthcare Interoperability Platform",
        role: "Backend Engineer",
        impact: "PostgreSQL + Kafka | FHIR R4 Interop",
        description: "Developed high-throughput FHIR R4-compliant integrations automating care routing events across client EHR services.",
        contributions: [
            "Implemented Spring Boot event-driven services parser aligning clinical data to HL7 FHIR R4 spec.",
            "Engineered Kafka message queues guaranteeing zero-loss delivery of patient vitals events.",
            "Optimized connection pool parameters and PostgreSQL write locks for heavy ingestion flows."
        ],
        tags: ["Java", "Spring Boot", "Apache Kafka", "PostgreSQL", "Microservices", "JUnit"]
    }
];

// Project 1 Ingestion Simulator Node
const IDPSimulator = () => {
    const [step, setStep] = useState(0);
    const [logs, setLogs] = useState<string[]>(["System Idle - Awaiting Document Input"]);

    const triggerSimulation = () => {
        setStep(1);
        setLogs(["[Ingest] Inbound document received: claim_form_109.pdf"]);
        
        setTimeout(() => {
            setStep(2);
            setLogs((prev) => [...prev, "[OCR] Parsing PDF. Extracted 4 text blocks using Tesseract OCR"]);
        }, 1200);

        setTimeout(() => {
            setStep(3);
            setLogs((prev) => [...prev, "[Gemini AI] Validating key-value attributes. Confidence: 98%"]);
        }, 2400);

        setTimeout(() => {
            setStep(4);
            setLogs((prev) => [...prev, "[Human-Audit] Ingestion score 94. Bypassing manual approval gate"]);
        }, 3600);

        setTimeout(() => {
            setStep(5);
            setLogs((prev) => [...prev, "[Storage] Record persistent in MySQL. Client notified: claim_processed"]);
        }, 4800);
    };

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-primary font-bold">PIPELINE SCHEMATIC</span>
                <button
                    onClick={triggerSimulation}
                    disabled={step > 0 && step < 5}
                    className="flex items-center space-x-1.5 px-3 py-1 rounded bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 disabled:opacity-50"
                >
                    <Play className="h-3 w-3" />
                    <span>Run Simulation</span>
                </button>
            </div>

            {/* Pipeline nodes */}
            <div className="grid grid-cols-5 gap-2 relative py-4">
                {[
                    { label: "File Ingest", id: 1 },
                    { label: "OCR Extract", id: 2 },
                    { label: "Gemini Validation", id: 3 },
                    { label: "Audit Check", id: 4 },
                    { label: "DB Persist", id: 5 }
                ].map((node) => (
                    <div
                        key={node.id}
                        className={`p-2 rounded text-center border text-[9px] font-mono transition-all ${
                            step === node.id
                                ? "bg-primary/20 border-primary text-white scale-105 shadow-[0_0_15px_rgba(59,130,246,0.25)]"
                                : step > node.id
                                ? "bg-success/15 border-success/30 text-success"
                                : "bg-muted/40 border-border/80 text-muted-foreground"
                        }`}
                    >
                        {node.label}
                    </div>
                ))}
            </div>

            {/* Ingestion console logs */}
            <div className="p-4 rounded-xl bg-slate-950 border border-border/40 font-mono text-[10px] text-slate-400 space-y-1">
                <div className="flex items-center justify-between border-b border-border/20 pb-2 mb-2 text-slate-500">
                    <span>CONSOLE LOGS</span>
                    <span className="animate-pulse w-1.5 h-1.5 rounded-full bg-success" />
                </div>
                <div className="h-[80px] overflow-y-auto no-scrollbar space-y-0.5">
                    {logs.map((log, i) => (
                        <p key={i}>{log}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Project 2 AI Chatbot Simulator
const LLMSimulator = () => {
    const [model, setModel] = useState("gemini-pro");
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Array<{ sender: "user" | "ai"; text: string }>>([
        { sender: "ai", text: "Unified AI API proxy online. Select a model to begin." }
    ]);
    const [streaming, setStreaming] = useState(false);
    const [metrics, setMetrics] = useState({ latency: 0, cache: "MISS", size: 0 });

    const presets = [
        "Optimize a Java connection pool config",
        "Explain Kafka offset commits configurations"
    ];

    const sendMessage = (textToSend: string) => {
        if (!textToSend.trim() || streaming) return;

        setMessages((prev) => [...prev, { sender: "user", text: textToSend }]);
        setInput("");
        setStreaming(true);

        const latency = textToSend.includes("caching") || textToSend.includes("Optimize") ? 15 : 240;
        const cacheHit = latency === 15 ? "HIT (Redis)" : "MISS (API Call)";

        setTimeout(() => {
            setMessages((prev) => [...prev, { sender: "ai", text: "" }]);
            
            const responseText = model === "gemini-pro"
                ? "Google Gemini Pro proxy routed successfully. Secure AES-256 validation check passed. Resource returned claim: success."
                : `Routed through ${model.toUpperCase()}. Thread optimization parameters parsed in microsecond speeds. Payload processing: OK.`;
            
            let i = 0;
            const interval = setInterval(() => {
                setMessages((prev) => {
                    const next = [...prev];
                    const lastIdx = next.length - 1;
                    next[lastIdx] = { sender: "ai", text: responseText.substring(0, i + 1) };
                    return next;
                });
                i++;
                if (i >= responseText.length) {
                    clearInterval(interval);
                    setStreaming(false);
                    setMetrics({
                        latency,
                        cache: cacheHit,
                        size: responseText.length
                    });
                }
            }, 15);
        }, 800);
    };

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono text-primary font-bold">LIVE AI PROXY DEMO</span>
                {/* Model switcher dropdown */}
                <select
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className="bg-slate-900 border border-border text-[10px] font-mono rounded px-2 py-1 focus:outline-none text-slate-300 focus:border-primary"
                >
                    <option value="gemini-pro">Gemini Pro (default)</option>
                    <option value="gpt-4o">OpenAI GPT-4o</option>
                    <option value="claude-3">Claude 3 Sonnet</option>
                    <option value="llama-3">Meta Llama 3</option>
                </select>
            </div>

            {/* Chat Area */}
            <div className="h-[120px] rounded-xl bg-slate-950 border border-border/40 p-3 overflow-y-auto no-scrollbar font-mono text-[10px] space-y-2 flex flex-col">
                {messages.map((msg, i) => (
                    <div
                        key={i}
                        className={`max-w-[85%] p-2 rounded ${
                            msg.sender === "user"
                                ? "bg-primary/10 border border-primary/20 self-end text-right"
                                : "bg-muted/40 border border-border/40 self-start"
                        }`}
                    >
                        <span className="text-[8px] text-slate-500 uppercase block mb-1">
                            {msg.sender === "user" ? "Client Payload" : "API Proxy Server"}
                        </span>
                        <p className="text-slate-300">{msg.text}</p>
                    </div>
                ))}
            </div>

            {/* Presets / Input */}
            <div className="space-y-2">
                <div className="flex flex-wrap gap-1.5">
                    {presets.map((preset) => (
                        <button
                            key={preset}
                            onClick={() => sendMessage(preset)}
                            disabled={streaming}
                            className="text-[8px] font-mono border border-border px-2 py-0.5 rounded bg-card hover:border-primary/40 disabled:opacity-50 text-slate-400 hover:text-white"
                        >
                            {preset}
                        </button>
                    ))}
                </div>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        sendMessage(input);
                    }}
                    className="flex space-x-2"
                >
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Or type custom prompt..."
                        disabled={streaming}
                        className="w-full bg-slate-900 border border-border/85 rounded-lg px-3 py-1.5 text-[10px] font-mono focus:outline-none text-slate-300 focus:border-primary disabled:opacity-50"
                    />
                    <button
                        type="submit"
                        disabled={streaming}
                        className="bg-primary hover:bg-primary/95 text-white px-3 py-1.5 rounded-lg font-mono text-[10px] flex items-center space-x-1 disabled:opacity-50"
                    >
                        <Send className="h-3 w-3" />
                    </button>
                </form>
            </div>

            {/* Gateway Metrics */}
            <div className="grid grid-cols-3 gap-2 text-center text-[9px] font-mono pt-2 border-t border-border/30">
                <div className="p-1 bg-card rounded border border-border/50">
                    <span className="text-slate-500 block uppercase">LATENCY</span>
                    <span className="font-bold text-foreground">{metrics.latency} ms</span>
                </div>
                <div className="p-1 bg-card rounded border border-border/50">
                    <span className="text-slate-500 block uppercase">REDIS CACHE</span>
                    <span className="font-bold text-success">{metrics.cache}</span>
                </div>
                <div className="p-1 bg-card rounded border border-border/50">
                    <span className="text-slate-500 block uppercase">ENCRYPTION VAULT</span>
                    <span className="font-bold text-primary">AES-255 ACTIVE</span>
                </div>
            </div>
        </div>
    );
};

// Project 3 EU MDR compliance check
const ComplianceSimulator = () => {
    const [scanning, setScanning] = useState(false);
    const [score, setScore] = useState<number | null>(null);
    const [checks, setChecks] = useState<Array<{ name: string; status: "success" | "warning" | "idle" }>>([
        { name: "CE Certificate Validation Mark", status: "idle" },
        { name: "Sterility ISO Symbol Validation", status: "idle" },
        { name: "Expiry Date Formats Alignment", status: "idle" },
        { name: "Manufacturing Reference String Check", status: "idle" }
    ]);

    const runAudit = () => {
        setScanning(true);
        setScore(null);
        setChecks((prev) => prev.map((c) => ({ ...c, status: "idle" })));

        // Trigger sequence
        setTimeout(() => {
            setChecks((prev) => [
                { ...prev[0], status: "success" },
                prev[1], prev[2], prev[3]
            ]);
        }, 800);

        setTimeout(() => {
            setChecks((prev) => [
                prev[0],
                { ...prev[1], status: "warning" },
                prev[2], prev[3]
            ]);
        }, 1600);

        setTimeout(() => {
            setChecks((prev) => [
                prev[0], prev[1],
                { ...prev[2], status: "success" },
                prev[3]
            ]);
        }, 2400);

        setTimeout(() => {
            setChecks((prev) => [
                prev[0], prev[1], prev[2],
                { ...prev[3], status: "success" }
            ]);
            setScore(94);
            setScanning(false);
        }, 3200);
    };

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-primary font-bold">MDR AUDIT CLIENT</span>
                <button
                    onClick={runAudit}
                    disabled={scanning}
                    className="flex items-center space-x-1.5 px-3 py-1 rounded bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 disabled:opacity-50"
                >
                    <RefreshCw className={`h-3 w-3 ${scanning ? 'animate-spin' : ''}`} />
                    <span>Scan Compliance</span>
                </button>
            </div>

            {/* Label Visual Mock */}
            <div className="relative border border-border/80 rounded-xl p-4 bg-muted/20 font-mono text-[9px] text-slate-300 space-y-2 h-[100px] overflow-hidden">
                {scanning && (
                    <motion.div
                        initial={{ top: 0 }}
                        animate={{ top: "100%" }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        className="absolute left-0 w-full h-0.5 bg-primary/50 shadow-[0_0_8px_rgba(59,130,246,0.8)] z-10"
                    />
                )}
                <div className="flex justify-between">
                    <span>REF: DEV-MDR-9812</span>
                    <span className="text-primary font-bold">[CE 0123]</span>
                </div>
                <p>EXPIRY: 2028-09-12 // STERILE R (Warning: Missing Symbol Overlay)</p>
                <div className="w-16 h-8 bg-slate-900 border border-border/60 flex items-center justify-center text-[8px] text-slate-500">
                    BARCODE PLACEHOLDER
                </div>
            </div>

            {/* Audit Checklist */}
            <div className="space-y-2">
                {checks.map((c) => (
                    <div key={c.name} className="flex items-center justify-between text-[10px] font-mono border border-border/30 p-2 rounded bg-slate-950">
                        <span className="text-slate-400">{c.name}</span>
                        {c.status === "idle" && <span className="text-slate-500">WAITING</span>}
                        {c.status === "success" && (
                            <span className="text-success flex items-center">
                                <CheckCircle2 className="h-3.5 w-3.5 mr-1 shrink-0" />
                                VERIFIED
                            </span>
                        )}
                        {c.status === "warning" && (
                            <span className="text-warning flex items-center animate-pulse">
                                <AlertTriangle className="h-3.5 w-3.5 mr-1 shrink-0" />
                                SYM MISSING
                            </span>
                        )}
                    </div>
                ))}
            </div>

            {/* Scorecard */}
            {score !== null && (
                <div className="p-3 bg-success/5 border border-success/20 rounded-xl text-center">
                    <span className="text-[10px] font-mono text-success uppercase block">AUDIT COMPLIANCE SCORE</span>
                    <span className="text-2xl font-bold font-mono text-success">{score}%</span>
                </div>
            )}
        </div>
    );
};

// Project 4 Kafka Payload queue stream
const KafkaFHIRSimulator = () => {
    const [logs, setLogs] = useState<string[]>(["Topic 'fhir_inbound_patient' initialized"]);
    const [running, setRunning] = useState(false);

    const publishPayload = () => {
        if (running) return;
        setRunning(true);

        const vitalPayloads = [
            `{"resourceType": "Observation", "status": "final", "code": "8867-4" (Heart Rate), "valueQuantity": {"value": 72}}`,
            `{"resourceType": "Observation", "status": "final", "code": "8480-6" (Blood Pressure), "valueQuantity": {"value": 120}}`
        ];

        let index = 0;
        const interval = setInterval(() => {
            if (index < vitalPayloads.length) {
                setLogs((prev) => [
                    ...prev,
                    `[Kafka Broker] Ingested message partition: ${index % 2} Offset: ${Math.floor(Math.random() * 100)}`,
                    `[Microservice] Consumed payload: ${vitalPayloads[index]}`
                ]);
                index++;
            } else {
                clearInterval(interval);
                setRunning(false);
            }
        }, 1200);
    };

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-primary font-bold">KAFKA EVENT LOGS</span>
                <button
                    onClick={publishPayload}
                    disabled={running}
                    className="flex items-center space-x-1.5 px-3 py-1 rounded bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 disabled:opacity-50"
                >
                    <Play className="h-3 w-3" />
                    <span>Publish FHIR Vitals</span>
                </button>
            </div>

            {/* Ingestion stream logs */}
            <div className="p-4 rounded-xl bg-slate-950 border border-border/40 font-mono text-[10px] text-slate-400 space-y-1">
                <div className="flex items-center justify-between border-b border-border/20 pb-2 mb-2 text-slate-500">
                    <span>BROKER CONSOLE</span>
                    <span className="animate-pulse w-1.5 h-1.5 rounded-full bg-success" />
                </div>
                <div className="h-[150px] overflow-y-auto no-scrollbar space-y-1">
                    {logs.map((log, i) => (
                        <p key={i} className={log.includes("Payload") ? "text-accent-400" : log.includes("Ingested") ? "text-success-400" : "text-slate-500"}>
                            {log}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const ArchitectureSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="projects" className="bg-muted/30 border-t border-border/50">
            <div className="container-tight section-padding">
                <div className="mb-12">
                    <span className="mono-label">Case Studies</span>
                    <h2 className="text-3xl font-bold tracking-tight">Technical Projects & Interactive Demos</h2>
                    <p className="text-sm text-muted-foreground mt-2 font-mono">
                        Select a case study below to explore the architecture contributions and trigger the interactive simulation.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left pane: Project Selection & Descriptions (span 6) */}
                    <div className="lg:col-span-6 space-y-6">
                        {/* Selector Tabs */}
                        <div className="flex flex-wrap gap-2">
                            {projects.map((proj, idx) => (
                                <button
                                    key={proj.id}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`px-4 py-2.5 rounded-xl border font-mono text-[10px] uppercase font-bold tracking-wider transition-all ${
                                        activeIndex === idx
                                            ? "bg-primary text-white border-primary shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                                            : "bg-card border-border hover:border-muted-foreground/40 text-muted-foreground hover:text-foreground"
                                    }`}
                                >
                                    {proj.id.toUpperCase()}
                                </button>
                            ))}
                        </div>

                        {/* Project Info Card */}
                        <div className="p-6 rounded-2xl bg-card border border-border space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-[10px] font-mono font-bold text-success bg-success/5 px-2.5 py-0.5 rounded border border-success/15">
                                    {projects[activeIndex].impact}
                                </span>
                                <span className="text-[9px] font-mono text-slate-500 uppercase">Role: {projects[activeIndex].role}</span>
                            </div>

                            <h3 className="text-xl font-bold text-foreground">{projects[activeIndex].title}</h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">{projects[activeIndex].description}</p>

                            <div className="space-y-2 pt-2">
                                <h4 className="text-[10px] font-mono uppercase text-primary font-bold">Key Technical Contributions</h4>
                                <ul className="space-y-2">
                                    {projects[activeIndex].contributions.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-xs leading-relaxed text-slate-300">
                                            <span className="text-primary mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/40">
                                {projects[activeIndex].tags.map((tag) => (
                                    <span key={tag} className="text-[9px] font-mono border border-border px-2 py-0.5 rounded bg-muted/30">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right pane: Interactive Simulation (span 6) */}
                    <div className="lg:col-span-6 p-6 rounded-2xl bg-card border border-border lg:sticky lg:top-24 min-h-[350px] flex flex-col justify-between">
                        <div className="border-b border-border/40 pb-3 mb-4 flex items-center justify-between">
                            <h4 className="text-xs font-mono font-bold text-foreground uppercase tracking-widest flex items-center">
                                <Terminal className="h-4 w-4 mr-2 text-primary" />
                                Simulator: {projects[activeIndex].id.toUpperCase()}
                            </h4>
                            <span className="text-[9px] font-mono text-muted-foreground uppercase">SIMULATION WIDGET</span>
                        </div>

                        <div className="flex-grow flex flex-col justify-center">
                            {projects[activeIndex].id === "idp" && <IDPSimulator />}
                            {projects[activeIndex].id === "llm" && <LLMSimulator />}
                            {projects[activeIndex].id === "compliance" && <ComplianceSimulator />}
                            {projects[activeIndex].id === "fhir" && <KafkaFHIRSimulator />}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
