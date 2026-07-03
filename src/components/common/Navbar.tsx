import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, MessageSquare, ShoppingCart, Gift, CheckSquare, Utensils, ShoppingBag, Truck, Users, Heart, UserCheck, Award, Briefcase, BookOpen, FileText, HelpCircle, Download } from 'lucide-react';
import { PRIMARY_NAV } from '@/config/navigation';
import { BRAND_LOGOS } from '@/utils/assets';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/utils/cn';

export const Navbar: React.FC<{ onOpenDemo: () => void }> = ({ onOpenDemo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const getIcon = (name?: string) => {
    const cls = "w-4 h-4 text-indigo-2 shrink-0";
    switch (name) {
      case 'MessageSquare': return <MessageSquare className={cls} />;
      case 'ShoppingCart': return <ShoppingCart className={cls} />;
      case 'Gift': return <Gift className={cls} />;
      case 'CheckSquare': return <CheckSquare className={cls} />;
      case 'Utensils': return <Utensils className={cls} />;
      case 'ShoppingBag': return <ShoppingBag className={cls} />;
      case 'Truck': return <Truck className={cls} />;
      case 'Users': return <Users className={cls} />;
      case 'Heart': return <Heart className={cls} />;
      case 'UserCheck': return <UserCheck className={cls} />;
      case 'Award': return <Award className={cls} />;
      case 'Briefcase': return <Briefcase className={cls} />;
      case 'BookOpen': return <BookOpen className={cls} />;
      case 'FileText': return <FileText className={cls} />;
      case 'HelpCircle': return <HelpCircle className={cls} />;
      case 'Download': return <Download className={cls} />;
      default: return null;
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-ink-2/85 backdrop-blur-lg border-b border-white/[0.08] shadow-lg py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav aria-label="Main navigation" className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
          <img
            src={BRAND_LOGOS.icon}
            alt="iEYAL Solutions Icon"
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg sm:text-xl text-paper tracking-tight group-hover:text-indigo-2 transition-colors">
              iEYAL <span className="text-indigo-2 font-normal">Solutions</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {PRIMARY_NAV.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isDropdownOpen = activeDropdown === item.label;
            const isActive = location.pathname.startsWith(item.href) && (item.href !== '/' || location.pathname === '/');

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => hasChildren && setActiveDropdown(item.label)}
                onMouseLeave={() => hasChildren && setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  onClick={() => hasChildren && setActiveDropdown(isDropdownOpen ? null : item.label)}
                  className={cn(
                    "px-3.5 py-2 rounded-m font-display text-sm font-medium flex items-center gap-1.5 transition-colors",
                    isActive || isDropdownOpen
                      ? "text-white bg-white/[0.06]"
                      : "text-text-dim hover:text-paper hover:bg-white/[0.04]"
                  )}
                >
                  <span>{item.label}</span>
                  {hasChildren && (
                    <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", isDropdownOpen && "rotate-180 text-indigo-2")} />
                  )}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {hasChildren && isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, translateY: 10 }}
                      animate={{ opacity: 1, translateY: 0 }}
                      exit={{ opacity: 0, translateY: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-80 xl:w-96 p-2 rounded-l bg-ink-2/95 backdrop-blur-xl border border-white/[0.12] shadow-2xl grid gap-1 z-50"
                    >
                      {item.children!.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="p-3 rounded-m hover:bg-white/[0.06] transition-colors flex items-start gap-3 group/child"
                        >
                          <div className="p-2 rounded-m bg-white/[0.04] group-hover/child:bg-indigo/20 transition-colors mt-0.5">
                            {getIcon(child.icon)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-display font-medium text-sm text-paper group-hover/child:text-indigo-2 transition-colors">
                                {child.label}
                              </span>
                              {child.badge && (
                                <Badge variant={child.badge === 'Live' ? 'live' : 'indigo'} size="sm">
                                  {child.badge}
                                </Badge>
                              )}
                            </div>
                            {child.description && (
                              <p className="text-xs text-text-dim line-clamp-1 mt-0.5">
                                {child.description}
                              </p>
                            )}
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Right Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="glow" size="md" onClick={onOpenDemo}>
            Book a Demo
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-m bg-white/[0.05] hover:bg-white/[0.1] text-paper focus:outline-none transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-0 top-[65px] bg-ink/95 backdrop-blur-2xl z-50 overflow-y-auto px-4 py-6 flex flex-col justify-between border-t border-white/[0.08]"
          >
            <div className="space-y-6">
              {PRIMARY_NAV.map((item) => (
                <div key={item.label} className="border-b border-white/[0.06] pb-4">
                  <Link
                    to={item.href}
                    className="font-display font-bold text-xl text-paper block mb-2"
                  >
                    {item.label}
                  </Link>

                  {item.children && (
                    <div className="pl-4 space-y-3 mt-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="flex items-center justify-between text-sm text-text-dim hover:text-paper py-1"
                        >
                          <span className="flex items-center gap-2">
                            {getIcon(child.icon)}
                            <span>{child.label}</span>
                          </span>
                          {child.badge && (
                            <Badge variant={child.badge === 'Live' ? 'live' : 'outline'} size="sm">
                              {child.badge}
                            </Badge>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-6 space-y-3 pb-12">
              <Button variant="glow" size="lg" className="w-full" onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}>
                Book a Demo
              </Button>
              <Link to="/contact" className="block">
                <Button variant="secondary" size="lg" className="w-full">
                  Contact Sales Team
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
