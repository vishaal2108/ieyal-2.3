import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { KiboMascot } from '@/components/branding/KiboMascot';

// Lazy load pages for optimal bundle splitting and Lighthouse performance
const Home = React.lazy(() => import('@/pages/Home').then(module => ({ default: module.Home })));
const ProductsHub = React.lazy(() => import('@/pages/ProductsHub').then(module => ({ default: module.ProductsHub })));
const ProductDetail = React.lazy(() => import('@/pages/ProductDetail').then(module => ({ default: module.ProductDetail })));
const SolutionsHub = React.lazy(() => import('@/pages/SolutionsHub').then(module => ({ default: module.SolutionsHub })));
const SolutionDetail = React.lazy(() => import('@/pages/SolutionDetail').then(module => ({ default: module.SolutionDetail })));
const Technology = React.lazy(() => import('@/pages/Technology').then(module => ({ default: module.Technology })));
const CompanyHub = React.lazy(() => import('@/pages/CompanyHub').then(module => ({ default: module.CompanyHub })));
const About = React.lazy(() => import('@/pages/About').then(module => ({ default: module.About })));
const Culture = React.lazy(() => import('@/pages/Culture').then(module => ({ default: module.Culture })));
const Leadership = React.lazy(() => import('@/pages/Leadership').then(module => ({ default: module.Leadership })));
const Milestones = React.lazy(() => import('@/pages/Milestones').then(module => ({ default: module.Milestones })));
const Careers = React.lazy(() => import('@/pages/Careers').then(module => ({ default: module.Careers })));
const ResourcesHub = React.lazy(() => import('@/pages/ResourcesHub').then(module => ({ default: module.ResourcesHub })));
const Blog = React.lazy(() => import('@/pages/Blog').then(module => ({ default: module.Blog })));
const BlogPostView = React.lazy(() => import('@/pages/Blog').then(module => ({ default: module.BlogPostView })));
const CaseStudies = React.lazy(() => import('@/pages/CaseStudies').then(module => ({ default: module.CaseStudies })));
const CaseStudyPostView = React.lazy(() => import('@/pages/CaseStudies').then(module => ({ default: module.CaseStudyPostView })));
const PressKit = React.lazy(() => import('@/pages/PressKit').then(module => ({ default: module.PressKit })));
const HelpCenter = React.lazy(() => import('@/pages/HelpCenter').then(module => ({ default: module.HelpCenter })));
const Pricing = React.lazy(() => import('@/pages/Pricing').then(module => ({ default: module.Pricing })));
const Contact = React.lazy(() => import('@/pages/Contact').then(module => ({ default: module.Contact })));
const LegalPage = React.lazy(() => import('@/pages/LegalPage').then(module => ({ default: module.LegalPage })));
const NotFound = React.lazy(() => import('@/pages/NotFound').then(module => ({ default: module.NotFound })));

// Elegant Loading Fallback
const PageLoader: React.FC = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4">
    <KiboMascot variant="tshirt" size="md" caption="Loading iEYAL Enterprise Suite..." />
    <div className="w-48 h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
      <div className="w-1/2 h-full bg-indigo rounded-full animate-pulse" />
    </div>
  </div>
);

export default function App() {
  return (
    <MainLayout>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Main Route */}
          <Route path="/" element={<Home />} />

          {/* Products Routes */}
          <Route path="/products" element={<ProductsHub />} />
          <Route path="/products/:productId" element={<ProductDetail />} />

          {/* Solutions Routes */}
          <Route path="/solutions" element={<SolutionsHub />} />
          <Route path="/solutions/:solutionSlug" element={<SolutionDetail />} />

          {/* Technology Route */}
          <Route path="/technology" element={<Technology />} />

          {/* Company Routes */}
          <Route path="/company" element={<CompanyHub />} />
          <Route path="/company/about" element={<About />} />
          <Route path="/company/culture" element={<Culture />} />
          <Route path="/company/team" element={<Leadership />} />
          <Route path="/company/milestones" element={<Milestones />} />
          <Route path="/company/careers" element={<Careers />} />

          {/* Resources & Help Routes */}
          <Route path="/resources" element={<ResourcesHub />} />
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/blog/:postSlug" element={<BlogPostView />} />
          <Route path="/resources/case-studies" element={<CaseStudies />} />
          <Route path="/resources/case-studies/:studySlug" element={<CaseStudyPostView />} />
          <Route path="/resources/press" element={<PressKit />} />
          <Route path="/help" element={<HelpCenter />} />

          {/* Pricing & Contact Routes */}
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />

          {/* Legal Routes */}
          <Route path="/legal/:legalType" element={<LegalPage />} />

          {/* Fallback 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </MainLayout>
  );
}
