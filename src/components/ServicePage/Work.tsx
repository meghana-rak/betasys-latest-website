import React from "react";
import { useIntersectionObserver } from "../../hooks/useParallax";

const clients = [
  "Enterprises seeking AI transformation",
  "Startups building AI-first products",
  "Non-tech companies exploring automation",
  "Government and education institutions",
];



const Work: React.FC = () => {
  const { isVisible, setElement } = useIntersectionObserver();

  return (
    <section
      ref={setElement}
      className={`py-10  transition-all duration-1000 bg-white text-[#000000]${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="md:text-[38px] text-[28px] leading-tight  font-helvetica font-regular text-[#042337] my-4">
          Who We <span className="font-bold">Work With</span>
        </h2>
        <p className="max-w-3xl text-gray-700 font-poppins  text-[18px] md:text-[22px]  mb-8">
          Delivering Value Across Sectors and Scales identify high-impact
          opportunities for artificial intelligence, assess readiness, and
          implement scalable AI
        </p>
        <div
          className={` transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 ">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-[#022333] text-white rounded-2xl px-5 sm:px-6 pt-6 pb-6 sm:pt-7 sm:pb-7 flex flex-col justify-start relative"
              >
                <p className="text-center text-[18px] md:text-[22px] font-poppins leading-snug mt-2">
                  {" "}
                  {client}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    
    </section>
  );
};

export default Work;
