"use client";
import AccommodationCard from '../../components/cards/Alojamiento2.card';

const accommodations = [
  {
    name: "Hotel Mascotas Felices",
    location: "CÓRDOBA, GENERAL PAZ",
    image: "/images/hotel1.jpg",
    price: 1000,
    type: "GUARDERÍA",
    capacity: "2 Perros",
    rating: 4,
  },
  {
    name: "Alojamiento Patitas",
    location: "CÓRDOBA, CENTRO",
    image: "/images/hotel2.jpg",
    price: 800,
    type: "CABAÑA",
    capacity: "4 Perros",
    rating: 5,
  },
];

export default function AccommodationList() {
  return (
    <div className="px-6 py-8">
      <h1 className="text-4xl font-bold mb-4">Alojamientos Disponibles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {accommodations.map((accommodation, index) => (
          <AccommodationCard key={index} accommodation={accommodation} />
        ))}
      </div>
    </div>
  );
}
