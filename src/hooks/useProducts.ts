import { useMemo } from 'react';
import { products } from '../data/products';
import type { SortOption } from '../types/product';
import { normalizeText } from '../utils/format';

type UseProductsParams = {
  search: string;
  category: string;
  sort: SortOption;
};

export const useProducts = ({ search, category, sort }: UseProductsParams) =>
  useMemo(() => {
    const normalizedSearch = normalizeText(search);

    const filteredProducts = products.filter((product) => {
      const matchesSearch =
        normalizeText(product.name).includes(normalizedSearch) ||
        normalizeText(product.description).includes(normalizedSearch);
      const matchesCategory = category === 'todos' || product.category === category;

      return matchesSearch && matchesCategory;
    });

    return filteredProducts.sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'name') return a.name.localeCompare(b.name);
      return Number(b.featured) - Number(a.featured);
    });
  }, [category, search, sort]);
