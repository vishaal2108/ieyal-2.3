import { SolutionConfig } from '@/types';

export const SOLUTIONS_CONFIG: SolutionConfig[] = [
  {
    id: "restaurants",
    name: "Restaurants & Food Business",
    slug: "restaurants",
    tagline: "WhatsApp Ordering & CRM for Restaurants",
    description: "Take orders, manage loyalty, and automate customer chat — all on WhatsApp, built for restaurants.",
    seoTitle: "WhatsApp Ordering & CRM for Restaurants — iEYAL Solutions",
    seoDescription: "Take orders, manage loyalty, and automate customer chat — all on WhatsApp, built for restaurants.",
    h1: "WhatsApp Tools Built for Restaurants",
    heroSupportingText: "Eliminate 30% third-party aggregator commissions. Turn your restaurant's WhatsApp number into your most profitable direct ordering channel and automated loyalty engine.",
    challenges: [
      {
        problem: "High Aggregator Commissions (25–30%)",
        solution: "Drive direct customer ordering on WhatsApp with zero commission per transaction using Owncart.",
      },
      {
        problem: "No Access to Customer Data",
        solution: "Own your customer database and build automated repeat-engagement campaigns with Ownchat.",
      },
      {
        problem: "Manual Table Reservation Queries",
        solution: "Let AI auto-reply to menu inquiries, table bookings, and location hours instantly 24/7.",
      },
    ],
    workflows: [
      { step: 1, title: "Customer Scans QR or Messages on WhatsApp", description: "Dine-in or takeaway customers message your brand on WhatsApp to view the interactive digital menu.", product: "Ownchat" },
      { step: 2, title: "Instant In-Chat Checkout & UPI Payment", description: "Customer selects dishes and completes payment directly inside WhatsApp in seconds.", product: "Owncart" },
      { step: 3, title: "Automated Kitchen SLA Tracking", description: "Kitchen display triggers ticket alerts while customer receives live prep updates.", product: "OwnTask" },
      { step: 4, title: "Post-Meal Cashback & 5-Star Review Request", description: "System credits cashback balance and invites customer to rate their dining experience.", product: "OwnRewards" },
    ],
  },
  {
    id: "retail",
    name: "Retail & D2C Brands",
    slug: "retail",
    tagline: "WhatsApp CRM & Commerce Tools for Retail",
    description: "Run WhatsApp campaigns, sell online, and reward repeat customers — built for retail and D2C brands.",
    seoTitle: "WhatsApp CRM & Commerce Tools for Retail — iEYAL Solutions",
    seoDescription: "Run WhatsApp campaigns, sell online, and reward repeat customers — built for retail and D2C brands.",
    h1: "WhatsApp Tools Built for Retail & D2C",
    heroSupportingText: "Convert one-time shoppers into lifelong brand advocates. Combine high-converting WhatsApp promotional broadcasts with instant digital checkout and intelligent loyalty tiers.",
    challenges: [
      {
        problem: "Low Email Open Rates (<15%)",
        solution: "Achieve 95%+ open rates and 40%+ click-through rates with WhatsApp promotional campaigns via Ownchat.",
      },
      {
        problem: "Cart Abandonment & Friction",
        solution: "Recover abandoned carts automatically with personalized WhatsApp reminders and 1-click checkout.",
      },
      {
        problem: "Fragmented Offline/Online Loyalty",
        solution: "Unify your in-store retail shoppers and online D2C buyers under a single WhatsApp phone-number loyalty wallet.",
      },
    ],
    workflows: [
      { step: 1, title: "New Collection WhatsApp Broadcast", description: "Send VIP segments a sneak-peek video broadcast of your latest product arrival.", product: "Ownchat" },
      { step: 2, title: "In-Chat Catalog Selection", description: "Shopper selects color, size, and quantity directly inside the chat window without website lag.", product: "Owncart" },
      { step: 3, title: "Automated Dispatch Notification", description: "Warehouse team processes fulfillment while customer receives real-time courier tracking updates.", product: "OwnTask" },
      { step: 4, title: "Tiered Loyalty & Next-Purchase Voucher", description: "Shopper earns points and receives an automated incentive for their next purchase.", product: "OwnRewards" },
    ],
  },
  {
    id: "local-delivery",
    name: "Local & Delivery Businesses",
    slug: "local-delivery",
    tagline: "WhatsApp Tools for Local & Delivery Businesses",
    description: "Manage orders, checkout, and delivery workflows on WhatsApp — built for local and hyperlocal delivery businesses.",
    seoTitle: "WhatsApp Tools for Local & Delivery Businesses — iEYAL Solutions",
    seoDescription: "Manage orders, checkout, and delivery workflows on WhatsApp — built for local and hyperlocal delivery businesses.",
    h1: "WhatsApp Tools Built for Local Delivery",
    heroSupportingText: "Streamline hyperlocal logistics, grocery delivery, and home services. Automate order intake, coordinate delivery riders, and maintain real-time SLA transparency—all via WhatsApp.",
    challenges: [
      {
        problem: "Chaotic Order Taking via Phone/Chat",
        solution: "Replace messy voice calls and manual notes with structured digital ordering flows via Owncart.",
      },
      {
        problem: "Lack of Delivery Tracking & Coordination",
        solution: "Assign delivery jobs to field riders and send automated ETA updates to customers via OwnTask.",
      },
      {
        problem: "Inconsistent Customer Retention",
        solution: "Build neighborhood loyalty with automated weekly subscription renewals and cashback incentives.",
      },
    ],
    workflows: [
      { step: 1, title: "Structured Order Intake on WhatsApp", description: "Customer selects daily essentials or local service packages from your WhatsApp interactive menu.", product: "Owncart" },
      { step: 2, title: "Automated Location & Delivery Fee Calculation", description: "System checks distance and confirms order total with instant payment links.", product: "Ownchat" },
      { step: 3, title: "Rider SLA Assignment & Live Dispatch", description: "Delivery partner receives WhatsApp dispatch alert with navigation link and customer contact.", product: "OwnTask" },
      { step: 4, title: "Instant Delivery Confirmation & Rating", description: "Upon drop-off, customer confirms receipt and rates rider promptness.", product: "OwnRewards" },
    ],
  },
];
