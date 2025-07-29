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

// import React from 'react';
// // import BlogFrame from '../assests/BlogFrame.png'; 
// import BlogFrame from '../../assests/BlogFrame.png'; // Adjust the path as necessary

// const HeroSection = () => {
//   return (
//     <div className="relative bg-[#022334] h-[220px] sm:h-[260px] md:h-[300px] lg:h-[380px] xl:h-[380px] overflow-hidden">
//       {/* Text Content */}
//       <div className="absolute z-10 ml-20 transform -translate-y-1/2 top-1/2 left-4 sm:left-6 md:left-10 ">
//         <h4 className="text-md sm:text-md font-semibold text-[#00A148]">Label</h4>
//         <h1 className="mt-1 text-2xl font-bold text-white sm:mt-2 sm:text-3xl md:text-4xl">Blog</h1>
//       </div>

//       {/* Background Image */}
//       <img
//         src={BlogFrame}
//         alt="Background Curve"
//         className="absolute bottom-0 left-0 object-cover w-full h-full"
//       />
//     </div>
//   );
// };

// export default HeroSection;