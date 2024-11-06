"use client";

import { Star, Share2, Heart, ShoppingCart } from 'lucide-react';

export default function ProductCard({ product }) {
  const handleShare = () => {
    console.log("Compartiendo producto");
  };

  const handleAddToFavorites = () => {
    console.log("Agregando a favoritos");
  };

  const handleAddToCart = () => {
    console.log(`Agregando al carrito el producto con ID: ${product.id}`);
  };

  // Calcular el precio con descuento si hay un porcentaje de descuento
  const discountedPrice = product.discountPercentage
    ? product.price * (1 - product.discountPercentage / 100)
    : product.price;

  return (
    <div className="w-4/5 max-w-xs bg-white rounded-lg shadow-md overflow-hidden mx-auto">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        {/* Nombre completo en hasta dos líneas y precio alineado */}
        <div className="flex justify-between items-start mb-2">
          <h2 
            className="text-lg font-semibold leading-tight line-clamp-2" 
            title={product.name} // Mostrar nombre completo en tooltip
          >
            {product.name}
          </h2>
          <div className="text-xl font-bold text-gray-700 ml-2">
            {product.discountPercentage ? (
              <div className="flex flex-col items-end">
                <span className="line-through text-gray-500">${product.price.toFixed(2)}</span>
                <span className="text-orange-600">${discountedPrice.toFixed(2)}</span>
              </div>
            ) : (
              <span>${product.price.toFixed(2)}</span>
            )}
          </div>
        </div>

        <p className="text-gray-600 text-base mb-2">{product.description}</p>

        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-6 h-6 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
            />
          ))}
        </div>

        <button 
          onClick={handleAddToCart}
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors mb-4"
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          Añadir al carrito
        </button>

        <div className="flex justify-between text-orange-500 mt-2">
          <button onClick={handleShare} className="flex items-center">
            <Share2 className="w-4 h-4 mr-1" />
            <span className="text-sm font-medium">Compartir</span>
          </button>
          <button onClick={handleAddToFavorites} className="flex items-center">
            <Heart className="w-4 h-4 mr-1" />
            <span className="text-sm font-medium">Agregar a favoritos</span>
          </button>
        </div>
      </div>
    </div>
  );
}

