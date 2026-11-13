import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-14 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#501C29] text-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          
          {/* Left Title */}
          <div className="lg:max-w-md text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Poppins'] leading-tight">
              Let’s Build a Better Educational Future Together.
            </h2>
          </div>

          {/* Divider Line (Desktop) */}
          <div className="hidden lg:block w-px h-16 bg-white/20 shrink-0" />

          {/* Supporting Copy */}
          <div className="text-center lg:text-left text-xs sm:text-sm text-white/90 max-w-md leading-relaxed">
            <p>
              Partner with SRD Edu Corporation for institutional growth, skilled people and greater opportunities.
            </p>
          </div>

          {/* Right Action Button */}
          <div className="shrink-0">
            <Link
              href="/contact?intent=partner"
              className="inline-flex items-center gap-2 bg-[#F5C64D] hover:bg-[#DCA42C] text-[#2A0A14] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
