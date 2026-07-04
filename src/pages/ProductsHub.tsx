import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MessageSquare, ShoppingCart, Gift, CheckSquare, Sparkles } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { PRODUCTS_CONFIG } from '@/config/products';

export const ProductsHub: React.FC = () => {
  const getIcon = (name: string) => {
    const cls = "w-6 h-6 text-indigo-2";
    switch (name) {
      case 'MessageSquare': return <MessageSquare className={cls} />;
      case 'ShoppingCart': return <ShoppingCart className={cls} />;
      case 'Gift': return <Gift className={cls} />;
      case 'CheckSquare': return <CheckSquare className={cls} />;
      default: return <Sparkles className={cls} />;
    }
  };

  return (
    <>
      <SEO
        title="All Products Hub — WhatsApp CRM, Commerce, Loyalty & Workflows | iEYAL Solutions"
        description="Explore the complete iEYAL product suite: Ownchat, Owncart, OwnRewards, and OwnTask. Built AI-first for growing small and medium businesses."
      />

      <HeroSection
        badge="Complete Product Suite"
        heading="One Platform. Four Powerful Growth Engines."
        subheading="Stop paying for 10 disconnected tools. iEYAL integrates your customer chat, WhatsApp catalog checkout, automated loyalty rewards, and team task fulfillment into a single WhatsApp-native ecosystem."
        centered={true}
        ctaGroup={
          <Link to="/contact">
            <Button variant="glow" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Schedule a Custom Suite Demo
            </Button>
          </Link>
        }
      />

      {/* 4 Products Deep Grid */}
      <section className="py-8 md:py-14 max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 md:space-y-12">
          {PRODUCTS_CONFIG.map((prod, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <Card
                key={prod.id}
                variant="glass"
                className="p-5 sm:p-6 lg:p-8 border-white/[0.08] hover:border-indigo/40 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                  <div className={`lg:col-span-7 space-y-4 ${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-l bg-indigo/15 border border-indigo/30">
                        {getIcon(prod.iconName)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h2 className="text-xl sm:text-2xl font-display font-bold text-paper">
                            {prod.name}
                          </h2>
                          <Badge variant={prod.status === 'Live' ? 'live' : 'indigo'} size="sm">
                            {prod.badge}
                          </Badge>
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-indigo-2">{prod.tagline}</p>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-text-dim leading-relaxed">
                      {prod.description}
                    </p>

                    <div className={`grid grid-cols-1 gap-3 pt-1 ${prod.features.length === 5 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2'}`}>
                      {prod.features.map((feat, fIdx) => (
                        <div key={fIdx} className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] space-y-1">
                          <div className="flex items-center gap-1.5 text-paper font-display font-semibold text-xs">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{feat.title}</span>
                          </div>
                          <p className="text-[11px] text-text-dim leading-snug line-clamp-2">{feat.description}</p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex flex-wrap gap-3 items-center">
                      <Link to={prod.href}>
                        <Button variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                          Explore {prod.name} Features
                        </Button>
                      </Link>
                      <Link to="/contact">
                        <Button variant="outline" size="md">Request Beta Access</Button>
                      </Link>
                    </div>
                  </div>

                  {/* Visual mockup banner */}
                  <div className={`lg:col-span-5 ${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="rounded-xl bg-gradient-to-br from-indigo/20 via-ink-2 to-ink p-5 sm:p-6 border border-white/[0.1] text-center space-y-3">
                      <div className="w-12 h-12 rounded-full bg-white/[0.08] flex items-center justify-center mx-auto mb-1 text-indigo-2">
                        {getIcon(prod.iconName)}
                      </div>
                      <h3 className="font-display font-bold text-lg text-paper">
                        {prod.name} in Action
                      </h3>
                      <p className="text-xs text-text-dim leading-snug">
                        {prod.heroSupportingText}
                      </p>
                      <div className="pt-2">
                        <Badge variant="cyan">Official WhatsApp API Native</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Comparison Matrix: iEYAL vs Fragmented Tools */}
      <section className="py-10 sm:py-14 bg-ink-2/50 border-y border-white/[0.06]">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <Badge variant="indigo" className="mb-2">The Architectural Advantage</Badge>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-paper mb-2">
              Why an Integrated Ecosystem Beats Standalone Tools
            </h2>
            <p className="text-xs sm:text-sm text-text-dim">
              See what happens when your chat, commerce, loyalty, and fulfillment share the exact same customer database.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/[0.1] bg-white/[0.03]">
                  <th className="py-3 px-4 font-display font-semibold text-paper text-xs">Capability</th>
                  <th className="py-3 px-4 font-display font-bold text-indigo-2 text-xs bg-indigo/10 border-x border-indigo/20">iEYAL Unified Suite</th>
                  <th className="py-3 px-4 font-display font-medium text-text-faint text-xs">Fragmented Tool Stack</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-xs text-text-dim">
                <tr>
                  <td className="py-3 px-4 font-medium text-paper">Customer Data Source</td>
                  <td className="py-3 px-4 bg-indigo/[0.05] border-x border-indigo/20 font-medium text-emerald-300">✓ Single unified WhatsApp phone number profile</td>
                  <td className="py-3 px-4 text-text-faint">✗ Siloed data across 4+ different login dashboards</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-paper">Checkout Experience</td>
                  <td className="py-3 px-4 bg-indigo/[0.05] border-x border-indigo/20 font-medium text-emerald-300">✓ Instant 1-click UPI checkout inside chat (25%+ conversion)</td>
                  <td className="py-3 px-4 text-text-faint">✗ Forces user to external website loading slowly (~2% conversion)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-paper">Loyalty & Cashback</td>
                  <td className="py-3 px-4 bg-indigo/[0.05] border-x border-indigo/20 font-medium text-emerald-300">✓ Automated cashback notifications sent via WhatsApp</td>
                  <td className="py-3 px-4 text-text-faint">✗ Forgotten paper punch cards or custom app downloads</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-paper">Aggregator Commissions</td>
                  <td className="py-3 px-4 bg-indigo/[0.05] border-x border-indigo/20 font-medium text-emerald-300">✓ 0% commission on direct WhatsApp orders</td>
                  <td className="py-3 px-4 text-text-faint">✗ 25%–30% commission paid on every marketplace order</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to See the Ecosystem in Action?"
        subheading="Book a personalized demo with our founding team and see how Ownchat, Owncart, OwnRewards, and OwnTask can transform your business."
        primaryBtnText="Schedule Walkthrough"
        primaryBtnHref="/contact"
      />
    </>
  );
};
