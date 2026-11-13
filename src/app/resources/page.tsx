import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowRight,
  ChevronRight,
  FileText,
  Sparkles
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import PageBanner from "@/components/shared/PageBanner";
import { resourceArticles } from "@/data/resources";

export const metadata: Metadata = {
  title: "Educational Resources, Insights & Corporate Updates",
  description:
    "Read in-depth articles on institutional compliance, curriculum innovation, AI in higher education, and corporate announcements from SRD Edu Corporation.",
};

export default function ResourcesPage() {
  const brochures = [
    {
      title: "SRD Edu Corporation Master Brochure",
      version: "Version 1.0 (PDF)",
      description: "Overview of corporate philosophy, 11 service divisions, and institutional development models.",
      size: "Corporate Profile",
      status: "Available on Institutional Request"
    },
    {
      title: "Institution Branding & Admission Solutions Dossier",
      version: "9-Category Suite",
      description: "Comprehensive prospectus on campus ambient design, tele-counselling, and admission funnels.",
      size: "Solutions Guide",
      status: "Available on Institutional Request"
    },
    {
      title: "Global Skill Opportunities Directory",
      version: "Program Curriculum",
      description: "Detailed syllabus outlines for Technology & Digital, Professional Development, and Vocational Trades.",
      size: "Curriculum Catalog",
      status: "Available on Institutional Request"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <PageBanner
        title="Resources, Insights & Announcements"
        description="Stay informed with educational intelligence, statutory regulatory updates, skill development analyses, and official publications from SRD Edu Corporation."
        badge={{
          icon: Sparkles,
          label: "Institutional Knowledge & Research",
        }}
        breadcrumbs={[{ label: "Resources" }]}
      />

      {/* Articles Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Thought Leadership"
            title="Educational Insights & Regulatory Guides"
            subtitle="Curated perspectives designed to help school trustees, college deans, and educators navigate modern challenges."
            align="left"
          />

          <div className="mt-12 space-y-8">
            {resourceArticles.map((art) => (
              <article
                key={art.id}
                className="bg-[#F8F7F5] rounded-2xl border border-gray-200 p-6 sm:p-8 hover:border-[#F5C64D] hover:bg-[#FFFDF5] hover:shadow-md transition-all duration-200"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="font-bold uppercase tracking-wider bg-[#FFF7E6] text-[#B8821B] px-2.5 py-1 rounded">
                    {art.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {art.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {art.readTime}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-[#241E20] font-['Poppins'] mb-3">
                  {art.title}
                </h2>

                <p className="text-sm text-[#4A1525] font-medium mb-4">
                  {art.summary}
                </p>

                <div className="space-y-3 text-xs sm:text-sm text-[#63595C] leading-relaxed pt-3 border-t border-gray-200">
                  {art.content.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Brochures & Publications */}
      <section className="py-16 sm:py-20 bg-[#F8F7F5] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Institutional Literature"
            title="Corporate Brochures & Guides"
            subtitle="Official institutional publications detailing our business ecosystem and curriculum modules."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {brochures.map((b, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between hover:border-[#F5C64D] transition-all"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#4A1525] text-white flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[#F5C64D]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#B8821B] uppercase tracking-wider">
                      {b.version}
                    </span>
                    <h3 className="text-base font-bold text-[#241E20] font-['Poppins'] mt-1">
                      {b.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#63595C] leading-relaxed">
                    {b.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] text-gray-400 font-medium">{b.size}</span>
                  <Link
                    href={`/contact?intent=brochure&item=${encodeURIComponent(b.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4A1525] hover:underline"
                  >
                    <span>Request Copy</span>
                    <ArrowRight className="w-3 h-3 text-[#F5C64D]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
