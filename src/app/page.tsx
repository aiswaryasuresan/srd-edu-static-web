import Hero from "@/components/home/Hero";
import BusinessVerticals from "@/components/home/BusinessVerticals";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OurCommitment from "@/components/home/OurCommitment";
import CTASection from "@/components/home/CTASection";
import WhoWeServe from "@/components/home/WhoWeServe";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import UpdatesSection from "@/components/home/UpdatesSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Full-Width Hero Slider with Integrated Transparent Navbar */}
      <Hero />

      {/* 2. Comprehensive Services for the Education Ecosystem (5 Cards) */}
      <BusinessVerticals />

      {/* 3. Why Choose SRD: More Than Recruitment, A Long-Term Partnership (6 Cards) */}
      <WhyChooseUs />

      {/* 4. Our Commitment: Your Growth, Our Responsibility (4 Pillars + Result-Oriented Approach) */}
      <OurCommitment />

      {/* 5. Bottom Rounded Call-to-Action Banner */}
      <CTASection />

      {/* 6. Supporting Institutional Portals */}
      <WhoWeServe />
      <PortfolioPreview />
      <TestimonialsSection />
      <UpdatesSection />
    </>
  );
}
