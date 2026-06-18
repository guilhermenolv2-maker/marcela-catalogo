import { useCallback, useMemo, useState, type PropsWithChildren } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { CartItemType } from '../types/cart';
import type { Product } from '../types/product';
import { CartContext } from './cartContextValue';

export function CartProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useLocalStorage<CartItemType[]>('marcela-lopes-cart', []);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback(
    (product: Product, quantity = 1) => {
      setItems((currentItems) => {
        const existingItem = currentItems.find((item) => item.product.id === product.id);

        if (!existingItem) {
          return [...currentItems, { product, quantity: Math.min(quantity, product.stock) }];
        }

        return currentItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + quantity, product.stock) }
            : item,
        );
      });
      setIsOpen(true);
    },
    [setItems],
  );

  const increaseItem = useCallback(
    (productId: string) => {
      setItems((currentItems) =>
        currentItems.map((item) =>
          item.product.id === productId
            ? { ...item, quantity: Math.min(item.quantity + 1, item.product.stock) }
            : item,
        ),
      );
    },
    [setItems],
  );

  const decreaseItem = useCallback(
    (productId: string) => {
      setItems((currentItems) =>
        currentItems
          .map((item) =>
            item.product.id === productId ? { ...item, quantity: item.quantity - 1 } : item,
          )
          .filter((item) => item.quantity > 0),
      );
    },
    [setItems],
  );

  const removeItem = useCallback(
    (productId: string) => {
      setItems((currentItems) => currentItems.filter((item) => item.product.id !== productId));
    },
    [setItems],
  );

  const clearCart = useCallback(() => setItems([]), [setItems]);

  const value = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

    return {
      items,
      isOpen,
      totalItems,
      subtotal,
      total: subtotal,
      addItem,
      increaseItem,
      decreaseItem,
      removeItem,
      clearCart,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
    };
  }, [addItem, clearCart, decreaseItem, increaseItem, isOpen, items, removeItem]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
