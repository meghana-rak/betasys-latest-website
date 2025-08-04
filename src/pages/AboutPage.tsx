// import React, { useEffect, useState } from 'react';


// import Herosection from '../components/Aboutpage/Herosection';
// import OurValues from '../components/Aboutpage/OurValues';
// import OurMission from '../components/Aboutpage/OurMission';
// import GuidedBy from '../components/Aboutpage/GuidedBy';

// function AboutPage() {
//     return (
//         <div className="min-h-[300vh] bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
//             <Herosection />
//             <OurMission />
//             <OurValues />
//             <GuidedBy />
//         </div>
//     )
// }

// export default AboutPage
// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import Herosection from '../components/Aboutpage/Herosection';
// import OurValues from '../components/Aboutpage/OurValues';
// import OurMission from '../components/Aboutpage/OurMission';
// import GuidedBy from '../components/Aboutpage/GuidedBy';


// const AboutPage = () => {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const sectionRefs = useRef([]);

//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollPos = window.scrollY + window.innerHeight / 2;

//             sectionRefs.current.forEach((section, index) => {
//                 if (section) {
//                     const { top } = section.getBoundingClientRect();
//                     const offsetTop = window.scrollY + top;
//                     if (scrollPos >= offsetTop) {
//                         setActiveIndex(index);
//                     }
//                 }
//             });
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     return (
//         <div className="relative min-h-[200vh] bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
//             {/* Fixed Vertical Stroke */}
//             <div className="fixed top-1/2 left-5 transform -translate-y-1/2 z-50">
//                 <div className="w-1 h-56 bg-green-200 relative rounded-full">
//                     <div
//                         className="absolute w-1 h-16 bg-green-700 rounded-full left-1/2 -translate-x-1/2 transition-all duration-300"
//                         style={{ top: `${activeIndex * 80}px` }} // adjust 80px spacing between dots
//                     ></div>
//                 </div>
//             </div>

//             {/* Scroll Sections */}
//             <div ref={(el) => (sectionRefs.current[0] = el)} >
//                 <motion.div
//                     ref={(el) => (sectionRefs.current[0] = el)}
//                     // className="min-h-screen flex items-center"
//                     initial={{ opacity: 1, y: 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: false, amount: 0.4 }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <Herosection />
//                 </motion.div>
//             </div>
//             <div ref={(el) => (sectionRefs.current[1] = el)} >
//                 <motion.div
//                     ref={(el) => (sectionRefs.current[1] = el)}
//                     // className="min-h-screen flex items-center"
//                     initial={{ opacity: 0, y: 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: false, amount: 0.4 }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <OurMission />
//                 </motion.div>
//             </div>
//             <div ref={(el) => (sectionRefs.current[2] = el)} >
//                 <motion.div
//                     ref={(el) => (sectionRefs.current[2] = el)}
//                     // className="min-h-screen flex items-center"
//                     initial={{ opacity: 0, y: 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: false, amount: 0.4 }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <OurValues />
//                 </motion.div>
//             </div>
//             <div ref={(el) => (sectionRefs.current[3] = el)} >
//                  <motion.div
//                     ref={(el) => (sectionRefs.current[3] = el)}
//                     // className="min-h-screen flex items-center"
//                     initial={{ opacity: 0, y: 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: false, amount: 0.4 }}
//                     transition={{ duration: 0.6 }}
//                 >
//                 <GuidedBy />
//                 </motion.div>
//             </div>
//         </div>
//     );
// };


// export default AboutPage;


import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Herosection from '../components/Aboutpage/Herosection';
import OurValues from '../components/Aboutpage/OurValues';
import OurMission from '../components/Aboutpage/OurMission';
import GuidedBy from '../components/Aboutpage/GuidedBy';

const components = [<Herosection />, <OurMission />, <OurValues />, <GuidedBy />];

const AboutPage = () => {
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
        <div
            ref={containerRef}
            className="h-screen bottom-10 w-screen overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative"
        >
            {/* Fixed Stroke */}
            <div className="fixed top-1/2 left-5 transform -translate-y-1/2 z-50">
                <div className="w-1 h-56 bg-green-200 relative rounded-full">
                    <div
                        className="absolute w-1 h-14 bg-green-700 rounded-full left-1/2 -translate-x-1/2 transition-all duration-300"
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
                    className="absolute top-28 left-0 w-full h-[100vh] flex items-center justify-center"
                >
                    {components[activeIndex]}
                </motion.div>
            </AnimatePresence>


        </div>
    );
};

export default AboutPage;

