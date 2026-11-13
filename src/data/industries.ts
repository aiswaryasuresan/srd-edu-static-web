export interface IndustrySector {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  solutions: string[];
  icon: string;
  impactMetrics: string;
}

export const industrySectors: IndustrySector[] = [
  {
    id: "schools",
    title: "K-12 Schools & International Academies",
    subtitle: "Foundational Excellence & Holistic Growth",
    description: "Empowering school management boards, principals, and teachers with end-to-end recruitment of subject faculties, CBSE/ICSE regulatory documentation, modern admission campaigns, and early-stage skill development modules.",
    solutions: [
      "Qualified teacher sourcing & demonstration evaluations",
      "CBSE / ICSE affiliation & safety documentation",
      "School admission lead generation & prospectus design",
      "Foundational coding, AI awareness & communication workshops",
      "School administrative auditing & policy structuring"
    ],
    icon: "GraduationCap",
    impactMetrics: "Comprehensive academic, regulatory & marketing support"
  },
  {
    id: "colleges",
    title: "Colleges & Higher Education Institutions",
    subtitle: "Employability, Accreditation & Academic Rigor",
    description: "Partnering with undergraduate and postgraduate degree colleges to build robust placement cell ecosystems, deliver industry-aligned skill programmes, recruit PhD faculty, and achieve regulatory compliance.",
    solutions: [
      "Campus placement drives & pooled employment melas",
      "Semester skill training programs (Python, AI, Tally Prime, Soft Skills)",
      "University affiliation renewal & seat expansion dossiers",
      "Faculty sourcing for technical, commerce, and science streams",
      "High-conversion digital student recruitment campaigns"
    ],
    icon: "Building",
    impactMetrics: "Bridging the gap between syllabus and industry careers"
  },
  {
    id: "universities",
    title: "Private & Deemed Universities",
    subtitle: "Scale, Research & Institutional Distinction",
    description: "Strategic partnerships for university leadership—supporting executive search for deans, nationwide admission branding campaigns, NAAC/NIRF documentary preparation, and global academic placement linkages.",
    solutions: [
      "National omnichannel branding & high-scale admission funnels",
      "Executive search for Deans, Registrars & Department Heads",
      "Institutional master project reports & UGC/AICTE documentation",
      "Cross-border skill programmes & international student guidance",
      "Integrated competitive exam coaching wings"
    ],
    icon: "Landmark",
    impactMetrics: "Strategic advisory for institutional prestige and scale"
  },
  {
    id: "coaching-academies",
    title: "Coaching Centers & Test Prep Academies",
    subtitle: "Performance, Talent & Rapid Enrollment",
    description: "Supplying top-tier JEE, NEET, and Civil Services faculty, building targeted admission lead engines, and designing brand communications that instill confidence in aspiring students and parents.",
    solutions: [
      "Specialized competitive exam trainer recruitment",
      "High-intent local and regional admission marketing funnels",
      "Call-center tele-counselling & demo lecture booking systems",
      "Test prep brochure and performance prospectus creation",
      "Institutional tie-up facilitation with feeder schools"
    ],
    icon: "Award",
    impactMetrics: "Connecting star faculty with targeted student cohorts"
  },
  {
    id: "training-institutes",
    title: "Vocational & Skill Training Providers",
    subtitle: "Curated Curricula & Placement Pathways",
    description: "Collaborating with skill academies, NSDC training centers, and trade schools to upgrade vocational curricula, secure institutional batches, and connect certified trainees with regional and national employers.",
    solutions: [
      "Global skill program curation and curriculum alignment",
      "Trainee placement facilitation & corporate job melas",
      "Institutional compliance, NSDC & sector council documentation",
      "Marketing campaigns for vocational student enrollment",
      "Equipment lab setup advisory & industry mentor linkage"
    ],
    icon: "Wrench",
    impactMetrics: "Direct pathways from trade training to gainful employment"
  },
  {
    id: "corporate-employers",
    title: "Corporate Organizations & Campus Recruiters",
    subtitle: "Targeted Talent Pipelines & Efficient Hiring",
    description: "Connecting enterprise HR leaders with pre-screened college graduates, skilled vocational candidates, and academic domain experts across engineering, management, and technical trades.",
    solutions: [
      "Custom candidate sourcing across regional college networks",
      "Pre-screened candidate assessment & technical evaluation coordination",
      "Turnkey recruitment drives and pooled placement fairs",
      "Industry-aligned skill bridge curriculum collaboration",
      "Transparent hiring coordination with zero misleading claims"
    ],
    icon: "Briefcase",
    impactMetrics: "Streamlined talent acquisition with verified credentials"
  }
];
