import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { skillDevelopmentData } from "@/data/services";

export const metadata: Metadata = {
  title: "Skill Development Project | SRD Edu Corporation",
  description: skillDevelopmentData.shortDescription,
};

export default function SkillDevelopmentProjectPage() {
  return <ServicePageTemplate data={skillDevelopmentData} />;
}
