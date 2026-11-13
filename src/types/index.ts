export interface NavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
  children?: NavItem[];
}

export interface ServiceCategory {
  title: string;
  description: string;
  items: string[];
  iconName?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BusinessVertical {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  corePositioning?: string;
  iconName: string;
  accentColor: string;
  heroImage: string;
  targetAudiences: string[];
  categories: ServiceCategory[];
  benefits: string[];
  process: ProcessStep[];
  faqs: FAQItem[];
  complianceNote?: string;
}

export interface SkillProgram {
  id: string;
  title: string;
  category: 'Technology & Digital' | 'Professional Development' | 'Vocational & Career';
  description: string;
  duration: string;
  format: string;
  targetAudience: string[];
  topics: string[];
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  institution: string;
  location: string;
  comment: string;
  rating: number;
  verified: boolean;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  clientType: string;
  summary: string;
  outcomes: string[];
  tags: string[];
  image: string;
}

export interface ResourceArticle {
  id: string;
  slug: string;
  title: string;
  category: 'Educational Insight' | 'Compliance & Regulatory' | 'Skill & Career' | 'Corporate Update';
  date: string;
  readTime: string;
  summary: string;
  content: string[];
}
