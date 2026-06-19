import type { Category, Product } from '../types/product';

export const categories: Category[] = [
  {
    id: 'acessorios',
    name: 'Acessórios',
    description: 'Peças delicadas para finalizar o look.',
    image:
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'beleza',
    name: 'Beleza',
    description: 'Cuidados premium para uma rotina luminosa.',
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'decor',
    name: 'Vestuário',
    description: 'Peças selecionadas para compor looks delicados.',
    image:
      'https://images.unsplash.com/photo-1513094735237-8f2714d57c13?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'diversos',
    name: 'Produtos diversos',
    description: 'Itens variados para completar o catálogo.',
    image:
      ' https://www.assai.com.br/sites/default/files/fundo_rosa_com_bolsa_e_produtos_de_maquiagem_diversos_-_produtos_de_beleza_-_assai_atacadista.jpg',
  },
  {
    id: 'presentes',
    name: 'Presentes',
    description: 'Kits prontos para encantar.',
    image:
      'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=900&q=80',
  },
];

export const products: Product[] = [
  {
    id: '1',
    slug: 'reparador-de-Pontas-babasoul',
    name: 'Reparador de Pontas Babasoul',
    description: 'Nutre, sela as pontas e proporciona brilho e maciez aos fios.',
    fullDescription:
      'Reparador de Pontas BabaSoul – Finaliza os fios com brilho, maciez e proteção, ajudando a reduzir o frizz e as pontas duplas para um cabelo mais saudável e sedoso.',
    price: 19.99,
    category: 'beleza',
    stock: 5,
    featured: true,
    promotion: 'Mais vendido',
    images: ['https://http2.mlstatic.com/D_NQ_NP_833817-MLB103878770279_012026-O.webp'],
  },
  {
    id: '2',
    slug: 'yasmin-ju',
    name: 'Perfume 209 Yasmin&Ju 20ml',
    description: 'Fragrância marcante e elegante para todos os momentos.',
    fullDescription:
      'Fragrância marcante e sofisticada, com aroma envolvente que proporciona frescor e elegância para o dia a dia.',
    price: 18.0,
    category: 'beleza',
    stock: 8,
    featured: true,
    images: [
      'https://acdn-us.mitiendanube.com/stores/001/624/130/products/922f6eb6dd44151cc82e1a6300bbdca6-8e840671ed038ec78c17797421368516-1024-1024.webp',
    ],
  },
  {
    id: '3',
    slug: 'kit-miss-lary',
    name: 'Kit Body Splash + Hidrat + Perf. Capilar Miss Lary Love Intenso',
    description: 'Kit perfumado com fragrância envolvente para corpo e cabelos.',
    fullDescription:
      'Kit Miss Lary Love Intenso com body splash, hidratante corporal e perfume capilar. Uma combinação com fragrância marcante para cuidar, perfumar e completar sua rotina de autocuidado.',
    price: 56.0,
    category: 'beleza',
    stock: 18,
    featured: true,
    promotion: '10% off no combo',
    images: [
      'https://cdn.awsli.com.br/2500x2500/2521/2521305/produto/400660701/prancheta-26-g2am22ot0d.png',
    ],
  },
  {
    id: '4',
    slug: 'vivai-lip-gloss',
    name: 'Vivai Lip Gloss Glitter Fofys',
    description: 'Brilho intenso e hidratação para lábios macios e radiantes.',
    fullDescription:
      'Proporciona brilho intenso, hidratação e um acabamento delicado, deixando os lábios macios, radiantes e ainda mais bonitos.',
    price: 12.0,
    category: 'beleza',
    stock: 6,
    featured: true,
    promotion: 'Edição limitada',
    images: ['https://m.media-amazon.com/images/I/61+ex5KmnYL.jpg'],
  },
  {
    id: '5',
    slug: 'creme-seiva',
    name: 'Creme de Pentear Seiva De Babosa Cuide-Se Bem Feira 200ml',
    description: 'Hidrata, desembaraça e deixa os fios macios e com brilho natural.',
    fullDescription:
      'Enriquecido com seiva de babosa, hidrata profundamente, facilita o desembaraço e ajuda a controlar o frizz, deixando os cabelos mais macios, brilhantes e com movimento natural. Ideal para os cuidados diários dos fios.',
    price: 24.9,
    category: 'beleza',
    stock: 20,
    featured: false,
    images: ['https://http2.mlstatic.com/D_NQ_NP_727176-MLA92888077752_092025-O.webp'],
  },
  {
    id: '6',
    slug: 'rimel-pink21',
    name: 'Rímel Incolor Pink21',
    description: 'Modela os cílios com efeito natural.',
    fullDescription: 'Define e modela os cílios, proporcionando um acabamento natural e delicado.',
    price: 12.0,
    category: 'beleza',
    stock: 14,
    featured: false,
    images: [
      'https://mercadomake.com.br/wp-content/uploads/2023/09/CS-3658_mascara-de-cilios-incolor-invisible-pink-21.jpg',
    ],
  },
  {
    id: '7',
    slug: 'lapis-sobrancelha',
    name: 'Lápis Sobrancelha Soul',
    description: 'Realça o olhar com traços precisos e marcantes.',
    fullDescription:
      'Proporciona traços precisos e intensos, destacando o olhar com praticidade. Ideal para criar desde uma maquiagem delicada até um visual mais marcante.',
    price: 37.99,
    category: 'beleza',
    stock: 10,
    featured: false,
    images: ['https://http2.mlstatic.com/D_NQ_NP_710728-MLB83060034739_032025-O.webp'],
  },
  {
    id: '8',
    slug: 'quarteto-contorno',
    name: 'Quarteto de Contorno Ludurana',
    description: 'Realça e define os traços do rosto com acabamento natural e sofisticado.',
    fullDescription:
      'Com tons versáteis e de fácil aplicação, o Quarteto de Contorno ajuda a realçar e definir os traços do rosto, proporcionando um acabamento natural e sofisticado. Ideal para criar profundidade e valorizar a maquiagem em qualquer ocasião.',
    price: 15.0,
    category: 'beleza',
    stock: 9,
    featured: false,
    images: [
      'https://cdn.awsli.com.br/2500x2500/2492/2492933/produto/343432050/fe157dce2bf8401ca1e259c399f82dc0-1eskx19aec.jpg',
    ],
  },
];

export const availableCategories = categories.filter((category) =>
  products.some((product) => product.category === category.id),
);
