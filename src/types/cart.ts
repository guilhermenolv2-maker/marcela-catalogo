import type { Product } from './product';

export type CartItemType = {
  product: Product;
  quantity: number;
};

export type CartContextType = {
  items: CartItemType[];
  isOpen: boolean;
  totalItems: number;
  subtotal: number;
  total: number;
  addItem: (product: Product, quantity?: number) => void;
  increaseItem: (productId: string) => void;
  decreaseItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
};
