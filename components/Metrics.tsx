"use client";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { metrics } from "@/content/data";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toString() + suffix);
  useEffect(() => { if (inView) animate(mv, to, { duration: 1.4, ease: "easeOut" }); }, [inView, to, mv]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Metrics() {
  return (
    <div className="mx-auto max-w-6xl px-6 -mt-10">
      <div className="glass gradient-border rounded-2xl grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
        {metrics.map((m, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="p-6 md:p-8 text-center">
            <div className="font-display text-4xl md:text-5xl text-accent-grad">
              <Counter to={m.value} suffix={m.suffix} />
            </div>
            <div className="mt-2 text-xs md:text-sm text-white/50 leading-snug">{m.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
