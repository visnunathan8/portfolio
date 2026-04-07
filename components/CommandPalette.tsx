"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { profile } from "@/content/data";

type Cmd = { label: string; hint?: string; action: () => void };

export default function CommandPalette({ open, setOpen }: { open: boolean; setOpen: (b: boolean) => void }) {
  const [q, setQ] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setOpen(!open); }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setOpen(false); };

  const cmds: Cmd[] = [
    { label: "Jump → About", action: () => go("about") },
    { label: "Jump → Experience", action: () => go("experience") },
    { label: "Jump → Selected Work", action: () => go("work") },
    { label: "Jump → Toolbox", action: () => go("toolbox") },
    { label: "Jump → Contact", action: () => go("contact") },
    { label: "Copy email", hint: profile.email, action: () => { navigator.clipboard.writeText(profile.email); setOpen(false); } },
    { label: "Open LinkedIn", action: () => { window.open(profile.linkedin, "_blank"); setOpen(false); } },
    { label: "Open GitHub", action: () => { window.open(profile.github, "_blank"); setOpen(false); } },
    { label: "Download résumé", action: () => {
        const a = document.createElement("a");
        a.href = profile.resumeUrl;
        a.download = "Visnunathan_Chidambaranathan_Resume.pdf";
        a.click();
        setOpen(false);
      } },
  ];
  const filtered = cmds.filter((c) => c.label.toLowerCase().includes(q.toLowerCase()));

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[60] bg-ink-950/70 backdrop-blur-md flex items-start justify-center pt-32 px-4">
          <motion.div initial={{ scale: 0.96, y: -10 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: -10 }}
            onClick={(e) => e.stopPropagation()}
            className="glass gradient-border rounded-xl w-full max-w-lg overflow-hidden">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5">
              <Search size={16} className="text-white/40" />
              <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Type a command…"
                className="flex-1 bg-transparent text-white outline-none placeholder:text-white/30 text-sm" />
              <kbd className="text-[10px] font-mono text-white/40 border border-white/10 px-1.5 py-0.5 rounded">ESC</kbd>
            </div>
            <div className="max-h-80 overflow-y-auto py-2">
              {filtered.length === 0 && <div className="px-4 py-6 text-sm text-white/40 text-center">No matches</div>}
              {filtered.map((c, i) => (
                <button key={i} onClick={c.action}
                  className="w-full px-4 py-2.5 flex items-center justify-between gap-3 text-sm text-white/80 hover:bg-white/[0.04] hover:text-white">
                  <span className="flex items-center gap-3"><ArrowRight size={12} className="text-accent-cyan" /> {c.label}</span>
                  {c.hint && <span className="text-xs font-mono text-white/30">{c.hint}</span>}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
