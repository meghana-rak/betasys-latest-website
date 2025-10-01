import React from "react";
import { useIntersectionObserver } from "../../hooks/useParallax";
import bgImage from "../../assests/Whatwedeliver/bg-img1.png";

const features = [
  {
    title: "Practical Approach to AI",
    description:
      "We focus on business outcomes first, technology second. Every project starts with understanding your specific challenges and identifying where AI can deliver the most value.",
  },
  {
    title: "Low-Risk Implementation",
    description:
      "Our free POC program lets you see results before making major investments. We believe in proving value early and scaling only when the business case is clear.",
  },
  {
    title: "Industry-Specific Expertise",
    description:
      "With deep experience in gas stations, retail, manufacturing, and more, we understand the unique challenges and opportunities in your industry.",
  },
  {
    title: "End-to-End Support",
    description:
      "From initial strategy to ongoing optimization, we provide complete support throughout your AI journey. Our team becomes an extension of yours.",
  },
  {
    title: "Data Security Focus",
    description:
      "We implement robust security measures and compliance protocols to ensure your data remains protected throughout the AI implementation process.",
  },
];

const WhyChooseUsComponent: React.FC = () => {
  const { isVisible, setElement } = useIntersectionObserver();

  return (
    <section
      ref={setElement}
      className={`md:py-10 py-3 transition-all duration-1000  ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      <div className="px-4 mx-auto container sm:px-6 lg:px-8">
        <div className="py-10 mb-4 md:py-6">
          <p className="text-[#00A148] font-medium text-[18px] uppercase tracking-wide font-poppins">
            Why Choose Us
          </p>
          <h2 className="md:text-[38px] font-bold text-[28px]leading-tight    font-regular text-[#042337] mt-[4px] mb-[1px]">
            Why Businesses Choose Betasys For AI Implementation
          </h2>
        </div>
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {features.map((item, index) => (
            <div
              key={index}
              className="gap-3 relative min-h-[200px] rounded-[26px] border border-white/30 bg-[#F5F5F5]/10 overflow-hidden transition-all duration-300 shadow-md "
              style={{
                backgroundImage: `url(${bgImage})`,
              }}
            >
              <div className=" inset-0 flex flex-col items-center justify-center p-3  md:p-8 text-center">
                <h3 className="mb-2 text-[18px] md:text-[20px] font-semibold text-green-400  ">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-[18px] md:text-[18px] font-poppins leading-relaxed font-light">
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

export default WhyChooseUsComponent;
