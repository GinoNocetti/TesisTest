import { Star, Share2, Heart } from 'lucide-react'

export default function Component({ product = {
  name: "Pedigree vital",
  price: 2300,
  description: "Descripción Breve del producto visualizado en la pantalla del usuario.",
  image: "/placeholder.svg?height=300&width=300"
} }) {
  return (
    <div className="w-64 bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-gray-300" />
          ))}
        </div>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold">${product.price}</span>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
            Añadir al carrito
          </button>
        </div>
        <div className="flex justify-between text-gray-500">
          <button className="flex items-center">
            <Share2 className="w-4 h-4 mr-1" />
            Compartir
          </button>
          <button className="flex items-center">
            <Heart className="w-4 h-4 mr-1" />
            Agregar a favoritos
          </button>
        </div>
      </div>
    </div>
  )
}