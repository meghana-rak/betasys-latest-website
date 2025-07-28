import React from 'react';
import ServiceFrame from '../../assests/ServiceFrame.png'; 

const HeroSection = () => {
  return (
    <div className="relative h-[200px] sm:h-[260px] md:h-[300px] lg:h-[360px] xl:h-[400px] bg-[#022334] overflow-hidden">
      {/* Text Content */}
      <div className="absolute z-10 px-6 sm:px-10 lg:px-20 top-1/2 transform -translate-y-1/2">
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-helvetica">
          AI-Consulting
        </h1>
        <p className="text-[#EFEFEF] text-[16px]   mt-1 sm:mt-2  font-poppins">
          From AI Strategy to Execution — We Guide You All the Way
        </p>
      </div>

      {/* Background Curve */}
      <img
        src={ServiceFrame}
        alt="Curved Lines Background"
        className="absolute bottom-0 left-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default HeroSection;
