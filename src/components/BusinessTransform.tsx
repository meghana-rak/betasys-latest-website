import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useParallax';

const BusinessTransform = () => {
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
        <div className={`mb-4 transition-all duration-1000 delay-200 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-green-600 font-semibold text-sm uppercase tracking-wide">WHAT WE DELIVER</p>
        </div>
        
        <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 delay-300 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          How AI Solutions Transform Your Business
        </h2>
        
        <p className={`text-gray-600 text-lg mb-16 max-w-4xl transition-all duration-1000 delay-400 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris 
          venenatis, felis scelerisque aliquet lacinia, nulla nisl venenatis odio, id blandit mauris ipsum id sapien.
        </p>
        
        <div className={`grid lg:grid-cols-2 gap-8 transition-all duration-1000 delay-500 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}>
          {/* Left side - Large card */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl text-white relative overflow-hidden">
            {/* Subtle grid pattern */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }}
            ></div>
            
            <div className="relative z-10">
              <p className="text-green-400 font-semibold text-sm uppercase tracking-wide mb-4">
                INCREASE OPERATIONAL EFFICIENCY
              </p>
              <h3 className="text-3xl font-bold mb-6 leading-tight">
                Reduced support response time by 50% using AI chatbots.
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                See how our AI solutions streamline workflows and eliminate manual bottlenecks.
              </p>
              <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
                <ArrowUpRight className="w-5 h-5" />
                Explore Solution
              </button>
            </div>
          </div>
          
          {/* Right side - Two stacked cards */}
          <div className="space-y-8">
            {/* Top card */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl text-white relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}
              ></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-green-400 font-semibold text-sm uppercase tracking-wide">
                    ENHANCE CUSTOMER EXPERIENCE
                  </p>
                  <ArrowUpRight className="w-5 h-5 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold">
                  35% boost in efficiency via workflow automation.
                </h3>
              </div>
            </div>
            
            {/* Bottom card */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl text-white relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}
              ></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-green-400 font-semibold text-sm uppercase tracking-wide">
                    REDUCE COSTS THROUGH AUTOMATION
                  </p>
                  <ArrowUpRight className="w-5 h-5 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold">
                  Saved $120k/year by automating repetitive tasks.
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