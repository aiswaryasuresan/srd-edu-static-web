import { Fragment } from "react";
import {
  Users,
  TrendingUp,
  GraduationCap,
  HeartHandshake,
  Search,
  FileText,
  ClipboardList,
  Share2,
  Settings,
  Handshake,
  ArrowRight,
} from "lucide-react";

export default function OurCommitment() {
  const pillars = [
    {
      title: "Quality Talent",
      description: "Skilled and experienced professionals.",
      icon: Users,
    },
    {
      title: "Institution Growth",
      description: "Building stronger and sustainable institutions.",
      icon: TrendingUp,
    },
    {
      title: "Academic Excellence",
      description: "Supporting better learning outcomes.",
      icon: GraduationCap,
    },
    {
      title: "Long-Term Partnership",
      description: "Growing together for a brighter future.",
      icon: HeartHandshake,
    },
  ];

  const processSteps = [
    { title: "Understand", icon: Search },
    { title: "Research", icon: FileText },
    { title: "Plan", icon: ClipboardList },
    { title: "Connect", icon: Share2 },
    { title: "Implement", icon: Settings },
    { title: "Support", icon: Handshake },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#501C29] text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EFC269]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section 1: Our Commitment */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#EFC269] text-xs font-bold uppercase tracking-wider mb-3">
            Our Core Promise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Poppins'] tracking-tight">
            Our Commitment
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#EFC269] font-medium">
            Your Growth, Our Responsibility
          </p>
          <div className="w-16 h-1 bg-[#EFC269] rounded-full mx-auto mt-4" />
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/15 hover:border-[#EFC269]/60 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#EFC269] text-[#2A0A14] flex items-center justify-center font-bold mb-5 shadow-md">
                    <Icon className="w-6 h-6 text-[#2A0A14]" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-['Poppins'] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#EFC269]/80 font-medium">
                  <span>Pillar</span>
                  <span className="font-bold text-white">0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section 2: Our Approach (Result-Oriented Process Flow) */}
        <div className="pt-10 border-t border-white/15">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-white font-['Poppins']">
              Our Approach
            </h3>
            <p className="text-sm text-white/70 mt-1">
              A Structured and Result-Oriented Process
            </p>
          </div>

          {/* Desktop Flow (sm:flex) */}
          <div className="hidden sm:flex items-start justify-between max-w-5xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
            {processSteps.map((step, idx) => (
              <Fragment key={idx}>
                <div className="w-20 sm:w-24 flex flex-col items-center text-center shrink-0">
                  <div className="w-14 h-14 rounded-full bg-white text-[#501C29] flex items-center justify-center shadow-lg hover:scale-105 transition-transform p-3">
                    <step.icon className="w-6 h-6 text-[#501C29]" />
                  </div>
                  <span className="text-xs font-bold text-white mt-2.5 font-['Poppins'] tracking-wide leading-tight">
                    {step.title}
                  </span>
                </div>

                {idx < processSteps.length - 1 && (
                  <div className="flex-1 flex items-center justify-center h-14 min-w-[20px]">
                    <ArrowRight className="w-4 h-4 text-[#EFC269] shrink-0" />
                  </div>
                )}
              </Fragment>
            ))}
          </div>

          {/* Mobile View: Balanced 2-Row Flow (sm:hidden) */}
          <div className="sm:hidden bg-black/20 p-5 rounded-2xl border border-white/10 space-y-5">
            {/* Row 1: Understand -> Research -> Plan */}
            <div className="flex items-start justify-between px-1">
              {processSteps.slice(0, 3).map((step, idx) => (
                <Fragment key={idx}>
                  <div className="flex flex-col items-center text-center w-18 shrink-0">
                    <div className="w-11 h-11 rounded-full bg-white text-[#501C29] flex items-center justify-center shadow-md p-2.5">
                      <step.icon className="w-5 h-5 text-[#501C29]" />
                    </div>
                    <span className="text-[11px] font-bold text-white mt-1.5 font-['Poppins'] leading-tight">
                      {step.title}
                    </span>
                  </div>
                  {idx < 2 && (
                    <div className="flex-1 flex items-center justify-center h-11 min-w-[16px]">
                      <ArrowRight className="w-4 h-4 text-[#EFC269] shrink-0" />
                    </div>
                  )}
                </Fragment>
              ))}
            </div>

            {/* Row 2: Connect -> Implement -> Support */}
            <div className="flex items-start justify-between px-1">
              {processSteps.slice(3, 6).map((step, idx) => (
                <Fragment key={idx}>
                  <div className="flex flex-col items-center text-center w-18 shrink-0">
                    <div className="w-11 h-11 rounded-full bg-white text-[#501C29] flex items-center justify-center shadow-md p-2.5">
                      <step.icon className="w-5 h-5 text-[#501C29]" />
                    </div>
                    <span className="text-[11px] font-bold text-white mt-1.5 font-['Poppins'] leading-tight">
                      {step.title}
                    </span>
                  </div>
                  {idx < 2 && (
                    <div className="flex-1 flex items-center justify-center h-11 min-w-[16px]">
                      <ArrowRight className="w-4 h-4 text-[#EFC269] shrink-0" />
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
