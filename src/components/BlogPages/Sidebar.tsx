import React from 'react';

const Sidebar = () => {
  const categories = [
    'Health',
    'AI & Machine Learning',
    'Business Transformation',
    'Data & Analytics',
    'Industry Use Cases',
    'Ethics & AI Governance',
    'Careers in AI',
    'Training & Education'
  ];

  return (
    <aside className="sticky w-full p-6 bg-white rounded-lg shadow-sm lg:w-64 h-[100vh] top-16 mr-10">
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
  );
};

export default Sidebar;