import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { academicProgrammesData } from "@/data/services";

export const metadata: Metadata = {
  title: "Academic Programmes & Systems | SRD Edu Corporation",
  description: academicProgrammesData.shortDescription,
};

export default function AcademicProgrammesPage() {
  return <ServicePageTemplate data={academicProgrammesData} />;
}
