import React from 'react';
import ReactangleS from "../../assests/Servicepage/RectangleS.png";
import ReactangleS2 from "../../assests/Servicepage/RectangleS2.png";
import { useIntersectionObserver } from '../../hooks/useParallax';


const WhyChoose2: React.FC = () => {
  const { isVisible, setElement } = useIntersectionObserver();

  return (
    <section
      ref={setElement}
      className={`py-10  transition-all duration-1000 ${isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-16'
        }`}
    >
  
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className='mb-4'>
        <h2 className=" text-[#000000]  mb-2 my-1 text-2xl md:text-3xl font-helvetica font-regular">
          Why Choose <span className="font-bold">Our AI Consulting?</span>
        </h2>
        <p className="max-w-4xl mt-4 mb-10 text-sm leading-loose text-gray-700 md:text-justify font-regular font-poppins md:text-lg">
          Our AI Consulting services help organizations identify high-impact opportunities for artificial intelligence,
          
          assess readiness, and implement scalable AI.
        </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-4 px-4 mx-auto lg:grid-cols-2 sm:px-6 lg:px-8">

          <div className="flex flex-col max-w-6xl gap-3 mx-auto md:mr-36 lg:flex-row">
            <div className='flex gap-3'>
            
              <div className="relative flex justify-center w-full md:justify-start">
                <img
                  src={ReactangleS}
                  alt="AI Core"
                  className="z-10  rounded-xl  w-[550px] h-auto md:h-[470px] object-cover"
                />
              
                <img
                  src={ReactangleS2}
                  alt="Overlay Visual"
                  className=" rounded-xl z-20 absolute bottom-[-30px] -right-[20px] md:-right-[100px] md:w-[250px]  h-1/4 shadow-xl"
                />
              </div>
            </div>
          </div>
        


        {/* Right: Bullet Points */}
       <div className="text-[#1E1E1E] font-poppins pt-2 mt-4 text-md md:text-lg  font-medium">
          <ul className="px-4 mx-auto space-y-4 list-disc sm:px-6 lg:px-8 ">
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
