import React, { useEffect, useState } from "react";
import features from "../../assests/ProductPage/Feature.png";
import { motion } from "framer-motion";

const Features = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1500); 
    return () => clearTimeout(timer);
  }, []);
       
  return (
    <div className="flex items-center justify-center px-4 pt-8 h-[100vh] md:pt-6 lg:pt-10 sm:px-4 py-10 lg:px-8 lg:py-14 bg-gradient-to-r sm:py-12 max-w-7xl">
      <div className="relative grid w-full grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-y-8">
        {/* Top Left Text */}
        {showText && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{ duration: 1 }}
            className="mt-8 tex-left spa8ce-y-2 md:ml-10"
          >
            <h2 className="text-xl font-bold text-[#000000] mb-2 lg:text-2xl font-helvetica md:text-xl">
              Real-Time Dashboard
            </h2>
            <p className="text-xs text-gray-800 font-poppins leading-relaxed lg:text-[20px] md:text-[16px]">
              Monitor fuel sales, stock levels, shift summaries, and performance metrics in one intuitive view.
            </p>
          </motion.div>
        )}

        {/* Center Image */}
       <div className="flex items-center justify-center row-span-2 h-full min-h-[400px] sm:my-20 md:my-0">
  <motion.img
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    src={features}
    alt="Dashboard Phone"
    className="w-[240px] sm:w-[300px] md:w-[330px] lg:w-[370px] xl:w-[390px]"
  />
</div>


        {/* Top Right Text */}
        {showText && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{ duration: 1 }}
            className="mt-10 space-y-2 text-left lg:mt-32 md:mt-20"
          >
            <h2 className="text-xl font-bold text-[#000000] mb-2 lg:text-2xl font-helvetica md:text-xl" >
              Inventory Management
            </h2>
            <p className="text-xs text-gray-800 font-poppins leading-relaxed lg:text-[20px] md:text-[16px]">
              Automatically track fuel and product levels, receive alerts, and manage reorder schedules with ease.
            </p>
          </motion.div>
        )}

        {/* Bottom Left Text */}
        {showText && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-4 space-y-2 text-left lg:mb-20 md:ml-10"
          >
            <h2 className="text-xl font-bold text-[#000000] mb-2 lg:text-2xl font-helvetica md:text-xl">
              Sales & Billing Reports
            </h2>
            <p className="text-xs text-gray-800 font-poppins leading-relaxed lg:text-[20px] md:text-[16px]">
              Access and export daily, weekly, or custom billing summaries, tax reports, and sales trends.
            </p>
          </motion.div>
        )}

        {/* Bottom Right Text */}
        {showText && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1}}
            className="mt-8 space-y-2 text-left lg:mt-20 md:mt-14"
          >
            <h2 className="text-xl font-bold text-[#000000] mb-2 lg:text-2xl font-helvetica md:text-xl">
              Mobile App Access
            </h2>
            <p className="text-xs text-gray-800 font-poppins leading-relaxed lg:text-[20px] md:text-[16px]">
              Get real-time insights, approve actions, or check sales remotely via the PetroLynk mobile app.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Features;
