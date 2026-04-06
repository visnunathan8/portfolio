"use client";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { toolbox } from "@/content/data";

export default function Toolbox() {
  return (
    <Section id="toolbox" eyebrow="05 — Toolbox" title="What I reach for." kicker="Grouped by how I actually use them, not by recency on LinkedIn.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {toolbox.map((g, i) => (
          <motion.div key={g.group} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
            className="glass gradient-border rounded-2xl p-6">
            <div className="font-mono text-[10px] uppercase tracking-widest text-accent-grad mb-4">{g.group}</div>
            <div className="flex flex-wrap gap-1.5">
              {g.items.map((it) => (
                <span key={it} className="text-xs px-2.5 py-1.5 rounded-md bg-white/[0.03] border border-white/8 text-white/75 hover:text-white hover:border-accent-violet/40 transition">{it}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
