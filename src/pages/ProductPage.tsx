



import { useState, useEffect, useRef } from "react";
 import { motion, AnimatePresence } from "framer-motion";
import HeroSection from '../components/ProductPage/HeroSection';
import FeatureCarousel from '../components/ProductPage/FeatureCarousel';
import Features from '../components/ProductPage/Features';
import Faq from '../components/ProductPage/Faq';
import HeroSectionPart2 from '../components/ProductPage/HeroSectionPart2';

const components = [<HeroSection/> , <Features/> , <FeatureCarousel/> , <Faq/>]

const ProductPage = () =>  {

    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);
    const isScrollingRef = useRef(false);

    const handleWheel = (e) => {
        if (isScrollingRef.current) return;
        isScrollingRef.current = true;

        if (e.deltaY > 0 && activeIndex < components.length - 1) {
            setActiveIndex((prev) => prev + 1);
        } else if (e.deltaY < 0 && activeIndex > 0) {
            setActiveIndex((prev) => prev - 1);
        }

        setTimeout(() => {
            isScrollingRef.current = false;
        }, 800); // prevent too-fast scrolling
    };

    useEffect(() => {
        const container = containerRef.current;
        container.addEventListener("wheel", handleWheel, { passive: false });
        return () => {
            container.removeEventListener("wheel", handleWheel);
        };
    }, [activeIndex]);
 
 
    

    return (
        <div className="min-h-[300vh] bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
         <HeroSection/>
         <HeroSectionPart2/>
         <Features/>
         <FeatureCarousel/>
         <Faq/>
  <div
            ref={containerRef}
            className="relative w-screen h-screen overflow-hidden bottom-10 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"
        >
            {/* Fixed Stroke */}
            <div className="fixed z-50 transform -translate-y-1/2 top-1/2 left-5">
                <div className="relative w-1 h-56 bg-green-200 rounded-full">
                    <div
                        className="absolute w-1 transition-all duration-300 -translate-x-1/2 bg-green-700 rounded-full h-14 left-1/2"
                        style={{ top: `${activeIndex * 80}px` }}
                    ></div>
                </div>
            </div>

            {/* Component Switcher */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.6 }}
                    className="absolute top-32 left-0 w-full h-[100vh] flex items-center justify-center"
                >
                    {components[activeIndex]}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default ProductPage
