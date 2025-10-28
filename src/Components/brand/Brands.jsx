import React from "react";
import { Link, useNavigate } from "react-router-dom";
import brandName from "./Brand"; // array of brand names

const Brands = () => {
  const navigate = useNavigate();

  // Show first 19 brands, last slot is the "More Brands" button
  const displayBrands = brandName.slice(0, 19);

  return ( 
    <div className="bg-purple-50 py-16 px-6 md:px-70  min-h-screen">
      {/* Header */}
      <div className="mb-10">
        <p className="text-purple-700 font-semibold">
          Shop | <Link to="/all-brands"><span className="text-blue-500 cursor-pointer">All Brands</span></Link>
          
        </p>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">
          Featured Manufacturers
        </h2>
        <p className="text-gray-600 mt-5 max-w-6xl">
          Browse a full range of expert-vetted products from leading brands.
          Looking for a specific product? Find it quickly and easily by typing
          the name into the search bar above. Our customer care team is always
          available to assist you.
        </p>
      </div>

      {/* Brand Circles Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
        {displayBrands.map((brand, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center w-43 h-43 border-2 border-purple-200 rounded-full bg-white shadow-sm hover:shadow-md transition transform hover:scale-105 overflow-hidden group"
          >
            {/* Text */}
            <span className="relative z-10 text-gray-800 font-semibold  text-center px-2 transition-colors duration-700 group-hover:text-white">
              {brand}
            </span>

            {/* Animated Green Fill */}
            <span className="absolute inset-0 bg-gradient-to-r from-purple-200 to-purple-300 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-[500ms] ease-out rounded-full"></span>
          </div>
        ))}

        {/* Last circle: More Brands button */}
        <div
          className="relative flex items-center justify-center w-43 h-43 border-2 border-purple-200 rounded-full bg-white shadow-sm hover:shadow-md transition transform hover:scale-105 overflow-hidden group cursor-pointer"
          onClick={() => navigate("/all-brands")}
        >
          <span className="relative z-10 text-purple-600 font-semibold text-sm transition-colors duration-700 group-hover:text-white">
            More Brands
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-[500ms] ease-out rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default Brands;
