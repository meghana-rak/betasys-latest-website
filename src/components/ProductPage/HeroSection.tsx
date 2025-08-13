
import React from "react";
import { motion } from "framer-motion";
import HeroMobile from "../../assests/ProductPage/iPhone.png";
import HeroDesktop from "../../assests/ProductPage/Frame.png";

const HeroSection = () => {
  return (
    // md:pt-[250px] 
    <section className="relative pt-[140px] md:pt-[130px] container  mx-auto ">
      <div className=" px-4 sm:px-6  md:pt-6 text-center">

        {/* Small heading */}
        <motion.p
          className="text-gray-700 font-semibold text-[18px] md:text-[22px] font-poppins mb-3 md:mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          BackOffice Control
        </motion.p>

        {/* Main heading */}
        <motion.h1
          className="max-w-7xl font-helvetica text-[28px] md:text-[48px] xl:text-[68px] font-bold leading-tight"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          
          Complete <span className="text-[#00A148]">POS Backoffice</span> Control
          <br className="hidden sm:block" />
          Anytime, Anywhere
        </motion.h1>

        {/* Hero Images */}
        <div
          className="relative mt-8 sm:mt-10 flex justify-center items-center lg:ml-[180px]"
        >
          {/* Desktop Image */}
          <img
            src={HeroDesktop}
            alt="Dashboard"
            className="
              w-[95%] sm:w-[600px] md:w-[750px] lg:w-[850px] 
              h-auto lg:h-[405.2px]
              shadow-[0_8px_25px_rgba(0,0,0,0.08)]
            "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
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
      </div>
    </section>
  );
};

export default HeroSection;


