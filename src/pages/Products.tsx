import { useEffect, useMemo, useState } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { useSearchParams } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { EmptyState } from '../components/EmptyState';
import { FilterBar } from '../components/FilterBar';
import { Pagination } from '../components/Pagination';
import { ProductCard } from '../components/ProductCard';
import { SearchBar } from '../components/SearchBar';
import { useProducts } from '../hooks/useProducts';
import type { SortOption } from '../types/product';

const PRODUCTS_PER_PAGE = 6;

export function Products() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('categoria') ?? 'todos';
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState<SortOption>('featured');
  const [page, setPage] = useState(1);

  const filteredProducts = useProducts({ search, category, sort });
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = useMemo(
    () => filteredProducts.slice((page - 1) * PRODUCTS_PER_PAGE, page * PRODUCTS_PER_PAGE),
    [filteredProducts, page],
  );

  useEffect(() => {
    setPage(1);
  }, [search, category, sort]);

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
            <p className="mt-4 leading-7 text-ink/70">
              Encontre sua próxima peça favorita, ajuste o carrinho e envie o pedido para atendimento
              pelo WhatsApp.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 grid gap-4 rounded-[2rem] bg-mist p-4 shadow-soft lg:grid-cols-[1fr_1.2fr]">
            <SearchBar value={search} onChange={setSearch} />
            <FilterBar
              category={category}
              sort={sort}
              onCategoryChange={setCategory}
              onSortChange={setSort}
            />
          </div>

          {paginatedProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="mt-10">
                <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
              </div>
            </>
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
