import Hero from "@/components/home/Hero";
import BusinessVerticals from "@/components/home/BusinessVerticals";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      {/* 1. Full-Width Hero Slider with Integrated Transparent Navbar */}
      <Hero />

      {/* 2. All 12 Educational Services (Bold, Spacious 3-Column Grid) */}
      <BusinessVerticals />

      {/* 3. Why Choose SRD: More Than Recruitment, A Long-Term Partnership (Primary Background) */}
      <WhyChooseUs />

      {/* 4. Bottom Call-to-Action / Registration Prompt */}
      <CTASection />
    </>
  );
}
