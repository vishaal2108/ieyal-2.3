import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, CheckCircle2 } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { MILESTONES_CONFIG } from '@/config/milestones';

export const Milestones: React.FC = () => {
  return (
    <>
      <SEO
        title="Company Milestones & Recognition | iEYAL Solutions"
        description="Explore the journey of iEYAL Solutions: from inception in Thiruvarur, Tamil Nadu to DPIIT startup recognition, TANSEED 5.0 grant award, and 200+ paying customers."
      />

      <HeroSection
        badge="Our Journey & Impact"
        heading="Milestones of High-Speed Growth."
        subheading="From humble beginnings in a Tier-3 town to government recognition and powering 200+ businesses daily."
        centered={true}
      />

      {/* Timeline Section */}
      <section className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="relative border-l border-indigo/40 ml-4 sm:ml-8 space-y-12">
          {MILESTONES_CONFIG.map((item, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10">
              {/* Timeline dot */}
              <div className="absolute -left-3 sm:-left-3.5 top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-ink-2 border-2 border-indigo text-indigo-2 flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-4 h-4" />
              </div>

              <Card variant="glass" className="space-y-3 border-white/[0.08]">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs font-display font-bold text-indigo-2 uppercase tracking-widest">
                    {item.year}
                  </span>
                  {item.badge && (
                    <Badge variant="cyan" size="sm">{item.badge}</Badge>
                  )}
                </div>

                <h3 className="text-xl font-display font-bold text-paper">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-text-dim leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        heading="Be Part of Our Next Chapter"
        subheading="Whether you are a customer ready to automate your growth or a specialist looking to build with us, let's connect."
        primaryBtnText="Explore Careers"
        primaryBtnHref="/company/careers"
      />
    </>
  );
};
