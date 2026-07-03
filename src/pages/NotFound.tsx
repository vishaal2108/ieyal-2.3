import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { KiboMascot } from '@/components/branding/KiboMascot';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEO
        title="404 — Page Not Found | iEYAL Solutions"
        description="The page you are looking for does not exist or has been moved."
      />

      <section className="min-h-[75vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo/15 via-violet/20 to-ink-2 -z-10" />

        <Card variant="glow" className="max-w-lg w-full p-8 sm:p-12 text-center space-y-6">
          <KiboMascot variant="error" size="lg" caption="404 — Kibo Encountered a Missing Page" />

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-paper">
              Oops! Page Not Found
            </h1>
            <p className="text-sm sm:text-base text-text-dim">
              We couldn't find the page you were looking for. It might have been renamed or moved during our site modernization.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/" className="w-full sm:w-auto">
              <Button variant="glow" size="md" icon={<Home className="w-4 h-4" />} className="w-full">
                Return to Homepage
              </Button>
            </Link>
            <Link to="/products" className="w-full sm:w-auto">
              <Button variant="secondary" size="md" icon={<ArrowRight className="w-4 h-4" />} className="w-full">
                Explore Products
              </Button>
            </Link>
          </div>
        </Card>
      </section>
    </>
  );
};
