import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp, Quote, Sparkles } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { CASE_STUDIES_CONFIG } from '@/config/milestones';
import { cn } from '@/utils/cn';

const getCaseStudyTheme = (idx: number) => {
  const themes = [
    {
      bgGradient: "from-[#141842]/95 via-[#0b0e26]/90 to-[#050612]/95",
      borderColor: "border-[#5b6bff]/40 hover:border-[#5b6bff]/80 shadow-[0_0_50px_rgba(91,107,255,0.25)]",
      orbColor: "bg-[#5b6bff]/15",
      accentText: "text-[#8b6bff]",
      badgeBg: "bg-[#5b6bff]/20 text-[#8b6bff] border-[#5b6bff]/40",
      quoteIconColor: "text-[#60a5fa]/40",
    },
    {
      bgGradient: "from-[#052e1b]/95 via-[#041c10]/90 to-[#030d08]/95",
      borderColor: "border-[#10b981]/40 hover:border-[#10b981]/80 shadow-[0_0_50px_rgba(16,185,129,0.25)]",
      orbColor: "bg-[#10b981]/15",
      accentText: "text-[#34d399]",
      badgeBg: "bg-[#10b981]/20 text-[#34d399] border-[#10b981]/40",
      quoteIconColor: "text-[#34d399]/40",
    },
    {
      bgGradient: "from-[#381e0a]/95 via-[#1f1005]/90 to-[#0e0702]/95",
      borderColor: "border-[#f59e0b]/40 hover:border-[#f59e0b]/80 shadow-[0_0_50px_rgba(245,158,11,0.25)]",
      orbColor: "bg-[#f59e0b]/15",
      accentText: "text-[#fbbf24]",
      badgeBg: "bg-[#f59e0b]/20 text-[#fbbf24] border-[#f59e0b]/40",
      quoteIconColor: "text-[#fbbf24]/40",
    },
  ];
  return themes[idx % themes.length];
};

export const CaseStudies: React.FC = () => {
  return (
    <>
      <SEO
        title="Customer Case Studies — Real ROI from 200+ Businesses | iEYAL Solutions"
        description="See how real retail chains, restaurants, and delivery businesses achieved 4.2x ROI and 0% aggregator fees using iEYAL."
      />

      <HeroSection
        badge="Proven Validation"
        heading="Real Businesses. Measurable Results."
        subheading="Explore how businesses across India, SEA, and MENA rely on iEYAL to automate customer communication, increase repeat sales, and cut platform fees."
        centered={true}
      />

      <section className="py-16 max-w-site mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="space-y-12">
          {CASE_STUDIES_CONFIG.map((study, idx) => {
            const theme = getCaseStudyTheme(idx);
            return (
              <div
                key={study.slug}
                className={cn(
                  "relative rounded-[36px] p-8 sm:p-12 bg-gradient-to-br border-2 group overflow-hidden transition-all duration-500 backdrop-blur-2xl",
                  theme.bgGradient,
                  theme.borderColor
                )}
              >
                <div className={cn("absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl pointer-events-none", theme.orbColor)} />
                <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                  <div className="lg:col-span-8 space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      {study.logo && (
                        <div className="h-12 px-3 bg-white/[0.06] rounded-xl border border-white/[0.1] flex items-center justify-center shadow-sm">
                          <img src={study.logo} alt={study.client} className="max-h-8 object-contain" />
                        </div>
                      )}
                      <span className={cn("inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-display font-bold uppercase tracking-widest border", theme.badgeBg)}>
                        🏆 ROI PROOF
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        <CheckCircle2 className="w-3.5 h-3.5" /> {study.industry}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
                      {study.headline}
                    </h2>

                    <p className="text-sm sm:text-base text-text-dim leading-relaxed font-normal">
                      <strong className="text-paper">The Challenge:</strong> {study.challenge}
                    </p>

                    <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-white/[0.1]">
                      {study.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="bg-black/40 border border-white/10 p-3 sm:p-4 rounded-2xl text-center shadow-inner">
                          <span className="text-xl sm:text-3xl font-display font-black text-emerald-400 block tracking-tight">{m.value}</span>
                          <span className="text-[11px] sm:text-xs text-text-dim font-medium uppercase tracking-wider mt-1 block">{m.label}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      <span className="text-xs font-semibold text-text-faint uppercase tracking-wider mr-2">Products Used:</span>
                      {study.productsUsed.map((p) => (
                        <Badge key={p} variant="indigo" size="sm">{p}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 bg-black/50 p-6 sm:p-8 rounded-3xl border border-white/[0.1] flex flex-col justify-between space-y-6 text-center shadow-2xl">
                    <div className="flex justify-center">
                      <Quote className={cn("w-10 h-10", theme.quoteIconColor)} />
                    </div>
                    <p className="text-sm sm:text-base italic text-paper/90 leading-relaxed">"{study.quote?.text}"</p>
                    <div>
                      <span className="font-display font-bold text-sm text-white block">{study.quote?.author}</span>
                      <span className="text-xs text-text-dim">{study.quote?.role}</span>
                    </div>
                    <Link to={`/resources/case-studies/${study.slug}`} className="w-full block pt-2">
                      <Button variant="glow" size="lg" className="w-full" icon={<ArrowRight className="w-4 h-4" />}>
                        Read Full Study
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection
        heading="Ready to Write Your Own Success Story?"
        subheading="Launch your WhatsApp-native growth engine today with zero setup fees."
        primaryBtnText="Get Started"
        primaryBtnHref="/contact"
      />
    </>
  );
};

export const CaseStudyPostView: React.FC = () => {
  const { studySlug } = useParams<{ studySlug: string }>();
  const study = CASE_STUDIES_CONFIG.find((s) => s.slug === studySlug);

  if (!study) {
    return <Navigate to="/resources/case-studies" replace />;
  }

  return (
    <>
      <SEO
        title={`${study.headline} | iEYAL Case Studies`}
        description={study.challenge}
      />

      <article className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4 pb-8 border-b border-white/[0.08]">
          <Badge variant="emerald">{study.industry} Case Study</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-paper leading-tight">
            {study.headline}
          </h1>
          <span className="text-base text-indigo-2 font-medium block">Client Profile: {study.client}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {study.metrics.map((m, idx) => (
            <Card key={idx} variant="glow" className="text-center p-6 space-y-1">
              <span className="text-3xl sm:text-4xl font-display font-bold text-emerald-400 block">{m.value}</span>
              <span className="text-xs sm:text-sm text-text-dim">{m.label}</span>
            </Card>
          ))}
        </div>

        <div className="space-y-8 text-text-dim leading-relaxed text-base sm:text-lg">
          <section className="space-y-3">
            <h2 className="text-2xl font-display font-bold text-paper">The Operational Challenge</h2>
            <p>{study.challenge}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-display font-bold text-paper">The iEYAL Solution</h2>
            <p>{study.solution}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              {study.productsUsed.map((p) => (
                <Badge key={p} variant="indigo">{p} Deployed</Badge>
              ))}
            </div>
          </section>

          {study.quote && (
            <div className="p-8 rounded-l bg-gradient-to-r from-violet-deep/50 via-ink-2 to-ink border border-indigo/40 space-y-4 text-center my-8">
              <p className="text-lg sm:text-xl italic text-paper font-medium">"{study.quote.text}"</p>
              <div>
                <span className="font-bold text-sm text-paper block">{study.quote.author}</span>
                <span className="text-xs text-text-faint">{study.quote.role}</span>
              </div>
            </div>
          )}
        </div>
      </article>

      <CTASection
        heading="Achieve Similar Results for Your Business"
        subheading="Let our operations team design a custom WhatsApp workflow for your brand."
        primaryBtnText="Book Workflow Walkthrough"
        primaryBtnHref="/contact"
      />
    </>
  );
};
