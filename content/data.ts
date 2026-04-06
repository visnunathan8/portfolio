// Single source of truth — edit copy here. Everything on the site reads from this file.

export const profile = {
  name: "Visnunathan Chidambaranathan",
  shortName: "Visnu",
  title: "Full-Stack Developer",
  location: "Toronto, Canada",
  email: "visnu8898@gmail.com",
  phone: "+1 (514) 578-8948",
  github: "https://github.com/visnunathan8",
  linkedin: "https://www.linkedin.com/in/visnunathan-chidambaranathan/",
  resumeUrl: "/resume.pdf",
  tagline: "Full-stack engineer building AI-native products.",
  summary:
    "Full-stack engineer with 5+ years shipping production systems at SAP Labs, Aviva, Concordia and Zoho — and currently building agentic AI capabilities inside SAP Joule with LangGraph, LangChain and RAG. I bridge real backend depth with the AI tools that are reshaping how products get built. Based in Toronto, Canada.",
};

export const metrics = [
  { value: 5, suffix: "+", label: "Years full-stack experience" },
  { value: 4, suffix: "", label: "Companies · 2 continents" },
  { value: 15, suffix: "+", label: "Production projects shipped" },
  { value: 3, suffix: "", label: "Hackathon wins" },
];

export const about = {
  body: [
    "I'm a full-stack developer first. Five years shipping real software — CRM SaaS at Zoho, predictive pipelines at Aviva, security tooling at Concordia, and now backend + AI capabilities at SAP Labs Canada.",
    "Lately my focus is the AI-native shift: not chasing hype, but learning the agentic stack the same way I learned Spring Boot — by building things that have to actually work. LangGraph, LangChain, RAG, tool-use, and shipping AI features inside SAP Joule on BTP and Kyma.",
    "I move between frontend, backend, data layers and now AI workflows. That range is the point.",
  ],
  pillars: [
    { k: "Full-stack core", v: "Java · Spring Boot · Angular · React · TypeScript · Python" },
    { k: "AI & agentic", v: "LangGraph · LangChain · RAG · OpenAI APIs · SAP Joule" },
    { k: "Data & cloud", v: "Kafka · Redis · PostgreSQL · HANA · Docker · Kyma · BTP" },
  ],
};

export type Experience = {
  role: string; company: string; location: string; period: string; current?: boolean;
  blurb: string; highlights: string[]; stack: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Developer Specialist — Backend & AI Systems",
    company: "SAP Labs Canada",
    location: "Montréal, CA",
    period: "Jun 2024 — Present",
    current: true,
    blurb: "Backend and agentic AI for SAP Joule on Integrated Business Planning.",
    highlights: [
      "Designed OData + REST services that let SAP Joule converse with and navigate IBP — the backbone of Joule's IBP capabilities.",
      "Built data enrichment pipelines feeding SAP's internal LLM platform (ISLM), measurably improving response accuracy.",
      "Prototyped multi-agent workflows on IBP datasets with LangGraph + LangChain (tool-use, memory, supply-chain reasoning).",
      "Shipping deployable AI agents on SAP BTP / Kyma, containerized via Docker through Jenkins CI.",
      "Led the navigational capability inside Joule, integrating IBP flows into SAP Build Work Zone end-to-end.",
      "Wrote end-to-end automation with WDI5 + Cucumber (BDD) and ABAP unit tests for backend services.",
    ],
    stack: ["ABAP", "Python", "OData", "REST APIs", "LangGraph", "LangChain", "SAP Joule", "ISLM", "SAP BTP", "Kyma", "Docker", "Jenkins", "WDI5", "Cucumber"],
  },
  {
    role: "IT Developer",
    company: "Aviva Canada",
    location: "Canada",
    period: "Sep 2023 — Apr 2024",
    blurb: "Predictive modeling and pipeline optimization for actuarial workflows.",
    highlights: [
      "Integrated Bayesian search into model assessment, sharpening feature selection.",
      "Built a Python pipeline that cut processing time on data-heavy jobs by 20%.",
      "Deployed an automated model-monitoring system for real-time performance insight.",
    ],
    stack: ["Python", "Bayesian search", "ML pipelines"],
  },
  {
    role: "Full-Stack Developer & Research Assistant",
    company: "Concordia University",
    location: "Montréal, CA",
    period: "May 2023 — Sep 2023",
    blurb: "Vulnerability detection tooling for security research.",
    highlights: [
      "Built a React + Flask app with SQLAlchemy and a recursive DFS fact extractor for BLOB objects.",
      "Designed a pub/sub layer for real-time event broadcasting across the detection pipeline.",
      "Wired Jupyter-based triaging into a single workflow.",
    ],
    stack: ["React", "Flask", "SQLAlchemy", "Docker"],
  },
  {
    role: "Full-Stack Developer",
    company: "Zoho Corporation",
    location: "Chennai, IN",
    period: "Jan 2020 — Aug 2022",
    blurb: "CRM SaaS, distributed systems, and a cross-framework component library.",
    highlights: [
      "Shipped CRM features on Java 8, Spring Boot, Angular 7 and Struts following MVC.",
      "Built a multi-threaded email delivery system, scaling async processing.",
      "Engineered reusable web components compatible with Angular, React, Vue, Node and LyteJS.",
      "Integrated Kafka for event-driven streaming and Redis for distributed caching.",
      "Optimized SQL across MySQL/PostgreSQL via indexing and plan analysis.",
    ],
    stack: ["Java", "Spring Boot", "Angular", "Kafka", "Redis", "MySQL", "Docker"],
  },
];

export type Project = {
  name: string; tagline: string; problem: string; impact: string;
  stack: string[]; tag: "AI" | "Enterprise" | "Full-Stack" | "Research" | "Personal";
  link?: string; repo?: string; featured?: boolean;
};

// IMPORTANT: paste your real GitHub repo URLs into `repo` and live URLs into `link`.
// They'll automatically render as Code / Live buttons on each card and modal.
export const projects: Project[] = [
  // ── 6 FEATURED PROJECTS ──────────────────────────────────────────
  {
    featured: true,
    name: "SAP Joule × IBP — Conversational & Navigational AI",
    tagline: "Backend for SAP's AI assistant on Integrated Business Planning.",
    problem: "Give an LLM safe, structured access to a complex enterprise planning system — without breaking either.",
    impact: "Production capability inside Joule. Conversational + navigational flows live across IBP modules and Build Work Zone.",
    stack: ["OData", "REST APIs", "LangGraph", "ISLM", "SAP BTP", "Kyma"],
    tag: "Enterprise",
    // proprietary — no public repo
  },
  {
    featured: true,
    name: "Agentic IBP — Multi-Agent POC",
    tagline: "LangGraph agents reasoning over supply-chain data.",
    problem: "Prove tool-using agents can answer real planner questions instead of hallucinating around them.",
    impact: "POC adopted as the reference for SAP's deployable agent direction on BTP/Kyma.",
    stack: ["LangGraph", "LangChain", "Python", "RAG", "Docker", "Kyma"],
    tag: "AI",
  },
  {
    featured: true,
    name: "Aviva Predictive Pipeline",
    tagline: "Bayesian-driven model assessment and monitoring.",
    problem: "Slow feedback loops on data-intensive predictive models.",
    impact: "20% drop in processing time. Live monitoring layer for drift and performance.",
    stack: ["Python", "Bayesian Search", "ML Ops"],
    tag: "AI",
  },
  {
    featured: true,
    name: "Vulnerability Detection Platform",
    tagline: "React + Flask app with a recursive BLOB fact extractor.",
    problem: "Security researchers needed to inspect deeply-nested binary artifacts without leaving the browser.",
    impact: "Single workflow for extraction, triage and review — replaced a stack of disconnected notebooks.",
    stack: ["React", "Flask", "SQLAlchemy", "Docker", "Pub/Sub"],
    tag: "Research",
    repo: "https://github.com/", // TODO
  },
  {
    featured: true,
    name: "Zoho Cross-Framework Component Library",
    tagline: "One component, every framework.",
    problem: "Zoho's product suite spanned Angular, React, Vue, Node and LyteJS — UI was diverging.",
    impact: "Reusable web components with Docker-based publishing, adopted across multiple Zoho products.",
    stack: ["Web Components", "Angular", "React", "Vue", "Docker"],
    tag: "Full-Stack",
  },
  {
    featured: true,
    name: "FITnFLEX — Cross-Platform Fitness App",
    tagline: "Workout tracking with Google Fit OAuth integration.",
    problem: "Build a fitness app that talks to Google Fit and stays usable across devices.",
    impact: "Working cross-platform app with real-time workout tracking and analytics.",
    stack: ["Angular 7", "Flask", "MySQL", "Google OAuth"],
    tag: "Personal",
    repo: "https://github.com/", // TODO
  },

  // ── ADDITIONAL WORK ──────────────────────────────────────────────
  {
    name: "ConUHacks — SAP Challenge Winner",
    tagline: "Optimized scheduling algorithm shipped in 24h.",
    problem: "Build a working scheduling optimizer in a weekend with a team of four.",
    impact: "Won the SAP Challenge (CAD $750). Live demo, clean explanation, real algorithm.",
    stack: ["Python", "Algorithms", "Optimization"],
    tag: "AI",
    repo: "https://github.com/", // TODO
  },
  {
    name: "Smart India Hackathon — Winner",
    tagline: "National-level winning solution, ₹1 lakh prize.",
    problem: "Solve a government-defined problem statement against thousands of Indian teams in 36 hours.",
    impact: "Winning solution. ₹1,00,000 (1 lakh INR) cash prize. India's largest hackathon.",
    stack: ["Java", "Algorithms", "Full-Stack"],
    tag: "AI",
  },
  {
    name: "Multi-Threaded Email Delivery System",
    tagline: "Async mail pipeline at Zoho scale.",
    problem: "Email delivery was bottlenecked on a synchronous path.",
    impact: "Multi-threaded async system, significantly higher throughput across Zoho CRM.",
    stack: ["Java", "Spring Boot", "Concurrency", "Kafka"],
    tag: "Full-Stack",
  },
  {
    name: "Attendance Management System",
    tagline: "High-performance HR module at Zoho.",
    problem: "Internal attendance tooling needed to scale across teams.",
    impact: "Spring Boot + Angular app with Hibernate ORM, used internally.",
    stack: ["Spring Boot", "Angular", "Hibernate", "MySQL"],
    tag: "Full-Stack",
  },
];

export const toolbox = [
  { group: "Languages", items: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "ABAP", "HTML5", "CSS3"] },
  { group: "Backend", items: ["Spring Boot", "Struts", "JPA", "Hibernate", "REST APIs", "OData", "Microservices", "Flask"] },
  { group: "Frontend", items: ["Angular", "React", "RxJS", "NgRx", "TypeScript", "Web Components", "Tailwind"] },
  { group: "Data & Streaming", items: ["Kafka", "Redis", "PostgreSQL", "MySQL", "SAP HANA", "SQLAlchemy"] },
  { group: "AI & Agentic", items: ["LangGraph", "LangChain", "RAG", "OpenAI APIs", "Prompt Engineering", "Agents & Tools", "SAP Joule", "ISLM"] },
  { group: "Cloud & DevOps", items: ["Docker", "Kubernetes", "Kyma", "SAP BTP", "Jenkins", "GitHub Actions", "Bitbucket", "Mercurial"] },
  { group: "Testing & Quality", items: ["JUnit", "Selenium", "WDI5", "Cucumber (BDD)", "Jasmine", "SonarQube"] },
  { group: "Process", items: ["Agile / Scrum", "Kanban", "Jira", "Confluence", "Code Reviews"] },
];

export const achievements = [
  { title: "ConUHacks — SAP Challenge Winner", year: "2024", note: "Led a team to a CAD $750 SAP prize with an optimized scheduling algorithm. Montréal, Canada." },
  { title: "Smart India Hackathon — Winner", year: "2019", note: "₹1,00,000 (1 lakh INR) cash prize, India's largest national-level hackathon. Beat thousands of teams across India." },
  { title: "SEM Hackathon — Winner", year: "2019", note: "Awarded a software internship offer as the top prize for the winning solution." },
  { title: "Best Outgoing Student Award", year: "2020", note: "Recognized at graduation for academic, technical and leadership contributions during my Bachelor's program." },
  { title: "Master of Applied Computer Science", year: "2024", note: "Concordia University, Montréal." },
  { title: "B.E. Computer Science Engineering", year: "2020", note: "St. Joseph's Institute of Technology, Anna University, Chennai." },
  { title: "Global tech talks across SAP", year: "2024–25", note: "Knowledge-sharing sessions with teams in Montréal, Walldorf, Markdorf and Palo Alto." },
];

export const why = [
  { k: "Real full-stack range", v: "5 years across CRM SaaS, predictive ML, security tooling and enterprise AI. I move between frontend, backend and data without hand-offs." },
  { k: "Adapting to AI, the right way", v: "I'm not chasing demos. I'm shipping LangGraph agents, RAG pipelines and Joule capabilities that have to survive enterprise constraints." },
  { k: "Enterprise-grade default", v: "Inside SAP and Zoho I learned to think about deployments, regressions, globalization and on-call — not just happy paths." },
  { k: "Fast learner with proof", v: "Master's, hackathon win, Best Outgoing Student award, and a clean shift from SaaS into agentic AI in under two years." },
  { k: "Product-aware engineer", v: "I care why a feature exists. PMs and recruiters don't need to translate for me." },
];
