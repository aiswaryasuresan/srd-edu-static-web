import Link from "next/link";
import { ArrowRight, CheckCircle2, Building, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { portfolioProjects } from "@/data/portfolio";

export default function PortfolioPreview() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <SectionHeading
            badge="Institutional Engagements"
            title="Institutional Portfolio & Engagement Highlights"
            subtitle="Explore how SRD coordinates campus placement drives, executes admission branding, sources senior faculty, and structures compliance dossiers."
            align="left"
            className="mb-0"
          />
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#4A1525] hover:text-[#6B1F35] shrink-0"
          >
            <span>View All Engagements</span>
            <ArrowRight className="w-4 h-4 text-[#F5C64D]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioProjects.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-[#F8F7F5] rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-[#F5C64D] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#FFF7E6] text-[#B8821B] px-2.5 py-1 rounded-md">
                    {item.category}
                  </span>
                  <span className="text-[11px] text-gray-500 font-medium">
                    {item.clientType}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#241E20] font-['Poppins']">
                  {item.title}
                </h3>

                <p className="text-xs text-[#63595C] leading-relaxed line-clamp-3">
                  {item.summary}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-gray-200">
                  {item.outcomes.map((out, oIdx) => (
                    <div
                      key={oIdx}
                      className="flex items-start gap-2 text-xs text-[#241E20]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4A1525] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{out}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-6 py-4 bg-white border-t border-gray-200 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium bg-[#F8F7F5] text-gray-600 px-2 py-0.5 rounded border border-gray-200"
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
  );
}
