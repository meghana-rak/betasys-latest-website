



// // import { useState, useEffect, useRef } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import HeroSection from '../components/ProductPage/HeroSection';
// // import FeatureCarousel from '../components/ProductPage/FeatureCarousel';
// // import Features from '../components/ProductPage/Features';
// // import Faq from '../components/ProductPage/Faq';
// // import HeroSectionPart2 from '../components/ProductPage/HeroSectionPart2';

// // const components = [<HeroSection />, <Features />, <FeatureCarousel />, <Faq />]
// // const SECTION_HEIGHT_VH = 100;

// // const ProductPage = () => {

// //     const [activeIndex, setActiveIndex] = useState(0);
// //     const containerRef = useRef(null);
// //     const isScrollingRef = useRef(false);

// //     const handleWheel = (e) => {
// //         if (isScrollingRef.current) return;
// //         isScrollingRef.current = true;

// //         if (e.deltaY > 0 && activeIndex < components.length - 1) {
// //             setActiveIndex((prev) => prev + 1);
// //         } else if (e.deltaY < 0 && activeIndex > 0) {
// //             setActiveIndex((prev) => prev - 1);
// //         }

// //         setTimeout(() => {
// //             isScrollingRef.current = false;
// //         }, 800); // prevent too-fast scrolling
// //     };

// //     useEffect(() => {
// //         const container = containerRef.current;
// //         container.addEventListener("wheel", handleWheel, { passive: false });
// //         return () => {
// //             container.removeEventListener("wheel", handleWheel);
// //         };
// //     }, [activeIndex]);




// //     return (

// //         <div
// //             ref={containerRef}
// //             className="relative w-screen h-screen overflow-hidden bottom-10 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"
// //         >
// //             {/* Fixed Stroke */}
// //             <div className="fixed z-50 transform -translate-y-1/2 top-1/2 left-5">
// //                 <div className="relative w-1 h-56 bg-green-200 rounded-full">
// //                     <div
// //                         className="absolute w-1 transition-all duration-300 -translate-x-1/2 bg-green-700 rounded-full h-14 left-1/2"
// //                         style={{ top: `${activeIndex * 80}px` }}
// //                     ></div>
// //                 </div>
// //             </div>

// //             {/* Component Switcher */}
// //             <AnimatePresence mode="wait">
// //                 <motion.div
// //                     key={activeIndex}
// //                     initial={{ opacity: 0, y: 30 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     exit={{ opacity: 0, y: -30 }}
// //                     transition={{ duration: 0.6 }}
// //                     className="absolute top-32 left-0 w-full h-[100vh] flex items-center justify-center"
// //                 >
// //                     {components[activeIndex]}
// //                 </motion.div>
// //             </AnimatePresence>
// //         </div>
// //     )
// // }

// // export default ProductPage


// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import HeroSection from '../components/ProductPage/HeroSection';
// import FeatureCarousel from '../components/ProductPage/FeatureCarousel';
// import Features from '../components/ProductPage/Features';
// import Faq from '../components/ProductPage/Faq';

// const components = [<HeroSection />, <Features />, <FeatureCarousel />, <Faq />];
// const SECTION_HEIGHT_VH = 100;

// const ProductPage = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const containerRef = useRef(null);
//   const isScrollingRef = useRef(false);

//   const handleWheel = (e) => {
//     if (isScrollingRef.current) return;
//     isScrollingRef.current = true;

//     if (e.deltaY > 0 && activeIndex < components.length - 1) {
//       setActiveIndex((prev) => prev + 1);
//     } else if (e.deltaY < 0 && activeIndex > 0) {
//       setActiveIndex((prev) => prev - 1);
//     }

//     setTimeout(() => {
//       isScrollingRef.current = false;
//     }, 800); // delay for scroll lock
//   };

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     container.addEventListener("wheel", handleWheel, { passive: false });

//     return () => {
//       container.removeEventListener("wheel", handleWheel);
//     };
//   }, [activeIndex]);

//   return (
//     <div className="relative w-screen overflow-x-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
//       {/* Scrollable Container */}
//       <div
//         ref={containerRef}
//         className="relative  overflow-hidden"
//       >
//         {/* Fixed Stroke Indicator */}
//         <div className="hidden md:block fixed z-50 transform -translate-y-1/2 top-1/2 left-5">
//           <div className="relative w-1 h-56 bg-green-200 rounded-full">
//             <div
//               className="absolute w-1 h-14 bg-green-700 rounded-full transition-all duration-300 left-1/2 -translate-x-1/2"
//               style={{ top: `${activeIndex * 80}px` }}
//             ></div>
//           </div>
//         </div>

//         {/* Animated Sections */}
//         {/* <div style={{ height: `${components.length * SECTION_HEIGHT_VH}vh` }}> */}
//         <div className="flex flex-col items-center justify-center min-h-screen">
//           {/* AnimatePresence for smooth transitions */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeIndex}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="absolute md:top-20 left-0 w-full flex items-center justify-center min-h-screen"
//             >
//               {components[activeIndex]}
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>

    
//     </div>
//   );
// };

// export default ProductPage;


import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroSection from "../components/ProductPage/HeroSection";
import HeroSectionPart2 from "../components/ProductPage/HeroSectionPart2";
import FeatureCarousel from "../components/ProductPage/FeatureCarousel";
import Features from "../components/ProductPage/Features";
import Faq from "../components/ProductPage/Faq";

// Mock components array
const components = [
  <div className="text-4xl font-bold"><HeroSection/></div>,
  <div className="text-4xl font-bold"><Features/></div>,
  <div className="text-4xl font-bold"><FeatureCarousel/></div>,
  <div className="text-4xl font-bold"><Faq/></div>
];

const SECTION_COUNT = components.length;
const PAGE_HEIGHT_VH = 400;

export default function ProductPage() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const totalScrollableHeight = (PAGE_HEIGHT_VH / 100) * viewportHeight;

      // Detect active section
      const sectionHeight = totalScrollableHeight / SECTION_COUNT;
      const index = Math.min(
        SECTION_COUNT - 1,
        Math.floor(scrollY / sectionHeight)
      );
      setActiveIndex(index);

      // Show footer if user scrolls past the last section
      setShowFooter(scrollY >= totalScrollableHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-screen overflow-x-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Scrollable Container Height */}
      <div
        ref={containerRef}
        style={{ height: `${PAGE_HEIGHT_VH}vh` }}
        className="relative overflow-hidden"
      >
        {/* Fixed Stroke Indicator */}
        <div className="hidden md:block fixed z-50 transform -translate-y-1/2 top-1/2 left-5">
          <div className="relative w-1 h-56 bg-green-200 rounded-full">
            <div
              className="absolute w-1 h-14 bg-green-700 rounded-full transition-all duration-300 left-1/2 -translate-x-1/2"
              style={{ top: `${activeIndex * 80}px` }}
            ></div>
          </div>
        </div>

        {/* Animated Sections - Fixed in middle */}
        <div className="flex items-center justify-center fixed inset-0 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
              className="pointer-events-auto"
            >
              {components[activeIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      
    </div>
  );
}
