import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { 950: "#0a0a0c", 900: "#0e0e12", 800: "#15151b", 700: "#1c1c25" },
        line: "rgba(255,255,255,0.08)",
        accent: { violet: "#7c5cff", cyan: "#22d3ee" },
      },
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grad-accent": "linear-gradient(135deg,#7c5cff 0%,#22d3ee 100%)",
        "grad-text": "linear-gradient(135deg,#fff 0%,#a5a5b8 100%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(124,92,255,0.3), 0 20px 60px -20px rgba(124,92,255,0.4)",
      },
      animation: {
        "fade-up": "fadeUp .7s ease-out both",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        pulseDot: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0.4" } },
      },
    },
  },
  plugins: [],
};
export default config;
