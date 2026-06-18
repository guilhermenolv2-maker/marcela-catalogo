import { MessageCircle } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { buildWhatsappUrl } from '../services/whatsapp';

type WhatsappButtonProps = {
  className?: string;
};

export function WhatsappButton({ className = '' }: WhatsappButtonProps) {
  const { items, total } = useCart();
  const disabled = items.length === 0;
  const href = disabled ? undefined : buildWhatsappUrl(items, total);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition ${
        disabled
          ? 'pointer-events-none bg-ink/15 text-ink/45'
          : 'bg-ink text-white shadow-soft hover:bg-gold hover:text-ink'
      } ${className}`}
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      Finalizar no WhatsApp
    </a>
  );
}
