const cvData = {
  es: {
    sections: {
      certs: "Certificaciones y Formación",
      langs: "Idiomas",
      dev: "Desarrollo Profesional",
      edu: "Educación",
      comp: "Competencias",
      stack: "Stack Tecnológico",
      soft: "Habilidades Clave",
      profile: "Perfil Profesional",
      exp: "Experiencia y Proyectos"
    },
    langs: [
      "Español (Nativo)", 
      "Inglés (B2, Duolingo 115)"
    ],
    certs: [
      "<strong>Oracle Cloud Infrastructure (OCI) AI Foundations Associate</strong> — Oracle, 2026.",
      "<strong>Oracle Cloud Infrastructure (OCI) Foundations Associate</strong> — Oracle, 2025.",
      "<strong>Data Scientist Professional — Oracle Next Education G8</strong> (Alura Latam & Oracle), 2025.",
      "<em>Formación Técnica Complementaria (Alura Latam / ONE, 2025–2026):</em> Más de 600 horas en Data Science & ETL, IA Generativa & Agentes, Cloud & DevOps, y Desarrollo & BI."
    ],
    edu: [
      { title: "Universidad Nacional de la Patagonia Austral (UNPA)", desc: "Ingeniería Electromecánica (Cursado +50%), 2022." },
      { title: "Logro Destacado", desc: "Ganador del Rally Latinoamericano de Innovación (Instancia Nacional, equipo NASH)." }
    ],
    stack: [
      { label: "Data & ML", value: "Python (Pandas, NumPy, scikit-learn), XGBoost, CatBoost, SQL, Análisis Estadístico, Gurobi (en aprendizaje)." },
      { label: "Agentes & LLM", value: "LangGraph, LangChain, Gemini, FAISS, HuggingFace, Pydantic, Streamlit." },
      { label: "Cloud & Infra", value: "GCP (Compute Engine, Load Balancers, IAM, Buckets), OCI, Docker, Git/GitHub." },
      { label: "Sistemas & Producto", value: "TypeScript, React, Vite, Tailwind, Firebase, Cloudinary." },
      { label: "Dominio Industrial", value: "PCP/ALS, PC-Pump (C-FER), Rodstar, VFDs Danfoss, Oracle ERP, Odoo, Lean 5S/Kaizen." }
    ],
    soft: [
      "<strong>Aprendizaje Acelerado y Adaptabilidad:</strong> Capacidad demostrada para asimilar nuevas tecnologías en tiempo récord (de HTML a Rust en 2 años; de cero inglés a trabajar en Japón en 1 año).",
      "<strong>Resolución de Problemas Complejos:</strong> Enfoque práctico para resolver desafíos técnicos con recursos limitados (\"frugal engineering\").",
      "<strong>Liderazgo Técnico y Visión de Negocio:</strong> Experiencia gestionando bases operativas y traduciendo necesidades del negocio en soluciones técnicas.",
      "<strong>Mejora Continua:</strong> Mentalidad Kaizen aplicada al código y a los procesos."
    ],
    profile: [
      "Especialista en Operaciones y Automatización con más de 10 años de experiencia en el sector energético, actualmente en una transición acelerada hacia AI Engineering y Data Science. En los últimos dos años (2025–2026) he construido y desplegado soluciones tecnológicas end-to-end: modelos de Machine Learning en la nube (GCP), agentes de IA generativa (RAG/LangGraph) y una plataforma ERP/POS omnicanal en producción.",
      "Mi diferencial es el ingenio aplicado y la adaptabilidad extrema. Resuelvo problemas complejos combinando Data, IA y desarrollo Full-Stack, con una mentalidad de mejora continua (Kaizen) que me permite aprender y especializarme rápidamente en cualquier entorno. He demostrado esta capacidad en operaciones críticas petroleras, en mi transición autodidacta a la industria IT, y en contextos internacionales desafiantes (como Japón, donde sin hablar el idioma alcancé estándares de excelencia que me llevaron a capacitar a otros). Busco roles remotos o presenciales donde pueda aportar mi visión de negocio y capacidad técnica."
    ],
    exp: [
      {
        role: "Business Analyst & Internal Tools Developer",
        company: "Regalos Estefanía (México)",
        date: "Ago 2025 – Presente",
        bullets: [
          "<em>Progresión interna en menos de un año: Asistente Administrativo ➔ Auditor de Procesos y Cobranza ➔ Desarrollador de Plataforma.</em>",
          "<strong>Desarrollo de Software en Producción:</strong> Diseñé y desplegué una plataforma ERP/POS omnicanal (React, TypeScript, Firebase) que sustituyó al sistema de ventas anterior (Kilbo), integrando ventas, WMS, cobranza y validación de comprobantes de pago. El sistema cuenta con RBAC de 6 roles y opera en la nube optimizado para Firebase Spark Plan.",
          "<strong>Auditoría y Datos:</strong> Analicé KPIs financieros y operativos, detectando y resolviendo inconsistencias por $1,000,000 MXN, logrando la recuperación de cuentas y transparencia operativa.",
          "<strong>Optimización de Procesos:</strong> Implementé Lean 5S y Kanban para estandarizar almacenes y flujos de venta, reduciendo errores operativos y agilizando la cadena de suministro."
        ]
      },
      {
        role: "Especialista en Operaciones y Logística",
        company: "Japón (Tokio, Osaka, Niseko)",
        date: "May 2023 – Abr 2024",
        bullets: [
          "<strong>Aprendizaje Acelerado e Integración:</strong> A los 15 días de mi llegada (sin dominio del idioma local), aprobé una entrevista en inglés y me incorporé al <em>Tokyo American Club</em>. En <em>&And Hostel Shinsaibashi East</em> (Osaka), sin experiencia previa en housekeeping, alcancé un estándar de calidad tan alto en solo 2 meses que la empresa me solicitó grabar un video tutorial para estandarizar y capacitar a mis compañeros.",
          "<strong>Resiliencia en Entornos Críticos:</strong> En <em>Sky Niseko / Ki Niseko</em> (Hokkaido), trabajé en cocina principal y como conductor (<em>driver packing</em>) coordinando logística invernal extrema bajo condiciones climáticas severas con cero incidentes, colaborando en equipos multiculturales que impulsaron mi fluidez en inglés."
        ]
      },
      {
        role: "Gerente de Operaciones & Especialista PCP",
        company: "ChampionX (SLB) — Argentina",
        date: "May 2015 – Abr 2023",
        bullets: [
          "<em>Progresión: Asistente Administrativo (2015) ➔ Ing. de Aplicaciones ALS (2020) ➔ Gerente de Operaciones & Especialista PCP (2021-2023).</em>",
          "<strong>Gerente de Operaciones & Especialista PCP (2021–2023):</strong> Dirigí la estrategia de bases operativas, logística técnica e ingeniería de aplicaciones PCP en las principales cuencas de Argentina (Neuquén, Chubut, Santa Cruz). Diseñé sistemas PCP de alta eficiencia con PC-Pump (C-FER) y Rodstar. Actué como enlace técnico ante operadoras y lideré I+D para adaptar tecnologías de estatores OLT a rotores PCM HR.",
          "<strong>Ingeniero de Aplicaciones ALS (2020):</strong> Diseñé soluciones técnicas adaptadas a cada pozo, realicé análisis de fallas, ensayos destructivos y reportes de optimización para clientes.",
          "<strong>Administración y Almacén (2018–2019):</strong> Supervisé la cadena de suministro, control de inventarios y auditorías de procesos internos."
        ]
      }
    ],
    projTitle: "Proyectos Destacados (github.com/Haruki-24)",
    projects: [
      {
        name: "Krypton — Predicción de Cancelación de Clientes (ML + Cloud)",
        desc: "Proyecto colaborativo (NoCountry, 6 semanas). Lideré el modelado predictivo en cascada (XGBoost + CatBoost) elevando el Recall del 70% al 85%. Al finalizar mi etapa de modelado, tomé la iniciativa de diseñar y establecer la arquitectura base en GCP (Compute Engine, Load Balancers, IAM, usando herramientas de IA y documentación oficial) para el equipo de Backend. Entregué el modelo final en formato .pkl y, ante la falta de tiempo del equipo para la integración total, desplegué una VM con un prototipo funcional para garantizar la presentación del MVP en vivo."
      },
      {
        name: "Agente OCI — RAG para Operaciones Industriales",
        desc: "Agente de IA para HSE y coordinación petrolera. Arquitectura avanzada con LangGraph + Gemini + FAISS, incluyendo RAG con reranking, guardrails de seguridad y Human-in-the-loop. Demo interactiva en Streamlit."
      },
      {
        name: "AI_Agent_RAG_LangGraph — Agente de Soporte y Triaje (RRHH)",
        desc: "Agente inteligente con clasificación automática, RAG dinámico y enrutamiento condicional."
      },
      {
        name: "Ajedrez-Imperial — Lógica y Algoritmia",
        desc: "Variante de ajedrez 10x10 con shogi. Diseñé el sistema de reglas, manual y el motor de juego con minimax y poda alfa-beta."
      },
      {
        name: "Simulador de Bombas PCP en Rust (Privado — I+D propio)",
        desc: "Proyecto en desarrollo enfocado en simulación de entornos físicos y software de ingeniería de alto rendimiento."
      },
      {
        name: "Plataforma ERP/POS Omnicanal (Privado — Repo vitrina)",
        desc: "Desarrollo end-to-end del sistema en producción de Regalos Estefanía."
      }
    ]
  },
  
  en: {
    sections: {
      certs: "Education & Certifications",
      langs: "Languages",
      dev: "Professional Development",
      edu: "Formal Education",
      comp: "Competencies",
      stack: "Tech Stack",
      soft: "Soft Skills",
      profile: "Summary",
      exp: "Experience & Projects"
    },
    langs: [
      "Spanish: Native", 
      "English: B2 (duolingo 115)"
    ],
    certs: [
      "<strong>Oracle Cloud Infrastructure (OCI) AI Foundations Associate</strong> — Oracle, 2026.",
      "<strong>Oracle Cloud Infrastructure (OCI) Foundations Associate</strong> — Oracle, 2025.",
      "<strong>Data Scientist Professional — Oracle Next Education G8</strong> (Alura Latam & Oracle), 2025.",
      "<em>Technical Training (Alura Latam / ONE, 2025–2026):</em> More than 600 hours of continuous training focused on end-to-end solutions: Data Science & ETL, AI & Agents, Cloud & DevOps, Software & BI."
    ],
    edu: [
      { title: "Universidad Nacional de la Patagonia Austral (UNPA)", desc: "Electromechanical Engineering (50%+ completed), 2022." },
      { title: "Achievement", desc: "Winner of the Latin American Innovation Rally (National Level, team NASH)." }
    ],
    stack: [
      { label: "Data & ML", value: "Python (Pandas, NumPy, scikit-learn), XGBoost, CatBoost, SQL, Statistical Analysis, Gurobi (learning)." },
      { label: "AI & Agents", value: "LangGraph, LangChain, Gemini, FAISS, HuggingFace, Pydantic, Streamlit." },
      { label: "Cloud & Infrastructure", value: "GCP (Compute Engine, Load Balancers, IAM), OCI, Docker, Git/GitHub." },
      { label: "Software & Product", value: "TypeScript, React, Vite, Tailwind, Firebase, Cloudinary." },
      { label: "Industrial Knowledge", value: "PCP/ALS, PC-Pump (C-FER), Rodstar, Danfoss VFDs, Oracle ERP, Odoo, Lean 5S/Kaizen." }
    ],
    soft: [
      "<strong>Fast Learner & Adaptable:</strong> I can learn new tools very quickly. I went from knowing only basic HTML to programming in Rust in 2 years, and I learned enough English to live and work in Japan in less than a year.",
      "<strong>Resourceful Problem Solver:</strong> I am used to solving difficult technical problems with limited resources.",
      "<strong>Business & Technical Vision:</strong> I can connect business needs with technical solutions, thanks to my experience managing operations and teams.",
      "<strong>Continuous Improvement:</strong> I apply the Kaizen mindset to my code and my daily work."
    ],
    profile: [
      "I have over 10 years of experience in the energy sector (Oil & Gas), and for the last two years (2025–2026), I have been focused on transitioning into IT as a Data and AI Engineer. During this time, I have built and deployed real projects: Machine Learning models on Google Cloud (GCP), AI agents (RAG and LangGraph), and an ERP/POS platform that is currently in production.",
      "My biggest strength is that I am a problem solver. I can learn new technologies quickly to solve complex business problems, combining Data, AI, and Full-Stack development. I have proven this in critical oilfield operations, in my self-taught IT journey, and in Japan, where I learned the language and trained others to do their jobs better. I am looking for remote or on-site roles where I can use my business experience and technical skills to deliver real results."
    ],
    exp: [
      {
        role: "Business Analyst & Internal Tools Developer",
        company: "Regalos Estefanía (Mexico)",
        date: "Aug 2025 – Present",
        bullets: [
          "<em>Internal promotion in less than a year: Administrative Assistant ➔ Process & Collections Auditor ➔ Platform Developer.</em>",
          "<strong>Software Development in Production:</strong> I designed and deployed an omnichannel ERP/POS platform (React, TypeScript, Firebase) to replace the previous sales system (Kilbo). It manages sales, warehouse (WMS), collections, and validates payment receipts with documentary evidence. The system uses a 6-role access control (RBAC) and runs in the cloud, optimized for the Firebase Spark Plan.",
          "<strong>Audit & Data:</strong> I analyzed financial and operational KPIs, finding and resolving financial inconsistencies worth $1,000,000 MXN. This recovered accounts and restored operational transparency.",
          "<strong>Process Optimization:</strong> I implemented Lean 5S and Kanban to organize the warehouse and sales workflows, reducing errors and speeding up the supply chain."
        ]
      },
      {
        role: "Operations & Logistics Specialist",
        company: "Japan (Tokyo, Osaka, Niseko)",
        date: "May 2023 – Apr 2024",
        bullets: [
          "<strong>Fast Learning & Integration:</strong> Just 15 days after arriving in Japan without speaking the language, I passed an English interview and joined the <em>Tokyo American Club</em>. At <em>&And Hostel Shinsaibashi East</em> (Osaka), with no previous housekeeping experience, I reached a high quality standard in only 2 months. The company asked me to record a training video to teach my coworkers my cleaning methods.",
          "<strong>Resilience in Critical Environments:</strong> At <em>Sky Niseko / Ki Niseko</em> (Hokkaido), I worked in the main kitchen and as a driver packing, coordinating extreme winter logistics. We maintained zero safety incidents while working in multicultural teams, which helped me improve my English significantly."
        ]
      },
      {
        role: "Operations Manager & PCP Specialist",
        company: "ChampionX (SLB) — Argentina",
        date: "May 2015 – Apr 2023",
        bullets: [
          "<em>Career growth: Administrative Assistant (2015) ➔ ALS Application Engineer (2020) ➔ Operations Manager & PCP Specialist (2021-2023).</em>",
          "<strong>Operations Manager & PCP Specialist (2021–2023):</strong> I managed operational base strategies, technical logistics, and PCP application engineering across Argentina's main basins (Neuquén, Chubut, Santa Cruz). I designed high-efficiency PCP systems using PC-Pump (C-FER) and Rodstar. I was the main technical contact for operators and led R&D projects to adapt OLT stator technology to PCM HR rotors.",
          "<strong>ALS Application Engineer (2020):</strong> I designed technical solutions for each well, performed failure analysis, destructive testing, and delivered optimization reports to clients.",
          "<strong>Administration & Warehouse (2018–2019):</strong> I managed the supply chain, inventory control, and internal process audits."
        ]
      }
    ],
    projTitle: "Key Projects (github.com/Haruki-24)",
    projects: [
      {
        name: "Krypton — Customer Churn Prediction (ML + Cloud)",
        desc: "Collaborative project (NoCountry, 6 weeks). I led the cascade predictive modeling (XGBoost + CatBoost), increasing Recall from 70% to 85%. When my modeling stage was finished, I took the initiative to design and set up the GCP base architecture (Compute Engine, Load Balancers, IAM) for the Backend team. I delivered the final model in .pkl format. Since the team ran out of time for full integration, I deployed a VM with a working prototype to guarantee a live MVP presentation."
      },
      {
        name: "OCI Agent — RAG for Industrial Operations",
        desc: "AI agent for HSE and oilfield coordination. Advanced architecture using LangGraph + Gemini + FAISS, including RAG with reranking, safety guardrails, and Human-in-the-loop. Interactive demo on Streamlit."
      },
      {
        name: "AI_Agent_RAG_LangGraph — Support & Triage Agent (HR)",
        desc: "AI agent with automatic classification, dynamic RAG, and conditional routing."
      },
      {
        name: "Ajedrez-Imperial — Logic & Algorithms",
        desc: "10x10 chess variant with shogi mechanics. I designed the rule system, game manual, and the game engine with minimax and alpha-beta pruning. (This project proves my skills in complex logic and data structures)."
      },
      {
        name: "PCP Pump Simulator in Rust (Private — R&D)",
        desc: "Ongoing project focused on simulating physical environments and high-performance engineering software."
      },
      {
        name: "Omnichannel ERP/POS Platform (Private — Showcase repo in progress)",
        desc: "End-to-end development of the production system at Regalos Estefanía."
      }
    ]
  }
};