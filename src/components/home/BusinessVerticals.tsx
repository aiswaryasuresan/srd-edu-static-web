import Link from "next/link";
import Image from "next/image";
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
  Compass,
} from "lucide-react";

export default function BusinessVerticals() {
  const allServices = [
    {
      number: "01",
      specRef: "REF // SRD-HRM",
      title: "Human Resource Management",
      toolBadge: "HR Staffing & Talent Portal",
      description: "Leadership, faculty, exam trainers, counsellors, and specialized institutional staff.",
      href: "/services/human-resource-management",
      image: "/images/banner/service-hr-banner.jpg",
      imageAlt: "SRD Human Resource Management for educational institutions",
      icon: Users,
    },
    {
      number: "02",
      specRef: "REF // SRD-MKT",
      title: "Institution Branding & Marketing",
      toolBadge: "Creative Media & Campaigns",
      description: "Visual identity, digital campaigns, outdoor branding, prospectus design, and admission funnels.",
      href: "/services/branding-marketing",
      image: "/images/banner/service-branding-banner.jpg",
      imageAlt: "SRD Institution Branding and Marketing services",
      icon: Megaphone,
    },
    {
      number: "03",
      specRef: "REF // SRD-RND",
      title: "Institute Research & Development",
      toolBadge: "R&D Architecture & IPR",
      description: "Research policy, Scopus publications, patent frameworks, and funded innovation projects.",
      href: "/services/institute-research-development",
      image: "/images/banner/service-research-banner.jpg",
      imageAlt: "SRD Institute Research and Development frameworks",
      icon: Microscope,
    },
    {
      number: "04",
      specRef: "REF // SRD-DAT",
      title: "IT & Data Management",
      toolBadge: "SIS Telemetry & Analytics",
      description: "Institutional data governance, predictive student telemetry, and administrative dashboards.",
      href: "/services/data-analytics",
      image: "/images/banner/service-data-banner.jpg",
      imageAlt: "SRD IT and Data Management telemetry",
      icon: BarChart3,
    },
    {
      number: "05",
      specRef: "REF // SRD-EXM",
      title: "Competitive Exam Programs",
      toolBadge: "Smart Test & Evaluation Suite",
      description: "Integrated campus coaching for JEE, NEET, Olympiads, and Civil Services with senior faculty.",
      href: "/services/competitive-exam-support",
      image: "/images/banner/service-competitive-banner.jpg",
      imageAlt: "SRD Competitive Exam preparation programs",
      icon: Target,
    },
    {
      number: "06",
      specRef: "REF // SRD-SKL",
      title: "Skill Training Programs",
      toolBadge: "Vocational Labs & AI Training",
      description: "Credit-aligned vocational skills, modern practical labs, corporate CSR, and skill diplomas.",
      href: "/services/skill-development-project",
      image: "/images/banner/service-skill-banner.jpg",
      imageAlt: "SRD Vocational and Advanced Skill Training Programs",
      icon: Layers,
    },
    {
      number: "07",
      specRef: "REF // SRD-INF",
      title: "Infrastructure & Investment",
      toolBadge: "Master Planning & Capital Models",
      description: "Campus architectural planning, capital funding models, laboratory setup, and facility expansion.",
      href: "/services/infrastructure-finance-support",
      image: "/images/banner/service-infrastructure-banner.jpg",
      imageAlt: "SRD Campus Infrastructure and Capital Planning",
      icon: Building2,
    },
    {
      number: "08",
      specRef: "REF // SRD-DOC",
      title: "Documentation & Policy Making",
      toolBadge: "Statutory Compliance Vault",
      description: "UGC, AICTE, CBSE affiliation, institutional bylaws, NAAC and NBA compliance documentation.",
      href: "/services/documentation-legal",
      image: "/images/banner/service-documentation-banner.jpg",
      imageAlt: "SRD Statutory Documentation and Policy Governance",
      icon: FileText,
    },
    {
      number: "09",
      specRef: "REF // SRD-GLB",
      title: "Global Placement Services",
      toolBadge: "International Career Bridge",
      description: "Global corporate partnerships, overseas career pathways, cross-border internships, and work visas.",
      href: "/services/global-placement",
      image: "/images/banner/service-placement-banner.jpg",
      imageAlt: "SRD Global Placement and Career Pathways",
      icon: Globe,
    },
    {
      number: "10",
      specRef: "REF // SRD-ACD",
      title: "Academic Programmes & Systems",
      toolBadge: "OBE & Curriculum Framework",
      description: "Modern curriculum design, outcome-based education (OBE), pedagogical systems, and academic audits.",
      href: "/services/academic-programmes-systems",
      image: "/images/banner/service-academic-banner.jpg",
      imageAlt: "SRD Academic Programmes and Systems Architecture",
      icon: GraduationCap,
    },
    {
      number: "11",
      specRef: "REF // SRD-CNS",
      title: "Education Consultancy",
      toolBadge: "Turnkey Advisory Management",
      description: "Turnkey school and college establishment, institutional turnarounds, and trust governance.",
      href: "/services/education-consultancy",
      image: "/images/banner/service-consultancy-banner.jpg",
      imageAlt: "SRD Turnkey Education Consultancy and Advisory",
      icon: Briefcase,
    },
    {
      number: "12",
      specRef: "REF // SRD-PLC",
      title: "Placement Assistance",
      toolBadge: "Campus Recruitment Network",
      description: "Corporate recruitment drives, employability training, mock interview clinics, and employer tie-ups.",
      href: "/services/placement-assistance",
      image: "/images/banner/campus-banner.jpg",
      imageAlt: "SRD Campus Placement Assistance and Corporate Drives",
      icon: Handshake,
    },
  ];

  return (
    <section id="services" className="relative py-20 sm:py-24 lg:py-28 bg-[#FAF8F5] border-b border-stone-200 overflow-hidden">
      {/* Graphical Background Element: Architectural Blueprint Grid Pattern */}
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

      {/* Decorative Technical Drawing Watermark in Background */}
      <div className="absolute -top-16 -right-16 w-96 h-96 rounded-full border border-[#521D27]/10 pointer-events-none flex items-center justify-center">
        <div className="w-72 h-72 rounded-full border border-dashed border-[#EFC269]/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section: Technical Title, Badges, and Clear Description */}
        <div className="max-w-3xl mb-12 sm:mb-14">
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

          <div className="mt-4 flex items-center gap-3 text-xs font-mono font-semibold text-[#521D27]/80">
            <Compass className="w-4 h-4 text-[#EFC269]" />
            <span>ARCHITECTURAL MATRIX // 4×3 PILLAR DEPLOYMENT</span>
          </div>
        </div>

        {/* 12 Services Grid: 4x3 Layout with Service Banner Images, Drawing Watermarks, & Digital Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allServices.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="bg-white rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-2xl hover:border-[#521D27] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 relative overflow-hidden"
              >
                {/* Subtle Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#521D27] group-hover:to-[#EFC269] transition-all duration-300 z-20" />

                <div>
                  {/* Service Image Header Container */}
                  <div className="relative w-full h-44 overflow-hidden bg-stone-100">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Overlay for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 z-10" />

                    {/* Architectural Drawing Corner Accents (Watermark element) */}
                    <div className="absolute top-2 left-2 z-15 pointer-events-none text-white/50 font-mono text-[9px] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 border-t border-l border-[#EFC269]" />
                      <span>{item.specRef}</span>
                    </div>

                    {/* Top Right Number Badge */}
                    <div className="absolute top-2.5 right-2.5 z-15">
                      <span className="inline-flex items-center justify-center px-2 py-0.5 rounded bg-[#521D27]/90 text-[#EFC269] text-xs font-mono font-bold border border-[#EFC269]/40 shadow-sm">
                        {item.number}
                      </span>
                    </div>

                    {/* Bottom Row on Image: Icon Badge & Tool Tag */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 z-15 flex items-center justify-between gap-2">
                      <div className="w-9 h-9 rounded-xl bg-[#521D27] text-[#EFC269] flex items-center justify-center shadow-md border border-[#EFC269]/30 group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4 stroke-[2]" />
                      </div>

                      <span className="text-[10px] font-bold text-white/95 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded border border-white/20 truncate max-w-[180px]">
                        {item.toolBadge}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Area */}
                  <div className="p-5">
                    {/* Architectural Technical Reference Bar */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono font-bold text-[#521D27] uppercase tracking-wider">
                        {item.specRef}
                      </span>
                      <span className="text-[9px] font-mono font-semibold text-stone-600 bg-stone-100 px-1.5 py-0.5 rounded border border-stone-200">
                        SRD VERTICAL
                      </span>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-base font-bold text-[#1C1917] group-hover:text-[#521D27] transition-colors font-['Poppins'] leading-snug line-clamp-2 min-h-[2.75rem]">
                      {item.title}
                    </h3>

                    {/* Service Description */}
                    <p className="text-xs text-stone-600 leading-relaxed mt-2 line-clamp-3 min-h-[3.75rem]">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Card Bottom CTA Link with Drawing Crosshair Stamp */}
                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#521D27] group-hover:text-[#B8821B] transition-colors"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    {/* Blueprint Drawing Crosshair Element */}
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] text-stone-400 group-hover:text-[#521D27] transition-colors">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#EFC269]" />
                      SRD
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
