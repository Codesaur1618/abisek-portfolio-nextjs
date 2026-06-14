export const siteConfig = {
  name: "Abisek Kamthan R S",
  displayName: "ABISEK KAMTHAN",
  shortName: "Abisek",
  title: "Abisek Kamthan R S | AI Engineer & Machine Learning Researcher",
  description:
    "Computer Science Engineer passionate about Artificial Intelligence, Machine Learning, Data Science, Research, and Building Intelligent Systems.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://abisek-portfolio-nextjs.vercel.app",
  email: "abisekkamthanrs@gmail.com",
  location: "Glasgow, Scotland, United Kingdom",
  github: "https://github.com/Codesaur1618",
  githubUsername: process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? "Codesaur1618",
  linkedin: "https://www.linkedin.com/in/abisekkamthan/",
  resumeUrl: "/resume.pdf",
};

export const roleHeadlines = [
  "AI Engineer",
  "Machine Learning Researcher",
  "Software Developer",
  "Data Scientist",
  "Computer Science Engineer",
];

export const bio =
  "Computer Science Engineer passionate about Artificial Intelligence, Machine Learning, Data Science, Research, and Building Intelligent Systems. I enjoy transforming complex problems into scalable solutions through software engineering, research, and innovation.";

export const skillCategories = [
  {
    title: "Programming & Analysis",
    skills: [
      { name: "Python", level: 95 },
      { name: "R", level: 88 },
      { name: "SQL", level: 90 },
      { name: "Pandas / NumPy", level: 93 },
      { name: "Java", level: 80 },
      { name: "C++", level: 76 },
    ],
  },
  {
    title: "AI, ML & Automation",
    skills: [
      { name: "Scikit-Learn", level: 92 },
      { name: "PyTorch", level: 88 },
      { name: "TensorFlow / Keras", level: 89 },
      { name: "NLP & LLMs", level: 90 },
      { name: "OpenCV", level: 86 },
      { name: "Generative AI", level: 87 },
    ],
  },
  {
    title: "Data Engineering & Delivery",
    skills: [
      { name: "ETL / Data Pipelines", level: 90 },
      { name: "Data Cleaning & Validation", level: 92 },
      { name: "Tableau / Dashboards", level: 85 },
      { name: "Flask / Streamlit Apps", level: 84 },
      { name: "Git & Reproducible Workflows", level: 91 },
      { name: "AWS / Docker", level: 68 },
    ],
  },
];

/** Profile-accurate competency map — weighted from CV, projects & publications */
export const radarSkills = [
  { subject: "Python & Analytics", value: 95, fullMark: 100 },
  { subject: "Machine Learning", value: 91, fullMark: 100 },
  { subject: "NLP & LLMs", value: 90, fullMark: 100 },
  { subject: "Data Engineering", value: 88, fullMark: 100 },
  { subject: "Statistics", value: 87, fullMark: 100 },
  { subject: "Computer Vision", value: 85, fullMark: 100 },
  { subject: "Research & Papers", value: 93, fullMark: 100 },
  { subject: "Visualization", value: 84, fullMark: 100 },
];

export const experience = [
  {
    title: "Co-Founder & Lead, Data & AI Research",
    company: "KatalyzU",
    location: "Remote",
    period: "Jan 2024 – Present",
    startYear: "2024",
    endYear: "Now",
    type: "Leadership",
    color: "from-violet-600 to-indigo-600",
    impact:
      "Shipped AI data pipelines and dashboards that turn messy open-text into validated stakeholder insight.",
    tags: ["Python", "ETL", "NLP", "LLMs", "Flask", "Dashboards"],
    metrics: [
      { label: "Core stack", value: "Python · SQL" },
      { label: "Output", value: "Pipelines & apps" },
    ],
  },
  {
    title: "Data Scientist / Statistician",
    company: "SRM Institute of Science & Technology",
    location: "Chennai, India",
    period: "Apr 2023 – Jan 2024",
    startYear: "2023",
    endYear: "2024",
    type: "Healthcare Analytics",
    color: "from-emerald-600 to-teal-600",
    impact:
      "End-to-end healthcare research workflows — collection, validation, analysis, and compliance-style reporting.",
    tags: ["Statistics", "Survey Design", "Data Quality", "Healthcare", "R"],
    metrics: [
      { label: "Domain", value: "Clinical research" },
      { label: "Focus", value: "Integrity & reporting" },
    ],
  },
  {
    title: "AI Research Mentee (SMP 2024)",
    company: "IEEE India Council",
    location: "Remote",
    period: "Aug 2024 – Dec 2024",
    startYear: "2024",
    endYear: "2024",
    type: "Research",
    color: "from-amber-500 to-orange-600",
    impact:
      "Competitive mentorship leading to peer-reviewed publication at IEEE ISPCC 2025.",
    tags: ["Deep Learning", "Medical Imaging", "GANs", "Technical Writing"],
    metrics: [
      { label: "Published", value: "IEEE ISPCC" },
      { label: "Programme", value: "SMP 2024" },
    ],
  },
];

export const projects = [
  {
    id: "langtons-ant",
    title: "Langton's Ant Research",
    description:
      "Computational research exploring emergent complexity in cellular automata, analysing pattern formation, entropy dynamics, and long-term behavioural transitions in Langton's Ant.",
    image: "/projects/langtons-ant.svg",
    tags: ["Python", "Research", "Cellular Automata", "Simulation"],
    github: "https://github.com/Codesaur1618",
    demo: null,
    featured: true,
  },
  {
    id: "multimodal-ai",
    title: "Multimodal AI Analysis Prototype",
    description:
      "End-to-end PoC integrating text, audio, and video with NLP/ML models. Flask deployment for real-time analysis and explainable outputs for non-technical stakeholders.",
    image: "/projects/multimodal.svg",
    tags: ["Python", "Flask", "NLP", "Computer Vision", "ML"],
    github: "https://github.com/Codesaur1618",
    demo: null,
    featured: true,
  },
  {
    id: "drug-safety",
    title: "GNN Drug Safety Analytics",
    description:
      "Graph neural network and sentiment analysis pipeline for drug interaction detection and adverse reaction analysis. Published on IEEE Xplore with interpretability focus.",
    image: "/projects/drug-safety.svg",
    tags: ["PyTorch", "GNN", "NLP", "BioBERT", "Flask"],
    github: "https://github.com/Codesaur1618/GNN-LLM-Enhanced-Drug-Interaction-detection-and-adverse-reaction-analysis-with-sentiment",
    demo: null,
    featured: true,
  },
  {
    id: "forecasting",
    title: "Hybrid Forecasting Dashboard",
    description:
      "ARIMA–LSTM stacked ensemble for multivariate ocean acidification forecasting with geospatial dashboard concepts. Published in IJLRET.",
    image: "/projects/forecasting.svg",
    tags: ["LSTM", "ARIMA", "Time Series", "Dashboard", "Python"],
    github: "https://github.com/Codesaur1618",
    demo: null,
    featured: true,
  },
  {
    id: "anpr",
    title: "AI Vision System — ANPR",
    description:
      "License plate recognition system using OpenCV and deep learning. Detects and extracts plate regions from live or recorded video with high accuracy.",
    image: "/projects/anpr.svg",
    tags: ["OpenCV", "Python", "Computer Vision", "Deep Learning"],
    github: "https://github.com/Codesaur1618/ANPR",
    demo: null,
    featured: false,
  },
  {
    id: "medical-pipeline",
    title: "Medical Data Pipeline & Quality Reporting",
    description:
      "GAN-based super-resolution for medical imaging with SSIM/PSNR quality metrics. Reproducible methodology published at IEEE ISPCC 2025.",
    image: "/projects/medical.svg",
    tags: ["GAN", "TensorFlow", "Medical Imaging", "Research"],
    github: "https://github.com/Codesaur1618",
    demo: null,
    featured: false,
  },
];

export const research = {
  title: "Langton's Ant Research",
  subtitle: "Emergent Complexity in Cellular Automata",
  abstract:
    "Langton's Ant is a two-dimensional universal Turing machine known for its emergent highway-building behaviour after an initial chaotic phase. This research investigates pattern formation, entropy dynamics, and phase transitions in extended Langton's Ant variants, exploring how simple local rules produce globally complex structures relevant to artificial life and complex systems theory.",
  methodology: [
    "Implemented high-performance cellular automata simulation engine in Python with configurable grid sizes up to 10⁶ cells",
    "Conducted systematic parameter sweeps across rule variants and initial conditions",
    "Applied entropy and fractal dimension metrics to quantify emergent pattern complexity",
    "Visualised long-term trajectory evolution using custom rendering pipeline",
    "Compared behavioural transitions against theoretical predictions from complex systems literature",
  ],
  findings: [
    "Confirmed predictable highway emergence after ~10⁴ steps with deviation patterns correlating to initial ant orientation",
    "Identified entropy plateaus preceding phase transitions, suggesting measurable precursors to ordered behaviour",
    "Extended rule sets produced novel periodic and quasi-periodic structures not documented in baseline literature",
    "Simulation scalability enabled statistical analysis across 10⁵+ independent runs",
  ],
  futureScope: [
    "Extend analysis to multi-agent Langton's Ant systems and 3D cellular automata",
    "Apply ML-based pattern recognition to classify emergent highway topologies",
    "Investigate connections between Langton's Ant dynamics and neural network training trajectories",
    "Publish findings with reproducible open-source simulation framework",
  ],
};

export const publications = [
  {
    title:
      "GNN-Enhanced Drug Interaction Detection and Adverse Reaction Analysis with Sentiment Insights",
    venue: "IEEE Xplore",
    date: "Aug 2025",
    link: "https://ieeexplore.ieee.org",
  },
  {
    title:
      "Super-Resolved Monkeypox Image Dataset for Enhanced Classification and Detection",
    venue: "IEEE Xplore",
    date: "Jun 2025",
    link: "https://ieeexplore.ieee.org",
  },
  {
    title:
      "Hybrid ARIMA-LSTM Ensemble for Ocean Acidification and Hypoxia Forecasting",
    venue: "IJLRET",
    date: "May 2025",
    link: "#",
  },
];

export const certifications = [
  { name: "Generative AI with Large Language Models", issuer: "DeepLearning.AI" },
  { name: "Data Science Professional Certificate", issuer: "IBM" },
  { name: "AI Engineering Professional Certificate", issuer: "IBM" },
  { name: "Machine Learning with Python (Honors)", issuer: "IBM" },
  { name: "Building Deep Learning Models with TensorFlow", issuer: "IBM" },
  { name: "Introduction to Computer Vision and Image Processing", issuer: "IBM" },
  { name: "Youth Professional Mentee (SMP 2024)", issuer: "IEEE India Council" },
];

export const achievements = [
  {
    title: "IEEE ISPCC 2025 Publication",
    description: "Peer-reviewed research on medical image super-resolution",
    icon: "award",
  },
  {
    title: "CGPA 9.68/10",
    description: "B.Tech Computer Science & Engineering (Big Data Analytics)",
    icon: "graduation",
  },
  {
    title: "IEEE SMP 2024 Mentee",
    description: "Selected for competitive graduate research mentorship",
    icon: "star",
  },
  {
    title: "54+ GitHub Repositories",
    description: "Active open-source contributor in AI, ML, and CV",
    icon: "github",
  },
];

export const education = [
  {
    degree: "MSc Data Science",
    institution: "University of Glasgow",
    location: "Glasgow, Scotland",
    period: "Sep 2025 – Present",
    details: "Machine learning, applied statistics, research methods, data engineering",
  },
  {
    degree: "B.Tech CSE (Big Data Analytics)",
    institution: "SRM Institute of Science & Technology",
    location: "Chennai, India",
    period: "Sep 2021 – Aug 2025",
    details: "CGPA: 9.68/10",
  },
  {
    degree: "Student Exchange — Data Science",
    institution: "Efrei Paris",
    location: "Paris, France",
    period: "Sep 2024 – Jan 2025",
    details: "Statistical modelling, data synthesis, analytical problem-solving",
  },
];

export const techStack = [
  { name: "Python", category: "Language" },
  { name: "PyTorch", category: "ML" },
  { name: "TensorFlow", category: "ML" },
  { name: "Next.js", category: "Web" },
  { name: "React", category: "Web" },
  { name: "TypeScript", category: "Language" },
  { name: "OpenCV", category: "CV" },
  { name: "Three.js", category: "3D" },
  { name: "GSAP", category: "Animation" },
  { name: "Tailwind CSS", category: "CSS" },
  { name: "Pandas", category: "Data" },
  { name: "Scikit-Learn", category: "ML" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "Git", category: "Tools" },
  { name: "Flask", category: "Web" },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#publications", label: "Publications" },
  { href: "#contact", label: "Contact" },
];
