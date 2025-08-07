

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Herosection from '../components/Aboutpage/Herosection';
import OurValues from '../components/Aboutpage/OurValues';
import OurMission from '../components/Aboutpage/OurMission';
import GuidedBy from '../components/Aboutpage/GuidedBy';
import Banner from "../components/Aboutpage/Banner";

const sections = [
  { component: <Banner />, name: "Hero" },
  { component: <OurMission />, name: "Mission" },
  { component: <OurValues />, name: "Values" },
  { component: <GuidedBy />, name: "Guided" }
];


// Calculate the total height based on number of sections and estimated height per section
const SECTION_HEIGHT = 100; // adjust if needed (in vh or px)
const totalHeight = sections.length * SECTION_HEIGHT;

const AboutPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (
            scrollPos >= offsetTop &&
            scrollPos < offsetTop + offsetHeight
          ) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-x-hidden">
      {/* Fixed Vertical Stroke */}
      <div className="hidden md:block fixed z-50 top-1/2 left-5 transform -translate-y-1/2">
        <div className="relative w-1 h-56 bg-green-200 rounded-full">
          <div
            className="absolute w-1 h-14 bg-green-700 rounded-full transition-all duration-300 left-1/2 -translate-x-1/2"
            style={{ top: `${activeIndex * 80}px` }}
          />
        </div>
      </div>

    
      <div style={{ minHeight: `${totalHeight}vh` }}>
        {sections.map((section, index) => (
          <motion.div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center px-4 md:min-h-screen"
          >
            {section.component}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
