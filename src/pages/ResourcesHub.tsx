import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  BookOpen, 
  FileText, 
  HelpCircle,
  Clock,
  User,
  Quote,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  Zap
} from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { BLOG_POSTS_CONFIG, CASE_STUDIES_CONFIG } from '@/config/milestones';
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

export const ResourcesHub: React.FC = () => {
  const resourceCategories = [
    { 
      title: "Blog & Commerce Insights", 
      href: "/resources/blog", 
      desc: "Practical guides on WhatsApp CRM, AI auto-replies, and D2C checkout strategies.", 
      icon: <BookOpen className="w-7 h-7 sm:w-8 sm:h-8" />,
      badge: "📚 STRATEGY",
      footerTag: "💡 Actionable Playbooks",
      theme: {
        bgGradient: "from-[#141842]/95 via-[#0b0e26]/85 to-[#050612]/95",
        borderColor: "border-[#5b6bff]/40 group-hover:border-[#5b6bff]/80 shadow-[0_15px_45px_-10px_rgba(91,107,255,0.25)]",
        iconBox: "bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] border border-[#60a5fa]/50 shadow-[0_0_20px_rgba(37,99,235,0.6)] text-white",
        accentText: "text-[#60a5fa]",
        badgeBg: "bg-[#5b6bff]/20 text-[#8b6bff] border border-[#5b6bff]/40",
        orbColor: "bg-[#5b6bff]/10",
        pulseColor: "bg-[#60a5fa]",
      }
    },
    { 
      title: "Customer Case Studies", 
      href: "/resources/case-studies", 
      desc: "See how 200+ paying businesses achieve 4.2x ROI and 0% aggregator fees.", 
      icon: <FileText className="w-7 h-7 sm:w-8 sm:h-8" />,
      badge: "📈 4.2X ROI PROOF",
      footerTag: "🟢 200+ Paying Merchants",
      theme: {
        bgGradient: "from-[#052e1b]/95 via-[#041c10]/85 to-[#030d08]/95",
        borderColor: "border-[#10b981]/40 group-hover:border-[#10b981]/80 shadow-[0_15px_45px_-10px_rgba(16,185,129,0.25)]",
        iconBox: "bg-gradient-to-br from-[#059669] to-[#047857] border border-[#34d399]/50 shadow-[0_0_20px_rgba(5,150,105,0.6)] text-white",
        accentText: "text-[#34d399]",
        badgeBg: "bg-[#10b981]/20 text-[#34d399] border border-[#10b981]/40",
        orbColor: "bg-[#10b981]/10",
        pulseColor: "bg-[#34d399]",
      }
    },
    { 
      title: "Help Center & FAQs", 
      href: "/help", 
      desc: "Setup guides, API verification walkthroughs, and troubleshooting tips.", 
      icon: <HelpCircle className="w-5 h-5" />,
      badge: "❓ SETUP GUIDES",
      footerTag: "⚡ 24/7 API Walkthroughs",
      theme: {
        bgGradient: "from-[#381e0a]/95 via-[#1f1005]/85 to-[#0e0702]/95",
        borderColor: "border-[#f59e0b]/40 group-hover:border-[#f59e0b]/80 shadow-[0_15px_45px_-10px_rgba(245,158,11,0.25)]",
        iconBox: "bg-gradient-to-br from-[#d97706] to-[#b45309] border border-[#fbbf24]/50 shadow-[0_0_20px_rgba(217,119,6,0.6)] text-white",
        accentText: "text-[#fbbf24]",
        badgeBg: "bg-[#f59e0b]/20 text-[#fbbf24] border border-[#f59e0b]/40",
        orbColor: "bg-[#f59e0b]/10",
        pulseColor: "bg-[#fbbf24]",
      }
    },
  ];

  return (
    <>
      <SEO
        title="Resources Hub — Blog, Case Studies & Help Center | iEYAL Solutions"
        description="Explore iEYAL resources: practical WhatsApp commerce guides, customer ROI case studies, and product help docs."
      />

      <HeroSection
        badge="Knowledge & Validation"
        heading="Everything You Need to Master WhatsApp Commerce."
        subheading="We don't just provide software; we share proven playbooks from powering daily operations for over 200+ businesses."
        centered={true}
      />

      {/* Category Cards Grid */}
      <section className="py-8 sm:py-12 max-w-site mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-78px)] flex flex-col justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {resourceCategories.map((cat, idx) => (
            <Link key={idx} to={cat.href} className="block group h-full">
              <div
                className={cn(
                  "relative rounded-2xl p-4 sm:p-5 overflow-hidden border transition-all duration-500 flex flex-col justify-between h-full bg-gradient-to-br backdrop-blur-xl group-hover:-translate-y-1 shadow-md",
                  cat.theme.bgGradient,
                  cat.theme.borderColor
                )}
              >
                <div className={cn("absolute -top-14 -right-14 w-44 h-44 rounded-full blur-2xl pointer-events-none transition-transform duration-700 group-hover:scale-150", cat.theme.orbColor)} />
                
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className={cn("w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-105 shadow-md", cat.theme.iconBox)}>
                      {cat.icon}
                    </div>
                    <span className={cn("text-[9px] font-display font-bold px-2 py-0.5 rounded-full uppercase tracking-wider backdrop-blur-md shadow-sm shrink-0", cat.theme.badgeBg)}>
                      {cat.badge}
                    </span>
                  </div>
                  
                  <span className={cn("text-[10px] font-mono font-bold uppercase tracking-wider block mb-1", cat.theme.accentText)}>
                    0{idx + 1} / Resource Hub
                  </span>
                  <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-paper transition-colors mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-text-dim leading-relaxed mb-4 font-normal line-clamp-3">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-2.5 mt-auto border-t border-white/[0.08] flex items-center justify-between text-[11px] font-semibold">
                  <span className="text-paper/90 flex items-center gap-1.5 truncate">
                    <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse shrink-0", cat.theme.pulseColor)} /> <span className="truncate">{cat.footerTag}</span>
                  </span>
                  <span className={cn("flex items-center gap-1 font-display transition-transform group-hover:translate-x-1 shrink-0 ml-1", cat.theme.accentText)}>
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
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

                    <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-paper transition-colors mb-3 leading-snug">
                      <Link to={`/resources/blog/${post.slug}`} className="hover:underline">{post.title}</Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-text-dim line-clamp-3 leading-relaxed mb-6 font-normal">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 text-text-dim font-medium">
                      <User className={cn("w-3.5 h-3.5", theme.accentText)} /> By {post.author}
                    </span>
                    <Link to={`/resources/blog/${post.slug}`} className={cn("font-display font-bold uppercase tracking-wider flex items-center gap-1 hover:underline", theme.accentText)}>
                      Read Post <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
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
          <div
            key={study.slug}
            className="relative rounded-[36px] p-8 sm:p-12 bg-gradient-to-br from-[#141842]/95 via-[#0b0e26]/90 to-[#050612]/95 border-2 border-[#5b6bff]/40 hover:border-[#5b6bff]/80 shadow-[0_0_50px_rgba(91,107,255,0.25)] group overflow-hidden transition-all duration-500 backdrop-blur-2xl"
          >
            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#5b6bff]/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#10b981]/15 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              <div className="lg:col-span-8 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-display font-bold uppercase tracking-widest bg-[#5b6bff]/20 text-[#8b6bff] border border-[#5b6bff]/40">
                    🏆 FEATURED ROI PROOF
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {study.industry}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
                  {study.headline}
                </h3>
                <p className="text-sm sm:text-base text-text-dim leading-relaxed font-normal">
                  <strong className="text-paper">The Challenge:</strong> {study.challenge}
                </p>

                <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-white/[0.1]">
                  {study.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="bg-black/40 border border-white/10 p-3 sm:p-4 rounded-2xl text-center shadow-inner">
                      <span className="text-xl sm:text-3xl font-display font-black text-emerald-400 block tracking-tight">{m.value}</span>
                      <span className="text-[11px] sm:text-xs text-text-dim font-medium uppercase tracking-wider mt-1 block">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 bg-black/50 p-6 sm:p-8 rounded-3xl border border-white/[0.1] flex flex-col justify-between space-y-6 text-center shadow-2xl">
                <div className="flex justify-center">
                  <Quote className="w-10 h-10 text-[#60a5fa]/40" />
                </div>
                <p className="text-sm sm:text-base italic text-paper/90 leading-relaxed">"{study.quote?.text}"</p>
                <div>
                  <span className="font-display font-bold text-sm text-white block">{study.quote?.author}</span>
                  <span className="text-xs text-[#60a5fa]">{study.quote?.role}</span>
                </div>
                <Link to={`/resources/case-studies/${study.slug}`} className="w-full block pt-2">
                  <Button variant="glow" size="lg" className="w-full" icon={<ArrowRight className="w-4 h-4" />}>
                    Read Full Case Study
                  </Button>
                </Link>
              </div>
            </div>
          </div>
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
