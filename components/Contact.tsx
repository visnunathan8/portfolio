"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download, ArrowUpRight } from "lucide-react";
import { profile } from "@/content/data";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 spotlight">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="font-mono text-xs text-accent-grad uppercase tracking-wider mb-4">08 — Contact</div>
          <h2 className="font-display text-5xl md:text-7xl text-grad tracking-tight">
            Let's build <span className="italic text-accent-grad">something</span>
            <br />worth shipping.
          </h2>
          <p className="mt-6 text-white/55 max-w-xl mx-auto">
            Full-stack and AI engineering roles.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${profile.email}`} className="group inline-flex items-center gap-2 bg-grad-accent text-ink-950 font-medium px-6 py-3.5 rounded-full hover:shadow-glow transition">
              <Mail size={16} /> {profile.email}
              <ArrowUpRight size={16} className="group-hover:rotate-12 transition" />
            </a>
            <a href={profile.resumeUrl} download="Visnunathan_Chidambaranathan_Resume.pdf" className="inline-flex items-center gap-2 glass gradient-border px-6 py-3.5 rounded-full text-white/85 hover:text-white">
              <Download size={16} /> Résumé
            </a>
          </div>

          <div className="mt-8 flex justify-center gap-6 text-white/50">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white inline-flex items-center gap-2"><Linkedin size={16} /> LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-white inline-flex items-center gap-2"><Github size={16} /> GitHub</a>
          </div>
        </motion.div>
      </div>

      <footer className="mt-32 border-t border-white/5 pt-8 pb-10">
        <div className="mx-auto max-w-6xl px-6 flex flex-wrap justify-between items-center gap-3 text-xs font-mono text-white/35">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Designed & built from scratch · Next.js + Framer Motion</span>
        </div>
      </footer>
    </section>
  );
}
