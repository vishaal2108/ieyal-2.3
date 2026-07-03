import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface BreadcrumbsProps {
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ className }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Do not render breadcrumbs on homepage
  if (pathnames.length === 0) return null;

  const formatLabel = (str: string) => {
    return str
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <nav aria-label="Breadcrumb" className={cn("py-4 px-4 sm:px-6 lg:px-8 max-w-site mx-auto text-xs sm:text-sm text-text-dim", className)}>
      <ol className="flex items-center flex-wrap gap-1.5">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-text-dim hover:text-paper transition-colors"
            title="Go to Home"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>

        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const label = formatLabel(name);

          return (
            <li key={name} className="inline-flex items-center">
              <ChevronRight className="w-3.5 h-3.5 text-text-faint mx-1 shrink-0" />
              {isLast ? (
                <span className="font-medium text-paper select-none" aria-current="page">
                  {label}
                </span>
              ) : (
                <Link
                  to={routeTo}
                  className="text-text-dim hover:text-paper transition-colors"
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
