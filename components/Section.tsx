"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Section({ id, eyebrow, title, kicker, children }: {
  id: string; eyebrow: string; title: string; kicker?: string; children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="mb-10">
          <div className="font-mono text-sm text-accent-grad tracking-wider uppercase mb-4">{eyebrow}</div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-grad tracking-tight max-w-4xl leading-[0.95]">{title}</h2>
          {kicker && <p className="mt-5 text-lg md:text-xl text-white/60 max-w-3xl">{kicker}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
