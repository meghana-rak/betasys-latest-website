import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useParallax';
import bgImage from '../../assests/Whatwedeliver/bg-img1.png';

const BusinessTransform = () => {
  const { isVisible, setElement } = useIntersectionObserver();

  return (
    <section
      ref={setElement}
      className={`py-10  transition-all duration-1000 ${isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-16'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" mt-6 mb-12 ">
         <p className="text-[#00A148] font-medium text-[18px] uppercase tracking-wide font-poppins">What We Deliver</p>
          <h2 className="md:text-[38px] text-[28px]leading-tight  font-helvetica font-regular text-[#042337] mt-[4px] mb-[1px]">
            How AI Solutions <span className='font-bold'>Transform Your Business</span>
          </h2>
         <p className="max-w-5xl text-gray-700 font-poppins  text-[18px] md:text-[22px]  mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien.  </p>      </div>

        <div className={`grid lg:grid-cols-2 gap-6 transition-all duration-1000 delay-500 ${isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12'
          }`}>
          {/* Left side - Large card */}
          <div className="p-4 md:p-8 rounded-2xl text-white relative overflow-hidden  bg-cover bg-no-repeat bg-center "
            style={{
              backgroundImage: `url(${bgImage})`
            }}>

            <div className="relative z-10">
              <p className="text-green-400 font-helvetica  text-[18px] md:text-[20px] uppercase tracking-wide ">
                INCREASE OPERATIONAL EFFICIENCY
              </p>
              <h3 className=" font-helvetica text-[30px] md:text-[42px] leading-tight font-semibold mt-3 md:mt-8 mb-2 md:mb-2  md:mr-10 ">
                Reduced support response  time by 50% using AI chatbots.
              </h3>
              <p className="text-gray-300 leading-relaxed mb-3 md:mb-8 text-sm md:text-[20px] font-poppins">
                See how our AI solutions streamline workflows and eliminate manual bottlenecks.
              </p>
              <div className='flex md:justify-end'>
                <button className="bg-[#00A148] hover:bg-[rgb(58,176,99)] my-1  text-white px-3 py-2 flex items-center md:px-5 md:py-3 lg:px-8 lg:py-4 rounded-lg font-semibold transition-colors gap-2">
                  <ArrowRight className="w-5 h-5" />
                  Explore Solution
                </button>
              </div>
            </div>
          </div>

          {/* Right side - Two stacked cards */}
          <div className="space-y-4">
            {/* Top card */}
            <div className="p-4 md:p-8 rounded-2xl text-white relative overflow-hidden  bg-cover bg-no-repeat bg-center "
              style={{
                backgroundImage: `url(${bgImage})`
              }}>
              <div className="relative z-10">
                <div className="flex justify-between items-start md:mb-4">
                  <p className="text-green-400 font-helvetica  text-[18px] md:text-[20px] uppercase tracking-wide md:mb-2">
                    ENHANCE CUSTOMER EXPERIENCE
                  </p>
                  <ArrowUpRight className="w-6 h-6 text-gray-50" />
                </div>
                <h3 className="font-helvetica leading-tight text-[24px] md:text-[36px]  font-semibold mb-4">
                  35% boost in efficiency via workflow automation.
                </h3>
              </div>
            </div>

            {/* Bottom card */}
            <div className="p-4 md:p-8 rounded-2xl text-white relative overflow-hidden  bg-cover bg-no-repeat bg-center "
              style={{
                backgroundImage: `url(${bgImage})`
              }}>
              <div className="relative z-10">
                <div className="flex justify-between items-start md:mb-4">
                  <p className="text-green-400 font-helvetica  text-[18px] md:text-[20px] uppercase tracking-wide md:mb-2">
                    ENHANCE CUSTOMER EXPERIENCE
                  </p>
                  <ArrowUpRight className="w-6 h-6 text-gray-50" />
                </div>
                <h3 className="font-helvetica leading-tight text-[24px] md:text-[36px] max-w-xl font-semibold mb-4  ">
                  35% boost in efficiency via workflow automation.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessTransform;