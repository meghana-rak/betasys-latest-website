import React from 'react';

import BlogFrame from "../../assests/blogpage/BlogFrame.png"

const HeroSection = () => {
  return (
    <div className="relative bg-[#022334] h-[220px] sm:h-[260px] md:h-[300px] lg:h-[380px] xl:h-[380px] overflow-hidden">
      {/* Text Content */}
      <div className="absolute z-10 px-5 transform -translate-y-1/2 top-1/2 left-4 sm:left-8 md:left-12 lg:left-20">
        <h4 className="text-sm sm:text-base font-semibold text-[#00A148] mt-6">Label</h4>
        <h1 className="text-2xl font-bold text-white mt- sm:text-3xl md:text-4xl ">Blog</h1>
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
