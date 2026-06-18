import { Menu, ShoppingCart, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { Logo } from './Logo';

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/produtos', label: 'Produtos' },
  { to: '/contato', label: 'Contato' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openCart, totalItems } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition hover:text-gold ${
                  isActive ? 'text-gold' : 'text-ink/75'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openCart}
            className="relative rounded-full bg-ink p-3 text-white shadow-soft transition hover:bg-gold"
            aria-label="Abrir carrinho"
          >
            <ShoppingCart className="h-5 w-5" aria-hidden="true" />
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-gold px-1 text-xs font-bold text-ink">
                {totalItems}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen((value) => !value)}
            className="rounded-full bg-rose p-3 text-ink md:hidden"
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-rose/70 bg-white px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-2xl bg-mist px-4 py-3 text-sm font-semibold text-ink"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
