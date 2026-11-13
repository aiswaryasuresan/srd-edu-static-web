import type { Metadata } from "next";
import Link from "next/link";
import { FileText } from "lucide-react";
import PageBanner from "@/components/shared/PageBanner";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms & Conditions | Corporate Framework",
  description: "Terms and conditions governing the use of SRD Edu Corporation's corporate website and educational advisory services.",
};

export default function TermsPage() {
  return (
    <div className="bg-white">
      <PageBanner
        title="Terms & Conditions"
        subtitle="Corporate Governance & Advisory Framework"
        description="Terms and conditions governing the use of SRD Edu Corporation's corporate website and institutional services."
        badge={{
          icon: FileText,
          label: "Corporate Terms",
        }}
        breadcrumbs={[{ label: "Terms & Conditions" }]}
      />

      <div className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        <div className="space-y-6 text-sm text-[#63595C] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#241E20] font-['Poppins']">1. Acceptance of Terms</h2>
            <p>
              By accessing and browsing the corporate website of SRD Edu Corporation, users and institutional representatives agree to comply with and be bound by these Terms and Conditions.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#241E20] font-['Poppins']">2. Scope of Services & Non-Guarantee Disclaimers</h2>
            <p>
              SRD Edu Corporation provides institutional development, skill facilitation, candidate employability preparation, HR staffing, and documentation coordination. In compliance with strict professional ethics:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Placement Services:</strong> SRD facilitates merit-based connections between employers and job seekers. SRD does NOT guarantee employment, job offers, or visa approvals.</li>
              <li><strong>Documentation & Legal Assistance:</strong> SRD provides administrative preparation and regulatory dossier coordination. SRD does NOT provide formal court legal representation, nor does it guarantee statutory approvals or affiliation grants from regulatory boards.</li>
              <li><strong>Skill Programmes:</strong> Program curation connects learners with global courses. Certain certifications are issued in collaboration with independent third-party partners.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#241E20] font-['Poppins']">3. Intellectual Property</h2>
            <p>
              All trademarks, emblem artwork, official logos, curriculum frameworks, and editorial content presented on this website are the proprietary intellectual property of SRD Edu Corporation. Unauthorized reproduction or scraping is strictly prohibited.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#241E20] font-['Poppins']">4. Governing Law</h2>
            <p>
              Any disputes arising from institutional agreements or corporate interactions shall be subject to the exclusive jurisdiction of the competent courts of India.
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
  );
}
