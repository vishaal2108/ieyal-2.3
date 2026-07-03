import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/utils/cn';

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow' | 'wa';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className,
  disabled,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-display font-medium transition-all duration-300 rounded-m focus:outline-none focus:ring-2 focus:ring-indigo/50 select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-indigo hover:bg-indigo-2 text-white shadow-lg shadow-indigo/25 hover:shadow-indigo/40",
    glow: "bg-gradient-to-r from-indigo via-indigo-2 to-violet text-white shadow-glow-indigo hover:shadow-glow-violet border border-white/20",
    secondary: "bg-white/[0.08] hover:bg-white/[0.14] text-paper border border-white/10 backdrop-blur-sm",
    outline: "border border-white/20 hover:border-indigo text-paper hover:bg-indigo/10",
    ghost: "text-text-dim hover:text-paper hover:bg-white/5",
    wa: "bg-wa-green hover:bg-[#1ebd5a] text-ink font-semibold shadow-lg shadow-wa-green/25",
  };

  const sizes = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5",
    xl: "text-lg px-8 py-4 gap-3",
  };

  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.02, translateY: -1 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0 transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </motion.button>
  );
};
