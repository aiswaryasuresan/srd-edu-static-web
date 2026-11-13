import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { infrastructureFinanceData } from "@/data/services";

export const metadata: Metadata = {
  title: "Infrastructure & Finance Support | SRD Edu Corporation",
  description: infrastructureFinanceData.shortDescription,
};

export default function InfrastructureFinanceSupportPage() {
  return <ServicePageTemplate data={infrastructureFinanceData} />;
}
