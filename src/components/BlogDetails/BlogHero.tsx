import React from 'react';
// import BlgFrame from '../../assests/blogFrame.jpg'

const BlogHero: React.FC = () => {
  return (
    <div className="bg-slate-800 text-white py-28">
      <div className="max-w-7xl ml-10 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <span className="inline-block text-green-500 text-lg font-medium">
            Health
          </span>
          <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold leading-tight mb-2">
            The Future of AI in Healthcare Transforming Patient Care
          </h3>
          <p className="text-gray-300 text-sm">
            20/06/2025
          </p>

        </div>
      </div>
    </div>
  );
};

export default BlogHero;