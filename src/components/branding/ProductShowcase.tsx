import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageSquare, ShoppingCart, Gift, CheckSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/utils/cn';

export interface EcosystemStep {
  step: number;
  product: string;
  href: string;
  badge: string;
  tagline: string;
  whatHappens: string;
  businessOutcome: string;
  iconName: 'chat' | 'cart' | 'rewards' | 'task';
}

const STEPS: EcosystemStep[] = [
  {
    step: 1,
    product: "Ownchat",
    href: "/products/ownchat",
    badge: "Live",
    tagline: "First Contact & Routing",
    whatHappens: "A customer messages your business on WhatsApp. Ownchat routes it, auto-replies with AI, or hands it to your team inbox.",
    businessOutcome: "No missed conversations, no manual triage.",
    iconName: 'chat',
  },
  {
    step: 2,
    product: "Owncart",
    href: "/products/owncart",
    badge: "Beta",
    tagline: "In-Chat Order & Checkout",
    whatHappens: "That conversation becomes an order — menu selection, catalog browsing, and UPI checkout happen right inside WhatsApp.",
    businessOutcome: "Sales close where the conversation already is.",
    iconName: 'cart',
  },
  {
    step: 3,
    product: "OwnRewards",
    href: "/products/ownrewards",
    badge: "Beta",
    tagline: "Loyalty & Feedback Loop",
    whatHappens: "After purchase, the customer is automatically enrolled in digital cashback, 1-click feedback, and referral journeys.",
    businessOutcome: "Repeat customers, without extra staff effort.",
    iconName: 'rewards',
  },
  {
    step: 4,
    product: "OwnTask",
    href: "/products/owntask",
    badge: "Beta",
    tagline: "Fulfillment & SLA Tracking",
    whatHappens: "Behind the scenes, your team manages fulfillment, SLA timers, and field follow-ups on a shared Kanban workflow board.",
    businessOutcome: "Nothing falls through the cracks.",
    iconName: 'task',
  },
];

const PRODUCT_THEMES = [
  {
    // Step 1: Ownchat (Professional WhatsApp Emerald / Green)
    name: "ownchat",
    activeCard: "bg-gradient-to-br from-[#052e1b]/95 via-[#041c10]/85 to-[#030d08]/95 border-[#10b981] shadow-[0_0_35px_rgba(16,185,129,0.35)]",
    inactiveCard: "bg-[#10b981]/[0.03] hover:bg-[#10b981]/[0.08] border-[#10b981]/20 hover:border-[#10b981]/50",
    iconBoxActive: "bg-gradient-to-br from-[#059669] to-[#047857] border border-[#34d399]/50 shadow-[0_0_20px_rgba(5,150,105,0.6)] text-white",
    iconBoxInactive: "bg-[#10b981]/10 border border-[#10b981]/30 text-[#34d399] group-hover:bg-[#10b981]/20",
    indicatorBar: "from-[#34d399] via-[#10b981] to-[#059669]",
    panelBg: "bg-gradient-to-br from-[#052e1b]/50 via-[#041c10]/40 to-[#030d08]/60 border-[#10b981]/40 shadow-[0_15px_50px_-10px_rgba(16,185,129,0.25)]",
    pillBadge: "bg-[#10b981]/20 border-[#10b981]/50 text-[#34d399]",
    activeStage: "bg-[#10b981]/25 border border-[#10b981] text-white shadow-lg shadow-[#10b981]/20",
    btnBg: "bg-gradient-to-r from-[#10b981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white shadow-lg shadow-[#10b981]/30 border border-[#34d399]/30",
    badgeBgActive: "bg-[#10b981] text-white",
    badgeBgInactive: "bg-[#10b981]/20 text-[#34d399] border border-[#10b981]/40",
  },
  {
    // Step 2: Owncart (Professional Indigo / Blue)
    name: "owncart",
    activeCard: "bg-gradient-to-br from-[#141842]/95 via-[#0b0e26]/85 to-[#050612]/95 border-[#5b6bff] shadow-[0_0_35px_rgba(91,107,255,0.35)]",
    inactiveCard: "bg-[#5b6bff]/[0.03] hover:bg-[#5b6bff]/[0.08] border-[#5b6bff]/20 hover:border-[#5b6bff]/50",
    iconBoxActive: "bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] border border-[#60a5fa]/50 shadow-[0_0_20px_rgba(37,99,235,0.6)] text-white",
    iconBoxInactive: "bg-[#5b6bff]/10 border border-[#5b6bff]/30 text-[#8b6bff] group-hover:bg-[#5b6bff]/20",
    indicatorBar: "from-[#60a5fa] via-[#3b82f6] to-[#2563eb]",
    panelBg: "bg-gradient-to-br from-[#141842]/50 via-[#0b0e26]/40 to-[#050612]/60 border-[#5b6bff]/40 shadow-[0_15px_50px_-10px_rgba(91,107,255,0.25)]",
    pillBadge: "bg-[#5b6bff]/20 border-[#5b6bff]/50 text-[#8b6bff]",
    activeStage: "bg-[#5b6bff]/25 border border-[#5b6bff] text-white shadow-lg shadow-[#5b6bff]/20",
    btnBg: "bg-gradient-to-r from-[#5b6bff] to-[#3b82f6] hover:from-[#3b82f6] hover:to-[#2563eb] text-white shadow-lg shadow-[#5b6bff]/30 border border-[#8b6bff]/30",
    badgeBgActive: "bg-[#5b6bff] text-white",
    badgeBgInactive: "bg-[#5b6bff]/20 text-[#8b6bff] border border-[#5b6bff]/40",
  },
  {
    // Step 3: OwnRewards (Professional Violet / Purple)
    name: "ownrewards",
    activeCard: "bg-gradient-to-br from-[#2c1342]/95 via-[#180a24]/85 to-[#0b0410]/95 border-[#a855f7] shadow-[0_0_35px_rgba(168,85,247,0.35)]",
    inactiveCard: "bg-[#a855f7]/[0.03] hover:bg-[#a855f7]/[0.08] border-[#a855f7]/20 hover:border-[#a855f7]/50",
    iconBoxActive: "bg-gradient-to-br from-[#9333ea] to-[#7e22ce] border border-[#c084fc]/50 shadow-[0_0_20px_rgba(147,51,234,0.6)] text-white",
    iconBoxInactive: "bg-[#a855f7]/10 border border-[#a855f7]/30 text-[#c084fc] group-hover:bg-[#a855f7]/20",
    indicatorBar: "from-[#c084fc] via-[#a855f7] to-[#9333ea]",
    panelBg: "bg-gradient-to-br from-[#2c1342]/50 via-[#180a24]/40 to-[#0b0410]/60 border-[#a855f7]/40 shadow-[0_15px_50px_-10px_rgba(168,85,247,0.25)]",
    pillBadge: "bg-[#a855f7]/20 border-[#a855f7]/50 text-[#c084fc]",
    activeStage: "bg-[#a855f7]/25 border border-[#a855f7] text-white shadow-lg shadow-[#a855f7]/20",
    btnBg: "bg-gradient-to-r from-[#a855f7] to-[#9333ea] hover:from-[#9333ea] hover:to-[#7e22ce] text-white shadow-lg shadow-[#a855f7]/30 border border-[#c084fc]/30",
    badgeBgActive: "bg-[#a855f7] text-white",
    badgeBgInactive: "bg-[#a855f7]/20 text-[#c084fc] border border-[#a855f7]/40",
  },
  {
    // Step 4: OwnTask (Professional Amber / Gold)
    name: "owntask",
    activeCard: "bg-gradient-to-br from-[#381e0a]/95 via-[#1f1005]/85 to-[#0e0702]/95 border-[#f59e0b] shadow-[0_0_35px_rgba(245,158,11,0.35)]",
    inactiveCard: "bg-[#f59e0b]/[0.03] hover:bg-[#f59e0b]/[0.08] border-[#f59e0b]/20 hover:border-[#f59e0b]/50",
    iconBoxActive: "bg-gradient-to-br from-[#d97706] to-[#b45309] border border-[#fbbf24]/50 shadow-[0_0_20px_rgba(217,119,6,0.6)] text-white",
    iconBoxInactive: "bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#fbbf24] group-hover:bg-[#f59e0b]/20",
    indicatorBar: "from-[#fbbf24] via-[#f59e0b] to-[#d97706]",
    panelBg: "bg-gradient-to-br from-[#381e0a]/50 via-[#1f1005]/40 to-[#0e0702]/60 border-[#f59e0b]/40 shadow-[0_15px_50px_-10px_rgba(245,158,11,0.25)]",
    pillBadge: "bg-[#f59e0b]/20 border-[#f59e0b]/50 text-[#fbbf24]",
    activeStage: "bg-[#f59e0b]/25 border border-[#f59e0b] text-white shadow-lg shadow-[#f59e0b]/20",
    btnBg: "bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#d97706] hover:to-[#b45309] text-white shadow-lg shadow-[#f59e0b]/30 border border-[#fbbf24]/30",
    badgeBgActive: "bg-[#f59e0b] text-white",
    badgeBgInactive: "bg-[#f59e0b]/20 text-[#fbbf24] border border-[#f59e0b]/40",
  },
];

export const ProductShowcase: React.FC<{ className?: string }> = ({ className }) => {
  const [activeStep, setActiveStep] = useState<number>(0); // 0-indexed step

  const getIcon = (name: string) => {
    const cls = "w-6 h-6 shrink-0";
    switch (name) {
      case 'chat': return <MessageSquare className={cls} />;
      case 'cart': return <ShoppingCart className={cls} />;
      case 'rewards': return <Gift className={cls} />;
      case 'task': return <CheckSquare className={cls} />;
      default: return <CheckCircle2 className={cls} />;
    }
  };

  const currentTheme = PRODUCT_THEMES[activeStep];

  return (
    <section className={cn("py-16 md:py-24 relative overflow-hidden", className)}>
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <Badge variant="indigo" className="mb-4">One Connected Flow</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-paper mb-6">
            One Ecosystem. Every Step of Your Customer Journey.
          </h2>
          <p className="text-base sm:text-lg text-text-dim leading-relaxed">
            Most SMB tools solve one problem and leave you to stitch the rest together yourself. iEYAL is built differently: every product shares the same WhatsApp-native foundation, so your customer's journey never breaks — it just flows.
          </p>
        </div>

        {/* Stepper Navigation (Inspired by reference cards with glowing icon boxes & suitable themes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8 lg:mb-12 relative z-10">
          {STEPS.map((s, index) => {
            const isActive = activeStep === index;
            const theme = PRODUCT_THEMES[index];

            return (
              <button
                key={s.product}
                onClick={() => setActiveStep(index)}
                className={cn(
                  "p-5 sm:p-6 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden cursor-pointer flex flex-col justify-between h-full group",
                  isActive ? theme.activeCard : theme.inactiveCard
                )}
              >
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shrink-0",
                    isActive ? theme.iconBoxActive : theme.iconBoxInactive
                  )}>
                    {getIcon(s.iconName)}
                  </div>
                  <span className="text-xs font-display font-bold text-text-faint tracking-wider">
                    STEP 0{s.step}
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-paper transition-colors tracking-tight">
                      {s.product}
                    </h3>
                    <span className={cn("text-[11px] px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wide", isActive ? theme.badgeBgActive : theme.badgeBgInactive)}>
                      {s.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-text-dim line-clamp-1 font-medium">{s.tagline}</p>
                </div>

                {/* Active indicator bar */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className={cn("absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r", theme.indicatorBar)}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Step Content Card (Dynamically colored to match selected product theme) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, translateY: 15 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={cn(
              "backdrop-blur-xl rounded-[28px] p-6 sm:p-8 lg:p-12 relative overflow-hidden border transition-colors duration-500",
              currentTheme.panelBg
            )}
          >
            {/* Background decorative glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className={cn("inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider", currentTheme.pillBadge)}>
                  Step {STEPS[activeStep].step}: {STEPS[activeStep].tagline}
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight">
                  {STEPS[activeStep].product}: How It Works
                </h3>

                <p className="text-base sm:text-lg text-text leading-relaxed">
                  {STEPS[activeStep].whatHappens}
                </p>

                <div className="p-5 rounded-2xl bg-ink-2/90 border border-white/[0.08] flex items-start gap-3.5 shadow-md">
                  <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5 border border-emerald-500/30">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-display font-bold uppercase tracking-wider text-text-dim mb-1">
                      Business Outcome
                    </h4>
                    <p className="text-sm sm:text-base font-semibold text-emerald-300">
                      {STEPS[activeStep].businessOutcome}
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link to={STEPS[activeStep].href}>
                    <button className={cn("inline-flex items-center gap-2.5 font-display font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all duration-300 group/btn cursor-pointer", currentTheme.btnBg)}>
                      <span>Explore {STEPS[activeStep].product}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1.5" />
                    </button>
                  </Link>
                  <Link to="/products">
                    <Button variant="secondary" className="py-3.5 px-6 rounded-xl">View Complete Suite</Button>
                  </Link>
                </div>
              </div>

              {/* Visual flow stepper diagram */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-7 rounded-2xl bg-ink-2/95 border border-white/[0.1] shadow-xl">
                <div className="w-full space-y-4">
                  <div className="text-center pb-3 border-b border-white/[0.08]">
                    <span className="text-xs font-display font-bold uppercase tracking-widest text-text-dim">
                      Connected WhatsApp Journey
                    </span>
                  </div>

                  {STEPS.map((stepItem, idx) => {
                    const isCurrent = idx === activeStep;
                    const isPast = idx < activeStep;
                    const itemTheme = PRODUCT_THEMES[idx];

                    return (
                      <div
                        key={stepItem.product}
                        onClick={() => setActiveStep(idx)}
                        className={cn(
                          "p-4 rounded-xl flex items-center justify-between transition-all cursor-pointer border",
                          isCurrent
                            ? itemTheme.activeStage
                            : isPast
                            ? "bg-white/[0.05] border-white/[0.08] text-text-dim hover:bg-white/[0.08]"
                            : "bg-white/[0.02] border-transparent text-text-faint hover:bg-white/[0.05]"
                        )}
                      >
                        <div className="flex items-center gap-3.5">
                          <span className={cn(
                            "w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 shadow-sm border",
                            isCurrent ? itemTheme.iconBoxActive : isPast ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-400" : "bg-white/10 border-white/10 text-text-faint"
                          )}>
                            {isPast ? "✓" : stepItem.step}
                          </span>
                          <span className="font-display font-bold text-sm sm:text-base text-white">
                            {stepItem.product}
                          </span>
                        </div>
                        {isCurrent && (
                          <span className={cn("text-xs font-bold px-2.5 py-1 rounded-md shadow-sm", itemTheme.badgeBgActive)}>
                            Active Stage
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
