import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/utils/cn';

export interface HeroSectionProps {
  badge?: string;
  badgeVariant?: 'indigo' | 'violet' | 'cyan' | 'wa' | 'live';
  heading: string;
  subheading: string;
  supportingText?: string;
  ctaGroup?: React.ReactNode;
  trustStrip?: React.ReactNode;
  visual?: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  badge,
  badgeVariant = 'indigo',
  heading,
  subheading,
  supportingText,
  ctaGroup,
  trustStrip,
  visual,
  className,
  centered = false,
}) => {
  return (
    <section className={cn("relative pt-8 sm:pt-10 md:pt-12 pb-6 sm:pb-8 overflow-hidden min-h-[calc(100vh-72px)] flex items-center justify-center", className)}>
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-indigo/20 via-violet/25 to-cyan/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-violet-deep/40 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className={cn(
          "grid gap-8 lg:gap-10 items-center",
          visual && !centered ? "grid-cols-1 lg:grid-cols-12" : "grid-cols-1 text-center max-w-4xl mx-auto"
        )}>
          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={cn("space-y-4 sm:space-y-5", visual && !centered ? "lg:col-span-7" : "")}
          >
            {badge && (
              <div className={cn(centered ? "flex justify-center" : "")}>
                <Badge variant={badgeVariant} pulse={badgeVariant === 'live'}>
                  {badge}
                </Badge>
              </div>
            )}

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-paper tracking-tight leading-[1.08]">
              {heading}
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-medium text-text-dim leading-relaxed">
              {subheading}
            </p>

            {supportingText && (
              <p className="text-sm sm:text-base text-text-faint max-w-2xl leading-relaxed">
                {supportingText}
              </p>
            )}

            {ctaGroup && (
              <div className={cn("pt-2 flex flex-wrap items-center gap-4", centered ? "justify-center" : "")}>
                {ctaGroup}
              </div>
            )}

            {trustStrip && (
              <div className={cn("pt-4 border-t border-white/[0.08]", centered ? "flex justify-center" : "")}>
                {trustStrip}
              </div>
            )}
          </motion.div>

          {/* Visual side */}
          {visual && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={cn(centered ? "mt-12 flex justify-center" : "lg:col-span-5 flex justify-center")}
            >
              {visual}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
