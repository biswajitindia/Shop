import React from "react";

// Example categories data
const categories = [
  { id: 1, name: "Adult Incontinence Products", icon: "🩲" },
  { id: 2, name: "Baby Supplies & Health Essentials", icon: "🍼" },
  { id: 3, name: "Daily Living Aids", icon: "🛏️" },
  { id: 4, name: "Diabetic Products", icon: "💉" },
  { id: 5, name: "Hospital Medical Supplies", icon: "🏥" },
  { id: 6, name: "Household Cleaning Supplies", icon: "🧴" },
  { id: 7, name: "Kitchenware Supplies", icon: "🍳" },
  { id: 8, name: "Medical Supplies", icon: "📋" },
  { id: 9, name: "Mobility Aids & Equipment", icon: "🦽" },
  { id: 10, name: "Nutritionals & Feeding Supplies", icon: "🥛" },
  { id: 11, name: "Orthopedic", icon: "🦴" },
  { id: 12, name: "Ostomy", icon: "⚪" },
  { id: 13, name: "Over the Counter (OTC) Medicine", icon: "💊" },
  { id: 14, name: "Physical Therapy Equipment", icon: "🤸‍♂️" },
  { id: 15, name: "Respiratory Therapy Equipment", icon: "🫁" },
];

const Shop = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8 md:p-30 md:pt-8">
      <h1 className="font-ovo font-normal text-[41px] leading-[49px] tracking-[0.9px] capitalize text-[#515C6F]">
        Shop
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 justify-items-center">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="flex flex-col items-center space-y-2 cursor-pointer group"
          >
            {/* Circle Icon */}
            <div className="w-30 h-30 rounded-full bg-[#9C568F] flex items-center justify-center text-white text-3xl transition-all group-hover:bg-white group-hover:border-4 group-hover:border-[#9C568F]">
              {cat.icon}
            </div>

            {/* Text */}
            <span className="text-center text-[#9C568F] text-l font-medium mt-2 ">
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
