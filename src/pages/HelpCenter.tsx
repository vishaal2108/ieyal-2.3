import React, { useState } from 'react';
import { Search, HelpCircle, MessageSquare, ShoppingCart, Gift, CheckSquare, MessageCircle, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Accordion } from '@/components/ui/Accordion';

export const HelpCenter: React.FC = () => {
  const [query, setQuery] = useState('');

  const helpFaqs = [
    { question: "How long does Meta Business API verification take?", answer: "When setting up Ownchat, Meta verification typically takes between 2 to 24 hours. Our onboarding team assists you with submitting your business documents (GST/Udyam certificate)." },
    { question: "Can I use my existing WhatsApp business phone number?", answer: "Yes! You can migrate an existing number to the Cloud API, provided you delete the personal or WhatsApp Business App profile linked to that number first." },
    { question: "How do I connect my bank account for UPI payment links in Owncart?", answer: "During setup, you can input your merchant UPI VPA or connect supported payment gateways (like Razorpay/PhonePe) directly in your dashboard configuration." },
    { question: "Can I export my customer cashback balances from OwnRewards?", answer: "Yes, you can export your entire customer list along with their loyalty wallet tiers and balances to CSV or Excel at any time from your settings." },
    { question: "What happens if our internet connection goes down?", answer: "Because iEYAL runs on cloud microservices and Meta Business infrastructure, your automated AI chatbots and customer ordering flows stay 100% online even if your shop's local wifi disconnects." },
  ];

  const filteredFaqs = helpFaqs.filter(f =>
    f.question.toLowerCase().includes(query.toLowerCase()) ||
    f.answer.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <SEO
        title="Help Center & Setup Guides | iEYAL Solutions"
        description="Get instant help, product troubleshooting tips, and Meta Business API setup guides for iEYAL Solutions."
      />

      <HeroSection
        badge="24/7 Customer Support"
        heading="How Can We Help You Today?"
        subheading="Search our setup guides, review API verification steps, or chat with our live support engineers on WhatsApp."
        centered={true}
        visual={
          <div className="w-full max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-faint" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search FAQs (e.g., verification, UPI, number migration...)"
                className="w-full pl-12 pr-4 py-4 rounded-l bg-ink-2/90 border border-white/[0.15] focus:border-indigo text-paper placeholder-text-faint text-base focus:outline-none shadow-2xl transition-all"
              />
            </div>
          </div>
        }
      />

      {/* FAQs Results */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="mb-12 text-center">
          <Badge variant="cyan" className="mb-2">Support Database</Badge>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-paper">
            {query ? `Search Results for "${query}"` : "Frequently Asked Support Questions"}
          </h2>
        </div>

        {filteredFaqs.length > 0 ? (
          <Accordion items={filteredFaqs} />
        ) : (
          <Card variant="glass" className="p-8 text-center space-y-4">
            <p className="text-base text-text-dim">No matching FAQs found for "{query}".</p>
            <a href="https://wa.me/9791467587" target="_blank" rel="noopener noreferrer">
              <Button variant="wa" icon={<MessageCircle className="w-4 h-4" />}>Ask Live Support on WhatsApp</Button>
            </a>
          </Card>
        )}
      </section>

      <CTASection
        heading="Still Need Human Assistance?"
        subheading="Our technical support team is online and ready to troubleshoot your configuration."
        primaryBtnText="Chat with Support on WhatsApp"
        primaryBtnHref="https://wa.me/9791467587"
        showWaButton={true}
      />
    </>
  );
};
