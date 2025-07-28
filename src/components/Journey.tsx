import React from 'react';
import { useIntersectionObserver } from '../hooks/useParallax';

const Journey = () => {
  const { isVisible, setElement } = useIntersectionObserver();

  return (
    <section 
      ref={setElement}
      className={`py-20 bg-slate-900 transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-16'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-16 transition-all duration-1000 delay-200 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-green-400 font-semibold text-sm uppercase tracking-wide mb-4">HOW IT WORKS</p>
          <h2 className="text-4xl font-bold text-white mb-6">
            Your Journey to AI Implementation
          </h2>
          <p className="text-gray-300 text-lg max-w-4xl">
            A simple, low-risk path to adopting AI that fits your business—designed for clarity, confidence, and measurable results.
          </p>
        </div>
        
        <div className={`relative transition-all duration-1000 delay-400 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}>
          {/* Timeline line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          
          {/* Timeline dots */}
          <div className="hidden md:flex justify-between items-center mb-16 relative">
            <div className="w-4 h-4 bg-green-400 rounded-full shadow-lg shadow-green-400/50"></div>
            <div className="w-4 h-4 bg-green-400 rounded-full shadow-lg shadow-green-400/50"></div>
            <div className="w-4 h-4 bg-green-400 rounded-full shadow-lg shadow-green-400/50"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-4">
                1. Discovery & Solution Design
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We begin by understanding your unique business challenges and identifying where AI can add real value.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-4">
                2. Proof of Concept
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We develop a working prototype so you can validate the solution with minimal investment and low risk.
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold text-white mb-4">
                3. Discovery & Solution Design
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Once validated, we scale the AI solution across your business operations for lasting impact and ROI.
              </p>
            </div>
          </div>
        </div>
        
        <div className={`text-center transition-all duration-1000 delay-600 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Start Your AI Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Journey;