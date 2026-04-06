"use client";
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Command } from "lucide-react";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "ai-stack", label: "AI Stack" },
  { id: "toolbox", label: "Toolbox" },
  { id: "contact", label: "Contact" },
];

export default function Nav({ onOpenPalette, recruiterMode, onToggleRecruiter }: {
  onOpenPalette: () => void; recruiterMode: boolean; onToggleRecruiter: () => void;
}) {
  const { scrollYProgress } = useScroll();
  const [active, setActive] = useState("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    SECTIONS.forEach((s) => { const el = document.getElementById(s.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <motion.div style={{ scaleX: scrollYProgress }} className="fixed top-0 left-0 right-0 h-[2px] origin-left bg-grad-accent z-50" />
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-40">
        <nav className="glass gradient-border rounded-full px-2 py-2 flex items-center gap-1 text-sm">
          <a href="#top" className="px-3 py-1.5 font-mono text-xs tracking-tight text-white/80 hover:text-white">vc.</a>
          <span className="w-px h-4 bg-white/10 mx-1" />
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`}
               className={`px-3 py-1.5 rounded-full transition ${active === s.id ? "text-white bg-white/5" : "text-white/55 hover:text-white"}`}>
              {s.label}
            </a>
          ))}
          <span className="w-px h-4 bg-white/10 mx-1" />
          <button onClick={onToggleRecruiter}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition ${recruiterMode ? "bg-grad-accent text-ink-950" : "text-white/70 hover:text-white"}`}>
            Recruiter
          </button>
          <button onClick={onOpenPalette} className="px-2.5 py-1.5 rounded-full text-white/55 hover:text-white flex items-center gap-1 text-xs">
            <Command size={12} /> K
          </button>
        </nav>
      </header>
    </>
  );
}
