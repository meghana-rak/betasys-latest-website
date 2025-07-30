import React from 'react';
import servicereactangle from "../../assests/Servicepage/servicereactangle.png";

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

  return (
    <section className="px-4 py-12 bg-white sm:px-6 lg:px-20">
      <div className="mx-auto max-w-7xl text-start">
        <h2 className="text-xl sm:text-2xl text-[#000000] mb-2 font-helvetica">
          Why Choose <span className="font-bold">Our AI Consulting?</span>
        </h2>
        <p className="text-[#4B4B4B] font-poppins text-sm mb-10 text-justify">
          Our AI Consulting services help organizations identify high-impact opportunities for artificial intelligence,
          assess readiness, and implement scalable AI solutions aligned with business goals. Whether you’re just exploring
          AI or ready to transform operations, we guide you through every step of the journey.
        </p>
      </div>

      {/* First Row */}
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="flex-1 min-w-0">
          <Card title={cards[0].title} text={cards[0].text} />
        </div>
        <div className="flex-[0.6] min-w-0">
          <Card title={cards[1].title} text={cards[1].text} />
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col gap-4 mt-4 lg:flex-row ">
        <div className="flex-[0.6] min-w-0">
          <Card title={cards[2].title} text={cards[2].text} />
        </div>
        <div className="flex-1 min-w-0">
          <Card title={cards[3].title} text={cards[3].text} />
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
    <div className="relative rounded-lg overflow-hidden min-h-[220px] sm:min-h-[240px] lg:min-h-[240px] bg-[#001e2d] text-white w-full ">
      <img
        src={servicereactangle}
        alt="glow"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      <div className="relative z-10 flex flex-col justify-between h-full p-4">
        <p className="text-sm font-poppins text-[#E4E4E4] leading-relaxed mb-10">
          {text}
        </p>
        <h3 className="mt-2 font-semibold text-md font-helvetica">{title}</h3>
      </div>
    </div>
  );
};

export default WhyChoose1;
