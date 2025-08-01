import React from "react";
import frame from "../../assests/Servicepage/ServiceFrame.png";

const BlogHero: React.FC = () => {
  return (
    // <div className="bg-slate-800 text-white py-28">
    //   <div className="max-w-7xl ml-10 sm:px-6 lg:px-8">
    //     <div className="max-w-4xl">
    //       <span className="inline-block text-green-500 text-lg font-medium">
    //         Health
    //       </span>
    //       <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold leading-tight mb-2">
    //         The Future of AI in Healthcare Transforming Patient Care
    //       </h3>
    //       <p className="text-gray-300 text-sm">
    //         20/06/2025
    //       </p>

    //     </div>
    //   </div>
    // </div>

    <div>
      <div className="relative bg-[#022334] h-[220px] sm:h-[260px] md:h-[300px] lg:h-[380px] xl:h-[380px] overflow-hidden">
        {/* Text Content */}
        <div className="absolute z-10 px-5 transform -translate-y-1/2 top-1/2 left-4 sm:left-8 md:left-12 lg:left-20">
          <h4 className="font-poppins text-[18px] font-semibold text-[#00A148] mt-16 lg:mt-6">
            Health
          </h4>
          <h1 className="text-1xl font-bold text-white mb-0 sm:mb-2 sm:text-[32px]">
            The Future of AI in Healthcare Transforming Patient Care
          </h1>
          <p className="font-poppins text-[#FFFFFF] mt- text-[12px]">
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
