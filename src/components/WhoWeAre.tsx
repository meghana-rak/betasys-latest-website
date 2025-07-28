import React from 'react';
import { useIntersectionObserver } from '../hooks/useParallax';

const WhoWeAre = () => {
  const { isVisible, setElement } = useIntersectionObserver();

  return (
    <section 
      ref={setElement}
      className={`py-20 bg-gray-50 transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-16'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <p className="text-green-600 font-semibold text-sm uppercase tracking-wide">WHO WE ARE</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Driving Business Growth Through AI
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              At Betasys, we specialize in turning complex AI technologies into practical solutions for businesses of all sizes. Our team blends deep technical expertise with a strong understanding of business needs to deliver custom-built AI tools that improve efficiency, productivity, and decision-making across various industries. Whether you're just starting your AI journey or scaling your existing systems, we're here to guide you every step of the way.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Learn Our Approach
            </button>
          </div>
          
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
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;