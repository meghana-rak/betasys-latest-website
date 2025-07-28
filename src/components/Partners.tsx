import React from 'react';
import { useIntersectionObserver } from '../hooks/useParallax';

const Partners = () => {
  const { isVisible, setElement } = useIntersectionObserver();

  return (
    <section 
      ref={setElement}
      className={`py-16 bg-gray-50 transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-16'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 delay-200 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-green-600 font-semibold text-sm uppercase tracking-wide mb-2">OUR PARTNERS</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powered by Leading AI Technologies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Leading with industry standard technologies and partnerships to deliver excellence in AI solutions.
          </p>
        </div>
        
        <div className={`flex flex-wrap justify-center items-center gap-8 opacity-60 transition-all duration-1000 delay-400 ${
          isVisible 
            ? 'opacity-60 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-green-600 text-white px-6 py-3 rounded font-bold text-xl">NVIDIA</div>
          <div className="text-orange-500 font-bold text-2xl">aws</div>
          <div className="text-blue-600 font-bold text-xl">Google Cloud</div>
          <div className="text-gray-700 font-bold text-xl">PARTNER NETWORK</div>
        </div>
      </div>
    </section>
  );
};

export default Partners;