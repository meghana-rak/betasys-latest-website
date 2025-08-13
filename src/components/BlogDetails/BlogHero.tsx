import React from "react";
import frame from "../../assests/Servicepage/ServiceFrame.png";

const BlogHero: React.FC = () => {
  return (
    <div className="relative bg-[#022334] mt-16">
            <div className=" container mx-auto px-4 sm:px-6 lg:px-8 h-[220px] sm:h-[260px] md:h-[300px] lg:h-[380px] xl:h-[380px] overflow-hidden flex items-center ">
        {/* Text Content */}
        <div className="z-10 mt-12 sm:mt-0">
          <p className="text-[#00A148] font-medium text-[18px] uppercase tracking-wide font-poppins">
            Health
          </p>
          <h1 className="text-[20px] sm:text-[24px] my-2 font-bold text-white font-helvetica leading-tight md:text-[28px] xl:text-4xl ">
            The Future of AI in Healthcare Transforming Patient Care
          </h1>
          <p className="font-poppins text-[#FFFFFF] pb-3 text-[16px]">
            20/06/2025
          </p>
        </div>

        {/* Background Image */}
        <img
          src={frame}
          alt="Background Curve"
          className="absolute bottom-0 left-0 object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default BlogHero;
