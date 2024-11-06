'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, ShoppingCart, Menu, X } from 'lucide-react'

export default function Navbar({ isAdmin = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Productos', href: '/productos' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Animales en Adopción', href: '/adopcion' },
    { name: 'Animales Encontrados', href: '/encontrados' },
    { name: 'Veterinarios', href: '/veterinarios' },
    { name: 'Alojamiento', href: '/alojamiento' },
  ]

  if (isAdmin) {
    navLinks.push({ name: 'Admin', href: '/admin' })
  }

  return (
    <nav className="bg-[#F39221]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between">
          {/* Logo */}
          <div className="flex justify-center w-full py-4">
            <Image src="/logo.png" alt="Logo" width={150} height={50} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden absolute right-4 top-4">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:justify-between w-full py-4">
            {/* Search bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar"
                className="bg-white text-[#F39221] pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#F39221]" />
            </div>

            {/* Navigation links */}
            <div className="flex space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-gray-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Login, Register, and Cart */}
            <div className="flex items-center space-x-4">
              <span className="text-white">
                <Link href="/login" className="hover:underline">Log in</Link>
                {' | '}
                <Link href="/register" className="hover:underline">Registrarse</Link>
              </span>
              <Link href="/cart" className="text-white hover:text-gray-200">
                <ShoppingCart className="h-6 w-6" />
                <span className="sr-only">Shopping cart</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Search bar */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Buscar"
                className="w-full bg-white text-[#F39221] pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#F39221]" />
            </div>

            {/* Navigation links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:bg-orange-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </Link>
            ))}

            {/* Login, Register, and Cart */}
            <div className="mt-4 flex flex-col space-y-2">
              <Link href="/login" className="text-white hover:bg-orange-600 block px-3 py-2 rounded-md text-base font-medium">
                Log in
              </Link>
              <Link href="/register" className="text-white hover:bg-orange-600 block px-3 py-2 rounded-md text-base font-medium">
                Registrarse
              </Link>
              <Link href="/cart" className="text-white hover:bg-orange-600 flex items-center px-3 py-2 rounded-md text-base font-medium">
                <ShoppingCart className="h-6 w-6 mr-2" />
                Carrito
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}