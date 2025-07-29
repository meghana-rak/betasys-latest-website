import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const categories = [
  'Health',
  'AI & Machine Learning',
  'Business Transformation',
  'Data & Analytics',
  'Industry Use Cases',
  'Ethics & AI Governance',
  'Careers in AI',
  'Training & Education',
];

const CategoryList: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const toggleDropdown = () => setOpen(!open);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setOpen(false);
    console.log("Selected category:", category);
  };

  return (
    <>
      {/* Show dropdown for screens <= 1024px */}
      <div className="block min-[1025px]:hidden bg-white p-4 rounded-lg shadow-md">
        <button
          onClick={toggleDropdown}
          className="w-full flex justify-between items-center border border-gray-300 rounded-md px-4 py-2 text-[#00A148] font-semibold hover:border-[#00A148] focus:outline-none focus:ring-2 focus:ring-[#00A148] transition"
        >
          {selectedCategory || 'Select Category'}
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {open && (
          <ul className="mt-2 border border-gray-200 rounded-md shadow-lg max-h-64 overflow-y-auto">
            {categories.map((category, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-emerald-50 cursor-pointer text-sm text-gray-800"
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Show full sidebar for screens > 1024px */}
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
