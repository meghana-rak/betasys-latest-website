import React from 'react';
import servicereactangle from "../../assests/servicereactangle.png"

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
        <h2 className="text-xl sm:text-2xl  text-[#000000] mb-2 font-helvetica">
          Why Choose <span className="font-bold">Our AI Consulting?</span>
        </h2>
        <p className="text-[#4B4B4B]  font-poppins text-sm mb-10 text-justify">
          Our AI Consulting services help organizations identify high-impact opportunities for artificial intelligence,
          assess readiness, and implement scalable AI solutions aligned with business goals. Whether you’re just exploring
          AI or ready to transform operations, we guide you through every step of the journey.
        </p>
      </div>

      {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
  {cards.map((card, index) => (
    <div
      key={index}
      className="relative rounded-lg overflow-hidden min-h-[220px] sm:min-h-[240px] lg:min-h-[260px] bg-[#001e2d] text-white"
    >
      {/* Background Image */}
      <img
        src={servicereactangle}
        alt="glow"
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Overlay for darkening if needed */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />

      {/* Card Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-6">
        <p className="text-sm font-poppins text-[#E4E4E4] leading-relaxed mb-4">
          {card.text}
        </p>
        <h3 className="font-semibold text-md font-helvetica">{card.title}</h3>
      </div>
    </div>
  ))}
</div>

    </section>
  );
};

export default WhyChoose1;
