import React from 'react';
import ServiceFrame from '../../assests/Servicepage/ServiceFrame.png'; 

const HeroSection = () => {


  
  return (
<div className="relative h-[230px] sm:h-[300px] md:h-[300px] lg:h-[360px] xl:h-[400px] bg-[#022334] overflow-hidden">
  {/* Text Content */}
  <div className="absolute z-10 py-20 px-6 md:py-32 md:px-8 lg:p-36">
    <h1 className="text-[24px] font-bold text-white font-helvetica  sm:text-[28px] xl:text-4xl">
      AI-Consulting
    </h1>
    <p className="text-[#EFEFEF] font-poppins mt-2 text-[16px]  md:text-[22px] ">
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
