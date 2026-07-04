import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Briefcase, 
  MapPin, 
  Cpu, 
  CheckCircle2, 
  ShieldCheck, 
  MessageCircle, 
  TrendingUp, 
  Sparkles, 
  Zap, 
  Award, 
  Heart, 
  Users, 
  Rocket 
} from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/utils/cn';

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Card 1: High Ownership */}
          <div className="relative rounded-[32px] p-6 sm:p-8 bg-gradient-to-br from-[#141842]/95 via-[#0b0e26]/85 to-[#050612]/95 border border-[#5b6bff]/40 hover:border-[#5b6bff]/80 transition-all duration-500 group flex flex-col justify-between shadow-xl backdrop-blur-xl hover:-translate-y-2">
            <div className="absolute -top-14 -right-14 w-44 h-44 rounded-full bg-[#5b6bff]/10 blur-2xl pointer-events-none transition-transform duration-700 group-hover:scale-150" />
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] border border-[#60a5fa]/50 shadow-[0_0_20px_rgba(37,99,235,0.5)] flex items-center justify-center text-white shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-display font-bold uppercase tracking-widest bg-[#5b6bff]/20 text-[#8b6bff] border border-[#5b6bff]/40">
                  ⚡ ZERO BUREAUCRACY
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight mb-3 group-hover:text-paper transition-colors">
                High Ownership
              </h3>
              <p className="text-sm sm:text-base text-text-dim leading-relaxed mb-6 font-normal">
                You own entire features from concept to production deployment. We trust our builders with architectural autonomy.
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-text-dim">
              <span className="flex items-center gap-1.5 font-medium text-paper/90">
                <span className="w-2 h-2 rounded-full bg-[#60a5fa] animate-pulse" /> Concept to Prod Autonomy
              </span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#60a5fa]">100% Trust</span>
            </div>
          </div>

          {/* Card 2: Direct Customer Contact */}
          <div className="relative rounded-[32px] p-6 sm:p-8 bg-gradient-to-br from-[#052e1b]/95 via-[#041c10]/85 to-[#030d08]/95 border border-[#10b981]/40 hover:border-[#10b981]/80 transition-all duration-500 group flex flex-col justify-between shadow-xl backdrop-blur-xl hover:-translate-y-2">
            <div className="absolute -top-14 -right-14 w-44 h-44 rounded-full bg-[#10b981]/10 blur-2xl pointer-events-none transition-transform duration-700 group-hover:scale-150" />
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#059669] to-[#047857] border border-[#34d399]/50 shadow-[0_0_20px_rgba(5,150,105,0.5)] flex items-center justify-center text-white shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-display font-bold uppercase tracking-widest bg-[#10b981]/20 text-[#34d399] border border-[#10b981]/40">
                  💬 USER IMPACT
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight mb-3 group-hover:text-paper transition-colors">
                Direct Customer Contact
              </h3>
              <p className="text-sm sm:text-base text-text-dim leading-relaxed mb-6 font-normal">
                Every team member talks to users. Seeing a local retail store or restaurant thrive on code you shipped is magical.
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-text-dim">
              <span className="flex items-center gap-1.5 font-medium text-paper/90">
                <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse" /> Seeing Local Stores Thrive
              </span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#34d399]">Real Feedback</span>
            </div>
          </div>

          {/* Card 3: Competitive Growth */}
          <div className="relative rounded-[32px] p-6 sm:p-8 bg-gradient-to-br from-[#381e0a]/95 via-[#1f1005]/85 to-[#0e0702]/95 border border-[#f59e0b]/40 hover:border-[#f59e0b]/80 transition-all duration-500 group flex flex-col justify-between shadow-xl backdrop-blur-xl hover:-translate-y-2">
            <div className="absolute -top-14 -right-14 w-44 h-44 rounded-full bg-[#f59e0b]/10 blur-2xl pointer-events-none transition-transform duration-700 group-hover:scale-150" />
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#d97706] to-[#b45309] border border-[#fbbf24]/50 shadow-[0_0_20px_rgba(217,119,6,0.5)] flex items-center justify-center text-white shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-display font-bold uppercase tracking-widest bg-[#f59e0b]/20 text-[#fbbf24] border border-[#f59e0b]/40">
                  🏆 TANSEED WINNER
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight mb-3 group-hover:text-paper transition-colors">
                Competitive Growth
              </h3>
              <p className="text-sm sm:text-base text-text-dim leading-relaxed mb-6 font-normal">
                As a TANSEED winner and DPIIT recognized startup, we invest heavily in employee learning, mentorship, and career velocity.
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-text-dim">
              <span className="flex items-center gap-1.5 font-medium text-paper/90">
                <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse" /> High Velocity Career
              </span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#fbbf24]">DPIIT Startup</span>
            </div>
          </div>
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
