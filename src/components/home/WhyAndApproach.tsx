import { Fragment } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Search,
  FileText,
  ClipboardList,
  Share2,
  Settings,
  Handshake,
  ArrowRight
} from "lucide-react";

export default function WhyAndApproach() {
  const differentiators = [
    "Integrated Educational Solutions",
    "Institution-Focused Approach",
    "Professional & Experienced Support",
    "Global Opportunity Orientation",
    "Customized & Practical Solutions",
    "Long-Term Partnership & Support",
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
    <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Campus Photo + Why Choose SRD? */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            {/* Campus Photo */}
            <div className="sm:col-span-5 relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/hero/campus-building.jpg"
                alt="Modern Institutional Campus Architecture"
                fill
                sizes="(max-width: 640px) 100vw, 250px"
                className="object-cover"
              />
            </div>

            {/* Why Choose SRD Content */}
            <div className="sm:col-span-7 space-y-4">
              <h3 className="text-2xl font-bold text-[#501C29] font-['Poppins']">
                Why Choose SRD?
              </h3>
              <div className="space-y-2.5">
                {differentiators.map((diff, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#241E20]">
                    <div className="w-5 h-5 rounded-full bg-[#FFF7E6] text-[#B8821B] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[#B8821B]" />
                    </div>
                    <span className="font-medium">{diff}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Our Approach Process Flow */}
          <div className="lg:col-span-6 space-y-4 lg:pl-4 border-t lg:border-t-0 lg:border-l border-gray-200 pt-8 lg:pt-0">
            <div>
              <h3 className="text-2xl font-bold text-[#501C29] font-['Poppins']">
                Our Approach
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                A Structured and Result-Oriented Process
              </p>
            </div>

            {/* Desktop Flow (sm:flex) */}
            <div className="hidden sm:flex items-center justify-between pt-4">
              {processSteps.map((step, idx) => (
                <Fragment key={idx}>
                  <div className="flex flex-col items-center text-center shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#501C29] text-white flex items-center justify-center shadow-sm hover:scale-105 transition-transform">
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[11px] font-bold text-[#241E20] mt-2 font-['Poppins']">
                      {step.title}
                    </span>
                  </div>

                  {idx < processSteps.length - 1 && (
                    <div className="flex-1 flex items-center justify-center mb-4 min-w-[20px]">
                      <ArrowRight className="w-4 h-4 text-[#B8821B] shrink-0" />
                    </div>
                  )}
                </Fragment>
              ))}
            </div>

            {/* Mobile View: Balanced 2-Row Flow (sm:hidden) */}
            <div className="sm:hidden pt-4 space-y-5">
              {/* Row 1: Understand -> Research -> Plan */}
              <div className="flex items-center justify-between px-2">
                {processSteps.slice(0, 3).map((step, idx) => (
                  <Fragment key={idx}>
                    <div className="flex flex-col items-center text-center w-16 shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#501C29] text-white flex items-center justify-center shadow-md">
                        <step.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-[11px] font-bold text-[#241E20] mt-1.5 font-['Poppins']">
                        {step.title}
                      </span>
                    </div>
                    {idx < 2 && (
                      <div className="flex-1 flex items-center justify-center mb-5">
                        <ArrowRight className="w-4 h-4 text-[#B8821B] shrink-0" />
                      </div>
                    )}
                  </Fragment>
                ))}
              </div>

              {/* Row 2: Connect -> Implement -> Support */}
              <div className="flex items-center justify-between px-2">
                {processSteps.slice(3, 6).map((step, idx) => (
                  <Fragment key={idx}>
                    <div className="flex flex-col items-center text-center w-16 shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#501C29] text-white flex items-center justify-center shadow-md">
                        <step.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-[11px] font-bold text-[#241E20] mt-1.5 font-['Poppins']">
                        {step.title}
                      </span>
                    </div>
                    {idx < 2 && (
                      <div className="flex-1 flex items-center justify-center mb-5">
                        <ArrowRight className="w-4 h-4 text-[#B8821B] shrink-0" />
                      </div>
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
