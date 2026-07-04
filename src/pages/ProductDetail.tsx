import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  MessageCircle,
  GitBranch,
  Users,
  Send,
  Bot,
  BarChart3,
  ShoppingBag,
  Layers,
  CreditCard,
  MapPin,
  Award,
  Star,
  Share2,
  RefreshCw,
  Clock,
  Bell,
  Calendar,
  Kanban,
  Sparkles,
  ChevronRight,
  Activity
} from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Accordion } from '@/components/ui/Accordion';
import { KiboMascot } from '@/components/branding/KiboMascot';
import { PRODUCTS_CONFIG } from '@/config/products';
import { PRODUCT_LOGOS } from '@/utils/assets';
import { cn } from '@/utils/cn';

const FEATURE_THEMES = [
  {
    // Emerald / Green Glow (Like Ownchat / Green E-commerce in Ref)
    bgGradient: "from-[#052e1b]/95 via-[#041c10]/85 to-[#030d08]/95",
    borderColor: "border-[#10b981]/40 group-hover:border-[#10b981]/80 shadow-[0_15px_45px_-10px_rgba(16,185,129,0.25)] group-hover:shadow-[0_20px_60px_-5px_rgba(16,185,129,0.45)]",
    iconBox: "bg-gradient-to-br from-[#059669] to-[#047857] border border-[#34d399]/50 shadow-[0_0_20px_rgba(5,150,105,0.6)] text-white",
    accentColor: "text-[#34d399]",
    badgeBg: "bg-[#10b981]/20 text-[#34d399] border border-[#10b981]/40",
    orbColor1: "bg-[#10b981]/[0.05] border-[#10b981]/[0.12]",
    orbColor2: "bg-[#10b981]/[0.08] border-[#10b981]/[0.20]",
    orbColor3: "bg-[#10b981]/[0.15] border-[#10b981]/[0.35]",
    pulseColor: "bg-[#34d399]",
    tag: "Core Automations",
  },
  {
    // Indigo / Blue Glow (Like Blue Cold Outreach in Ref)
    bgGradient: "from-[#141842]/95 via-[#0b0e26]/85 to-[#050612]/95",
    borderColor: "border-[#5b6bff]/40 group-hover:border-[#5b6bff]/80 shadow-[0_15px_45px_-10px_rgba(91,107,255,0.25)] group-hover:shadow-[0_20px_60px_-5px_rgba(91,107,255,0.45)]",
    iconBox: "bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] border border-[#60a5fa]/50 shadow-[0_0_20px_rgba(37,99,235,0.6)] text-white",
    accentColor: "text-[#60a5fa]",
    badgeBg: "bg-[#5b6bff]/20 text-[#8b6bff] border border-[#5b6bff]/40",
    orbColor1: "bg-[#5b6bff]/[0.05] border-[#5b6bff]/[0.12]",
    orbColor2: "bg-[#5b6bff]/[0.08] border-[#5b6bff]/[0.20]",
    orbColor3: "bg-[#5b6bff]/[0.15] border-[#5b6bff]/[0.35]",
    pulseColor: "bg-[#60a5fa]",
    tag: "Team Collaboration",
  },
  {
    // Violet / Purple Glow (Like Purple Newsletters in Ref)
    bgGradient: "from-[#2c1342]/95 via-[#180a24]/85 to-[#0b0410]/95",
    borderColor: "border-[#a855f7]/40 group-hover:border-[#a855f7]/80 shadow-[0_15px_45px_-10px_rgba(168,85,247,0.25)] group-hover:shadow-[0_20px_60px_-5px_rgba(168,85,247,0.45)]",
    iconBox: "bg-gradient-to-br from-[#9333ea] to-[#7e22ce] border border-[#c084fc]/50 shadow-[0_0_20px_rgba(147,51,234,0.6)] text-white",
    accentColor: "text-[#c084fc]",
    badgeBg: "bg-[#a855f7]/20 text-[#c084fc] border border-[#a855f7]/40",
    orbColor1: "bg-[#a855f7]/[0.05] border-[#a855f7]/[0.12]",
    orbColor2: "bg-[#a855f7]/[0.08] border-[#a855f7]/[0.20]",
    orbColor3: "bg-[#a855f7]/[0.15] border-[#a855f7]/[0.35]",
    pulseColor: "bg-[#c084fc]",
    tag: "Growth Engine",
  },
  {
    // Rose / Pink Glow (Like Pink Business in Ref)
    bgGradient: "from-[#3b1226]/95 via-[#210814]/85 to-[#0e0308]/95",
    borderColor: "border-[#f43f5e]/40 group-hover:border-[#f43f5e]/80 shadow-[0_15px_45px_-10px_rgba(244,63,94,0.25)] group-hover:shadow-[0_20px_60px_-5px_rgba(244,63,94,0.45)]",
    iconBox: "bg-gradient-to-br from-[#e11d48] to-[#be123c] border border-[#fb7185]/50 shadow-[0_0_20px_rgba(225,29,72,0.6)] text-white",
    accentColor: "text-[#fb7185]",
    badgeBg: "bg-[#f43f5e]/20 text-[#fb7185] border border-[#f43f5e]/40",
    orbColor1: "bg-[#f43f5e]/[0.05] border-[#f43f5e]/[0.12]",
    orbColor2: "bg-[#f43f5e]/[0.08] border-[#f43f5e]/[0.20]",
    orbColor3: "bg-[#f43f5e]/[0.15] border-[#f43f5e]/[0.35]",
    pulseColor: "bg-[#fb7185]",
    tag: "24/7 AI Intelligence",
  },
  {
    // Amber / Gold Glow
    bgGradient: "from-[#381e0a]/95 via-[#1f1005]/85 to-[#0e0702]/95",
    borderColor: "border-[#f59e0b]/40 group-hover:border-[#f59e0b]/80 shadow-[0_15px_45px_-10px_rgba(245,158,11,0.25)] group-hover:shadow-[0_20px_60px_-5px_rgba(245,158,11,0.45)]",
    iconBox: "bg-gradient-to-br from-[#d97706] to-[#b45309] border border-[#fbbf24]/50 shadow-[0_0_20px_rgba(217,119,6,0.6)] text-white",
    accentColor: "text-[#fbbf24]",
    badgeBg: "bg-[#f59e0b]/20 text-[#fbbf24] border border-[#f59e0b]/40",
    orbColor1: "bg-[#f59e0b]/[0.05] border-[#f59e0b]/[0.12]",
    orbColor2: "bg-[#f59e0b]/[0.08] border-[#f59e0b]/[0.20]",
    orbColor3: "bg-[#f59e0b]/[0.15] border-[#f59e0b]/[0.35]",
    pulseColor: "bg-[#fbbf24]",
    tag: "Revenue Insights",
  },
  {
    // Cyan / Teal Glow
    bgGradient: "from-[#082f3a]/95 via-[#041a22]/85 to-[#020b0f]/95",
    borderColor: "border-[#06b6d4]/40 group-hover:border-[#06b6d4]/80 shadow-[0_15px_45px_-10px_rgba(6,182,212,0.25)] group-hover:shadow-[0_20px_60px_-5px_rgba(6,182,212,0.45)]",
    iconBox: "bg-gradient-to-br from-[#0891b2] to-[#0e7490] border border-[#22d3ee]/50 shadow-[0_0_20px_rgba(8,145,178,0.6)] text-white",
    accentColor: "text-[#22d3ee]",
    badgeBg: "bg-[#06b6d4]/20 text-[#22d3ee] border border-[#06b6d4]/40",
    orbColor1: "bg-[#06b6d4]/[0.05] border-[#06b6d4]/[0.12]",
    orbColor2: "bg-[#06b6d4]/[0.08] border-[#06b6d4]/[0.20]",
    orbColor3: "bg-[#06b6d4]/[0.15] border-[#06b6d4]/[0.35]",
    pulseColor: "bg-[#22d3ee]",
    tag: "Operational Scale",
  },
];

const renderFeatureIcon = (iconName?: string, className: string = "w-6 h-6") => {
  switch (iconName) {
    case 'GitBranch': return <GitBranch className={className} />;
    case 'Users': return <Users className={className} />;
    case 'Send': return <Send className={className} />;
    case 'Bot': return <Bot className={className} />;
    case 'BarChart3': return <BarChart3 className={className} />;
    case 'ShoppingBag': return <ShoppingBag className={className} />;
    case 'Layers': return <Layers className={className} />;
    case 'CreditCard': return <CreditCard className={className} />;
    case 'MapPin': return <MapPin className={className} />;
    case 'Award': return <Award className={className} />;
    case 'Star': return <Star className={className} />;
    case 'Share2': return <Share2 className={className} />;
    case 'RefreshCw': return <RefreshCw className={className} />;
    case 'Clock': return <Clock className={className} />;
    case 'Bell': return <Bell className={className} />;
    case 'Calendar': return <Calendar className={className} />;
    case 'Trello': return <Kanban className={className} />;
    default: return <Sparkles className={className} />;
  }
};

export const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = PRODUCTS_CONFIG.find((p) => p.id === productId);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const getMascotVariant = (id: string): any => {
    switch (id) {
      case 'ownchat': return 'whatsapp';
      case 'owncart': return 'cart';
      case 'ownrewards': return 'party';
      case 'owntask': return 'tasks';
      default: return 'tshirt';
    }
  };

  const prodLogo = productId === 'ownchat' ? PRODUCT_LOGOS.ownchat : productId === 'owncart' ? PRODUCT_LOGOS.owncart : null;

  return (
    <>
      <SEO
        title={product.seoTitle}
        description={product.seoDescription}
      />

      {/* Hero Section */}
      <HeroSection
        badge={product.badge}
        badgeVariant={product.status === 'Live' ? 'live' : 'indigo'}
        heading={product.h1}
        subheading={product.tagline}
        supportingText={product.heroSupportingText}
        ctaGroup={
          <>
            <Link to="/contact">
              <Button variant="glow" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                Book {product.name} Walkthrough
              </Button>
            </Link>
            <a href="https://wa.me/9791467587" target="_blank" rel="noopener noreferrer">
              <Button variant="wa" size="md" icon={<MessageCircle className="w-4 h-4" />}>
                Try Live on WhatsApp
              </Button>
            </a>
          </>
        }
        trustStrip={
          <div className="flex flex-wrap items-center gap-4 text-xs text-text-dim">
            <span className="flex items-center gap-1 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Official Meta Business Partner API
            </span>
            <span className="flex items-center gap-1 font-medium">
              <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" /> Zero Setup Fees during {product.status}
            </span>
          </div>
        }
        visual={
          <div className="relative w-full max-w-sm flex flex-col items-center justify-center">
            {prodLogo ? (
              <div className="w-36 h-36 sm:w-48 sm:h-48 mb-3 rounded-2xl bg-white/[0.04] p-4 border border-white/[0.08] shadow-2xl flex items-center justify-center">
                <img src={prodLogo} alt={`${product.name} Logo`} className="w-full h-full object-contain filter drop-shadow-xl" />
              </div>
            ) : (
              <KiboMascot variant={getMascotVariant(product.id)} size="lg" caption={`Kibo Powering ${product.name}`} />
            )}
            <div className="text-center p-2.5 rounded-xl bg-ink-2/90 border border-white/[0.08] max-w-xs shadow-lg">
              <span className="text-[11px] font-display font-semibold text-indigo-2 uppercase tracking-wider block mb-0.5">
                Authoritative Suite Pillar
              </span>
              <p className="text-[11px] text-text-dim leading-snug">
                Direct integration with Meta Cloud API & iEYAL operational database.
              </p>
            </div>
          </div>
        }
      />

      {/* Features Grid */}
      <section className="py-8 sm:py-12 max-w-site mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] min-h-[calc(100vh-78px)] flex flex-col justify-center">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <Badge variant="violet" className="mb-2">Deep Dive Capabilities</Badge>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-paper mb-2">
            Designed for Real-World Speed and Simplicity
          </h2>
          <p className="text-xs sm:text-sm text-text-dim">
            Here is how {product.name} replaces cumbersome spreadsheets and manual phone calls with automated WhatsApp workflows.
          </p>
        </div>

        <div className={cn(
          "grid grid-cols-1 gap-4 sm:gap-5",
          product.features.length === 5 ? "sm:grid-cols-2 lg:grid-cols-5" : product.features.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3"
        )}>
          {product.features.map((feat, index) => {
            const style = FEATURE_THEMES[index % FEATURE_THEMES.length];
            const isLastOfFive = product.features.length === 5 && index === 4;

            return (
              <div
                key={index}
                className={cn(
                  "relative rounded-2xl p-4 sm:p-5 overflow-hidden border transition-all duration-500 group flex flex-col justify-between h-full bg-gradient-to-br backdrop-blur-xl",
                  style.bgGradient,
                  style.borderColor,
                  isLastOfFive ? "sm:col-span-2 lg:col-span-1" : ""
                )}
              >
                {/* Concentric Glass Orbs / Depth Cues */}
                <div className="absolute top-0 right-0 pointer-events-none z-0">
                  <div className={cn("absolute -top-16 -right-16 w-48 h-48 rounded-full border transition-transform duration-700 group-hover:scale-110", style.orbColor1)} />
                  <div className={cn("absolute -top-10 -right-10 w-32 h-32 rounded-full border transition-transform duration-700 group-hover:scale-110", style.orbColor2)} />
                  <div className={cn("absolute -top-4 -right-4 w-16 h-16 rounded-full border flex items-center justify-center shadow-lg transition-transform duration-700 group-hover:scale-110 opacity-70", style.orbColor3)}>
                    {renderFeatureIcon(feat.icon, cn("w-5 h-5 opacity-50", style.accentColor))}
                  </div>
                </div>

                {/* Top Content Area */}
                <div className="relative z-10 flex-grow">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className={cn(
                        "w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-md",
                        style.iconBox
                      )}>
                        {renderFeatureIcon(feat.icon, "w-5 h-5 sm:w-5 sm:h-5")}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className={cn("text-xl sm:text-2xl font-display font-extrabold tracking-tight drop-shadow", style.accentColor)}>
                            0{index + 1}
                          </span>
                          <span className="text-[10px] text-text-dim uppercase tracking-wider font-semibold">
                            / {style.tag}
                          </span>
                        </div>
                        <div className="text-[10px] text-paper/70 font-medium">
                          Meta API Connected
                        </div>
                      </div>
                    </div>

                    <span className={cn(
                      "text-[9px] font-display font-bold px-2.5 py-1 rounded-full uppercase tracking-widest backdrop-blur-md shadow-sm shrink-0 transition-colors",
                      style.badgeBg
                    )}>
                      {product.status} Ready
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-display font-bold text-white tracking-tight mb-2 group-hover:text-paper transition-colors flex items-center justify-between">
                    <span>{feat.title}</span>
                    <ChevronRight className={cn("w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0 ml-1", style.accentColor)} />
                  </h3>
                  <p className="text-xs text-text-dim leading-relaxed mb-4 font-normal line-clamp-4">
                    {feat.description}
                  </p>
                </div>

                {/* Bottom Interactive Footer */}
                <div className="relative z-10 pt-3 border-t border-white/[0.08] flex items-center justify-between gap-1.5 text-xs">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/40 border border-white/[0.08] text-text-dim text-[10px]">
                    <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse shrink-0", style.pulseColor)} />
                    <span className="font-medium text-paper/90 truncate max-w-[80px]">Automated</span>
                  </span>

                  <Link
                    to="/contact"
                    className={cn(
                      "font-display font-bold text-[11px] flex items-center gap-1 transition-all duration-300 group-hover:translate-x-1 py-1 px-2 rounded-md hover:bg-white/[0.06] ml-auto",
                      style.accentColor
                    )}
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQs Section */}
      {product.faqs && product.faqs.length > 0 && (
        <section className="py-16 md:py-24 bg-ink-2/40 border-t border-white/[0.06]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="cyan" className="mb-4">Frequently Asked Questions</Badge>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-paper mb-4">
                Everything You Need to Know About {product.name}
              </h2>
            </div>
            <Accordion items={product.faqs} />
          </div>
        </section>
      )}

      {/* Next Product Navigation / CTA */}
      <CTASection
        heading={`Ready to Transform Your Business with ${product.name}?`}
        subheading="Join 200+ paying customers running daily chat, commerce, and operations on iEYAL's WhatsApp-native platform."
        primaryBtnText={`Get Started with ${product.name}`}
        primaryBtnHref="/contact"
        showWaButton={true}
      />
    </>
  );
};
