export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  description?: string;
  icon?: string;
  children?: NavItem[];
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string; badge?: string }[];
}

export interface ProductConfig {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: 'Live' | 'Beta';
  badge: string;
  href: string;
  iconName: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  heroSupportingText: string;
  features: { title: string; description: string; icon: string }[];
  faqs: { question: string; answer: string }[];
}

export interface SolutionConfig {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  heroSupportingText: string;
  challenges: { problem: string; solution: string }[];
  workflows: { step: number; title: string; description: string; product: string }[];
}

export interface FounderProfile {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  badge?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  content: string;
  targetKeyword: string;
  relatedProductHref: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  logo: string;
  headline: string;
  metrics: { label: string; value: string }[];
  challenge: string;
  solution: string;
  productsUsed: string[];
  quote?: { text: string; author: string; role: string };
  isComingSoon?: boolean;
}
