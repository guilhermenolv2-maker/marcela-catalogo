import type { CartItemType } from '../types/cart';
import { formatCurrency } from '../utils/format';

const WHATSAPP_NUMBER = '5538998210135';

export const buildWhatsappMessage = (items: CartItemType[], total: number) => {
  const productsText = items
    .map(
      ({ product, quantity }) =>
        `• ${product.name}\nQuantidade: ${quantity}\nPreço: ${formatCurrency(product.price)}`,
    )
    .join('\n\n');

  return `Olá, tudo bem?

Gostaria de fazer um pedido.

Produtos:

${productsText}

Valor total do pedido: ${formatCurrency(total)}

Nome:

Endereço:

Forma de pagamento:

Obrigado.`;
};

export const buildWhatsappUrl = (items: CartItemType[], total: number) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsappMessage(items, total))}`;
