import Link from "next/link";
import { ArrowRight, CheckCircle2, Award, Users, BookOpen, Target } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { companyInfo } from "@/data/company";

export default function AboutPreview() {
  const pillars = [
    {
      title: "The Complete Services Partner",
      description: "Rather than operating as a conventional school or simple staffing agency, SRD functions as an integrated institutional development backbone.",
      icon: Award,
    },
    {
      title: "Institutional-Focused Philosophy",
      description: "Every service—from branding to legal documentation—is crafted to build lasting institutional credibility and sustainable academic growth.",
      icon: Target,
    },
    {
      title: "Global Opportunity Bridge",
      description: "Connecting local talent and colleges with world-class skill programs, cross-border insights, and ethical employer networks.",
      icon: BookOpen,
    },
    {
      title: "Research-Driven Methodology",
      description: "Rooted in rigorous curriculum auditing, market skill analytics, and factual compliance with zero unverified claims.",
      icon: Users,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F8F7F5] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Company Introduction"
          title="Who We Are — The Complete Educational Services Partner"
          subtitle="Empowering educational institutions, students, and employers through integrated, research-backed institutional solutions."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Narrative */}
          <div className="lg:col-span-6 space-y-4 text-sm sm:text-base text-[#63595C] leading-relaxed">
            <h3 className="text-xl sm:text-2xl font-bold text-[#241E20] font-['Poppins']">
              Redefining Educational Support Ecosystems
            </h3>
            <p>
              <strong>SRD Edu Corporation</strong> is an educational services and institutional development enterprise. We bridge the critical gaps between academic delivery, institutional operations, student employability, and statutory compliance.
            </p>
            <p>
              We operate under a singular unifying philosophy: <em>Empowering Institutions. Enriching Lives.</em> Educational institutions thrive when their faculty is exceptional, their regulatory documentation is unassailable, their brand is commanding, and their graduates secure meaningful career placements.
            </p>
            <p className="text-xs text-[#241E20] font-medium bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <strong className="text-[#521D27]">Our Corporate Tagline:</strong> {companyInfo.tagline} — encompassing every dimension of institutional development from foundational research and pedagogical advancement to high-impact career placement facilitation.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#521D27] hover:text-[#EFC269] group"
              >
                <span>Read More About Our Company & Ecosystem</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#F5C64D]" />
              </Link>
            </div>
          </div>

          {/* Right Feature Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-[#F5C64D]/50 transition-all duration-200 space-y-2"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FFF7E6] text-[#B8821B] flex items-center justify-center">
                  <pillar.icon className="w-5 h-5 text-[#B8821B]" />
                </div>
                <h4 className="text-sm font-bold text-[#241E20] font-['Poppins']">
                  {pillar.title}
                </h4>
                <p className="text-xs text-[#63595C] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
