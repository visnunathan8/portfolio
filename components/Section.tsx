"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Section({ id, eyebrow, title, kicker, children }: {
  id: string; eyebrow: string; title: string; kicker?: string; children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="mb-14">
          <div className="font-mono text-xs text-accent-grad tracking-wider uppercase mb-3">{eyebrow}</div>
          <h2 className="font-display text-4xl md:text-5xl text-grad tracking-tight max-w-3xl">{title}</h2>
          {kicker && <p className="mt-4 text-white/55 max-w-2xl">{kicker}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
