import React, { useEffect, useState } from "react";
import features from "../../assests/ProductPage/Feature.png";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../../hooks/useParallax";

const Features = () => {
  const [showText, setShowText] = useState(false);
  const { isVisible, setElement } = useIntersectionObserver();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
            id="who-section"
            ref={setElement}
            className={`py-10  transition-all duration-1000 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-16'
                }`}
        >
    <div className="flex container items-center justify-center md:py-20  mx-auto sm:px-8 lg:px-10 max-w-7xl md:my-28 mt-[200px] md:mt-[250px] ">
      <div className="grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-y-4 gap-y-2">
        {/* Top Left Text */}
        {showText ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="space-y-0 text-left md:space-y-2 md:ml-2"
          >
            <h2 className="text-[22px] font-bold text-black  font-poppins md:text-[28px]">
              Real-Time Dashboard
            </h2>
            <p className="text-[18px] text-gray-700 font-light font-poppins leading-tight lg:leading-relaxed md:text-[20px] lg:text-[22px]">
              Monitor fuel sales, stock levels, shift summaries, and performance metrics in one intuitive view.
            </p>
          </motion.div>
        ) : (
          <div />
        )}

        {/* Center Image */}
        <div className="flex items-center justify-center h-full row-span-2 pt-5">
          <img

            src={features}
            alt="Dashboard Phone"
            className="w-[100px] sm:w-[300px] md:w-[330px] lg:w-[370px] xl:w-[390px]  "
          />
        </div>


        {/* Top Right Text */}
        {showText ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-4 space-y-0 md:space-y-2 tex-left md:mr-8 lg:mt-14 md:mt-10"
          >
            <h2 className="text-[22px] font-bold text-black  font-poppins md:text-[28px]">
              Inventory Management
            </h2>
            <p className="text-[18px] text-gray-700 font-light font-poppins leading-tight lg:leading-relaxed   md:text-[20px] lg:text-[22px]">
              Automatically track fuel and product levels, receive alerts, and manage reorder schedules with ease.
            </p>
          </motion.div>
        ) : (
          <div />
        )}

        {/* Bottom Left Text */}
        {showText ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-1 space-y-0 text-left md:space-y-2 md:ml-8 lg:mb-20"
          >
            <h2 className="text-[22px] font-bold text-black  font-poppins md:text-[28px]">
              Sales & Billing Reports
            </h2>
            <p className="text-[18px] text-gray-700 font-light font-poppins leading-tight lg:leading-relaxed md:text-[20px] lg:text-[22px]">
              Access and export daily, weekly, or custom billing summaries, tax reports, and sales trends.
            </p>
          </motion.div>
        ) : (
          <div />
        )}

        {/* Bottom Right Text */}
        {showText ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-1 mb-20 space-y-0 text-left md:mb-0 md:space-y-2 md:mr-4 lg:mt-14 md:mt-10 md:ml-8"
          >
            <h2 className="text-[22px] font-bold text-black  font-poppins md:text-[28px]">
              Mobile App Access
            </h2>
            <p className="text-[18px] text-gray-700 font-light font-poppins leading-tight lg:leading-relaxed  md:text-[20px] lg:text-[22px]">
              Get real-time insights, approve actions, or check sales remotely via the PetroLynk mobile app.
            </p>
          </motion.div>
        ) : (
          <div />
        )}
      </div>
    </div>
    </section>
  );
};

export default Features;
