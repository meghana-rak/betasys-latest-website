import React from 'react';
import { useIntersectionObserver } from '../hooks/useParallax';

const CTA = () => {
  const { isVisible, setElement } = useIntersectionObserver();

  return (
    <section 
      ref={setElement}
      className={`py-16 my-12 bg-gradient-to-r from-green-500 to-green-600 transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-16'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col md:flex-row justify-between items-center transition-all duration-1000 delay-200 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-white mb-2">
              Book an AI Strategy Session
            </h2>
            <p className="text-green-100">
              Ready to explore how AI can transform your business? Let's discuss your goals.
            </p>
          </div>
          <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;