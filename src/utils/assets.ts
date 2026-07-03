// Automatically import all company assets using Vite's import.meta.glob
const kiboGlob = import.meta.glob('../assets/kibo/*.{jpeg,jpg,png}', { eager: true, import: 'default' }) as Record<string, string>;
const customersGlob = import.meta.glob('../assets/customers/*.{jpeg,jpg,png}', { eager: true, import: 'default' }) as Record<string, string>;
const logosGlob = import.meta.glob('../assets/logo/*.{jpeg,jpg,png}', { eager: true, import: 'default' }) as Record<string, string>;
const foundersGlob = import.meta.glob('../assets/founders/*.{jpeg,jpg,png}', { eager: true, import: 'default' }) as Record<string, string>;
const productsGlob = import.meta.glob('../assets/products/*.{jpeg,jpg,png}', { eager: true, import: 'default' }) as Record<string, string>;

// Helper to safely find image by substring match
const findImg = (globObj: Record<string, string>, keyword: string): string => {
  const match = Object.entries(globObj).find(([path]) => 
    path.toLowerCase().includes(keyword.toLowerCase())
  );
  return match ? match[1] : '';
};

export const BRAND_LOGOS = {
  main: findImg(logosGlob, 'logo.png') || findImg(logosGlob, 'logo.jpeg') || '/assets/logo/logo.png',
  dark: findImg(logosGlob, 'logo.jpeg') || '/assets/logo/logo.jpeg',
  icon: findImg(logosGlob, 'icon.png') || '/assets/logo/icon.png',
};

export const CUSTOMER_LOGOS = Object.values(customersGlob);

export const CUSTOMER_LOGOS_MAP = {
  kurinji: findImg(customersGlob, 'kurinji') || '/assets/customers/imgi_47_Kurinji Retails.png',
  zamzam: findImg(customersGlob, 'zam') || '/assets/customers/imgi_57_Zam Zam.png',
  roshan: findImg(customersGlob, 'roshan') || '/assets/customers/imgi_52_Roshan Bags.png',
};

export const FOUNDER_IMAGES = {
  dinesh: findImg(foundersGlob, 'dinesh') || '/assets/founders/dinesh-kumar.jpeg',
  haje: findImg(foundersGlob, 'haje') || '/assets/founders/haje-abudhahir.jpeg',
  mohamed: findImg(foundersGlob, 'mohamed') || '/assets/founders/mohamed-rafiyudeen.jpeg',
};

export const PRODUCT_LOGOS = {
  ownchat: findImg(productsGlob, 'ownchat') || '/assets/products/ownchat.png',
  owncart: findImg(productsGlob, 'owncart') || '/assets/products/owncart.png',
};

export const KIBO_MASCOTS = {
  // Core Mascot representations
  tshirt: findImg(kiboGlob, 'wearing_t-shirt_2026') || findImg(kiboGlob, 't-shirt') || Object.values(kiboGlob)[0] || '',
  laptop: findImg(kiboGlob, 'laptop') || '',
  multitasking: findImg(kiboGlob, 'multitasking') || '',
  growth: findImg(kiboGlob, 'business_growt') || findImg(kiboGlob, 'presenting') || '',
  expression: findImg(kiboGlob, 'expression') || '',
  party: findImg(kiboGlob, 'party') || '',
  error: findImg(kiboGlob, 'error') || '',
  wrench: findImg(kiboGlob, 'wrench') || '',
  headset: findImg(kiboGlob, 'headset') || '',
  meeting: findImg(kiboGlob, 'meeting') || '',
  
  // Product specific
  whatsapp: findImg(kiboGlob, 'whatsapp') || findImg(kiboGlob, 'broadcast') || findImg(kiboGlob, 'replies') || '',
  tasks: findImg(kiboGlob, 'task_board') || findImg(kiboGlob, 'timeline') || findImg(kiboGlob, 'multitasking') || '',
  cart: findImg(kiboGlob, 'packing') || findImg(kiboGlob, 'inventory') || findImg(kiboGlob, 'launch') || '',
  
  // Service & Automation specific
  automation: findImg(kiboGlob, 'manufacturing') || findImg(kiboGlob, 'restaurant') || findImg(kiboGlob, 'replies') || '',
  crm: findImg(kiboGlob, 'crm') || findImg(kiboGlob, 'analytics') || '',
  support: findImg(kiboGlob, 'support') || findImg(kiboGlob, 'headset') || findImg(kiboGlob, 'meeting') || '',
  marketing: findImg(kiboGlob, 'marketin') || findImg(kiboGlob, 'broadcast') || '',
  finance: findImg(kiboGlob, 'finance') || '',
  healthcare: findImg(kiboGlob, 'healthcare') || '',

  // All images array for dynamic usage / carousels
  all: Object.values(kiboGlob),
};
