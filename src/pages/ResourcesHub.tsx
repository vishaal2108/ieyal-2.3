import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, FileText, HelpCircle, Download } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { BLOG_POSTS_CONFIG, CASE_STUDIES_CONFIG } from '@/config/milestones';

export const ResourcesHub: React.FC = () => {
  const resourceCategories = [
    { title: "Blog & Commerce Insights", href: "/resources/blog", desc: "Practical guides on WhatsApp CRM, AI auto-replies, and D2C checkout strategies.", icon: <BookOpen className="w-6 h-6 text-indigo-2" /> },
    { title: "Customer Case Studies", href: "/resources/case-studies", desc: "See how 200+ paying businesses achieve 4.2x ROI and 0% aggregator fees.", icon: <FileText className="w-6 h-6 text-emerald-400" /> },
    { title: "Help Center & FAQs", href: "/help", desc: "Setup guides, API verification walkthroughs, and troubleshooting tips.", icon: <HelpCircle className="w-6 h-6 text-amber-400" /> },
    { title: "Press & Media Kit", href: "/resources/press", desc: "Download official iEYAL brand logos, founder headshots, and company boilerplate.", icon: <Download className="w-6 h-6 text-cyan" /> },
  ];

  return (
    <>
      <SEO
        title="Resources Hub — Blog, Case Studies, Help & Press | iEYAL Solutions"
        description="Explore iEYAL resources: practical WhatsApp commerce guides, customer ROI case studies, product help docs, and brand press kit."
      />

      <HeroSection
        badge="Knowledge & Validation"
        heading="Everything You Need to Master WhatsApp Commerce."
        subheading="We don't just provide software; we share proven playbooks from powering daily operations for over 200+ businesses."
        centered={true}
      />

      {/* Category Cards Grid */}
      <section className="py-12 md:py-20 max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resourceCategories.map((cat, idx) => (
            <Link key={idx} to={cat.href} className="block group">
              <Card variant="interactive" className="h-full flex flex-col justify-between p-6">
                <div>
                  <div className="p-3 rounded bg-white/[0.05] w-fit mb-4 group-hover:bg-indigo/20 transition-colors">
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-display font-bold text-paper group-hover:text-indigo-2 transition-colors mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-text-dim leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-indigo-2">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Articles Preview */}
      <section className="py-16 bg-ink-2/40 border-y border-white/[0.06]">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <Badge variant="indigo" className="mb-2">Latest Insights</Badge>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-paper">
                From the Growth Blog
              </h2>
            </div>
            <Link to="/resources/blog">
              <Button variant="outline" size="sm">View All Articles</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS_CONFIG.map((post) => (
              <Card key={post.slug} variant="glass" className="flex flex-col justify-between h-full space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs text-text-faint mb-2">
                    <span>{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-paper hover:text-indigo-2 transition-colors mb-2">
                    <Link to={`/resources/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-text-dim line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-text-dim">
                  <span>By {post.author}</span>
                  <Link to={`/resources/blog/${post.slug}`} className="text-indigo-2 font-semibold hover:underline">
                    Read Post →
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study Spotlight */}
      <section className="py-16 md:py-24 max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="emerald" className="mb-2">Customer Proof</Badge>
          <h2 className="text-3xl font-display font-bold text-paper">
            Featured Success Story
          </h2>
        </div>

        {CASE_STUDIES_CONFIG.slice(0, 1).map((study) => (
          <Card key={study.slug} variant="glow" className="p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <Badge variant="cyan">{study.industry}</Badge>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-paper">
                  {study.headline}
                </h3>
                <p className="text-sm sm:text-base text-text-dim">
                  {study.challenge}
                </p>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/[0.1]">
                  {study.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <span className="text-xl sm:text-2xl font-bold text-emerald-400 block">{m.value}</span>
                      <span className="text-xs text-text-dim">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-l border-white/[0.1] pt-6 lg:pt-0 lg:pl-8 text-center">
                <p className="text-sm italic text-text mb-4">"{study.quote?.text}"</p>
                <span className="font-bold text-xs text-paper block">{study.quote?.author}</span>
                <span className="text-[11px] text-text-faint">{study.quote?.role}</span>
                <Link to={`/resources/case-studies/${study.slug}`} className="mt-6 w-full">
                  <Button variant="primary" className="w-full">Read Full Case Study</Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </section>

      <CTASection
        heading="Have a Question About Your Setup?"
        subheading="Check out our interactive Help Center or talk to our onboarding team directly on WhatsApp."
        primaryBtnText="Visit Help Center"
        primaryBtnHref="/help"
        showWaButton={true}
      />
    </>
  );
};
