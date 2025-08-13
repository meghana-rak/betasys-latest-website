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
      className={`md:py-10 py-3 transition-all duration-1000 bg-[#022334] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
    >
      <div className="px-4 mx-auto container sm:px-6 lg:px-8">
        <div className="py-10 mb-4 md:py-6">
          <p className="text-[#00A148] font-medium text-[18px] uppercase tracking-wide font-poppins">
            Our Core Capabilities
          </p>
          <h2 className="md:text-[38px] text-[28px] leading-tight font-helvetica font-regular text-white mt-[4px] mb-[1px]">
            Our Consulting <span className="font-bold"> Process</span>
          </h2>
          <p className="text-[#D4D4D4] max-w-3xl my-4  font-poppins  text-[18px] md:text-[22px] ">
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
              className="  gap-3 relative min-h-[200px] rounded-[26px] border border-white/30 bg-[#F5F5F5]/10 overflow-hidden transition-all duration-300 shadow-md "
            >

              <div className=" inset-0 flex flex-col items-center justify-center p-3  md:p-8 text-center">
                <h3 className="mb-2 text-[24px] md:text-[28px] font-semibold text-white font-helvetica">
                  {item.title}
                </h3>
                <p className="text-[16px] font-light leading-relaxed text-[#D4D4D4] md:text-[20px] font-poppins">
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
