import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  Lock, 
  Server, 
  CheckCircle2, 
  Globe, 
  Activity, 
  Sparkles, 
  Database, 
  Terminal, 
  Network, 
  Layers 
} from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { KiboMascot } from '@/components/branding/KiboMascot';
import { cn } from '@/utils/cn';

export const Technology: React.FC = () => {
  const archPillars = [
    {
      title: "Official Meta Business Partner API",
      icon: <ShieldCheck className="w-5 h-5" />,
      description: "We never use fragile scraping scripts or unauthorized SIM card boxes. iEYAL is built directly on official Meta Cloud API endpoints, ensuring 100% compliance, zero number ban risks, and instant green-badge verification support.",
      badge: "META SANCTIONED • TIER 1",
      footerTag: "Direct Cloud API • Zero Scraping",
      theme: {
        bgGradient: "from-[#052e1b]/95 via-[#041c10]/85 to-[#030d08]/95",
        borderColor: "border-[#10b981]/40 group-hover:border-[#10b981]/80 shadow-[0_15px_45px_-10px_rgba(16,185,129,0.25)] group-hover:shadow-[0_20px_60px_-5px_rgba(16,185,129,0.45)]",
        iconBox: "bg-gradient-to-br from-[#059669] to-[#047857] border border-[#34d399]/50 shadow-[0_0_20px_rgba(5,150,105,0.6)] text-white",
        accentText: "text-[#34d399]",
        badgeBg: "bg-[#10b981]/20 text-[#34d399] border border-[#10b981]/40",
        orbColor: "bg-[#10b981]/10",
        pulseColor: "bg-[#34d399]",
      }
    },
    {
      title: "Sub-Second Response Architecture",
      icon: <Zap className="w-5 h-5" />,
      description: "Our distributed event-driven messaging infrastructure processes incoming webhooks, AI response generation, and database updates in under 300 milliseconds—even during peak flash sale traffic.",
      badge: "ULTRA-LOW LATENCY • EVENT DRIVEN",
      footerTag: "< 300ms Processing • Flash-Sale Ready",
      theme: {
        bgGradient: "from-[#381e0a]/95 via-[#1f1005]/85 to-[#0e0702]/95",
        borderColor: "border-[#f59e0b]/40 group-hover:border-[#f59e0b]/80 shadow-[0_15px_45px_-10px_rgba(245,158,11,0.25)] group-hover:shadow-[0_20px_60px_-5px_rgba(245,158,11,0.45)]",
        iconBox: "bg-gradient-to-br from-[#d97706] to-[#b45309] border border-[#fbbf24]/50 shadow-[0_0_20px_rgba(217,119,6,0.6)] text-white",
        accentText: "text-[#fbbf24]",
        badgeBg: "bg-[#f59e0b]/20 text-[#fbbf24] border border-[#f59e0b]/40",
        orbColor: "bg-[#f59e0b]/10",
        pulseColor: "bg-[#fbbf24]",
      }
    },
    {
      title: "Enterprise Data Privacy & Encryption",
      icon: <Lock className="w-5 h-5" />,
      description: "Every tenant database is strictly isolated. All customer communication payload is encrypted in transit using TLS 1.3 and at rest using AES-256 standards, adhering strictly to global data protection regulations.",
      badge: "ISO COMPLIANT • TLS 1.3 & AES-256",
      footerTag: "Strictly Isolated Tenant Databases",
      theme: {
        bgGradient: "from-[#141842]/95 via-[#0b0e26]/85 to-[#050612]/95",
        borderColor: "border-[#5b6bff]/40 group-hover:border-[#5b6bff]/80 shadow-[0_15px_45px_-10px_rgba(91,107,255,0.25)] group-hover:shadow-[0_20px_60px_-5px_rgba(91,107,255,0.45)]",
        iconBox: "bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] border border-[#60a5fa]/50 shadow-[0_0_20px_rgba(37,99,235,0.6)] text-white",
        accentText: "text-[#60a5fa]",
        badgeBg: "bg-[#5b6bff]/20 text-[#8b6bff] border border-[#5b6bff]/40",
        orbColor: "bg-[#5b6bff]/10",
        pulseColor: "bg-[#60a5fa]",
      }
    },
    {
      title: "99.9% Uptime & Multi-Region Failover",
      icon: <Server className="w-5 h-5" />,
      description: "Hosted on resilient cloud infrastructure with real-time replication and automated health checks. If one availability zone experience issues, traffic fails over seamlessly without dropping active customer chats.",
      badge: "MULTI-AZ • AUTOMATED FAILOVER",
      footerTag: "99.99% Guaranteed SLA • Real-time Sync",
      theme: {
        bgGradient: "from-[#082f3a]/95 via-[#041a22]/85 to-[#020b0f]/95",
        borderColor: "border-[#06b6d4]/40 group-hover:border-[#06b6d4]/80 shadow-[0_15px_45px_-10px_rgba(6,182,212,0.25)] group-hover:shadow-[0_20px_60px_-5px_rgba(6,182,212,0.45)]",
        iconBox: "bg-gradient-to-br from-[#0891b2] to-[#0e7490] border border-[#22d3ee]/50 shadow-[0_0_20px_rgba(8,145,178,0.6)] text-white",
        accentText: "text-[#22d3ee]",
        badgeBg: "bg-[#06b6d4]/20 text-[#22d3ee] border border-[#06b6d4]/40",
        orbColor: "bg-[#06b6d4]/10",
        pulseColor: "bg-[#22d3ee]",
      }
    },
  ];

  return (
    <>
      <SEO
        title="Enterprise Technology & Architecture | iEYAL Solutions"
        description="Discover the engineering foundation behind iEYAL: official Meta Business Partner API infrastructure, sub-second AI response pipelines, and enterprise-grade encryption."
      />

      <HeroSection
        badge="Enterprise Architecture Foundation"
        heading="Built for Speed. Engineered for Trust."
        subheading="Small and medium businesses deserve the exact same reliability, encryption, and throughput as Fortune 500 enterprises. Discover what powers the iEYAL ecosystem under the hood."
        centered={true}
        ctaGroup={
          <Link to="/contact">
            <Button variant="glow" size="md" icon={<ArrowRight className="w-4 h-4" />}>
              Schedule Technical Review with CTO
            </Button>
          </Link>
        }
      />

      {/* Architecture Pillars Grid */}
      <section className="py-8 sm:py-12 max-w-site mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] min-h-[calc(100vh-78px)] flex flex-col justify-center">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <Badge variant="indigo" className="mb-2">Infrastructure Excellence</Badge>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-paper mb-2">
            Four Pillars of Our Technical Foundation
          </h2>
          <p className="text-xs sm:text-sm text-text-dim">
            We don't take shortcuts on security or scalability. Here is why 200+ businesses trust us with their daily revenue operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {archPillars.map((pillar, idx) => (
            <div
              key={idx}
              className={cn(
                "relative rounded-2xl p-4 sm:p-5 overflow-hidden border transition-all duration-500 group flex flex-col justify-between h-full bg-gradient-to-br backdrop-blur-xl group-hover:-translate-y-1 shadow-md",
                pillar.theme.bgGradient,
                pillar.theme.borderColor
              )}
            >
              {/* Background glowing orb */}
              <div className={cn("absolute -top-16 -right-16 w-52 h-52 rounded-full blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-150", pillar.theme.orbColor)} />

              {/* Top Header Area */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className={cn(
                    "w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-105 shadow-md",
                    pillar.theme.iconBox
                  )}>
                    {pillar.icon}
                  </div>
                  <div>
                    <span className={cn("text-2xl sm:text-3xl font-display font-extrabold tracking-tight drop-shadow block", pillar.theme.accentText)}>
                      0{idx + 1}
                    </span>
                  </div>
                </div>

                <div className="mb-2">
                  <span className={cn(
                    "text-[9px] font-display font-bold px-2 py-0.5 rounded-full uppercase tracking-wider backdrop-blur-md shadow-sm inline-block",
                    pillar.theme.badgeBg
                  )}>
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-display font-bold text-white tracking-tight mb-2 group-hover:text-paper transition-colors line-clamp-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-text-dim leading-relaxed mb-4 font-normal line-clamp-4">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Telemetry Footer */}
              <div className="pt-2.5 mt-auto border-t border-white/[0.08] flex items-center justify-between gap-1 text-[10px]">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/50 border border-white/[0.08] text-text-dim font-medium shadow-inner truncate">
                  <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse shrink-0", pillar.theme.pulseColor)} />
                  <span className="text-paper/90 font-semibold truncate">{pillar.footerTag}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI & Automation Engine Spotlight */}
      <section className="py-8 sm:py-12 bg-ink-2/40 border-t border-white/[0.06] min-h-[calc(100vh-78px)] flex flex-col justify-center">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <Badge variant="violet" className="mb-1">AI & Flow Engine</Badge>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-paper leading-tight">
                Intelligent Automation Without Computer Science Degrees
              </h2>
              <p className="text-xs sm:text-sm text-text-dim leading-relaxed">
                Underneath our no-code Flow Builder lies a powerful state-machine execution engine. It analyzes natural language customer intents, queries your live catalog inventory in real time, and executes multi-step workflows without human intervention.
              </p>
              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-paper">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Real-time webhook processing with zero queue buildup</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-paper">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Deterministic fallback routing to human agents when AI confidence drops</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-paper">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Automated rate-limit handling compliant with Meta API tier rules</span>
                </div>
              </div>

              <div className="pt-2">
                <Link to="/products/ownchat">
                  <Button variant="outline" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                    See How Ownchat Uses AI Automation
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center w-full">
              <div className="w-full max-w-lg rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-[#1e1338]/95 via-[#110924]/90 to-[#0a0416]/95 border border-purple-500/40 hover:border-purple-500/80 shadow-[0_0_30px_rgba(168,85,247,0.25)] group relative overflow-hidden transition-all duration-500 backdrop-blur-2xl">
                {/* Concentric glowing background rings */}
                <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-purple-500/15 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-indigo-500/15 blur-3xl pointer-events-none" />

                {/* Top Console Status Bar */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10 relative z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 font-mono text-[10px] font-bold uppercase tracking-widest shadow-inner">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> STATUS: ONLINE
                  </span>
                  <span className="font-mono text-[10px] text-text-dim uppercase tracking-wider flex items-center gap-1 font-semibold">
                    <Terminal className="w-3 h-3 text-purple-400" /> v2.4 GA
                  </span>
                </div>

                {/* Center Mascot Console Area */}
                <div className="relative my-3 flex justify-center z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-2xl rounded-full scale-90" />
                  <KiboMascot variant="wrench" size="lg" caption="Kibo Autonomous State-Machine Engine" />
                </div>

                {/* Bottom Telemetry Pods Grid */}
                <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-white/[0.1] relative z-10">
                  <div className="bg-black/50 border border-white/10 hover:border-amber-500/50 p-2.5 rounded-xl text-center transition-all group/pod shadow-inner">
                    <span className="font-display font-black text-lg sm:text-xl text-amber-400 block tracking-tight group-hover/pod:scale-105 transition-transform">0.3s</span>
                    <span className="text-[10px] text-text-dim font-medium uppercase tracking-wider mt-0.5 block">Avg Latency</span>
                  </div>
                  <div className="bg-black/50 border border-white/10 hover:border-emerald-500/50 p-2.5 rounded-xl text-center transition-all group/pod shadow-inner">
                    <span className="font-display font-black text-lg sm:text-xl text-emerald-400 block tracking-tight group-hover/pod:scale-105 transition-transform">99.9%</span>
                    <span className="text-[10px] text-text-dim font-medium uppercase tracking-wider mt-0.5 block">Uptime SLA</span>
                  </div>
                  <div className="bg-black/50 border border-white/10 hover:border-purple-500/50 p-2.5 rounded-xl text-center transition-all group/pod shadow-inner">
                    <span className="font-display font-black text-lg sm:text-xl text-purple-400 block tracking-tight group-hover/pod:scale-105 transition-transform">100%</span>
                    <span className="text-[10px] text-text-dim font-medium uppercase tracking-wider mt-0.5 block">Sanctioned</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Inspect Our Technical Architecture?"
        subheading="Let our engineering leadership walk you through our API endpoints, security compliance, and migration docs."
        primaryBtnText="Request Architecture Walkthrough"
        primaryBtnHref="/contact"
      />
    </>
  );
};
