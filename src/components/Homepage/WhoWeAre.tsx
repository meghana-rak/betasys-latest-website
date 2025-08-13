import React, { useEffect, useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useParallax';
import wave from '../../assests/Hero/Property 1=Default.png'
import wave1 from '../../assests/Hero/Property 1=Default (1).png';
import wave2 from '../../assests/Hero/Property 1=Default (2).png';
import wave3 from '../../assests/Hero/Property 1=Default (3).png';
import img from '../../assests/Whoweare/Rectangle 12.png';
import img1 from '../../assests/Whoweare/RectangleS.png';
import img2 from '../../assests/Whoweare/Rectangle 13.png';
import img3 from '../../assests/Whoweare/Rectangle 14.png';

const WhoWeAre = () => {
  const { isVisible, setElement } = useIntersectionObserver();
  const waves = [wave, wave3, wave2, wave1];
  const [waveIndex, setWaveIndex] = useState(0);

  useEffect(() => {
    let interval;
    const handleHover = () => {
      interval = setInterval(() => {
        setWaveIndex((prev) => (prev + 1) % waves.length);
      }, 400);
    };

    const handleLeave = () => clearInterval(interval);

    const section = document.getElementById("who-section");
    section?.addEventListener("mouseenter", handleHover);
    section?.addEventListener("mouseleave", handleLeave);

    return () => {
      section?.removeEventListener("mouseenter", handleHover);
      section?.removeEventListener("mouseleave", handleLeave);
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      id="who-section"
      ref={setElement}
      className={`py-10 md:py-20 bg-gray-50 transition-all duration-1000 ${isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-16'
        }`}
    >
      <div
        className="absolute bottom-0 -left-2/3 right-28 h-96 overflow-hidden"      >
        <img
          src={wave}
          alt="wave"
          className="absolute w-full opacity-15 pointer-events-none transition-all duration-500 ease-in-out"
          style={{
            transform: 'scaleX(-1)', // horizontal flip

          }}
        />

      </div>
      <div className="relative container  mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" mb-4 ">
          <p className="text-[#00A148] font-medium text-[18px] uppercase tracking-wide font-poppins">WHO WE ARE</p>
          <h2 className="md:text-[38px] text-[28px] leading-tight font-helvetica font-regular text-[#042337] mt-[4px] mb-[1px]">
            Driving Business <span className='font-bold '> Growth Through AI</span>
          </h2>
          <p className="max-w-3xl text-gray-700 font-poppins  text-[18px] md:text-[22px]  mb-8">
            At Betasys, we blend advanced AI with business insight to build solutions that accelerate innovation and results.          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          <div className="mx-auto sm:pr-28 md:pr-0">
            <div className='flex gap-3'>
              <img
                src={img}
                alt="AI Core"
                className=" rounded-xl w-1/4 h-1/4 object-cover"
              />
              <div className="relative w-full flex justify-center md:justify-start">
                <img
                  src={img1}
                  alt="AI Core"
                  className="z-10 rounded-xl md:w-5/6  object-cover"
                />
                <img
                  src={img2}
                  alt="Overlay Visual"
                  className="rounded-xl absolute bottom-[-30px] -left-[50px] md:-left-[100px] md:w-[200px]  h-2/5 shadow-xl"
                />
                <img
                  src={img3}
                  alt="Overlay Visual"
                  className="rounded-xl z-20 absolute bottom-[-30px] -right-[20px] md:-right-[50px] md:w-[200px]  h-2/5 shadow-xl"
                />
              </div>
            </div>
          </div>
          <div>
            <p className='font-poppins text-gray-700  text-[18px] md:text-[22px]'>At Betasys, we specialize in turning complex AI technologies into practical, results-driven solutions for businesses of all sizes. Our team blends deep technical expertise with a strong understanding of business needs to deliver custom-built AI tools that improve efficiency, enhance customer experiences, and drive data-informed decisions. Whether you're just starting your AI journey or scaling your existing systems, we're here to guide you every step of the way.</p>
            <button className="bg-[#00A148] hover:bg-[rgb(58,176,99)] my-6  text-white px-3 py-2 md:px-5 md:py-3 lg:px-8 lg:py-4 rounded-lg font-semibold transition-colors text-[16px] md:text-[20px] ">
              Explore Our AI Expertise
            </button>
          </div>


        </div>
      </div>

    </section>
  );
};

export default WhoWeAre;