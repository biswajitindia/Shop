import React from 'react';

const customPurple = '#ae83bd';
const textGray = '#6a6b8c';

const Footer = () => {
    const Logo = "https://d3qbod4c9309eq.cloudfront.net/assets/images/logo-white.svg";
  return (
    <footer className="w-full bg-gray-800 text-white border-t border-[#9C568F] ">
      
      <div 
        className="py-16 md:py-20 bg-purple-50  text-center text-gray-800"
        // style={{ backgroundColor: '#f5f5f7' }} // Light gray/off-white background
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          
          {/* Text and Form */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:text-left">
            <h2 className="text-2xl md:text-3xl font-light mb-2" style={{ color: textGray }}>
              Get 5% off your order 🔔
            </h2>
            <p className="text-gray-600 mb-4">
              Subscribe to receive special offers and updates.
            </p>
            
            {/* Subscription Form */}
            <form className="flex justify-center md:justify-start space-x-2">
              <input
                type="email"
                placeholder="Email"
                className="p-3 w-40 sm:w-64 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400"
                style={{ borderRadius: '4px', border: '1px solid #ccc' }}
              />
              <button
                type="submit"
                className="px-6 py-3 text-sm font-semibold text-gray-800"
                style={{ backgroundColor: '#ffffff', color: customPurple, border: `1px solid ${customPurple}`, borderRadius: '4px' }}
              >
                Sign Up
              </button>
            </form>
            
            <p className="text-xs text-gray-500 mt-2">
              Discount valid for new subscribers only. Terms and conditions apply.
            </p>
          </div>
          
          <div className="hidden md:block md:w-1/2 flex justify-end">
            <div 
                className="w-full h-48 rounded-lg"
                
            >
            </div>
          </div>
         
        </div>
        
      </div>
      
      
      {/* 2. Middle Section: Contact & Links */}
      <div className="bg-gray-800 pt-10 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-10">
          
          {/* Column 1: Logo & Social */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-1 mb-4">
                <img
            src={Logo}
            alt="HonestMed"
            className="h-30 w-auto"
          />
            </div>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-pink-600 hover:bg-pink-700 flex items-center justify-center rounded-full">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.515 1.492-3.693 3.566-3.693 1.05 0 2.13.188 2.13.188v2.339h-1.196c-1.218 0-1.554.757-1.554 1.537V12h3.046l-.49 3.191h-2.556v6.987C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 bg-blue-600 hover:bg-blue-700 flex items-center justify-center rounded-full">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.795-1.574 2.164-2.722-.951.555-2.005.959-3.127 1.184-1.116-1.18-2.695-1.895-4.435-1.895-3.376 0-6.12 2.744-6.12 6.12 0 .479.052.943.15 1.39-.413-.082-.82-.206-1.217-.373C3.784 8.783 2.653 7.82 2.653 7.82c-.41.776-.657 1.67-.657 2.628 0 1.258.64 2.37 1.604 3.018-.465-.015-.92-.127-1.76-.484 0 1.294.922 2.368 2.14 2.628-.21.057-.433.085-.664.085-.306 0-.606-.029-.898-.086.34 1.056 1.328 1.83 2.497 1.854-2.227 1.745-4.933 2.78-7.94 2.78-.519 0-1.03-.031-1.536-.09.117.155.27.317.438.465 1.026.853 2.146 1.488 3.336 1.879 1.19.39 2.428.604 3.69.604 4.43 0 7.87-2.654 9.475-6.15.584-1.25.922-2.627.922-4.047 0-.17-.008-.338-.023-.505.4-.33.747-.704 1.025-1.104z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <ul className="text-m text-white space-y-2">
              <li>(833) 933-2323</li>
              <li>Email Us</li>
              <li>6am to 5pm Monday to Friday</li>
              <li>Pacific Time</li>
            </ul>
          </div>
          
          {/* Column 3: Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Info</h3>
            <ul className="text-m text-white space-y-2">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Shipping/Return Policy</a></li>
              <li><a href="#" className="hover:text-white">Disclaimer</a></li>
            </ul>
          </div>
          
          {/* Column 4: Shop */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Shop</h3>
            <ul className="text-m text-white space-y-2">
              <li><a href="#" className="hover:text-white">Login/Register</a></li>
              <li><a href="#" className="hover:text-white">My Cart</a></li>
              <li><a href="#" className="hover:text-white">Shop Now</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">News</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* 3. Bottom Section: Copyright and Payments */}
      <div className="bg-gray-800 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p className="mb-2 md:mb-0">
            Copyright © 2025 HonestMedical
          </p>
          
          {/* Payment Icons Placeholder */}
          <div className="flex space-x-2">
            {/* Replace these spans with actual SVGs or images for the card logos (Visa, Mastercard, Amex, Discover, PayPal) */}
            <span className="text-xs border border-gray-600 px-1 py-0.5 rounded">VISA</span>
            <span className="text-xs border border-gray-600 px-1 py-0.5 rounded">MC</span>
            <span className="text-xs border border-gray-600 px-1 py-0.5 rounded">AMEX</span>
            <span className="text-xs border border-gray-600 px-1 py-0.5 rounded">DISCOVER</span>
            <span className="text-xs border border-gray-600 px-1 py-0.5 rounded">PAYPAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;





















// import React from 'react';

// const Footer = () => {
//   const Logo = "https://d3qbod4c9309eq.cloudfront.net/assets/images/logo-white.svg";
//   // const personImage = "https://cdn.pixabay.com/photo/2016/03/31/20/11/man-1295841_1280.png"; // replace with the exact one you prefer
//     const personImage = "https://tse2.mm.bing.net/th/id/OIP.0gcABxiT3UoLPWVLjxPD_QHaEK?pid=Api&P=0&h=180";

//   return (
//     <footer className="w-full text-white font-sans">

//       {/* --- Top Section (Gradient + Image + Subscription) --- */}
//       <div
//         className="relative flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-16 overflow-hidden"
//         style={{
//           background: "linear-gradient(to right, #e6e6f5, #d1c1e0)",
//         }}
//       >
//         {/* Left Content */}
//         <div className="md:w-1/2 z-10 text-center md:text-left">
//           <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
//             Get 5% off your order 🔔
//           </h2>
//           <p className="text-gray-700 mb-4">
//             Subscribe to receive special offers and updates.
//           </p>

//           {/* Email Form */}
//           <form className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
//             <input
//               type="email"
//               placeholder="Email"
//               className="p-3 w-64 rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
//             />
//             <button
//               type="submit"
//               className="bg-[#ae83bd] hover:bg-[#9b6ba9] text-white font-medium px-6 py-3 rounded-md transition"
//             >
//               Sign Up
//             </button>
//           </form>

//           <p className="text-xs text-gray-500 mt-3">
//             Discount valid for new subscribers only. Terms and conditions apply.
//           </p>
//         </div>

//         {/* Right Image */}
//         <div className="md:w-1/2 flex justify-end mt-10 md:mt-0">
//           <img
//             src={personImage}
//             alt="Happy customer"
//             className="w-[300px] md:w-[400px] object-contain rounded-lg"
//           />
//         </div>
//       </div>

//       {/* --- Middle Section (Links & Contact) --- */}
//       <div className="bg-[#222222] pt-12 pb-10 px-6 md:px-12">
//         <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-10">
//           {/* Logo */}
//           <div>
//             <img src={Logo} alt="HonestMed" className="h-14 mb-4" />
//             <div className="flex space-x-3">
//               <a
//                 href="#"
//                 className="bg-pink-600 hover:bg-pink-700 w-8 h-8 flex items-center justify-center rounded-full"
//               >
//                 <i className="fab fa-instagram text-white"></i>
//               </a>
//               <a
//                 href="#"
//                 className="bg-blue-600 hover:bg-blue-700 w-8 h-8 flex items-center justify-center rounded-full"
//               >
//                 <i className="fab fa-facebook-f text-white"></i>
//               </a>
//             </div>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
//             <ul className="text-gray-300 space-y-2">
//               <li>(833) 933-2323</li>
//               <li>Email Us</li>
//               <li>6am to 5pm Monday to Friday</li>
//               <li>Pacific Time</li>
//             </ul>
//           </div>

//           {/* Info */}
//           <div>
//             <h3 className="text-lg font-semibold mb-3">Info</h3>
//             <ul className="text-gray-300 space-y-2">
//               <li>Privacy Policy</li>
//               <li>About Us</li>
//               <li>Terms</li>
//               <li>Shipping/Return Policy</li>
//               <li>Disclaimer</li>
//             </ul>
//           </div>

//           {/* Shop */}
//           <div>
//             <h3 className="text-lg font-semibold mb-3">Shop</h3>
//             <ul className="text-gray-300 space-y-2">
//               <li>Login/Register</li>
//               <li>My Cart</li>
//               <li>Shop Now</li>
//               <li>Contact Us</li>
//               <li>News</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* --- Bottom Section --- */}
//       <div className="bg-[#1a1a1a] py-4 px-6 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
//         <p>Copyright © 2025 HonestMedical</p>
//         <div className="flex gap-2 mt-2 md:mt-0">
//           <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-5" />
//           <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Mastercard-logo.png" alt="Mastercard" className="h-5" />
//           <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg" alt="Amex" className="h-5" />
//           <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Discover_Card_logo.svg" alt="Discover" className="h-5" />
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
