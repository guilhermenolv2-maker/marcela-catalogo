import { Instagram, MapPin, MessageCircle, Timer } from 'lucide-react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Breadcrumb } from '../components/Breadcrumb';

const contactItems = [
  { icon: MessageCircle, label: 'WhatsApp', value: '(38) 99821-0135' },
  { icon: Instagram, label: 'Instagram', value: '@marcellalopes' },
  { icon: MapPin, label: 'Endereço', value: 'Capoeirão' },
  { icon: Timer, label: 'Horário', value: 'Segunda a sexta, 9h às 18h. Sábado, 9h às 13h.' },
];

export function Contact() {
  return (
    <>
      <Helmet>
        <title>Contato | Marcela Lopes</title>
        <meta name="description" content="Fale com a Bella Atelier pelo WhatsApp, Instagram ou Facebook." />
      </Helmet>

      <section className="bg-gradient-to-b from-ice to-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumb items={[{ label: 'Contato' }]} />
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-gold">Contato</p>
              <h1 className="mt-2 font-display text-5xl font-semibold text-ink">Vamos conversar?</h1>
              <p className="mt-4 leading-7 text-ink/70">
                Tire dúvidas, confirme disponibilidade dos produtos e combine entrega diretamente com
                atendimento humano.
              </p>
              <a
                href="https://wa.me/5538998210135"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full bg-ink px-7 py-4 text-sm font-bold text-white shadow-soft transition hover:bg-gold hover:text-ink"
              >
                Chamar no WhatsApp
              </a>
            </div>

            <div className="grid gap-4">
              {contactItems.map((item) => (
                <article key={item.label} className="flex gap-4 rounded-[2rem] bg-white p-5 shadow-soft">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-rose text-ink">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="font-bold text-ink">{item.label}</h2>
                    <p className="mt-1 text-sm leading-6 text-ink/65">{item.value}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
