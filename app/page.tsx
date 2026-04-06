"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import AIStack from "@/components/AIStack";
import Toolbox from "@/components/Toolbox";
import CursorGlow from "@/components/CursorGlow";
import Mascot from "@/components/Mascot";
import Achievements from "@/components/Achievements";
import Why from "@/components/Why";
import Contact from "@/components/Contact";
import CommandPalette from "@/components/CommandPalette";
import RecruiterMode from "@/components/RecruiterMode";

export default function Page() {
  const [palette, setPalette] = useState(false);
  const [recruiter, setRecruiter] = useState(false);

  return (
    <main className="relative">
      <CursorGlow />
      {!recruiter && <Nav onOpenPalette={() => setPalette(true)} recruiterMode={recruiter} onToggleRecruiter={() => setRecruiter((v) => !v)} />}
      <Hero />
      <Metrics />
      <About />
      <Experience />
      <Work />
      <AIStack />
      <Toolbox />
      <Achievements />
      <Why />
      <Contact />
      <CommandPalette open={palette} setOpen={setPalette} />
      {!recruiter && <Mascot />}
      <AnimatePresence>{recruiter && <RecruiterMode onClose={() => setRecruiter(false)} />}</AnimatePresence>
    </main>
  );
}
