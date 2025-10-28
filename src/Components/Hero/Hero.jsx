// import React, { useState } from "react";
// import { FaChevronLeft, FaChevronRight, FaTruck, FaPhoneAlt, FaStar } from "react-icons/fa";

// const slides = [
//   {
//     id: 1,
//     title: "From Our Family To Yours",
//     desc: "Honest Medical has donated $64,127 in goods to organizations that bring health supplies to people in need.",
//     image:
//       "https://img.freepik.com/free-photo/disabled-man-wheelchair-outdoors_23-2148660544.jpg", // replace with your actual image
//   },
//   {
//     id: 2,
//     title: "Supporting Health Heroes",
//     desc: "We’re proud to support healthcare workers with top-quality medical supplies and reliable delivery.",
//     image:
//       "https://img.freepik.com/free-photo/smiling-nurse-standing-with-crossed-arms-hospital_23-2147766979.jpg",
//   },
//   {
//     id: 3,
//     title: "Trusted by Families Nationwide",
//     desc: "Our customers count on HonestMed for authentic products and exceptional service — every order, every time.",
//     image:
//       "https://img.freepik.com/free-photo/family-having-fun-together-home_23-2149014575.jpg",
//   },
// ];

// const Hero = () => {
//   const [current, setCurrent] = useState(0);

//   const prevSlide = () => {
//     setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <section className="relative w-full overflow-hidden bg-gray-100">
//       {/* Top Banner */}
//       <div className="bg-purple-900 text-white text-center py-2 text-sm">
//         Hope in Every Drop: Trevor's Journey with Laryngeal Cancer –{" "}
//         <a href="#" className="underline font-medium hover:text-blue-200">
//           View Blog
//         </a>
//       </div>

//       {/* Slide Section */}
//       <div className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-10 transition-all duration-700 ease-in-out">
//         {/* Left Content */}
//         <div className="md:w-1/2 space-y-4">
//           <h2 className="text-4xl font-serif text-gray-800 leading-tight">
//             {slides[current].title}
//           </h2>
//           <p className="text-lg text-blue-800">{slides[current].desc}</p>
//         </div>

//         {/* Right Image */}
//         <div className="md:w-1/2 mt-6 md:mt-0">
//           <img
//             src={slides[current].image}
//             alt={slides[current].title}
//             className="rounded-lg shadow-lg w-full h-[350px] object-cover"
//           />
//         </div>

//         {/* Arrows */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-0 top-1/2 -translate-y-1/2 bg-purple-900 text-white p-3 rounded-full hover:bg-purple-700"
//         >
//           <FaChevronLeft />
//         </button>

//         <button
//           onClick={nextSlide}
//           className="absolute  right-0 top-1/2 -translate-y-1/2 bg-purple-900 text-white p-3 rounded-full hover:bg-purple-700"
//         >
//           <FaChevronRight />
//         </button>
//       </div>

//       {/* Bottom Info Bar */}
//       <div className="bg-gray-700 text-white py-3">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-around space-y-3 md:space-y-0 text-sm md:text-base">
//           <div className="flex items-center space-x-2">
//             <FaTruck className="text-xl" />
//             <span>$6.99 FLAT-RATE SHIPPING</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <FaPhoneAlt className="text-xl" />
//             <span>
//               CALL US NOW!{" "}
//               <a href="tel:8339332323" className="underline font-semibold">
//                 (833) 933-2323
//               </a>
//             </span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <FaStar className="text-xl" />
//             <span>ALL PRODUCTS 100% AUTHENTIC</span>
//           </div>
//         </div>
//       </div>
      
//     </section>
//   );
// };

// export default Hero;



















import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaTruck, FaPhoneAlt, FaStar } from "react-icons/fa";

const slides = [
  {
    id: 1,
    title: "From Our Family To Yours",
    desc: "Honest Medical has donated $64,127 in goods to organizations that bring health supplies to people in need.",
    image:
      "https://img.freepik.com/free-photo/disabled-man-wheelchair-outdoors_23-2148660544.jpg",
  },
  {
    id: 2,
    title: "Supporting Health Heroes",
    desc: "We’re proud to support healthcare workers with top-quality medical supplies and reliable delivery.",
    image:
      "https://img.freepik.com/free-photo/smiling-nurse-standing-with-crossed-arms-hospital_23-2147766979.jpg",
  },
  {
    id: 3,
    title: "Trusted by Families Nationwide",
    desc: "Our customers count on HonestMed for authentic products and exceptional service — every order, every time.",
    image:
      "https://img.freepik.com/free-photo/family-having-fun-together-home_23-2149014575.jpg",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Move to previous slide
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Move to next slide
  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gray-100">
      {/* Top Banner */}
      <div className="bg-purple-900 text-white text-center py-2 text-sm">
        Hope in Every Drop: Trevor's Journey with Laryngeal Cancer –{" "}
        <a href="#" className="underline font-medium hover:text-blue-200">
          View Blog
        </a>
      </div>

      {/* Slide Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-10 transition-all duration-700 ease-in-out">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-4 transition-all duration-700">
          <h2 className="text-4xl font-serif text-gray-800 leading-tight">
            {slides[current].title}
          </h2>
          <p className="text-lg text-blue-800">{slides[current].desc}</p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="rounded-lg shadow-lg w-full h-[350px] object-cover transition-all duration-700"
          />
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-purple-900 text-white p-3 rounded-full hover:bg-purple-700"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-purple-900 text-white p-3 rounded-full hover:bg-purple-700"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Bottom Info Bar */}
      <div className="bg-gray-700 text-white py-3">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-around space-y-3 md:space-y-0 text-sm md:text-base">
          <div className="flex items-center space-x-2">
            <FaTruck className="text-xl" />
            <span>$6.99 FLAT-RATE SHIPPING</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-xl" />
            <span>
              CALL US NOW!{" "}
              <a href="tel:8339332323" className="underline font-semibold">
                (833) 933-2323
              </a>
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <FaStar className="text-xl" />
            <span>ALL PRODUCTS 100% AUTHENTIC</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
