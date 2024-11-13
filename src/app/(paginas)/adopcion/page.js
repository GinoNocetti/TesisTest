import AnimalCard from "../../components/cards/Adopcion2.card"; // Asegúrate de que la ruta sea correcta

export default function MascotasPage() {
  const mascotas = [
    {
      id: 1,
      name: "Rocco",
      species: "Perro",
      shortDescription: "Rocco es un perro muy juguetón y cariñoso.",
      longDescription: "Fido es un perro muy juguetón y cariñoso. Le encanta correr en el parque y jugar con otros perros. Es amigable con los niños y le gusta que le rasquen la barriga. Tiene un buen comportamiento y es fácil de entrenar.",
      location: "Córdoba, General Paz",
      image: "/assets/images/Adopcionimagenejemplo.jpg"
    },
    {
      id: 2,
      name: "Odín",
      species: "Gato",
      shortDescription: "Odín es un gato familiero, leal y perezoso.",
      longDescription: "Fido es un perro muy juguetón y cariñoso. Le encanta correr en el parque y jugar con otros perros. Es amigable con los niños y le gusta que le rasquen la barriga. Tiene un buen comportamiento y es fácil de entrenar.",
      location: "Córdoba, Villa Carlos Paz",
      image: "/assets/images/Adopcionimagenejemplo2.jpg"
    }
    // Más mascotas
  ];

  return (
    <div className="px-6 py-8">
      <h1 className="text-4xl font-bold mb-4">Mascotas en Adopción</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-8">Conoce a nuestros amigos peludos</h2>
  
      {}
      <div 
        id="mascotas-contenedor" // ID para identificar el contenedor de mascotas
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
      >
        {mascotas.map(mascota => (
          <AnimalCard key={mascota.id} animal={mascota} /> 
        ))}
      </div>
    </div>
  );
  
}

