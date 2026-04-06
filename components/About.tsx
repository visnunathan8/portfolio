"use client";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { about } from "@/content/data";

export default function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="Backend instincts. AI-native execution.">
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-5 text-white/70 text-lg leading-relaxed">
          {about.body.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="lg:col-span-5 space-y-3">
          {about.pillars.map((p, i) => (
            <motion.div key={p.k} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="glass gradient-border rounded-xl p-5">
              <div className="font-mono text-xs text-accent-grad uppercase tracking-wider">{p.k}</div>
              <div className="mt-1.5 text-white/85 text-sm">{p.v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
