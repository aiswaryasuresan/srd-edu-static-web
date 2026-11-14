import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Building,
  Sparkles
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import PageBanner from "@/components/shared/PageBanner";
import { portfolioProjects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Institutional Portfolio & Projects | Case Studies & Collaborations",
  description:
    "Explore SRD Edu Corporation’s portfolio of campus placement drives, institution branding overhauls, faculty recruitment, and statutory affiliation documentation dossiers.",
};

export default function PortfolioPage() {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <PageBanner
        title="Institutional Projects & Engagements"
        description="Review selected institutional projects executed across our business verticals—from campus recruitment drives and branding overhauls to academic faculty search and regulatory affiliation dossiers."
        badge={{
          icon: Sparkles,
          label: "Demonstrated Institutional Execution",
        }}
        breadcrumbs={[{ label: "Portfolio" }]}
      />


      {/* Projects Grid */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((item) => (
              <div
                key={item.id}
                className="bg-[#F8F7F5] rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-[#F5C64D] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#FFF7E6] text-[#B8821B] px-2.5 py-1 rounded-md">
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      {item.clientType}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#241E20] font-['Poppins']">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#63595C] leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-gray-200">
                    <p className="text-xs font-bold text-[#241E20] uppercase tracking-wider">
                      Key Outcomes & Milestones:
                    </p>
                    {item.outcomes.map((out, oIdx) => (
                      <div key={oIdx} className="flex items-start gap-2 text-xs text-[#241E20]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#521D27] shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-6 py-4 bg-white border-t border-gray-200 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium bg-[#F8F7F5] text-gray-600 px-2.5 py-1 rounded border border-gray-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#521D27] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-['Poppins']">
            Ready to Plan Your Institutional Engagement?
          </h2>
          <p className="text-xs sm:text-sm text-white/80">
            Let our advisory team design a customized roadmap for your campus drives, branding campaigns, or affiliation documentation.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?intent=partner"
              className="inline-flex items-center gap-2 bg-[#F5C64D] hover:bg-[#DCA42C] text-[#521D27] font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg transition-all"
            >
              <span>Request Institutional Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
