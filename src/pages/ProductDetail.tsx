import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, MessageCircle } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Accordion } from '@/components/ui/Accordion';
import { KiboMascot } from '@/components/branding/KiboMascot';
import { PRODUCTS_CONFIG } from '@/config/products';
import { PRODUCT_LOGOS } from '@/utils/assets';

export const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = PRODUCTS_CONFIG.find((p) => p.id === productId);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const getMascotVariant = (id: string): any => {
    switch (id) {
      case 'ownchat': return 'whatsapp';
      case 'owncart': return 'cart';
      case 'ownrewards': return 'party';
      case 'owntask': return 'tasks';
      default: return 'tshirt';
    }
  };

  const prodLogo = productId === 'ownchat' ? PRODUCT_LOGOS.ownchat : productId === 'owncart' ? PRODUCT_LOGOS.owncart : null;

  return (
    <>
      <SEO
        title={product.seoTitle}
        description={product.seoDescription}
      />

      {/* Hero Section */}
      <HeroSection
        badge={product.badge}
        badgeVariant={product.status === 'Live' ? 'live' : 'indigo'}
        heading={product.h1}
        subheading={product.tagline}
        supportingText={product.heroSupportingText}
        ctaGroup={
          <>
            <Link to="/contact">
              <Button variant="glow" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                Book {product.name} Walkthrough
              </Button>
            </Link>
            <a href="https://wa.me/9791467587" target="_blank" rel="noopener noreferrer">
              <Button variant="wa" size="lg" icon={<MessageCircle className="w-5 h-5" />}>
                Try Live on WhatsApp
              </Button>
            </a>
          </>
        }
        trustStrip={
          <div className="flex flex-wrap items-center gap-6 text-xs text-text-dim">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" /> Official Meta Business Partner API
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Zap className="w-4 h-4 text-amber-400 shrink-0" /> Zero Setup Fees during {product.status}
            </span>
          </div>
        }
        visual={
          <div className="relative w-full max-w-md flex flex-col items-center justify-center">
            {prodLogo ? (
              <div className="w-48 h-48 sm:w-64 sm:h-64 mb-6 rounded-3xl bg-white/[0.04] p-6 border border-white/[0.08] shadow-2xl flex items-center justify-center">
                <img src={prodLogo} alt={`${product.name} Logo`} className="w-full h-full object-contain filter drop-shadow-xl" />
              </div>
            ) : (
              <KiboMascot variant={getMascotVariant(product.id)} size="xl" caption={`Kibo Powering ${product.name}`} />
            )}
            <div className="text-center p-4 rounded-l bg-ink-2/90 border border-white/[0.08] max-w-xs shadow-lg">
              <span className="text-xs font-display font-semibold text-indigo-2 uppercase tracking-wider block mb-1">
                Authoritative Suite Pillar
              </span>
              <p className="text-xs text-text-dim">
                Direct integration with Meta Cloud API & iEYAL operational database.
              </p>
            </div>
          </div>
        }
      />

      {/* Features Grid */}
      <section className="py-16 md:py-24 max-w-site mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge variant="violet" className="mb-4">Deep Dive Capabilities</Badge>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-paper mb-4">
            Designed for Real-World Speed and Simplicity
          </h2>
          <p className="text-base sm:text-lg text-text-dim">
            Here is how {product.name} replaces cumbersome spreadsheets and manual phone calls with automated WhatsApp workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {product.features.map((feat, index) => (
            <Card key={index} variant="glass" className="space-y-4 border-white/[0.08] hover:border-indigo/40">
              <div className="w-12 h-12 rounded-l bg-indigo/15 border border-indigo/30 flex items-center justify-center text-indigo-2">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-paper">
                {feat.title}
              </h3>
              <p className="text-sm text-text-dim leading-relaxed">
                {feat.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      {product.faqs && product.faqs.length > 0 && (
        <section className="py-16 md:py-24 bg-ink-2/40 border-t border-white/[0.06]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="cyan" className="mb-4">Frequently Asked Questions</Badge>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-paper mb-4">
                Everything You Need to Know About {product.name}
              </h2>
            </div>
            <Accordion items={product.faqs} />
          </div>
        </section>
      )}

      {/* Next Product Navigation / CTA */}
      <CTASection
        heading={`Ready to Transform Your Business with ${product.name}?`}
        subheading="Join 200+ paying customers running daily chat, commerce, and operations on iEYAL's WhatsApp-native platform."
        primaryBtnText={`Get Started with ${product.name}`}
        primaryBtnHref="/contact"
        showWaButton={true}
      />
    </>
  );
};
