import React from 'react';

// --- Top Categories Data ---
const categories = [
  { name: 'Orthopedic', icon: 'M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75H13.5zm-3 9V1.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 00-.75.75v18c0 .414.336.75.75.75h7.5a.75.75 0 00.75-.75zM8.25 15.75H4.5a.75.75 0 01-.75-.75v-1.5a.75.75 0 01.75-.75h3.75c.414 0 .75.336.75.75v1.5a.75.75 0 01-.75.75z' },
  { name: 'Respiratory Therapy Equipment', icon: 'M20.25 7.5l-.625 10.625a2.25 2.25 0 01-2.249 2.125H12.75A2.25 2.25 0 0110.5 18.25L9.875 7.5M4.5 10.5h15' },
  { name: 'Daily Living Aids', icon: 'M18 18.75c-2.761 0-5.25-1.119-5.25-2.5S15.239 13.75 18 13.75s5.25 1.119 5.25 2.5-2.489 2.5-5.25 2.5zM21 9a.75.75 0 00-.75-.75h-4.5A.75.75 0 0015 9V5.25a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75V9' },
  { name: 'Ostomy', icon: 'M12 21a9 9 0 100-18 9 9 0 000 18zm-2.25-4.5l.625-2.5a.75.75 0 011.5 0l.625 2.5a.75.75 0 01-1.5 0zm1.875-6.75H8.25a.75.75 0 00-.75.75v1.5a.75.75 0 00.75.75h3.75a.75.75 0 00.75-.75v-1.5a.75.75 0 00-.75-.75z' },
  { name: 'Adult Incontinence Products', icon: 'M19.5 9.75v-2.25a3 3 0 00-3-3h-8.25a3 3 0 00-3 3v2.25m12 0a1.5 1.5 0 011.5 1.5v6.75c0 .414-.336.75-.75.75h-9a.75.75 0 01-.75-.75v-6.75a1.5 1.5 0 011.5-1.5m12 0a1.5 1.5 0 00-1.5-1.5h-9' },
  { name: 'Kitchenware Supplies', icon: 'M9 6a3 3 0 100-6 3 3 0 000 6zM2.25 6h15.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-15.5a.75.75 0 01-.75-.75V6.75a.75.75 0 01.75-.75z' },
  { name: 'Diabetic Products', icon: 'M2.25 6a.75.75 0 000 1.5h15.5a.75.75 0 000-1.5H2.25zm0 4.5h15.5a.75.75 0 000-1.5H2.25zm0 4.5h15.5a.75.75 0 000-1.5H2.25zm0 4.5h15.5a.75.75 0 000-1.5H2.25z' },
  { name: 'Urological Supplies', icon: 'M19.5 9.75a.75.75 0 00-.75-.75H4.5a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75h14.25a.75.75 0 00.75-.75v-7.5z' },
  { name: 'Hospital Medical Supplies', icon: 'M12 21.75a9 9 0 100-18 9 9 0 000 18zm.75-10.5H12a.75.75 0 00-.75.75v2.25a.75.75 0 00.75.75h.75a.75.75 0 00.75-.75v-2.25a.75.75 0 00-.75-.75zM12 6a.75.75 0 00-.75.75v1.5c0 .414.336.75.75.75h.75a.75.75 0 00.75-.75v-1.5a.75.75 0 00-.75-.75H12z' },
];

// --- Category Card Component ---
const CategoryCard = ({ name, icon }) => (
  <button className="flex flex items-center justify-center  p-4 h-28 w-40 bg-white rounded-lg shadow-sm border border-gray-100 transition-transform duration-200 hover:scale-105 hover:shadow-md">
    <svg 
      className="w-10 h-10 mb-2" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: '#ae83bd' }}
      strokeWidth="1"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={icon}></path>
    </svg>
    <span className="text-center text-sm font-medium text-gray-700">{name}</span>
  </button>
);

// --- Main Category Page Component ---
const Category = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-4xl font-light mb-8 text-gray-700" style={{ fontFamily: 'serif', color: '#6a6b8c' }}>
          Top Categories
        </h2>

        {/* First Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
          {categories.slice(0, 5).map((category, index) => (
            <CategoryCard key={index} name={category.name} icon={category.icon} />
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.slice(5, 9).map((category, index) => (
            <CategoryCard key={index} name={category.name} icon={category.icon} />
          ))}
          {/* Shop All Button */}
          <button className="flex flex-col items-center justify-center p-4 h-28 w-40 bg-purple-500 text-white rounded-lg shadow-sm transition-transform duration-200 hover:scale-105 hover:bg-purple-600">
            <span className="text-lg font-semibold">Shop All</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Category;
