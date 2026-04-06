"use client";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { why } from "@/content/data";

export default function Why() {
  return (
    <Section id="why" eyebrow="07 — Why me" title="What you actually get when you hire me.">
      <div className="grid md:grid-cols-2 gap-5">
        {why.map((w, i) => (
          <motion.div key={w.k} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
            className="glass gradient-border rounded-2xl p-7">
            <div className="font-display text-2xl text-grad">{w.k}</div>
            <p className="mt-3 text-white/60 leading-relaxed">{w.v}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
