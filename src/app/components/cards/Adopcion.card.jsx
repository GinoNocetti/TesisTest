import { Share2, MapPin, MessageCircle } from 'lucide-react'

export default function Component({ animal = {
  name: "Nombre Mascota",
  species: "PERRO/A GATO/A",
  description: "Descripción Breve de la mascota, relación con otros animales, donde se encontró, cuando, etc",
  location: "CÓRDOBA, GENERAL PAZ",
  image: "/placeholder.svg?height=300&width=300"
} }) {
  const handleContact = () => {
    // Implement WhatsApp contact logic here
    console.log("Contacting via WhatsApp")
  }

  const handleShare = () => {
    // Implement share logic here
    console.log("Sharing animal info")
  }

  return (
    <div className="w-64 bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={animal.image} 
        alt={animal.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">{animal.name}</h2>
          <button onClick={handleShare} className="text-gray-500 hover:text-gray-700">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-2">{animal.species}</p>
        <p className="text-sm text-gray-600 mb-3">{animal.description}</p>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          {animal.location}
        </div>
        <button 
          onClick={handleContact}
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Contactarse
        </button>
      </div>
    </div>
  )
}