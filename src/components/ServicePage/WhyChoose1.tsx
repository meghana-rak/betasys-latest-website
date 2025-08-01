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
        className={`py-10  transition-all duration-1000 ${isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-16'
          }`}
      >

{/* <section className="px-4 py-12 bg-white sm:px-6 lg:px-20"> */}
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
       
         <h2 className="my-1 text-2xl text-[#000000] md:text-3xl font-helvetica font-regular">
            Why Choose <span className='font-bold'>Our AI Consulting?</span>
          </h2>
        <p className="mt-4 mb-10 text-xs leading-loose text-gray-700 md:text-justify font-regular font-poppins md:text-lg">
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
        <div className="flex-[0.6] ">
          <Card title={cards[1].title} text={cards[1].text} />
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col gap-3 mx-auto mt-4 lg:flex-row max-w-7xl">
        <div className="flex-[0.6] ">
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
    <div className="relative rounded-lg overflow-hidden min-h-[220px] sm:min-h-[240px] lg:min-h-[240px] bg-[#001e2d] text-white  ">
      <img
        src={servicereactangle}
        alt="glow"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      <div className="relative z-10 flex flex-col justify-between h-full p-4">
        <p className="text-sm font-poppins text-[#E4E4E4] leading-relaxed mb-10 font-regular mt-4">
          {text}
        </p>
        <h3 className="mt-2 font-semibold text-md font-helvetica">{title}</h3>
      </div>
    </div>
  );
};

export default WhyChoose1;
