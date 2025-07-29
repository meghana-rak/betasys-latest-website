import React from 'react';
// import BlogFrame from '../assests/BlogFrame.png'; 
import BlogFrame from '../../assests/BlogFrame.png'; // Adjust the path as necessary

const HeroSection = () => {
  return (
    <div className="relative bg-[#022334] h-[220px] sm:h-[260px] md:h-[300px] lg:h-[380px] xl:h-[380px] overflow-hidden">
      {/* Text Content */}
      <div className="absolute z-10 ml-20 transform -translate-y-1/2 top-1/2 left-4 sm:left-6 md:left-10 ">
        <h4 className="text-md sm:text-md font-semibold text-[#00A148]">Label</h4>
        <h1 className="mt-1 text-2xl font-bold text-white sm:mt-2 sm:text-3xl md:text-4xl">Blog</h1>
      </div>

      {/* Background Image */}
      <img
        src={BlogFrame}
        alt="Background Curve"
        className="absolute bottom-0 left-0 object-cover w-full h-full"
      />
    </div>
  );
};

export default HeroSection;
