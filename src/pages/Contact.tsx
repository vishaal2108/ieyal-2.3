import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { SITE_CONFIG } from '@/config/site';

export const Contact: React.FC = () => {
  const [submitted, setSubscribed] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    interest: 'Complete Ecosystem',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setFormData({ name: '', email: '', phone: '', company: '', message: '', interest: 'Complete Ecosystem' });
    }, 4000);
  };

  return (
    <>
      <SEO
        title="Contact Sales & Support — Get in Touch | iEYAL Solutions"
        description="Contact our team in Thiruvarur, Tamil Nadu. Book a live product demo, request custom pricing, or get Meta WhatsApp Business API support."
      />

      <HeroSection
        badge="Connect With Our Team"
        heading="Let's Talk About Your Growth."
        subheading="Whether you want to see a live demo of Ownchat & Owncart, request Beta access, or discuss custom enterprise workflows, our leadership team is ready."
        centered={true}
      />

      <section className="py-12 md:py-20 max-w-site mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details & Direct WhatsApp CTA */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <Badge variant="indigo" className="mb-3">Direct Contact</Badge>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-paper mb-4">
                We Respond Fast. Really Fast.
              </h2>
              <p className="text-sm sm:text-base text-text-dim leading-relaxed">
                As a WhatsApp-first company, the quickest way to reach our sales and support engineers is directly on WhatsApp.
              </p>
            </div>

            <Card variant="solid" className="p-6 space-y-4 border-indigo/30">
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-paper">Instant WhatsApp Chat</span>
                <Badge variant="wa" size="sm">Online Now</Badge>
              </div>
              <p className="text-xs text-text-dim">
                Chat with our AI assistant Kibo or request immediate human handover to our engineering leads.
              </p>
              <a href="https://wa.me/919791467587" target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="wa" className="w-full" icon={<MessageCircle className="w-4 h-4" />}>
                  Chat on WhatsApp ({SITE_CONFIG.contact.phone})
                </Button>
              </a>
            </Card>

            <div className="space-y-4 pt-2 text-sm text-text-dim">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded bg-white/[0.04] text-indigo-2 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-display font-semibold text-paper block">Sales & General Inquiries</span>
                  <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-paper transition-colors">
                    {SITE_CONFIG.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded bg-white/[0.04] text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-display font-semibold text-paper block">Phone Support</span>
                  <span>{SITE_CONFIG.contact.phone}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded bg-white/[0.04] text-cyan shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-display font-semibold text-paper block">Headquarters Office</span>
                  <span>{SITE_CONFIG.contact.address}</span>
                  <a href={SITE_CONFIG.contact.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="block text-xs text-indigo-2 hover:underline mt-1">
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <Card variant="glass" className="p-6 sm:p-10 border-white/[0.1]">
              {submitted ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-paper">Message Received!</h3>
                  <p className="text-base text-text-dim max-w-md mx-auto">
                    Thank you for contacting iEYAL Solutions. Our team from Thiruvarur will review your request and reach out on WhatsApp / Email within 2 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-white/[0.08] pb-4 mb-2">
                    <h3 className="text-xl font-display font-bold text-paper">Send Us a Message</h3>
                    <p className="text-xs text-text-dim">Fill out the details below and we will get right back to you.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-display font-semibold uppercase tracking-wider text-text-faint mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dinesh Kumar"
                        className="w-full px-4 py-3 rounded-m bg-white/[0.04] border border-white/[0.12] focus:border-indigo text-paper placeholder-text-faint text-sm focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-display font-semibold uppercase tracking-wider text-text-faint mb-1.5">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="dinesh@company.com"
                        className="w-full px-4 py-3 rounded-m bg-white/[0.04] border border-white/[0.12] focus:border-indigo text-paper placeholder-text-faint text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-display font-semibold uppercase tracking-wider text-text-faint mb-1.5">
                        WhatsApp Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-m bg-white/[0.04] border border-white/[0.12] focus:border-indigo text-paper placeholder-text-faint text-sm focus:outline-none transition-colors"
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
                        placeholder="e.g. Zam Zam Restaurant"
                        className="w-full px-4 py-3 rounded-m bg-white/[0.04] border border-white/[0.12] focus:border-indigo text-paper placeholder-text-faint text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-display font-semibold uppercase tracking-wider text-text-faint mb-1.5">
                      Product Interest
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-m bg-ink border border-white/[0.12] focus:border-indigo text-paper text-sm focus:outline-none transition-colors"
                    >
                      <option value="Complete Ecosystem">Complete iEYAL Ecosystem Suite</option>
                      <option value="Ownchat">Ownchat — WhatsApp CRM & Campaigns</option>
                      <option value="Owncart">Owncart — WhatsApp In-Chat Store</option>
                      <option value="OwnRewards">OwnRewards — WhatsApp Loyalty & Cashback</option>
                      <option value="OwnTask">OwnTask — Operational Workflows & SLAs</option>
                      <option value="Enterprise Custom">Enterprise API Custom Deployment</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-display font-semibold uppercase tracking-wider text-text-faint mb-1.5">
                      How can we help your business?
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your current order volume, challenges with aggregators, or questions..."
                      className="w-full px-4 py-3 rounded-m bg-white/[0.04] border border-white/[0.12] focus:border-indigo text-paper placeholder-text-faint text-sm focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <Button type="submit" variant="glow" size="lg" className="w-full" icon={<Send className="w-4 h-4" />}>
                      Send Request to Team
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};
