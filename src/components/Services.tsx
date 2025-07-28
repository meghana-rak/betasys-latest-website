import React from 'react';
import { Brain, Cpu, Cloud, Cog, BarChart3, Bot } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useParallax';

const Services = () => {
  const { isVisible, setElement } = useIntersectionObserver();

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Consulting",
      description: "Expert AI solutions tailored to mid-sized businesses—create competitive advantage."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Generative AI",
      description: "Expert AI solutions tailored to mid-sized businesses—create competitive advantage."
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & Data Engineering",
      description: "Expert AI solutions tailored to mid-sized businesses—create competitive advantage."
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Product Engineering",
      description: "Expert AI solutions tailored to mid-sized businesses—create competitive advantage."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "AI-Powered Data Analytics",
      description: "Expert AI solutions tailored to mid-sized businesses—create competitive advantage."
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Agentic AI",
      description: "Expert AI solutions tailored to mid-sized businesses—create competitive advantage."
    }
  ];

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
        <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Growing Businesses Choose Betasys AI
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Transform your business with intelligent solutions designed for your specific growth goals.
          </p>
        </div>
        
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-400 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}>
          {services.map((service, index) => (
            <div key={index} className="bg-slate-800 p-8 rounded-xl hover:bg-slate-700 transition-colors group">
              <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;