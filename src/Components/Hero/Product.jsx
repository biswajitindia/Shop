import React from "react";

const Product = () => {
  const products = [
    {
      id: 1,
      name: "Kleenex Facial Tissue, White, 2-Ply, 100 Tissues per Box, 36 Boxes, #21400",
      price: 91.53,
      image: "https://d14bbfkcwbts4c.cloudfront.net/img/products/58/5855c8c0-5125-8ce6-936a-4fe17944c271_s.jpg",
    },
    {
      id: 2,
      name: "Metrex CaviWipes Disinfecting Towelettes, 6 x 6-3/4 inches...",
      price: 8.83,
      image: "https://d14bbfkcwbts4c.cloudfront.net/img/products/58/5855c8c0-5125-8ce6-936a-4fe17944c271_s.jpg",
    },
    {
      id: 3,
      name: "McKesson Normal Saline Irrigation Solution, 0.9% Sodium Chloride...",
      price: 39.08,
      image: "https://d14bbfkcwbts4c.cloudfront.net/img/products/58/5855c8c0-5125-8ce6-936a-4fe17944c271_s.jpg",
    },
    {
      id: 4,
      name: "Ensure Original Nutrition Shake, Vanilla, 8 ounce Bottle...",
      price: 43.84,
      image: "https://d14bbfkcwbts4c.cloudfront.net/img/products/33/3397848e-622b-4328-df77-449430f8b327_s.jpg",
    },
    {
      id: 5,
      name: "Biofreeze Professional Gel, Clear Gel, 5% Menthol, Topical Gel...",
      price: 12.05,
      image: "https://d14bbfkcwbts4c.cloudfront.net/img/products/12/1269f550-a446-e574-048f-218f48611c36_s.jpg",
    },
    {
      id: 6,
      name: "HonestMed Lidocaine Patches, 4% Lidocaine, Maximum Strength Pain Relief...",
      price: 29.99,
      image: "https://d14bbfkcwbts4c.cloudfront.net/img/products/CC/ccd4cd9c-3bdf-6645-15bd-f16ed13c4752_s.jpg",
    },
  ];

  const formatPrice = (price) => `$${price.toFixed(2)}`;

  return (
    <div className="bg-gray-50 min-h-screen p-7">
      <h1
        className="text-4xl font-light mb-8 text-gray-700"
        style={{ fontFamily: "serif", color: "#181928ff" }}
      >
        Featured Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white p-4 border border-gray-100 flex flex-col justify-between h-full"
          >
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center">
                <img
                  src={p.image}
                  alt={p.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <p className="text-gray-900 text-m flex-grow">{p.name}</p>
              <div className="text-right  mt-auto">
              <span className="text-xl font-medium text-pink-600">
                {formatPrice(p.price)}
              </span>
            </div>
            </div>


          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
