const cvData = {
  es: {
    name: "Gonzalo Costela",
    title: "Data / AI Engineer | Machine Learning & Optimization",
    location: "Guadalajara, México (Abierto a reubicación internacional)",
    contact: "WhatsApp: +52 984 501 5915 | gonzalocostela@gmail.com | linkedin.com/in/gonzalocostela | github.com/Haruki-24",
    
    summaryTitle: "Perfil Profesional",
    summaryText: "Especialista en Operaciones y Automatización con más de 10 años de experiencia en el sector energético, actualmente en transición acelerada hacia AI Engineering y Data Science. En los últimos dos años he construido soluciones end-to-end: modelos de Machine Learning en GCP, agentes de IA (RAG) y una plataforma ERP/POS en producción. Mi diferencial es el ingenio aplicado y la adaptabilidad extrema para resolver problemas complejos.",
    
    stackTitle: "Stack Tecnológico",
    stackData: [
      { label: "Data & ML", value: "Python, Pandas, NumPy, scikit-learn, XGBoost, CatBoost, SQL" },
      { label: "Agentes & LLM", value: "LangGraph, LangChain, Gemini, FAISS, Pydantic, Streamlit" },
      { label: "Cloud & Infra", value: "GCP, OCI, Docker, Git/GitHub" },
      { label: "Sistemas & Producto", value: "TypeScript, React, Tailwind, Firebase" }
    ],

    expTitle: "Experiencia Profesional",
    jobs: [
      {
        role: "Business Analyst & Internal Tools Developer",
        company: "Regalos Estefanía (México)",
        date: "Ago 2025 – Presente",
        bullets: [
          "Desarrollo de Software en Producción: Diseñé y desplegué una plataforma ERP/POS omnicanal (React, Firebase) que sustituyó al sistema Kilbo.",
          "Auditoría y Datos: Resolví inconsistencias financieras por $1,000,000 MXN mediante análisis de KPIs.",
          "Optimización: Implementé Lean 5S y Kanban reduciendo errores operativos."
        ]
      },
      {
        role: "Especialista en Operaciones y Logística",
        company: "Japón (Tokio, Osaka, Niseko)",
        date: "May 2023 – Abr 2024",
        bullets: [
          "Aprendizaje Acelerado: A los 15 días de llegar a Japón aprobé una entrevista en inglés (Tokyo American Club). En Osaka, la empresa me pidió grabar un video tutorial de housekeeping por mi alto estándar.",
          "Resiliencia: Coordiné logística invernal extrema (Sky/Ki Niseko) con cero incidentes."
        ]
      },
      {
        role: "Gerente de Operaciones & Especialista PCP",
        company: "ChampionX (Argentina)",
        date: "May 2015 – Abr 2023",
        bullets: [
          "Dirigí bases operativas en Neuquén, Chubut y Santa Cruz. Diseñé sistemas PCP de alta eficiencia (PC-Pump, Rodstar).",
          "Lideré I+D adaptando tecnologías de estatores OLT a rotores PCM HR."
        ]
      }
    ],

    projTitle: "Proyectos Destacados",
    projects: [
      {
        name: "Krypton — Predicción de Churn (ML + Cloud)",
        desc: "Modelos en cascada (XGBoost+CatBoost) mejorando Recall 70%→85%. Diseñé la arquitectura GCP base y desplegué un prototipo funcional en VM para la presentación final del MVP."
      },
      {
        name: "Agente OCI — RAG para Operaciones",
        desc: "Agente IA con LangGraph + Gemini + FAISS, RAG con reranking, guardrails y Human-in-the-loop."
      },
      {
        name: "Plataforma ERP/POS Omnicanal",
        desc: "Sistema en producción (React+TS+Firebase) con 6 roles RBAC, WMS y validación de cobranza con evidencias."
      }
    ]
  },
  
  en: {
    name: "Gonzalo Costela",
    title: "Data / AI Engineer | Machine Learning & Optimization",
    location: "Guadalajara, Mexico (Open to relocation)",
    contact: "WhatsApp: +52 984 501 5915 | gonzalocostela@gmail.com | linkedin.com/in/gonzalocostela | github.com/Haruki-24",
    
    summaryTitle: "Professional Summary",
    summaryText: "I have over 10 years of experience in the energy sector, and for the last two years I have focused on transitioning into IT as a Data and AI Engineer. I have built and deployed real projects: ML models on GCP, AI agents (RAG), and an ERP/POS platform in production. My biggest strength is that I am a problem solver, combining Data, AI, and Full-Stack skills.",
    
    stackTitle: "Tech Stack",
    stackData: [
      { label: "Data & ML", value: "Python, Pandas, NumPy, scikit-learn, XGBoost, CatBoost, SQL" },
      { label: "AI & Agents", value: "LangGraph, LangChain, Gemini, FAISS, Pydantic, Streamlit" },
      { label: "Cloud & Infra", value: "GCP, OCI, Docker, Git/GitHub" },
      { label: "Software", value: "TypeScript, React, Tailwind, Firebase" }
    ],

    expTitle: "Professional Experience",
    jobs: [
      {
        role: "Business Analyst & Internal Tools Developer",
        company: "Regalos Estefanía (Mexico)",
        date: "Aug 2025 – Present",
        bullets: [
          "Software Development: Designed and deployed an omnichannel ERP/POS platform (React, Firebase) replacing the Kilbo system.",
          "Audit & Data: Resolved financial inconsistencies worth $1,000,000 MXN through KPI analysis.",
          "Optimization: Implemented Lean 5S and Kanban, reducing operational errors."
        ]
      },
      {
        role: "Operations & Logistics Specialist",
        company: "Japan (Tokyo, Osaka, Niseko)",
        date: "May 2023 – Apr 2024",
        bullets: [
          "Fast Learning: 15 days after arriving, passed an English interview (Tokyo American Club). In Osaka, the company asked me to record a training video for my high housekeeping standards.",
          "Resilience: Coordinated extreme winter logistics (Sky/Ki Niseko) with zero incidents."
        ]
      },
      {
        role: "Operations Manager & PCP Specialist",
        company: "ChampionX (Argentina)",
        date: "May 2015 – Apr 2023",
        bullets: [
          "Managed operational bases in Neuquén, Chubut, and Santa Cruz. Designed high-efficiency PCP systems (PC-Pump, Rodstar).",
          "Led R&D adapting OLT stator tech to PCM HR rotors."
        ]
      }
    ],

    projTitle: "Key Projects",
    projects: [
      {
        name: "Krypton — Churn Prediction (ML + Cloud)",
        desc: "Cascade models (XGBoost+CatBoost) improving Recall 70%→85%. Designed the GCP base architecture and deployed a VM prototype to guarantee the live MVP presentation."
      },
      {
        name: "OCI Agent — RAG for Operations",
        desc: "AI Agent with LangGraph + Gemini + FAISS, RAG with reranking, guardrails, and Human-in-the-loop."
      },
      {
        name: "Omnichannel ERP/POS Platform",
        desc: "Production system (React+TS+Firebase) with 6 RBAC roles, WMS, and payment receipt validation."
      }
    ]
  }
};
