import { Gift, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { CategoryCard } from '../components/CategoryCard';
import { HeroBanner } from '../components/HeroBanner';
import { ProductCard } from '../components/ProductCard';
import { availableCategories, products } from '../data/products';

const benefits = [
  {
    icon: Sparkles,
    title: 'Curadoria premium',
    text: 'Produtos escolhidos com atenção ao detalhe.',
  },
  { icon: Gift, title: 'Presenteável', text: 'Opções prontas para datas especiais.' },
  {
    icon: HeartHandshake,
    title: 'Atendimento humano',
    text: 'Pedido confirmado diretamente pelo WhatsApp.',
  },
  {
    icon: ShieldCheck,
    title: 'Compra simples',
    text: 'Sem cadastro, sem login e sem etapas desnecessárias.',
  },
];

export function Home() {
  const featuredProducts = products.filter((product) => product.featured).slice(0, 4);

  return (
    <>
      <Helmet>
        <title>Marcela Lopes | Catálogo premium via WhatsApp</title>
        <meta
          name="description"
          content="Catálogo virtual feminino, sofisticado e premium para pedidos pelo WhatsApp."
        />
        <meta property="og:title" content="Marcela Lopes | Catálogo premium" />
        <meta
          property="og:description"
          content="Escolha produtos delicados, monte seu carrinho e finalize pelo WhatsApp."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <HeroBanner />

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-gold">Destaques</p>
              <h2 className="mt-2 font-display text-4xl font-semibold text-ink">Mais desejados</h2>
            </div>
            <Link
              to="/produtos"
              className="text-sm font-bold text-ink underline decoration-gold underline-offset-4"
            >
              Ver todos os produtos
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-wide text-gold">Categorias</p>
            <h2 className="mt-2 font-display text-4xl font-semibold text-ink">
              Escolha por momento
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {availableCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section id="promocoes" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-lavender p-8 shadow-soft md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-ink/55">Promoções</p>
            <h2 className="mt-2 font-display text-4xl font-semibold text-ink">
              Combos especiais para presentear
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-ink/70">
              Monte kits com beleza, aromas e acessórios. O atendimento confirma disponibilidade,
              embalagem e entrega pelo WhatsApp.
            </p>
          </div>
          <Link
            to="/produtos"
            className="inline-flex justify-center rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition hover:bg-gold hover:text-ink"
          >
            Comprar agora
          </Link>
        </div>
      </section>

      <section className="bg-ice px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="rounded-[2rem] bg-white p-6 shadow-soft">
              <benefit.icon className="h-8 w-8 text-gold" aria-hidden="true" />
              <h2 className="mt-4 text-lg font-bold text-ink">{benefit.title}</h2>
              <p className="mt-2 text-sm leading-6 text-ink/65">{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
