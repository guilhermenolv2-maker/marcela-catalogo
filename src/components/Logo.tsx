import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Ir para a página inicial">
      <img src="/logo.png" alt="Logo Marcela Lopes" className="h-11 w-11 rounded-2xl" />
      <span className="font-display text-2xl font-semibold text-ink">Marcela Lopes</span>
    </Link>
  );
}
