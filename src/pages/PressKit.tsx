import React from 'react';
import { Download, Copy, CheckCircle2, Award } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { BRAND_LOGOS, FOUNDER_IMAGES } from '@/utils/assets';
import { SITE_CONFIG } from '@/config/site';

export const PressKit: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const boilerplate = `${SITE_CONFIG.name} (${SITE_CONFIG.shortName}) is a high-growth SaaS startup founded in Thiruvarur, Tamil Nadu. Recognized by DPIIT (Govt. of India) and a winner of the TANSEED 5.0 seed grant (₹10 Lakhs), iEYAL provides a unified WhatsApp-native AI ecosystem—chat, commerce, loyalty, and task fulfillment—enabling over 200+ small and medium businesses globally to scale daily operations with zero aggregator commissions.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(boilerplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const brandColors = [
    { name: "Deep Violet", hex: "#1b0f3d", border: "border-indigo/40" },
    { name: "Brand Indigo", hex: "#5b6bff", border: "border-white/20" },
    { name: "Electric Cyan", hex: "#6fd6ff", border: "border-white/20" },
    { name: "Dark Ink", hex: "#07060c", border: "border-white/20" },
  ];

  return (
    <>
      <SEO
        title="Press & Media Kit — Brand Assets & Boilerplate | iEYAL Solutions"
        description="Download official iEYAL Solutions brand logos, color palettes, founder headshots, and company boilerplate for media coverage."
      />

      <HeroSection
        badge="Official Media Kit"
        heading="Press & Brand Resources."
        subheading="Everything you need to cover iEYAL Solutions accurately in news articles, publications, or partner announcements."
        centered={true}
      />

      <section className="py-16 max-w-site mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] space-y-16">
        {/* Company Boilerplate */}
        <div className="max-w-3xl mx-auto space-y-4">
          <Badge variant="indigo">Company Boilerplate</Badge>
          <h2 className="text-2xl font-display font-bold text-paper">Official About Summary</h2>
          <Card variant="solid" className="p-6 relative">
            <p className="text-sm text-text-dim leading-relaxed mb-6 font-mono">
              {boilerplate}
            </p>
            <Button variant="outline" size="sm" onClick={handleCopy} icon={copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}>
              {copied ? "Copied to Clipboard!" : "Copy Boilerplate Text"}
            </Button>
          </Card>
        </div>

        {/* Brand Logos */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-paper mb-2">Logo Downloads</h2>
            <p className="text-sm text-text-dim">Please do not alter aspect ratio or colors when displaying our logo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card variant="glass" className="p-8 text-center space-y-6 flex flex-col justify-between items-center">
              <div className="h-24 flex items-center justify-center p-4 bg-ink rounded-l border border-white/[0.08] w-full">
                <img src={BRAND_LOGOS.main} alt="iEYAL Main Logo" className="max-h-12 object-contain" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-paper">Primary Horizontal Logo</h3>
                <p className="text-xs text-text-faint">Use on dark backgrounds</p>
              </div>
              <a href={BRAND_LOGOS.main} download="iEYAL-Logo-Main.png" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="secondary" className="w-full" icon={<Download className="w-4 h-4" />}>Download PNG</Button>
              </a>
            </Card>

            <Card variant="glass" className="p-8 text-center space-y-6 flex flex-col justify-between items-center">
              <div className="h-24 flex items-center justify-center p-4 bg-white/[0.08] rounded-l border border-white/[0.08] w-full">
                <img src={BRAND_LOGOS.icon} alt="iEYAL Icon Logo" className="max-h-14 object-contain" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-paper">Icon / App Emblem</h3>
                <p className="text-xs text-text-faint">Use for avatars, favicons & badges</p>
              </div>
              <a href={BRAND_LOGOS.icon} download="iEYAL-Icon.png" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="secondary" className="w-full" icon={<Download className="w-4 h-4" />}>Download PNG</Button>
              </a>
            </Card>
          </div>
        </div>

        {/* Color Palette */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-paper mb-2">Brand Palette</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {brandColors.map((col) => (
              <Card key={col.name} variant="solid" className="p-4 space-y-3">
                <div className={`w-full h-20 rounded border ${col.border}`} style={{ backgroundColor: col.hex }} />
                <div>
                  <span className="font-display font-bold text-sm text-paper block">{col.name}</span>
                  <span className="text-xs font-mono text-text-dim">{col.hex}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
