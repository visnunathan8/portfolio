"use client";
import { motion } from "framer-motion";
import { Trophy, GraduationCap, Globe, Award } from "lucide-react";
import { Section } from "./Section";
import { achievements } from "@/content/data";

const ICONS = [Trophy, GraduationCap, Globe, Award];

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="06 — Highlights" title="Receipts.">
      <div className="grid md:grid-cols-2 gap-4">
        {achievements.map((a, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <motion.div key={a.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="glass gradient-border rounded-xl p-5 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-grad-accent flex items-center justify-center shrink-0 text-ink-950">
                <Icon size={18} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-baseline gap-3">
                  <h3 className="text-white font-medium">{a.title}</h3>
                  <span className="text-xs font-mono text-white/40">{a.year}</span>
                </div>
                <p className="mt-1 text-sm text-white/55">{a.note}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
