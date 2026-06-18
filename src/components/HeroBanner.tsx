import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-ice">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1800&q=80"
          alt="Bancada elegante com produtos de beleza premium"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/82 to-white/28" />
      </div>

      <div className="relative mx-auto grid min-h-[76vh] max-w-7xl content-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-sm font-semibold text-ink shadow-soft">
            <Sparkles className="h-4 w-4 text-gold" aria-hidden="true" />
            Curadoria delicada e premium
          </div>
          <h1 className="font-display text-5xl font-semibold leading-tight text-ink sm:text-6xl lg:text-7xl">
            Marcela Lopes
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-ink/75 [text-shadow:0_1px_2px_rgba(61,54,64,0.22)] sm:text-lg">
            Produtos selecionados para autocuidado, com pedido simples e rápido pelo WhatsApp.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/produtos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-gold hover:text-ink"
            >
              Ver catálogo
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href="#promocoes"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-ink shadow-soft transition hover:bg-rose"
            >
              Promoções
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
