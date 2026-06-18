import { Link } from 'react-router-dom';
import type { Category } from '../types/product';

type CategoryCardProps = {
  category: Category;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      to={`/produtos?categoria=${category.id}`}
      className="group block overflow-hidden rounded-[2rem] bg-white shadow-soft"
    >
      <div className="aspect-[5/4] overflow-hidden bg-mist">
        <img
          src={category.image}
          alt={category.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h2 className="font-display text-2xl font-semibold text-ink">{category.name}</h2>
        <p className="mt-2 text-sm leading-6 text-ink/65">{category.description}</p>
      </div>
    </Link>
  );
}
