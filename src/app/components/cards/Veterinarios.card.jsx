// src/components/cards/Veterinarios.card.jsx
"use client";  // Agrega esto para convertirlo en un Client Component

import { Share2, MapPin, Star, Calendar, MessageCircle } from 'lucide-react';

export default function VetCard({ vet }) {
  const handleShare = () => {
    console.log("Sharing vet info");
  };

  const handleSchedule = () => {
    console.log("Scheduling online consultation");
  };

  const handleContact = () => {
    console.log("Contacting via WhatsApp");
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={vet.image} 
        alt={vet.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">{vet.name}</h2>
          <button onClick={handleShare} className="text-orange-500 hover:text-orange-600">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-2">{vet.specialty}</p>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          {vet.location}
        </div>
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < vet.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
          ))}
        </div>
        <button 
          onClick={handleSchedule}
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors mb-2"
        >
          <Calendar className="w-5 h-5 mr-2" />
          Agendar consulta online
        </button>
        <button 
          onClick={handleContact}
          className="w-full bg-white text-gray-700 py-2 px-4 rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-100 transition-colors"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Contactarse
        </button>
      </div>
    </div>
  );
}
