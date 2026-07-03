import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, Award, Briefcase, Globe, Target } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { TeamSection } from '@/components/branding/TeamSection';
import { COMPANY_VALUES } from '@/config/team';

export const CompanyHub: React.FC = () => {
  const navCards = [
    { title: "About Us & Our Mission", href: "/company/about", desc: "Our Tier-3 town origin story from Thiruvarur, Tamil Nadu to empowering 200+ global businesses.", icon: <Globe className="w-6 h-6 text-indigo-2" /> },
    { title: "Our Culture & DNA", href: "/company/culture", desc: "Built on speed, grit, ownership, and deep customer empathy.", icon: <Heart className="w-6 h-6 text-pink-400" /> },
    { title: "Leadership Team", href: "/company/team", desc: "Meet our hands-on founders building world-class SaaS from scratch.", icon: <Users className="w-6 h-6 text-cyan" /> },
    { title: "Company Milestones", href: "/company/milestones", desc: "DPIIT recognized, Meta Business Partner, and TANSEED 5.0 grant winner.", icon: <Award className="w-6 h-6 text-amber-400" /> },
    { title: "Careers at iEYAL", href: "/company/careers", desc: "Join our growing 22+ member multidisciplinary team.", icon: <Briefcase className="w-6 h-6 text-emerald-400" /> },
  ];

  return (
    <>
      <SEO
        title="Company Overview — Mission, Culture & Leadership | iEYAL Solutions"
        description="Learn about iEYAL Solutions: founded in Thiruvarur, Tamil Nadu, recognized by DPIIT and TANSEED 5.0, and building world-class WhatsApp SaaS for SMBs."
      />

      <HeroSection
        badge="About iEYAL Solutions"
        heading="Global Ambition. Tier-3 Town Roots."
        subheading="We started with a simple observation: enterprise software is too complex and costly for small businesses. So we built a messaging-native alternative from scratch in Thiruvarur, Tamil Nadu."
        centered={true}
        ctaGroup={
          <Link to="/company/about">
            <Button variant="glow" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Read Our Origin Story
            </Button>
          </Link>
        }
      />

      {/* Company Exploration Grid */}
      <section className="py-12 md:py-20 max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {navCards.map((card, idx) => (
            <Link key={idx} to={card.href} className="block group">
              <Card variant="interactive" className="h-full flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <div className="p-3 rounded-l bg-white/[0.05] border border-white/[0.08] w-fit mb-4 group-hover:bg-indigo/20 transition-colors">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold text-paper group-hover:text-indigo-2 transition-colors mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-text-dim leading-relaxed">
                    {card.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-display font-semibold text-indigo-2">
                  <span>Explore Section</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-ink-2/40 border-y border-white/[0.06]">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="violet" className="mb-4">Our Core Philosophy</Badge>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-paper mb-4">
              What Drives How We Build and Serve
            </h2>
            <p className="text-base text-text-dim">
              We don't try to be everything to everyone. We focus relentlessly on what small businesses need to thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMPANY_VALUES.map((val, idx) => (
              <Card key={idx} variant="glass" className="space-y-3">
                <div className="p-2.5 rounded bg-indigo/15 text-indigo-2 w-fit">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-display font-bold text-paper">
                  {val.title}
                </h3>
                <p className="text-sm text-text-dim leading-relaxed">
                  {val.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />

      <CTASection
        heading="Want to Join Our Mission or Partner With Us?"
        subheading="Whether you are looking to build with us or deploy our WhatsApp suite for your clients, we would love to connect."
        primaryBtnText="Explore Careers"
        primaryBtnHref="/company/careers"
        secondaryBtnText="Contact Leadership"
        secondaryBtnHref="/contact"
      />
    </>
  );
};
