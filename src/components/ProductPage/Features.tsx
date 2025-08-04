import React from "react";
import features from "../../assests/ProductPage/Feature.png"

const Features = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-14 md:px-0 lg:py-16 bg-gradient-to-r from-white to-green-50 sm:py-20">
      <div className="relative grid items-start w-full grid-cols-1 max-w-7xl md:grid-cols-3 sm:grid-cols-2 gap-y-8">
        {/* Top Left Text */}
        <div className="mt-10 space-y-2 tex-left md:ml-10">
          <h2 className="text-xl font-bold text-black font-helvetica">Real-Time Dashboard</h2>
          <p className="text-sm leading-relaxed text-black md:text-[18px]  font-poppins">
            Monitor fuel sales, stock levels, shift
            summaries, and performance metrics in
            one intuitive view.
          </p>
        </div>
 
        
        {/* Center Image */}
        <div className="flex justify-center row-span-2 sm:my-20">
          <img
            src={features}
            alt="Dashboard Phone"
            className="w-[240px] sm:w-[300px] md:w-[350px] lg:w-[420px] xl:w-[460px]"
          />
        </div>
 
        
        {/* Top Right Text */}
        <div className="mt-10 space-y-2 text-left lg:mt-32 ">
          <h2 className="text-xl font-bold text-black font-helvetica">Inventory Management</h2>
          <p className="text-sm leading-relaxed text-black md:text-[18px] font-poppins">
            Automatically track fuel and product levels,
            receive alerts, and manage reorder schedules
            with ease.
          </p>
        </div>

       <div className="mb-4 space-y-2 tex-left lg:mb-20 md:ml-10 ">
          <h2 className="text-xl font-bold text-black font-helvetica">Sales & Billing Reports</h2>
          <p className="text-sm leading-relaxed text-black md:text-[18px] font-poppins">
            Access and export daily, weekly, or custom
            billing summaries, tax reports, and sales trends.
          </p>
        </div>  
     

        {/* Bottom Right Text */}
        <div className="space-y-2 text-left lg:mt-20 ">
          <h2 className="text-xl font-bold text-black font-helvetica">Mobile App Access</h2>
          <p className="text-sm leading-relaxed text-black md:text-[18px] font-poppins">
            Get real-time insights, approve actions, or
            check sales remotely via the PetroLynk mobile app.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
