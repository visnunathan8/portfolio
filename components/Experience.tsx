"use client";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { experience } from "@/content/data";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="02 — Trajectory" title="Five years from SaaS plumbing to agentic AI." kicker="Each role pushed further into harder systems and deeper ownership.">
      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-violet/40 via-white/10 to-transparent" />
        <div className="space-y-12">
          {experience.map((e, i) => (
            <motion.article key={e.company} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative pl-10">
              <div className={`absolute left-0 top-2 w-4 h-4 rounded-full border-2 ${e.current ? "border-accent-cyan bg-accent-cyan/20 shadow-glow" : "border-white/20 bg-ink-900"}`}>
                {e.current && <span className="absolute inset-0 rounded-full bg-accent-cyan animate-pulse-dot opacity-50" />}
              </div>
              <div className="font-mono text-xs text-white/40 mb-2">{e.period} · {e.location}</div>
              <h3 className="font-display text-2xl md:text-3xl text-grad">{e.role}</h3>
              <div className="mt-1 text-accent-grad font-medium">{e.company}</div>
              <p className="mt-3 text-white/55 max-w-2xl">{e.blurb}</p>
              <ul className="mt-5 space-y-2 text-white/70 text-[15px] max-w-3xl">
                {e.highlights.map((h, j) => (
                  <li key={j} className="flex gap-3"><span className="text-accent-cyan/70 mt-1.5 shrink-0">▸</span><span>{h}</span></li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {e.stack.map((s) => (
                  <span key={s} className="text-[11px] font-mono px-2 py-1 rounded-md border border-white/10 text-white/55">{s}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
