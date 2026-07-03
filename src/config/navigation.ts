import { NavItem, FooterColumn } from '@/types';

export const PRIMARY_NAV: NavItem[] = [
  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "Ownchat",
        href: "/products/ownchat",
        badge: "Live",
        description: "WhatsApp CRM, Automation & Team Inbox",
        icon: "MessageSquare",
      },
      {
        label: "Owncart",
        href: "/products/owncart",
        badge: "Beta",
        description: "Shopify alternative built for WhatsApp checkout",
        icon: "ShoppingCart",
      },
      {
        label: "OwnRewards",
        href: "/products/ownrewards",
        badge: "Beta",
        description: "Automated cashback, feedback & referral journeys",
        icon: "Gift",
      },
      {
        label: "OwnTask",
        href: "/products/owntask",
        badge: "Beta",
        description: "Team workflows, SLA tracking & recurring task automation",
        icon: "CheckSquare",
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      {
        label: "Restaurants & Food",
        href: "/solutions/restaurants",
        description: "Take orders, manage loyalty, and automate chat on WhatsApp",
        icon: "Utensils",
      },
      {
        label: "Retail & D2C",
        href: "/solutions/retail",
        description: "Run broadcast campaigns, sell online, and reward repeat customers",
        icon: "ShoppingBag",
      },
      {
        label: "Local & Delivery",
        href: "/solutions/local-delivery",
        description: "Manage location-aware orders, checkout, and delivery workflows",
        icon: "Truck",
      },
    ],
  },
  {
    label: "Technology",
    href: "/technology",
  },
  {
    label: "Company",
    href: "/company",
    children: [
      { label: "About Us", href: "/company/about", description: "Our Mission, Vision & Tier-3 Town Story", icon: "Users" },
      { label: "Culture", href: "/company/culture", description: "Built on Grit, Speed & Ownership", icon: "Heart" },
      { label: "Leadership", href: "/company/team", description: "Meet our hands-on founding team", icon: "UserCheck" },
      { label: "Milestones", href: "/company/milestones", description: "DPIIT recognized & TANSEED 5.0 winner", icon: "Award" },
      { label: "Careers", href: "/company/careers", description: "Join our 22+ member growing team", icon: "Briefcase" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Blog", href: "/resources/blog", description: "Practical guides on WhatsApp commerce & AI", icon: "BookOpen" },
      { label: "Case Studies", href: "/resources/case-studies", description: "Real results from 200+ paying customers", icon: "FileText" },
      { label: "Help Center", href: "/help", description: "Guides, FAQs, and product troubleshooting", icon: "HelpCircle" },
      { label: "Press Kit", href: "/resources/press", description: "Logos, brand assets & company boilerplate", icon: "Download" },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Products",
    links: [
      { label: "Ownchat", href: "/products/ownchat", badge: "Live" },
      { label: "Owncart", href: "/products/owncart", badge: "Beta" },
      { label: "OwnRewards", href: "/products/ownrewards", badge: "Beta" },
      { label: "OwnTask", href: "/products/owntask", badge: "Beta" },
      { label: "All Products Hub", href: "/products" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Restaurants & Food", href: "/solutions/restaurants" },
      { label: "Retail & D2C Brands", href: "/solutions/retail" },
      { label: "Local & Delivery", href: "/solutions/local-delivery" },
      { label: "Solutions Hub", href: "/solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/company/about" },
      { label: "Culture", href: "/company/culture" },
      { label: "Leadership Team", href: "/company/team" },
      { label: "Milestones", href: "/company/milestones" },
      { label: "Careers", href: "/company/careers" },
      { label: "Investors", href: "/investors" },
    ],
  },
  {
    title: "Resources & Help",
    links: [
      { label: "Blog Insights", href: "/resources/blog" },
      { label: "Case Studies", href: "/resources/case-studies" },
      { label: "Help Center", href: "/help" },
      { label: "Press & Media Kit", href: "/resources/press" },
      { label: "Partner Program", href: "/partners" },
      { label: "Technology Foundation", href: "/technology" },
    ],
  },
];

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Cookie Policy", href: "/legal/cookies" },
];
