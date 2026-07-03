import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Cpu, Zap, Lock, Server, CheckCircle2, Globe } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { KiboMascot } from '@/components/branding/KiboMascot';

export const Technology: React.FC = () => {
  const archPillars = [
    {
      title: "Official Meta Business Partner API",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      description: "We never use fragile scraping scripts or unauthorized SIM card boxes. iEYAL is built directly on official Meta Cloud API endpoints, ensuring 100% compliance, zero number ban risks, and instant green-badge verification support.",
    },
    {
      title: "Sub-Second Response Architecture",
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      description: "Our distributed event-driven messaging infrastructure processes incoming webhooks, AI response generation, and database updates in under 300 milliseconds—even during peak flash sale traffic.",
    },
    {
      title: "Enterprise Data Privacy & Encryption",
      icon: <Lock className="w-6 h-6 text-indigo-2" />,
      description: "Every tenant database is strictly isolated. All customer communication payload is encrypted in transit using TLS 1.3 and at rest using AES-256 standards, adhering strictly to global data protection regulations.",
    },
    {
      title: "99.9% Uptime & Multi-Region Failover",
      icon: <Server className="w-6 h-6 text-cyan" />,
      description: "Hosted on resilient cloud infrastructure with real-time replication and automated health checks. If one availability zone experience issues, traffic fails over seamlessly without dropping active customer chats.",
    },
  ];

  return (
    <>
      <SEO
        title="Enterprise Technology & Architecture | iEYAL Solutions"
        description="Discover the engineering foundation behind iEYAL: official Meta Business Partner API infrastructure, sub-second AI response pipelines, and enterprise-grade encryption."
      />

      <HeroSection
        badge="Enterprise Architecture Foundation"
        heading="Built for Speed. Engineered for Trust."
        subheading="Small and medium businesses deserve the exact same reliability, encryption, and throughput as Fortune 500 enterprises. Discover what powers the iEYAL ecosystem under the hood."
        centered={true}
        ctaGroup={
          <Link to="/contact">
            <Button variant="glow" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Schedule Technical Review with CTO
            </Button>
          </Link>
        }
      />

      {/* Architecture Pillars Grid */}
      <section className="py-16 md:py-24 max-w-site mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge variant="indigo" className="mb-4">Infrastructure Excellence</Badge>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-paper mb-4">
            Four Pillars of Our Technical Foundation
          </h2>
          <p className="text-base sm:text-lg text-text-dim">
            We don't take shortcuts on security or scalability. Here is why 200+ businesses trust us with their daily revenue operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {archPillars.map((pillar, idx) => (
            <Card key={idx} variant="glass" className="space-y-4 border-white/[0.08] hover:border-indigo/40">
              <div className="p-3 rounded-l bg-white/[0.05] border border-white/[0.08] w-fit">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-paper">
                {pillar.title}
              </h3>
              <p className="text-sm sm:text-base text-text-dim leading-relaxed">
                {pillar.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* AI & Automation Engine Spotlight */}
      <section className="py-16 md:py-24 bg-ink-2/40 border-t border-white/[0.06]">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="violet">AI & Flow Engine</Badge>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-paper leading-tight">
                Intelligent Automation Without Computer Science Degrees
              </h2>
              <p className="text-base sm:text-lg text-text-dim leading-relaxed">
                Underneath our no-code Flow Builder lies a powerful state-machine execution engine. It analyzes natural language customer intents, queries your live catalog inventory in real time, and executes multi-step workflows without human intervention.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-paper">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Real-time webhook processing with zero queue buildup</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-paper">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Deterministic fallback routing to human agents when AI confidence drops</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-paper">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Automated rate-limit handling compliant with Meta API tier rules</span>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/products/ownchat">
                  <Button variant="outline" icon={<ArrowRight className="w-4 h-4" />}>
                    See How Ownchat Uses AI Automation
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <Card variant="glow" className="w-full max-w-lg p-8 text-center space-y-6">
                <KiboMascot variant="wrench" size="xl" caption="Kibo Engineering 99.9% Uptime" />
                <div className="flex items-center justify-around pt-4 border-t border-white/[0.1] text-xs text-text-dim">
                  <div className="text-center">
                    <span className="font-bold text-lg text-paper block">0.3s</span>
                    <span>Avg Latency</span>
                  </div>
                  <div className="text-center">
                    <span className="font-bold text-lg text-emerald-400 block">99.9%</span>
                    <span>Uptime SLA</span>
                  </div>
                  <div className="text-center">
                    <span className="font-bold text-lg text-indigo-2 block">100%</span>
                    <span>Meta Sanctioned</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Inspect Our Technical Architecture?"
        subheading="Let our engineering leadership walk you through our API endpoints, security compliance, and migration docs."
        primaryBtnText="Request Architecture Walkthrough"
        primaryBtnHref="/contact"
      />
    </>
  );
};
