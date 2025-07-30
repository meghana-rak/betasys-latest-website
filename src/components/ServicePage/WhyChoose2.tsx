import React from 'react';
import ReactangleS from "../../assests/Servicepage/RectangleS.png";
import ReactangleS2 from "../../assests/Servicepage/RectangleS2.png";

const WhyChoose2: React.FC = () => {
  return (
    <section className="px-4 py-12 mb-10 bg-white sm:px-8 lg:px-16">
      {/* Heading */}
      <div className="mx-auto max-w-7xl">
        <h2 className="text-[22px] sm:text-[26px] lg:text-[32px] text-[#000000] font-helvetica mb-2">
          Why Choose <span className="font-bold">Our AI Consulting?</span>
        </h2>
        <p className="text-[#4B4B4B] text-justify font-poppins text-[15px] sm:text-[16px] lg:text-[18px] mb-6 leading-relaxed">
          Our AI Consulting services help organizations identify high-impact opportunities for artificial intelligence,
          <br className="hidden sm:block" />
          assess readiness, and implement scalable AI.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid items-start grid-cols-1 gap-10 mx-auto max-w-7xl md:grid-cols-2">
        {/* Left: Images */}
        <div className="relative flex justify-center w-full md:justify-start">
          <img
            src={ReactangleS}
            alt="AI Core"
            className="rounded-xl w-full max-w-[480px] h-auto md:h-[400px] object-cover"
          />
          <img
            src={ReactangleS2}
            alt="Overlay Visual"
            className="absolute rounded-xl shadow-xl w-[140px] sm:w-[160px] md:w-[200px] lg:w-[230px] h-auto 
                       bottom-[-20px] right-[40px] sm:right-[70px] md:right-[100px] lg:right-[130px]"
          />
        </div>

        {/* Right: Bullet Points */}
        <div className="text-[#1E1E1E] font-poppins pt-2 sm:pt-4 md:pt-8 text-[15px] sm:text-[17px] lg:text-[18px] text-justify">
          <ul className="space-y-3 list-disc list-inside sm:space-y-4 lg:space-y-6">
            <li>
              <span className="text-[#00A148]">Predictive analytics</span> for demand forecasting.
            </li>
            <li>
              Intelligent <span className="text-[#00A148]">automation</span> for repetitive processes.
            </li>
            <li>
              Natural Language Processing (NLP) for chatbots.
            </li>
            <li>
              Computer vision for <span className="text-[#00A148]">defect detection</span>, surveillance, and OCR.
            </li>
            <li>
              Personalized <span className="text-[#00A148]">recommendations</span> in retail.
            </li>
            <li>
              <span className="text-[#00A148]">Fraud detection</span> in finance and insurance.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose2;
