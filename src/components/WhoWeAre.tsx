import React, { useEffect, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useParallax';
import wave from '../assests/Homepage/Property 1=Default.png'
import wave1 from '../assests/Homepage/Property 1=Default (1).png';
import wave2 from '../assests/Homepage/Property 1=Default (2).png';
import wave3 from '../assests/Homepage/Property 1=Default (3).png';

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
          src={waves[waveIndex]}
          alt="wave"
          className="absolute opacity-40 w-full pointer-events-none transition-all duration-500 ease-in-out"
          style={{
            transform: 'scaleX(-1)', // horizontal flip
           
          }}
        />

      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" mb-4 ">
          <p className="text-[#00A148] font-medium text-sm uppercase tracking-wide font-poppins">WHO WE ARE</p>
          <h2 className="text-4xl font-helvetica font-regular text-gray-900 my-1">
            Driving Business <span className='font-bold'> Growth Through AI</span>
          </h2>
          <p className="max-w-4xl text-gray-600 font-poppins text-lg  mb-8">
            At Betasys, we blend advanced AI with business insight to build solutions that accelerate innovation and results.          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <img src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="AI Technology" className="w-full h-32 object-cover rounded-lg" />
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <img src="https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Business Analytics" className="w-full h-40 object-cover rounded-lg" />
              </div>
            </div>
            <div className="mt-8">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <img src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Data Science" className="w-full h-48 object-cover rounded-lg" />
              </div>
            </div>
          </div>
          <div>
            <p className='font-poppins text-gray-700'>At Betasys, we specialize in turning complex AI technologies into practical, results-driven solutions for businesses of all sizes. Our team blends deep technical expertise with a strong understanding of business needs to deliver custom-built AI tools that improve efficiency, enhance customer experiences, and drive data-informed decisions. Whether you're just starting your AI journey or scaling your existing systems, we're here to guide you every step of the way.</p>
            <button className="bg-[#00A148] hover:bg-[rgb(58,176,99)] my-3  text-white px-3 py-2 md:px-5 md:py-3 lg:px-8 lg:py-4 rounded-lg font-semibold transition-colors">
              Explore Our AI Expertise
            </button>
          </div>


        </div>
      </div>

    </section>
  );
};

export default WhoWeAre;