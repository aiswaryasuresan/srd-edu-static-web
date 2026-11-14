import {
  ShieldCheck,
  Settings2,
  Layers,
  Award,
  Clock,
  Handshake,
  Sparkles,
} from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Verified & Qualified Professionals",
      description: "Carefully selected and background-checked faculties, administrative heads, and specialists.",
      icon: ShieldCheck,
    },
    {
      title: "Customized Solutions",
      description: "Bespoke strategies tailored precisely to your institution's scale, goals, and legacy.",
      icon: Settings2,
    },
    {
      title: "End-to-End Support",
      description: "Comprehensive guidance from hiring and statutory compliance to operational training.",
      icon: Layers,
    },
    {
      title: "Focus on Excellence",
      description: "Relentless commitment to academic quality, NAAC/NBA benchmarks, and global repute.",
      icon: Award,
    },
    {
      title: "Timely Placement",
      description: "Prompt, efficient recruitment processes ensuring zero semester disruptions.",
      icon: Clock,
    },
    {
      title: "Long-Term Partnership",
      description: "Dedicated to continuous institutional success, institutional turnarounds, and trusted advisory.",
      icon: Handshake,
    },
  ];

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-[#521D27] text-white border-b border-[#EFC269]/20 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="why-choose-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" strokeWidth="0.8" />
              <circle cx="0" cy="0" r="1.5" fill="#EFC269" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#why-choose-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#EFC269] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Institutional Excellence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Poppins'] tracking-tight leading-tight">
            Why Choose SRD?
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-white/85 font-medium leading-relaxed">
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
                className="group relative bg-black/25 backdrop-blur-xs rounded-2xl p-7 sm:p-8 shadow-xl hover:shadow-2xl hover:bg-black/35 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between border border-[#EFC269]/30 hover:border-[#EFC269]"
              >
                <div>
                  {/* Icon */}
                  <div className="w-13 h-13 rounded-xl bg-white/10 text-[#EFC269] group-hover:bg-[#EFC269] group-hover:text-[#521D27] transition-all duration-300 flex items-center justify-center mb-5 shadow-sm">
                    <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 stroke-[2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#EFC269] transition-colors font-['Poppins'] mb-2.5 leading-snug">
                    {point.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-stone-200/90 leading-relaxed">
                    {point.description}
                  </p>
                </div>

                {/* Footer Indicator */}
                <div className="pt-4 mt-5 border-t border-white/10 flex items-center justify-between text-xs font-semibold">
                  <span className="font-mono text-white/50 group-hover:text-[#EFC269] transition-colors">
                    0{idx + 1}
                  </span>
                  <span className="text-[#EFC269] group-hover:text-white font-bold transition-colors">
                    SRD Advantage
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
