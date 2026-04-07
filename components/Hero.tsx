"use client";
import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile } from "@/content/data";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center spotlight pt-28 pb-12">
      <div className="mx-auto max-w-6xl px-6 w-full grid lg:grid-cols-12 gap-10 items-center">
        {/* Left */}
        <div className="lg:col-span-7">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs font-mono text-white/70 mb-8">
            <MapPin size={11} className="text-accent-cyan" />
            Toronto, Canada
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-6xl md:text-8xl leading-[0.95] tracking-tight">
            <span className="text-grad">Full-Stack</span>
            <br />
            <span className="text-grad">Developer</span>
            <span className="text-grad">,</span>
            <br />
            <span className="text-grad">building with </span>
            <span className="text-accent-grad italic">AI</span>
            <span className="text-grad">.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 text-xl md:text-2xl text-white/65 max-w-2xl leading-snug">
            5+ years shipping production systems with <span className="text-white">Java, Spring Boot, React and Angular</span> at SAP Labs, Aviva and Zoho — now building <span className="text-white">agentic AI</span> inside SAP Joule with LangGraph, LangChain and RAG.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 flex flex-wrap gap-3">
            <a href="#work" className="group inline-flex items-center gap-2 bg-grad-accent text-ink-950 font-medium px-5 py-3 rounded-full hover:shadow-glow transition">
              See selected work <ArrowRight size={16} className="group-hover:translate-x-0.5 transition" />
            </a>
            <a href={profile.resumeUrl} download="Visnunathan_Chidambaranathan_Resume.pdf" className="inline-flex items-center gap-2 glass gradient-border px-5 py-3 rounded-full text-white/85 hover:text-white">
              <Download size={16} /> Download résumé
            </a>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-white/65 hover:text-white">
              Or just say hi →
            </a>
          </motion.div>
        </div>

        {/* Right — Status console */}
        <motion.aside initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5">
          <div className="glass gradient-border rounded-2xl p-6 font-mono text-xs">
            <div className="flex items-center justify-between text-white/40 mb-5">
              <span>~/visnu/status</span>
              <span className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white/15" />
                <span className="w-2 h-2 rounded-full bg-white/15" />
                <span className="w-2 h-2 rounded-full bg-white/15" />
              </span>
            </div>
            <Row k="role" v="Software Developer Specialist" />
            <Row k="company" v="SAP Labs Canada" highlight />
            <Row k="experience" v="5+ years full-stack" />
            <Row k="focus" v="Full-stack × Agentic AI" />
            <Row k="location" v={profile.location} icon />
            <div className="mt-5 pt-4 border-t border-white/5 text-white/35">
              <span className="text-accent-grad">$</span> ask me about → SAP Joule, LangGraph agents, Spring Boot, Angular
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

function Row({ k, v, highlight, icon, pulse }: { k: string; v: string; highlight?: boolean; icon?: boolean; pulse?: boolean }) {
  return (
    <div className="flex items-baseline gap-3 py-1.5">
      <span className="text-white/35 w-20 shrink-0">{k}</span>
      <span className="text-white/30">::</span>
      <span className={`flex items-center gap-1.5 ${highlight ? "text-accent-grad font-medium" : "text-white/85"}`}>
        {icon && <MapPin size={11} className="text-white/40" />}
        {v}
        {pulse && <span className="ml-1 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />}
      </span>
    </div>
  );
}
