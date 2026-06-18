import { MessageCircle, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../hooks/useCart';
import { buildWhatsappUrl } from '../services/whatsapp';
import type { Product } from '../types/product';
import { formatCurrency } from '../utils/format';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const whatsappUrl = buildWhatsappUrl([{ product, quantity: 1 }], product.price);

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group overflow-hidden rounded-3xl bg-white shadow-soft"
    >
      <Link to={`/produtos/${product.slug}`} aria-label={`Ver detalhes de ${product.name}`}>
        <div className="relative aspect-[1/1] overflow-hidden bg-mist">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {product.promotion && (
            <span className="absolute left-3 top-3 rounded-full bg-white/92 px-2 py-1 text-[10px] font-bold text-ink shadow-glow">
              {product.promotion}
            </span>
          )}
        </div>
      </Link>
      <div className="space-y-2 p-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wide text-gold">
            {product.stock} em estoque
          </p>
          <h2 className="mt-1 text-sm font-bold leading-5 text-ink">{product.name}</h2>
          <p className="mt-1 line-clamp-2 text-xs leading-5 text-ink/65">{product.description}</p>
        </div>
        <div className="space-y-2">
          <strong className="text-sm text-ink">{formatCurrency(product.price)}</strong>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => addItem(product)}
              className="inline-flex items-center justify-center gap-1 rounded-full bg-rose px-2 py-2 text-[11px] font-bold text-ink transition hover:bg-gold"
              aria-label={`Adicionar ${product.name} ao carrinho`}
            >
              <ShoppingCart className="h-4 w-4" aria-hidden="true" />
              Adicionar
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1 rounded-full bg-ink px-2 py-2 text-[11px] font-bold text-white transition hover:bg-gold hover:text-ink"
              aria-label={`Comprar ${product.name} pelo WhatsApp`}
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Comprar
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
