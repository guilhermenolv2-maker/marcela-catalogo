import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import type { CartItemType } from '../types/cart';
import { formatCurrency } from '../utils/format';

type CartItemProps = {
  item: CartItemType;
};

export function CartItem({ item }: CartItemProps) {
  const { decreaseItem, increaseItem, removeItem } = useCart();
  const { product, quantity } = item;

  return (
    <article className="flex gap-4 rounded-3xl bg-mist p-3">
      <img
        src={product.images[0]}
        alt={product.name}
        className="h-24 w-20 rounded-2xl object-cover"
        loading="lazy"
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-ink">{product.name}</h3>
            <p className="mt-1 text-sm text-ink/60">{formatCurrency(product.price)}</p>
          </div>
          <button
            type="button"
            onClick={() => removeItem(product.id)}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-ink/60 transition hover:text-ink"
            aria-label={`Remover ${product.name}`}
          >
            <Trash2 className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex items-center rounded-full bg-white p-1">
            <button
              type="button"
              onClick={() => decreaseItem(product.id)}
              className="grid h-8 w-8 place-items-center rounded-full text-ink hover:bg-rose"
              aria-label={`Diminuir quantidade de ${product.name}`}
            >
              <Minus className="h-4 w-4" aria-hidden="true" />
            </button>
            <span className="min-w-8 text-center text-sm font-bold text-ink">{quantity}</span>
            <button
              type="button"
              onClick={() => increaseItem(product.id)}
              className="grid h-8 w-8 place-items-center rounded-full text-ink hover:bg-rose"
              aria-label={`Aumentar quantidade de ${product.name}`}
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          <strong className="text-sm text-ink">{formatCurrency(product.price * quantity)}</strong>
        </div>
      </div>
    </article>
  );
}
