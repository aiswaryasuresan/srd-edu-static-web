import Link from "next/link";
import {
  GraduationCap,
  Building2,
  Briefcase,
  Lightbulb,
  Handshake,
  ArrowRight
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

export default function WhoWeServe() {
  const audiences = [
    {
      title: "Students & Aspirants",
      tagline: "Career Guidance & Employability",
      description: "Access curated global skill programs, resume masterclasses, mock interviews, and merit-based campus placement drives.",
      icon: GraduationCap,
      href: "/skill-opportunities#for-students",
      actionText: "Explore Student Pathways",
    },
    {
      title: "Educational Institutions",
      tagline: "Schools, Colleges & Universities",
      description: "Supercharge your admission funnels, recruit top-tier faculty, secure regulatory affiliations, and host pooled campus placement drives.",
      icon: Building2,
      href: "/industries",
      actionText: "View Institutional Solutions",
    },
    {
      title: "Employers & Corporates",
      tagline: "Pre-Evaluated Talent Sourcing",
      description: "Source job-ready graduates and specialized academic professionals matching precise job descriptions with zero screening overhead.",
      icon: Briefcase,
      href: "/careers",
      actionText: "Submit Hiring Needs",
    },
    {
      title: "Educational Entrepreneurs & Trustees",
      tagline: "Zero-to-One Launch & Expansion",
      description: "Launch new schools or colleges safely with comprehensive master project reports, land/safety clearances, and brand identity manuals.",
      icon: Lightbulb,
      href: "/services/documentation-legal",
      actionText: "Regulatory Launch Support",
    },
    {
      title: "Training Providers & NGOs",
      tagline: "Curriculum & Opportunity Linkages",
      description: "Scale your vocational modules, integrate with college campus networks, and connect certified trainees with regional job melas.",
      icon: Handshake,
      href: "/skill-opportunities#for-institutions",
      actionText: "Partner as Skill Provider",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F8F7F5] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Multi-Stakeholder Impact"
          title="Who We Serve — Solutions Across the Educational Spectrum"
          subtitle="Connecting institutions, students, professionals, and employers through tailored services that address their distinct challenges."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((aud, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#F5C64D] transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#4A1525] text-white flex items-center justify-center shadow-xs">
                  <aud.icon className="w-6 h-6 text-[#F5C64D]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#241E20] font-['Poppins']">
                    {aud.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#B8821B] uppercase tracking-wider">
                    {aud.tagline}
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-[#63595C] leading-relaxed">
                  {aud.description}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-gray-100">
                <Link
                  href={aud.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4A1525] hover:text-[#6B1F35] transition-colors"
                >
                  <span>{aud.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F5C64D]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
