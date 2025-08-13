import React from 'react';
import { useIntersectionObserver } from '../../hooks/useParallax';

const Journey = () => {
  const { isVisible, setElement } = useIntersectionObserver();

  return (
    <section
      ref={setElement}
      className={`py-10 md:py-20 bg-cover bg-[#022334] bg-no-repeat bg-center  transition-all duration-1000 ${isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-16'
        }`}

    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" mb-4 ">
          <p className="text-[#00A148] font-medium text-[18px] uppercase tracking-wide font-poppins">How It Works</p>
          <h2 className="md:text-[38px] text-[28px] font-helvetica leading-tight font-regular text-[#E8E8E8] mt-[4px] mb-[1px]">
            Your Journey to  <span className='font-bold'>AI Implementation</span>
          </h2>
          <p className="max-w-3xl text-[#E8E8E8] font-poppins  text-[18px] md:text-[22px]  mb-8">
            A simple, low-risk path to adopting AI that fits your business—designed for clarity, confidence, and measurable results.         </p>
        </div>

        <div className={`relative transition-all duration-1000 delay-400 ${isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12'
          }`}>
        
          <div className="hidden md:flex justify-between items-center mb-16 relative">
            {/* Line centered behind the dots */}
            <div className="absolute top-1/2 left-0 right-0 h-px border-t border-dotted border-green-400 transform -translate-y-1/2 z-0" />
            {/* Timeline dots */}
            <div className="w-3 h-3 bg-green-400 rounded-full z-10 shadow-[0_0_12px_6px_rgba(34,197,94,0.5)]"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full z-10 shadow-[0_0_12px_6px_rgba(34,197,94,0.5)]"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full z-10 shadow-[0_0_12px_6px_rgba(34,197,94,0.5)]"></div>
          </div>


          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className=" text-center ">
              <h3 className="md:text-[28px] text-24px font-bold text-white mb-2 md:mb-3 ">
                1. Discovery & Solution Design
              </h3>
               <p className="text-gray-300 leading-relaxed text-[18px] md:text-[20px] lg:text-[22px]">
                We begin by understanding your unique business challenges and identifying where AI can add real value.
              </p>
            </div>

            <div className="text-center">
              <h3 className="md:text-[28px] text-24px font-bold text-white mb-2 md:mb-3 ">
                2. Proof of Concept
              </h3>
              <p className="text-gray-300 leading-relaxed text-[18px] md:text-[20px] lg:text-[22px]">
                We develop a working prototype so you can validate the solution with minimal investment and low risk.
              </p>
            </div>

            <div className="text-center ">
              <h3 className="md:text-[28px] text-24px font-bold text-white mb-2 md:mb-3 ">
                3. Discovery & Solution Design
              </h3>
              <p className="text-gray-300 leading-relaxed text-[18px] md:text-[20px] lg:text-[22px]">
                Once validated, we scale the AI solution across your business operations for lasting impact and ROI.
              </p>
            </div>
          </div>
        </div>

        <div className={`text-center transition-all duration-1000 delay-600 ${isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
          }`}>
          <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 md:px-8 md:py-3 rounded-lg font-semibold text-[16px] md:text-[20px] transition-colors">
            Start Your AI Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Journey;