import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/utils/cn';

export interface CardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  variant?: 'glass' | 'solid' | 'interactive' | 'glow';
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'glass',
  className,
  hoverEffect = true,
  ...props
}) => {
  const baseStyles = "rounded-l p-6 lg:p-8 transition-all duration-300 relative overflow-hidden";

  const variants = {
    glass: "bg-white/[0.045] backdrop-blur-md border border-white/[0.08] shadow-card",
    solid: "bg-ink-2 border border-white/[0.06]",
    interactive: "bg-white/[0.045] hover:bg-white/[0.075] backdrop-blur-md border border-white/[0.08] hover:border-indigo/40 cursor-pointer shadow-card",
    glow: "bg-gradient-to-br from-violet-deep/60 via-ink-2 to-ink border border-indigo/30 shadow-glow-violet",
  };

  return (
    <motion.div
      whileHover={hoverEffect ? { translateY: -4, scale: 1.005 } : {}}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {/* Subtle top light reflection */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
};
