import React from 'react';
import { CUSTOMER_LOGOS } from '@/utils/assets';
import { cn } from '@/utils/cn';

export interface CustomerLogoMarqueeProps {
  className?: string;
  title?: string;
}

export const CustomerLogoMarquee: React.FC<CustomerLogoMarqueeProps> = ({
  className,
  title = "Trusted by 200+ businesses across the globe",
}) => {
  // If no logos loaded for any reason, return clean fallback
  if (!CUSTOMER_LOGOS || CUSTOMER_LOGOS.length === 0) return null;

  // Double arrays for seamless infinite looping
  const row1Logos = [...CUSTOMER_LOGOS, ...CUSTOMER_LOGOS];
  const row2Logos = [...CUSTOMER_LOGOS].reverse();
  const loopedRow2 = [...row2Logos, ...row2Logos];

  return (
    <section aria-label="Customer logos" className={cn("py-16 md:py-20 bg-ink-2/50 border-y border-white/[0.08] overflow-hidden relative", className)}>
      {/* Background radial glows */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-transparent to-ink z-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-violet/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center relative z-20">
        <p className="text-xs sm:text-sm md:text-base font-display font-semibold tracking-widest text-text-dim uppercase">
          {title}
        </p>
      </div>

      <div className="space-y-6 sm:space-y-8 relative z-0">
        {/* Row 1: Right to Left */}
        <div className="flex overflow-x-hidden relative">
          <div className="flex items-center gap-6 sm:gap-8 md:gap-10 animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
            {row1Logos.map((logoUrl, index) => {
              const cleanName = logoUrl
                .split('/')
                .pop()
                ?.replace(/^imgi_\d+_/, '')
                ?.replace(/\.(png|jpe?g)$/i, '') || 'Client Logo';

              return (
                <div
                  key={`row1-${index}-${logoUrl}`}
                  className="inline-flex items-center justify-center shrink-0 w-48 sm:w-56 md:w-64 h-24 sm:h-28 px-6 bg-white/[0.04] hover:bg-white/[0.09] rounded-2xl border border-white/[0.08] transition-all duration-300 group shadow-sm hover:border-indigo/40 hover:shadow-glow-indigo"
                >
                  <img
                    src={logoUrl}
                    alt={`iEYAL Customer - ${cleanName}`}
                    className="max-h-14 sm:max-h-16 md:max-h-18 max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Left to Right */}
        <div className="flex overflow-x-hidden relative">
          <div
            className="flex items-center gap-6 sm:gap-8 md:gap-10 animate-marquee [animation-direction:reverse] whitespace-nowrap hover:[animation-play-state:paused]"
            style={{ animationDirection: 'reverse' }}
          >
            {loopedRow2.map((logoUrl, index) => {
              const cleanName = logoUrl
                .split('/')
                .pop()
                ?.replace(/^imgi_\d+_/, '')
                ?.replace(/\.(png|jpe?g)$/i, '') || 'Client Logo';

              return (
                <div
                  key={`row2-${index}-${logoUrl}`}
                  className="inline-flex items-center justify-center shrink-0 w-48 sm:w-56 md:w-64 h-24 sm:h-28 px-6 bg-white/[0.04] hover:bg-white/[0.09] rounded-2xl border border-white/[0.08] transition-all duration-300 group shadow-sm hover:border-indigo/40 hover:shadow-glow-indigo"
                >
                  <img
                    src={logoUrl}
                    alt={`iEYAL Customer - ${cleanName}`}
                    className="max-h-14 sm:max-h-16 md:max-h-18 max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
