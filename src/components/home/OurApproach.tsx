import SectionHeading from "@/components/shared/SectionHeading";
import {
  HelpCircle,
  Search,
  FileCheck2,
  Share2,
  CheckCircle,
  LifeBuoy
} from "lucide-react";

export default function OurApproach() {
  const steps = [
    {
      num: "01",
      title: "Understand",
      subtitle: "Institutional Discovery",
      description: "We engage in deep discovery sessions with management, principals, or aspirants to clarify real bottlenecks and objectives.",
      icon: HelpCircle,
    },
    {
      num: "02",
      title: "Research",
      subtitle: "Data & Regulations",
      description: "Rigorous analysis of regulatory boards, regional labor markets, employer requisitions, or competitor positioning.",
      icon: Search,
    },
    {
      num: "03",
      title: "Plan",
      subtitle: "Tailored Strategy",
      description: "Formulating a step-by-step roadmap: from brand collaterals and syllabus design to compliance timelines.",
      icon: FileCheck2,
    },
    {
      num: "04",
      title: "Connect",
      subtitle: "Network Alignment",
      description: "Activating relationships with verified employers, top faculty candidates, skill providers, and student communities.",
      icon: Share2,
    },
    {
      num: "05",
      title: "Implement",
      subtitle: "Flawless Execution",
      description: "Managing campus drives, launching omnichannel admission campaigns, or conducting hands-on technical workshops.",
      icon: CheckCircle,
    },
    {
      num: "06",
      title: "Support",
      subtitle: "Enduring Partnership",
      description: "Providing continuous audit readiness, post-placement follow-ups, retention support, and iterative growth reviews.",
      icon: LifeBuoy,
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Structured Methodology"
          title="Our Approach — Systematic Institutional Transformation"
          subtitle="A disciplined 6-stage execution framework ensuring predictable, high-integrity outcomes for institutions, educators, and students."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#F8F7F5] rounded-2xl p-5 border border-gray-200 flex flex-col justify-between hover:border-[#F5C64D] hover:bg-[#FFFDF5] transition-all duration-200 group relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-extrabold text-[#4A1525] group-hover:text-[#B8821B] font-['Poppins']">
                    {step.num}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-[#4A1525] shadow-xs">
                    <step.icon className="w-4 h-4 text-[#F5C64D]" />
                  </div>
                </div>

                <h3 className="text-sm font-bold text-[#241E20] font-['Poppins']">
                  {step.title}
                </h3>
                <p className="text-[11px] font-semibold text-[#B8821B] uppercase tracking-wider mb-2">
                  {step.subtitle}
                </p>
                <p className="text-xs text-[#63595C] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-200/60 flex items-center gap-1 text-[10px] text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5C64D]" />
                <span>Stage {step.num} Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
