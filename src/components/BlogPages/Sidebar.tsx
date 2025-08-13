import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const categories = [
  "Health",
  "AI & Machine Learning",
  "Business Transformation",
  "Data & Analytics",
  "Industry Use Cases",
  "Ethics & AI Governance",
  "Careers in AI",
  "Training & Education",
];

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button  */}
      {/* <div className="block min-[1000px]:hidden left-4 z-50"> */}
      <div className="block lg:hidden left-4 z-50 mb-2">
        <button
          onClick={() => setIsOpen(true)}
          className="text-[#00A148] hover:scale-110 transition-transform duration-200"
        >
          <Menu size={28} /> <span className="font-poppins">Categories</span>
        </button>
      </div>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm animate-fadeIn"
        />
      )}

      {/* Mobile Sidebar */}

      <div
        className={`fixed top-0 left-0 h-full w-48 bg-white shadow-2xl transform transition-transform duration-300 z-50  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-3 border-b bg-gradient-to-r from-emerald-50 to-white rounded-tr-2xl">
          <h2 className="text-lg font-bold text-[#00A148] tracking-wide px-2">
            Categories
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#00A148] hover:text-[#00A148]  transition-transform duration-300"
          >
            <X size={24} />
          </button>
        </div>

        {/* Category List */}
        <ul className="p-4 overflow-y-auto max-h-[calc(100%-60px)]">
          {categories.map((category, index) => (
            <li key={index}>
              <a
                href="#"
                className="block text-xs text-gray-700 font-medium px-3 py-2 transition-all hover:bg-emerald-50 hover:text-[#00A148] hover:shadow-sm"
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Sidebar */}
      {/* <aside className="hidden min-[1000px]:block sticky w-full p-4 bg-white rounded-lg shadow-sm lg:w-60 h-[100vh] top-10 mr-10"> */}
      <aside className="hidden  lg:block sticky grid-cols-2  py-6 px-6 bg-[#F0F0F0]/30 border-[#DFDFDF8F]/30 border-2 rounded-lg shadow-sm  h-screen ">
    <h2 className="text-[#00A148] font-semibold text-[24px] md:text-[28px]  font-poppins mb-4">Categories</h2>
        <ul className="space-y-2 leading-tight">
          {categories.map((category, index) => (
            <li key={index}>
              <a
                href="#"
                className=" tracking-[0.05px]  font-poppins font-medium text-gray-700 transition-colors  rounded-md text-[18px] lg:text-[20px] hover:text-emerald-600 hover:bg-emerald-50"
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </aside> 
    </>
  );
};

export default Sidebar;
