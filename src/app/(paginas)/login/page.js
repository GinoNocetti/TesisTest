'use client';

import { useState } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías manejar la lógica de inicio de sesión
    console.log('Intento de inicio de sesión con', { email, password }); // Ejemplo
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Imagen de fondo en el lado izquierdo */}

      <div className="hidden sm:flex sm:w-1/3 md:w-1/2 lg:flex-1 bg-cover bg-center" style={{ backgroundImage: `url('/assets/images/perro-y-gato.jpg')` }}></div>

      {/* Formulario de inicio de sesión en el lado derecho */}
      <div className="flex flex-col justify-center lg:w-1/4 p-8 bg-white">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">Iniciar Sesión</h1>

        {/* Botones de inicio de sesión con Facebook y Google */}
        <button className="flex items-center justify-center w-full py-2 mb-3 text-white bg-blue-600 rounded-md hover:bg-blue-700">
          <FaFacebook className="mr-2" /> Inicia sesión con Facebook
        </button>
        <button className="flex items-center justify-center w-full py-2 mb-4 text-white bg-red-500 rounded-md hover:bg-red-600">
          <FaGoogle className="mr-2" /> Inicia sesión con Google
        </button>

        {/* Línea divisoria */}
        <div className="flex items-center justify-center my-4">
          <span className="w-full border-b border-gray-300"></span>
          <span className="px-2 text-gray-400">o</span>
          <span className="w-full border-b border-gray-300"></span>
        </div>

        {/* Campos del formulario de inicio de sesión */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-gray-600">Contraseña</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Botón de inicio de sesión */}
          <button
            type="submit"
            className="w-full py-2 text-white rounded-md hover:bg-orange-600"
            style={{ backgroundColor: '#f39221' }}
            onClick={() => window.location.href = '/'} // Redirige al home
          >
          Iniciar Sesión
          </button>

        </form>

        {/* Link para registrarse */}
        <p className="mt-4 text-sm text-gray-600 text-center">
          ¿No tienes cuenta? <a href="/register" className="text-blue-500 hover:underline">Regístrate</a>
        </p>
      </div>
    </div>
  );
}
