'use client'

import React from 'react';
import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: 'INICIO', href: '/' },
    { name: 'PRODUCTOS', href: '/productos' },
    { name: 'SERVICIOS', href: '/servicios' },
    { name: 'ADOPCIÓN', href: '/adopcion' },
    { name: 'ENCONTRADOS', href: '/encontrados' },
    { name: 'VETERINARIOS', href: '/veterinarios' },
    { name: 'ALOJAMIENTO', href: '/alojamiento' },
  ];

  return (
    <footer className="bg-white text-gray-600 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <p className="text-sm mb-4 md:mb-0">&copy;{currentYear} Pet Friendly</p>
          <img src="/logo.png" alt="Pet Friendly Logo" className="h-12 mb-4 md:mb-0" />
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-[#F39221]">
              <Facebook />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-[#F39221]">
              <Twitter />
            </a>
            <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-[#F39221]">
              <Youtube />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-[#F39221]">
              <Instagram />
            </a>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-center text-lg font-semibold mb-4">NAVEGACIÓN DEL SITIO</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-[#F39221]">
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="max-w-md mx-auto">
          <h2 className="text-center text-lg font-semibold mb-4">SUSCRIBITE A NUESTRO NEWSLETTER PARA PROMOCIONES Y DESCUENTOS</h2>
          <form className="flex">
            <input
              type="email"
              placeholder="E-mail"
              className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#F39221]"
            />
            <button
              type="submit"
              className="bg-[#F39221] text-white px-4 py-2 rounded-r-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;