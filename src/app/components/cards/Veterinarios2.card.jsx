"use client";

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
    <div className="w-3/4 max-w-xs bg-white rounded-lg shadow-md overflow-hidden mx-auto">
      <img 
        src={vet.image} 
        alt={vet.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">{vet.name}</h2>
          <button onClick={handleShare} className="text-orange-500 hover:text-orange-600 flex items-center space-x-1">
            <Share2 className="w-5 h-5" />
            <span className="text-sm font-medium">Compartir</span>
          </button>
        </div>
        
        {/* Especialidad más grande que el nombre */}
        <p className="text-lg text-gray-600 mb-2">{vet.specialty}</p>
        
        {/* Ubicación y logo de ubicación más grandes */}
        <div className="flex items-center text-lg text-orange-500 mb-2">
          <MapPin className="w-5 h-5 mr-1" />
          {vet.location}
        </div>

        {/* Estrellas de calificación aún más grandes */}
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-6 h-6 ${i < vet.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
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
