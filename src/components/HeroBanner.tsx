import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-ice">
      <picture className="absolute inset-0 block">
        <source
          media="(max-width: 639px)"
          srcSet="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&crop=center&w=720&h=960&q=68&fm=webp"
        />
        <img
          src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1440&q=72&fm=webp"
          alt="Bancada elegante com produtos de beleza premium"
          width="1440"
          height="960"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-center"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-b from-white/88 via-white/60 to-white/35 sm:bg-gradient-to-r sm:from-white sm:via-white/82 sm:to-white/28" />

      <div className="relative mx-auto grid min-h-[720px] max-w-7xl content-center px-4 py-14 sm:min-h-[76vh] sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-sm rounded-3xl bg-white/82 p-5 shadow-soft backdrop-blur-[3px] sm:max-w-2xl sm:rounded-none sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-none">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-sm font-semibold text-ink shadow-soft">
            <Sparkles className="h-4 w-4 text-gold" aria-hidden="true" />
            Curadoria delicada e premium
          </div>
          <h1 className="font-display text-5xl font-semibold leading-tight text-ink sm:text-6xl lg:text-7xl">
            Marcela Lopes
          </h1>
          <p className="mt-5 max-w-xl text-base font-medium leading-7 text-ink/85 [text-shadow:0_1px_2px_rgba(255,255,255,0.9)] sm:text-lg sm:leading-8 sm:text-ink/75">
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
