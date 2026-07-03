// Automatically import all mascot images using Vite's import.meta.glob
const kiboGlob = import.meta.glob('./*.{jpeg,jpg,png}', { eager: true, import: 'default' }) as Record<string, string>;

// Helper to safely find image by substring match
const getKiboImg = (keyword: string): string => {
  const match = Object.entries(kiboGlob).find(([path]) => 
    path.toLowerCase().includes(keyword.toLowerCase())
  );
  return match ? match[1] : '';
};

export const KIBO_MASCOTS = {
  // Core Mascot representations
  tshirt: getKiboImg('wearing_t-shirt_2026') || getKiboImg('t-shirt_2026') || Object.values(kiboGlob)[0],
  laptop: getKiboImg('laptop'),
  multitasking: getKiboImg('multitasking'),
  growth: getKiboImg('business_growt') || getKiboImg('presenting'),
  expression: getKiboImg('expression'),
  party: getKiboImg('party'),
  error: getKiboImg('error'),
  wrench: getKiboImg('wrench'),
  headset: getKiboImg('headset'),
  meeting: getKiboImg('meeting'),
  
  // Product specific
  whatsapp: getKiboImg('whatsapp') || getKiboImg('broadcast') || getKiboImg('replies'),
  tasks: getKiboImg('task_board') || getKiboImg('timeline') || getKiboImg('multitasking'),
  cart: getKiboImg('packing') || getKiboImg('inventory') || getKiboImg('launch'),
  
  // Service & Automation specific
  automation: getKiboImg('manufacturing') || getKiboImg('restaurant') || getKiboImg('replies'),
  crm: getKiboImg('crm') || getKiboImg('analytics'),
  support: getKiboImg('support') || getKiboImg('headset') || getKiboImg('meeting'),
  marketing: getKiboImg('marketin') || getKiboImg('broadcast'),
  finance: getKiboImg('finance'),
  healthcare: getKiboImg('healthcare'),

  // All images array for dynamic usage / carousels
  all: Object.values(kiboGlob),
};
