import React from 'react';
import ReactangleS from "../../assests/RectangleS.png";
import ReactangleS2 from "../../assests/RectangleS2.png";

const WhyChoose2: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16 bg-white mb-10">
      {/* Heading */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] text-[#000000] font-helvetica mb-2">
          Why Choose <span className="font-bold">Our AI Consulting?</span>
        </h2>
        <p className="text-[#4B4B4B] text-justify font-poppins text-[15px] sm:text-[16px] mb-6 leading-relaxed">
          Our AI Consulting services help organizations identify high-impact opportunities for artificial intelligence,
          <br className="hidden sm:block" />
          assess readiness, and implement scalable AI.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: Images */}
        <div className="relative w-full flex justify-center md:justify-start">
          <img
            src={ReactangleS}
            alt="AI Core"
            className="rounded-xl w-full max-w-[480px] h-auto md:h-[400px] object-cover"
          />
          <img
            src={ReactangleS2}
            alt="Overlay Visual"
            className="rounded-xl absolute bottom-[-30px] right-[130px] w-[200px] sm:w-[150px] md:w-[230px] h-auto shadow-xl"
          />
        </div>

        {/* Right: Bullet Points */}
        <div className="text-[#1E1E1E] font-poppins space-y-4 pt-4 md:pt-10 text-[15px] sm:text-[18px] text-justify">
          <ul className="list-disc list-inside space-y-3 sm:space-y-6 ">
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
