import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

type BreadcrumbItem = {
  label: string;
  to?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-ink/60" aria-label="Breadcrumb">
      <Link to="/" className="inline-flex items-center gap-1 font-semibold hover:text-gold">
        <Home className="h-4 w-4" aria-hidden="true" />
        Home
      </Link>
      {items.map((item) => (
        <span key={item.label} className="inline-flex items-center gap-2">
          <ChevronRight className="h-4 w-4 text-gold" aria-hidden="true" />
          {item.to ? (
            <Link to={item.to} className="font-semibold hover:text-gold">
              {item.label}
            </Link>
          ) : (
            <span aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
