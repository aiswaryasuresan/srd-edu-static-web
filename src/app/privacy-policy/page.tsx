import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import PageBanner from "@/components/shared/PageBanner";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy | Corporate Governance",
  description: "Privacy Policy and institutional data governance practices of SRD Edu Corporation.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      <PageBanner
        title="Privacy Policy"
        subtitle="Corporate Governance & Data Protection"
        description="Learn how SRD Edu Corporation respects and protects the institutional, student, and corporate data across all our services."
        badge={{
          icon: ShieldCheck,
          label: "Corporate Governance",
        }}
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <div className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        <div className="space-y-6 text-sm text-[#63595C] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#241E20] font-['Poppins']">1. Introduction</h2>
            <p>
              SRD Edu Corporation (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to respecting and protecting the privacy of educational institutions, trustees, school leadership, students, and employers who interact with our corporate website ({companyInfo.contact.website}).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#241E20] font-['Poppins']">2. Information Collection</h2>
            <p>
              In Version 1.0 of this corporate website, personal and institutional data is submitted solely on a voluntary basis via our consultation enquiry forms (including full name, official email, telephone/WhatsApp contact, institution name, and service interests). We do not collect cookies for third-party ad tracking in this static version.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#241E20] font-['Poppins']">3. Institutional Data Usage</h2>
            <p>
              Information collected is used exclusively for:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Responding to institutional partnership and service consultations.</li>
              <li>Coordinating campus placement drives, faculty requirements, or skill workshops.</li>
              <li>Delivering requested corporate literature or regulatory documentation advisory.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#241E20] font-['Poppins']">4. Zero Data Commercialization</h2>
            <p>
              SRD Edu Corporation strictly maintains that student, faculty, and institutional records will never be rented, sold, or shared with unauthorized commercial data brokers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#241E20] font-['Poppins']">5. Contact Regarding Privacy</h2>
            <p>
              For inquiries regarding corporate data governance, contact our administrative desk at: <a href={`mailto:${companyInfo.contact.email}`} className="text-[#4A1525] underline font-medium">{companyInfo.contact.email}</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
  );
}
