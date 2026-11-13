import { BusinessVertical, SkillProgram } from "@/types";

export const skillVerticalData: BusinessVertical = {
  id: "skill-opportunities",
  slug: "skill-opportunities",
  title: "Global Skill Opportunities & Skill Development",
  tagline: "One Platform for All Skill Programs in the World.",
  shortDescription: "The Epicentre of World Skill Opportunities — Identifying, researching, curating, and facilitating access to transformative skill programs across technology, leadership, and vocational domains.",
  longDescription: "In a rapidly evolving global economy, static academic syllabi often lag behind real-world workplace requirements. SRD Edu Corporation serves as the epicentre of world skill opportunities. We continuously research, evaluate, and curate high-impact skill-development programs across the globe. Through structured partnerships with industry bodies, training organizations, and accredited educators, we connect students, institutions, and professionals with future-ready capabilities.",
  corePositioning: "The Epicentre of World Skill Opportunities & Curation Platform",
  iconName: "Cpu",
  accentColor: "gold",
  heroImage: "/images/skills/hero.jpg",

  complianceNote: "Notice: SRD Edu Corporation functions as a skill research, program curation, and opportunity facilitation platform. While certain foundational modules are facilitated directly, specialized technical and global certifications are delivered in collaboration with verified external training providers, academic partners, or certifying bodies.",

  targetAudiences: [
    "School Students seeking early digital and vocational literacy",
    "Undergraduate & Postgraduate College Students aiming for employability",
    "Schools, Colleges & Universities seeking integrated campus skill labs",
    "Accredited Skill Providers & Industry Training Organizations",
    "NGOs, CSR Foundations & Government Skill Initiatives",
    "Working Professionals upskilling for modern career transitions"
  ],

  categories: [
    {
      title: "A. Technology & Digital Programs",
      description: "Cutting-edge computational, digital literacy, and emerging tech capabilities.",
      items: [
        "AI Tools for Work & Generative AI Productivity workflows",
        "Python Programming from Fundamentals to Data Science",
        "Data Analysis, Visualization (PowerBI, Tableau) & Business Intelligence",
        "Advanced Excel for Financial Modeling & Corporate Operations",
        "Performance Digital Marketing, SEO & Social Growth Engineering",
        "Graphic Design, UI/UX Prototyping & Visual Brand Communication",
        "Full-Stack Web Development (Frontend, Backend, APIs & Databases)",
        "Cybersecurity Fundamentals & Practical Network Protection",
        "Cloud Computing Foundations (AWS, Azure & Google Cloud)",
        "Emerging Technologies (IoT, Automation & Applied Machine Learning)"
      ],
      iconName: "Binary"
    },
    {
      title: "B. Professional Development Programs",
      description: "Essential human competencies, behavioral leadership, and executive presence.",
      items: [
        "High-Impact Verbal & Written Business Communication Skills",
        "Technical & Behavioral Interview Preparation Masterclasses",
        "Institutional Leadership, Delegation & Strategic Decision Making",
        "Cross-functional Teamwork & Collaborative Problem Solving",
        "Time Management, Agile Execution & Workplace Prioritization",
        "Executive Personality Development & Confident Body Language",
        "Persuasive Presentation Skills & Public Speaking Fluency",
        "Corporate Business Etiquette, Protocol & Cross-Cultural Sensitivity",
        "Entrepreneurship Foundations & Venture Model Validation",
        "Personal Financial Literacy, Budgeting & Wealth Principles",
        "Structured Critical Thinking & Analytical Reasoning"
      ],
      iconName: "Award"
    },
    {
      title: "C. Vocational & Career Programs",
      description: "Practical hands-on trade skills for immediate workplace integration.",
      items: [
        "Computerized Accounting with Tally Prime & GST Taxation Compliance",
        "Modern Office Administration, Document Filing & Executive Assistance",
        "Retail Store Operations, Inventory Handling & Customer Excellence",
        "Healthcare Support Skills, Patient Care & Allied Clinical Assistance",
        "Hospitality, Front-Office Management & Tourism Operations",
        "Beauty, Wellness & Salon Enterprise Practices",
        "Basic Electrical, Solar Technician & Technical Trade Skills",
        "Food Processing, Quality Assurance & Commercial Hygiene Protocols",
        "Precision Agriculture, Organic Farming & Allied Sector Management"
      ],
      iconName: "Wrench"
    }
  ],

  benefits: [
    "Global Opportunity Discovery: Handpicked, high-value programs from across the international skill landscape.",
    "Flexible Delivery Models: From fast-track 1-day bootcamps to immersive 3-month industry programs.",
    "Campus Integration: Easily embedded into college academic timetables without syllabus disruption.",
    "Employment Linkage: Direct alignment with SRD's Global Placement and recruitment network."
  ],

  process: [
    {
      step: "01",
      title: "Global Skill Intelligence",
      description: "Continuous research of high-demand global job skills, emerging software, and industry standards."
    },
    {
      step: "02",
      title: "Rigorous Program Curation",
      description: "Vetting training curricula, practical project components, and mentor credentials for maximum efficacy."
    },
    {
      step: "03",
      title: "Institutional Customization",
      description: "Adapting program duration, mode (online, offline, hybrid), and difficulty for student batches."
    },
    {
      step: "04",
      title: "Hands-on Delivery & Mentorship",
      description: "Execution via project-based workshops, interactive labs, and practical assignments."
    },
    {
      step: "05",
      title: "Evaluation & Placement Transition",
      description: "Cap-stone assessment, portfolio generation, and referral into SRD placement drives."
    }
  ],

  faqs: [
    {
      question: "Are these skill programs certified by SRD or external partners?",
      answer: "We offer both: foundational workshop certificates issued by SRD Edu Corporation, as well as joint certifications curated in partnership with accredited external training organizations, technology vendors, and industry councils."
    },
    {
      question: "What training formats are available for institutions?",
      answer: "Programs can be scheduled as: Intensive 1-Day Workshops, Weekend Modules, 4-Week Evening Courses, 3-Month Semester Add-ons, or Hybrid Self-Paced Learning Labs."
    },
    {
      question: "Can an institution request a custom skill curriculum?",
      answer: "Yes. We work closely with academic deans and department heads to design tailored skill modules that address specific regional employer demands or bridge gaps in existing curricula."
    }
  ]
};

export const sampleSkillPrograms: SkillProgram[] = [
  {
    id: "ai-work-tools",
    title: "AI Tools & Generative AI for Workplace Productivity",
    category: "Technology & Digital",
    description: "Master modern AI copilots, prompting techniques, and document automation tools to achieve 5x productivity in office and academic environments.",
    duration: "2 Weeks (16 Hours)",
    format: "Hybrid (Interactive Online + Capstone)",
    targetAudience: ["Students", "Professors", "Corporate Professionals"],
    topics: ["Prompt Engineering", "LLM Workflows", "Automated Presentations", "Data Synthesis with AI"],
    featured: true
  },
  {
    id: "python-data",
    title: "Python Programming & Business Data Analytics",
    category: "Technology & Digital",
    description: "From Python syntax basics to cleaning datasets, building automated visualization dashboards, and deriving actionable commercial insights.",
    duration: "6 Weeks (48 Hours)",
    format: "Hands-on Campus Lab / Live Virtual",
    targetAudience: ["Engineering Students", "Commerce Graduates", "Research Scholars"],
    topics: ["Python Fundamentals", "Pandas & NumPy", "Data Visualization", "SQL Database Connections"],
    featured: true
  },
  {
    id: "campus-to-corporate",
    title: "Campus-to-Corporate Employability & Soft Skills",
    category: "Professional Development",
    description: "A comprehensive transformative boot camp covering business communication, mock interviews, leadership dynamics, and professional workplace etiquette.",
    duration: "4 Weeks (32 Hours)",
    format: "On-Campus Interactive Workshop",
    targetAudience: ["Pre-final & Final Year Students", "Job Seekers"],
    topics: ["Verbal Fluency", "Resume Engineering", "Panel Interview Simulators", "Group Discussions"],
    featured: true
  },
  {
    id: "tally-gst",
    title: "Computerized Accounting with Tally Prime & GST Filing",
    category: "Vocational & Career",
    description: "Industry-standard vocational training on voucher entries, inventory registers, payroll processing, and statutory GST return preparation.",
    duration: "8 Weeks (60 Hours)",
    format: "Computer Lab Classroom",
    targetAudience: ["B.Com/BBA Students", "Accounting Clerks", "Entrepreneurs"],
    topics: ["Tally Prime Accounting", "Inventory Management", "GST & TDS Compliance", "Financial Balance Sheets"],
    featured: true
  },
  {
    id: "digital-marketing-seo",
    title: "Performance Digital Marketing & Brand Growth",
    category: "Technology & Digital",
    description: "Comprehensive practical training in Google search ads, Meta social campaigns, high-ranking SEO copy, and performance conversion tracking.",
    duration: "4 Weeks (30 Hours)",
    format: "Live Online + Real Campaign Sandbox",
    targetAudience: ["Marketing Aspirants", "Business Owners", "Graduates"],
    topics: ["SEO Optimization", "Paid Advertising Funnels", "Social Media Strategy", "Google Analytics 4"],
    featured: false
  },
  {
    id: "healthcare-support",
    title: "Hospital Operations & Healthcare Support Skills",
    category: "Vocational & Career",
    description: "Practical orientation for non-clinical hospital administrative workflows, patient reception, medical records handling, and insurance desks.",
    duration: "12 Weeks (90 Hours)",
    format: "Classroom + Hospital Observation",
    targetAudience: ["12th Pass Candidates", "Diploma Holders"],
    topics: ["Patient Care Coordination", "Medical Terminology", "Records Management", "Emergency Protocol Support"],
    featured: false
  }
];
