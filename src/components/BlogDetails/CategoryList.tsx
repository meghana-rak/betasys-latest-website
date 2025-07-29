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

const CategoryList: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button for <=1024px */}
      <div className="block min-[1025px]:hidden py-2">
        <button
          onClick={() => setIsOpen(true)}
          className="text-[#00A148] hover:scale-110 transition-transform duration-200"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 animate-fadeIn"
        />
      )}

      {/* Mobile Sidebar */}

      <div
        className={`fixed top-0 left-0 h-full w-50 bg-white shadow-2xl transform transition-transform duration-300 z-50 rounded-r-2xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b bg-gradient-to-r from-emerald-50 to-white rounded-tr-2xl">
          <h2 className="text-lg font-bold text-[#00A148] tracking-wide">
            Categories
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#00A148] hover:text-[#00A148] hover:rotate-90 transition-transform duration-300"
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
                className="block font-medium text-gray-700 rounded-lg px-3 py-1 transition-all hover:bg-emerald-50 hover:text-[#00A148] hover:shadow-sm"
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden min-[1025px]:block sticky w-full p-6 bg-white rounded-lg shadow-sm lg:w-64 h-[100vh] top-16 mr-10">
        <h2 className="mb-4 text-lg font-bold text-[#00A148]">Categories</h2>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index}>
              <a
                href="#"
                className="block font-semibold text-black transition-colors rounded-md text-md hover:text-emerald-600 hover:bg-emerald-50"
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

export default CategoryList;
