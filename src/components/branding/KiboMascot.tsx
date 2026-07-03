import React from 'react';
import { motion } from 'framer-motion';
import { KIBO_MASCOTS } from '@/utils/assets';
import { cn } from '@/utils/cn';

export interface KiboMascotProps {
  variant?: keyof typeof KIBO_MASCOTS;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'hero';
  animate?: boolean;
  caption?: string;
}

export const KiboMascot: React.FC<KiboMascotProps> = ({
  variant = 'tshirt',
  className,
  size = 'md',
  animate = true,
  caption,
}) => {
  const src = typeof KIBO_MASCOTS[variant] === 'string' 
    ? (KIBO_MASCOTS[variant] as string) 
    : KIBO_MASCOTS.tshirt;

  if (!src) return null;

  const sizes = {
    sm: "w-20 h-20 md:w-24 md:h-24",
    md: "w-32 h-32 md:w-40 md:h-40",
    lg: "w-48 h-48 md:w-60 md:h-60",
    xl: "w-64 h-64 md:w-80 md:h-80",
    "2xl": "w-80 h-80 md:w-96 md:h-96",
    hero: "w-72 h-72 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px]",
  };

  return (
    <div className={cn("relative inline-flex flex-col items-center justify-center select-none", className)}>
      {/* Subtle indigo glow behind mascot */}
      <div className="absolute inset-0 bg-indigo/20 blur-3xl rounded-full scale-75 pointer-events-none -z-10" />
      
      <motion.div
        animate={animate ? { translateY: [0, -12, 0], rotate: [0, 1.5, -1.5, 0] } : {}}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={cn("relative z-10 flex items-center justify-center", sizes[size])}
      >
        <img
          src={src}
          alt={`iEYAL Kibo Mascot - ${variant}`}
          className="w-full h-full object-contain filter drop-shadow-xl"
          loading="lazy"
        />
      </motion.div>
      
      {caption && (
        <span className="mt-3 text-xs md:text-sm font-medium text-text-dim text-center tracking-wide bg-ink-2/80 px-3 py-1 rounded-full border border-white/[0.08] backdrop-blur-sm">
          {caption}
        </span>
      )}
    </div>
  );
};
