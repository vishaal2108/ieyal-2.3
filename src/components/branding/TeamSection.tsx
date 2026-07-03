import React from 'react';
import { FOUNDERS_CONFIG } from '@/config/team';
import { FounderCard } from './FounderCard';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/utils/cn';

export interface TeamSectionProps {
  className?: string;
  condensed?: boolean;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ className, condensed = false }) => {
  return (
    <section className={cn("py-16 md:py-24 relative overflow-hidden", className)}>
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <Badge variant="indigo" className="mb-4">Founder-Led Team</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-paper mb-6">
            Meet the Founding Team
          </h2>
          <p className="text-base sm:text-lg text-text-dim leading-relaxed">
            We don't outsource our core technology or rely on third parties. iEYAL is led by a hands-on founding team building from Thiruvarur, Tamil Nadu — for businesses everywhere.
          </p>
        </div>

        {/* Founder Cards Grid */}
        <div className={cn(
          "grid gap-8",
          condensed ? "grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto" : "grid-cols-1 md:grid-cols-3"
        )}>
          {FOUNDERS_CONFIG.map((founder) => (
            <FounderCard key={founder.name} profile={founder} />
          ))}
        </div>
      </div>
    </section>
  );
};
