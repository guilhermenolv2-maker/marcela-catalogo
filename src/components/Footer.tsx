import { Instagram, MapPin, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
            Catálogo premium para produtos delicados, com atendimento personalizado e pedidos via
            WhatsApp.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gold">Atendimento</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li>
              <a
                href="https://wa.me/5538998210135"
                target="_blank"
                rel="noreferrer"
                className="flex gap-2 transition hover:text-gold"
              >
                <MessageCircle className="h-4 w-4 text-gold" aria-hidden="true" />
                WhatsApp: (38) 99821-0135
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/marcellalopes"
                target="_blank"
                rel="noreferrer"
                className="flex gap-2 transition hover:text-gold"
              >
                <Instagram className="h-4 w-4 text-gold" aria-hidden="true" />
                @marcellalopes
              </a>
            </li>
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 text-gold" aria-hidden="true" />
              Capoeirão
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gold">Horário</h2>
          <p className="mt-4 text-sm leading-6 text-white/75">
            Segunda a sexta, 9h às 18h
            <br />
            Sábado, 9h às 13h
          </p>
        </div>
      </div>
    </footer>
  );
}
