import { SlidersHorizontal } from 'lucide-react';
import { availableCategories } from '../data/products';
import type { SortOption } from '../types/product';

type FilterBarProps = {
  category: string;
  sort: SortOption;
  onCategoryChange: (value: string) => void;
  onSortChange: (value: SortOption) => void;
};

export function FilterBar({ category, sort, onCategoryChange, onSortChange }: FilterBarProps) {
  return (
    <>
      <label className="block">
        <span className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-ink/55">
          <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
          Categoria
        </span>
        <select
          value={category}
          onChange={(event) => onCategoryChange(event.target.value)}
          className="h-12 w-full rounded-full border border-lavender bg-white px-4 text-sm font-medium text-ink outline-none focus:border-gold"
          aria-label="Filtrar por categoria"
        >
          <option value="todos">Todas</option>
          {availableCategories.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-ink/55">
          Ordenar
        </span>
        <select
          value={sort}
          onChange={(event) => onSortChange(event.target.value as SortOption)}
          className="h-12 w-full rounded-full border border-lavender bg-white px-4 text-sm font-medium text-ink outline-none focus:border-gold"
          aria-label="Ordenar produtos"
        >
          <option value="featured">Destaques</option>
          <option value="price-asc">Menor preço</option>
          <option value="price-desc">Maior preço</option>
          <option value="name">Nome</option>
        </select>
      </label>
    </>
  );
}
