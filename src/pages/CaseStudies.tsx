import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp, Quote } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { CASE_STUDIES_CONFIG } from '@/config/milestones';

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
          {CASE_STUDIES_CONFIG.map((study) => (
            <Card key={study.slug} variant="glass" className="p-6 sm:p-10 border-white/[0.08] hover:border-indigo/40">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-6">
                  <div className="flex items-center gap-4">
                    {study.logo && (
                      <div className="h-12 px-3 bg-white/[0.04] rounded border border-white/[0.08] flex items-center justify-center">
                        <img src={study.logo} alt={study.client} className="max-h-8 object-contain" />
                      </div>
                    )}
                    <Badge variant="cyan">{study.industry}</Badge>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-paper">
                    {study.headline}
                  </h2>

                  <p className="text-sm sm:text-base text-text-dim leading-relaxed">
                    <strong>Challenge:</strong> {study.challenge}
                  </p>

                  <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/[0.08]">
                    {study.metrics.map((m, idx) => (
                      <div key={idx}>
                        <span className="text-xl sm:text-3xl font-display font-bold text-emerald-400 block">{m.value}</span>
                        <span className="text-xs text-text-dim">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-text-faint uppercase tracking-wider mr-2">Products Used:</span>
                    {study.productsUsed.map((p) => (
                      <Badge key={p} variant="indigo" size="sm">{p}</Badge>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 bg-ink-2/80 p-6 rounded-l border border-white/[0.08] flex flex-col justify-between space-y-4">
                  <Quote className="w-8 h-8 text-indigo-2/40" />
                  <p className="text-sm italic text-paper leading-relaxed">
                    "{study.quote?.text}"
                  </p>
                  <div className="pt-2 border-t border-white/[0.06]">
                    <span className="font-bold text-xs text-paper block">{study.quote?.author}</span>
                    <span className="text-[11px] text-text-faint">{study.quote?.role}</span>
                  </div>
                  <Link to={`/resources/case-studies/${study.slug}`} className="pt-2 block">
                    <Button variant="secondary" size="sm" className="w-full justify-between group">
                      <span>Read Full Study</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
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
