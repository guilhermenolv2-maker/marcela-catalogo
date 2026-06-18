import { ChevronLeft, ChevronRight } from 'lucide-react';

type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <nav className="flex items-center justify-center gap-2" aria-label="Paginação">
      <button
        type="button"
        onClick={() => onPageChange(Math.max(1, page - 1))}
        disabled={page === 1}
        className="grid h-11 w-11 place-items-center rounded-full bg-white text-ink shadow-soft disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Página anterior"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>

      {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
        <button
          key={pageNumber}
          type="button"
          onClick={() => onPageChange(pageNumber)}
          className={`h-11 min-w-11 rounded-full px-4 text-sm font-bold ${
            page === pageNumber ? 'bg-ink text-white' : 'bg-white text-ink shadow-soft'
          }`}
          aria-label={`Ir para página ${pageNumber}`}
          aria-current={page === pageNumber ? 'page' : undefined}
        >
          {pageNumber}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onPageChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="grid h-11 w-11 place-items-center rounded-full bg-white text-ink shadow-soft disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Próxima página"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </nav>
  );
}
