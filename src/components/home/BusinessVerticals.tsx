import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export default function BusinessVerticals() {
  const allServices = [
    {
      title: "Human Resource Management",
      description: "Leadership, faculty, exam trainers, counsellors, and specialized institutional staff.",
      href: "/services/human-resource-management",
      image: "/images/banner/service-hr-banner.jpg",
      imageAlt: "SRD Human Resource Management for educational institutions",
    },
    {
      title: "Institution Branding & Marketing",
      description: "Visual identity, digital campaigns, outdoor branding, prospectus design, and admission funnels.",
      href: "/services/branding-marketing",
      image: "/images/banner/service-branding-banner.jpg",
      imageAlt: "SRD Institution Branding and Marketing services",
    },
    {
      title: "Institute Research & Development",
      description: "Research policy, Scopus publications, patent frameworks, and funded innovation projects.",
      href: "/services/institute-research-development",
      image: "/images/banner/service-research-banner.jpg",
      imageAlt: "SRD Institute Research and Development frameworks",
    },
    {
      title: "IT & Data Management",
      description: "Institutional data governance, predictive student telemetry, and administrative dashboards.",
      href: "/services/data-analytics",
      image: "/images/banner/service-data-banner.jpg",
      imageAlt: "SRD IT and Data Management telemetry",
    },
    {
      title: "Competitive Exam Programs",
      description: "Integrated campus coaching for JEE, NEET, Olympiads, and Civil Services with senior faculty.",
      href: "/services/competitive-exam-support",
      image: "/images/banner/service-competitive-banner.jpg",
      imageAlt: "SRD Competitive Exam preparation programs",
    },
    {
      title: "Skill Training Programs",
      description: "Credit-aligned vocational skills, modern practical labs, corporate CSR, and skill diplomas.",
      href: "/services/skill-development-project",
      image: "/images/banner/service-skill-banner.jpg",
      imageAlt: "SRD Vocational and Advanced Skill Training Programs",
    },
    {
      title: "Infrastructure & Investment",
      description: "Campus architectural planning, capital funding models, laboratory setup, and facility expansion.",
      href: "/services/infrastructure-finance-support",
      image: "/images/banner/service-infrastructure-banner.jpg",
      imageAlt: "SRD Campus Infrastructure and Capital Planning",
    },
    {
      title: "Documentation & Policy Making",
      description: "UGC, AICTE, CBSE affiliation, institutional bylaws, NAAC and NBA compliance documentation.",
      href: "/services/documentation-legal",
      image: "/images/banner/service-documentation-banner.jpg",
      imageAlt: "SRD Statutory Documentation and Policy Governance",
    },
    {
      title: "Global Placement Services",
      description: "Global corporate partnerships, overseas career pathways, cross-border internships, and work visas.",
      href: "/services/global-placement",
      image: "/images/banner/service-placement-banner.jpg",
      imageAlt: "SRD Global Placement and Career Pathways",
    },
    {
      title: "Academic Programmes & Systems",
      description: "Modern curriculum design, outcome-based education (OBE), pedagogical systems, and academic audits.",
      href: "/services/academic-programmes-systems",
      image: "/images/banner/service-academic-banner.jpg",
      imageAlt: "SRD Academic Programmes and Systems Architecture",
    },
    {
      title: "Education Consultancy",
      description: "Turnkey school and college establishment, institutional turnarounds, and trust governance.",
      href: "/services/education-consultancy",
      image: "/images/banner/service-consultancy-banner.jpg",
      imageAlt: "SRD Turnkey Education Consultancy and Advisory",
    },
    {
      title: "Placement Assistance",
      description: "Corporate recruitment drives, employability training, mock interview clinics, and employer tie-ups.",
      href: "/services/placement-assistance",
      image: "/images/banner/campus-banner.jpg",
      imageAlt: "SRD Campus Placement Assistance and Corporate Drives",
    },
  ];

  return (
    <section id="services" className="relative py-20 sm:py-24 lg:py-28 bg-[#FAF8F5] border-b border-stone-200 overflow-hidden">
      {/* Graphical Background Element: Subtle Blueprint Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blueprint-grid-verticals" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#521D27" strokeWidth="0.6" strokeOpacity="0.08" />
              <circle cx="0" cy="0" r="1.2" fill="#EFC269" fillOpacity="0.45" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint-grid-verticals)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section: Clean, Professional */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#521D27]/10 border border-[#521D27]/20 mb-4">
            <Sparkles className="w-4 h-4 text-[#521D27]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#521D27]">
              OUR 12 INSTITUTIONAL SERVICES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#521D27] font-['Poppins'] tracking-tight leading-tight">
            Comprehensive Services for the Education Ecosystem
          </h2>

          <p className="text-base sm:text-lg text-stone-600 mt-3.5 leading-relaxed font-medium">
            Tailored, research-driven, and result-oriented solutions designed specifically for schools, colleges, universities, and educational trustees across India.
          </p>
        </div>

        {/* 12 Services Grid: 3 Cards per Row on Desktop for Larger, Prominent Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {allServices.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="bg-white rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-[#521D27] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 overflow-hidden"
            >
              <div>
                {/* Bigger Service Banner Image Header */}
                <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-stone-100">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>

                {/* Card Content: Title & Short Description Only */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1C1917] group-hover:text-[#521D27] transition-colors font-['Poppins'] leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-stone-600 leading-relaxed mt-2.5">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Action Link */}
              <div className="px-6 pb-6 pt-0">
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#521D27] group-hover:text-[#B8821B] transition-colors">
                    <span>Explore Service</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
