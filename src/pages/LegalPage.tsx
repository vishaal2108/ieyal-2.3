import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ShieldCheck, FileText, Lock } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { SITE_CONFIG } from '@/config/site';

export const LegalPage: React.FC = () => {
  const { legalType } = useParams<{ legalType: string }>();

  const getLegalContent = (type?: string) => {
    switch (type) {
      case 'privacy-policy':
        return {
          title: "Privacy Policy",
          icon: <Lock className="w-6 h-6 text-indigo-2" />,
          updated: "June 1, 2026",
          body: [
            "At iEYAL Solutions Private Limited ('iEYAL', 'we', 'us'), accessible from our headquarters at 80/5, Nethaji Road, Thiruvarur, Tamil Nadu, respecting your privacy and protecting your business data is our highest priority.",
            "1. INFORMATION WE COLLECT: When you register for Ownchat, Owncart, OwnRewards, or OwnTask, we collect necessary merchant details such as business name, email address, WhatsApp phone number, and GST/Udyam verification certificates required for Meta Business Partner API onboarding.",
            "2. HOW WE USE YOUR DATA: Your data is strictly used to provision WhatsApp Cloud API instances, process message routing, calculate automated loyalty cashback balances, and provide operational customer support. We NEVER sell or rent your customer database or chat logs to third-party advertisers or competitors.",
            "3. DATA SECURITY & ENCRYPTION: All messaging payloads are encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. Our cloud microservices comply with industry data security benchmarks.",
            "4. CONTACT FOR PRIVACY: For any privacy inquiries or GDPR/DPDP Act compliance questions, contact our legal team at sales@ieyalsolutions.com.",
          ],
        };
      case 'terms':
        return {
          title: "Terms of Service",
          icon: <FileText className="w-6 h-6 text-emerald-400" />,
          updated: "June 1, 2026",
          body: [
            "These Terms of Service ('Terms') govern your access to and use of the software platforms and WhatsApp API services provided by iEYAL Solutions Private Limited.",
            "1. ACCEPTANCE OF TERMS: By accessing or using our website, APIs, or products (Ownchat, Owncart, OwnRewards, OwnTask), you agree to be bound by these Terms and by Meta Business API terms of service.",
            "2. BETA ACCESS TERMS: During our active Beta access period, Owncart, OwnRewards, and OwnTask are provided with 100% free access and zero setup fees. We reserve the right to transition beta tiers to commercial tiers upon providing 30 days prior written notice to all active merchants.",
            "3. PROHIBITED CONDUCT: Merchants must strictly adhere to WhatsApp Commerce and Messaging Policies. Sending unsolicited spam, prohibited goods catalogs, or fraudulent payment links will result in immediate API instance termination.",
            "4. GOVERNING LAW: These Terms are governed by the laws of India, with exclusive jurisdiction in the courts of Tamil Nadu.",
          ],
        };
      case 'cookies':
        return {
          title: "Cookie Policy",
          icon: <ShieldCheck className="w-6 h-6 text-amber-400" />,
          updated: "June 1, 2026",
          body: [
            "This Cookie Policy explains how iEYAL Solutions uses cookies and similar tracking technologies when you visit our website.",
            "1. WHAT ARE COOKIES: Cookies are small text files stored on your device to remember user preferences, maintain active login sessions, and analyze website traffic performance.",
            "2. HOW WE USE COOKIES: We use essential cookies to maintain secure authenticated sessions in your merchant dashboard and analytics cookies to understand page load times and conversion metrics.",
            "3. YOUR CONTROLS: You can choose to disable non-essential cookies through your browser settings at any time without affecting your core WhatsApp API functionality.",
          ],
        };
      default:
        return null;
    }
  };

  const content = getLegalContent(legalType);

  if (!content) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <SEO
        title={`${content.title} | ${SITE_CONFIG.name}`}
        description={`Read the official ${content.title} for iEYAL Solutions Private Limited.`}
      />

      <HeroSection
        badge="Legal Documentation"
        heading={content.title}
        subheading={`Last Updated: ${content.updated}`}
        centered={true}
      />

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="bg-ink-2/60 border border-white/[0.08] rounded-l p-8 sm:p-12 space-y-6 leading-relaxed text-text-dim text-sm sm:text-base">
          {content.body.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </section>
    </>
  );
};
