import Link from "next/link";
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { resourceArticles } from "@/data/resources";

export default function UpdatesSection() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <SectionHeading
            badge="Knowledge & Intelligence"
            title="Latest Educational Updates & Regulatory Insights"
            subtitle="Thought leadership articles, compliance alerts, and strategic perspectives curated by our research team."
            align="left"
            className="mb-0"
          />
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#4A1525] hover:text-[#6B1F35] shrink-0"
          >
            <span>View All Resources</span>
            <ArrowRight className="w-4 h-4 text-[#F5C64D]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resourceArticles.map((article) => (
            <article
              key={article.id}
              className="bg-[#F8F7F5] rounded-2xl border border-gray-200 p-6 flex flex-col justify-between hover:border-[#F5C64D] hover:bg-[#FFFDF5] hover:shadow-md transition-all duration-200"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#FFF7E6] text-[#B8821B] px-2.5 py-0.5 rounded">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#241E20] font-['Poppins'] line-clamp-2 hover:text-[#4A1525] transition-colors">
                  <Link href="/resources">{article.title}</Link>
                </h3>

                <p className="text-xs text-[#63595C] leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-200 flex items-center justify-between">
                <span className="text-[11px] text-gray-500 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {article.date}
                </span>
                <Link
                  href="/resources"
                  className="text-xs font-bold text-[#4A1525] hover:underline inline-flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3 text-[#F5C64D]" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
