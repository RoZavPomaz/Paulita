import { useEffect, useState } from "react";

const restaurants = [
  {
    id: "rest-1",
    name: "La Cabaña",
    image: "/src/assets/images/rest1.jpg",
  },
  {
    id: "rest-2",
    name: "El Fogón",
    image: "/src/assets/images/rest2.jpg",
  },
];

const categories = ["atencion", "ambiente", "sazon", "presentacion"];

export const Page7 = () => {
  const [ratings, setRatings] = useState({});

  // Cargar datos guardados
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("ratings") || "{}");
    setRatings(saved);
  }, []);

  // Guardar rating
  const handleRate = (restaurantId, category, value) => {
    const updated = {
      ...ratings,
      [restaurantId]: {
        ...ratings[restaurantId],
        [category]: value,
      },
    };

    setRatings(updated);
    localStorage.setItem("ratings", JSON.stringify(updated));
  };

  // Verificar si ya votó
  const hasVoted = (id) => {
    return ratings[id];
  };

  return (
    <div className="h-screen bg-black text-white flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">Restaurantes</h1>

      {/* Carrusel */}
      <div className="flex gap-6 overflow-x-auto w-full px-6">
        {restaurants.map((r) => (
          <div
            key={r.id}
            className="min-w-[300px] bg-white/10 rounded-2xl p-4 backdrop-blur-md"
          >
            {/* Imagen */}
            <img
              src={r.image}
              alt={r.name}
              className="h-40 w-full object-cover rounded-xl mb-3"
            />

            {/* Nombre */}
            <h2 className="text-xl font-bold mb-4">{r.name}</h2>

            {/* Categorías */}
            {categories.map((cat) => (
              <div key={cat} className="mb-3">
                <p className="text-sm capitalize mb-1">{cat}</p>

                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      disabled={hasVoted(r.id)}
                      onClick={() => handleRate(r.id, cat, n)}
                      className={`text-lg transition ${
                        ratings[r.id]?.[cat] >= n
                          ? "text-yellow-400"
                          : "text-white/30"
                      }`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {/* Estado */}
            {hasVoted(r.id) && (
              <p className="text-green-400 text-sm mt-3">
                Ya has calificado este restaurante
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
