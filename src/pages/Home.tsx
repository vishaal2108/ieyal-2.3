import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, CheckCircle2, Zap, ShieldCheck, TrendingUp, Cpu, Wifi, Battery, Signal, ChevronLeft, Phone, Video, MoreVertical, Paperclip, Smile, Mic, CheckCheck, ShoppingBag } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { StatisticsSection } from '@/components/sections/StatisticsSection';
import { CustomerLogoMarquee } from '@/components/branding/CustomerLogoMarquee';
import { ProductShowcase } from '@/components/branding/ProductShowcase';
import { TeamSection } from '@/components/branding/TeamSection';
import { KiboMascot } from '@/components/branding/KiboMascot';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { PRODUCTS_CONFIG } from '@/config/products';
import { cn } from '@/utils/cn';

const PILLAR_STYLES: Record<string, {
  bgGradient: string;
  borderColor: string;
  shadowColor: string;
  accentColor: string;
  badgeBg: string;
  orbColor1: string;
  orbColor2: string;
  orbColor3: string;
  icon: React.ReactNode;
}> = {
  ownchat: {
    bgGradient: "from-[#052e1b] via-[#041c10] to-[#030d08]", // Emerald / Green Glow
    borderColor: "border-[#10b981]/40 group-hover:border-[#10b981]/70",
    shadowColor: "shadow-[0_15px_45px_-10px_rgba(16,185,129,0.25)] group-hover:shadow-[0_20px_60px_-5px_rgba(16,185,129,0.45)]",
    accentColor: "text-[#34d399]",
    badgeBg: "bg-[#10b981]/20 text-[#34d399] border border-[#10b981]/40",
    orbColor1: "bg-[#10b981]/[0.05] border-[#10b981]/[0.12]",
    orbColor2: "bg-[#10b981]/[0.08] border-[#10b981]/[0.20]",
    orbColor3: "bg-[#10b981]/[0.15] border-[#10b981]/[0.35]",
    icon: <MessageCircle className="w-8 h-8 text-[#34d399]" />,
  },
  owncart: {
    bgGradient: "from-[#141842] via-[#0b0e26] to-[#050612]", // Indigo / Blue Glow
    borderColor: "border-[#5b6bff]/40 group-hover:border-[#5b6bff]/70",
    shadowColor: "shadow-[0_15px_45px_-10px_rgba(91,107,255,0.25)] group-hover:shadow-[0_20px_60px_-5px_rgba(91,107,255,0.45)]",
    accentColor: "text-[#8b6bff]",
    badgeBg: "bg-[#5b6bff]/20 text-[#8b6bff] border border-[#5b6bff]/40",
    orbColor1: "bg-[#5b6bff]/[0.05] border-[#5b6bff]/[0.12]",
    orbColor2: "bg-[#5b6bff]/[0.08] border-[#5b6bff]/[0.20]",
    orbColor3: "bg-[#5b6bff]/[0.15] border-[#5b6bff]/[0.35]",
    icon: <ShoppingBag className="w-8 h-8 text-[#8b6bff]" />,
  },
  ownrewards: {
    bgGradient: "from-[#2c1342] via-[#180a24] to-[#0b0410]", // Violet / Purple Glow
    borderColor: "border-[#a855f7]/40 group-hover:border-[#a855f7]/70",
    shadowColor: "shadow-[0_15px_45px_-10px_rgba(168,85,247,0.25)] group-hover:shadow-[0_20px_60px_-5px_rgba(168,85,247,0.45)]",
    accentColor: "text-[#c084fc]",
    badgeBg: "bg-[#a855f7]/20 text-[#c084fc] border border-[#a855f7]/40",
    orbColor1: "bg-[#a855f7]/[0.05] border-[#a855f7]/[0.12]",
    orbColor2: "bg-[#a855f7]/[0.08] border-[#a855f7]/[0.20]",
    orbColor3: "bg-[#a855f7]/[0.15] border-[#a855f7]/[0.35]",
    icon: <Zap className="w-8 h-8 text-[#c084fc]" />,
  },
  owntask: {
    bgGradient: "from-[#381e0a] via-[#1f1005] to-[#0e0702]", // Amber / Gold Glow
    borderColor: "border-[#f59e0b]/40 group-hover:border-[#f59e0b]/70",
    shadowColor: "shadow-[0_15px_45px_-10px_rgba(245,158,11,0.25)] group-hover:shadow-[0_20px_60px_-5px_rgba(245,158,11,0.45)]",
    accentColor: "text-[#fbbf24]",
    badgeBg: "bg-[#f59e0b]/20 text-[#fbbf24] border border-[#f59e0b]/40",
    orbColor1: "bg-[#f59e0b]/[0.05] border-[#f59e0b]/[0.12]",
    orbColor2: "bg-[#f59e0b]/[0.08] border-[#f59e0b]/[0.20]",
    orbColor3: "bg-[#f59e0b]/[0.15] border-[#f59e0b]/[0.35]",
    icon: <CheckCheck className="w-8 h-8 text-[#fbbf24]" />,
  },
};

export const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="iEYAL Solutions — WhatsApp-First SaaS for Small & Medium Businesses"
        description="Ownchat, Owncart, OwnRewards & OwnTask — one WhatsApp-native, AI-driven ecosystem to run and grow your small business. Built in India, for the world."
      />

      {/* Hero Section */}
      <HeroSection
        badge="One WhatsApp-Native Ecosystem"
        badgeVariant="live"
        heading="Run Your Entire Business on WhatsApp."
        subheading="Chat, Commerce, Loyalty, and Operations — unified into one AI-driven platform purpose-built for growing small and medium businesses."
        supportingText="Stop losing 30% to aggregators or toggling between 10 fragmented software tools. Turn your WhatsApp Business number into an automated 24/7 revenue engine."
        ctaGroup={
          <>
            <Link to="/products">
              <Button variant="glow" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                Explore the 4-Product Ecosystem
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Book a Live Demo
              </Button>
            </Link>
          </>
        }
        trustStrip={
          <div className="flex flex-wrap items-center gap-6 text-xs text-text-dim">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Zero Setup Fees during Beta
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-indigo-2 shrink-0" /> Official Meta Business Partner API
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <TrendingUp className="w-4 h-4 text-cyan shrink-0" /> 95%+ WhatsApp Open Rates
            </span>
          </div>
        }
        visual={
          <div className="relative w-full max-w-[340px] sm:max-w-[360px] mx-auto lg:ml-auto">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-emerald-500/20 via-indigo/30 to-cyan/20 rounded-[3.5rem] blur-2xl -z-10 animate-pulse-slow" />

            {/* Mobile Phone Chassis */}
            <div className="bg-[#0c1015] border-[6px] border-[#1e2530] rounded-[2.8rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(34,197,94,0.15)] relative overflow-hidden flex flex-col ring-1 ring-white/20">
              {/* Hardware Side Buttons Simulation */}
              <div className="absolute -left-[6px] top-24 w-[3px] h-10 bg-[#2d3748] rounded-l-md" />
              <div className="absolute -left-[6px] top-38 w-[3px] h-10 bg-[#2d3748] rounded-l-md" />
              <div className="absolute -right-[6px] top-28 w-[3px] h-14 bg-[#2d3748] rounded-r-md" />

              {/* Mobile Top Status Bar & Dynamic Island */}
              <div className="bg-[#0b141a] pt-3 pb-1.5 px-6 flex items-center justify-between text-[11px] font-semibold text-text-dim border-b border-white/[0.04]">
                <span>9:41</span>
                <div className="w-20 h-4 bg-black rounded-full border border-white/[0.08] flex items-center justify-end px-1.5 shadow-inner">
                  <div className="w-2 h-2 rounded-full bg-[#10b981]/80 animate-pulse" />
                </div>
                <div className="flex items-center gap-1.5">
                  <Signal className="w-3 h-3 text-text-dim" />
                  <Wifi className="w-3 h-3 text-text-dim" />
                  <Battery className="w-3.5 h-3.5 text-text-dim" />
                </div>
              </div>

              {/* WhatsApp App Header Bar */}
              <div className="bg-[#1f2c34] px-3 py-2.5 flex items-center justify-between border-b border-white/[0.08] shadow-sm">
                <div className="flex items-center gap-2">
                  <ChevronLeft className="w-5 h-5 text-text-dim cursor-pointer hover:text-white transition-colors" />
                  <div className="relative">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white font-bold text-xs shadow-inner">
                      KR
                    </div>
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-[#1f2c34]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-xs text-paper">Kurinji Retails</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
                    </div>
                    <span className="text-[10px] text-emerald-400 font-medium block">Official Meta Partner • 24/7 AI</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-text-dim pr-1">
                  <Video className="w-4 h-4 hover:text-white transition-colors cursor-pointer" />
                  <Phone className="w-4 h-4 hover:text-white transition-colors cursor-pointer" />
                  <MoreVertical className="w-4 h-4 hover:text-white transition-colors cursor-pointer" />
                </div>
              </div>

              {/* Chat Wallpaper Canvas */}
              <div className="bg-[#0b141a] p-3 sm:p-3.5 space-y-3.5 flex-1 overflow-y-auto max-h-[380px] sm:max-h-[410px] relative font-sans text-xs sm:text-[13px] leading-relaxed">
                {/* End-to-end encryption notice */}
                <div className="text-center my-1">
                  <span className="bg-[#182229] text-amber-300/90 text-[10px] px-2.5 py-1 rounded-lg border border-amber-500/20 inline-flex items-center gap-1 shadow-sm">
                    🔒 End-to-end encrypted with Meta Business API
                  </span>
                </div>

                {/* AI Welcome Message */}
                <div className="flex gap-2 items-end animate-fade-in">
                  <div className="w-6 h-6 rounded-full bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-bold text-[10px] shrink-0 mb-1">
                    AI
                  </div>
                  <div className="bg-[#202c33] text-[#e9edef] rounded-2xl rounded-bl-none p-3 max-w-[85%] shadow-md border border-white/[0.04] relative group">
                    <p>👋 Welcome to <strong className="text-white">Kurinji Retails</strong>! Your loyalty wallet balance is <strong className="text-emerald-400 font-semibold">₹240</strong>. Would you like to view today's festive catalog?</p>
                    <div className="flex justify-end items-center gap-1 mt-1 text-[9px] text-[#8696a0]">
                      <span>9:41 AM</span>
                    </div>
                  </div>
                </div>

                {/* User Reply Bubble */}
                <div className="flex gap-2 items-end justify-end animate-fade-in">
                  <div className="bg-[#005c4b] text-white rounded-2xl rounded-br-none p-3 max-w-[82%] shadow-md border border-emerald-500/20 relative">
                    <p>Yes, show catalog! I also want to use my cashback.</p>
                    <div className="flex justify-end items-center gap-1 mt-1 text-[9px] text-emerald-200">
                      <span>9:42 AM</span>
                      <CheckCheck className="w-3 h-3 text-cyan-300 inline" />
                    </div>
                  </div>
                </div>

                {/* AI Interactive Store Catalog Card */}
                <div className="flex gap-2 items-end animate-fade-in">
                  <div className="w-6 h-6 rounded-full bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-bold text-[10px] shrink-0 mb-1">
                    AI
                  </div>
                  <div className="bg-[#202c33] text-[#e9edef] rounded-2xl rounded-bl-none p-3 max-w-[88%] shadow-md border border-white/[0.04] space-y-2.5">
                    <p>🛍️ Here is our interactive WhatsApp store! You can check out directly with UPI without leaving this chat.</p>

                    {/* Interactive Store Item Box */}
                    <div className="p-2.5 rounded-xl bg-[#111b21] border border-white/[0.08] flex items-center justify-between gap-3 shadow-inner">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                          <ShoppingBag className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-white text-xs">Festive Combo Pack</div>
                          <div className="text-[10px] text-[#8696a0]">Instant UPI Delivery</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-emerald-400 font-bold text-xs">₹999</div>
                        <div className="text-[9px] text-[#8696a0] line-through">₹1,239</div>
                      </div>
                    </div>

                    {/* 1-Click Action Button Inside Chat */}
                    <button className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-900/30 transition-all duration-200 active:scale-95 group">
                      <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300 group-hover:scale-110 transition-transform" />
                      <span>1-Click UPI Checkout (Save ₹240)</span>
                    </button>

                    <div className="flex justify-between items-center pt-0.5 text-[9px] text-[#8696a0]">
                      <span className="text-emerald-400/90 flex items-center gap-1 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> WhatsApp Native API
                      </span>
                      <span>9:42 AM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile WhatsApp Input Footer */}
              <div className="bg-[#1f2c34] p-2.5 flex items-center gap-2 border-t border-white/[0.06]">
                <div className="flex items-center gap-2 text-[#8696a0] pl-1">
                  <Smile className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                  <Paperclip className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                </div>
                <div className="flex-1 bg-[#2a3942] rounded-full py-1.5 px-3 text-xs text-[#8696a0] border border-white/[0.04] flex items-center justify-between">
                  <span>Message Kurinji Retails...</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#00a884] hover:bg-[#00bf96] flex items-center justify-center text-white shadow-md cursor-pointer transition-transform active:scale-95">
                  <Mic className="w-4 h-4" />
                </div>
              </div>

              {/* Home Indicator Bar */}
              <div className="bg-[#1f2c34] pb-2 pt-0.5 flex justify-center">
                <div className="w-28 h-1 bg-white/20 rounded-full" />
              </div>
            </div>

            {/* Caption Badge Below Phone */}
            <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-text-dim bg-white/[0.03] backdrop-blur-md px-4 py-1.5 rounded-full border border-white/[0.08] w-fit mx-auto shadow-sm">
              <span className="flex items-center gap-1 text-amber-400 font-medium">
                <Zap className="w-3 h-3 fill-amber-400/30" /> Instant (0.3s)
              </span>
              <span className="text-white/20">•</span>
              <span>Powered by <strong className="text-paper">Ownchat</strong> & <strong className="text-paper">Owncart</strong></span>
            </div>
          </div>
        }
      />

      {/* Client Logo Marquee */}
      <CustomerLogoMarquee />

      {/* Connected Ecosystem Stepper */}
      <ProductShowcase />

      {/* Product Summary Grid */}
      <section className="py-16 md:py-24 bg-ink-2/30 relative border-t border-white/[0.06]">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <Badge variant="violet" className="mb-4">The 4 Pillars</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-paper mb-6">
              Everything You Need to Scale
            </h2>
            <p className="text-base sm:text-lg text-text-dim">
              Explore how our four core products transform every touchpoint of your customer lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRODUCTS_CONFIG.map((prod) => {
              const style = PILLAR_STYLES[prod.id] || PILLAR_STYLES.ownchat;

              return (
                <div
                  key={prod.id}
                  className={cn(
                    "relative rounded-[28px] p-6 sm:p-8 md:p-10 overflow-hidden border transition-all duration-500 group flex flex-col justify-between h-full bg-gradient-to-br backdrop-blur-xl",
                    style.bgGradient,
                    style.borderColor,
                    style.shadowColor
                  )}
                >
                  {/* Concentric Glass Orbs / Depth Cues (inspired by reference) */}
                  <div className="absolute top-0 right-0 pointer-events-none z-0">
                    <div className={cn("absolute -top-24 -right-24 w-64 h-64 rounded-full border transition-transform duration-700 group-hover:scale-110", style.orbColor1)} />
                    <div className={cn("absolute -top-14 -right-14 w-44 h-44 rounded-full border transition-transform duration-700 group-hover:scale-110", style.orbColor2)} />
                    <div className={cn("absolute -top-6 -right-6 w-24 h-24 rounded-full border flex items-center justify-center shadow-lg transition-transform duration-700 group-hover:scale-110", style.orbColor3)}>
                      {style.icon}
                    </div>
                  </div>

                  {/* Top Content Area */}
                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pr-16">
                      <span className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                        {prod.name}
                      </span>
                      <span className={cn("text-xs px-3 py-1 rounded-full font-semibold tracking-wide uppercase", style.badgeBg)}>
                        {prod.badge}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-text-dim mb-8 leading-relaxed max-w-lg">
                      {prod.description}
                    </p>

                    <div className="space-y-3 mb-10">
                      {prod.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-paper font-medium">
                          <CheckCircle2 className={cn("w-4 h-4 shrink-0", style.accentColor)} />
                          <span>{feat.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Footer (inspired by reference pill buttons & OPEN link) */}
                  <div className="relative z-10 pt-6 border-t border-white/[0.08] flex items-center justify-between gap-4">
                    {/* Bottom Left Pill Icons */}
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white text-ink flex items-center justify-center shadow-md hover:scale-110 transition-transform" title="WhatsApp Native Integration">
                        <MessageCircle className="w-4 h-4 text-[#25d366] fill-[#25d366]/20" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white text-ink flex items-center justify-center shadow-md hover:scale-110 transition-transform" title="AI Assistant Powered">
                        <Zap className="w-4 h-4 text-[#8b6bff] fill-[#8b6bff]/20" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white text-ink flex items-center justify-center shadow-md hover:scale-110 transition-transform" title="DPIIT Recognized Security">
                        <ShieldCheck className="w-4 h-4 text-[#10b981]" />
                      </div>
                    </div>

                    {/* Bottom Right Explore Link */}
                    <Link
                      to={prod.href}
                      className={cn(
                        "inline-flex items-center gap-2 font-display font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 group/link py-2.5 px-5 rounded-xl bg-white/[0.06] hover:bg-white/[0.14] border border-white/[0.12] shadow-sm",
                        style.accentColor
                      )}
                    >
                      <span>EXPLORE DETAILS</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics & Traction */}
      <StatisticsSection />

      {/* Why iEYAL Advantage */}
      <section className="py-16 md:py-24 relative overflow-hidden border-t border-white/[0.06]">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="cyan">Why Choose iEYAL</Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-paper leading-tight">
                Built in India. Engineered for High Growth.
              </h2>
              <p className="text-base sm:text-lg text-text-dim leading-relaxed">
                Most global SaaS platforms are priced in dollars and designed for Western workflows. iEYAL was born in Thiruvarur, Tamil Nadu, with a relentless focus on high-speed mobile commerce, zero-latency WhatsApp messaging, and affordable scalability.
              </p>

              <div className="space-y-5 pt-3">
                {/* Card 1: Emerald / Green Illuminated Card */}
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#052e1b]/90 via-[#041c10]/80 to-[#030d08]/90 border border-[#10b981]/40 shadow-[0_10px_35px_-10px_rgba(16,185,129,0.25)] hover:border-[#10b981]/80 hover:shadow-[0_15px_45px_-5px_rgba(16,185,129,0.4)] transition-all duration-300 group relative overflow-hidden flex gap-5 items-start backdrop-blur-xl">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#059669] to-[#047857] border border-[#34d399]/40 shadow-[0_0_20px_rgba(5,150,105,0.5)] flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-6 h-6 drop-shadow-md" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg mb-1.5 group-hover:text-[#34d399] transition-colors">
                      Eliminate 30% Aggregator Commissions
                    </h3>
                    <p className="text-sm text-text-dim leading-relaxed">
                      Own your customer data and stop paying third-party delivery apps or marketplaces a cut of every single transaction.
                    </p>
                  </div>
                </div>

                {/* Card 2: Indigo / Blue Illuminated Card */}
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#0a1026]/90 via-[#070b1a]/80 to-[#04060f]/90 border border-[#3b82f6]/40 shadow-[0_10px_35px_-10px_rgba(59,130,246,0.25)] hover:border-[#3b82f6]/80 hover:shadow-[0_15px_45px_-5px_rgba(59,130,246,0.4)] transition-all duration-300 group relative overflow-hidden flex gap-5 items-start backdrop-blur-xl">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] border border-[#60a5fa]/40 shadow-[0_0_20px_rgba(37,99,235,0.5)] flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Cpu className="w-6 h-6 drop-shadow-md" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg mb-1.5 group-hover:text-[#60a5fa] transition-colors">
                      100% In-House Engineering & UI/UX
                    </h3>
                    <p className="text-sm text-text-dim leading-relaxed">
                      We never outsource code or support. Our 22+ specialist team ships updates rapidly based on real feedback from 200+ paying businesses.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/company/about">
                  <Button variant="glow" icon={<ArrowRight className="w-4 h-4" />}>
                    Read Our Tier-3 Town Founder Story
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-lg p-8 sm:p-10 rounded-[32px] bg-gradient-to-br from-[#2c1342]/90 via-[#180a24]/85 to-[#0b0410]/95 border border-[#a855f7]/50 shadow-[0_20px_70px_-15px_rgba(168,85,247,0.35)] backdrop-blur-xl relative overflow-hidden group text-center space-y-6 transition-all duration-500 hover:border-[#a855f7] hover:shadow-[0_25px_80px_-10px_rgba(168,85,247,0.5)]">
                {/* Concentric glass depth cues */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#c084fc]/20 rounded-full blur-2xl pointer-events-none group-hover:bg-[#c084fc]/30 transition-all duration-700" />
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#3b82f6]/20 rounded-full blur-2xl pointer-events-none group-hover:bg-[#3b82f6]/30 transition-all duration-700" />

                <div className="relative z-10 transition-transform duration-500 group-hover:scale-[1.02]">
                  <KiboMascot variant="growth" size="xl" caption="Kibo: Scaling SMBs 24/7" />
                </div>
                
                <div className="space-y-3 relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight bg-gradient-to-r from-white via-paper to-indigo-2 bg-clip-text">
                    Meet Kibo, Your AI Growth Mascot
                  </h3>
                  <p className="text-sm sm:text-base text-text-dim leading-relaxed">
                    Whether automating midnight customer replies, routing kitchen tickets, or sending festive cashback alerts, Kibo ensures your business never sleeps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Leadership preview */}
      <TeamSection condensed={true} />

      {/* Sitewide CTA Banner */}
      <CTASection
        heading="Ready to Transform Your WhatsApp Business Number?"
        subheading="Join 200+ businesses across India, Southeast Asia, and MENA running daily chat, commerce, loyalty, and operations on iEYAL."
        primaryBtnText="Book a Live Walkthrough"
        primaryBtnHref="/contact"
        showWaButton={true}
      />
    </>
  );
};
