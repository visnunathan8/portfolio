"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Sparkles, X, Send } from "lucide-react";
import { profile } from "@/content/data";

type Msg = { from: "bot" | "user"; text: string; actions?: { label: string; do: () => void }[] };

const SUGGESTIONS = [
  "Who are you?",
  "What do you build with AI?",
  "Show me your best work",
  "What's your tech stack?",
  "Hackathons?",
  "How do I contact you?",
];

export default function AssistantBot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Greet on first open
  useEffect(() => {
    if (open && msgs.length === 0) {
      setTimeout(() => {
        setMsgs([
          {
            from: "bot",
            text: "Hey 👋 I'm Visnu's portfolio guide. Ask me anything about his work, stack or experience — or pick a quick question below.",
          },
        ]);
      }, 200);
    }
  }, [open]); // eslint-disable-line

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, typing]);

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const reply = (q: string) => {
    setMsgs((m) => [...m, { from: "user", text: q }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      const lower = q.toLowerCase();
      let r: Msg;
      if (/who|about|yourself/.test(lower)) {
        r = {
          from: "bot",
          text: "Visnu is a full-stack developer with 5+ years of experience across SAP Labs, Aviva, Concordia and Zoho. Strong in Java/Spring and Angular/React, and now building inside the agentic AI stack — LangGraph, LangChain, RAG and SAP Joule.",
          actions: [{ label: "Open About →", do: () => go("about") }],
        };
      } else if (/ai|llm|agent|joule|langgraph/.test(lower)) {
        r = {
          from: "bot",
          text: "At SAP he's shipping AI capabilities inside Joule on IBP — OData services, LangGraph multi-agent POCs, RAG pipelines, all deployed on BTP/Kyma. Want to see how he thinks about the agentic stack?",
          actions: [{ label: "Open AI Stack →", do: () => go("ai-stack") }],
        };
      } else if (/work|project|best|featured|portfolio/.test(lower)) {
        r = {
          from: "bot",
          text: "There are 6 featured projects — SAP Joule, Agentic IBP, Aviva ML pipeline, a security research tool, the Zoho cross-framework component library, and FITnFLEX. Plus more work + hackathons below.",
          actions: [{ label: "Jump to Work →", do: () => go("work") }],
        };
      } else if (/stack|tech|skill|tool/.test(lower)) {
        r = {
          from: "bot",
          text: "Java, Spring Boot, Python, Angular, React, TypeScript on the core. Kafka, Redis, PostgreSQL, HANA on the data side. LangGraph, LangChain, RAG on the AI side. Docker, Kyma, BTP, Jenkins for shipping.",
          actions: [{ label: "Open Toolbox →", do: () => go("toolbox") }],
        };
      } else if (/hack|prize|win|award/.test(lower)) {
        r = {
          from: "bot",
          text: "Three hackathon wins 🏆 — ConUHacks SAP Challenge (CAD $750), Smart India Hackathon (₹1 lakh), and SEM Hackathon (won an internship offer). Plus the Best Outgoing Student award at his Bachelor's.",
          actions: [{ label: "See Highlights →", do: () => go("achievements") }],
        };
      } else if (/contact|hire|email|reach/.test(lower)) {
        r = {
          from: "bot",
          text: `Best way: email ${profile.email}. He's based in Toronto, Canada and open to relocation.`,
          actions: [
            { label: "Open Contact →", do: () => go("contact") },
            { label: "Copy email", do: () => navigator.clipboard.writeText(profile.email) },
          ],
        };
      } else if (/exp|year|company|sap|zoho|aviva/.test(lower)) {
        r = {
          from: "bot",
          text: "5+ years across 4 companies on 2 continents. Currently SAP Labs Canada (since June 2024). Before that: Aviva Canada, Concordia University Research, and Zoho Corporation in India.",
          actions: [{ label: "See Experience →", do: () => go("experience") }],
        };
      } else if (/location|where|toronto|canada|relocat/.test(lower)) {
        r = { from: "bot", text: "Toronto, Canada — open to relocation anywhere." };
      } else {
        r = {
          from: "bot",
          text: "I can answer questions about Visnu's experience, projects, stack, hackathons, or how to contact him. Try one of the chips below.",
        };
      }
      setMsgs((m) => [...m, r]);
    }, 600);
  };

  return (
    <>
      {/* Launcher */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-[45] w-14 h-14 rounded-full bg-grad-accent shadow-glow flex items-center justify-center text-ink-950 hover:scale-105 transition"
        aria-label="Open assistant"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={20} />
            </motion.div>
          ) : (
            <motion.div key="s" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <Sparkles size={20} />
            </motion.div>
          )}
        </AnimatePresence>
        {!open && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse-dot border-2 border-ink-950" />
        )}
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="fixed bottom-24 right-6 z-[44] w-[360px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[70vh] glass gradient-border rounded-2xl flex flex-col overflow-hidden bg-ink-900/95 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-white/8 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-grad-accent flex items-center justify-center text-ink-950">
                <Sparkles size={16} />
              </div>
              <div className="flex-1">
                <div className="text-white text-sm font-medium">Portfolio Guide</div>
                <div className="text-[11px] text-white/45 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Online · powered by Visnu
                </div>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {msgs.map((m, i) => (
                <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                    m.from === "user"
                      ? "bg-grad-accent text-ink-950 font-medium rounded-br-sm"
                      : "bg-white/5 text-white/85 border border-white/8 rounded-bl-sm"
                  }`}>
                    {m.text}
                    {m.actions && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {m.actions.map((a, j) => (
                          <button
                            key={j}
                            onClick={a.do}
                            className="text-[11px] px-2.5 py-1 rounded-full bg-ink-950/40 hover:bg-ink-950/70 text-white border border-white/10 transition"
                          >
                            {a.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/8 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse-dot" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse-dot" style={{ animationDelay: "0.15s" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse-dot" style={{ animationDelay: "0.3s" }} />
                  </div>
                </div>
              )}
            </div>

            {/* Suggestion chips */}
            <div className="px-4 pt-2 pb-3 border-t border-white/8">
              <div className="flex flex-wrap gap-1.5 mb-3">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => reply(s)}
                    className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 text-white/65 hover:text-white hover:border-accent-violet/40 transition"
                  >
                    {s}
                  </button>
                ))}
              </div>
              <ChatInput onSend={reply} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ChatInput({ onSend }: { onSend: (q: string) => void }) {
  const [v, setV] = useState("");
  const submit = () => { if (v.trim()) { onSend(v.trim()); setV(""); } };
  return (
    <div className="flex items-center gap-2 bg-ink-950 rounded-full border border-white/10 px-4 py-2">
      <input
        value={v}
        onChange={(e) => setV(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && submit()}
        placeholder="Ask me anything…"
        className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-white/30"
      />
      <button onClick={submit} className="text-accent-cyan hover:text-white transition">
        <Send size={14} />
      </button>
    </div>
  );
}
