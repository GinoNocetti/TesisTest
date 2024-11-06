import { Share2, MapPin, PawPrint, Home, Star } from 'lucide-react'

export default function Component({ accommodation = {
  name: "Nombre Alojamiento",
  location: "CÓRDOBA, GENERAL PAZ",
  image: "/placeholder.svg?height=300&width=300",
  price: 1000
} }) {
  const handleShare = () => {
    // Implement share logic here
    console.log("Sharing accommodation info")
  }

  const handleReserve = () => {
    // Implement reservation logic here
    console.log("Reserving accommodation")
  }

  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={accommodation.image} 
        alt={accommodation.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">{accommodation.name}</h2>
          <button onClick={handleShare} className="text-orange-500 hover:text-orange-600">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          {accommodation.location}
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <PawPrint className="w-4 h-4 mr-1" />
          GUARDERÍA
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Home className="w-4 h-4 mr-1" />
          CAPACIDAD DE HOSPEDAJE
        </div>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-gray-300" />
          ))}
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold">${accommodation.price} <span className="text-sm font-normal">La noche</span></span>
        </div>
        <button 
          onClick={handleReserve}
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
        >
          Reservar alojamiento
        </button>
      </div>
    </div>
  )
}