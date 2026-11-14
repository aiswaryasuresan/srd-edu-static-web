import {
  Layers,
  Building,
  ShieldCheck,
  Globe2,
  Search,
  Handshake,
  Sliders,
  CheckCircle2
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

export default function WhyChooseSRD() {
  const differentiators = [
    {
      title: "Integrated Educational Solutions",
      description: "One unified partner addressing placement, marketing, HR staffing, skill training, and statutory documentation under a cohesive framework.",
      icon: Layers,
    },
    {
      title: "Institutional-Focused Approach",
      description: "We work directly alongside school boards, university deans, and trustees to solve systemic operational and quality challenges.",
      icon: Building,
    },
    {
      title: "Professional Support & Integrity",
      description: "Strictly ethical advisory with zero fabricated credentials, zero fake guarantees, and absolute regulatory transparency.",
      icon: ShieldCheck,
    },
    {
      title: "Global Opportunity Orientation",
      description: "Continuous research identifying world-class curricula, international skill trends, and lawful cross-border career pathways.",
      icon: Globe2,
    },
    {
      title: "Research-Driven Methodology",
      description: "Every training syllabus, marketing plan, and staffing search is rooted in actual labor data and institutional auditing.",
      icon: Search,
    },
    {
      title: "Long-Term Partnerships",
      description: "We invest in multi-year institutional relationships rather than transactional, short-lived engagements.",
      icon: Handshake,
    },
    {
      title: "Customized Solutions",
      description: "Tailored interventions adapted to your institution’s size, regional context, syllabus board, and growth aspirations.",
      icon: Sliders,
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F8F7F5] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The SRD Difference"
          title="Why Choose SRD Edu Corporation?"
          subtitle="Distinguished by integrity, comprehensive institutional capabilities, and a commitment to sustainable educational development."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((diff, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-[#F5C64D] transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#FFF7E6] text-[#B8821B] flex items-center justify-center">
                  <diff.icon className="w-6 h-6 text-[#B8821B]" />
                </div>
                <h3 className="text-base font-bold text-[#241E20] font-['Poppins']">
                  {diff.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#63595C] leading-relaxed">
                  {diff.description}
                </p>
              </div>
              <div className="pt-4 mt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs font-semibold text-[#521D27]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F5C64D]" />
                <span>Verified Corporate Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
