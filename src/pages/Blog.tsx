import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, BookOpen, Calendar, User, Clock } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { BLOG_POSTS_CONFIG } from '@/config/milestones';
import { cn } from '@/utils/cn';

const getBlogCardTheme = (idx: number) => {
  const themes = [
    {
      bgGradient: "from-[#141842]/95 via-[#0b0e26]/85 to-[#050612]/95",
      borderColor: "border-[#5b6bff]/40 group-hover:border-[#5b6bff]/80 shadow-[0_15px_45px_-10px_rgba(91,107,255,0.25)]",
      accentText: "text-[#60a5fa]",
      badgeBg: "bg-[#5b6bff]/20 text-[#8b6bff] border border-[#5b6bff]/40",
      orbColor: "bg-[#5b6bff]/10",
      pulseColor: "bg-[#60a5fa]",
    },
    {
      bgGradient: "from-[#052e1b]/95 via-[#041c10]/85 to-[#030d08]/95",
      borderColor: "border-[#10b981]/40 group-hover:border-[#10b981]/80 shadow-[0_15px_45px_-10px_rgba(16,185,129,0.25)]",
      accentText: "text-[#34d399]",
      badgeBg: "bg-[#10b981]/20 text-[#34d399] border border-[#10b981]/40",
      orbColor: "bg-[#10b981]/10",
      pulseColor: "bg-[#34d399]",
    },
    {
      bgGradient: "from-[#381e0a]/95 via-[#1f1005]/85 to-[#0e0702]/95",
      borderColor: "border-[#f59e0b]/40 group-hover:border-[#f59e0b]/80 shadow-[0_15px_45px_-10px_rgba(245,158,11,0.25)]",
      accentText: "text-[#fbbf24]",
      badgeBg: "bg-[#f59e0b]/20 text-[#fbbf24] border border-[#f59e0b]/40",
      orbColor: "bg-[#f59e0b]/10",
      pulseColor: "bg-[#fbbf24]",
    },
  ];
  return themes[idx % themes.length];
};

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
          {BLOG_POSTS_CONFIG.map((post, idx) => {
            const theme = getBlogCardTheme(idx);
            return (
              <div
                key={post.slug}
                className={cn(
                  "relative rounded-[32px] p-6 sm:p-8 overflow-hidden border transition-all duration-500 group flex flex-col justify-between h-full bg-gradient-to-br backdrop-blur-xl group-hover:-translate-y-2 shadow-xl",
                  theme.bgGradient,
                  theme.borderColor
                )}
              >
                <div className={cn("absolute -top-14 -right-14 w-44 h-44 rounded-full blur-2xl pointer-events-none transition-transform duration-700 group-hover:scale-150", theme.orbColor)} />
                
                <div>
                  <div className="flex items-center justify-between text-xs mb-4">
                    <span className={cn("px-3 py-1 rounded-full font-display font-bold uppercase tracking-wider text-[10px]", theme.badgeBg)}>
                      {post.category}
                    </span>
                    <span className="text-text-dim flex items-center gap-1 font-mono text-[11px]">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-paper transition-colors mb-3 leading-snug">
                    <Link to={`/resources/blog/${post.slug}`} className="hover:underline">{post.title}</Link>
                  </h2>
                  <p className="text-xs sm:text-sm text-text-dim leading-relaxed mb-6 font-normal">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-text-dim font-medium">
                    <User className={cn("w-3.5 h-3.5", theme.accentText)} /> By {post.author}
                  </span>
                  <Link to={`/resources/blog/${post.slug}`} className={cn("font-display font-bold uppercase tracking-wider flex items-center gap-1 hover:underline", theme.accentText)}>
                    Read Article <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
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
