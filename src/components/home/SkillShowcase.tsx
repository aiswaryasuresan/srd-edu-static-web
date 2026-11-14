import Link from "next/link";
import { ArrowRight, Cpu, Award, Wrench, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { skillVerticalData, sampleSkillPrograms } from "@/data/skills";

export default function SkillShowcase() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Global Skill Opportunities"
          title="The Epicentre of World Skill Opportunities"
          subtitle="One Platform for All Skill Programs in the World. Curated capabilities spanning artificial intelligence, professional leadership, and high-demand vocational trades."
          align="center"
        />

        {/* 3 Major Category Pillars */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillVerticalData.categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#F8F7F5] rounded-2xl p-6 border border-gray-200 flex flex-col justify-between hover:border-[#F5C64D] hover:bg-[#FFFDF5] transition-all duration-200"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#521D27] text-white flex items-center justify-center shadow-xs">
                  {idx === 0 ? (
                    <Cpu className="w-6 h-6 text-[#F5C64D]" />
                  ) : idx === 1 ? (
                    <Award className="w-6 h-6 text-[#F5C64D]" />
                  ) : (
                    <Wrench className="w-6 h-6 text-[#F5C64D]" />
                  )}
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#241E20] font-['Poppins']">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#63595C] mt-1">
                    {cat.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-gray-200">
                  {cat.items.slice(0, 5).map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className="flex items-start gap-2 text-xs text-[#241E20]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B8821B] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-gray-200">
                <Link
                  href="/skill-opportunities"
                  className="text-xs font-bold text-[#521D27] hover:text-[#EFC269] inline-flex items-center gap-1.5"
                >
                  <span>Explore All {cat.items.length} Programs</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F5C64D]" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Sample Programs Grid */}
        <div className="mt-14 pt-10 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-[#241E20] font-['Poppins']">
                Featured Skill Modules Ready for Campus Deployment
              </h3>
              <p className="text-xs text-[#63595C]">
                Turnkey workshops designed to fit university timetables and corporate calendars.
              </p>
            </div>
            <Link
              href="/skill-opportunities"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#521D27] hover:underline"
            >
              <span>View Full Skill Catalog</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#F5C64D]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {sampleSkillPrograms.slice(0, 4).map((prog) => (
              <div
                key={prog.id}
                className="bg-white rounded-xl p-4 border border-gray-200 hover:border-[#F5C64D] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#FFF7E6] text-[#B8821B] px-2 py-0.5 rounded">
                    {prog.category}
                  </span>
                  <h4 className="text-xs font-bold text-[#241E20] mt-2 font-['Poppins'] line-clamp-2">
                    {prog.title}
                  </h4>
                  <p className="text-[11px] text-gray-500 mt-1 line-clamp-2">
                    {prog.description}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500 font-medium">
                  <span>⏱ {prog.duration}</span>
                  <span className="text-[#521D27] font-semibold">{prog.format.split(' ')[0]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
