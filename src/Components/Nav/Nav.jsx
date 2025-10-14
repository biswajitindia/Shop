// import React from "react";
// import { FiSearch } from "react-icons/fi";
// import { FaRegUserCircle, FaShoppingCart, FaQuestionCircle } from "react-icons/fa";

// const Nav = () => {
//     const Logo = "https://www.shutterstock.com/image-vector/mom-baby-care-logo-design-260nw-2250860857.jpg";
//   return (
//     <nav className="w-full bg-gray-50 border-b border-gray-200">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-3 space-y-3 md:space-y-0">
        
//         {/* Left Section - Logo */}
//         <div className="flex items-center space-x-3">
//           <img
//             src={Logo}
//             alt="HonestMed"
//             className="h-30 w-auto"
//           />
//         </div>

//         {/* Center Section - Search Bar */}
//         <div className="flex items-center w-full md:w-1/3 border border-purple-400 rounded-full px-4 py-1 bg-white">
//           <input
//             type="text"
//             placeholder="Search"
//             className="flex-1 outline-none text-sm text-gray-700"
//           />
//           <FiSearch className="text-purple-500 text-lg" />
//         </div>

//         {/* Right Section - Help / Account / Cart */}
//         <div className="flex items-center space-x-6 text-sm text-purple-700">
//           <div className="flex items-center space-x-1 cursor-pointer hover:text-purple-500">
//             <FaQuestionCircle className="text-blue-500 text-lg" />
//             <span>NEED HELP?</span>
//           </div>
//           <div className="flex items-center space-x-1 cursor-pointer hover:text-purple-500">
//             <FaRegUserCircle className="text-blue-500 text-lg" />
//             <span>YOUR ACCOUNT</span>
//           </div>
//           <div className="flex items-center space-x-1 cursor-pointer hover:text-purple-500 relative">
//             <FaShoppingCart className="text-blue-500 text-lg" />
//             <span>YOUR CART</span>
//             <span className="absolute -top-2 -right-3 bg-purple-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//               0
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Menu */}
//       <div className="w-full bg-gray-50 border-t border-gray-200">
//         <ul className="flex items-center justify-center space-x-8 py-2 text-sm text-purple-700 font-semibold">
//           <li className="cursor-pointer hover:text-purple-500">SHOP NOW ▾</li>
//           <li className="cursor-pointer hover:text-purple-500">BRANDS</li>
//           <li className="cursor-pointer hover:text-purple-500">HONEST IDEAS</li>
//           <li className="cursor-pointer hover:text-purple-500">CONTACT US</li>
//           <li className="cursor-pointer hover:text-purple-500">BUSINESS PRICING</li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Nav;




import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaRegUserCircle, FaShoppingCart, FaQuestionCircle } from "react-icons/fa";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const Logo =
    "https://www.shutterstock.com/image-vector/mom-baby-care-logo-design-260nw-2250860857.jpg";

  return (
    <nav className="w-full bg-gray-50 border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-3 space-y-3 md:space-y-0">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={Logo} alt="Logo" className="h-14 w-auto" />
        </div>

        {/* Search bar */}
        <div className="flex items-center w-full md:w-1/3 border border-purple-400 rounded-full px-4 py-1 bg-white">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 outline-none text-sm text-gray-700"
          />
          <FiSearch className="text-purple-500 text-lg" />
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-6 text-sm text-purple-700">
          <div className="flex items-center space-x-1 cursor-pointer hover:text-purple-500">
            <FaQuestionCircle className="text-blue-500 text-lg" />
            <span>NEED HELP?</span>
          </div>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-purple-500">
            <FaRegUserCircle className="text-blue-500 text-lg" />
            <span>YOUR ACCOUNT</span>
          </div>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-purple-500 relative">
            <FaShoppingCart className="text-blue-500 text-lg" />
            <span>YOUR CART</span>
            <span className="absolute -top-2 -right-3 bg-purple-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Menu */}
      <div className="w-full bg-gray-50 border-t border-gray-200 relative">
        <ul className="flex items-center justify-center space-x-8 py-2 text-sm text-purple-700 font-semibold">
          <li
            onClick={() => setOpenMenu(!openMenu)}
            className="cursor-pointer hover:text-purple-500 relative"
          >
            SHOP NOW ▾
          </li>
          <li className="cursor-pointer hover:text-purple-500">BRANDS</li>
          <li className="cursor-pointer hover:text-purple-500">HONEST IDEAS</li>
          <li className="cursor-pointer hover:text-purple-500">CONTACT US</li>
          <li className="cursor-pointer hover:text-purple-500">BUSINESS PRICING</li>
        </ul>

        {/* Dropdown Menu */}
        {openMenu && (
          <div className="absolute left-1/2 transform -translate-x-1/2 bg-white shadow-xl border border-gray-200 rounded-lg mt-2 w-11/12 md:w-3/4 p-6 z-50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-700">
              <div>
                <h3 className="font-semibold text-purple-700 mb-2">
                  Adult Incontinence Products
                </h3>
                <ul className="space-y-1">
                  <li>Adult Diapers</li>
                  <li>Underpads</li>
                  <li>Wipes & Washcloths</li>
                  <li>Skin Care</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-purple-700 mb-2">
                  Baby Supplies & Essentials
                </h3>
                <ul className="space-y-1">
                  <li>Baby Formula</li>
                  <li>Baby Wipes</li>
                  <li>Feeding Bottles</li>
                  <li>Infant Diapers</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-purple-700 mb-2">
                  Nutritional & Feeding
                </h3>
                <ul className="space-y-1">
                  <li>Food Supplements</li>
                  <li>Meal Replacements</li>
                  <li>Enteral Feeding</li>
                  <li>Purees & Beverages</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-purple-700 mb-2">
                  Medical Supplies
                </h3>
                <ul className="space-y-1">
                  <li>Gloves</li>
                  <li>Gauze & Bandages</li>
                  <li>Thermometers</li>
                  <li>Mobility Aids</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
