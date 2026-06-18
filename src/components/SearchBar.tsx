import { Search } from 'lucide-react';

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-ink/55">
        Pesquisar
      </span>
      <span className="relative block">
        <Search
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/45"
          aria-hidden="true"
        />
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Pesquisar produto"
          className="h-12 w-full rounded-full border border-lavender bg-white py-3 pl-12 pr-4 text-sm text-ink outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15"
        />
      </span>
    </label>
  );
}
