import React, { useState } from "react";

const Cart = () => {
  const initialCards = [
    {
      id: 1,
      title: "Card Title 1",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      badges: ["Fashion", "Products"],
      status: "NEW",
      description:
        "A card component has a figure, a body part, and inside body there are title and actions parts",
    },
    {
      id: 2,
      title: "Card Title 2",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      badges: ["Electronics", "Gadgets"],
      status: "HOT",
      description: "Another card description goes here.",
    },
  ];

  const [cards, setCards] = useState(initialCards);

  // ✅ Remove card
  const removeCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {cards.map((card) => (
        <div key={card.id} className="card bg-base-100 w-96 shadow-sm relative">
          <figure>
            <img src={card.image} alt={card.title} className="w-full h-60 object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title flex items-center justify-between">
              {card.title}
              <div className="badge badge-secondary">{card.status}</div>
            </h2>
            <p>{card.description}</p>
            <div className="card-actions justify-between mt-4">
              <div className="flex gap-2">
                {card.badges.map((b, i) => (
                  <div key={i} className="badge badge-outline">
                    {b}
                  </div>
                ))}
              </div>
              <button
                onClick={() => removeCard(card.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
      {cards.length === 0 && (
        <p className="text-center col-span-full text-gray-500 font-semibold">
          No cards available.
        </p>
      )}
    </div>
  );
};

export default Cart;
