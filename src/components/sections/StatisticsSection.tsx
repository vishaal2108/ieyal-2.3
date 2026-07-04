import React from 'react';
import { motion } from 'framer-motion';
import { Users, Layers, Cpu, Globe } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';
import { cn } from '@/utils/cn';

export interface StatisticsSectionProps {
  className?: string;
  stats?: { label: string; value: string; description?: string }[];
  title?: string;
  subtitle?: string;
}

const STATS_THEMES = [
  {
    // Card 1: Blue / Cyan Glow (Paying Customers)
    cardBg: "bg-gradient-to-br from-[#0a1026]/90 via-[#070b1a]/80 to-[#04060f]/90 backdrop-blur-xl",
    borderColor: "border-[#3b82f6]/30 hover:border-[#3b82f6]/60",
    shadowColor: "shadow-[0_10px_35px_-10px_rgba(59,130,246,0.2)] group-hover:shadow-[0_15px_45px_-5px_rgba(59,130,246,0.35)]",
    iconBg: "bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] border border-[#60a5fa]/40 shadow-[0_0_25px_rgba(37,99,235,0.5)]",
    numColor: "bg-gradient-to-r from-[#60a5fa] to-[#3b82f6] bg-clip-text text-transparent",
    icon: <Users className="w-7 h-7 text-white drop-shadow-md" />,
  },
  {
    // Card 2: Purple / Violet Glow (Connected Products)
    cardBg: "bg-gradient-to-br from-[#1b0a2a]/90 via-[#12061c]/80 to-[#08020d]/90 backdrop-blur-xl",
    borderColor: "border-[#a855f7]/30 hover:border-[#a855f7]/60",
    shadowColor: "shadow-[0_10px_35px_-10px_rgba(168,85,247,0.2)] group-hover:shadow-[0_15px_45px_-5px_rgba(168,85,247,0.35)]",
    iconBg: "bg-gradient-to-br from-[#9333ea] to-[#7e22ce] border border-[#c084fc]/40 shadow-[0_0_25px_rgba(147,51,234,0.5)]",
    numColor: "bg-gradient-to-r from-[#c084fc] to-[#a855f7] bg-clip-text text-transparent",
    icon: <Layers className="w-7 h-7 text-white drop-shadow-md" />,
  },
  {
    // Card 3: Emerald / Green Glow (Full-Time Team)
    cardBg: "bg-gradient-to-br from-[#061f14]/90 via-[#04150d]/80 to-[#020a06]/90 backdrop-blur-xl",
    borderColor: "border-[#10b981]/30 hover:border-[#10b981]/60",
    shadowColor: "shadow-[0_10px_35px_-10px_rgba(16,185,129,0.2)] group-hover:shadow-[0_15px_45px_-5px_rgba(16,185,129,0.35)]",
    iconBg: "bg-gradient-to-br from-[#059669] to-[#047857] border border-[#34d399]/40 shadow-[0_0_25px_rgba(5,150,105,0.5)]",
    numColor: "bg-gradient-to-r from-[#34d399] to-[#10b981] bg-clip-text text-transparent",
    icon: <Cpu className="w-7 h-7 text-white drop-shadow-md" />,
  },
  {
    // Card 4: Rose / Red / Pink Glow (Global Reach)
    cardBg: "bg-gradient-to-br from-[#260a12]/90 via-[#1a060c]/80 to-[#0d0205]/90 backdrop-blur-xl",
    borderColor: "border-[#f43f5e]/30 hover:border-[#f43f5e]/60",
    shadowColor: "shadow-[0_10px_35px_-10px_rgba(244,63,94,0.2)] group-hover:shadow-[0_15px_45px_-5px_rgba(244,63,94,0.35)]",
    iconBg: "bg-gradient-to-br from-[#e11d48] to-[#be123c] border border-[#fb7185]/40 shadow-[0_0_25px_rgba(225,29,72,0.5)]",
    numColor: "bg-gradient-to-r from-[#fb7185] to-[#f43f5e] bg-clip-text text-transparent",
    icon: <Globe className="w-7 h-7 text-white drop-shadow-md" />,
  },
];

export const StatisticsSection: React.FC<StatisticsSectionProps> = ({
  className,
  stats = SITE_CONFIG.stats,
  title = "Market Validation & Momentum",
  subtitle = "Real businesses run on iEYAL every day. This isn't a pilot — it's a live, growing customer base.",
}) => {
  return (
    <section className={cn("py-10 sm:py-14 relative overflow-hidden", className)}>
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-paper mb-3">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm sm:text-base text-text-dim leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {stats.map((stat, index) => {
            const theme = STATS_THEMES[index % STATS_THEMES.length];

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, translateY: 15 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={cn(
                  "p-4 sm:p-5 rounded-xl border transition-all duration-500 relative group overflow-hidden flex items-start gap-3.5",
                  theme.cardBg,
                  theme.borderColor,
                  theme.shadowColor
                )}
              >
                {/* Left Icon Box (inspired by reference Image 2) */}
                <div className={cn(
                  "w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110",
                  theme.iconBg
                )}>
                  {theme.icon}
                </div>

                {/* Right Content Area */}
                <div className="flex-1 min-w-0">
                  <div className={cn("text-2xl sm:text-3xl font-display font-bold mb-0.5 tracking-tight", theme.numColor)}>
                    {stat.value}
                  </div>
                  
                  <h3 className="text-sm sm:text-base font-display font-bold text-white mb-1 leading-snug">
                    {stat.label}
                  </h3>
                  
                  {stat.description && (
                    <p className="text-xs text-text-dim leading-relaxed line-clamp-2">
                      {stat.description}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
