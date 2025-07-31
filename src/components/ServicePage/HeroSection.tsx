import React from 'react';
import ServiceFrame from '../../assests/Servicepage/ServiceFrame.png'; 

const HeroSection = () => {


  
  return (
<div className="relative h-[200px] sm:h-[300px] md:h-[300px] lg:h-[360px] xl:h-[400px] bg-[#022334] overflow-hidden">
  {/* Text Content */}
  <div className="absolute z-10 left-6 sm:left-10 md:left-16 lg:left-20 md:top-28 top-20">
    <h1 className="text-lg font-bold text-white font-helvetica sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
      AI-Consulting
    </h1>
    <p className="text-[#EFEFEF] font-poppins mt-2 text-xs sm:text-sm md:text-base lg:text-lg ">
      From AI Strategy to Execution — We Guide You All the Way
    </p>
  </div>

  {/* Background Image */}
  <img
    src={ServiceFrame}
    alt="Curved Lines Background"
    className="absolute bottom-0 left-0 object-cover w-full h-full"
  />
</div>


  );
};

export default HeroSection;
