import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { Button } from '@/components/ui/Button';
import { FounderCard } from '@/components/branding/FounderCard';
import { FOUNDERS_CONFIG } from '@/config/team';

export const Leadership: React.FC = () => {
  return (
    <>
      <SEO
        title="Leadership Team — Meet the Founders | iEYAL Solutions"
        description="Meet the hands-on founding team behind iEYAL Solutions: Dinesh Kumar (CEO), Haje Abudhahir (CTO), and Mohamed Rafiyudeen (COO)."
      />

      <HeroSection
        badge="Hands-On Leadership"
        heading="Built by Builders. Not Managers."
        subheading="Our co-founders don't sit in glass towers. They write code, talk to customer store owners on WhatsApp every week, and drive product execution from Thiruvarur, Tamil Nadu."
        centered={true}
        ctaGroup={
          <Link to="/contact">
            <Button variant="glow" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Connect with Leadership
            </Button>
          </Link>
        }
      />

      <section className="py-16 md:py-24 max-w-site mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FOUNDERS_CONFIG.map((founder) => (
            <FounderCard key={founder.name} profile={founder} />
          ))}
        </div>
      </section>

      <CTASection
        heading="Have an Enterprise Custom Requirement?"
        subheading="Our leadership team directly oversees custom integrations and enterprise API deployments for large retail chains and restaurant groups."
        primaryBtnText="Schedule Executive Call"
        primaryBtnHref="/contact"
      />
    </>
  );
};
