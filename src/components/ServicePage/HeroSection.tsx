import React from 'react';
import ServiceFrame from '../../assests/Servicepage/ServiceFrame.png'; 

const HeroSection = () => {
  return (
    <div className="relative h-[200px] sm:h-[260px] md:h-[300px] lg:h-[360px] xl:h-[400px] bg-[#022334] overflow-hidden">
      {/* Text Content */}
      <div className="absolute z-10 px-6 transform -translate-y-1/2 sm:px-10 lg:px-20 top-1/2">
        <h1 className="mt-8 text-lg font-bold text-white sm:text-xl md:text-2xl lg:text-3xl font-helvetica ">
          AI-Consulting
        </h1>
        <p className="text-[#EFEFEF] text-xs sm:text-sm   mt-1 sm:mt-2  font-poppins">
          From AI Strategy to Execution — We Guide You All the Way
        </p>
      </div>

      {/* Background */}
      <img
        src={ServiceFrame}
        alt="Curved Lines Background"
        className="absolute bottom-0 left-0 object-cover w-full h-full"
      />
    </div>
  );
};

export default HeroSection;
