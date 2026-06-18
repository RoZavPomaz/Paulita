import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

// ✅ IMAGEN ESTÁTICA (PRODUCCIÓN OK)
import fusionCentral from "/src/assets/images/FusionCentral.jpg";

const initialRestaurants = [
  {
    id: "rest-1",
    name: "Fusion Central",
    image: fusionCentral,
  },
];

const categories = ["atencion", "ambiente", "sazon", "presentacion"];

// 🔥 FUNCIÓN SEGURA PARA LOCALSTORAGE
const getStoredRestaurants = () => {
  try {
    const stored = localStorage.getItem("restaurants");
    if (!stored) return initialRestaurants;

    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) && parsed.length ? parsed : initialRestaurants;
  } catch {
    return initialRestaurants;
  }
};

const getStoredRatings = () => {
  try {
    const stored = localStorage.getItem("ratings");
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

export const Page7 = () => {
  const [restaurants, setRestaurants] = useState(getStoredRestaurants);
  const [ratings, setRatings] = useState(getStoredRatings);

  const [newName, setNewName] = useState("");
  const [newImage, setNewImage] = useState(null);

  const saveRestaurants = (data) => {
    setRestaurants(data);
    localStorage.setItem("restaurants", JSON.stringify(data));
  };

  const saveRatings = (data) => {
    setRatings(data);
    localStorage.setItem("ratings", JSON.stringify(data));
  };

  const handleRate = (id, category, value) => {
    const updated = {
      ...ratings,
      [id]: {
        ...ratings[id],
        [category]: value,
        submitted: false,
      },
    };

    saveRatings(updated);
  };

  const handleReview = (id, value) => {
    const updated = {
      ...ratings,
      [id]: {
        ...ratings[id],
        review: value,
        submitted: false,
      },
    };

    saveRatings(updated);
  };

  const handleSubmit = (id) => {
    const updated = {
      ...ratings,
      [id]: {
        ...ratings[id],
        submitted: true,
      },
    };

    saveRatings(updated);
  };

  const handleEdit = (id) => {
    const updated = {
      ...ratings,
      [id]: {
        ...ratings[id],
        submitted: false,
      },
    };

    saveRatings(updated);
  };

  const isSubmitted = (id) => ratings[id]?.submitted;

  // 📸 BASE64 IMAGE (PRODUCCIÓN OK)
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setNewImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleAddRestaurant = () => {
    if (!newName || !newImage) return;

    const newRestaurant = {
      id: Date.now().toString(),
      name: newName,
      image: newImage,
    };

    const updated = [...restaurants, newRestaurant];

    saveRestaurants(updated);

    setNewName("");
    setNewImage(null);
  };

  return (
    <div className="min-h-screen">
      <h1 className="text-2xl font-bold text-center my-6">
        Nuestras calificaciones
      </h1>

      <ScrollReveal
        animation="fade-up"
        delay={200}
        className="w-full flex justify-center"
      >
        <div className="flex gap-6 overflow-x-auto w-full px-6">
          {restaurants.map((r) => (
            <div
              key={r.id}
              className="min-w-[340px] bg-white/30 rounded-2xl p-4 backdrop-blur-md"
            >
              <img
                src={r.image}
                className="h-40 w-full object-cover rounded-xl mb-3"
              />

              <h2 className="text-xl font-bold mb-4">{r.name}</h2>

              {categories.map((cat) => (
                <div key={cat} className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="capitalize">{cat}</span>
                    <span className="text-purple-600 font-bold">
                      {ratings[r.id]?.[cat] || 0}/10
                    </span>
                  </div>

                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="1"
                    disabled={isSubmitted(r.id)}
                    value={ratings[r.id]?.[cat] || 0}
                    onChange={(e) =>
                      handleRate(r.id, cat, Number(e.target.value))
                    }
                    className="w-full accent-purple-500"
                  />
                </div>
              ))}

              <textarea
                placeholder="Escribe una reseña..."
                disabled={isSubmitted(r.id)}
                value={ratings[r.id]?.review || ""}
                onChange={(e) => handleReview(r.id, e.target.value)}
                className="w-full mt-2 p-2 rounded bg-black/40 text-white text-sm"
              />

              {!isSubmitted(r.id) ? (
                <button
                  onClick={() => handleSubmit(r.id)}
                  className="mt-3 w-full bg-purple-600 py-2 rounded"
                >
                  Confirmar
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(r.id)}
                  className="mt-3 w-full bg-white py-2 rounded font-bold"
                >
                  Modificar
                </button>
              )}
            </div>
          ))}

          {/* AGREGAR RESTAURANTE */}
          <div className="min-w-[340px] bg-white/10 rounded-2xl p-4 flex flex-col gap-3 border-2 border-dashed border-white/30">
            <p className="text-center font-semibold">Agregar restaurante</p>

            <input
              type="text"
              placeholder="Nombre"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="p-2 rounded bg-black/40 text-white text-sm"
            />

            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="text-sm"
            />

            {newImage && (
              <img
                src={newImage}
                className="h-32 w-full object-cover rounded-lg"
              />
            )}

            <button
              onClick={handleAddRestaurant}
              className="bg-purple-600 py-2 rounded"
            >
              Agregar
            </button>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};
