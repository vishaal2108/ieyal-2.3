import React from 'react';
import { cn } from '@/utils/cn';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'indigo' | 'violet' | 'cyan' | 'wa' | 'outline' | 'live' | 'emerald';
  size?: 'sm' | 'md';
  className?: string;
  pulse?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'indigo',
  size = 'md',
  className,
  pulse = false,
}) => {
  const baseStyles = "inline-flex items-center gap-1.5 font-display font-medium rounded-full select-none tracking-wide";

  const variants = {
    indigo: "bg-indigo/15 text-indigo-2 border border-indigo/30",
    violet: "bg-violet/30 text-paper border border-violet/50",
    cyan: "bg-cyan/15 text-cyan border border-cyan/30",
    wa: "bg-wa-green/15 text-[#3ee87a] border border-wa-green/30",
    outline: "bg-white/[0.04] text-text-dim border border-white/10",
    live: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-semibold",
    emerald: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-semibold",
  };

  const sizes = {
    sm: "text-[11px] px-2.5 py-0.5",
    md: "text-xs px-3.5 py-1",
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)}>
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      )}
      {children}
    </span>
  );
};
