import React from 'react';
import { Brain, Cpu, Cloud, Cog, BarChart3, Bot } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useParallax';
import background from '../assests/Whatwedo/bg-img.png'

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
      className={`py-10 md:py-20 bg-cover bg-no-repeat bg-center  transition-all duration-1000 ${isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-16'
        }`}
      style={{
        backgroundImage: "url('/src/assests/Whatwedo/bg-img.png')"
      }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" mb-4 ">
          <p className="text-[#00A148] font-medium text-sm uppercase tracking-wide font-poppins">WHAT WE DO</p>
          <h2 className="md:text-4xl text-2xl font-helvetica font-regular  text-white my-1">
            Why Growing Businesses <span className='font-bold'>Choose Betasys AI</span>
          </h2>
          <p className="max-w-4xl text-[#E8E8E8] font-poppins text-xs md:text-lg leading-relaxed mb-8">
            Built for agility, clarity, and real business impact—Betasys stands apart from legacy giants.         </p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-400 ${isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12'
          }`}>
          {services.map((service, index) => (
            <div key={index} className="py-3 md:py-12 gap-3 flex ">
              <div className="text-white ">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-helvetica font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-xs md:text-lg font-poppins leading-relaxed font-light">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;