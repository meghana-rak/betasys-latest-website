import React from 'react';
import { useParallax } from '../hooks/useParallax';

const Hero = () => {
  const scrollY = useParallax();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-slate-900"></div>
      
      {/* Flowing wave design */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-64 overflow-hidden"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`
        }}
      >
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#059669" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#047857" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,208C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
        
        {/* Additional wave layers for depth */}
        <svg
          className="absolute bottom-0 w-full h-full opacity-60"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#10b981"
            fillOpacity="0.2"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,176C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>

        {/* Grid pattern overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
          <div className="w-full h-full bg-gradient-to-t from-green-500/10 to-transparent"></div>
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}
          ></div>
        </div>
      </div>
      
      <div 
        className="relative max-w-7xl  px-4 sm:px-6 lg:px-8 py-32 z-10"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`
        }}
      >
        <div className="max-w-4xl leading-loose ">
          <h1 className="font-helvetica text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 ">
            AI Business Solutions Tailored for Your Growth
          </h1>
          <p className="font-poppins text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Practical artificial intelligence solutions that deliver measurable business outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25">
              Explore Solutions
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;