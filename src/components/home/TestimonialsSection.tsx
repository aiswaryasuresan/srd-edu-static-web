import { Star, Quote, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { clientTestimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#F8F7F5] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Institutional Trust"
          title="What Educational Leaders Say About SRD"
          subtitle="Direct reflections from school trustees, college principals, and institutional administrators who have partnered with SRD Edu Corporation."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {clientTestimonials.map((test) => (
            <div
              key={test.id}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-[#F5C64D] transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#F5C64D] text-[#F5C64D]"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#521D27]/20" />
                </div>

                <p className="text-xs sm:text-sm text-[#241E20] leading-relaxed italic">
                  &ldquo;{test.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100">
                <h4 className="text-sm font-bold text-[#241E20] font-['Poppins']">
                  {test.name}
                </h4>
                <p className="text-xs text-[#B8821B] font-medium">
                  {test.role}
                </p>
                <p className="text-xs text-[#63595C]">
                  {test.institution} ({test.location})
                </p>

                <div className="mt-2 flex items-center gap-1 text-[10px] text-green-700 font-medium">
                  <CheckCircle className="w-3 h-3 text-green-600" />
                  <span>Verified Institutional Partner</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
