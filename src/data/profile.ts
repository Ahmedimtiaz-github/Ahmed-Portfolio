export const profile = {
  name: "Muhammad Ahmed Imtiaz",
  role: "AI/ML Engineer",
  tagline: "Train. Ship. Iterate.",
  headline:
    "I build production AI systems end-to-end — from biometric models for face, liveness, OCR and fingerprint verification to the FastAPI microservices, Kafka pipelines and secure APIs that put them in production.",
  availability: "AI/ML Engineer @ Neuronix Technologies",
  location: "Islamabad, Pakistan",
  email: "ahmedimtqureshi@gmail.com",
  phone: "+92 336 5014829",
  github: "https://github.com/Ahmedimtiaz-github",
  linkedin: "https://www.linkedin.com/in/muhammad-ahmed-imtiaz-68332b282",
  resumeUrl: "/Muhammad_Ahmed_Imtiaz_R.pdf",
  /** Web3Forms public access key — safe to expose; it can only deliver mail to the owner. */
  web3formsKey: "bc18a6da-9628-4195-b6e8-85cfb7e99b81",
};

export const stats = [
  { value: "10+", label: "Projects shipped" },
  { value: "4", label: "Industry roles" },
  { value: "13", label: "Services in one deployed stack" },
];

export const about = {
  paragraphs: [
    "I'm an AI/ML Engineer at Neuronix Technologies and a BS Artificial Intelligence graduate from NUML Islamabad. I got here through internships, a mentor-led deep learning fellowship and my own projects — and my focus has stayed the same throughout: applied ML that actually ships. Before biometrics I built voice AI agents, graph-based recommenders and RAG pipelines.",
    "At Neuronix I'm a core engineer on a multi-tenant KYC platform — face matching, liveness detection, OCR and fingerprint recognition as Python/FastAPI microservices, with Go backends, Kafka event pipelines, PostgreSQL and Redis. I also designed its security layer: Ed25519-signed tokens, hierarchical RBAC, per-tenant API keys and HMAC-signed webhooks.",
    "I care about evaluation as much as the model itself: honest metrics (FAR/FRR/EER, AUC/F1), tracing failures to their root cause, and systems anyone can deploy and run.",
  ],
};

export type SkillGroup = { title: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "AI / Machine Learning",
    skills: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "Hugging Face Transformers",
      "BERT",
      "CNNs (EfficientNet)",
      "XGBoost",
      "RAG",
      "FAISS",
      "Embeddings",
      "OpenCV",
      "InsightFace",
      "PaddleOCR",
      "Fine-tuning & LoRA",
      "Rasa",
      "STT/TTS (whisper.cpp, Vosk, Coqui/Piper)",
      "Model evaluation (AUC / F1, FAR / FRR / EER)",
    ],
  },
  {
    title: "Biometrics & Vision",
    skills: [
      "Face matching (InsightFace)",
      "Liveness detection (ViT)",
      "Fingerprint recognition (DeepPrint)",
      "Contactless fingerprint R&D",
      "Image enhancement (CLAHE, ridge analysis)",
      "Image quality gates",
      "OCR (PaddleOCR)",
    ],
  },
  {
    title: "Backend & Infrastructure",
    skills: [
      "FastAPI",
      "Flask",
      "Go (Gin, GORM)",
      "REST API design",
      "OpenAPI / Swagger",
      "Microservices",
      "Apache Kafka",
      "PostgreSQL",
      "Redis",
      "MySQL",
      "Docker",
      "Docker Compose",
      "Auth & RBAC (Ed25519, API keys, JWT)",
      "Webhooks (HMAC signing)",
      "API gateway (Apache APISIX)",
      "Linux / Bash",
    ],
  },
  {
    title: "Languages, Frontend & Tooling",
    skills: [
      "Python",
      "Go",
      "SQL",
      "C++",
      "Java",
      "Next.js",
      "React",
      "Git / GitHub / Bitbucket",
      "n8n",
      "Experiment tracking",
      "Reproducible notebooks",
      "Claude Code",
      "Cursor",
      "Windsurf",
    ],
  },
];

export const marqueeSkills = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "scikit-learn",
  "Transformers",
  "RAG",
  "FAISS",
  "XGBoost",
  "FastAPI",
  "Flask",
  "Go",
  "Kafka",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Next.js",
  "OpenCV",
  "InsightFace",
  "LoRA",
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    role: "AI/ML Engineer",
    company: "Neuronix Technologies",
    period: "Sep 2026 – Present",
    bullets: [
      "Core AI/ML engineer for KYC on a multi-tenant identity verification platform (KYC, KYB, transaction screening) serving external integrators via public REST APIs.",
      "Designed the platform's security layer: a shared Go auth library with Ed25519-signed tokens and Redis-backed sessions (instant revocation), hierarchical RBAC, per-tenant hashed API keys with rate limiting, and APISIX gateway hardening.",
      "Built a signed webhook system (HMAC-SHA256, transactional outbox, retries with backoff) and an async verification API with idempotent request IDs, a leased job queue and an OpenAPI 3.1 spec.",
      "Fixed a fingerprint false-accept issue — traced it to a scanner-trained model (DeepPrint) applied to phone images, unified decision thresholds, and added an image validation gate (blur, ridge-pattern checks) and enhancement pipeline (CLAHE, scale normalisation).",
      "Led R&D on contactless fingerprint recognition: evaluated models (Ridgeformer, C2CL) and datasets (RidgeBase, ISPFD, HKPolyU, synthetic IMPOSE) for licensing and fine-tuning strategy (partial fine-tuning, LoRA).",
    ],
    tech: ["Python", "Go", "Redis", "PostgreSQL", "APISIX", "OpenAPI", "DeepPrint", "LoRA"],
  },
  {
    role: "AI/ML Intern",
    company: "Neuronix Technologies",
    period: "Mar 2026 – Aug 2026",
    bullets: [
      "Built the core biometric verification services as Python/FastAPI microservices: face matching (InsightFace), liveness detection (ViT), OCR (PaddleOCR) and fingerprint matching (DeepPrint).",
      "Designed an event-driven pipeline with Apache Kafka: a Go data-acquisition service calling AI services in parallel, a Go consumer persisting results to PostgreSQL, and a Go/Gin backend serving Next.js admin and client portals.",
      "Containerized and deployed the full stack with Docker Compose on Linux, resolving production issues in Kafka networking, model memory limits and service orchestration.",
    ],
    tech: ["FastAPI", "Go", "Kafka", "PostgreSQL", "Docker", "Next.js", "InsightFace", "PaddleOCR"],
  },
  {
    role: "AI/ML Intern & Team Lead",
    company: "Codecelix (NASTP)",
    period: "Nov 2025 – Feb 2026",
    bullets: [
      "Team lead for applied ML prototypes built with open-source tools.",
      "Voice Customer Support Agent — built a low-latency voice-to-voice pipeline (speech → text → LLM response → speech) with open-source STT, LLM and TTS, in a modular design.",
      "EchoSee — developed AI accessibility and safety features: sound-event detection, 360° directional audio awareness and a real-time lip-reading prototype for captions.",
    ],
    tech: ["Python", "Whisper", "TTS", "YAMNet", "FastAPI"],
  },
  {
    role: "AI Intern",
    company: "Dam Techhub",
    period: "Jul 2025 – Aug 2025",
    bullets: [
      "Built a graph-based product recommender on the Amazon co-purchase graph: Node2Vec embeddings and a GraphSAGE link-prediction model (AUC ≈ 0.85 on validation/test).",
      "Mapped internal node IDs to real Amazon ASINs for frontend use.",
      "Served recommendations through a FastAPI /recommend endpoint with JWT authentication and environment-based configuration.",
    ],
    tech: ["PyTorch Geometric", "Node2Vec", "GraphSAGE", "FastAPI", "JWT"],
  },
  {
    role: "Fellow — DL/ML Track",
    company: "Buildables (formerly Bytewise)",
    period: "Aug 2025 – Nov 2025",
    bullets: [
      "Selected for a competitive 12-week mentor-led fellowship on deep learning best practices, experiment tracking and reproducible pipelines, with weekly code reviews from industry mentors.",
      "Final project: Agentic RAG-based Smart Farming Advisor — crop predictor (0.86 acc), EfficientNet disease detector (0.92 acc), FAISS retrieval (hit-rate@5 0.78) behind a rule-based agent router (0.88 routing acc).",
      "Completed applied experiments including ANN vs CNN on MNIST and a transfer-learning cat-vs-dog classifier.",
    ],
    tech: ["PyTorch", "XGBoost", "EfficientNet", "FAISS", "SentenceTransformers"],
  },
];

export type Project = {
  title: string;
  description: string;
  highlights?: string[];
  tech: string[];
  github?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "Agentic RAG Smart Farming Advisor",
    description:
      "Hybrid AI advisor that routes farmer queries to the right expert: an XGBoost crop recommender, an EfficientNet leaf-disease detector, or a FAISS + SentenceTransformers retrieval pipeline with generator fallback.",
    highlights: [
      "Crop predictor 0.86 test accuracy · disease detector 0.92",
      "RAG hit-rate@5 0.78 · agent routing accuracy 0.88",
    ],
    tech: ["PyTorch", "XGBoost", "EfficientNet", "FAISS", "RAG", "Agents"],
    github:
      "https://github.com/Ahmedimtiaz-github/Agentic-Rag-based-Smart-Farming-Advisor",
    featured: true,
  },
  {
    title: "EchoSee — AI Sound Awareness",
    description:
      "Accessibility-focused MVP that classifies environmental sounds in real time with YAMNet served over FastAPI, plus 360° directional audio awareness and an experimental lip-reading captioning prototype.",
    tech: ["YAMNet", "FastAPI", "Python", "Audio ML"],
    github: "https://github.com/Ahmedimtiaz-github/echo-see-mvp",
    featured: true,
  },
  {
    title: "Feedback Flow — Final Year Project",
    description:
      "Sentiment analytics platform: fine-tuned BERT on Uber reviews served to a Flutter app through Flask APIs, plus a Rasa chatbot answering NUML transport queries from MySQL behind an API-key-protected FastAPI proxy, with in-app analytics visualisations.",
    tech: ["BERT", "Rasa", "Flask", "FastAPI", "MySQL", "Flutter"],
    github: "https://github.com/Ahmedimtiaz-github/MODEL_FYP.ipynb",
    featured: true,
  },
  {
    title: "Graph-Based Product Recommender",
    description:
      "Link prediction on the Amazon co-purchase graph — Node2Vec embeddings plus a GraphSAGE model (0.848 AUC), exposed through a JWT-protected FastAPI /recommend endpoint with real ASIN mapping.",
    tech: ["GraphSAGE", "Node2Vec", "PyTorch", "FastAPI"],
    featured: false,
  },
  {
    title: "Text-to-Video Generation System",
    description:
      "Automated pipeline that turns a script into a finished video: script parsing, visual generation, audio synthesis and final assembly, orchestrated in Python.",
    tech: ["Python", "TTS", "Generative AI", "FFmpeg"],
    github: "https://github.com/Ahmedimtiaz-github/TTV_Final",
    featured: false,
  },
  {
    title: "WhatsApp Automation for Restaurants",
    description:
      "End-to-end WhatsApp ordering workflow in n8n, using the Gemini API as the LLM and Google Sheets as the datastore — an AI agent with conversation memory handles order intake, confirmations and status updates.",
    tech: ["n8n", "Gemini API", "Google Sheets", "Automation"],
    featured: false,
  },
  {
    title: "Voice-Controlled Task Automation",
    description:
      "Python voice assistant that automates repetitive system tasks through speech recognition and text-to-speech — open apps, manage folders, clean downloads, all hands-free.",
    tech: ["Python", "Speech Recognition", "TTS"],
    github:
      "https://github.com/Ahmedimtiaz-github/Voice_Controlled_Repetitive_Task_Automation_System_Final",
    featured: false,
  },
  {
    title: "University Transport Chatbot",
    description:
      "Rasa-powered conversational AI that answers university transport inquiries — routes, schedules and stops — backed by a structured database.",
    tech: ["Rasa", "Python", "NLU"],
    github: "https://github.com/Ahmedimtiaz-github/university-transport-chatbot",
    featured: false,
  },
];

export type Education = {
  degree: string;
  institution: string;
  period: string;
  detail?: string;
};

export const education: Education[] = [
  {
    degree: "BS in Artificial Intelligence",
    institution: "National University of Modern Languages (NUML), Islamabad",
    period: "2022 – 2026",
    detail:
      "Coursework and projects across deep learning, NLP, computer vision and data engineering.",
  },
  {
    degree: "FSc (Pre-Engineering)",
    institution: "Askaria College, Rawalpindi",
    period: "2019 – 2021",
    detail: "Physics, Chemistry, Mathematics.",
  },
  {
    degree: "Matriculation (Science)",
    institution: "F.G. Sir Syed Boys Secondary School, Rawalpindi",
    period: "2017 – 2019",
  },
];

export const certifications = [
  "Buildables Fellowship (Deep Learning / Machine Learning Track) — Completion Certificate",
  "Graphic Designing (CorelDRAW, Photoshop, Illustrator) — Axiom Institute, Rawalpindi",
  "Data Science Foundations — Online MOOCs",
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
