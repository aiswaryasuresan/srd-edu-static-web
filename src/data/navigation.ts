import { NavItem } from "@/types";

export const mainNavItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
    children: [
      {
        title: "Institute Research & Development",
        href: "/services/institute-research-development",
        description: "Research policy, publications, IPR & innovation projects.",
      },
      {
        title: "Data & Analytics",
        href: "/services/data-analytics",
        description: "SIS data governance, reporting & predictive student telemetry.",
      },
      {
        title: "Academic Programmes & Systems",
        href: "/services/academic-programmes-systems",
        description: "Curriculum structuring, OBE & pedagogical modernization.",
      },
      {
        title: "Human Resource Management",
        href: "/services/human-resource-management",
        description: "Faculties, school leadership, exam trainers & operational staff.",
      },
      {
        title: "Skill Development Project",
        href: "/services/skill-development-project",
        description: "Credit-aligned vocational skills, labs & certification.",
      },
      {
        title: "Competitive Exam Support",
        href: "/services/competitive-exam-support",
        description: "Integrated JEE, NEET, Olympiads & Foundation training.",
      },
      {
        title: "Branding & Marketing",
        href: "/services/branding-marketing",
        description: "Institutional reputation, admission funnels & campaigns.",
      },
      {
        title: "Digital & Technology Support",
        href: "/services/digital-technology-support",
        description: "Campus IT architecture, LMS & smart classrooms.",
      },
      {
        title: "Education Consultancy",
        href: "/services/education-consultancy",
        description: "Turnkey school & college setup, turnarounds & affiliation.",
      },
      {
        title: "Document & Legal Support",
        href: "/services/document-legal-support",
        description: "Statutory approvals, CBSE/UGC/AICTE & bylaws.",
      },
      {
        title: "Infrastructure & Finance Support",
        href: "/services/infrastructure-finance-support",
        description: "Campus master planning, financial models & budgeting.",
      },
      {
        title: "Placement Assistance",
        href: "/services/placement-assistance",
        description: "Campus recruitment drives & corporate employer tie-ups.",
      },
    ],
  },
  {
    title: "News & events",
    href: "/news-events",
  },
  {
    title: "Blogs",
    href: "/blogs",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
