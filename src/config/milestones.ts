import { Milestone, BlogPost, CaseStudy } from '@/types';
import { CUSTOMER_LOGOS_MAP } from '@/utils/assets';

export const MILESTONES_CONFIG: Milestone[] = [
  {
    year: "Inception",
    title: "Founded in Thiruvarur, Tamil Nadu",
    description: "Started with a simple observation: enterprise tools are too complex and costly for small businesses. We set out to build a messaging-native alternative from scratch.",
    badge: "Tier-3 Town Roots",
  },
  {
    year: "Recognition",
    title: "DPIIT Recognized Startup",
    description: "Officially recognized by the Department for Promotion of Industry and Internal Trade (Government of India) for technological innovation in SaaS.",
    badge: "Govt of India Recognized",
  },
  {
    year: "Grant Award",
    title: "TANSEED 5.0 Grant Winner",
    description: "Selected among top startups in Tamil Nadu to receive the prestigious TANSEED 5.0 seed grant award (₹10 Lakhs) for scalable business impact.",
    badge: "₹10L Winner",
  },
  {
    year: "Partnership",
    title: "Official Meta Business Partner",
    description: "Secured official Meta Business Partner credential, granting direct API access, enhanced reliability, and enterprise-grade WhatsApp security.",
    badge: "Meta Partner",
  },
  {
    year: "Scale",
    title: "200+ Paying Customers Globally",
    description: "Powering daily chat, commerce, loyalty, and operational workflows for restaurants, retail chains, and delivery businesses across India, SEA, and MENA.",
    badge: "Live Traction",
  },
  {
    year: "Team Growth",
    title: "22+ Full-Time Specialists",
    description: "Grew into a multidisciplinary in-house engineering, UI/UX, infrastructure, and customer growth team driving rapid Build-Ship-Learn cycles.",
    badge: "In-House Team",
  },
];

export const BLOG_POSTS_CONFIG: BlogPost[] = [
  {
    slug: "whatsapp-business-api-vs-whatsapp-crm",
    title: "WhatsApp Business API vs. WhatsApp CRM: What Small Businesses Actually Need",
    category: "WhatsApp Commerce",
    date: "June 28, 2026",
    author: "Dinesh Kumar",
    readTime: "5 min read",
    excerpt: "Understanding the difference between bare-metal WhatsApp API access and an intelligent multi-agent CRM tailored for small business growth.",
    targetKeyword: "WhatsApp CRM for small business",
    relatedProductHref: "/products/ownchat",
    content: `
# WhatsApp Business API vs. WhatsApp CRM: What Small Businesses Actually Need

When small business owners start scaling their customer communications on WhatsApp, they often run into confusing terminology: **WhatsApp Business App**, **WhatsApp Business API**, and **WhatsApp CRM**. 

While the free WhatsApp Business App works well for a solo proprietor handling 10 messages a day, it quickly breaks down when you have multiple staff members, hundreds of customer inquiries, and automated promotional broadcasts to manage.

## Why Bare API Access Isn't Enough
The WhatsApp Business API (provided by Meta) is simply an infrastructure pipe. It has no user interface, no inbox, no analytics, and no automated chatbot builder out of the box. To use it, you need software layered on top.

## Enter Ownchat: The All-In-One WhatsApp CRM
This is where **Ownchat** bridges the gap. By combining official Meta Business Partner API infrastructure with an intuitive no-code Flow Builder and shared team inbox, Ownchat gives small businesses enterprise-grade superpowers without needing an IT department.
    `,
  },
  {
    slug: "best-shopify-alternatives-india-first-businesses-2026",
    title: "Best Shopify Alternatives for India-First Businesses in 2026",
    category: "AI & Automation",
    date: "June 20, 2026",
    author: "Haje Abudhahir",
    readTime: "6 min read",
    excerpt: "Why traditional e-commerce websites suffer from 98% drop-off in India, and how conversational WhatsApp checkout is transforming D2C sales.",
    targetKeyword: "Shopify alternative India",
    relatedProductHref: "/products/owncart",
    content: `
# Best Shopify Alternatives for India-First Businesses in 2026

Traditional e-commerce platforms like Shopify were built for Western desktop buying habits: browsing large catalogs, filling out multi-step shipping forms, and entering credit card details. 

In India and emerging markets, buyer behavior is dramatically different: shoppers want instant answers, trust conversational engagement, and prefer 1-click checkout via UPI directly where they spend their time—on WhatsApp.

## The Conversational Commerce Advantage
With **Owncart**, businesses can embed digital catalogs and instant UPI payment links directly inside WhatsApp conversations. Conversion rates jump from a typical 2% on mobile websites to over 25% within WhatsApp chats.
    `,
  },
  {
    slug: "how-to-build-a-whatsapp-loyalty-program",
    title: "How to Build a WhatsApp Loyalty Program (Without Losing Your Mind)",
    category: "SMB Growth Stories",
    date: "June 12, 2026",
    author: "Mohamed Rafiyudeen",
    readTime: "4 min read",
    excerpt: "Say goodbye to paper punch cards and standalone loyalty apps. Discover how automated cashback rules on WhatsApp skyrocket repeat customer revenue.",
    targetKeyword: "WhatsApp loyalty program",
    relatedProductHref: "/products/ownrewards",
    content: `
# How to Build a WhatsApp Loyalty Program (Without Losing Your Mind)

Customer retention is the lifeblood of retail and restaurant businesses. Yet, traditional loyalty solutions—like paper punch cards or custom standalone mobile apps—suffer from massive friction. Customers lose paper cards, and nobody wants to download a 50MB app just to earn 5% cashback at a local cafe.

## Frictionless Loyalty with OwnRewards
**OwnRewards** turns your customer's WhatsApp phone number into their permanent loyalty wallet. Whenever they make a purchase, they automatically receive a WhatsApp message confirming their cashback balance. Next time they shop, redeeming rewards is as simple as replying to the chat.
    `,
  },
];

export const CASE_STUDIES_CONFIG: CaseStudy[] = [
  {
    slug: "kurinji-retails-whatsapp-automation",
    client: "Kurinji Retails",
    industry: "Retail & D2C",
    logo: CUSTOMER_LOGOS_MAP.kurinji,
    headline: "How Kurinji Retails Achieved 4.2x ROI on WhatsApp Broadcast Campaigns",
    metrics: [
      { label: "Campaign Open Rate", value: "96.4%" },
      { label: "Repeat Order Growth", value: "+38%" },
      { label: "Support Resolution Time", value: "-65%" },
    ],
    challenge: "Managing thousands of monthly customer queries across multiple retail branches while struggling with low email open rates for seasonal sales promotional announcements.",
    solution: "Deployed Ownchat for centralized multi-agent customer support and targeted broadcast messaging, paired with OwnRewards for automated customer cashback notifications.",
    productsUsed: ["Ownchat", "OwnRewards"],
    quote: {
      text: "iEYAL transformed how we talk to our customers. Our promotional broadcasts on WhatsApp get opened almost instantly, and repeat sales have climbed 38% without increasing our ad spend.",
      author: "Senthil Nathan",
      role: "Managing Director, Kurinji Retails",
    },
  },
  {
    slug: "zam-zam-restaurant-direct-ordering",
    client: "Zam Zam Restaurant Chain",
    industry: "Restaurants & Food",
    logo: CUSTOMER_LOGOS_MAP.zamzam,
    headline: "Zam Zam Cuts Third-Party Aggregator Commissions by 30% with Owncart",
    metrics: [
      { label: "Commission Saved", value: "100%" },
      { label: "Direct WhatsApp Orders", value: "1,200+/mo" },
      { label: "Kitchen SLA Compliance", value: "99.1%" },
    ],
    challenge: "High 25–30% commissions paid to food delivery aggregators were destroying profit margins on takeaway and home delivery orders.",
    solution: "Implemented Owncart interactive menu ordering via WhatsApp and OwnTask kitchen display boards for real-time delivery rider coordination.",
    productsUsed: ["Owncart", "OwnTask"],
    quote: {
      text: "We used to lose a third of our revenue to delivery apps. With Owncart, our regular customers order directly on WhatsApp with zero commissions, and our kitchen runs smoother than ever.",
      author: "Abdul Rahman",
      role: "Operations Head, Zam Zam",
    },
  },
  {
    slug: "roshan-bags-omnichannel-loyalty",
    client: "Roshan Bags",
    industry: "Retail & Commerce",
    logo: CUSTOMER_LOGOS_MAP.roshan,
    headline: "Roshan Bags Unifies Offline Store and Online WhatsApp Orders with One Loyalty Wallet",
    metrics: [
      { label: "Customer Enrollment", value: "14,000+" },
      { label: "Google 5-Star Reviews", value: "+450" },
      { label: "Customer Retention Rate", value: "84%" },
    ],
    challenge: "No system to track whether in-store retail buyers were returning online or referring friends.",
    solution: "Activated OwnRewards for automated WhatsApp cashback balance alerts and 1-click review generation after purchase.",
    productsUsed: ["OwnRewards", "Ownchat"],
    quote: {
      text: "Our customers love seeing their cashback wallet right inside WhatsApp. It feels premium, simple, and has helped us generate over 450 five-star Google reviews organically.",
      author: "Priya Mahesh",
      role: "Brand Director, Roshan Bags",
    },
  },
];
