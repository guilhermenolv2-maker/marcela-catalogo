export type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  fullDescription: string;
  price: number;
  category: string;
  stock: number;
  featured: boolean;
  promotion?: string;
  images: string[];
};

export type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'name';
