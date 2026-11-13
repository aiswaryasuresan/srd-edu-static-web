import Link from "next/link";
import {
  Microscope,
  Users,
  Layers,
  Target,
  Megaphone,
  Briefcase,
  ArrowRight,
} from "lucide-react";

export default function BusinessVerticals() {
  const services = [
    {
      title: "Institute Research & Development",
      description: "Research ecosystem architecture, publications, intellectual property frameworks, and innovation projects.",
      href: "/services/institute-research-development",
      icon: Microscope,
    },
    {
      title: "Human Resource Management",
      description: "Qualified educators, school management experts, exam trainers, counsellors, and operational staff.",
      href: "/services/human-resource-management",
      icon: Users,
    },
    {
      title: "Skill Development Project",
      description: "Credit-aligned vocational skills, modern practical labs, corporate CSR projects, and certifications.",
      href: "/services/skill-development-project",
      icon: Layers,
    },
    {
      title: "Competitive Exam Support",
      description: "Integrated campus coaching for JEE, NEET, Olympiads, and CUET with senior faculty deployment.",
      href: "/services/competitive-exam-support",
      icon: Target,
    },
    {
      title: "Branding & Marketing",
      description: "Strategic institution identity, admissions marketing funnels, campaigns, and reputation building.",
      href: "/services/branding-marketing",
      icon: Megaphone,
    },
    {
      title: "Placement Assistance",
      description: "Campus recruitment drives, corporate employer tie-ups, student employability clinics, and hiring.",
      href: "/services/placement-assistance",
      icon: Briefcase,
    },
  ];

  return (
    <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with "View All 12 Services →" on the right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-0.5 bg-[#B8821B]"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B8821B] font-['Poppins']">
                OUR INTEGRATED BUSINESS SOLUTIONS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#501C29] font-['Poppins']">
              Comprehensive Services for the Education Ecosystem
            </h2>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#501C29] hover:text-[#B8821B] transition-colors shrink-0"
          >
            <span>View All 12 Services</span>
            <ArrowRight className="w-4 h-4 text-[#B8821B]" />
          </Link>
        </div>

        {/* 6 Core Service Cards Grid (3 cols on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:border-b-4 hover:border-b-[#F5C64D] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Icon in soft warm gold container */}
                <div className="w-12 h-12 rounded-xl bg-[#FFF7E6] text-[#B8821B] flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-[#B8821B]" />
                </div>

                <h3 className="text-lg font-bold text-[#241E20] group-hover:text-[#501C29] transition-colors font-['Poppins'] leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-gray-100">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#501C29] group-hover:text-[#B8821B] transition-colors"
                >
                  <span>Explore Service Page</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
