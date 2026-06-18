import { SearchX } from 'lucide-react';

type EmptyStateProps = {
  title: string;
  description: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="rounded-[2rem] bg-white px-6 py-12 text-center shadow-soft">
      <SearchX className="mx-auto h-10 w-10 text-gold" aria-hidden="true" />
      <h2 className="mt-4 font-display text-3xl font-semibold text-ink">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-ink/65">{description}</p>
    </div>
  );
}
