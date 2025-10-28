import React, { useState } from "react";
import brands from "./Brand";
// import brands from "./brand"; // your brand.js file with export default array

const AllBrands = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter brands that include the search term (case insensitive)
  const filteredBrands = brands.filter((brand) =>
    brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <h1 className="text-3xl text-black font-bold mb-6 text-center">All Brands</h1>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search brands..."
          className="w-full px-4 py-2 border  text-black border-gray-300 rounded-md focus:outline-none focus:ring-2  focus:ring-purple-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Brands Grid - 7 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 max-w-7xl mx-auto">
        {filteredBrands.length > 0 ? (
          filteredBrands.map((brand, idx) => {
            const isMatch = brand.toLowerCase().includes(searchTerm.toLowerCase());
            return (
              <div
                key={idx}
                className={`border rounded-md p-4 text-center cursor-pointer  transition text-black
                ${
                  isMatch && searchTerm !== ""
                    ? "bg-purple-200 border-purple-600 font-semibold"
                    : "bg-white border-gray-300"
                }
                hover:bg-purple-100`}
              >
                {brand}
              </div>
            );
          })
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No brands found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllBrands;
