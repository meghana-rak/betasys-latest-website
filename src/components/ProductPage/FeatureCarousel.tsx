// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import Mobile from "../../assests/ProductPage/mobile.png";
// import Laptop from "../../assests/ProductPage/laptop.png";
// import Ipad from "../../assests/ProductPage/ipad.png";
// import Icon from "../../assests/ProductPage/arrow-left-contained-02.png";
// import Icon2 from "../../assests/ProductPage/Icon (1).png";

// const slides = [
//   {
//     title: "Smart Inventory Management",
//     description:
//       "Automatically track fuel, lubricants, and store stock levels. Get low-stock alerts and manage reorder points with ease.",
//     image: Mobile,
//     imageClass: "h-auto", // Mobile natural look
//   },
//   {
//     title: "Live Sales Tracking",
//     description:
//       "Monitor every transaction in real time — fuel, product, and payment — across all pumps and counters, right from your dashboard.",
//     image: Laptop,
//     imageClass: "h-auto", // Laptop wide
//   },
//   {
//     title: "Dynamic Pricebook Control",
//     description:
//       "Easily manage pricing for fuel and in-store items. Update prices instantly across locations with full version history and control.",
//     image: Ipad,
//     imageClass: "h-auto", // iPad square-ish
//   },
// ];

// const FeatureCarousel = () => {
//   const [current, setCurrent] = useState(0);

//   const prevSlide = () => {
//     setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <section className="relative py-16 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
//         {/* Carousel Container */}
//         <div className="relative w-full overflow-hidden">
//           <div
//             className="flex transition-transform duration-700 ease-in-out"
//             style={{ transform: `translateX(-${current * 100}%)` }}
//           >
//             {slides.map((slide, index) => (
//               <div
//                 key={index}
//                 className="flex-shrink-0 w-full flex flex-col lg:flex-row items-center justify-between px-4 lg:px-12"
//               >
//                 {/* Text Section */}
//                 <div className="lg:w-[65%] text-center lg:text-left">
//                   <h2 className="text-[44px] text-[#000000] mb-0 lg:mb-6 leading-snug font-helvetica font-semibold">
//                     {slide.title}
//                   </h2>
//                   <p className="text-[#000000] font-poppins text-[20px] leading-relaxed">
//                     {slide.description}
//                   </p>
//                 </div>

//                 {/* Image Section - Custom size per slide */}
//                 <div className="flex justify-center items-center">
//                   <img
//                     src={slide.image}
//                     alt={slide.title}
//                     className={`${slide.imageClass} object-contain`}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Navigation Arrows */}
//         <div className="mr-[380px] -mt-28 flex justify-start space-x-4 w-full lg:w-3/5 relative z-10">
//           <button
//             onClick={prevSlide}
//             className="flex items-center justify-center hover:bg-gray-100 transition"
//           >
//             <img src={Icon} className="w-[31px] h-auto" alt="Previous" />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="flex items-center justify-center hover:bg-gray-100 transition"
//           >
//             <img src={Icon2} className="w-[25px] h-auto" alt="Next" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeatureCarousel;


import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Mobile from "../../assests/ProductPage/mobile.png";
import Laptop from "../../assests/ProductPage/laptop.png";
import Ipad from "../../assests/ProductPage/ipad.png";
import Icon from "../../assests/ProductPage/arrow-left-contained-02.png";
import Icon2 from "../../assests/ProductPage/Icon (1).png";

const slides = [
  {
    title: "Smart Inventory Management",
    description:
      "Automatically track fuel, lubricants, and store stock levels. Get low-stock alerts and manage reorder points with ease.",
    image: Mobile,
    imageClass: "h-auto", 
  },
  {
    title: "Live Sales Tracking",
    description:
      "Monitor every transaction in real time — fuel, product, and payment — across all pumps and counters, right from your dashboard.",
    image: Laptop,
    imageClass: "h-auto",
  },
  {
    title: "Dynamic Pricebook Control",
    description:
      "Easily manage pricing for fuel and in-store items. Update prices instantly across locations with full version history and control.",
    image: Ipad,
    imageClass: "h-auto",
  },
];

const FeatureCarousel = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full flex flex-col lg:flex-row items-center justify-between px-4 lg:px-12"
              >
                {/* Text Section with animation */}
                <motion.div
                  key={current} // Force re-trigger animation on slide change
                  className="lg:w-[65%] text-center lg:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                >
                  <h2 className="text-[44px] text-[#000000] mb-0 lg:mb-6 leading-snug font-helvetica font-semibold">
                    {slide.title}
                  </h2>
                  <p className="text-[#000000] font-poppins text-[20px] leading-relaxed">
                    {slide.description}
                  </p>
                </motion.div>

                {/* Image Section */}
                <div className="flex justify-center items-center">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className={`${slide.imageClass} object-contain`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="mr-[380px] -mt-28 flex justify-start space-x-4 w-full lg:w-3/5 relative z-10">
          <button
            onClick={prevSlide}
            className="flex items-center justify-center hover:bg-gray-100 transition"
          >
            <img src={Icon} className="w-[31px] h-auto" alt="Previous" />
          </button>
          <button
            onClick={nextSlide}
            className="flex items-center justify-center hover:bg-gray-100 transition"
          >
            <img src={Icon2} className="w-[25px] h-auto" alt="Next" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureCarousel;

