'use client'

/*export const metadata = {
    title: "Iniciar sesión - Mi aplicación",
    description: "Página de inicio de sesión de usuarios",
  };*/
  
  import { useState } from 'react';
  import { FaFacebook, FaGoogle } from 'react-icons/fa';
  import Message from '../../components/mensaje/Mensaje';
  
  
  export default function Register() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [mensajeVisible, setMensajeVisible] = useState(false); // Estado para controlar la visibilidad del mensaje
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        setMensajeVisible(true); // Mostrar el mensaje si las contraseñas no coinciden
      } else {
        console.log('Formulario enviado con éxito');
        // Aquí puedes proceder con el envío del formulario o lo que necesites
      }
    };
  
    return (
      <div className="flex min-h-screen bg-gray-100">
        {/* Imagen de fondo en el lado izquierdo */}
        <div className="hidden lg:flex lg:flex-1 bg-cover bg-center" style={{ backgroundImage: `url('/assets/images/perro-y-gato.jpg')` }}></div>
  
        {/* Formulario de registro en el lado derecho */}
        <div className="flex flex-col justify-center lg:w-1/4 p-8 bg-white">
          <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">Regístrate</h1>
  
          {/* Botones de registro con Facebook y Google */}
          <button className="flex items-center justify-center w-full py-2 mb-3 text-white bg-blue-600 rounded-md hover:bg-blue-700">
            <FaFacebook className="mr-2" /> Regístrate con Facebook
          </button>
          <button className="flex items-center justify-center w-full py-2 mb-4 text-white bg-red-500 rounded-md hover:bg-red-600">
            <FaGoogle className="mr-2" /> Regístrate con Google
          </button>
  
          {/* Línea divisoria */}
          <div className="flex items-center justify-center my-4">
            <span className="w-full border-b border-gray-300"></span>
            <span className="px-2 text-gray-400">o</span>
            <span className="w-full border-b border-gray-300"></span>
          </div>
  
          {/* Mostrar mensaje de error si es necesario */}
          {mensajeVisible && (
            <Message 
              mensajeTexto="Las contraseñas no coinciden"
              color="#e74c3c" // Rojo para el error
              duracion={2500} // Duración en milisegundos
              onClose={() => setMensajeVisible(false)} // Ocultar el mensaje después de 3 segundos
            />
          )}
  
          {/* Campos del formulario de registro */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-600">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
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
  
            <div>
              <label htmlFor="confirm-password" className="block text-sm text-gray-600">Confirma Contraseña</label>
              <input
                type="password"
                id="confirm-password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
  
            {/* Botón de registro con nuevo color y hover */}
            <button
              type="submit"
              className="w-full py-2 text-white rounded-md hover:bg-orange-600"
              style={{ backgroundColor: '#f39221' }}
            >
            Regístrate
            </button>
          </form>
  
          {/* Link para iniciar sesión */}
          <p className="mt-4 text-sm text-gray-600 text-center">
            ¿Ya tienes cuenta? <a href="/login" className="text-blue-500 hover:underline">Inicia sesión</a>
          </p>
        </div>
      </div>
    );
  }
  