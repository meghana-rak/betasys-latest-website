import React from 'react';
import { useIntersectionObserver } from '../../hooks/useParallax';

  


const OverviewSection: React.FC = () => {
  const { isVisible, setElement } = useIntersectionObserver();
  return (
     <section
      ref={setElement}
      className={` bg-[#F8F8F8]   py-8  transition-all duration-1000 ${isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-16'
        }`}
    >
    <div className="px-4 mx-auto md:text-justify md:py-2 max-w-7xl sm:px-6 lg:px-8">
      <div className="md:mb-4"> 
        <h2 className="text-2xl  font-bold text-[#000000] mb-4  my-1   md:text-4xl font-helvetica font-regular">Overview</h2>

        <p className="text-xs text-black font-poppins md:text-lg">
          At Betasys.ai, our AI Consulting services are designed to help organizations unlock the true potential of
          artificial intelligence — not just as a buzzword, but as a transformative business capability. We work closely
          with your team to identify high-impact opportunities where AI can deliver measurable value, whether it’s
          automating routine operations, enhancing customer experiences, or enabling smarter decision-making through data.
        </p>

        <p className="mt-4 text-xs text-black font-poppins md:text-lg">
          Our approach begins with a deep assessment of your current systems, data infrastructure, and organizational
          readiness. From there, we craft a practical roadmap that aligns AI strategy with your core business goals. Whether
          you’re in the early stages of AI exploration or ready to scale enterprise-wide AI solutions, we guide you through
          every step — from use case discovery and model development to deployment, integration, and post-launch support.
          With Betasys.ai as your strategic partner, AI becomes more than a tool — it becomes a driver of innovation,
          efficiency, and competitive advantage.
        </p>
      </div>
    </div>
    </section>
  );
};

export default OverviewSection;
