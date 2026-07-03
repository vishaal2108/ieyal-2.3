# iEYAL Solutions — FINAL Website Architecture (SEO-Optimized)
**Status:** Final recommended version — supersedes the first draft
**Changes from draft:** merged mission-vision into About, moved Help Center out of Resources, fixed hyperlocal-delivery aliasing, added keyword-targeting layer to every page, added Title Tag / Meta Description / Primary Keyword / H1 for each page so content writers and dev team can build SEO-ready from day one.

---

## 1. Final Sitemap

```
Home (/)
│
├── Products (/products)
│   ├── Ownchat (/products/ownchat)
│   ├── Owncart (/products/owncart)
│   ├── OwnRewards (/products/ownrewards)
│   └── OwnTask (/products/owntask)
│
├── Solutions (/solutions)
│   ├── Restaurants & Food Business (/solutions/restaurants)
│   ├── Retail & D2C (/solutions/retail)
│   └── Local & Hyperlocal Delivery (/solutions/local-delivery)   ← renamed, see §3
│
├── Technology (/technology)
│
├── Company (/company)
│   ├── About Us (/company/about)                                 ← mission+vision merged in
│   ├── Culture (/company/culture)
│   ├── Leadership (/company/team)
│   ├── Milestones (/company/milestones)
│   └── Careers (/company/careers)
│       └── Open Roles (/company/careers/openings)
│
├── Resources (/resources)
│   ├── Blog (/resources/blog) → /resources/blog/[slug]
│   ├── Case Studies (/resources/case-studies) → /resources/case-studies/[slug]
│   └── Press Kit (/resources/press)
│
├── Help (/help)                                                   ← moved out of Resources, see §3
│
├── Pricing (/pricing)
├── Partners (/partners)
├── Investors (/investors)
├── Contact (/contact)
│
├── Legal
│   ├── /legal/privacy-policy
│   ├── /legal/terms
│   └── /legal/cookies
│
└── 404
```

---

## 2. Navigation & Footer (unchanged from draft — confirmed final)

**Nav:** Products (mega-menu) · Solutions · Technology · Company · Resources · Pricing · [Book a Demo button]
**Footer columns:** Brand/Contact · Products · Company · Resources+Help+Partners · Get Started (demo + newsletter)
**Footer trust badges (every page):** DPIIT Recognized Startup · Meta Business Partner · TANSEED 5.0 Winner

---

## 3. What Changed and Why

| Fix | Before | After | Reason |
|---|---|---|---|
| Mission/Vision | Standalone `/company/mission-vision` | Merged into `/company/about` | Two thin pages compete for the same search intent (keyword cannibalization); one strong page ranks better than two weak ones |
| Help Center | `/resources/help` | `/help` (root) | Support-intent searches ("ownchat not sending messages") are entirely different from resource-intent searches ("how to automate WhatsApp"); mixing them dilutes topical authority on both |
| Hyperlocal delivery slug | `/solutions/hyperlocal-delivery` | `/solutions/local-delivery` | SMB owners search "local delivery business," not "hyperlocal" — the internal deck term isn't the search term |
| Money keywords | Not targeted anywhere | Assigned to Home + Product pages (see §4) | Branded terms ("Ownchat") only convert people who already know you; generic terms ("WhatsApp CRM for small business") bring in new demand |

---

## 4. Page-by-Page SEO Targeting

*(Section-by-section content outline for each page — sequencing, visuals, components — is unchanged from the approved draft. This table is the SEO layer to sit on top of it: hand this to whoever writes title tags, meta descriptions, and H1s.)*

| Page | Primary Keyword | Secondary Keywords | Title Tag (≤60 chars) | Meta Description (≤155 chars) | H1 |
|---|---|---|---|---|---|
| **Home `/`** | WhatsApp business automation software | AI SaaS for small business, SMB tools India | iEYAL Solutions — WhatsApp-First SaaS for SMBs | Ownchat, Owncart, OwnRewards & OwnTask — one WhatsApp-native ecosystem to run and grow your small business. | Empowering Businesses Everywhere With World-Class Tech |
| **Products `/products`** | iEYAL product suite | SMB SaaS tools, WhatsApp business tools | Our Products — Ownchat, Owncart, OwnRewards & OwnTask | Explore iEYAL's ecosystem of WhatsApp-native tools built for small and medium businesses. | One Ecosystem, Four Ways to Grow |
| **Ownchat `/products/ownchat`** | WhatsApp CRM for small business | WhatsApp automation tool, WhatsApp Business API software | Ownchat — WhatsApp CRM, Automation & Campaigns | Automate WhatsApp chats, manage your team inbox, and run broadcast campaigns — all in one CRM built for SMBs. | WhatsApp Automation, CRM & Campaigns — All in One |
| **Owncart `/products/owncart`** | WhatsApp store builder | Shopify alternative India, WhatsApp checkout | Owncart — Shopify Alternative Built for WhatsApp Commerce | Sell online with WhatsApp-based checkout. A Shopify alternative built for India-first restaurants, retail & delivery. | A Shopify Alternative Built for India-First Commerce |
| **OwnRewards `/products/ownrewards`** | WhatsApp loyalty program software | customer retention tool, cashback app for retail | OwnRewards — Loyalty & Feedback on WhatsApp | Cashback, automated feedback, and referral journeys — smart loyalty built for growing retail chains. | Smart Loyalty & Feedback Journeys on WhatsApp |
| **OwnTask `/products/owntask`** | team task management software | SLA tracking tool, workflow automation SMB | OwnTask — Team Workflows, SLA Tracking & Task Automation | Organize everything and automate the rest — custom workflows, recurring tasks, and SLA tracking for growing teams. | Organize Everything. Automate the Rest. |
| **Solutions hub `/solutions`** | WhatsApp business software by industry | SMB software solutions | Solutions by Industry — Restaurants, Retail & Delivery | See how restaurants, retail brands, and local delivery businesses use iEYAL to grow. | Built for How Your Business Actually Works |
| **Restaurants `/solutions/restaurants`** | WhatsApp ordering system for restaurants | restaurant WhatsApp bot, restaurant CRM | WhatsApp Ordering & CRM for Restaurants — iEYAL | Take orders, manage loyalty, and automate customer chat — all on WhatsApp, built for restaurants. | WhatsApp Tools Built for Restaurants |
| **Retail `/solutions/retail`** | WhatsApp CRM for retail business | retail loyalty software, D2C WhatsApp tools | WhatsApp CRM & Commerce Tools for Retail — iEYAL | Run WhatsApp campaigns, sell online, and reward repeat customers — built for retail and D2C brands. | WhatsApp Tools Built for Retail & D2C |
| **Local delivery `/solutions/local-delivery`** | WhatsApp ordering for delivery business | local delivery software, hyperlocal delivery app | WhatsApp Tools for Local & Delivery Businesses — iEYAL | Manage orders, checkout, and delivery workflows on WhatsApp — built for local and hyperlocal delivery businesses. | WhatsApp Tools Built for Local Delivery |
| **Technology `/technology`** | WhatsApp Business API partner | AI automation platform, Meta Business Partner | Our Technology — AI, WhatsApp API & Platform | Meta Business Partner infrastructure, AI-driven automation, and API-ready architecture behind the iEYAL ecosystem. | The Technology Behind a Messaging-First Ecosystem |
| **About `/company/about`** | about iEYAL Solutions | SaaS company Tamil Nadu, SMB software company India | About Us — Our Mission, Vision & Story | Built from a Tier-3 town in Tamil Nadu, iEYAL brings enterprise-grade simplicity to small businesses worldwide. | Building From India, For the World |
| **Culture `/company/culture`** | iEYAL company culture | SaaS startup culture India | Our Culture — Built on Grit, Speed & Ownership | We don't pitch culture, we practice it. See how iEYAL's team works, ships, and grows together. | We Don't Pitch Culture. We Practice It. |
| **Team `/company/team`** | iEYAL founding team | SaaS startup founders Tamil Nadu | Leadership — The iEYAL Founding Team | Meet the founder-led team behind Ownchat, Owncart, OwnRewards & OwnTask. | A Founder-Led Team, Hands-On Every Day |
| **Milestones `/company/milestones`** | iEYAL Solutions awards | DPIIT recognized startup, TANSEED winner | Milestones & Recognition — iEYAL Solutions | DPIIT-recognized, TANSEED 5.0 winner, 200+ paying customers — see iEYAL's growth story. | Market Validation & Momentum |
| **Careers `/company/careers`** | careers at iEYAL Solutions | SaaS jobs Tamil Nadu, startup jobs India | Careers — Join iEYAL Solutions | We're a 22+ member team building a global SaaS ecosystem from Tamil Nadu. See open roles. | Build the Future of SMB Software With Us |
| **Blog `/resources/blog`** | WhatsApp business tips | SMB growth blog | Blog — WhatsApp Commerce & SMB Growth Insights | Practical guides on WhatsApp automation, AI for small business, and growing with iEYAL. | Insights for Growing Your Business on WhatsApp |
| **Case Studies `/resources/case-studies`** | iEYAL customer success stories | WhatsApp CRM case study | Case Studies — Real Results With iEYAL | See how restaurants, retailers, and delivery businesses grow using iEYAL's product suite. | Real Businesses, Real Results |
| **Press Kit `/resources/press`** | iEYAL Solutions press kit | iEYAL media assets | Press & Media Kit — iEYAL Solutions | Logos, brand assets, founder photos, and company boilerplate for press and partners. | Press & Media Resources |
| **Help `/help`** | Ownchat help center | Owncart support, iEYAL troubleshooting | Help Center — iEYAL Solutions Support | Find answers for Ownchat, Owncart, OwnRewards & OwnTask — guides, FAQs, and troubleshooting. | How Can We Help? |
| **Pricing `/pricing`** | Ownchat pricing | WhatsApp CRM pricing, SMB SaaS pricing India | Pricing — Ownchat, Owncart, OwnRewards & OwnTask | Simple, transparent pricing for every iEYAL product — built for small and growing businesses. | Simple Pricing for Every Stage of Your Business |
| **Partners `/partners`** | Meta Business Partner agency | WhatsApp reseller program | Partners — Become a Meta Business Partner Reseller | Partner with iEYAL to bring WhatsApp-native SaaS tools to your clients and network. | Partner With Us |
| **Investors `/investors`** | iEYAL Solutions investors | SaaS startup investment India | Investors — iEYAL Solutions | DPIIT-recognized, TANSEED-backed, and scaling across Southeast Asia and MENA. Investor relations. | Investing in the Future of SMB Software |
| **Contact `/contact`** | contact iEYAL Solutions | book a demo, talk to sales | Contact Us / Book a Demo — iEYAL Solutions | Talk to our team — whether you're a customer, partner, investor, or future teammate. | Let's Build Together |

---

## 5. New: Money-Keyword Content Plan (fills the gap flagged earlier)

Branded pages alone won't bring in people who don't already know iEYAL. Recommend 3 pillar blog posts, published early, each targeting one head term and internally linking to the relevant product page:

| Blog Post (pillar) | Target Keyword | Links to |
|---|---|---|
| "WhatsApp Business API vs. WhatsApp CRM: What Small Businesses Actually Need" | WhatsApp CRM for small business | `/products/ownchat` |
| "Best Shopify Alternatives for India-First Businesses in 2026" | Shopify alternative India | `/products/owncart` |
| "How to Build a WhatsApp Loyalty Program (Without Losing Your Mind)" | WhatsApp loyalty program | `/products/ownrewards` |

---

## 6. Final User Journey (unchanged, confirmed)

```
Home → Solutions/[Industry] or Products/[Product] → Pricing/Case Study → Contact (Book a Demo)
```
Every page keeps the sticky "Book a Demo" CTA in nav — no page is more than 3 clicks from Home.

---

## 7. Outstanding Content Gaps (carried over, still open)

- [ ] Real customer testimonials/logos (Home, Case Studies)
- [ ] Exact founding date + dated timeline for Milestones
- [ ] Partner Program details from Business/Growth lead
- [ ] Careers/Benefits content from HR
- [ ] Legal pages drafted by counsel
- [ ] Confirm Ownchat's real pricing tiers vs. beta-access messaging for the other three products

---

*This is the final structure + SEO layer. Full section-by-section content outlines (what goes in each section, visuals, components) remain as approved in the first draft — only slugs, merges, and keyword targeting have changed.*
