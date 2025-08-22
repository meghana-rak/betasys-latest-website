import React from 'react';
import ServiceFrame from '../../assests/Servicepage/ServiceFrame.png';
import { useParams } from 'react-router-dom';

const HeroSection = () => {
const {name} = useParams<{name: string}>();


  return (
    <div className="relative bg-[#022334] mt-16">
      <div className=" container mx-auto px-4 sm:px-6 lg:px-8 h-[220px] sm:h-[260px] md:h-[300px] lg:h-[380px] xl:h-[380px] overflow-hidden flex items-center ">
        {/* Text Content */}
         <div className="z-10  sm:mt-0">
          <h1 className="text-[24px] font-bold text-white font-poppins sm:text-[40px] xl:text-4xl">
            {name
              ? name
                  .replace(/-/g, ' ')
                  .replace(/\b\w/g, char => char.toUpperCase())
              : 'Service Page'}
          </h1>
          <p className="text-[#EFEFEF] font-poppins text-[16px]  md:text-[18px] ">
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

    </div>
  );
};

export default HeroSection;
