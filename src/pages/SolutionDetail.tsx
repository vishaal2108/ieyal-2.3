import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, MessageCircle } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { KiboMascot } from '@/components/branding/KiboMascot';
import { SOLUTIONS_CONFIG } from '@/config/solutions';

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
              <Button variant="glow" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                Book a Live Industry Walkthrough
              </Button>
            </Link>
            <a href="https://wa.me/9791467587" target="_blank" rel="noopener noreferrer">
              <Button variant="wa" size="lg" icon={<MessageCircle className="w-5 h-5" />}>
                Test Ordering on WhatsApp
              </Button>
            </a>
          </>
        }
        trustStrip={
          <div className="flex flex-wrap items-center gap-6 text-xs text-text-dim">
            <span className="flex items-center gap-1.5 font-medium">
              <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" /> Zero Aggregator Commissions
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-indigo-2 shrink-0" /> Official Meta API Infrastructure
            </span>
          </div>
        }
        visual={
          <div className="flex flex-col items-center justify-center">
            <KiboMascot variant={solutionSlug === 'restaurants' ? 'automation' : solutionSlug === 'retail' ? 'cart' : 'tasks'} size="xl" caption={`Kibo Automating ${solution.name}`} />
          </div>
        }
      />

      {/* Challenges & Solutions Matrix */}
      <section className="py-16 md:py-24 max-w-site mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge variant="indigo" className="mb-4">From Friction to Profit</Badge>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-paper mb-4">
            Solving the Biggest Roadblocks in {solution.name}
          </h2>
          <p className="text-base sm:text-lg text-text-dim">
            Why traditional software apps fail this industry—and how our WhatsApp-native architecture solves it permanently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solution.challenges.map((challenge, idx) => (
            <Card key={idx} variant="glass" className="space-y-4 border-white/[0.08] hover:border-indigo/40">
              <div className="p-3 rounded bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">
                Industry Challenge
              </div>
              <h3 className="text-lg font-display font-bold text-paper">
                {challenge.problem}
              </h3>
              <div className="pt-3 border-t border-white/[0.06] space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>The iEYAL Solution</span>
                </div>
                <p className="text-sm text-text-dim leading-relaxed">
                  {challenge.solution}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Industry Workflow Stepper */}
      <section className="py-16 md:py-24 bg-ink-2/30 border-t border-white/[0.06]">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <Badge variant="violet" className="mb-4">Connected Journey</Badge>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-paper mb-4">
              How Your Customer Workflow Runs on iEYAL
            </h2>
            <p className="text-base sm:text-lg text-text-dim">
              From first chat to repeat loyalty reward—all inside a single WhatsApp conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solution.workflows.map((wf) => (
              <Card key={wf.step} variant="glass" className="space-y-4 relative overflow-hidden border-white/[0.08]">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-indigo text-white font-bold text-sm flex items-center justify-center">
                    0{wf.step}
                  </span>
                  <Badge variant="outline" size="sm">Powered by {wf.product}</Badge>
                </div>
                <h3 className="text-lg font-display font-bold text-paper">
                  {wf.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-dim leading-relaxed">
                  {wf.description}
                </p>
              </Card>
            ))}
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
