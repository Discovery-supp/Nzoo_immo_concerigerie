import React from 'react';

const ImageGallery: React.FC = () => {
  const images = [
    '/bedroom1.jpg',
    '/livingroom1.jpg',
    '/bedroom2.jpg',
    '/livingroom2.jpg',
    '/bedroom3.jpg'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
            Nos Propriétés
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Découvrez notre sélection d'hébergements de qualité supérieure
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-xl shadow-lg group"
            >
              <img
                src={image}
                alt={`Propriété ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
