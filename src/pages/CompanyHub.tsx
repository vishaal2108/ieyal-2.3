import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Users, 
  Heart, 
  Award, 
  Briefcase, 
  Globe, 
  Target,
  Zap,
  Cpu,
  RefreshCw,
  MessageCircle
} from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { TeamSection } from '@/components/branding/TeamSection';
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
      icon: <Target className="w-5 h-5" />,
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
      icon: <Cpu className="w-5 h-5" />,
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
      icon: <Globe className="w-5 h-5" />,
      tag: "Building from Thiruvarur for World",
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
      icon: <MessageCircle className="w-5 h-5" />,
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
      icon: <RefreshCw className="w-5 h-5 animate-spin-slow" />,
      tag: "Weekly Prod Releases",
    };
  }
};

export const CompanyHub: React.FC = () => {
  const navCards = [
    { title: "About Us & Mission", href: "/company/about", desc: "Our origin story from Thiruvarur, Tamil Nadu to empowering 200+ global businesses.", icon: <Globe className="w-5 h-5 text-indigo-2" /> },
    { title: "Culture & DNA", href: "/company/culture", desc: "Built on speed, grit, ownership, and deep customer empathy.", icon: <Heart className="w-5 h-5 text-pink-400" /> },
    { title: "Leadership Team", href: "/company/team", desc: "Meet our hands-on founders building world-class SaaS from scratch.", icon: <Users className="w-5 h-5 text-cyan" /> },
    { title: "Milestones", href: "/company/milestones", desc: "DPIIT recognized, Meta Business Partner, and TANSEED 5.0 grant winner.", icon: <Award className="w-5 h-5 text-amber-400" /> },
    { title: "Careers", href: "/company/careers", desc: "Join our growing 22+ member multidisciplinary team.", icon: <Briefcase className="w-5 h-5 text-emerald-400" /> },
  ];

  return (
    <>
      <SEO
        title="Company Overview — Mission, Culture & Leadership | iEYAL Solutions"
        description="Learn about iEYAL Solutions: founded in Thiruvarur, Tamil Nadu, recognized by DPIIT and TANSEED 5.0, and building world-class WhatsApp SaaS for SMBs."
      />

      <HeroSection
        badge="About iEYAL Solutions"
        heading="Global Ambition. Tier-3 Town Roots."
        subheading="We started with a simple observation: enterprise software is too complex and costly for small businesses. So we built a messaging-native alternative from scratch in Thiruvarur, Tamil Nadu."
        centered={true}
        ctaGroup={
          <Link to="/company/about">
            <Button variant="glow" size="md" icon={<ArrowRight className="w-4 h-4" />}>
              Read Our Origin Story
            </Button>
          </Link>
        }
      />

      {/* Company Exploration Grid */}
      <section className="py-8 sm:py-12 max-w-site mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-78px)] flex flex-col justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {navCards.map((card, idx) => (
            <Link key={idx} to={card.href} className="block group h-full">
              <Card variant="interactive" className="h-full flex flex-col justify-between p-4 sm:p-5">
                <div>
                  <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] w-fit mb-3 group-hover:bg-indigo/20 transition-colors">
                    {card.icon}
                  </div>
                  <h3 className="text-base font-display font-bold text-paper group-hover:text-indigo-2 transition-colors mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-xs text-text-dim leading-relaxed mb-3 line-clamp-3">
                    {card.desc}
                  </p>
                </div>
                <div className="pt-2.5 mt-auto border-t border-white/[0.06] flex items-center justify-between text-[11px] font-display font-semibold text-indigo-2">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-8 sm:py-12 bg-ink-2/40 border-y border-white/[0.06] min-h-[calc(100vh-78px)] flex flex-col justify-center">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <Badge variant="violet" className="mb-2">Our Core Philosophy</Badge>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-paper mb-2">
              What Drives How We Build and Serve
            </h2>
            <p className="text-xs sm:text-sm text-text-dim">
              We don't try to be everything to everyone. We focus relentlessly on what small businesses need to thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {COMPANY_VALUES.map((val, idx) => {
              const theme = getCommandmentTheme(val.title, idx);

              return (
                <div
                  key={idx}
                  className={cn(
                    "relative rounded-2xl p-4 sm:p-5 overflow-hidden border transition-all duration-500 group flex flex-col justify-between h-full bg-gradient-to-br backdrop-blur-xl group-hover:-translate-y-1 shadow-md",
                    theme.bgGradient,
                    theme.borderColor
                  )}
                >
                  {/* Background glowing orb */}
                  <div className={cn("absolute -top-16 -right-16 w-52 h-52 rounded-full blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-150", theme.orbColor)} />

                  {/* Top Header Area */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className={cn(
                        "w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-105 shadow-md",
                        theme.iconBox
                      )}>
                        {theme.icon}
                      </div>
                      <div>
                        <span className={cn("text-2xl sm:text-3xl font-display font-extrabold tracking-tight drop-shadow block", theme.accentText)}>
                          0{idx + 1}
                        </span>
                      </div>
                    </div>

                    <div className="mb-2">
                      <span className={cn(
                        "text-[9px] font-display font-bold px-2 py-0.5 rounded-full uppercase tracking-wider backdrop-blur-md shadow-sm inline-block",
                        theme.badgeBg
                      )}>
                        DNA 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-display font-bold text-white tracking-tight mb-2 group-hover:text-paper transition-colors line-clamp-2">
                      {val.title}
                    </h3>
                    <p className="text-xs text-text-dim leading-relaxed mb-4 font-normal line-clamp-4">
                      {val.description}
                    </p>
                  </div>

                  {/* Bottom Telemetry Footer */}
                  <div className="pt-2.5 mt-auto border-t border-white/[0.08] flex items-center justify-between gap-1 text-[10px]">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/50 border border-white/[0.08] text-text-dim font-medium shadow-inner truncate">
                      <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse shrink-0", theme.pulseColor)} />
                      <span className="text-paper/90 font-semibold truncate">{theme.tag}</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <TeamSection />

      <CTASection
        heading="Want to Join Our Mission or Partner With Us?"
        subheading="Whether you are looking to build with us or deploy our WhatsApp suite for your clients, we would love to connect."
        primaryBtnText="Explore Careers"
        primaryBtnHref="/company/careers"
        secondaryBtnText="Contact Leadership"
        secondaryBtnHref="/contact"
      />
    </>
  );
};
