import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { documentLegalData } from "@/data/services";

export const metadata: Metadata = {
  title: "Document & Legal Support | SRD Edu Corporation",
  description: documentLegalData.shortDescription,
};

export default function DocumentationLegalPage() {
  return <ServicePageTemplate data={documentLegalData} />;
}
