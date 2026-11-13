import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { competitiveExamData } from "@/data/services";

export const metadata: Metadata = {
  title: "Competitive Exam Support | SRD Edu Corporation",
  description: competitiveExamData.shortDescription,
};

export default function CompetitiveExamSupportPage() {
  return <ServicePageTemplate data={competitiveExamData} />;
}
