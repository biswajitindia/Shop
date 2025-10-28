
// import React, { useState, useRef, useEffect } from "react";
// import { FiChevronRight, FiSearch } from "react-icons/fi";
// import { FaRegUserCircle, FaShoppingCart, FaQuestionCircle } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { menuData } from "./ManuData";

// const Nav = () => {
//   const [openMenu, setOpenMenu] = useState(false);
//   const [activeCategory, setActiveCategory] = useState(null);
//   const [activeSubMenu, setActiveSubMenu] = useState(null);
//   const [showCart, setShowCart] = useState(false);

//   const dropdownRef = useRef(null);
//   const Logo = "https://www.shutterstock.com/image-vector/mom-baby-care-logo-design-260nw-2250860857.jpg";

//   // 🧠 Close dropdown when clicking outside or pressing Escape
//   useEffect(() => {
//   const handleClickOutside = (event) => {
//     if (
//       dropdownRef.current &&
//       !dropdownRef.current.contains(event.target)
//     ) {
//       setOpenMenu(false);
//       setShowCart(false); // ✅ Close cart if clicked outside
//     }
//   };

//   const handleEscKey = (event) => {
//     if (event.key === "Escape") {
//       setOpenMenu(false);
//       setShowCart(false);
//     }
//   };

//   document.addEventListener("mousedown", handleClickOutside);
//   document.addEventListener("keydown", handleEscKey);

//   return () => {
//     document.removeEventListener("mousedown", handleClickOutside);
//     document.removeEventListener("keydown", handleEscKey);
//   };
// }, []);

//   return (
//     <nav className="w-full bg-gray-50 border-b border-gray-200 relative">
//       {/* 🔹 Top Navbar */}
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-3 space-y-3 md:space-y-0">
//         {/* Logo */}
//         <img src={Logo} alt="Logo" className="h-14 w-auto" />

//         {/* 🔍 Search Bar */}
//         <div className="flex items-center w-full md:w-1/3 border border-purple-400 rounded-full px-4 py-1 bg-white">
//           <input
//             type="text"
//             placeholder="Search"
//             className="flex-1 outline-none text-sm text-gray-700"
//           />
//           <FiSearch className="text-purple-500 text-lg" />
//         </div>

//         {/* 👤 Icons Section */}
//         <div className="flex items-center space-x-6 text-sm text-purple-700">
//           {/* Help */}
//           <div className="flex items-center space-x-1 cursor-pointer hover:text-purple-500">
//             <FaQuestionCircle className="text-blue-500 text-lg" />
//             <span>NEED HELP?</span>
//           </div>

//           {/* Account */}
//           <div className="flex items-center space-x-1 cursor-pointer hover:text-purple-500">
//             <FaRegUserCircle className="text-blue-500 text-lg" />
//             <Link to="/login"><span>YOUR ACCOUNT</span></Link>
//           </div>

//           {/* 🛒 Cart with Popup */}
//           {/* 🛒 Cart with Popup (Click + Outside Close) */}
// <div className="relative" ref={dropdownRef}>
//   <div
//     className="flex items-center space-x-1 cursor-pointer hover:text-purple-500"
//     onClick={() => setShowCart((prev) => !prev)}
//   >
//     <FaShoppingCart className="text-blue-500 text-lg" />
//     <span>YOUR CART</span>
//     <span className="absolute -top-2 -right-3 bg-purple-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//       0
//     </span>
//   </div>

//   {/* 🧾 Cart Popup */}
//   {showCart && (
//     <div
//       className="absolute right-0 mt-3 w-72 bg-white border border-purple-200 shadow-lg rounded-lg z-50"
//     >
//       <div className="bg-purple-100 text-purple-800 font-semibold p-3 rounded-t-lg">
//         0 item added to your cart
//       </div>
//       <div className="p-4 text-sm text-gray-600">
//         <p>0 Items in your cart</p>
//         <p className="font-semibold mt-1">Cart Total: $0.00</p>
//       </div>
//       <div className="p-3 border-t border-purple-100">
//         <Link
//           to="/checkout"
//           className="block text-center bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700 transition-all"
//           onClick={() => setShowCart(false)}
//         >
//           Checkout
//         </Link>
//       </div>
//     </div>
//   )}
// </div>

//         </div>
//       </div>

//       {/* 🔹 Bottom Menu */}
//       <div className="w-full bg-gray-50 border-t border-gray-200 relative">
//         <ul className="flex items-center justify-center space-x-8 py-2 text-sm text-purple-700 font-semibold">
//           <li
//             onClick={() => setOpenMenu(!openMenu)}
//             className="cursor-pointer hover:text-purple-500 relative"
//           >
//             <Link to="/"> SHOP NOW ▾</Link>
//           </li>
//           <li>
//             <Link to="/brands" className="hover:text-purple-500">
//               ALL BRANDS
//             </Link>
//           </li>
//           <li className="hover:text-purple-500">
//             <Link to="/contact">CONTACT US</Link>
//           </li>
//           <li className="hover:text-purple-500">BUSINESS PRICING</li>
//         </ul>

//         {/* 🔽 Mega Dropdown */}
//         {openMenu && (
//           <div
//             ref={dropdownRef}
//             className="absolute left-0 w-3/4 shadow-xl border border-gray-200 rounded-md mt-1 z-50 flex h-[450px]"
//           >
//             {/* Left Categories */}
//             <div className="w-1/4 bg-purple-50 border-r border-gray-200 overflow-y-auto">
//               {menuData.map((cat, i) => (
//                 <div
//                   key={i}
//                   onMouseEnter={() => {
//                     setActiveCategory(cat);
//                     setActiveSubMenu(null);
//                   }}
//                   className={`px-4 py-3 cursor-pointer flex justify-between items-center ${
//                     activeCategory?.category === cat.category
//                       ? "bg-white font-semibold text-purple-800"
//                       : "hover:bg-purple-100 text-purple-700"
//                   }`}
//                 >
//                   {cat.category}
//                   {cat.subMenu?.length > 0 && <FiChevronRight />}
//                 </div>
//               ))}
//             </div>

//             {/* Middle Submenu */}
//             {activeCategory && activeCategory.subMenu?.length > 0 && (
//               <div className="w-1/4 bg-gray-50 border-r border-gray-200 overflow-y-auto">
//                 {activeCategory.subMenu.map((sub, i) => (
//                   <div
//                     key={i}
//                     onMouseEnter={() => setActiveSubMenu(sub)}
//                     className={`px-4 py-3 cursor-pointer flex justify-between items-center ${
//                       activeSubMenu?.title === sub.title
//                         ? "bg-white font-semibold text-purple-800"
//                         : "hover:bg-gray-100 text-gray-700"
//                     }`}
//                   >
//                     {sub.title}
//                     {sub.children?.length > 0 && <FiChevronRight />}
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* Right Panel */}
//             {activeSubMenu && activeSubMenu.children?.length > 0 && (
//               <div className="w-1/2 bg-white p-6 overflow-y-auto">
//                 <h2 className="text-lg font-semibold text-purple-700 mb-4">
//                   {activeSubMenu.title}
//                 </h2>
//                 <div className="grid grid-cols-2 gap-6 text-sm">
//                   {activeSubMenu.children.map((child, i) => (
//                     <div key={i}>
//                       <h3 className="font-semibold text-purple-700 mb-2">
//                         {child.title}
//                       </h3>
//                       <ul className="space-y-1">
//                         {child.items.map((item, j) => (
//                           <li
//                             key={j}
//                             className="hover:text-purple-600 cursor-pointer"
//                           >
//                             {item}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Nav;






















import React, { useState, useRef, useEffect } from "react";
import { FiChevronRight, FiSearch, FiMenu, FiX } from "react-icons/fi";
import {
  FaRegUserCircle,
  FaShoppingCart,
  FaQuestionCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { menuData } from "./ManuData";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [help, setHelp] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [showCart, setShowCart] = useState(false);

  const dropdownRef = useRef(null);
  const Logo =
    "https://www.shutterstock.com/image-vector/mom-baby-care-logo-design-260nw-2250860857.jpg";

  // 🧠 Close dropdown when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenMenu(false);
        setShowCart(false);
      }
    };

    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setOpenMenu(false);
        setShowCart(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  return (
    <nav className="w-full bg-gray-50 border-b border-gray-200 relative">
      {/* 🔹 Top Navbar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Left: Logo */}
        <img src={Logo} alt="Logo" className="h-12 w-auto" />

        {/* Middle: Search */}
        <div className="hidden md:flex items-center w-1/3 border border-purple-400 rounded-full px-4 py-1 bg-white">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 outline-none text-sm text-gray-700"
          />
          <FiSearch className="text-purple-500 text-lg" />
        </div>

        {/* Right: Icons (Desktop) */}
        <div className="hidden md:flex items-center space-x-6 text-sm text-purple-700">
          {/* ✅ Help Popup Section */}
          <div className="relative" ref={dropdownRef}>
            <div
              className="flex items-center space-x-1 cursor-pointer hover:text-purple-500"
              onClick={() => setHelp((prev) => !prev)}
              
            >
              <FaQuestionCircle className="text-blue-500 text-lg" />
              <span>NEED HELP?</span>
            </div>

            {/* 🧾 Help Popup */}
            {setHelp && (
              <div className="absolute right-0 mt-3 w-80 bg-white border border-purple-200 shadow-xl rounded-lg z-50 p-5 text-center">
                <h3 className="text-lg font-serif text-gray-800 mb-2">
                  Speak To One Of Our<br />Honest Care Specialists
                </h3>
                <hr className="border-purple-300 mb-3" />
                <p className="text-xl text-purple-700 font-semibold mb-1">
                  (833) 933-2323
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  6am to 5pm Monday to Friday<br />Pacific Time
                </p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full">
                  Email Us
                </button>
              </div>
            )}
          </div>


          <div className="flex items-center space-x-1 cursor-pointer hover:text-purple-500">
            <FaRegUserCircle className="text-blue-500 text-lg" />
            <Link to="/login">
              <span>YOUR ACCOUNT</span>
            </Link>
          </div>

          {/* Cart */}
          <div className="relative" ref={dropdownRef}>
            <div
              className="flex items-center space-x-1 cursor-pointer hover:text-purple-500"
              onClick={() => setShowCart((prev) => !prev)}
            >
              <FaShoppingCart className="text-blue-500 text-lg" />
              <span>YOUR CART</span>
              <span className="absolute -top-2 -right-3 bg-purple-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </div>

            {/* 🧾 Cart Popup */}
            {showCart && (
              <div className="absolute right-0 mt-3 w-72 bg-white border border-purple-200 shadow-lg rounded-lg z-50">
                <div className="bg-purple-100 text-purple-800 font-semibold p-3 rounded-t-lg">
                  0 item added to your cart
                </div>
                <div className="p-4 text-sm text-gray-600">
                  <p>0 Items in your cart</p>
                  <p className="font-semibold mt-1">Cart Total: $0.00</p>
                </div>
                <div className="p-3 border-t border-purple-100">
                  <Link
                    to="/checkout"
                    className="block text-center bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700 transition-all"
                    onClick={() => setShowCart(false)}
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 📱 Mobile Hamburger */}
        <div className="md:hidden flex items-center space-x-4">
          <FiSearch className="text-purple-600 text-xl" />
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="text-purple-700 focus:outline-none"
          >
            {mobileMenu ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* 🔹 Bottom Menu (Desktop) */}
      <div className="hidden md:block w-full bg-gray-50 border-t border-gray-200 relative">
        <ul className="flex items-center justify-center space-x-8 py-2 text-sm text-purple-700 font-semibold">
          <li
            onClick={() => setOpenMenu(!openMenu)}
            className="cursor-pointer hover:text-purple-500 relative"
          >
            <Link to="/">SHOP NOW ▾</Link>
          </li>
          <li>
            <Link to="/brands" className="hover:text-purple-500">
              ALL BRANDS
            </Link>
          </li>
          <li className="hover:text-purple-500">
            <Link to="/contact">CONTACT US</Link>
          </li>
          <li className="hover:text-purple-500">BUSINESS PRICING</li>
        </ul>

        {/* 🔽 Mega Dropdown */}
        {openMenu && (
          <div
            ref={dropdownRef}
            className="absolute left-30 w-3/4 shadow-xl  rounded-md mt-1 z-50 flex h-[450px]"
          >
            {/* Left Categories */}
            <div className="w-1/4 bg-purple-50 border-r border-gray-200 overflow-y-auto">
              {menuData.map((cat, i) => (
                <div
                  key={i}
                  onMouseEnter={() => {
                    setActiveCategory(cat);
                    setActiveSubMenu(null);
                  }}
                  className={`px-4 py-3 cursor-pointer flex justify-between items-center ${activeCategory?.category === cat.category
                      ? "bg-white font-semibold text-purple-800"
                      : "hover:bg-purple-100 text-purple-700"
                    }`}
                >
                  {cat.category}
                  {cat.subMenu?.length > 0 && <FiChevronRight />}
                </div>
              ))}
            </div>

            {/* Middle Submenu */}
            {activeCategory && activeCategory.subMenu?.length > 0 && (
              <div className="w-1/4 bg-gray-50 border-r border-gray-200 overflow-y-auto">
                {activeCategory.subMenu.map((sub, i) => (
                  <div
                    key={i}
                    onMouseEnter={() => setActiveSubMenu(sub)}
                    className={`px-4 py-3 cursor-pointer flex justify-between items-center ${activeSubMenu?.title === sub.title
                        ? "bg-white font-semibold text-purple-800"
                        : "hover:bg-gray-100 text-gray-700"
                      }`}
                  >
                    {sub.title}
                    {sub.children?.length > 0 && <FiChevronRight />}
                  </div>
                ))}
              </div>
            )}

            {/* Right Panel */}
            {activeSubMenu && activeSubMenu.children?.length > 0 && (
              <div className="w-1/2 bg-white p-6 overflow-y-auto">
                <h2 className="text-lg font-semibold text-purple-700 mb-4">
                  {activeSubMenu.title}
                </h2>
                <div className="grid grid-cols-2 gap-6 text-sm">
                  {activeSubMenu.children.map((child, i) => (
                    <div key={i}>
                      <h3 className="font-semibold text-purple-700 mb-2">
                        {child.title}
                      </h3>
                      <ul className="space-y-1">
                        {child.items.map((item, j) => (
                          <li
                            key={j}
                            className="hover:text-purple-600 cursor-pointer text-black"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 📱 Mobile Slide Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200 py-4 px-6 space-y-4 transition-all">
          <Link
            to="/"
            // onClick={() => setMobileMenu(false)}
            onClick={() => setOpenMenu(!openMenu)}
            className="block text-purple-700 font-medium hover:text-purple-500"
          >
            SHOP NOW
          </Link>
          <Link
            to="/brands"
            onClick={() => setMobileMenu(false)}
            className="block text-purple-700 font-medium hover:text-purple-500"
          >
            ALL BRANDS
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileMenu(false)}
            className="block text-purple-700 font-medium hover:text-purple-500"
          >
            CONTACT US
          </Link>
          <span className="block text-purple-700 font-medium hover:text-purple-500">
            BUSINESS PRICING
          </span>
        </div>
      )}
    </nav>
  );
};

export default Nav;
