import React from 'react';
import { useIntersectionObserver } from '../../hooks/useParallax';
import aws from '../../assests/Partners/aws-partner 1.png';
import nvidia from'../../assests/Partners/nvidia-inception-logo 2.png'

const Partners = () => {
  const { isVisible, setElement } = useIntersectionObserver();

  return (
    <section
      ref={setElement}
      className={`py-10 md:py-20 transition-all duration-1000 ${isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-16'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 md:gap-8 items-center">
          {/* Left Text Section - 60% (3 columns) */}
          <div className="md:col-span-3">
            <p className="text-[#00A148] font-medium text-sm uppercase tracking-wide font-poppins">Our Partners</p>
            <h2 className="text-2xl md:text-3xl font-helvetica font-regular text-gray-900 my-1">
              Powered by <span className="font-bold">Leading AI Technologies</span>
            </h2>
            <p className="max-w-4xl text-gray-600 font-poppins text-xs md:text-[20px] leading-relaxed mb-8">
              Explore expert content, practical guides, and real-world use cases to unlock AI’s potential for your business.
            </p>
          </div>

          {/* Right Logos Section - 40% (2 columns) */}
          <div
            className={`md:col-span-2 flex flex-wrap justify-center items-center gap-8 transition-all duration-1000 delay-400 ${isVisible ? ' translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {/* NVIDIA */}
            <div className="  h-auto flex justify-center items-center">
              <img
                src={nvidia}
                alt="NVIDIA"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* AWS */}
            <div className=" h-auto flex justify-center items-center">
              <img
                src={aws}
                alt="AWS"
                className="w-full h-auto object-contain"
              />
            </div>
            
          </div>

        </div>
      </div>

    </section>
  );
};

export default Partners;