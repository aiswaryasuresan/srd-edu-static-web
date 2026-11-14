import Link from "next/link";
import {
  Users,
  Megaphone,
  Microscope,
  BarChart3,
  Target,
  Layers,
  Building2,
  FileText,
  Globe,
  GraduationCap,
  Briefcase,
  Handshake,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function BusinessVerticals() {
  const allServices = [
    {
      number: "01",
      title: "Human Resource Management",
      toolBadge: "HR Staffing & Talent Portal",
      description: "School leadership, faculties, exam trainers, counsellors, and specialized institutional staff.",
      href: "/services/human-resource-management",
      icon: Users,
    },
    {
      number: "02",
      title: "Institution Branding & Marketing",
      toolBadge: "Creative Media & Campaign Engine",
      description: "Visual identity, digital campaigns, outdoor branding, prospectus design, and admission funnels.",
      href: "/services/branding-marketing",
      icon: Megaphone,
    },
    {
      number: "03",
      title: "Institute Research & Development",
      toolBadge: "R&D Architecture & IPR Tools",
      description: "Research policy, scopus publications, patent frameworks, and funded innovation projects.",
      href: "/services/institute-research-development",
      icon: Microscope,
    },
    {
      number: "04",
      title: "IT & Data Management",
      toolBadge: "SIS Telemetry & Analytics Hub",
      description: "Institutional data governance, predictive student telemetry, and executive administrative dashboards.",
      href: "/services/data-analytics",
      icon: BarChart3,
    },
    {
      number: "05",
      title: "Competitive Exam Programs",
      toolBadge: "Smart Test & Evaluation Suite",
      description: "Integrated campus coaching for JEE, NEET, Olympiads, and Civil Services with senior faculty.",
      href: "/services/competitive-exam-support",
      icon: Target,
    },
    {
      number: "06",
      title: "Skill Training Programs",
      toolBadge: "Vocational Labs & Certification",
      description: "Credit-aligned vocational skills, modern practical labs, corporate CSR projects, and skill diplomas.",
      href: "/services/skill-development-project",
      icon: Layers,
    },
    {
      number: "07",
      title: "Infrastructure & Investment",
      toolBadge: "Master Planning & Capital Budgeting",
      description: "Campus architectural planning, capital funding models, laboratory setup, and facility expansion.",
      href: "/services/infrastructure-finance-support",
      icon: Building2,
    },
    {
      number: "08",
      title: "Documentation & Policy Making",
      toolBadge: "Statutory Compliance Vault",
      description: "UGC, AICTE, CBSE affiliation, institutional bylaws, NAAC/NBA compliance documentation.",
      href: "/services/documentation-legal",
      icon: FileText,
    },
    {
      number: "09",
      title: "Global Placement Services",
      toolBadge: "International Career Bridge",
      description: "Global corporate partnerships, overseas career pathways, cross-border internships, and work visas.",
      href: "/services/global-placement",
      icon: Globe,
    },
    {
      number: "10",
      title: "Academic Programmes & Systems",
      toolBadge: "OBE & Curriculum Framework",
      description: "Modern curriculum design, outcome-based education (OBE), pedagogical systems, and academic audits.",
      href: "/services/academic-programmes-systems",
      icon: GraduationCap,
    },
    {
      number: "11",
      title: "Education Consultancy",
      toolBadge: "Turnkey Advisory Management",
      description: "Turnkey school and college establishment, institutional turnarounds, and executive trust governance.",
      href: "/services/education-consultancy",
      icon: Briefcase,
    },
    {
      number: "12",
      title: "Placement Assistance",
      toolBadge: "Campus Recruitment Network",
      description: "Corporate recruitment drives, employability training, mock interview clinics, and employer tie-ups.",
      href: "/services/placement-assistance",
      icon: Handshake,
    },
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section: Bold Typography with Generous Spacing */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#521D27]/10 border border-[#521D27]/20 mb-4">
            <Sparkles className="w-4 h-4 text-[#521D27]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#521D27]">
              OUR 12 INSTITUTIONAL SERVICES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#521D27] font-['Poppins'] tracking-tight leading-tight">
            Comprehensive Services for the Education Ecosystem
          </h2>

          <p className="text-base sm:text-lg text-stone-600 mt-4 leading-relaxed font-medium">
            Tailored, research-driven, and result-oriented solutions designed specifically for schools, colleges, universities, and educational trustees across India.
          </p>
        </div>

        {/* 12 Services Grid: Spacious, Bold, with Digital Tool Badges and Brochure Colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {allServices.map((item) => (
            <div
              key={item.number}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-stone-200/90 shadow-sm hover:shadow-2xl hover:border-[#521D27] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 relative overflow-hidden"
            >
              {/* Subtle top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#521D27] group-hover:to-[#EFC269] transition-all duration-300" />

              <div>
                {/* Top Row: Digital Tool Badge & Icon */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-[#521D27] text-[#EFC269] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform p-3">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-stone-300 group-hover:text-[#521D27] transition-colors">
                    {item.number}
                  </span>
                </div>

                {/* Tool Tag */}
                <div className="mb-3">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#9A6715] bg-[#FFF7E6] px-2.5 py-1 rounded-md border border-[#EFC269]/40 font-['Poppins']">
                    {item.toolBadge}
                  </span>
                </div>

                {/* Bold Heading */}
                <h3 className="text-xl sm:text-[22px] font-extrabold text-[#241E20] group-hover:text-[#521D27] transition-colors font-['Poppins'] leading-snug mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Action Link */}
              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#521D27] group-hover:text-[#B8821B] transition-colors"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <span className="text-[11px] font-bold text-stone-400 group-hover:text-[#521D27]">
                  SRD Brochure
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
