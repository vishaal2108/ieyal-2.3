import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Target, Shield, Heart, Cpu, RefreshCw } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { COMPANY_VALUES } from '@/config/team';

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMPANY_VALUES.map((val, idx) => (
            <Card key={idx} variant="glass" className="space-y-4 border-white/[0.08] hover:border-indigo/40">
              <div className="w-12 h-12 rounded-l bg-indigo/15 border border-indigo/30 flex items-center justify-center text-indigo-2">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-paper">
                {val.title}
              </h3>
              <p className="text-sm text-text-dim leading-relaxed">
                {val.description}
              </p>
            </Card>
          ))}
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
