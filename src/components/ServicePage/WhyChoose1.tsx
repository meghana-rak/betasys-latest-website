import React from 'react';
import servicereactangle from "../../assests/Servicepage/servicereactangle.png";
import { useIntersectionObserver } from '../../hooks/useParallax';

const WhyChoose1: React.FC = () => {
  const cards = [
    {
      title: 'Tailored Strategy',
      text: 'We analyze your business challenges and design AI-driven roadmaps suited to your industry, size, and goals.',
    },
    {
      title: 'End-to-End Guidance',
      text: 'From discovery and feasibility to deployment and optimization, we support the full AI lifecycle.',
    },
    {
      title: 'End-to-End Guidance',
      text: 'From discovery and feasibility to deployment and optimization, we support the full AI lifecycle.',
    },
    {
      title: 'Tailored Strategy',
      text: 'We analyze your business challenges and design AI-driven roadmaps suited to your industry, size, and goals.',
    },
  ];

  const { isVisible, setElement } = useIntersectionObserver();

  return (
    <section
      ref={setElement}
      className={`md:py-20 py-10  transition-all duration-1000 ${isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-16'
        }`}
    >

      {/* <section className="px-4 py-12 bg-white sm:px-6 lg:px-20"> */}
      <div className="px-4 mx-auto container sm:px-6 lg:px-8">

        <h2 className="md:text-[38px] font-bold text-[28px] leading-tight font-helvetica font-regular text-[#042337] mt-[4px] mb-[1px]">
          Why Choose Our AI Consulting?
        </h2>
        <p className=" text-gray-700 font-poppins my-4 text-[18px] md:text-[22px] ">
          Our AI Consulting services help organizations identify high-impact opportunities for artificial intelligence,
          assess readiness, and implement scalable AI solutions aligned with business goals. Whether you’re just exploring
          AI or ready to transform operations, we guide you through every step of the journey.
        </p>



        <div className={` transition-all duration-1000 delay-500 ${isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12'
          }`}>
          {/* First Row */}
          <div className="flex flex-col gap-3 mx-auto max-w-7xl lg:flex-row">
            <div className="flex-1 ">
              <Card title={cards[0].title} text={cards[0].text} />
            </div>
            <div className="flex-[0.8] ">
              <Card title={cards[1].title} text={cards[1].text} />
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col gap-3 mx-auto mt-4 lg:flex-row max-w-7xl">
            <div className="flex-[0.8] ">
              <Card title={cards[2].title} text={cards[2].text} />
            </div>
            <div className="flex-1 ">
              <Card title={cards[3].title} text={cards[3].text} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface CardProps {
  title: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ title, text }) => {
  return (
    <div className="relative rounded-xl overflow-hidden h-full mt-4 bg-[#001e2d] text-white">
      <img
        src={servicereactangle}
        alt="glow"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-10" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-between px-8 py-6 h-full">
        <div className="flex-1">
          <p className="font-poppins lg:text-justify text-[18px] md:text-[22px] text-[#E4E4E4] leading-relaxed font-regular">
            {text}
          </p>
        </div>
        <h3 className="font-semibold text-[24px] md:text-[28px] font-poppins mt-4">
          {title}
        </h3>
      </div>
    </div>

  );
};

export default WhyChoose1;
