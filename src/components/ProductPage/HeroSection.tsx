// import React from "react";
// import HeroMobile from "../../assests/ProductPage/iPhone.png";
// import HeroDesktop from "../../assests/ProductPage/Frame.png";

// const HeroSection = () => {
//   return (
//     <section className="relative bg-gradient-to-b from-white to-[#f5fdfb] overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 pt-16 pb-24 text-center">
//         {/* Small heading */}
//         <p className="text-[#5A5A5A] text-[18px] font-semibold mb-3 tracking-wide font-poppins">
//           BackOffice Control
//         </p>

//         {/* Main heading */}
//         <h1 className="text-[40px] md:text-[42] sm:text-[52px] text-[#022334] font-bold leading-tight font-helvetica">
//           Complete <span className="text-[#00A148]">POS Backoffice</span>{" "}
//           Control
//           <br />
//           Anytime, Anywhere
//         </h1>

//         {/* Hero Images */}
//         <div className="relative mt-10 ml-[180px] flex justify-center items-center">
//           {/* Desktop Image */}
//           <img
//             src={HeroDesktop}
//             alt="Dashboard"
//             className="w-[850px] h-[405.2px]  shadow-[0_8px_25px_rgba(0,0,0,0.08)]"
//           />

//           {/* Mobile Image */}
//           <img
//             src={HeroMobile}
//             alt="Mobile App"
//             className="absolute mt-[335px] mr-[910px] rounded-[24px]"
//           />
//         </div>

//         {/* Text Content */}
//         <div className="mt-8">
//           <h2 className="ml-[270px] text-[22px] sm:text-[30px] text-[#022334] font-bold font-helvetica leading-snug">
//             Monitor, manage, and make smarter decisions with
//             <br />
//             <span className="text-[#00A148]">
//               our real-time dashboard and mobile solution.
//             </span>
//           </h2>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import HeroMobile from "../../assests/ProductPage/iPhone.png";
import HeroDesktop from "../../assests/ProductPage/Frame.png";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-[#f5fdfb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-16 sm:pb-24 text-center">
        
        {/* Small heading */}
        <p className="text-[#5A5A5A] text-[16px] sm:text-[18px] font-semibold mb-3 tracking-wide font-poppins">
          BackOffice Control
        </p>

        {/* Main heading */}
        <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[52px] text-[#022334] font-bold leading-tight font-helvetica">
          Complete <span className="text-[#00A148]">POS Backoffice</span> Control
          <br className="hidden sm:block" />
          Anytime, Anywhere
        </h1>

        {/* Hero Images */}
        <div className="relative mt-8 sm:mt-10 flex justify-center items-center 
                        lg:ml-[180px]">
          {/* Desktop Image */}
          <img
            src={HeroDesktop}
            alt="Dashboard"
            className="
              w-[95%] sm:w-[600px] md:w-[750px] lg:w-[850px] 
              h-auto lg:h-[405.2px]
              shadow-[0_8px_25px_rgba(0,0,0,0.08)]
            "
          />

          {/* Mobile Image */}
          <img
            src={HeroMobile}
            alt="Mobile App"
            className="
              absolute rounded-[24px]
              w-[100px] sm:w-[130px] md:w-[160px] lg:w-auto
              
              /* Desktop positioning */
              lg:mt-[335px] lg:mr-[910px]

              /* Mobile & tablet positioning */
              mt-[44%] sm:mt-[30%] 
              mr-[75%] sm:mr-[60%] md:mr-[82%]
            "
          />
        </div>

        {/* Text Content */}
        <div className="mt-2 sm:mt-8 md:mt-4">
          <h2 className="
            text-[16px] sm:text-[18px] md:text-[20px] lg:text-[30px]
            text-[#022334] font-bold font-helvetica leading-snug
            lg:ml-[270px] sm:ml-[200px] md:ml-[90px] ml-[100px]
          ">
            Monitor, manage, and make smarter decisions with
            <br />
            <span className="text-[#00A148]">
              our real-time dashboard and mobile solution.
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

