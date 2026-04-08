"use client";
import { motion } from "framer-motion";
import { Mail, Download, Linkedin, Github, X, MapPin, Sparkles, Zap, Trophy, Code2 } from "lucide-react";
import { profile, metrics, why, experience } from "@/content/data";

export default function RecruiterMode({ onClose }: { onClose: () => void }) {
  const current = experience[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[55] bg-ink-950 overflow-y-auto"
    >
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-accent-violet/20 blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent-cyan/15 blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent-violet/10 blur-[120px]" />
      </div>

      {/* PROMINENT close button — top right */}
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-[70] bg-grad-accent text-ink-950 font-semibold rounded-full px-5 py-3 flex items-center gap-2 shadow-glow hover:scale-105 transition"
      >
        <X size={18} /> Close recruiter view
      </button>

      <div className="relative min-h-screen px-6 py-20 md:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Header eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 glass gradient-border rounded-full px-4 py-1.5 text-xs font-mono text-white/70 mb-8"
          >
            <Sparkles size={12} className="text-accent-cyan" />
            RECRUITER MODE · 30-second summary
          </motion.div>

          {/* Name + headline */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            <h1 className="font-display text-5xl md:text-7xl text-grad leading-[1.02] tracking-tight">
              Visnunathan
              <br />
              <span className="italic text-accent-grad">Chidambaranathan</span>
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-white/60">
              <span className="inline-flex items-center gap-2 text-base">
                <Code2 size={14} className="text-accent-cyan" /> Full-Stack Engineer · AI Systems
              </span>
              <span className="inline-flex items-center gap-2 text-base">
                <MapPin size={14} className="text-accent-cyan" /> Canada
              </span>
            </div>
          </motion.div>

          {/* The pitch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-10 glass gradient-border rounded-2xl p-7 md:p-9"
          >
            <div className="font-mono text-[10px] uppercase tracking-widest text-accent-grad mb-3">The pitch</div>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-display">
              5+ years building production systems at SAP Labs, Aviva and Zoho. <br className="hidden md:block" />
              Now shipping <span className="text-accent-grad italic">agentic AI</span> inside SAP Joule with LangGraph, LangChain and RAG.
            </p>
            <p className="mt-4 text-white/55 leading-relaxed">
              I bridge real backend engineering with the modern AI stack — the kind of engineer you hire when AI features actually have to work in production, not just in a demo.
            </p>
          </motion.div>

          {/* Metrics row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3"
          >
            {metrics.map((m) => (
              <div key={m.label} className="glass gradient-border rounded-xl p-5 text-center">
                <div className="font-display text-4xl text-accent-grad">
                  {m.value}
                  {m.suffix}
                </div>
                <div className="text-[11px] text-white/50 mt-1.5 leading-snug">{m.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Now / What I do / Top wins — 3 col cards */}
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <Card icon={Zap} eyebrow="Right now" delay={0.4}>
              <div className="text-white font-medium">{current.role.split("—")[0].trim()}</div>
              <div className="text-accent-grad text-sm mt-0.5">{current.company}</div>
              <div className="text-white/50 text-xs mt-2">{current.period}</div>
              <p className="text-white/60 text-sm mt-3 leading-relaxed">{current.blurb}</p>
            </Card>

            <Card icon={Sparkles} eyebrow="Building with AI" delay={0.45}>
              <ul className="space-y-1.5 text-sm text-white/75">
                <li>· LangGraph multi-agent workflows</li>
                <li>· LangChain + RAG pipelines</li>
                <li>· OData services for LLM tool-use</li>
                <li>· Agents on SAP BTP / Kyma</li>
                <li>· Production deploys, not demos</li>
              </ul>
            </Card>

            <Card icon={Trophy} eyebrow="Wins" delay={0.5}>
              <ul className="space-y-1.5 text-sm text-white/75">
                <li>🏆 ConUHacks SAP Challenge — CAD $750</li>
                <li>🏆 Smart India Hackathon — ₹1 lakh</li>
                <li>🏆 SEM Hackathon — internship offer</li>
                <li>🎓 Best Outgoing Student Award</li>
              </ul>
            </Card>
          </div>

          {/* Why me */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-10"
          >
            <div className="font-mono text-[10px] uppercase tracking-widest text-accent-grad mb-4">Why hire me</div>
            <div className="grid md:grid-cols-2 gap-3">
              {why.map((w) => (
                <div key={w.k} className="glass gradient-border rounded-xl p-5">
                  <div className="text-white font-medium">{w.k}</div>
                  <div className="text-sm text-white/55 mt-1.5 leading-relaxed">{w.v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mt-12 glass gradient-border rounded-2xl p-6 md:p-8 flex flex-wrap items-center justify-between gap-5"
          >
            <div>
              <div className="font-display text-2xl text-grad">Let's talk.</div>
              <div className="text-white/55 text-sm mt-1">Canada · Senior full-stack & AI roles</div>
            </div>
            <div className="flex flex-wrap gap-2">
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 bg-grad-accent text-ink-950 font-semibold px-5 py-3 rounded-full hover:shadow-glow transition">
                <Mail size={16} /> {profile.email}
              </a>
              <a href={profile.resumeUrl} download="Visnunathan_Chidambaranathan_Resume.pdf" className="inline-flex items-center gap-2 glass gradient-border px-5 py-3 rounded-full text-white">
                <Download size={16} /> Résumé
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 glass gradient-border px-5 py-3 rounded-full text-white">
                <Linkedin size={16} />
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 glass gradient-border px-5 py-3 rounded-full text-white">
                <Github size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function Card({ icon: Icon, eyebrow, delay, children }: { icon: any; eyebrow: string; delay: number; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="glass gradient-border rounded-2xl p-6"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-grad-accent flex items-center justify-center text-ink-950">
          <Icon size={14} />
        </div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-white/45">{eyebrow}</div>
      </div>
      {children}
    </motion.div>
  );
}
