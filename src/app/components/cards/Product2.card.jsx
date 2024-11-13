"use client";

import { Share2, Heart, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { addToCart } from '../../controladores/CarritoControlador/CarritoControlador';
import Message from '../../components/mensaje/Mensaje';

export default function ProductCard({ product }) {
  const [mensaje, setMensaje] = useState(""); // Estado para el mensaje de notificación
  const [cantidad, setCantidad] = useState(1); // Estado para la cantidad seleccionada

  const handleShare = () => {
    console.log("Compartiendo producto");
  };

  const handleAddToFavorites = () => {
    console.log("Agregando a favoritos");
  };

  const handleAddToCart = () => {
    addToCart(product, cantidad); // Pasar la cantidad al controlador
    console.log(`Producto ${product.name} agregado al carrito con cantidad ${cantidad}`);
    
    setMensaje("¡Producto agregado al carrito!");
    setTimeout(() => setMensaje(""), 3000);
  };

  const discountedPrice = product.discountPercentage
    ? product.price * (1 - product.discountPercentage / 100)
    : product.price;

  return (
    <div className="w-full max-w-xs bg-white rounded-lg shadow-md overflow-hidden mx-auto p-4">
      {/* Imagen del producto */}
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover"
      />
      
      <div className="pt-4">
        {/* Título del producto */}
        <h2 
          className="text-lg font-semibold leading-tight line-clamp-2 mb-2" 
          title={product.name}
        >
          {product.name}
        </h2>

        {/* Precio y descuento, en línea */}
        <div className="flex items-center mb-2">
          {product.discountPercentage ? (
            <>
              <span className="line-through text-gray-500 mr-2">${product.price.toFixed(2)}</span>
              <span className="text-orange-600 font-bold">${discountedPrice.toFixed(2)}</span>
              <span className="ml-2 text-green-600 text-sm font-medium">({product.discountPercentage}% OFF)</span>
            </>
          ) : (
            <span className="text-gray-700 font-bold">${product.price.toFixed(2)}</span>
          )}
        </div>

        {/* Selección de cantidad */}
        <div className="flex items-center mb-2">
          <label htmlFor="quantity" className="text-gray-600 mr-2">Cantidad:</label>
          <input
            type="number"
            id="quantity"
            value={cantidad}
            onChange={(e) => setCantidad(Math.min(5, Math.max(1, parseInt(e.target.value) || 1)))}
            min="1"
            max="5"
            className="w-16 text-center border p-1"
          />
        </div>

        {/* Descripción del producto */}
        <p className="text-gray-600 text-base mb-4">{product.description}</p>

        {/* Botón para añadir al carrito */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors mb-4"
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          Añadir al carrito
        </button>

        {/* Botones de compartir y agregar a favoritos */}
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

      {/* Mostrar el mensaje cuando se agrega el producto al carrito */}
      {mensaje && <Message mensajeTexto={mensaje} onClose={() => setMensaje("")} />}
    </div>
  );
}
