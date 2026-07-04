import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowDown, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  MessageCircle, 
  AlertTriangle, 
  Sparkles, 
  Zap, 
  Activity,
  ShoppingBag,
  Clock,
  Award,
  Star,
  ChevronRight,
  ChevronDown,
  Bot,
  Gift,
  Truck,
  CreditCard
} from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { KiboMascot } from '@/components/branding/KiboMascot';
import { SOLUTIONS_CONFIG } from '@/config/solutions';
import { cn } from '@/utils/cn';

const getWorkflowTheme = (productName: string, step: number) => {
  const p = productName.toLowerCase();
  if (p.includes('ownchat') || step === 1) {
    return {
      bgGradient: "from-[#052e1b]/95 via-[#041c10]/85 to-[#030d08]/95",
      borderColor: "border-[#10b981]/40 group-hover:border-[#10b981]/80 shadow-[0_15px_45px_-10px_rgba(16,185,129,0.25)] group-hover:shadow-[0_20px_60px_-5px_rgba(16,185,129,0.45)]",
      iconBox: "bg-gradient-to-br from-[#059669] to-[#047857] border border-[#34d399]/50 shadow-[0_0_20px_rgba(5,150,105,0.6)] text-white",
      accentText: "text-[#34d399]",
      badgeBg: "bg-[#10b981]/20 text-[#34d399] border border-[#10b981]/40",
      orbColor: "bg-[#10b981]/[0.08]",
      progressBg: "bg-[#34d399]",
      icon: <MessageCircle className="w-5 h-5 sm:w-5 sm:h-5" />,
    };
  } else if (p.includes('owncart') || step === 2) {
    return {
      bgGradient: "from-[#381e0a]/95 via-[#1f1005]/85 to-[#0e0702]/95",
      borderColor: "border-[#f59e0b]/40 group-hover:border-[#f59e0b]/80 shadow-[0_15px_45px_-10px_rgba(245,158,11,0.25)] group-hover:shadow-[0_20px_60px_-5px_rgba(245,158,11,0.45)]",
      iconBox: "bg-gradient-to-br from-[#d97706] to-[#b45309] border border-[#fbbf24]/50 shadow-[0_0_20px_rgba(217,119,6,0.6)] text-white",
      accentText: "text-[#fbbf24]",
      badgeBg: "bg-[#f59e0b]/20 text-[#fbbf24] border border-[#f59e0b]/40",
      orbColor: "bg-[#f59e0b]/[0.08]",
      progressBg: "bg-[#fbbf24]",
      icon: <ShoppingBag className="w-5 h-5 sm:w-5 sm:h-5" />,
    };
  } else if (p.includes('owntask') || step === 3) {
    return {
      bgGradient: "from-[#141842]/95 via-[#0b0e26]/85 to-[#050612]/95",
      borderColor: "border-[#5b6bff]/40 group-hover:border-[#5b6bff]/80 shadow-[0_15px_45px_-10px_rgba(91,107,255,0.25)] group-hover:shadow-[0_20px_60px_-5px_rgba(91,107,255,0.45)]",
      iconBox: "bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] border border-[#60a5fa]/50 shadow-[0_0_20px_rgba(37,99,235,0.6)] text-white",
      accentText: "text-[#60a5fa]",
      badgeBg: "bg-[#5b6bff]/20 text-[#8b6bff] border border-[#5b6bff]/40",
      orbColor: "bg-[#5b6bff]/[0.08]",
      progressBg: "bg-[#60a5fa]",
      icon: <Clock className="w-5 h-5 sm:w-5 sm:h-5" />,
    };
  } else {
    // ownrewards or step 4
    return {
      bgGradient: "from-[#2c1342]/95 via-[#180a24]/85 to-[#0b0410]/95",
      borderColor: "border-[#a855f7]/40 group-hover:border-[#a855f7]/80 shadow-[0_15px_45px_-10px_rgba(168,85,247,0.25)] group-hover:shadow-[0_20px_60px_-5px_rgba(168,85,247,0.45)]",
      iconBox: "bg-gradient-to-br from-[#9333ea] to-[#7e22ce] border border-[#c084fc]/50 shadow-[0_0_20px_rgba(147,51,234,0.6)] text-white",
      accentText: "text-[#c084fc]",
      badgeBg: "bg-[#a855f7]/20 text-[#c084fc] border border-[#a855f7]/40",
      orbColor: "bg-[#a855f7]/[0.08]",
      progressBg: "bg-[#c084fc]",
      icon: <Award className="w-5 h-5 sm:w-5 sm:h-5" />,
    };
  }
};

export const SolutionDetail: React.FC = () => {
  const { solutionSlug } = useParams<{ solutionSlug: string }>();
  const solution = SOLUTIONS_CONFIG.find((s) => s.slug === solutionSlug);

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  return (
    <>
      <SEO
        title={solution.seoTitle}
        description={solution.seoDescription}
      />

      <HeroSection
        badge={`Industry Solution: ${solution.name}`}
        heading={solution.h1}
        subheading={solution.tagline}
        supportingText={solution.heroSupportingText}
        ctaGroup={
          <>
            <Link to="/contact">
              <Button variant="glow" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                Book a Live Industry Walkthrough
              </Button>
            </Link>
            <a href="https://wa.me/9791467587" target="_blank" rel="noopener noreferrer">
              <Button variant="wa" size="md" icon={<MessageCircle className="w-4 h-4" />}>
                Test Ordering on WhatsApp
              </Button>
            </a>
          </>
        }
        trustStrip={
          <div className="flex flex-wrap items-center gap-4 text-xs text-text-dim">
            <span className="flex items-center gap-1 font-medium">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Zero Aggregator Commissions
            </span>
            <span className="flex items-center gap-1 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-2 shrink-0" /> Official Meta API Infrastructure
            </span>
          </div>
        }
        visual={
          <div className="flex flex-col items-center justify-center">
            <KiboMascot variant={solutionSlug === 'restaurants' ? 'automation' : solutionSlug === 'retail' ? 'cart' : 'tasks'} size="lg" caption={`Kibo Automating ${solution.name}`} />
          </div>
        }
      />

      {/* Challenges & Solutions Matrix */}
      <section className="py-8 sm:py-12 max-w-site mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] min-h-[calc(100vh-78px)] flex flex-col justify-center">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <Badge variant="indigo" className="mb-2">From Friction to Profit</Badge>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-paper mb-2">
            Solving the Biggest Roadblocks in {solution.name}
          </h2>
          <p className="text-xs sm:text-sm text-text-dim">
            Why traditional software apps fail this industry—and how our WhatsApp-native architecture solves it permanently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 max-w-site mx-auto">
          {solution.challenges.map((challenge, idx) => (
            <div
              key={idx}
              className="relative group/row rounded-2xl p-3 sm:p-4 bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.14] transition-all duration-500 shadow-xl backdrop-blur-xl flex flex-col justify-between h-full"
            >
              <div className="flex flex-col h-full gap-2.5">
                {/* Top Panel: The Problem / Roadblock */}
                <div className="rounded-xl p-3.5 sm:p-4 bg-gradient-to-br from-[#210810]/95 via-[#16060a]/85 to-[#0c0305]/95 border border-rose-500/30 group-hover/row:border-rose-500/50 transition-all duration-300 flex flex-col justify-between relative overflow-hidden shadow-sm flex-1">
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-display font-bold uppercase tracking-wider bg-rose-500/15 text-rose-400 border border-rose-500/30 shadow-sm">
                        <AlertTriangle className="w-3 h-3 shrink-0" /> Roadblock #{idx + 1}
                      </span>
                      <span className="text-[10px] font-mono text-rose-400/70 font-semibold tracking-wider">OLD WAY</span>
                    </div>

                    <h3 className="text-sm sm:text-base font-display font-bold text-white tracking-tight mb-2 group-hover/row:text-rose-100 transition-colors">
                      {challenge.problem}
                    </h3>
                  </div>

                  <div className="pt-2 mt-2 border-t border-rose-500/15 flex items-center justify-between text-[10px] text-rose-300/70">
                    <span className="flex items-center gap-1 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Friction
                    </span>
                    <span className="font-mono text-[10px] text-rose-400 font-semibold uppercase tracking-wide">Revenue Loss</span>
                  </div>
                </div>

                {/* Center Medallion Arrow */}
                <div className="flex items-center justify-center relative z-20 my-0.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-500 via-purple-600 to-emerald-500 p-[1.5px] shadow-[0_0_15px_rgba(16,185,129,0.35)] flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-[#0c1015] flex items-center justify-center">
                      <ArrowDown className="w-4 h-4 text-emerald-400 animate-pulse" />
                    </div>
                  </div>
                  <span className="ml-2 text-[9px] font-display font-extrabold uppercase tracking-widest text-indigo-2 px-2 py-0.5 rounded-full bg-black/60 border border-white/[0.12] shadow-sm">
                    iEYAL FIX
                  </span>
                </div>

                {/* Bottom Panel: The Solution / Profit */}
                <div className="rounded-xl p-3.5 sm:p-4 bg-gradient-to-br from-[#052e1b]/95 via-[#041c10]/85 to-[#030d08]/95 border border-emerald-500/40 group-hover/row:border-emerald-500/80 transition-all duration-300 flex-1 flex flex-col justify-between relative overflow-hidden shadow-md">
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-display font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm">
                        <CheckCircle2 className="w-3 h-3 shrink-0 text-emerald-400" /> The iEYAL Way
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">PROFIT</span>
                    </div>

                    <p className="text-xs sm:text-sm text-paper font-medium leading-relaxed">
                      {challenge.solution}
                    </p>
                  </div>

                  <div className="pt-2 mt-2 border-t border-emerald-500/20 flex items-center justify-between gap-1 text-[10px] text-emerald-300/80">
                    <span className="flex items-center gap-1 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                      100% WhatsApp Native
                    </span>
                    <Link
                      to="/contact"
                      className="font-display font-bold text-emerald-400 flex items-center gap-0.5 hover:underline"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industry Workflow Stepper */}
      <section className="py-16 md:py-24 bg-ink-2/30 border-t border-white/[0.06] relative overflow-hidden">
        {/* Subtle background glow for the whole journey highway */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gradient-to-r from-emerald-500/10 via-indigo-500/10 to-purple-500/10 blur-[120px] pointer-events-none" />

        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <Badge variant="violet" className="mb-2">Connected Journey</Badge>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-paper mb-2">
              How Your Customer Workflow Runs on iEYAL
            </h2>
            <p className="text-xs sm:text-sm text-text-dim">
              From first chat to repeat loyalty reward—all inside a single WhatsApp conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative">
            {solution.workflows.map((wf, idx) => {
              const theme = getWorkflowTheme(wf.product, wf.step);
              const isLast = idx === solution.workflows.length - 1;

              return (
                <div key={wf.step} className="relative flex flex-col h-full group">
                  {/* Step Card */}
                  <div
                    className={cn(
                      "relative rounded-2xl p-4 sm:p-5 overflow-hidden border transition-all duration-500 flex flex-col justify-between h-full bg-gradient-to-br backdrop-blur-xl z-10 group-hover:-translate-y-1 shadow-md",
                      theme.bgGradient,
                      theme.borderColor
                    )}
                  >
                    {/* Background glowing orb */}
                    <div className={cn("absolute -top-14 -right-14 w-44 h-44 rounded-full blur-2xl pointer-events-none transition-transform duration-700 group-hover:scale-150", theme.orbColor)} />
                    
                    {/* Top Header Area */}
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className={cn(
                          "w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-105 shadow-md",
                          theme.iconBox
                        )}>
                          {theme.icon}
                        </div>
                        
                        <span className={cn(
                          "text-2xl sm:text-3xl font-display font-black tracking-tighter opacity-30 group-hover:opacity-90 transition-opacity select-none drop-shadow-sm",
                          theme.accentText
                        )}>
                          0{wf.step}
                        </span>
                      </div>

                      <div className="mb-2.5">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-display font-bold uppercase tracking-widest bg-black/50 border border-white/10 shadow-inner text-text-dim">
                          <Zap className={cn("w-3 h-3 shrink-0 animate-pulse", theme.accentText)} />
                          <span>Powered by</span>
                          <span className={cn("font-extrabold text-white", theme.accentText)}>{wf.product}</span>
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-base font-display font-bold text-white tracking-tight mb-2 group-hover:text-paper transition-colors">
                        {wf.title}
                      </h3>

                      <p className="text-xs text-text-dim leading-relaxed mb-4 font-normal line-clamp-3">
                        {wf.description}
                      </p>
                    </div>

                    {/* Bottom Progress Strip */}
                    <div className="pt-2.5 mt-auto border-t border-white/[0.08] flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-1 w-full">
                        {solution.workflows.map((_, sIdx) => (
                          <div
                            key={sIdx}
                            className={cn(
                              "h-1 rounded-full flex-1 transition-all duration-500",
                              sIdx === idx ? cn(theme.progressBg, "shadow-[0_0_8px_currentColor]") : "bg-white/10"
                            )}
                          />
                        ))}
                      </div>
                      <span className={cn("ml-2 font-mono text-[9px] font-bold uppercase tracking-wider shrink-0", theme.accentText)}>
                        Step {wf.step}/0{solution.workflows.length}
                      </span>
                    </div>
                  </div>

                  {/* Connector Arrow Between Cards (Desktop) */}
                  {!isLast && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#0c1015] border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.15)] items-center justify-center text-white/70 group-hover:text-white group-hover:scale-110 group-hover:border-emerald-400 transition-all duration-300">
                      <ChevronRight className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                    </div>
                  )}

                  {/* Connector Arrow Between Cards (Mobile / Tablet Stacked) */}
                  {!isLast && (
                    <div className="flex lg:hidden my-2 mx-auto z-20 w-7 h-7 rounded-full bg-[#0c1015] border border-white/15 shadow-md items-center justify-center text-white/70">
                      <ChevronDown className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        heading={`Ready to Scale Your ${solution.name} Business?`}
        subheading="Book a custom demo tailored to your operational setup and start taking 0%-commission orders on WhatsApp."
        primaryBtnText={`Get Started for ${solution.name}`}
        primaryBtnHref="/contact"
        showWaButton={true}
      />
    </>
  );
};
