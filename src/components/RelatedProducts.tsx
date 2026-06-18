import { products } from '../data/products';
import type { Product } from '../types/product';
import { ProductCard } from './ProductCard';

type RelatedProductsProps = {
  product: Product;
};

export function RelatedProducts({ product }: RelatedProductsProps) {
  const relatedProducts = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 3);

  if (relatedProducts.length === 0) return null;

  return (
    <section className="mt-16">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-wide text-gold">Você também pode amar</p>
        <h2 className="mt-2 font-display text-4xl font-semibold text-ink">Produtos relacionados</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {relatedProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}
