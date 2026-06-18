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
            <li className="flex gap-2">
              <MessageCircle className="h-4 w-4 text-gold" aria-hidden="true" />
              WhatsApp: (11) 99999-9999
            </li>
            <li className="flex gap-2">
              <Instagram className="h-4 w-4 text-gold" aria-hidden="true" />
              @bellaatelier
            </li>
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 text-gold" aria-hidden="true" />
              Rua das Flores, 120 - São Paulo
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
