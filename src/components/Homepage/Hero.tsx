import React, { useState, useEffect } from 'react';
import { useParallax } from '../../hooks/useParallax';
import wave from '../../assests/Hero/Property 1=Default.png'
import wave1 from '../../assests/Hero/Property 1=Default (1).png';
import wave2 from '../../assests/Hero/Property 1=Default (2).png';
import wave3 from '../../assests/Hero/Property 1=Default (3).png';
import bgImage from '../../assests/Hero/herobg.png'

const Hero = () => {
  const scrollY = useParallax();
  const waves = [wave, wave1, wave2, wave3];
  const [waveIndex, setWaveIndex] = useState(0);

  useEffect(() => {
    let interval;
    const handleHover = () => {
      interval = setInterval(() => {
        setWaveIndex((prev) => (prev + 1) % waves.length);
      }, 400);
    };

    const handleLeave = () => clearInterval(interval);

    const section = document.getElementById("hero-section");
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
      id="hero-section"
      className="lg:min-h-screen bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${bgImage})`
      }}
    >
      <div >

        {/* Flowing wave design */}
        <div
          className="hidden lg:block absolute bottom-2 w-full left-0 right-0 h-64 overflow-hidden"      >
          <img
            src={waves[waveIndex]}
            alt="wave"
            className="absolute  bottom-2 left-0 w-full pointer-events-none transition-all duration-700 ease-in-out"
          />

        </div>
      </div>
      <div
        className=" pb-2 pt-32 md:pb-32 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        
      >
        <div className="pb-3  md:pt-10 md:pb-0">
            <h1
            className="max-w-3xl font-helvetica text-[36px] md:text-4xl lg:text-[68px] font-bold text-white mb-6 leading-tight lg:leading-[74px]"
            >
            AI Business Solutions Tailored for Your Growth
            </h1>
          <p className="font-poppins text-[18px] md:text-[22px] text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Practical artificial intelligence solutions that deliver measurable business outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#007635] hover:bg-[#007635] text-white  text-[16px] px-3 py-2 md:px-5 md:py-3 lg:px-8 lg:py-4 rounded-lg font-semibold md:text-[22px] transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25">
              Explore Solutions
            </button>
            <button className="border-2 border-white text-white hover:bg-white text-[16px] px-3 py-2 hover:text-slate-900   md:px-5 md:py-3 lg:px-8 lg:py-4 rounded-lg font-semibold md:text-[22px] transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
        
      </div>
      {/* <div
          className="block lg:hidden bottom-2 w-full left-0 right-0 "      >
          <img
            src={wave}
            alt="wave"
            className="  bottom-2 left-0 w-full "
          />
        </div> */}
    </section>
  );
};

export default Hero;