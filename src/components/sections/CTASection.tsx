import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';

export interface CTASectionProps {
  heading?: string;
  subheading?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
  className?: string;
  showWaButton?: boolean;
}

export const CTASection: React.FC<CTASectionProps> = ({
  heading = "Ready to Build the Future of Your Business?",
  subheading = "Join over 200+ businesses running daily operations on iEYAL's WhatsApp-native ecosystem. Start your journey today.",
  primaryBtnText = "Book a Demo",
  primaryBtnHref = "/contact",
  secondaryBtnText = "Explore Products",
  secondaryBtnHref = "/products",
  className,
  showWaButton = false,
}) => {
  return (
    <section className={cn("py-10 sm:py-14 relative overflow-hidden", className)}>
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl bg-gradient-to-br from-violet-deep via-ink-2 to-ink border border-indigo/40 p-6 sm:p-8 lg:p-10 text-center shadow-glow-violet overflow-hidden"
        >
          {/* Ambient lighting inside CTA box */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-paper tracking-tight">
              {heading}
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-text-dim leading-relaxed">
              {subheading}
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link to={primaryBtnHref}>
                <Button variant="glow" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                  {primaryBtnText}
                </Button>
              </Link>

              {showWaButton ? (
                <a href="https://wa.me/9791467587" target="_blank" rel="noopener noreferrer">
                  <Button variant="wa" size="md" icon={<MessageCircle className="w-4 h-4" />}>
                    Chat on WhatsApp
                  </Button>
                </a>
              ) : (
                <Link to={secondaryBtnHref}>
                  <Button variant="secondary" size="md">
                    {secondaryBtnText}
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
