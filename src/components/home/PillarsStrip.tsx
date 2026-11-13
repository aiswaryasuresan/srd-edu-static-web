import {
  Building2,
  Users,
  GraduationCap,
  Globe2,
  TrendingUp
} from "lucide-react";

export default function PillarsStrip() {
  const pillars = [
    {
      title: "Institutional Development",
      icon: Building2,
    },
    {
      title: "People & Opportunities",
      icon: Users,
    },
    {
      title: "Skill & Employability",
      icon: GraduationCap,
    },
    {
      title: "Global Connections",
      icon: Globe2,
    },
    {
      title: "Sustainable Growth",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="bg-white border-b border-gray-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 py-4 lg:py-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center gap-3 px-3 py-2 sm:py-1"
            >
              <div className="w-10 h-10 rounded-lg bg-[#FDF6F7] text-[#501C29] flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-[#501C29]" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#241E20] font-['Poppins'] leading-tight">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
