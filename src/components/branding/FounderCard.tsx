import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, MapPin } from 'lucide-react';
import { FounderProfile } from '@/types';
import { cn } from '@/utils/cn';

export interface FounderCardProps {
  profile: FounderProfile;
  className?: string;
}

export const FounderCard: React.FC<FounderCardProps> = ({ profile, className }) => {
  return (
    <motion.div
      whileHover={{ translateY: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "bg-white/[0.045] backdrop-blur-md border border-white/[0.08] hover:border-indigo/40 rounded-l overflow-hidden shadow-card flex flex-col group transition-all duration-300",
        className
      )}
    >
      {/* Image container with gradient overlay */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-2">
        <img
          src={profile.image}
          alt={`iEYAL Founder - ${profile.name}`}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 filter contrast-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" />

        {/* Location badge on image */}
        <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-ink/80 backdrop-blur-sm border border-white/10 flex items-center gap-1.5 text-[11px] text-text-dim">
          <MapPin className="w-3 h-3 text-indigo-2" />
          <span>Thiruvarur, Tamil Nadu</span>
        </div>
      </div>

      {/* Content details */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="text-xl font-display font-bold text-paper group-hover:text-indigo-2 transition-colors">
              {profile.name}
            </h3>
            <div className="flex items-center gap-2">
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full bg-white/[0.05] hover:bg-indigo/20 text-text-dim hover:text-indigo-2 transition-colors"
                  title={`${profile.name} on LinkedIn`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {profile.twitter && (
                <a
                  href={profile.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full bg-white/[0.05] hover:bg-cyan/20 text-text-dim hover:text-cyan transition-colors"
                  title={`${profile.name} on X/Twitter`}
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          <span className="inline-block text-xs font-display font-semibold text-indigo-2 uppercase tracking-wider mb-3">
            {profile.role}
          </span>

          <p className="text-sm text-text-dim leading-relaxed">
            {profile.bio}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
