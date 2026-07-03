import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Utensils, ShoppingBag, Truck, CheckCircle2 } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { SOLUTIONS_CONFIG } from '@/config/solutions';

export const SolutionsHub: React.FC = () => {
  const getIcon = (id: string) => {
    const cls = "w-7 h-7 text-indigo-2";
    switch (id) {
      case 'restaurants': return <Utensils className={cls} />;
      case 'retail': return <ShoppingBag className={cls} />;
      case 'local-delivery': return <Truck className={cls} />;
      default: return <CheckCircle2 className={cls} />;
    }
  };

  return (
    <>
      <SEO
        title="Industry Solutions — WhatsApp SaaS for Restaurants, Retail & Delivery | iEYAL Solutions"
        description="Discover how iEYAL solves industry-specific friction for Restaurants, Retail & D2C brands, and Local Delivery operations with 0% commission WhatsApp tools."
      />

      <HeroSection
        badge="Tailored Industry Workflows"
        heading="Purpose-Built for How Your Industry Sells."
        subheading="Whether you run a bustling takeaway restaurant, a scaling D2C retail brand, or a hyperlocal delivery service, our WhatsApp-native ecosystem adapts directly to your operational reality."
        centered={true}
        ctaGroup={
          <Link to="/contact">
            <Button variant="glow" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Discuss Your Industry Workflow
            </Button>
          </Link>
        }
      />

      {/* Solutions Grid */}
      <section className="py-12 md:py-20 max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SOLUTIONS_CONFIG.map((sol) => (
            <Card
              key={sol.id}
              variant="glass"
              className="flex flex-col justify-between h-full border-white/[0.08] hover:border-indigo/40 group transition-all duration-300"
            >
              <div>
                <div className="w-14 h-14 rounded-l bg-indigo/15 border border-indigo/30 flex items-center justify-center mb-6">
                  {getIcon(sol.id)}
                </div>

                <Badge variant="indigo" size="sm" className="mb-3">
                  {sol.name}
                </Badge>

                <h2 className="text-2xl font-display font-bold text-paper mb-3 group-hover:text-indigo-2 transition-colors">
                  {sol.tagline}
                </h2>

                <p className="text-sm text-text-dim mb-6 leading-relaxed">
                  {sol.description}
                </p>

                <div className="space-y-3 mb-8 pt-4 border-t border-white/[0.06]">
                  <h3 className="text-xs font-display font-semibold uppercase tracking-wider text-text-faint">
                    Key Problems Solved:
                  </h3>
                  {sol.challenges.map((c, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-text">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{c.problem} → <strong className="text-emerald-300">0% Commission Direct Ordering</strong></span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <Link to={`/solutions/${sol.slug}`}>
                  <Button variant="secondary" className="w-full justify-between group/btn">
                    <span>Explore {sol.name} Solution</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Why General Tools Fail Section */}
      <section className="py-16 bg-ink-2/40 border-y border-white/[0.06]">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <Badge variant="cyan" className="mb-4">Why Specialization Matters</Badge>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-paper mb-6">
            Generic CRM Platforms Weren't Built for 10-Minute Takeaway Orders
          </h2>
          <p className="text-base sm:text-lg text-text-dim leading-relaxed mb-8">
            When a hungry customer messages your restaurant at 8 PM, or a shopper asks for a dress size during a flash sale, they won't wait for an email support ticket or a multi-step web form. iEYAL brings catalog browsing, UPI checkout, and live order tracking right into their WhatsApp chat window in under 3 seconds.
          </p>
          <Link to="/contact">
            <Button variant="glow" size="md">See Live Industry Workflows</Button>
          </Link>
        </div>
      </section>

      <CTASection
        heading="Ready to Eliminate Aggregator Commissions?"
        subheading="Let us show you how similar businesses in your industry saved 100% on platform fees while increasing repeat customer revenue by 38%."
        primaryBtnText="Book Industry Walkthrough"
        primaryBtnHref="/contact"
      />
    </>
  );
};
