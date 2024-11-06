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
      rating: 4,
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
      rating: 5,
      category: "accesorios"
    },
    
    // Otros productos...
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Productos disponibles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
