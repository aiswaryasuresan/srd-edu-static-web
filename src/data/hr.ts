import { BusinessVertical } from "@/types";

export const hrData: BusinessVertical = {
  id: "hr-management",
  slug: "hr-management",
  title: "Human Resource Management Services",
  tagline: "Building the Right Team for Educational Excellence.",
  shortDescription: "Specialized staffing, academic talent acquisition, leadership search, and institutional workforce management designed exclusively for educational organizations.",
  longDescription: "Great educational institutions are built by outstanding educators, visionary leaders, and disciplined operational staff. SRD Edu Corporation's Human Resource Management division provides comprehensive institutional staffing solutions. Distinct from general candidate placement, our HR services focus directly on solving institutional staffing challenges—sourcing qualified academic faculty, appointing experienced school principals and deans, embedding competitive exam trainers, and structuring institutional HR policies for long-term retention.",
  corePositioning: "Institutional Workforce Architecture & Academic Talent Acquisition",
  iconName: "UsersCheck",
  accentColor: "burgundy",
  heroImage: "/images/hr/hero.jpg",

  targetAudiences: [
    "School Boards, Trustees & Management Committees",
    "Principals, Deans & Academic Directors",
    "College & University Registrars and Governing Bodies",
    "Competitive Coaching Institutes needing specialized faculty",
    "Vocational Training Centers & Skill Academies",
    "Educational Group HR & Talent Acquisition Teams"
  ],

  categories: [
    {
      title: "1. Teaching & Academic Staff",
      description: "Rigorous sourcing of certified, subject-matter experts across all academic disciplines.",
      items: [
        "Primary, Middle, and Senior Secondary school teachers (CBSE, ICSE, IB, State Boards)",
        "College and University professors, associate professors, and research fellows",
        "STEM, Humanities, Commerce, and Foreign Language subject-matter specialists",
        "Laboratory instructors, technical demonstrators, and academic lab technicians",
        "Special educators, remedial learning experts, and inclusive education facilitators"
      ],
      iconName: "GraduationCap"
    },
    {
      title: "2. Management & Leadership",
      description: "Executive search for visionary institutional stewards and operational heads.",
      items: [
        "Experienced School Principals, Vice Principals, and Academic Directors",
        "University Deans, Heads of Department (HoD), and Registrars",
        "General Managers of Administration, Campus Operations, and Estate Facilities",
        "Chief Financial Officers (CFO) and Bursars for educational trusts",
        "Institutional Growth, Accreditation, and Quality Assurance Directors"
      ],
      iconName: "ShieldCheck"
    },
    {
      title: "3. Training & Development",
      description: "Deploying high-impact trainers to lift faculty pedagogy and student outcomes.",
      items: [
        "Competitive exam faculty (JEE Advanced, NEET, UPSC, Foundation courses)",
        "Aptitude, reasoning, and quantitative training specialists for campus drives",
        "Modern pedagogical and classroom technology trainers for in-service teachers",
        "Soft-skills, public speaking, and corporate readiness trainers",
        "Vocational trade instructors and industry-certified technical mentors"
      ],
      iconName: "TrendingUp"
    },
    {
      title: "4. Counselling & Mentoring",
      description: "Empathetic student welfare, mental health, and career orientation teams.",
      items: [
        "Licensed child psychologists and campus student guidance counsellors",
        "Overseas higher education and university admissions advisors",
        "Career pathway coaches and vocational aptitude counsellors",
        "Student mental wellness mentors and behavioral intervention specialists",
        "Hostel wardens and residential campus life coordinators"
      ],
      iconName: "HeartHandshake"
    },
    {
      title: "5. Support & Operations",
      description: "The organizational backbone ensuring smooth daily institutional execution.",
      items: [
        "Front-office executives, admissions officers, and customer relations teams",
        "Institutional marketing professionals and social media managers",
        "Campus accountants, billing clerks, and store inventory managers",
        "IT administrators, LMS operators, and network support engineers",
        "Hostel, transport, security, and facility operations supervisors"
      ],
      iconName: "Layers"
    }
  ],

  benefits: [
    "Educational Specialization: We understand academic qualifications, teaching methodologies, and accreditation standards.",
    "Stringent Screening: Multi-stage pedagogical evaluations and background verification before candidate submission.",
    "Reduced Institutional Attrition: Alignment with institutional ethos leads to higher teacher retention.",
    "Rapid Sourcing Cycles: Quick turnaround during peak pre-academic year recruitment windows."
  ],

  process: [
    {
      step: "01",
      title: "Requirement Analysis",
      description: "Deep-dive with institutional leadership into qualification benchmarks, syllabus requirements, and campus culture."
    },
    {
      step: "02",
      title: "Sourcing & Screening",
      description: "Targeted outreach across verified educator databases, academic networks, and peer referrals."
    },
    {
      step: "03",
      title: "Interviews & Pedagogical Evaluation",
      description: "Demonstration lectures, subject-matter tests, and behavioral suitability assessments."
    },
    {
      step: "04",
      title: "Selection & Offer Support",
      description: "Coordination of final interview rounds with management, compensation structuring, and formal offer letters."
    },
    {
      step: "05",
      title: "Onboarding & Retention Support",
      description: "Assisting with documentation, orientation protocols, and post-joining feedback check-ins."
    }
  ],

  faqs: [
    {
      question: "How does SRD's HR service differ from the Global Placement Service?",
      answer: "Global Placement is candidate-facing—helping job seekers and graduates explore opportunities and develop employability. HR Management is institution-facing—serving school boards and university managements by analyzing staffing needs, conducting executive searches, verifying faculty credentials, and managing institutional hiring."
    },
    {
      question: "Do you provide temporary or guest faculties for competitive exams?",
      answer: "Yes. We source full-time, part-time, and visiting subject experts for specialized competitive exam coaching (such as JEE, NEET, or civil services preparation) integrated directly into your school or college timetable."
    },
    {
      question: "How do you verify the authenticity of academic credentials?",
      answer: "We perform multi-level credential validation, including university degree verification, past employment checks with previous institutions, and rigorous classroom teaching demonstration assessments."
    }
  ]
};
