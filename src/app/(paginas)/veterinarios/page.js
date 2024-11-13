import VetCard from "../../components/cards/Veterinarios2.card";

export default function VeterinariosPage() {
  const veterinarios = [
    {
      id: 1,
      name: "Dr. Juan Pérez",
      specialty: "Veterinario General",
      location: "Córdoba, General Paz",
      image: "/assets/images/Veteimagenejemplo.jpg", // Ruta desde la carpeta `public`
      rating: 4,
      description: "Veterinario con 10 años de experiencia en el cuidado de mascotas."
    },
    {
      id: 2,
      name: "Dr. Juan Pérez",
      specialty: "Veterinario General",
      location: "Córdoba, General Paz",
      image: "/assets/images/Veteimagenejemplo.jpg", // Ruta desde la carpeta `public`
      rating: 5,
      description: "Veterinario con 10 años de experiencia en el cuidado de mascotas."
    },
    {
      id: 3,
      name: "Dr. Juan Pérez",
      specialty: "Veterinario General",
      location: "Córdoba, General Paz",
      image: "/assets/images/Veteimagenejemplo.jpg", // Ruta desde la carpeta `public`
      rating: 2,
      description: "Veterinario con 10 años de experiencia en el cuidado de mascotas."
    },
    {
      id: 4,
      name: "Dr. Juan Pérez",
      specialty: "Veterinario General",
      location: "Córdoba, General Paz",
      image: "/assets/images/Veteimagenejemplo.jpg", // Ruta desde la carpeta `public`
      rating: 1,
      description: "Veterinario con 10 años de experiencia en el cuidado de mascotas."
    },
  ];
  

  /*return (
    <div className="px-6 py-8">
      <h1 className="text-4xl font-bold mb-4">Veterinarios</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-8">Profesionales disponibles</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {veterinarios.map(vet => (
          <VetCard key={vet.id} vet={vet} />
        ))}
      </div>
    </div>
  );*/

  

  return (
    <div className="px-6 py-8">
      <h1 className="text-4xl font-bold mb-4">Veterinarios</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-8">Profesionales disponibles</h2>
  
      {}
      <div 
        id="veterinarios-contenedor" // ID para identificar el contenedor de veterinarios
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {veterinarios.map(vet => (
          <VetCard key={vet.id} vet={vet} />
        ))}
      </div>
    </div>
  );
  
}
