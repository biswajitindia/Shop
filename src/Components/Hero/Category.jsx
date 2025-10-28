import React from "react";
import { FaBone, FaLungs, FaWheelchair, FaToilet, FaToiletPaper, FaBlender, FaSyringe, FaTint, FaHospital } from "react-icons/fa";

const categories = [
  { icon: <FaBone size={40} />, title: "Orthopedic" },
  { icon: <FaLungs size={40} />, title: "Respiratory Therapy Equipment" },
  { icon: <FaWheelchair size={40} />, title: "Daily Living Aids" },
  { icon: <FaToilet size={40} />, title: "Ostomy" },
  { icon: <FaToiletPaper size={40} />, title: "Adult Incontinence Products" },
  { icon: <FaBlender size={40} />, title: "Kitchenware Supplies" },
  { icon: <FaSyringe size={40} />, title: "Diabetic Products" },
  { icon: <FaTint size={40} />, title: "Urological Supplies" },
  { icon: <FaHospital size={40} />, title: "Hospital Medical Supplies" },
];

const TopCategory = () => {
  return (
    <section className="bg-[#F3F1F7] py-12 px-4 md:px-50">
      <h2 className="text-3xl md:text-4xl font-ovo font-semibold text-[#515C6F]  mb-10">
        Top Categories
      </h2>

      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white border border-[#f2f2f2] rounded-2 h-20 m-1  relative w-[calc(20%-40px)] flex  items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-300 hover:border-[#9C568F] rounded-lg "
          >
            <div className="mb-1 text-[#9C568F]">{cat.icon}</div>
            <p className="text-center text-sm md:text-base text-[#9C568F] font-medium px-2 ">
              {cat.title}
            </p>
          </div>
        ))}

        {/* Shop All Button */}
        <button className="bg-[#9C568F] border border-[#f2f2f2] rounded-2 h-20 m-1  relative w-[calc(20%-40px)]   items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-300 text-white  font-medium rounded-lg px-4 hover:bg-white hover:text-[#9C568F] hover:border-[#9C568F] hover:border-2 ">
          Shop All
        </button>
      </div>
    </section>
  );
};

export default TopCategory;
