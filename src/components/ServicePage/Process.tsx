import React from "react";
import ReactangleP from "../../assests/Servicepage/RectangleP.png";
import { useIntersectionObserver } from "../../hooks/useParallax";

const features = [
  {
    title: "Customer Experience AI",
    description:
      "Personalize interactions and automate support with AI-driven chatbots and insights.",
  },
  {
    title: "AI-Powered Automation",
    description:
      "Streamline repetitive tasks and boost operational efficiency using AI workflows",
  },
  {
    title: "Custom AI Development",
    description:
      "We build custom AI solutions designed around your business goals, processes and industry needs.",
  },
  {
    title: "Customer Experience AI",
    description:
      "Personalize interactions and automate support with AI-driven chatbots and insights.",
  },
  {
    title: "AI-Powered Automation",
    description:
      "Streamline repetitive tasks and boost operational efficiency using AI workflows",
  },
  {
    title: "Custom AI Development",
    description:
      "We build custom AI solutions designed around your business goals, processes and industry needs.",
  },
];

const Process: React.FC = () => {
  const { isVisible, setElement } = useIntersectionObserver();

  return (
    <section
      ref={setElement}
      className={`py-10  transition-all duration-1000 bg-[#022334] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="py-10 mb-4 md:py-6">
          <p className="text-[#00A148] font-medium text-sm uppercase tracking-wide font-poppins">
            Our Core Capabilities
          </p>
          <h2 className="my-1 text-2xl font-semibold text-white md:text-3xl font-helvetica font-regular">
            Our Consulting Process
          </h2>
          <p className="text-[#D4D4D4] max-w-4xl  text-xs leading-relaxed font-poppins md:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque
            aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum
            id sapien.
          </p>
        </div>
         <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-400 ${isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12'
          }`}>
        
       
  {features.map((item, index) => (
    <div
      key={index}
      className=" flex gap-3 py-3 md:py-12 relative min-h-[200px] rounded-[26px] border border-white/30 bg-[#F5F5F5]/20 backdrop-blur-[4px] overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg"
    >
      {/* Optional background image */}
      {/* <img
        src={ReactangleP}
        alt="Background"
        className="object-cover w-full h-full"
      /> */}
      
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h3 className="mb-2 text-xl font-semibold text-white font-helvetica">
          {item.title}
        </h3>
        <p className="text-xs font-light leading-relaxed text-gray-300 md:text-sm font-poppins">
          {item.description}
        </p>
      </div>
    </div>
  ))}


        </div>

        
       
      </div>
    </section>
  );
};

export default Process;
