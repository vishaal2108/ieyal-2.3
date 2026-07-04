import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Zap, 
  Target, 
  Shield, 
  Heart, 
  Cpu, 
  RefreshCw, 
  Globe, 
  MessageCircle, 
  Activity, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { COMPANY_VALUES } from '@/config/team';
import { cn } from '@/utils/cn';

const getCommandmentTheme = (title: string, idx: number) => {
  const t = title.toLowerCase();
  if (t.includes('purpose') || idx === 0) {
    return {
      bgGradient: "from-[#381e0a]/95 via-[#1f1005]/85 to-[#0e0702]/95",
      borderColor: "border-[#f59e0b]/40 group-hover:border-[#f59e0b]/80 shadow-[0_15px_45px_-10px_rgba(245,158,11,0.25)]",
      iconBox: "bg-gradient-to-br from-[#d97706] to-[#b45309] border border-[#fbbf24]/50 shadow-[0_0_20px_rgba(217,119,6,0.6)] text-white",
      accentText: "text-[#fbbf24]",
      badgeBg: "bg-[#f59e0b]/20 text-[#fbbf24] border border-[#f59e0b]/40",
      orbColor: "bg-[#f59e0b]/10",
      pulseColor: "bg-[#fbbf24]",
      icon: <Target className="w-7 h-7 sm:w-8 sm:h-8" />,
      tag: "Tailored for SMBs & Merchants",
    };
  } else if (t.includes('in-house') || idx === 1) {
    return {
      bgGradient: "from-[#141842]/95 via-[#0b0e26]/85 to-[#050612]/95",
      borderColor: "border-[#5b6bff]/40 group-hover:border-[#5b6bff]/80 shadow-[0_15px_45px_-10px_rgba(91,107,255,0.25)]",
      iconBox: "bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] border border-[#60a5fa]/50 shadow-[0_0_20px_rgba(37,99,235,0.6)] text-white",
      accentText: "text-[#60a5fa]",
      badgeBg: "bg-[#5b6bff]/20 text-[#8b6bff] border border-[#5b6bff]/40",
      orbColor: "bg-[#5b6bff]/10",
      pulseColor: "bg-[#60a5fa]",
      icon: <Cpu className="w-7 h-7 sm:w-8 sm:h-8" />,
      tag: "100% Owned Craft • No Outsource",
    };
  } else if (t.includes('global') || idx === 2) {
    return {
      bgGradient: "from-[#082f3a]/95 via-[#041a22]/85 to-[#020b0f]/95",
      borderColor: "border-[#06b6d4]/40 group-hover:border-[#06b6d4]/80 shadow-[0_15px_45px_-10px_rgba(6,182,212,0.25)]",
      iconBox: "bg-gradient-to-br from-[#0891b2] to-[#0e7490] border border-[#22d3ee]/50 shadow-[0_0_20px_rgba(8,145,178,0.6)] text-white",
      accentText: "text-[#22d3ee]",
      badgeBg: "bg-[#06b6d4]/20 text-[#22d3ee] border border-[#06b6d4]/40",
      orbColor: "bg-[#06b6d4]/10",
      pulseColor: "bg-[#22d3ee]",
      icon: <Globe className="w-7 h-7 sm:w-8 sm:h-8" />,
      tag: "Building from Thiruvarur for the World",
    };
  } else if (t.includes('messaging') || idx === 3) {
    return {
      bgGradient: "from-[#052e1b]/95 via-[#041c10]/85 to-[#030d08]/95",
      borderColor: "border-[#10b981]/40 group-hover:border-[#10b981]/80 shadow-[0_15px_45px_-10px_rgba(16,185,129,0.25)]",
      iconBox: "bg-gradient-to-br from-[#059669] to-[#047857] border border-[#34d399]/50 shadow-[0_0_20px_rgba(5,150,105,0.6)] text-white",
      accentText: "text-[#34d399]",
      badgeBg: "bg-[#10b981]/20 text-[#34d399] border border-[#10b981]/40",
      orbColor: "bg-[#10b981]/10",
      pulseColor: "bg-[#34d399]",
      icon: <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />,
      tag: "WhatsApp & Mobile API-First",
    };
  } else {
    // fast build ship learn
    return {
      bgGradient: "from-[#2c1342]/95 via-[#180a24]/85 to-[#0b0410]/95",
      borderColor: "border-[#a855f7]/40 group-hover:border-[#a855f7]/80 shadow-[0_15px_45px_-10px_rgba(168,85,247,0.25)]",
      iconBox: "bg-gradient-to-br from-[#9333ea] to-[#7e22ce] border border-[#c084fc]/50 shadow-[0_0_20px_rgba(147,51,234,0.6)] text-white",
      accentText: "text-[#c084fc]",
      badgeBg: "bg-[#a855f7]/20 text-[#c084fc] border border-[#a855f7]/40",
      orbColor: "bg-[#a855f7]/10",
      pulseColor: "bg-[#c084fc]",
      icon: <RefreshCw className="w-7 h-7 sm:w-8 sm:h-8 animate-spin-slow" />,
      tag: "Weekly Prod Releases • Real Feedback",
    };
  }
};

export const Culture: React.FC = () => {
  return (
    <>
      <SEO
        title="Our Culture & DNA — Built on Grit, Speed & Ownership | iEYAL Solutions"
        description="Discover the cultural values that drive iEYAL Solutions: fast build-ship-learn cycles, ownership, and small-town discipline combined with global ambition."
      />

      <HeroSection
        badge="Company Culture & Values"
        heading="Built on Grit, Speed & Extreme Ownership."
        subheading="We are a multidisciplinary team of 22+ engineers, designers, and growth builders who care deeply about craft and customer results."
        centered={true}
        ctaGroup={
          <Link to="/company/careers">
            <Button variant="glow" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              View Open Roles
            </Button>
          </Link>
        }
      />

      <section className="py-16 md:py-24 max-w-site mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge variant="indigo" className="mb-4">How We Operate</Badge>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-paper mb-4">
            The 5 Commandments of iEYAL Engineering
          </h2>
          <p className="text-base sm:text-lg text-text-dim">
            We don't believe in corporate bureaucracy or endless status meetings. We ship real code to real businesses every single week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {COMPANY_VALUES.map((val, idx) => {
            const theme = getCommandmentTheme(val.title, idx);
            const isLast = idx === COMPANY_VALUES.length - 1;

            return (
              <div
                key={idx}
                className={cn(
                  "relative rounded-[32px] p-6 sm:p-8 md:p-10 overflow-hidden border transition-all duration-500 group flex flex-col justify-between h-full bg-gradient-to-br backdrop-blur-xl group-hover:-translate-y-2 shadow-xl",
                  theme.bgGradient,
                  theme.borderColor,
                  isLast ? "md:col-span-2 lg:col-span-1" : ""
                )}
              >
                {/* Background glowing orb */}
                <div className={cn("absolute -top-16 -right-16 w-52 h-52 rounded-full blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-150", theme.orbColor)} />

                {/* Top Header Area */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg",
                        theme.iconBox
                      )}>
                        {theme.icon}
                      </div>
                      <div>
                        <span className={cn("text-3xl sm:text-4xl font-display font-extrabold tracking-tight drop-shadow block", theme.accentText)}>
                          0{idx + 1}
                        </span>
                        <span className="text-xs text-text-dim uppercase tracking-wider font-semibold">
                          / Engineering DNA
                        </span>
                      </div>
                    </div>

                    <span className={cn(
                      "text-[10px] sm:text-[11px] font-display font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest backdrop-blur-md shadow-sm shrink-0",
                      theme.badgeBg
                    )}>
                      COMMANDMENT 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight mb-4 group-hover:text-paper transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-sm sm:text-base text-text-dim leading-relaxed mb-8 font-normal">
                    {val.description}
                  </p>
                </div>

                {/* Bottom Telemetry Footer */}
                <div className="pt-5 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 border border-white/[0.08] text-text-dim font-medium shadow-inner">
                    <span className={cn("w-2 h-2 rounded-full animate-pulse shrink-0", theme.pulseColor)} />
                    <span className="text-paper/90 font-semibold">{theme.tag}</span>
                  </span>

                  <span className={cn("font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5", theme.accentText)}>
                    <Zap className="w-3.5 h-3.5" /> iEYAL Standard
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection
        heading="Want to Do the Best Work of Your Career?"
        subheading="If you thrive in high-ownership environments and want to build AI and WhatsApp tools used by thousands daily, check out our open positions."
        primaryBtnText="See Career Opportunities"
        primaryBtnHref="/company/careers"
      />
    </>
  );
};
