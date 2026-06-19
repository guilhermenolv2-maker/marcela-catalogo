import { useEffect, useState } from 'react';

type ProductGalleryProps = {
  images: string[];
  productName: string;
};

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [images]);

  return (
    <div className="space-y-4">
      <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-mist shadow-soft">
        <img src={selectedImage} alt={productName} className="h-full w-full object-cover" />
      </div>
      <div className="grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setSelectedImage(image)}
            className={`aspect-square overflow-hidden rounded-2xl border-2 ${
              selectedImage === image ? 'border-gold' : 'border-transparent'
            }`}
            aria-label={`Ver imagem ${index + 1} de ${productName}`}
          >
            <img
              src={image}
              alt={`${productName} imagem ${index + 1}`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
