import Link from "next/link";
import {
  Megaphone,
  Users,
  FileCheck2,
  Building,
  ArrowRight,
  ShieldAlert,
  Sparkles
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

export default function InstitutionalSolutions() {
  const solutions = [
    {
      title: "Institution Branding & Marketing",
      tagline: "Build Your Identity. Grow Your Institution.",
      description: "9 specialized categories encompassing campus ambient branding, annual prospectus design, targeted digital ads, and dedicated admission enquiry call desks.",
      icon: Megaphone,
      href: "/services/branding-marketing",
      badge: "9 Marketing Disciplines",
    },
    {
      title: "Human Resource Management",
      tagline: "Building the Right Team for Educational Excellence.",
      description: "Rigorous sourcing and demonstration evaluation for school principals, university deans, competitive exam faculty, and institutional administrative teams.",
      icon: Users,
      href: "/services/hr-management",
      badge: "Academic Talent Sourcing",
    },
    {
      title: "Documentation & Regulatory Services",
      tagline: "Build Safely. Operate Confidently. Grow Sustainably.",
      description: "End-to-end procedural coordination for CBSE/ICSE/University affiliations, safety certificates, trust deeds, policy structuring, and NAAC/NBA audit dossiers.",
      icon: FileCheck2,
      href: "/services/documentation-legal",
      badge: "Audit & Affiliation Ready",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#521D27] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Institutional Infrastructure"
          title="Institutional Solutions — Branding, Staffing & Compliance"
          subtitle="A complete institutional development trifecta ensuring your campus has commanding visibility, stellar faculty, and impeccable regulatory standing."
          align="center"
          theme="dark"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/15 hover:border-[#F5C64D] hover:bg-white/15 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#F5C64D] text-[#521D27] flex items-center justify-center font-bold shadow-md">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F5C64D] bg-[#F5C64D]/15 border border-[#F5C64D]/30 px-2.5 py-1 rounded-md">
                    {item.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white font-['Poppins']">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#F5C64D] mt-1">
                    {item.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-white/10">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#F5C64D] hover:text-white transition-colors"
                >
                  <span>Explore Vertical Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Note Bar */}
        <div className="mt-12 p-4 rounded-xl bg-black/30 border border-white/10 flex items-center gap-3 text-xs text-white/80">
          <ShieldAlert className="w-5 h-5 text-[#F5C64D] shrink-0" />
          <p>
            <strong>Regulatory Standard:</strong> SRD Edu Corporation provides administrative coordination and documentation assistance. We do not provide statutory legal representation in courts or promise guaranteed approvals from regulatory boards.
          </p>
        </div>
      </div>
    </section>
  );
}
