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
import { ArrowLeftCircle, ArrowRightCircle, ChevronLeft, ChevronRight } from "lucide-react";
import Mobile from "../../assests/ProductPage/mobile.png";
import Laptop from "../../assests/ProductPage/Galaxy Tab S8 Ultra 1.png";
import Ipad from "../../assests/ProductPage/MacBook Air (15 inch).png";
import { useIntersectionObserver } from "../../hooks/useParallax";

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
    image: Ipad,
    imageClass: "h-auto",
  },
  {
    title: "Dynamic Pricebook Control",
    description:
      "Easily manage pricing for fuel and in-store items. Update prices instantly across locations with full version history and control.",
    image: Laptop,
    imageClass: "h-auto",
  },
];

const FeatureCarousel = () => {
  const [current, setCurrent] = useState(0);
  const { isVisible, setElement } = useIntersectionObserver();

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="who-section"
      ref={setElement}
      className={`relative overflow-hidden py-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
    >
      <div className="container mx-auto flex flex-col items-center justify-center overflow-hidden">
        {/* Carousel Container */}
        <div className="relative w-full">
          {/* Slides Wrapper */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full grid md:grid-cols-12 items-center justify-between px-4 lg:px-12"
              >
                {/* Text Section */}
                <motion.div
                  key={current}
                  className="lg:max-w-3xl col-span-7 text-center lg:text-left order-2 md:order-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <h2 className="text-[22px] font-bold text-black font-poppins md:text-[28px]">
                    {slide.title}
                  </h2>
                  <p className="text-[18px] text-gray-700 font-light font-poppins leading-relaxed md:text-[22px]">
                    {slide.description}
                  </p>

                  {/* Navigation Arrows */}
                  <div className="mt-3 flex justify-center lg:justify-start space-x-4 w-full lg:w-3/5 relative z-10">
                    <button
                      onClick={prevSlide}
                      disabled={current === 0}
                      className={`flex items-center justify-start transition ${current === 0 ? "opacity-40 cursor-not-allowed" : ""
                        }`}
                    >
                      <ArrowLeftCircle className="md:w-8 md:h-8 text-gray-600" />
                    </button>
                    <button
                      onClick={nextSlide}
                      disabled={current === slides.length - 1}
                      className={`flex items-center justify-center transition ${current === slides.length - 1
                          ? "opacity-40 cursor-not-allowed"
                          : ""
                        }`}
                    >
                      <ArrowRightCircle className="md:w-8 md:h-8 text-gray-600" />
                    </button>
                  </div>
                </motion.div>

                {/* Image Section */}
                <div className="col-span-5 flex justify-end items-center order-1 md:order-2">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className={`${slide.imageClass} object-contain w-auto md:w-96 h-[200px] md:h-96 mb-4`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    // <section
    //   id="who-section"
    //   ref={setElement}
    //   className={`relative  overflow-hidden py-10  transition-all duration-1000 ${isVisible
    //     ? 'opacity-100 translate-y-0'
    //     : 'opacity-0 translate-y-16'
    //     }`}
    // >
    //   {/* <section className="relative container overflow-hidden"> */}
    //   <div className="relative container mx-auto  flex flex-col items-center justify-center overflow-hidden">
    //     {/* Carousel Container */}
    //     <div className="">
    //       <div
    //         className="flex transition-transform duration-700 ease-in-out"
    //         style={{ transform: `translateX(-${current * 100}%)` }}
    //       >
    //         {slides.map((slide, index) => (
    //           <div
    //             key={index}
    //             className="flex-shrink-0  grid md:grid-cols-12 items-center justify-between px-4 lg:px-12"
    //           >
    //             {/* Text Section */}
    //             <motion.div
    //               key={current}
    //               className="lg:max-w-3xl col-span-7 text-center lg:text-left order-2 md:order-1"
    //               initial={{ opacity: 0, y: 20 }}
    //               animate={{ opacity: 1, y: 0 }}
    //               transition={{ delay: 0.3, duration: 0.6 }}
    //             >
    //               <h2 className="text-[22px] font-bold text-black font-poppins md:text-[28px]">
    //                 {slide.title}
    //               </h2>
    //               <p className="text-[18px] text-gray-700 font-light font-poppins leading-relaxed md:text-[22px]">
    //                 {slide.description}
    //               </p>
    //               {/* Navigation Arrows */}
    //               <div className="mt-3 flex justify-center lg:justify-start space-x-4 w-full lg:w-3/5 relative z-10">
    //                 <button
    //                   onClick={prevSlide}
    //                   disabled={current === 0}
    //                   className={`flex items-center justify-start transition ${current === 0 ? "opacity-40 cursor-not-allowed" : ""
    //                     }`}
    //                 >
    //                   <ArrowLeftCircle className="md:w-8 md:h-8 text-gray-600" />
    //                 </button>
    //                 <button
    //                   onClick={nextSlide}
    //                   disabled={current === slides.length - 1}
    //                   className={`flex items-center justify-center transition ${current === slides.length - 1 ? "opacity-40 cursor-not-allowed" : ""
    //                     }`}
    //                 >
    //                   <ArrowRightCircle className="md:w-8 md:h-8 text-gray-600" />
    //                 </button>
    //               </div>
    //             </motion.div>

    //             {/* Image Section */}
    //             <div className="col-span-5 flex justify-center items-center order-1 md:order-2">
    //               <img
    //                 src={slide.image}
    //                 alt={slide.title}
    //                 className={`${slide.imageClass} object-contain w-auto md:w-96 h-[200px] md:h-96 mb-4`}
    //               />
    //             </div>
    //           </div>

    //         ))}
    //       </div>

    //     </div>

    //   </div>
    // </section>
  );
};

export default FeatureCarousel;

