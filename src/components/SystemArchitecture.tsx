"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
import "@xyflow/react/dist/style.css";

interface NodeData {
  label: string;
  sublabel?: string;
  color: string;
  icon?: string;
}

const ServiceNode = ({ data }: NodeProps) => {
  const nd = data as unknown as NodeData;
  return (
    <div className="relative px-4 py-3 rounded-xl text-center min-w-[110px]"
      style={{
        background: `${nd.color}10`,
        border: `1px solid ${nd.color}35`,
        boxShadow: `0 0 20px ${nd.color}18`,
      }}>
      <Handle type="target" position={Position.Left} style={{ background: nd.color, border: "none", width: 6, height: 6 }} />
      <Handle type="source" position={Position.Right} style={{ background: nd.color, border: "none", width: 6, height: 6 }} />
      {nd.icon && <div className="text-lg mb-1">{nd.icon}</div>}
      <div className="text-[10px] font-mono font-bold" style={{ color: nd.color }}>{nd.label}</div>
      {nd.sublabel && <div className="text-[8px] font-mono mt-0.5" style={{ color: `${nd.color}80` }}>{nd.sublabel}</div>}
    </div>
  );
};

const nodeTypes = { service: ServiceNode };

const nodes: Node[] = [
  { id: "client", type: "service", position: { x: 0, y: 150 }, data: { label: "API Gateway", sublabel: "REST / WebSocket", color: "#06b6d4", icon: "🌐" } },
  { id: "auth", type: "service", position: { x: 200, y: 30 }, data: { label: "Auth Service", sublabel: "JWT / OAuth2", color: "#8b5cf6", icon: "🔐" } },
  { id: "spring", type: "service", position: { x: 200, y: 160 }, data: { label: "Spring Boot", sublabel: "Microservices", color: "#6abf69", icon: "🍃" } },
  { id: "kafka", type: "service", position: { x: 400, y: 80 }, data: { label: "Kafka Cluster", sublabel: "Event Streaming", color: "#1a97f5", icon: "📨" } },
  { id: "redis", type: "service", position: { x: 400, y: 250 }, data: { label: "Redis Cache", sublabel: "Sub-ms Latency", color: "#ef4444", icon: "⚡" } },
  { id: "ai", type: "service", position: { x: 600, y: 30 }, data: { label: "AI Gateway", sublabel: "LLM Routing", color: "#8b5cf6", icon: "🤖" } },
  { id: "db", type: "service", position: { x: 600, y: 200 }, data: { label: "MySQL Store", sublabel: "TinyURL Data", color: "#f59e0b", icon: "🗄️" } },
  { id: "worker", type: "service", position: { x: 800, y: 120 }, data: { label: "Workers", sublabel: "Event Consumers", color: "#10b981", icon: "⚙️" } },
];

const edges: Edge[] = [
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

  return (
    <section id="architecture" ref={ref} className="relative border-t"
      style={{ borderColor: "rgba(255,255,255,0.04)", background: "#010208" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)" }} />

      <div className="container-tight section-padding">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="mb-14">
          <span className="mono-label">Infrastructure</span>
          <h2 className="text-3xl md:text-4xl font-black tracking-[-0.03em] text-white"
            style={{ fontFamily: "var(--font-geist), sans-serif" }}>
            System <span className="gradient-text-purple">Architecture</span>
          </h2>
          <p className="mt-3 text-sm font-mono text-slate-600">
            Interactive microservice topology. Drag nodes to explore the architecture.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-2xl overflow-hidden relative"
          style={{ background: "#060c1a", border: "1px solid rgba(255,255,255,0.06)", height: "400px" }}>

          {/* Corner label */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[9px] font-mono uppercase tracking-widest text-slate-600">LIVE TOPOLOGY</span>
          </div>

          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            fitView
            fitViewOptions={{ padding: 0.3 }}
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
        </motion.div>

        {/* Tech legend */}
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          {[
            { label: "Event-Driven", color: "#1a97f5" },
            { label: "Caching Layer", color: "#ef4444" },
            { label: "AI Inference", color: "#8b5cf6" },
            { label: "Data Persistence", color: "#f59e0b" },
            { label: "Workers", color: "#10b981" },
          ].map((t) => (
            <div key={t.label} className="flex items-center gap-1.5 text-[10px] font-mono text-slate-600">
              <div className="w-2 h-2 rounded-full" style={{ background: t.color }} />
              {t.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
