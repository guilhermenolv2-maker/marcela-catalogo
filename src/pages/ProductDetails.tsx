import { Minus, Plus, Ruler } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { useMemo, useState } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link, useParams } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { Modal } from '../components/Modal';
import { ProductGallery } from '../components/ProductGallery';
import { RelatedProducts } from '../components/RelatedProducts';
import { Toast } from '../components/Toast';
import { products } from '../data/products';
import { useCart } from '../hooks/useCart';
import { formatCurrency } from '../utils/format';

export function ProductDetails() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const categoryName = useMemo(() => {
    if (!product) return '';
    return product.category.charAt(0).toUpperCase() + product.category.slice(1);
  }, [product]);

  if (!product) {
    return (
      <section className="px-4 py-20 text-center">
        <h1 className="font-display text-4xl font-semibold text-ink">Produto não encontrado</h1>
        <Link to="/produtos" className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-white">
          Voltar ao catálogo
        </Link>
      </section>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity);
    setShowToast(true);
    window.setTimeout(() => setShowToast(false), 2200);
  };

  return (
    <>
      <Helmet>
        <title>{product.name} | Marcela Lopes</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={`${product.name} | Marcela Lopes`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.images[0]} />
      </Helmet>

      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumb items={[{ label: 'Produtos', to: '/produtos' }, { label: product.name }]} />
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <ProductGallery images={product.images} productName={product.name} />

            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-bold uppercase tracking-wide text-gold">{categoryName}</p>
              <h1 className="mt-2 font-display text-5xl font-semibold text-ink">{product.name}</h1>
              <p className="mt-4 text-lg leading-8 text-ink/70">{product.fullDescription}</p>
              <strong className="mt-6 block text-3xl text-ink">{formatCurrency(product.price)}</strong>
              <p className="mt-2 text-sm font-semibold text-ink/55">{product.stock} unidades em estoque</p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <div className="flex items-center rounded-full bg-mist p-1" aria-label="Quantidade">
                  <button
                    type="button"
                    onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                    className="grid h-11 w-11 place-items-center rounded-full hover:bg-white"
                    aria-label="Diminuir quantidade"
                  >
                    <Minus className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <span className="min-w-12 text-center font-bold text-ink">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((value) => Math.min(product.stock, value + 1))}
                    className="grid h-11 w-11 place-items-center rounded-full hover:bg-white"
                    aria-label="Aumentar quantidade"
                  >
                    <Plus className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="rounded-full bg-ink px-7 py-4 text-sm font-bold text-white shadow-soft transition hover:bg-gold hover:text-ink"
                >
                  Adicionar ao carrinho
                </button>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-ink underline decoration-gold underline-offset-4"
              >
                <Ruler className="h-4 w-4" aria-hidden="true" />
                Ver detalhes de atendimento
              </button>
            </div>
          </div>

          <RelatedProducts product={product} />
        </div>
      </section>

      <Modal isOpen={isModalOpen} title="Atendimento personalizado" onClose={() => setIsModalOpen(false)}>
        <p className="leading-7 text-ink/70">
          Após enviar o pedido pelo WhatsApp, nossa equipe confirma disponibilidade, prazo de entrega,
          endereço e forma de pagamento. Não há pagamento online neste catálogo.
        </p>
      </Modal>

      <AnimatePresence>{showToast && <Toast message="Produto adicionado ao carrinho" />}</AnimatePresence>
    </>
  );
}
