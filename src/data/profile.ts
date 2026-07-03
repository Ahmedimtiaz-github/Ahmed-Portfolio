export const profile = {
  name: "Muhammad Ahmed Imtiaz",
  role: "AI/ML Engineer",
  tagline: "Train. Ship. Iterate.",
  headline:
    "I build machine learning systems end-to-end — from fine-tuned models and RAG pipelines to the FastAPI microservices, Kafka streams and dashboards that put them in production.",
  location: "Islamabad, Pakistan",
  email: "ahmedimtqureshi@gmail.com",
  phone: "+92 336 5014829",
  github: "https://github.com/Ahmedimtiaz-github",
  linkedin: "https://www.linkedin.com/in/muhammad-ahmed-imtiaz-68332b282",
  resumeUrl: "/Muhammad_Ahmed_Imtiaz_Resume.pdf",
  cvUrl: "/Muhammad_Ahmed_Imtiaz_CV.pdf",
  openToWork: true,
};

export const stats = [
  { value: "10+", label: "Projects shipped" },
  { value: "4", label: "Industry roles" },
  { value: "13", label: "Services in one deployed stack" },
];

export const about = {
  paragraphs: [
    "I'm a final-year BS Artificial Intelligence student at NUML Islamabad (2022 – 2026) working as an AI/ML engineer across internships, a mentor-led deep learning fellowship, and my own projects. My focus is applied ML that actually ships: RAG and agentic pipelines, voice AI, computer vision, and graph models — wrapped in clean APIs and deployed with Docker.",
    "Recently I built a multi-tenant biometric identity verification platform at Neuronix Technologies — face matching, liveness detection, OCR and fingerprint matching as independent FastAPI microservices, wired together with Apache Kafka, Go services and a Next.js dashboard, all containerized as a 13-service stack.",
    "I care about reproducibility and evaluation as much as the model itself: experiment tracking, honest metrics (AUC/F1), and repos anyone can clone and run.",
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
      "Rasa",
      "STT/TTS (Whisper, Vosk, Coqui)",
      "Model evaluation (AUC / F1)",
    ],
  },
  {
    title: "Backend & Infrastructure",
    skills: [
      "FastAPI",
      "Flask",
      "Go (Gin, GORM)",
      "REST API design",
      "Microservices",
      "Apache Kafka",
      "PostgreSQL",
      "MySQL",
      "Docker",
      "Docker Compose",
      "JWT auth",
    ],
  },
  {
    title: "Languages & Frontend",
    skills: ["Python", "SQL", "Go", "C++", "Java", "Next.js", "React"],
  },
  {
    title: "Tooling & Workflow",
    skills: [
      "Git / GitHub",
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
  "Docker",
  "Next.js",
  "OpenCV",
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
    role: "AI/ML Intern",
    company: "Neuronix Technologies",
    period: "Mar 2026 – Present",
    bullets: [
      "Built a production-ready multi-tenant biometric identity verification platform — face matching (InsightFace), liveness detection (FSFM ViT-B16), OCR (PaddleOCR) and fingerprint matching (DeepPrint) as independent FastAPI microservices.",
      "Designed an event-driven pipeline with Apache Kafka for async result streaming; a Go consumer persists structured results to PostgreSQL behind a Go/Gin admin backend and Next.js dashboard.",
      "Developed a Go data-acquisition service and a Next.js customer portal coordinating parallel AI service calls with a full audit trail.",
      "Containerized and deployed the full 13-service stack with Docker Compose on a Linux VM, resolving Kafka networking, model memory and orchestration issues.",
    ],
    tech: ["FastAPI", "Go", "Kafka", "PostgreSQL", "Docker", "Next.js", "InsightFace", "PaddleOCR"],
  },
  {
    role: "AI/ML Intern & Team Lead",
    company: "Codecelix (NASTP)",
    period: "Nov 2025 – Feb 2026",
    bullets: [
      "Led prototyping and delivery of applied ML features while coordinating technical tasks across the intern team.",
      "Voice Customer Support Agent — built components of a low-latency voice pipeline (STT → LLM → TTS) on fully open-source stacks.",
      "EchoSee — implemented sound-event detection, 360° directional audio awareness and an experimental real-time lip-reading captioning prototype.",
      "Documented architecture, tool selection and evaluation metrics; delivered runnable prototypes and demo videos.",
    ],
    tech: ["Python", "Whisper", "TTS", "YAMNet", "FastAPI"],
  },
  {
    role: "AI Intern",
    company: "Dam Techhub",
    period: "Jul 2025 – Aug 2025",
    bullets: [
      "Cleaned and preprocessed the Amazon co-purchase graph and engineered node features for model training.",
      "Trained Node2Vec embeddings and a GraphSAGE link-prediction model reaching 0.845 – 0.848 AUC on validation/test.",
      "Shipped a production-capable FastAPI /recommend endpoint with JWT protection and ASIN mapping for frontend consumption.",
      "Delivered reproducible artifacts: node features, edge indices, model checkpoints and inference scripts.",
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
      "Sentiment analytics platform: fine-tuned BERT on Uber reviews, a Rasa chatbot answering university transport queries from a MySQL database, and a FastAPI proxy connecting a Flutter app end-to-end.",
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
      "n8n workflow automation using the Gemini API and Google Sheets — context-aware order intake with simple memory, templated confirmations and status updates over WhatsApp.",
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
    detail: "Coursework and projects across deep learning, NLP, computer vision and data engineering.",
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
