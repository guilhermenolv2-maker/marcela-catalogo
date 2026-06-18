import { useState } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { useSearchParams } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { EmptyState } from '../components/EmptyState';
import { FilterBar } from '../components/FilterBar';
import { ProductCard } from '../components/ProductCard';
import { SearchBar } from '../components/SearchBar';
import { useProducts } from '../hooks/useProducts';
import type { SortOption } from '../types/product';

export function Products() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('categoria') ?? 'todos';
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState<SortOption>('featured');

  const filteredProducts = useProducts({ search, category, sort });

  return (
    <>
      <Helmet>
        <title>Produtos | Marcela Lopes</title>
        <meta
          name="description"
          content="Pesquise, filtre e escolha produtos premium para finalizar seu pedido pelo WhatsApp."
        />
      </Helmet>

      <section className="bg-gradient-to-b from-rose to-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumb items={[{ label: 'Produtos' }]} />
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wide text-gold">Catálogo</p>
            <h1 className="mt-2 font-display text-5xl font-semibold text-ink">Produtos</h1>
            <p className="mt-4 leading-7 text-ink/75 [text-shadow:0_1px_2px_rgba(61,54,64,0.18)]">
              Produtos selecionados para autocuidado, com pedido simples e rápido pelo WhatsApp.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 grid items-end gap-4 rounded-[2rem] bg-mist p-5 shadow-soft md:grid-cols-3">
            <SearchBar value={search} onChange={setSearch} />
            <FilterBar
              category={category}
              sort={sort}
              onCategoryChange={setCategory}
              onSortChange={setSort}
            />
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="Nenhum produto encontrado"
              description="Tente alterar a pesquisa, categoria ou ordenação para ver mais opções."
            />
          )}
        </div>
      </section>
    </>
  );
}
