"use client";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Vee — a properly designed interactive mascot.
 * 96px robot/orb character with:
 *  - antenna w/ glowing tip
 *  - cursor-tracking eyes (with proper iris + pupil)
 *  - reactive mouth (idle smile / poked "o" / happy when hovered)
 *  - drag anywhere on screen
 *  - poke (click) → spring bounce + speech bubble
 *  - idle floating animation
 *  - random thought bubbles
 */

// Intro first, then achievements + highlights cycle continuously
const INTRO = [
  "Hi, I'm Visnu 👋",
  "Full-stack engineer · 5+ years",
  "Currently @ SAP Labs Canada",
];
const QUIPS = [
  "🏆 ConUHacks SAP Challenge — CAD $750",
  "🏆 Smart India Hackathon — ₹1 lakh prize",
  "🏆 SEM Hackathon — internship offer",
  "🎓 Best Outgoing Student Award",
  "⚡ Shipping AI in SAP Joule",
  "🧠 LangGraph · LangChain · RAG",
  "💼 5+ years full-stack experience",
  "🚀 SAP Labs · Aviva · Zoho · Concordia",
  "💪 Java · Spring · React · Python",
  "🎯 Press ⌘K for shortcuts",
  "✨ Drag me — I follow your cursor",
];

export default function Mascot() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [eye, setEye] = useState({ x: 0, y: 0 });
  const [quip, setQuip] = useState<string | null>(null);
  const [poked, setPoked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [blink, setBlink] = useState(false);

  // Cursor → eye direction
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const rect = wrapRef.current?.getBoundingClientRect();
      if (!rect) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy) || 1;
      const max = 5;
      setEye({ x: (dx / dist) * max, y: (dy / dist) * max });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Blink loop
  useEffect(() => {
    const t = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 140);
    }, 4200);
    return () => clearInterval(t);
  }, []);

  // Intro sequence first, then loop achievements continuously
  useEffect(() => {
    const sequence = [...INTRO, ...QUIPS];
    let i = 0;
    setQuip(sequence[0]);
    const t = setInterval(() => {
      i = (i + 1) % sequence.length;
      // After full sequence, keep looping through QUIPS only
      if (i === 0) i = INTRO.length;
      setQuip(sequence[i]);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  // Idle float
  const float = useMotionValue(0);
  useEffect(() => {
    let raf: number;
    let t0 = performance.now();
    const tick = (t: number) => {
      float.set(Math.sin((t - t0) / 700) * 6);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [float]);

  const onPoke = () => {
    setPoked(true);
    setQuip(QUIPS[Math.floor(Math.random() * QUIPS.length)]);
    setTimeout(() => setPoked(false), 600);
    setTimeout(() => setQuip(null), 4000);
  };

  return (
    <motion.div
      ref={wrapRef}
      drag
      dragMomentum={false}
      dragElastic={0.18}
      style={{ x, y }}
      className="fixed top-1/2 right-8 -translate-y-1/2 z-[45] cursor-grab active:cursor-grabbing select-none"
    >
      {/* Speech bubble */}
      <AnimatePresence>
        {quip && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.85 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="absolute right-full top-1/2 -translate-y-1/2 mr-4 whitespace-nowrap"
          >
            <div className="glass gradient-border rounded-2xl px-4 py-2.5 text-sm text-white shadow-glow font-medium bg-ink-900/95 backdrop-blur-md">
              {quip}
            </div>
            <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2.5 h-2.5 rotate-45 bg-ink-900 border-r border-t border-white/15" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Whole character */}
      <motion.div style={{ y: float }} className="relative">
        {/* Antenna */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-5 flex flex-col items-center">
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-2.5 h-2.5 rounded-full bg-accent-cyan shadow-[0_0_12px_rgba(34,211,238,0.9)]"
          />
          <div className="w-px h-3 bg-gradient-to-b from-accent-cyan/80 to-white/20" />
        </div>

        {/* Body */}
        <motion.div
          animate={poked ? { scale: [1, 1.25, 0.92, 1.08, 1], rotate: [0, -5, 5, -2, 0] } : { scale: hovered ? 1.06 : 1 }}
          transition={{ duration: poked ? 0.55 : 0.25 }}
          onClick={onPoke}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          className="relative w-24 h-24 rounded-[36%] bg-grad-accent shadow-glow overflow-hidden"
          style={{ filter: "drop-shadow(0 20px 40px rgba(124,92,255,0.45))" }}
          aria-label="Vee mascot — drag, poke, play"
        >
          {/* Inner darker face panel */}
          <div className="absolute inset-2 rounded-[34%] bg-gradient-to-b from-ink-900 to-ink-950 flex flex-col items-center justify-center">
            {/* Eyes row */}
            <div className="flex gap-3 mt-1">
              {/* Left eye */}
              <Eye blink={blink} eye={eye} hovered={hovered} />
              {/* Right eye */}
              <Eye blink={blink} eye={eye} hovered={hovered} />
            </div>

            {/* Mouth */}
            <div className="mt-2.5 h-3 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {poked ? (
                  <motion.div
                    key="o"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="w-2.5 h-2.5 rounded-full border-2 border-white/80"
                  />
                ) : hovered ? (
                  <motion.div
                    key="happy"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    className="w-5 h-2.5 border-b-2 border-x-2 border-accent-cyan rounded-b-full"
                  />
                ) : (
                  <motion.div
                    key="smile"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    className="w-3.5 h-1.5 border-b-2 border-x-2 border-white/60 rounded-b-full"
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Tiny chest LED */}
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-2 w-1 h-1 rounded-full bg-accent-cyan shadow-[0_0_6px_rgba(34,211,238,0.9)]"
            />
          </div>

          {/* Cheek glow blushes */}
          <div className="absolute bottom-5 left-2 w-3 h-1.5 rounded-full bg-pink-400/40 blur-[2px]" />
          <div className="absolute bottom-5 right-2 w-3 h-1.5 rounded-full bg-pink-400/40 blur-[2px]" />
        </motion.div>

        {/* Shadow under feet */}
        <motion.div
          animate={{ scaleX: [1, 0.85, 1], opacity: [0.4, 0.25, 0.4] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-2 rounded-full bg-black/60 blur-md"
        />

        {/* Outer pulse ring */}
        <span className="absolute inset-0 rounded-[36%] border border-accent-violet/30 animate-pulse-dot pointer-events-none" />
      </motion.div>
    </motion.div>
  );
}

function Eye({ blink, eye, hovered }: { blink: boolean; eye: { x: number; y: number }; hovered: boolean }) {
  return (
    <div className="relative w-3.5 h-3.5 rounded-full bg-white shadow-inner overflow-hidden">
      {/* Iris */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-accent-cyan"
        style={{ translateX: eye.x - 4, translateY: eye.y - 4 }}
      >
        {/* Pupil */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-ink-950" />
        {/* Highlight */}
        <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 rounded-full bg-white" />
      </motion.div>
      {/* Blink eyelid */}
      <motion.div
        animate={{ scaleY: blink ? 1 : 0 }}
        transition={{ duration: 0.08 }}
        style={{ originY: 0 }}
        className="absolute inset-0 bg-ink-900"
      />
    </div>
  );
}
