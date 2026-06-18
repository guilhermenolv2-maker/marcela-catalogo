export function Loading() {
  return (
    <div className="grid min-h-64 place-items-center" role="status" aria-label="Carregando">
      <span className="h-12 w-12 animate-spin rounded-full border-4 border-rose border-t-gold" />
    </div>
  );
}
