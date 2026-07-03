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
      <section className="py-12 md:py-20 max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 md:space-y-16">
          {PRODUCTS_CONFIG.map((prod, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <Card
                key={prod.id}
                variant="glass"
                className="p-6 sm:p-10 lg:p-12 border-white/[0.08] hover:border-indigo/40 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className={`lg:col-span-7 space-y-6 ${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-l bg-indigo/15 border border-indigo/30">
                        {getIcon(prod.iconName)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h2 className="text-2xl sm:text-3xl font-display font-bold text-paper">
                            {prod.name}
                          </h2>
                          <Badge variant={prod.status === 'Live' ? 'live' : 'indigo'} size="sm">
                            {prod.badge}
                          </Badge>
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-indigo-2">{prod.tagline}</p>
                      </div>
                    </div>

                    <p className="text-base sm:text-lg text-text-dim leading-relaxed">
                      {prod.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      {prod.features.map((feat, fIdx) => (
                        <div key={fIdx} className="p-4 rounded-m bg-white/[0.03] border border-white/[0.06] space-y-1.5">
                          <div className="flex items-center gap-2 text-paper font-display font-semibold text-sm">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>{feat.title}</span>
                          </div>
                          <p className="text-xs text-text-dim leading-relaxed">{feat.description}</p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex flex-wrap gap-4 items-center">
                      <Link to={prod.href}>
                        <Button variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                          Explore {prod.name} Features
                        </Button>
                      </Link>
                      <Link to="/contact">
                        <Button variant="outline">Request Beta Access</Button>
                      </Link>
                    </div>
                  </div>

                  {/* Visual mockup banner */}
                  <div className={`lg:col-span-5 ${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="rounded-l bg-gradient-to-br from-indigo/20 via-ink-2 to-ink p-6 sm:p-8 border border-white/[0.1] text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-white/[0.08] flex items-center justify-center mx-auto mb-2 text-indigo-2">
                        {getIcon(prod.iconName)}
                      </div>
                      <h3 className="font-display font-bold text-xl text-paper">
                        {prod.name} in Action
                      </h3>
                      <p className="text-xs sm:text-sm text-text-dim">
                        {prod.heroSupportingText}
                      </p>
                      <div className="pt-4">
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
      <section className="py-16 bg-ink-2/50 border-y border-white/[0.06]">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="indigo" className="mb-4">The Architectural Advantage</Badge>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-paper mb-4">
              Why an Integrated Ecosystem Beats Standalone Tools
            </h2>
            <p className="text-base text-text-dim">
              See what happens when your chat, commerce, loyalty, and fulfillment share the exact same customer database.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/[0.1] bg-white/[0.03]">
                  <th className="py-4 px-6 font-display font-semibold text-paper text-sm">Capability</th>
                  <th className="py-4 px-6 font-display font-bold text-indigo-2 text-sm bg-indigo/10 border-x border-indigo/20">iEYAL Unified Suite</th>
                  <th className="py-4 px-6 font-display font-medium text-text-faint text-sm">Fragmented Tool Stack</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-sm text-text-dim">
                <tr>
                  <td className="py-4 px-6 font-medium text-paper">Customer Data Source</td>
                  <td className="py-4 px-6 bg-indigo/[0.05] border-x border-indigo/20 font-medium text-emerald-300">✓ Single unified WhatsApp phone number profile</td>
                  <td className="py-4 px-6 text-text-faint">✗ Siloed data across 4+ different login dashboards</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-paper">Checkout Experience</td>
                  <td className="py-4 px-6 bg-indigo/[0.05] border-x border-indigo/20 font-medium text-emerald-300">✓ Instant 1-click UPI checkout inside chat (25%+ conversion)</td>
                  <td className="py-4 px-6 text-text-faint">✗ Forces user to external website loading slowly (~2% conversion)</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-paper">Loyalty & Cashback</td>
                  <td className="py-4 px-6 bg-indigo/[0.05] border-x border-indigo/20 font-medium text-emerald-300">✓ Automated cashback notifications sent via WhatsApp</td>
                  <td className="py-4 px-6 text-text-faint">✗ Forgotten paper punch cards or custom app downloads</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-paper">Aggregator Commissions</td>
                  <td className="py-4 px-6 bg-indigo/[0.05] border-x border-indigo/20 font-medium text-emerald-300">✓ 0% commission on direct WhatsApp orders</td>
                  <td className="py-4 px-6 text-text-faint">✗ 25%–30% commission paid on every marketplace order</td>
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
