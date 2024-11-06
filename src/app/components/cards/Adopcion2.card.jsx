"use client";

import { Share2, MapPin, MessageCircle } from 'lucide-react';

export default function AnimalCard({ animal }) {
  const { id, name, species, shortDescription, location, image } = animal; // Asegúrate de usar shortDescription

  const handleContact = () => {
    console.log("Contacting via WhatsApp");
  };

  const handleShare = () => {
    console.log("Sharing animal info");
  };

  return (
    <div className="w-80 bg-white rounded-lg shadow-md overflow-hidden"> {/* Aumentar tamaño de la tarjeta */}
      <img 
        src={image} 
        alt={name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">{name}</h2> {/* Aumentar tamaño del nombre */}
          <button onClick={handleShare} className="flex items-center text-orange-500 hover:text-orange-600">
            <Share2 className="w-5 h-5 mr-1 text-orange-500" /> {/* Icono de compartir en naranja */}
            <span>Compartir</span> {/* Texto al lado del icono */}
          </button>
        </div>
        <p className="text-lg text-gray-500 mb-2">{species}</p> {/* Aumentar tamaño de la especie */}
        <p className="text-base text-gray-600 mb-3">{shortDescription}</p> {/* Usar shortDescription */}
        <div className="flex items-center text-lg text-orange-500 mb-4"> {/* Cambiar a naranja y aumentar tamaño */}
          <MapPin className="w-5 h-5 mr-1" />
          {location}
        </div>
        <button 
          onClick={handleContact}
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
        >
          <MessageCircle className="w-5 h-5 mr-2" /> {/* Icono de WhatsApp en el botón */}
          Contactarse
        </button>
      </div>
    </div>
  );
}
