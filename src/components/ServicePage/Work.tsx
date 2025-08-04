import React from "react";
import { useIntersectionObserver } from "../../hooks/useParallax";

const clients = [
  "Enterprises seeking AI transformation",
  "Startups building AI-first products",
  "Non-tech companies exploring automation",
  "Government and education institutions",
];

const testimonials = [
  {
    quote:
      "“Our AI strategy session helped us reduce customer churn by 35% within six months. The team not only guided us through the tech but helped reimagine our entire customer experience.”",
    author: "- COO, Retail Tech Company",
  },
  {
    quote:
      "“Our AI strategy session helped us reduce customer churn by 35% within six months. The team not only guided us through the tech but helped reimagine our entire customer experience.”",
    author: "- COO, Retail Tech Company",
  },
  {
    quote:
      "“Our AI strategy session helped us reduce customer churn by 35% within six months. The team not only guided us through the tech but helped reimagine our entire customer experience.”",
    author: "- COO, Retail Tech Company",
  },
];

const Work: React.FC = () => {
  const { isVisible, setElement } = useIntersectionObserver();

  return (
    <section
      ref={setElement}
      className={`py-10  transition-all duration-1000 bg-white text-[#000000]${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="my-1 text-2xl text-gray-900 md:text-3xl font-helvetica font-regular">
          Who We <span className="font-bold">Work With</span>
        </h2>
        <p className="max-w-4xl mt-2 mb-10 text-sm leading-relaxed text-gray-800 md:text-justify font-regular font-poppins md:text-[20px]">
          Delivering Value Across Sectors and Scales identify high-impact
          opportunities for artificial intelligence, assess readiness, and
          implement scalable AI
        </p>
        <div
          className={` transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 ">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-[#022333] text-white rounded-2xl px-5 sm:px-6 pt-6 pb-6 sm:pt-7 sm:pb-7 flex flex-col justify-start relative"
              >
                <p className="text-center text-[17px] sm:text-[19px] font-poppins leading-snug mt-2">
                  {" "}
                  {client}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div  ref={setElement}
      className={`py-10  transition-all duration-1000 bg-white text-[#000000]${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}>
      <div className="px-4 mx-auto mt-8 md:mt-14 max-w-7xl sm:px-6 lg:px-8">
        <h2 className="my-1 text-2xl text-gray-900 md:text-3xl font-helvetica font-regular">
          Success <span className="font-bold">Stories</span>
        </h2>
        <p className="max-w-4xl mt-2 mb-10 text-sm leading-relaxed text-gray-800 md:text-justify font-regular font-poppins md:text-[20px]">
          Delivering Value Across Sectors and Scales identify high-impact
          opportunities for artificial intelligence, assess readiness, and
          implement scalable AI
        </p>
 
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#022334] via-[#022334] to-[#06689A] text-white rounded-2xl shadow-md md:p-6 p-4"
            >
              <p className="mb-8 text-xs font-light leading-relaxed font-poppins ">
                {item.quote}
              </p>
              <p className="font-semibold text-sm text-[#FFFFFF] font-poppins">
                {item.author}
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
