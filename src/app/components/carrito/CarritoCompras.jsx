'use client'

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { quitarDelCarrito } from '../../controladores/CarritoControlador/CarritoControlador';

export default function CarritoPage({ carrito }) {
  const [productosCarrito, setProductosCarrito] = useState(carrito);

  useEffect(() => {
    setProductosCarrito(carrito);
  }, [carrito]);

  // Función para aplicar descuento
  const calcularPrecioConDescuento = (producto) => {
    if (producto.discountPercentage) {
      const descuento = (producto.price * producto.discountPercentage) / 100;
      return producto.price - descuento;
    }
    return producto.price;
  };

  const handleQuitarProducto = (id) => {
    quitarDelCarrito(id);
    setProductosCarrito(productosCarrito.filter(producto => producto.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Carrito de Compras</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {productosCarrito.length === 0 ? (
            <p>No hay productos en el carrito.</p>
          ) : (
            <div className="grid grid-cols-12 gap-4 mb-4 text-sm font-medium text-gray-500 uppercase">
              <div className="col-span-6">Producto</div>
              <div className="col-span-2 text-right">Precio</div>
              <div className="col-span-2 text-center">Cantidad</div>
              <div className="col-span-2 text-right">Subtotal</div>
            </div>
          )}

          {productosCarrito.map((producto) => {
            const precioConDescuento = calcularPrecioConDescuento(producto);
            const subtotal = precioConDescuento * producto.quantity;
            return (
              <div key={producto.id} className="border p-4 mb-4">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-6">
                    <div className="flex items-center gap-4">
                      <button
                        className="text-gray-400 hover:text-gray-600"
                        onClick={() => handleQuitarProducto(producto.id)}
                      >
                        <X className="h-4 w-4" />
                      </button>
                      <img
                        src={producto.image}
                        alt={producto.name}
                        className="h-20 w-20 object-cover"
                      />
                      <div>
                        <h3 className="font-medium">{producto.name}</h3>
                        <p className="text-sm text-gray-500">Cantidad: {producto.quantity}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 text-right">
                    ${precioConDescuento.toLocaleString('es-AR', { minimumFractionDigits: 2 })}
                  </div>
                  <div className="col-span-2 flex justify-center items-center gap-2">
                    <input
                      type="number"
                      value={producto.quantity}
                      onChange={(e) => console.log("Actualizar cantidad")}
                      min="1"
                      className="w-16 text-center border p-1"
                    />
                  </div>
                  <div className="col-span-2 text-right font-medium">
                    ${subtotal.toLocaleString('es-AR', { minimumFractionDigits: 2 })}
                  </div>
                </div>
              </div>
            );
          })}

          <button className="border p-2 mt-4 w-full bg-gray-200 hover:bg-gray-300">
            CONTINUAR COMPRANDO
          </button>
        </div>

        <div className="lg:col-span-1">
          <div className="border p-6">
            <h2 className="text-xl font-medium mb-4">RESUMEN DE COMPRA</h2>
            <div className="flex justify-between items-center text-xl font-medium mb-4">
              <span>SUBTOTAL</span>
              <span>
                ${productosCarrito.reduce((total, producto) => total + (calcularPrecioConDescuento(producto) * producto.quantity), 0).toLocaleString('es-AR', { minimumFractionDigits: 2 })}
              </span>
            </div>
            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white p-2">
              INICIAR PAGO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
