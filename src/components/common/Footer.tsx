import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Twitter, MapPin, Mail, Send, Award, ShieldCheck, Trophy } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';
import { FOOTER_COLUMNS, LEGAL_LINKS } from '@/config/navigation';
import { BRAND_LOGOS } from '@/utils/assets';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/utils/cn';

export const Footer: React.FC<{ onOpenDemo: () => void }> = ({ onOpenDemo }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer aria-label="Site footer" className="bg-ink-2 text-text-dim border-t border-white/[0.08] relative z-10">
      {/* Top Newsletter Band */}
      <div className="border-b border-white/[0.06] bg-gradient-to-r from-violet-deep/40 via-ink-2 to-ink">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-paper mb-1">
              Get Growth Tips Straight to Your Inbox
            </h3>
            <p className="text-xs sm:text-sm text-text-dim">
              No spam — just practical WhatsApp commerce and AI insights for growing small businesses.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex items-center gap-2 max-w-md">
            {subscribed ? (
              <div className="px-5 py-3 rounded-m bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-medium text-sm flex items-center gap-2 w-full justify-center">
                <span>✓ Thank you! You're subscribed to iEYAL Growth Insights.</span>
              </div>
            ) : (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your business email"
                  required
                  className="px-4 py-3 rounded-m bg-white/[0.05] border border-white/[0.12] focus:border-indigo text-paper placeholder-text-faint text-sm w-full md:w-64 lg:w-80 focus:outline-none transition-colors"
                />
                <Button type="submit" variant="primary" size="md" icon={<Send className="w-4 h-4" />}>
                  Subscribe
                </Button>
              </>
            )}
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-1 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group">
              <img src={BRAND_LOGOS.icon} alt="iEYAL Logo" className="w-9 h-9 object-contain" />
              <span className="font-display font-bold text-lg text-paper tracking-tight group-hover:text-indigo-2 transition-colors">
                iEYAL <span className="text-indigo-2 font-normal">Solutions</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-text-dim leading-relaxed">
              {SITE_CONFIG.tagline}
            </p>

            <div className="space-y-2 text-xs text-text-faint pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-indigo-2 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-2 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-paper transition-colors">
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-2">
              <a href={SITE_CONFIG.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-full bg-white/[0.04] hover:bg-indigo/20 text-text-dim hover:text-indigo-2 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={SITE_CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-full bg-white/[0.04] hover:bg-pink-500/20 text-text-dim hover:text-pink-400 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={SITE_CONFIG.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="X Twitter" className="p-2 rounded-full bg-white/[0.04] hover:bg-cyan/20 text-text-dim hover:text-cyan transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Columns 2 to 5: Nav Links */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="space-y-3">
              <h4 className="font-display font-semibold text-sm text-paper uppercase tracking-wider">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-xs sm:text-sm text-text-dim hover:text-paper transition-colors flex items-center gap-2 group/link"
                    >
                      <span className="group-hover/link:translate-x-0.5 transition-transform">{link.label}</span>
                      {link.badge && (
                        <span className={cn(
                          "text-[10px] px-1.5 py-0.5 rounded font-medium",
                          link.badge === 'Live' ? "bg-emerald-500/15 text-emerald-400" : "bg-indigo/15 text-indigo-2"
                        )}>
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Row: Get Started CTA & Office Location Map */}
        <div className="mt-12 pt-10 border-t border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Get Started CTA (Left side - Col 1 to 4) */}
          <div className="lg:col-span-4 space-y-4 max-w-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <h4 className="font-display font-semibold text-sm text-paper uppercase tracking-wider">
                Get Started
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-text-dim leading-relaxed">
              Ready to automate your customer journey on WhatsApp?
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 pt-1">
              <Button variant="glow" size="sm" className="w-full" onClick={onOpenDemo}>
                Book a Demo
              </Button>
              <Link to="/contact" className="block w-full">
                <Button variant="secondary" size="sm" className="w-full">
                  Talk to Sales Team
                </Button>
              </Link>
            </div>
          </div>

          {/* Interactive Google Map (Bottom Right Corner - Col 5 to 12) */}
          <div className="lg:col-span-8 w-full">
            <div className="relative rounded-2xl border border-white/[0.12] bg-ink-3/50 p-2 sm:p-2.5 shadow-2xl backdrop-blur-md group hover:border-indigo/40 transition-all duration-300">
              {/* Map Header Tag */}
              <div className="flex items-center justify-between mb-2 px-2 text-xs">
                <span className="flex items-center gap-1.5 font-medium text-paper">
                  <MapPin className="w-3.5 h-3.5 text-indigo-2 animate-bounce" />
                  <span>iEYAL Solutions Headquarters — Thiruvarur</span>
                </span>
                <a
                  href={SITE_CONFIG.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-indigo-2 hover:text-indigo-3 underline font-medium flex items-center gap-1 transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>

              {/* Map iFrame */}
              <div className="w-full h-[200px] sm:h-[220px] md:h-[240px] rounded-xl overflow-hidden relative border border-white/[0.06]">
                <iframe
                  title="iEYAL Solutions Office Location - Thiruvarur"
                  src="https://www.google.com/maps?q=80/5,+Nethaji+Road,+Thiruvarur,+Tamil+Nadu,+India&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter contrast-[1.05] saturate-[1.1] transition-all duration-500 group-hover:filter-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar & Trust Badges */}
      <div className="border-t border-white/[0.06] bg-ink/50">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-text-faint">
          {/* Copyright */}
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved. Built in India, for the world.
          </div>

          {/* Trust Badges Strip */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <div className="flex items-center gap-1.5 text-text-dim" title="Department for Promotion of Industry and Internal Trade Recognized">
              <Award className="w-4 h-4 text-indigo-2" />
              <span className="font-medium">DPIIT Recognized Startup</span>
            </div>
            <div className="flex items-center gap-1.5 text-text-dim" title="Official Sanctioned WhatsApp API Partner">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="font-medium">Meta Business Partner</span>
            </div>
            <div className="flex items-center gap-1.5 text-text-dim" title="Tamil Nadu Startup Seed Grant Awardee">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span className="font-medium">TANSEED 5.0 Winner</span>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.label} to={link.href} className="hover:text-paper transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
