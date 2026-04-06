"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { ArrowUpRight, X, Github, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { projects, Project } from "@/content/data";

const TAGS = ["All", "AI", "Enterprise", "Full-Stack", "Research", "Personal"] as const;

export default function Work() {
  const [tag, setTag] = useState<(typeof TAGS)[number]>("All");
  const [open, setOpen] = useState<Project | null>(null);

  const featured = useMemo(
    () => projects.filter((p) => p.featured && (tag === "All" || p.tag === tag)),
    [tag]
  );
  const more = useMemo(
    () => projects.filter((p) => !p.featured && (tag === "All" || p.tag === tag)),
    [tag]
  );

  return (
    <Section
      id="work"
      eyebrow="03 — Selected Work"
      title="The six I'm proudest of."
      kicker="Real systems with real users — plus more work below."
    >
      {/* Filter chips */}
      <div className="flex flex-wrap gap-2 mb-10">
        {TAGS.map((t) => (
          <button
            key={t}
            onClick={() => setTag(t)}
            className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition border ${
              tag === t
                ? "bg-grad-accent text-ink-950 border-transparent"
                : "border-white/10 text-white/55 hover:text-white hover:border-white/25"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Featured grid */}
      {featured.length > 0 && (
        <>
          <div className="font-mono text-[10px] uppercase tracking-widest text-white/35 mb-4">★ Featured</div>
          <div className="grid md:grid-cols-2 gap-5">
            {featured.map((p, i) => (
              <ProjectCard key={p.name} p={p} i={i} onOpen={setOpen} large />
            ))}
          </div>
        </>
      )}

      {/* More work */}
      {more.length > 0 && (
        <>
          <div className="font-mono text-[10px] uppercase tracking-widest text-white/35 mt-16 mb-4">
            More work & hackathons
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {more.map((p, i) => (
              <ProjectCard key={p.name} p={p} i={i} onOpen={setOpen} />
            ))}
          </div>
        </>
      )}

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-50 bg-ink-950/85 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass gradient-border rounded-2xl max-w-2xl w-full p-8 max-h-[85vh] overflow-y-auto bg-ink-900"
            >
              <div className="flex justify-between items-start gap-4 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-accent-grad">
                  {open.tag}
                </span>
                <button onClick={() => setOpen(null)} className="text-white/40 hover:text-white">
                  <X size={18} />
                </button>
              </div>
              <h3 className="font-display text-3xl text-grad">{open.name}</h3>
              <p className="mt-2 text-white/60">{open.tagline}</p>
              <div className="mt-6 space-y-4">
                <Block label="The problem" body={open.problem} />
                <Block label="The impact" body={open.impact} />
              </div>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {open.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] font-mono px-2 py-1 rounded border border-white/10 text-white/60"
                  >
                    {s}
                  </span>
                ))}
              </div>
              {(open.link || open.repo) && (
                <div className="mt-6 flex gap-2">
                  {open.link && (
                    <a
                      href={open.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-grad-accent text-ink-950 font-medium px-4 py-2 rounded-full text-sm"
                    >
                      <ExternalLink size={14} /> Live
                    </a>
                  )}
                  {open.repo && (
                    <a
                      href={open.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 glass gradient-border px-4 py-2 rounded-full text-sm text-white/85"
                    >
                      <Github size={14} /> View code
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

function ProjectCard({
  p,
  i,
  onOpen,
  large,
}: {
  p: Project;
  i: number;
  onOpen: (p: Project) => void;
  large?: boolean;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.05 }}
      className="group glass gradient-border rounded-2xl p-6 md:p-7 hover:shadow-glow transition-all hover:-translate-y-0.5 flex flex-col"
    >
      <button onClick={() => onOpen(p)} className="text-left flex-1">
        <div className="flex items-start justify-between gap-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-accent-grad">
            {p.tag}
          </span>
          <ArrowUpRight
            size={18}
            className="text-white/30 group-hover:text-white group-hover:rotate-12 transition"
          />
        </div>
        <h3 className={`font-display ${large ? "text-2xl" : "text-xl"} mt-3 text-grad leading-tight`}>
          {p.name}
        </h3>
        <p className="mt-2 text-white/55 text-sm">{p.tagline}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.stack.slice(0, large ? 5 : 3).map((s) => (
            <span
              key={s}
              className="text-[11px] font-mono px-2 py-0.5 rounded border border-white/10 text-white/50"
            >
              {s}
            </span>
          ))}
        </div>
      </button>
      {(p.link || p.repo) && (
        <div className="mt-5 pt-4 border-t border-white/5 flex gap-2">
          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs text-white/65 hover:text-white"
            >
              <ExternalLink size={12} /> Live
            </a>
          )}
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs text-white/65 hover:text-white"
            >
              <Github size={12} /> Code
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">{label}</div>
      <p className="mt-1 text-white/80 leading-relaxed">{body}</p>
    </div>
  );
}
