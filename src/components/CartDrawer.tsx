import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useCart } from '../hooks/useCart';
import { formatCurrency } from '../utils/format';
import { CartItem } from './CartItem';
import { EmptyState } from './EmptyState';
import { WhatsappButton } from './WhatsappButton';

export function CartDrawer() {
  const { clearCart, closeCart, isOpen, items, subtotal, totalItems } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="absolute inset-0 bg-ink/45"
            aria-label="Fechar carrinho"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-soft"
            aria-label="Carrinho lateral"
          >
            <div className="flex items-center justify-between border-b border-rose/60 p-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-gold">Seu pedido</p>
                <h2 className="font-display text-3xl font-semibold text-ink">
                  Carrinho ({totalItems})
                </h2>
              </div>
              <button
                type="button"
                onClick={closeCart}
                className="grid h-11 w-11 place-items-center rounded-full bg-mist text-ink"
                aria-label="Fechar carrinho"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              {items.length > 0 ? (
                <div className="space-y-4">
                  {items.map((item) => (
                    <CartItem key={item.product.id} item={item} />
                  ))}
                </div>
              ) : (
                <EmptyState
                  title="Carrinho vazio"
                  description="Escolha seus produtos favoritos e finalize o pedido pelo WhatsApp."
                />
              )}
            </div>

            <div className="border-t border-rose/60 p-5">
              <div className="mb-4 space-y-2 text-sm">
                <div className="flex justify-between text-ink/65">
                  <span>Subtotal</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-ink">
                  <span>Total</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
              </div>
              <div className="grid gap-3">
                <WhatsappButton className="w-full" />
                {items.length > 0 && (
                  <button
                    type="button"
                    onClick={clearCart}
                    className="rounded-full bg-mist px-5 py-3 text-sm font-bold text-ink transition hover:bg-rose"
                  >
                    Limpar carrinho
                  </button>
                )}
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
