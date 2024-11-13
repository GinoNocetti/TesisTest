'use client'

import { useEffect, useState } from 'react';
import { getCart } from '../../controladores/CarritoControlador/CarritoControlador'; 
import CarritoPage from '../../components/carrito/CarritoCompras'; 

export default function CarritoPageContainer() {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const productosCarrito = getCart();
    setCarrito(productosCarrito);
  }, []);

  return (
    <div className="px-6 py-8">
      <h1 className="text-4xl font-bold mb-4">Carrito de Compras</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-8">Revisa tus productos</h2>

      {/* Aquí pasas la prop como carrito */}
      <CarritoPage carrito={carrito} />
    </div>
  );
}
