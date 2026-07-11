"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ReactFlow,
  Background,
  type Node,
  type Edge,
  BackgroundVariant,
  Handle,
  Position,
  type NodeProps,
} from "@xyflow/react";
import { Info, X, Activity, Server, Cpu, Database, Network } from "lucide-react";
import "@xyflow/react/dist/style.css";

interface NodeData {
  label: string;
  sublabel?: string;
  color: string;
  icon?: string;
  details?: {
    desc: string;
    specs: Array<{ name: string; value: string }>;
  };
}

const ServiceNode = ({ data }: NodeProps) => {
  const nd = data as unknown as NodeData;
  return (
    <div className="relative px-4 py-3 rounded-xl text-left min-w-[140px] overflow-hidden group select-none cursor-pointer"
      style={{
        background: "rgba(6, 12, 26, 0.8)",
        border: `1px solid ${nd.color}40`,
        boxShadow: `0 4px 20px ${nd.color}10`,
      }}>
      
      {/* Node handles */}
      <Handle type="target" position={Position.Left} style={{ background: nd.color, border: "none", width: 6, height: 6 }} />
      <Handle type="source" position={Position.Right} style={{ background: nd.color, border: "none", width: 6, height: 6 }} />
      
      {/* Pulse led in corner */}
      <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: nd.color }} />
      
      {/* Chip pattern background */}
      <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(90deg, ${nd.color} 1px, transparent 1px), linear-gradient(${nd.color} 1px, transparent 1px)`,
          backgroundSize: "8px 8px"
        }} />

      <div className="flex items-center gap-2.5 relative z-10">
        <div className="text-base select-none">{nd.icon}</div>
        <div>
          <div className="text-[10px] font-mono font-bold" style={{ color: nd.color }}>{nd.label}</div>
          {nd.sublabel && <div className="text-[7.5px] font-mono text-slate-500 mt-0.5">{nd.sublabel}</div>}
        </div>
      </div>
    </div>
  );
};

const nodeTypes = { service: ServiceNode };

const nodesData: Node[] = [
  {
    id: "client",
    type: "service",
    position: { x: 0, y: 150 },
    data: {
      label: "API Gateway",
      sublabel: "Kong / Routing",
      color: "#06b6d4",
      icon: "🌐",
      details: {
        desc: "Main cluster ingress gateway mapping client requests, validating pre-flights, and performing load balancing.",
        specs: [
          { name: "Active Routes", value: "24 mapped" },
          { name: "SSL Handshake", value: "ECDHE-ECDSA" },
          { name: "Throughput", value: "12,420 rps" }
        ]
      }
    }
  },
  {
    id: "auth",
    type: "service",
    position: { x: 200, y: 30 },
    data: {
      label: "Auth Service",
      sublabel: "Spring Security",
      color: "#8b5cf6",
      icon: "🔐",
      details: {
        desc: "Identity Provider cluster validating JSON Web Tokens (JWT), managing role authorization rules, and scrubbing headers.",
        specs: [
          { name: "Algorithm", value: "RS256 keys" },
          { name: "SLA Speed", value: "<1.2ms verification" },
          { name: "Fail Rate", value: "0.00% current" }
        ]
      }
    }
  },
  {
    id: "spring",
    type: "service",
    position: { x: 200, y: 160 },
    data: {
      label: "Spring Boot",
      sublabel: "Java 21 Controller",
      color: "#6abf69",
      icon: "🍃",
      details: {
        desc: "Core backend business logic runtime utilizing Java 21's Virtual Threads for high-concurrency request execution.",
        specs: [
          { name: "Runtime Version", value: "Java 21 SE" },
          { name: "Thread Model", value: "Loom Virtual Threads" },
          { name: "Active Pools", value: "142 workers" }
        ]
      }
    }
  },
  {
    id: "kafka",
    type: "service",
    position: { x: 410, y: 80 },
    data: {
      label: "Kafka Cluster",
      sublabel: "Event Streaming",
      color: "#1a97f5",
      icon: "📨",
      details: {
        desc: "High-throughput asynchronous distributed message broker routing system and data ingestion pipelines.",
        specs: [
          { name: "Partitions Count", value: "16 active" },
          { name: "Replicas Factor", value: "3 nodes" },
          { name: "Message Speed", value: "10k events/sec" }
        ]
      }
    }
  },
  {
    id: "redis",
    type: "service",
    position: { x: 410, y: 250 },
    data: {
      label: "Redis Cache",
      sublabel: "In-Memory Store",
      color: "#ef4444",
      icon: "⚡",
      details: {
        desc: "Low-latency distributed caching layer mitigating relational database loads and indexing active redirects.",
        specs: [
          { name: "Average Hit-Rate", value: "94.2%" },
          { name: "Policy Mode", value: "volatile-lru" },
          { name: "Avg SLA Time", value: "Sub-millisecond" }
        ]
      }
    }
  },
  {
    id: "ai",
    type: "service",
    position: { x: 620, y: 30 },
    data: {
      label: "AI Gateway",
      sublabel: "Gemini Router",
      color: "#8b5cf6",
      icon: "🤖",
      details: {
        desc: "Cognitive inference portal managing LLM integrations, prompting instructions, and scrubbing PHI details.",
        specs: [
          { name: "Model Engine", value: "Gemini 2.5 Flash" },
          { name: "PII Filter Mode", value: "Tokenized masking" },
          { name: "Mean Latency", value: "420ms streaming" }
        ]
      }
    }
  },
  {
    id: "db",
    type: "service",
    position: { x: 620, y: 200 },
    data: {
      label: "MySQL Store",
      sublabel: "Hikari Connection",
      color: "#f59e0b",
      icon: "🗄️",
      details: {
        desc: "Primary transactional SQL datastore housing structured credentials, redirect logs, and audit histories.",
        specs: [
          { name: "Connection Pool", value: "HikariCP (Max 50)" },
          { name: "Active Queries", value: "4 queries/sec" },
          { name: "Engine Type", value: "InnoDB Transactions" }
        ]
      }
    }
  },
  {
    id: "worker",
    type: "service",
    position: { x: 830, y: 120 },
    data: {
      label: "Workers Cluster",
      sublabel: "Kafka Consumers",
      color: "#10b981",
      icon: "⚙️",
      details: {
        desc: "Decoupled asynchronous daemon workers processing audit logs, analytical reports, and diagnostic pipelines.",
        specs: [
          { name: "Total Runners", value: "8 parallel tasks" },
          { name: "Dead-Letter (DLQ)", value: "0 alerts active" },
          { name: "Ack Timeout", value: "5000ms limit" }
        ]
      }
    }
  },
];

const edgesData: Edge[] = [
  { id: "e1", source: "client", target: "auth", animated: true, style: { stroke: "#8b5cf6", strokeWidth: 1.5 } },
  { id: "e2", source: "client", target: "spring", animated: true, style: { stroke: "#06b6d4", strokeWidth: 1.5 } },
  { id: "e3", source: "spring", target: "kafka", animated: true, style: { stroke: "#1a97f5", strokeWidth: 1.5 } },
  { id: "e4", source: "spring", target: "redis", animated: true, style: { stroke: "#ef4444", strokeWidth: 1.5 } },
  { id: "e5", source: "spring", target: "ai", animated: true, style: { stroke: "#8b5cf6", strokeWidth: 1.5 } },
  { id: "e6", source: "spring", target: "db", animated: true, style: { stroke: "#f59e0b", strokeWidth: 1.5 } },
  { id: "e7", source: "kafka", target: "worker", animated: true, style: { stroke: "#10b981", strokeWidth: 1.5 } },
  { id: "e8", source: "db", target: "worker", animated: true, style: { stroke: "#10b981", strokeWidth: 1.5 } },
];

export const SystemArchitecture = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  const handleNodeClick = (_: any, node: Node) => {
    setSelectedNode(node);
  };

  const activeNodeData = selectedNode?.data as NodeData | undefined;

  return (
    <section id="architecture" ref={ref} className="relative border-t"
      style={{ borderColor: "rgba(255,255,255,0.04)", background: "#010208" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)" }} />

      <div className="container-tight section-padding">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="mb-10">
          <span className="mono-label">Infrastructure Topology</span>
          <h2 className="text-3xl md:text-4xl font-black tracking-[-0.03em] text-white"
            style={{ fontFamily: "var(--font-geist), sans-serif" }}>
            System <span className="gradient-text-purple">Architecture</span>
          </h2>
          <p className="mt-3 text-sm font-mono text-slate-500">
            Interactive microservice topology mapping requests. Select nodes to explore cluster specifications and log data.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-2xl overflow-hidden relative border"
          style={{ background: "#060c1a", borderColor: "rgba(255,255,255,0.06)", height: "420px" }}>

          {/* Corner labels */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500">LIVE CLUSTER TOPOLOGY</span>
          </div>

          <ReactFlow
            nodes={nodesData}
            edges={edgesData}
            nodeTypes={nodeTypes}
            onNodeClick={handleNodeClick}
            fitView
            fitViewOptions={{ padding: 0.25 }}
            proOptions={{ hideAttribution: true }}
            style={{ background: "transparent" }}
          >
            <Background
              variant={BackgroundVariant.Dots}
              gap={20}
              size={1}
              color="rgba(6,182,212,0.06)"
            />
          </ReactFlow>

          {/* Detail Side Panel Overlay */}
          <AnimatePresence>
            {selectedNode && activeNodeData && (
              <motion.div
                initial={{ opacity: 0, x: 200, y: "-50%" }}
                animate={{ opacity: 1, x: 0, y: "-50%" }}
                exit={{ opacity: 0, x: 200, y: "-50%" }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-72 rounded-xl border p-5 shadow-2xl flex flex-col justify-between gap-4"
                style={{
                  background: "rgba(6, 12, 26, 0.95)",
                  borderColor: `${activeNodeData.color}40`,
                  backdropFilter: "blur(12px)",
                  boxShadow: `0 10px 40px rgba(0, 0, 0, 0.7), 0 0 30px ${activeNodeData.color}08`,
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b pb-2.5" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                  <div className="flex items-center gap-2">
                    <span className="text-base select-none">{activeNodeData.icon}</span>
                    <span className="text-xs font-mono font-bold" style={{ color: activeNodeData.color }}>
                      {activeNodeData.label}
                    </span>
                  </div>
                  <button onClick={() => setSelectedNode(null)}
                    className="p-1 rounded-md text-slate-500 hover:text-white transition-colors cursor-pointer">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Description */}
                <div className="space-y-1.5">
                  <span className="text-[7.5px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-1">
                    <Info className="w-3 h-3 text-slate-500" /> node specifications
                  </span>
                  <p className="text-[10px] font-mono text-slate-400 leading-relaxed">
                    {activeNodeData.details?.desc}
                  </p>
                </div>

                {/* Grid Specs */}
                <div className="space-y-2">
                  {activeNodeData.details?.specs.map((spec) => (
                    <div key={spec.name} className="flex justify-between items-center py-1.5 border-b" style={{ borderColor: "rgba(255,255,255,0.03)" }}>
                      <span className="text-[8.5px] font-mono text-slate-500 uppercase tracking-tighter">{spec.name}</span>
                      <span className="text-[9.5px] font-mono font-bold text-slate-300 select-all">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <div className="text-[7px] font-mono text-slate-600 text-center leading-normal pt-1">
                  Node state is validated active. Connection secured.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Tech legend */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          {[
            { label: "Client Ingress", color: "#06b6d4" },
            { label: "Security & Router", color: "#8b5cf6" },
            { label: "Core Processing", color: "#6abf69" },
            { label: "Event Pipeline", color: "#1a97f5" },
            { label: "Caching Layer", color: "#ef4444" },
            { label: "Datastore Persistence", color: "#f59e0b" },
            { label: "Workers", color: "#10b981" },
          ].map((t) => (
            <div key={t.label} className="flex items-center gap-1.5 text-[9px] font-mono text-slate-500">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: t.color, boxShadow: `0 0 6px ${t.color}` }} />
              {t.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
