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
         <div className="absolute z-10 px-5 transform -translate-y-1/2 top-3/4 md:top-1/2 left-4 sm:left-8 md:left-12 lg:left-32">
           <p className="text-[#00A148] font-medium text-[18px] uppercase tracking-wide font-poppins">
            Health
          </p>
         <h1 className="text-[24px] my-2 font-bold text-white font-helvetica  sm:text-[28px] xl:text-4xl ">
            The Future of AI in Healthcare Transforming Patient Care
          </h1>
          <p className="font-poppins text-[#FFFFFF]  text-[16px]">
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
