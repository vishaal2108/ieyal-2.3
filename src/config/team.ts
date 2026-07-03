import { FounderProfile } from '@/types';
import { FOUNDER_IMAGES } from '@/utils/assets';

export const FOUNDERS_CONFIG: FounderProfile[] = [
  {
    name: "Dinesh Kumar",
    role: "Co-Founder & Chief Executive Officer",
    image: FOUNDER_IMAGES.dinesh,
    bio: "Visionary product strategist driving iEYAL's mission to democratize enterprise-grade AI and WhatsApp automation for small and medium businesses across India and global markets.",
    linkedin: "https://linkedin.com/in/dineshkumar-ieyal",
    twitter: "https://x.com/dineshkumar_ieyal",
  },
  {
    name: "Haje Abudhahir",
    role: "Co-Founder & Chief Technology Officer",
    image: FOUNDER_IMAGES.haje,
    bio: "Chief architect behind iEYAL's WhatsApp-native platform, high-throughput messaging infrastructure, and real-time AI response engines built on official Meta Business Partner APIs.",
    linkedin: "https://linkedin.com/in/hajeabudhahir-ieyal",
    twitter: "https://x.com/haje_ieyal",
  },
  {
    name: "Mohamed Rafiyudeen",
    role: "Co-Founder & Chief Operating Officer",
    image: FOUNDER_IMAGES.mohamed,
    bio: "Operations and customer success leader responsible for scaling iEYAL from a Tier-3 town in Tamil Nadu to powering daily operations for 200+ paying businesses globally.",
    linkedin: "https://linkedin.com/in/mohamedrafiyudeen-ieyal",
    twitter: "https://x.com/rafiyudeen_ieyal",
  },
];

export const COMPANY_VALUES = [
  {
    title: "Purpose-Built for SMBs",
    description: "Every product is designed from scratch for small and medium businesses — not a stripped-down enterprise tool.",
    icon: "Target",
  },
  {
    title: "Fully In-House Team",
    description: "UI/UX, engineering, infrastructure, and growth — all built and owned in-house, so quality never depends on a third party.",
    icon: "Cpu",
  },
  {
    title: "Global DNA, Small-Town Discipline",
    description: "We think globally in ambition and locally in execution — fast, careful, and close to our customers from Thiruvarur, Tamil Nadu.",
    icon: "Globe",
  },
  {
    title: "Messaging-Native & Mobile-First",
    description: "Built for WhatsApp and mobile from day one, with API-ready architecture underneath.",
    icon: "MessageCircle",
  },
  {
    title: "Fast Build-Ship-Learn Cycles",
    description: "Real user feedback drives our roadmap — we ship fast and adjust faster to ensure client success.",
    icon: "RefreshCw",
  },
];
