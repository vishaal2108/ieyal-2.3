import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Calculator, ShieldCheck, Zap, MessageCircle } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { PRODUCTS_CONFIG } from '@/config/products';

export const Pricing: React.FC = () => {
  const [monthlyOrders, setMonthlyOrders] = useState<number>(500);
  const [avgOrderValue, setAvgOrderValue] = useState<number>(600);

  // Aggregators typically take 25% commission
  const monthlyRevenue = monthlyOrders * avgOrderValue;
  const aggregatorCommissionSaved = Math.round(monthlyRevenue * 0.25);
  const standaloneSoftwareCostSaved = 12000; // ~₹12,000/mo for Shopify + Zendesk + Loyalty apps
  const totalMonthlySavings = aggregatorCommissionSaved + standaloneSoftwareCostSaved;

  return (
    <>
      <SEO
        title="Pricing & ROI Calculator — Save 30% on Aggregator Fees | iEYAL Solutions"
        description="Calculate your savings with iEYAL Solutions. Enjoy 100% free beta access for Owncart, OwnRewards & OwnTask, with zero aggregator commissions."
      />

      <HeroSection
        badge="Simple, Transparent Pricing"
        heading="Pay for Growth. Not Platform Tax."
        subheading="Why give away 25–30% of your hard-earned revenue to delivery apps or pay $200/mo for disconnected Western software? iEYAL puts the profit back in your pocket."
        centered={true}
        trustStrip={
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-text-dim">
            <span className="flex items-center gap-1.5 font-medium"><ShieldCheck className="w-4 h-4 text-emerald-400" /> No Setup Fees During Beta</span>
            <span className="flex items-center gap-1.5 font-medium"><Zap className="w-4 h-4 text-amber-400" /> 0% Transaction Commission on Orders</span>
          </div>
        }
      />

      {/* Interactive ROI Savings Calculator */}
      <section className="py-12 md:py-20 max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <Card variant="glow" className="p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-indigo-2 font-display font-semibold text-sm">
                <Calculator className="w-5 h-5" />
                <span>Live Revenue ROI Calculator</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-paper">
                See How Much You Lose to Aggregators Every Month
              </h2>

              <p className="text-sm sm:text-base text-text-dim">
                Move the sliders to match your current online takeaway or retail order volume.
              </p>

              <div className="space-y-6 pt-2">
                <div>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-paper">Monthly Online Orders / Inquiries:</span>
                    <span className="text-indigo-2 font-bold font-display text-lg">{monthlyOrders.toLocaleString()} orders</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="5000"
                    step="50"
                    value={monthlyOrders}
                    onChange={(e) => setMonthlyOrders(Number(e.target.value))}
                    className="w-full h-2 bg-ink rounded-lg appearance-none cursor-pointer accent-indigo"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-paper">Average Order Value (₹):</span>
                    <span className="text-indigo-2 font-bold font-display text-lg">₹{avgOrderValue.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="150"
                    max="3000"
                    step="50"
                    value={avgOrderValue}
                    onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                    className="w-full h-2 bg-ink rounded-lg appearance-none cursor-pointer accent-indigo"
                  />
                </div>
              </div>
            </div>

            {/* Savings Result Banner */}
            <div className="lg:col-span-5">
              <div className="rounded-l bg-ink-2/90 border border-indigo/40 p-6 sm:p-8 text-center space-y-6 shadow-2xl relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <span className="text-xs font-display font-semibold uppercase tracking-wider text-text-faint block mb-1">
                    Estimated Monthly Savings with iEYAL
                  </span>
                  <div className="text-4xl sm:text-5xl font-display font-bold text-emerald-400">
                    ₹{totalMonthlySavings.toLocaleString()}
                    <span className="text-base text-text-dim font-normal block mt-1">/ month saved in profit</span>
                  </div>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-white/[0.08] text-xs sm:text-sm text-text-dim text-left">
                  <div className="flex items-center justify-between">
                    <span>Aggregator Commission (25% saved):</span>
                    <strong className="text-emerald-300">+₹{aggregatorCommissionSaved.toLocaleString()}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Standalone Shopify/CRM App fees saved:</span>
                    <strong className="text-emerald-300">+₹{standaloneSoftwareCostSaved.toLocaleString()}</strong>
                  </div>
                </div>

                <div className="pt-2">
                  <Link to="/contact" className="block">
                    <Button variant="primary" size="lg" className="w-full">
                      Lock in Your Beta Savings Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Product Suite Pricing Tiers */}
      <section className="py-16 md:py-24 max-w-site mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="violet" className="mb-4">Suite Access Tiers</Badge>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-paper mb-4">
            Transparent Access During Our Production Growth Phase
          </h2>
          <p className="text-base text-text-dim">
            Start with individual tools or activate the complete 4-product ecosystem under a single WhatsApp number.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS_CONFIG.map((prod) => (
            <Card key={prod.id} variant="glass" className="flex flex-col justify-between h-full p-6 border-white/[0.08] hover:border-indigo/40">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-bold text-xl text-paper">{prod.name}</span>
                  <Badge variant={prod.status === 'Live' ? 'live' : 'cyan'} size="sm">{prod.status}</Badge>
                </div>

                <div className="mb-6">
                  {prod.status === 'Live' ? (
                    <div>
                      <span className="text-2xl font-display font-bold text-paper">Custom Plan</span>
                      <p className="text-xs text-text-faint">Tailored to your WhatsApp messaging volume</p>
                    </div>
                  ) : (
                    <div>
                      <span className="text-2xl font-display font-bold text-emerald-400">100% Free Access</span>
                      <p className="text-xs text-text-faint">During our active Beta access window</p>
                    </div>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-text-dim mb-6 line-clamp-2">
                  {prod.description}
                </p>

                <div className="space-y-2 mb-8 pt-4 border-t border-white/[0.06]">
                  {prod.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-text">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat.title}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 text-xs text-emerald-300 font-medium pt-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>0% Transaction Commission</span>
                  </div>
                </div>
              </div>

              <div>
                <Link to="/contact" className="w-full">
                  <Button variant={prod.status === 'Live' ? 'primary' : 'outline'} className="w-full">
                    {prod.status === 'Live' ? 'Request Pricing' : 'Claim Free Beta Access'}
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <CTASection
        heading="Need an Enterprise Custom Quote?"
        subheading="For multi-branch retail chains or high-volume enterprise API deployments, our founders will design a custom SLAs and volume pricing structure."
        primaryBtnText="Contact Enterprise Sales"
        primaryBtnHref="/contact"
        showWaButton={true}
      />
    </>
  );
};
