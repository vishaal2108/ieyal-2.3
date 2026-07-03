import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [submitted, setSubscribed] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    productOfInterest: 'All Products Hub',
  });

  const location = useLocation();

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleSubmitDemo = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setDemoModalOpen(false);
      setFormData({ name: '', phone: '', company: '', productOfInterest: 'All Products Hub' });
    }, 2500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-ink text-text selection:bg-indigo/30 selection:text-white">
      {/* Sitewide Navbar */}
      <Navbar onOpenDemo={() => setDemoModalOpen(true)} />

      {/* Main Container with Breadcrumbs */}
      <main className="flex-1 flex flex-col w-full">
        {/* We place Breadcrumbs right below the navbar padding */}
        <div className="pt-[72px]">
          <Breadcrumbs />
        </div>
        
        <div className="flex-1">
          {children}
        </div>
      </main>

      {/* Sitewide Footer */}
      <Footer onOpenDemo={() => setDemoModalOpen(true)} />

      {/* Interactive Demo Request Modal */}
      <Modal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        title="Book a Live Product Demo"
        maxWidth="md"
      >
        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-display font-bold text-paper">Demo Request Received!</h4>
            <p className="text-sm text-text-dim max-w-sm mx-auto">
              Our growth team from Thiruvarur will message you on WhatsApp within 2 hours to coordinate a live walkthrough of {formData.productOfInterest}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmitDemo} className="space-y-4">
            <p className="text-xs sm:text-sm text-text-dim pb-2">
              See how iEYAL can automate your WhatsApp customer chats, in-chat checkout, and team operations.
            </p>

            <div>
              <label className="block text-xs font-display font-semibold uppercase tracking-wider text-text-faint mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Senthil Nathan"
                className="w-full px-4 py-2.5 rounded-m bg-white/[0.04] border border-white/[0.12] focus:border-indigo text-paper placeholder-text-faint text-sm focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-display font-semibold uppercase tracking-wider text-text-faint mb-1.5">
                WhatsApp Business Phone Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-2.5 rounded-m bg-white/[0.04] border border-white/[0.12] focus:border-indigo text-paper placeholder-text-faint text-sm focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-display font-semibold uppercase tracking-wider text-text-faint mb-1.5">
                Company / Store Name *
              </label>
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g. Kurinji Retails"
                className="w-full px-4 py-2.5 rounded-m bg-white/[0.04] border border-white/[0.12] focus:border-indigo text-paper placeholder-text-faint text-sm focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-display font-semibold uppercase tracking-wider text-text-faint mb-1.5">
                Primary Product of Interest
              </label>
              <select
                value={formData.productOfInterest}
                onChange={(e) => setFormData({ ...formData, productOfInterest: e.target.value })}
                className="w-full px-4 py-2.5 rounded-m bg-ink border border-white/[0.12] focus:border-indigo text-paper text-sm focus:outline-none transition-colors"
              >
                <option value="All Products Hub">Complete iEYAL Ecosystem (All 4 Products)</option>
                <option value="Ownchat">Ownchat — WhatsApp CRM & Campaigns</option>
                <option value="Owncart">Owncart — WhatsApp In-Chat Store</option>
                <option value="OwnRewards">OwnRewards — WhatsApp Cashback & Loyalty</option>
                <option value="OwnTask">OwnTask — Operational Workflows & SLAs</option>
              </select>
            </div>

            <div className="pt-4">
              <Button type="submit" variant="glow" size="lg" className="w-full">
                Confirm Demo Request
              </Button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
};
