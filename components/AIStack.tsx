"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Section } from "./Section";
import { Brain, Workflow, Database, Rocket } from "lucide-react";

const STAGES = [
  { id: "ingest", icon: Database, label: "Ingest", title: "Enterprise data → context", body: "OData services and pipelines pull IBP data into a shape an LLM can actually reason over. Without this layer, the model is guessing." },
  { id: "reason", icon: Brain, label: "Reason", title: "RAG + prompt engineering", body: "Retrieval-augmented prompts and structured tool schemas. SAP's internal LLM (ISLM) sees only the right slice of data, every time." },
  { id: "act", icon: Workflow, label: "Act", title: "Agentic workflows", body: "LangGraph + LangChain multi-agent flows with memory, tool-use and supply-chain reasoning. Agents call real services, not toy functions." },
  { id: "ship", icon: Rocket, label: "Ship", title: "Ship to production", body: "Containerized on Docker, deployed via Jenkins to SAP BTP / Kyma. Same discipline as any backend service — observability, regression, rollout." },
];

export default function AIStack() {
  const [active, setActive] = useState("ingest");
  const cur = STAGES.find((s) => s.id === active)!;
  return (
    <Section id="ai-stack" eyebrow="04 — How I build with AI" title="The agentic stack, the way I actually ship it." kicker="Click each stage to see what runs there.">
      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 space-y-2">
          {STAGES.map((s, i) => {
            const Icon = s.icon;
            const isActive = s.id === active;
            return (
              <motion.button key={s.id} onClick={() => setActive(s.id)}
                whileHover={{ x: 4 }}
                className={`w-full text-left flex items-center gap-4 p-4 rounded-xl border transition ${isActive ? "border-accent-violet/50 bg-white/[0.04]" : "border-white/8 hover:border-white/20"}`}>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${isActive ? "bg-grad-accent text-ink-950" : "bg-white/5 text-white/60"}`}>
                  <Icon size={18} />
                </div>
                <div className="flex-1">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">Stage {String(i+1).padStart(2, "0")}</div>
                  <div className={`font-medium ${isActive ? "text-white" : "text-white/70"}`}>{s.label}</div>
                </div>
              </motion.button>
            );
          })}
        </div>
        <div className="lg:col-span-7">
          <motion.div key={cur.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}
            className="glass gradient-border rounded-2xl p-8 h-full">
            <div className="font-mono text-xs text-accent-grad uppercase tracking-widest mb-4">{cur.label}</div>
            <h3 className="font-display text-3xl text-grad">{cur.title}</h3>
            <p className="mt-4 text-white/65 leading-relaxed text-lg">{cur.body}</p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
