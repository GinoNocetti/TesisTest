'use client'

import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = ({ isAdmin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'INICIO', href: '/' },
    { name: 'PRODUCTOS', href: '/productos' },
    { name: 'SERVICIOS', href: '/servicios' },
    { name: 'ANIMALES EN ADOPCIÓN', href: '/adopcion' },
    { name: 'ANIMALES ENCONTRADOS', href: '/encontrados' },
    { name: 'VETERINARIOS', href: '/veterinarios' },
    { name: 'ALOJAMIENTO', href: '/alojamiento' },
  ];

  if (isAdmin) {
    navLinks.push({ name: 'ADMINISTRACIÓN', href: '/admin' });
  }

  return (
    <nav className="bg-[#F39221] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex justify-between items-center py-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar"
              className="bg-white text-[#F39221] pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white w-64"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#F39221]" />
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <a href="/login" className="hover:underline">Log in</a>
              {' | '}
              <a href="/register" className="hover:underline">Registrarse</a>
            </div>
            <a href="/cart">
              <ShoppingCart className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Logo */}
        <div className="flex justify-center py-4">
          <img src="/logo.png" alt="Pet Friendly" className="h-16" />
        </div>

        {/* Navigation links */}
        <div className="hidden md:flex justify-center space-x-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:bg-orange-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex justify-end py-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-500 focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:bg-orange-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-orange-600">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src="/user-avatar.png" alt="User" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium">Usuario</div>
                <div className="text-sm font-medium">usuario@ejemplo.com</div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <a
                href="/login"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-600"
              >
                Log in
              </a>
              <a
                href="/register"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-600"
              >
                Registrarse
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;