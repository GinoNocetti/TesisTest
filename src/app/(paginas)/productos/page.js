import ProductCard from "../../components/cards/Product2.card";

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Pedigree Vital Canino para Adultos con Nutrientes Esenciales",
      price: 2300,
      discountPercentage: 15,
      description: "Comida para perros adultos.",
      longDescription: "Comida de alta calidad para el crecimiento saludable de tu mascota.",
      image: "/assets/images/Prodimagenejemplo.jpg",
      category: "comida"
    },
    {
      id: 2,
      name: "Collar Reflectante",
      price: 500,
      discountPercentage: null,
      description: "Collar de seguridad para perros.",
      longDescription: "Collar reflectante ideal para paseos nocturnos.",
      image: "/assets/images/Prodimagenejemplo2.jpg",
      category: "accesorios"
    },
    
    // Otros productos...
  ];

  return (
    <div>
      {/* Título principal */}
      <h1 className="text-4xl font-bold mb-2">Productos disponibles</h1>
  
      {/* Subtítulo para motivar la exploración */}
      <p className="text-lg text-gray-600 mb-6">Explora nuestros productos y encuentra lo mejor para tus necesidades</p>
  
      {/* Div contenedor de productos con un ID específico */}
      <div 
        id="productos-contenedor"  // ID para identificar el contenedor de productos
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
  
  
}
