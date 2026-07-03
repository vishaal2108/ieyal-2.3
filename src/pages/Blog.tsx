import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, BookOpen, Calendar, User, Clock } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { BLOG_POSTS_CONFIG } from '@/config/milestones';

export const Blog: React.FC = () => {
  return (
    <>
      <SEO
        title="Blog & Commerce Insights | iEYAL Solutions"
        description="Practical guides, strategies, and industry deep dives on WhatsApp CRM, AI automation, and conversational commerce."
      />

      <HeroSection
        badge="iEYAL Growth Blog"
        heading="Practical Wisdom for Modern Merchants."
        subheading="No fluff or corporate jargon. Just actionable playbooks from building and scaling WhatsApp-first SaaS."
        centered={true}
      />

      <section className="py-16 max-w-site mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS_CONFIG.map((post) => (
            <Card key={post.slug} variant="glass" className="flex flex-col justify-between h-full space-y-4 border-white/[0.08] hover:border-indigo/40">
              <div>
                <div className="flex items-center justify-between text-xs text-text-faint mb-3">
                  <Badge variant="indigo" size="sm">{post.category}</Badge>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                </div>
                <h2 className="text-xl font-display font-bold text-paper hover:text-indigo-2 transition-colors mb-3">
                  <Link to={`/resources/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-sm text-text-dim leading-relaxed mb-4">
                  {post.excerpt}
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-text-dim">
                <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-indigo-2" /> {post.author}</span>
                <Link to={`/resources/blog/${post.slug}`} className="text-indigo-2 font-semibold hover:underline flex items-center gap-1">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <CTASection
        heading="Ready to Apply These Strategies to Your Store?"
        subheading="Launch your automated WhatsApp CRM and store builder in under 24 hours."
        primaryBtnText="Get Started Now"
        primaryBtnHref="/contact"
      />
    </>
  );
};

export const BlogPostView: React.FC = () => {
  const { postSlug } = useParams<{ postSlug: string }>();
  const post = BLOG_POSTS_CONFIG.find((p) => p.slug === postSlug);

  if (!post) {
    return <Navigate to="/resources/blog" replace />;
  }

  return (
    <>
      <SEO
        title={`${post.title} | iEYAL Growth Blog`}
        description={post.excerpt}
      />

      <article className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12 pb-8 border-b border-white/[0.08]">
          <Badge variant="indigo">{post.category}</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-paper leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-text-dim pt-2">
            <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-indigo-2" /> {post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-indigo-2" /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-indigo-2" /> {post.readTime}</span>
          </div>
        </div>

        <div className="prose prose-invert max-w-none text-text-dim space-y-6 leading-relaxed text-base sm:text-lg">
          {post.content.split('\n').map((line, i) => {
            if (line.startsWith('# ')) return <h2 key={i} className="text-2xl sm:text-3xl font-display font-bold text-paper pt-6">{line.replace('# ', '')}</h2>;
            if (line.startsWith('## ')) return <h3 key={i} className="text-xl sm:text-2xl font-display font-bold text-paper pt-4">{line.replace('## ', '')}</h3>;
            if (line.trim() === '') return <br key={i} />;
            return <p key={i}>{line}</p>;
          })}
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 bg-ink-2/60 p-6 rounded-l border">
          <div>
            <h4 className="font-display font-bold text-lg text-paper">Ready to put this into practice?</h4>
            <p className="text-sm text-text-dim">Explore the product tool built to solve this challenge.</p>
          </div>
          <Link to={post.relatedProductHref}>
            <Button variant="glow" icon={<ArrowRight className="w-4 h-4" />}>
              Explore Product Feature
            </Button>
          </Link>
        </div>
      </article>

      <CTASection
        heading="Want More Insights Like This?"
        subheading="Subscribe to our weekly newsletter or book a consultation with our growth team."
        primaryBtnText="Explore All Resources"
        primaryBtnHref="/resources"
      />
    </>
  );
};
