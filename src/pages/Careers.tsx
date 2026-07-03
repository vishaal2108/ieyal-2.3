import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, MapPin, Cpu, CheckCircle2 } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export const Careers: React.FC = () => {
  const openRoles = [
    { title: "Senior Full-Stack Engineer (Node.js/TypeScript)", dept: "Engineering", type: "Full-time", location: "Thiruvarur / Hybrid India", desc: "Build high-throughput WhatsApp messaging pipelines and AI auto-reply engines." },
    { title: "Product UI/UX Designer", dept: "Design", type: "Full-time", location: "Thiruvarur / Hybrid India", desc: "Design intuitive conversational commerce flows and mobile-first merchant dashboards." },
    { title: "SMB Growth & Customer Success Lead", dept: "Operations", type: "Full-time", location: "Thiruvarur / On-site", desc: "Onboard retail chains and restaurants onto Ownchat & Owncart, ensuring 100% SLA success." },
  ];

  return (
    <>
      <SEO
        title="Careers at iEYAL — Join Our 22+ Member In-House Team | iEYAL Solutions"
        description="Join iEYAL Solutions in Thiruvarur, Tamil Nadu. We are looking for engineers, UI/UX designers, and growth builders passionate about AI and WhatsApp commerce."
      />

      <HeroSection
        badge="Join Our Mission"
        heading="Build Software That Powers Local Economies."
        subheading="We are a 22+ member multidisciplinary team building from Thiruvarur, Tamil Nadu. No corporate layers—just fast shipping and real customer impact."
        centered={true}
      />

      {/* Why Work With Us */}
      <section className="py-16 max-w-site mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card variant="glass" className="space-y-3">
            <h3 className="font-display font-bold text-lg text-paper">High Ownership</h3>
            <p className="text-sm text-text-dim">You own entire features from concept to production deployment. We trust our builders.</p>
          </Card>
          <Card variant="glass" className="space-y-3">
            <h3 className="font-display font-bold text-lg text-paper">Direct Customer Contact</h3>
            <p className="text-sm text-text-dim">Every team member talks to users. Seeing a local store thrive on code you shipped is magical.</p>
          </Card>
          <Card variant="glass" className="space-y-3">
            <h3 className="font-display font-bold text-lg text-paper">Competitive Growth</h3>
            <p className="text-sm text-text-dim">As a TANSEED winner and DPIIT recognized startup, we invest heavily in employee learning and career velocity.</p>
          </Card>
        </div>

        {/* Open Roles */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Badge variant="emerald" className="mb-2">We Are Hiring</Badge>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-paper">Current Open Positions</h2>
          </div>

          {openRoles.map((role, idx) => (
            <Card key={idx} variant="glass" className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-white/[0.08] hover:border-indigo/40">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="indigo" size="sm">{role.dept}</Badge>
                  <Badge variant="outline" size="sm">{role.type}</Badge>
                  <span className="text-xs text-text-faint flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {role.location}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-paper">{role.title}</h3>
                <p className="text-sm text-text-dim max-w-xl">{role.desc}</p>
              </div>

              <div className="shrink-0">
                <a href={`mailto:sales@ieyalsolutions.com?subject=Application for ${role.title}`} className="block">
                  <Button variant="primary" size="md">Apply Now</Button>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <CTASection
        heading="Don't See Your Role Listed?"
        subheading="We are always looking for exceptional talent in engineering, design, and customer growth. Send us your portfolio or GitHub profile."
        primaryBtnText="Email Our Founders"
        primaryBtnHref="mailto:sales@ieyalsolutions.com?subject=General Career Inquiry"
      />
    </>
  );
};
