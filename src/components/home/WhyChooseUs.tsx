import {
  ShieldCheck,
  Settings2,
  Layers,
  Award,
  Clock,
  Handshake,
} from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Verified & Qualified Professionals",
      description: "Carefully selected and background-checked.",
      icon: ShieldCheck,
    },
    {
      title: "Customized Solutions",
      description: "Tailored to your institution's unique needs.",
      icon: Settings2,
    },
    {
      title: "End-to-End Support",
      description: "From hiring to training and development.",
      icon: Layers,
    },
    {
      title: "Focus on Excellence",
      description: "Committed to academic and institutional growth.",
      icon: Award,
    },
    {
      title: "Timely Placement",
      description: "Quick and efficient hiring process.",
      icon: Clock,
    },
    {
      title: "Long-Term Partnership",
      description: "Your success is our mission.",
      icon: Handshake,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF7E6] border border-[#F5C64D]/40 text-[#B8821B] text-xs font-bold uppercase tracking-wider mb-3">
            Institutional Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#501C29] font-['Poppins'] tracking-tight">
            Why Choose SRD?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 font-medium">
            More Than Recruitment, A Long-Term Partnership
          </p>
          <div className="w-16 h-1 bg-[#EFC269] rounded-full mx-auto mt-4" />
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {points.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div
                key={idx}
                className="group relative bg-gradient-to-b from-white to-[#FAF7F5]/60 rounded-2xl p-7 border border-gray-100 hover:border-[#EFC269]/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#501C29]/10 text-[#501C29] group-hover:bg-[#501C29] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-5 shadow-sm">
                    <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-lg font-bold text-[#501C29] font-['Poppins'] mb-2.5 leading-snug">
                    {point.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100/80 flex items-center justify-between text-xs font-semibold text-[#B8821B] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>SRD Advantage</span>
                  <span className="text-[#501C29]">0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
