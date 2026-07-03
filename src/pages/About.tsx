import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, MapPin, Target, CheckCircle2 } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export const About: React.FC = () => {
  return (
    <>
      <SEO
        title="About Us — Our Mission & Tier-3 Town Story | iEYAL Solutions"
        description="Discover how iEYAL Solutions was founded in Thiruvarur, Tamil Nadu to build enterprise-grade WhatsApp SaaS for small and medium businesses worldwide."
      />

      <HeroSection
        badge="Our Origin & Mission"
        heading="Democratizing AI for Small & Medium Businesses."
        subheading="Why should only Fortune 500 companies have access to intelligent automation, zero-latency CRM, and automated customer journeys? We are changing that forever."
        centered={true}
        ctaGroup={
          <Link to="/company/team">
            <Button variant="glow" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Meet the Founding Team
            </Button>
          </Link>
        }
      />

      <section className="py-16 md:py-24 max-w-site mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo/20 border border-indigo/40 text-xs text-indigo-2 font-medium">
              <MapPin className="w-3.5 h-3.5" /> Thiruvarur, Tamil Nadu, India
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-paper">
              The Tier-3 Town Advantage
            </h2>

            <p className="text-base sm:text-lg text-text leading-relaxed">
              When we started building iEYAL in Thiruvarur—a historic town in Tamil Nadu far from the silicon hubs of Bangalore or Silicon Valley—people asked why we didn't relocate. Our answer was simple: staying close to real retail shops, local restaurants, and emerging SMBs gave us unmatched customer empathy.
            </p>

            <p className="text-base sm:text-lg text-text-dim leading-relaxed">
              We watched store owners struggle with complicated desktop software, heavy monthly subscription fees in US dollars, and 30% aggregator commissions. We realized that for emerging markets, the future of business wasn't another desktop portal—it was <strong>WhatsApp</strong>.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded bg-white/[0.03] border border-white/[0.08] space-y-1">
                <span className="font-display font-bold text-xl text-indigo-2">200+</span>
                <p className="text-xs text-text-dim">Paying businesses running daily operations</p>
              </div>
              <div className="p-4 rounded bg-white/[0.03] border border-white/[0.08] space-y-1">
                <span className="font-display font-bold text-xl text-emerald-400">100%</span>
                <p className="text-xs text-text-dim">In-house engineering & customer support team</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Card variant="glow" className="p-8 space-y-6 text-center">
              <div className="w-16 h-16 rounded-full bg-indigo/20 text-indigo-2 flex items-center justify-center mx-auto">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold text-paper">
                Built in India. For the World.
              </h3>
              <p className="text-sm text-text-dim leading-relaxed">
                While our roots are grounded in Tamil Nadu, our WhatsApp messaging architecture powers customer conversations across India, Southeast Asia, and the Middle East.
              </p>
              <div className="pt-2">
                <Badge variant="cyan">DPIIT Recognized Startup</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <CTASection
        heading="Join the WhatsApp Business Revolution"
        subheading="See how our team can help you transition from fragmented tools to one unified WhatsApp growth engine."
        primaryBtnText="Book a Live Walkthrough"
        primaryBtnHref="/contact"
      />
    </>
  );
};
