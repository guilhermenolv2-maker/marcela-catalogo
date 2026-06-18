import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center bg-rose px-4 py-16 text-center">
      <Helmet>
        <title>Página não encontrada | Marcela Lopes</title>
      </Helmet>
      <div>
        <p className="text-sm font-bold uppercase tracking-wide text-gold">404</p>
        <h1 className="mt-2 font-display text-5xl font-semibold text-ink">Página não encontrada</h1>
        <p className="mx-auto mt-4 max-w-md leading-7 text-ink/70">
          O endereço acessado não existe ou foi alterado.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-4 text-sm font-bold text-white"
        >
          Voltar para a home
        </Link>
      </div>
    </section>
  );
}
