import React from 'react';
import { useIntersectionObserver } from '../hooks/useParallax';

const Footer = () => {
  const { isVisible, setElement } = useIntersectionObserver();

  return (
    <footer 
      ref={setElement}
      className={`bg-slate-900 text-white py-16 transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-16'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid md:grid-cols-4 gap-8 transition-all duration-1000 delay-200 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <div>
            <div className="text-2xl font-bold mb-4">Betasys<span className="text-green-400">AI</span></div>
            <p className="text-gray-300">
              Transforming businesses through intelligent AI solutions.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">AI Consulting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Generative AI</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Analytics</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>hello@betasysai.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className={`border-t border-slate-800 mt-12 pt-8 text-center text-gray-400 transition-all duration-1000 delay-400 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        }`}>
          <p>&copy; 2024 BetasysAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;