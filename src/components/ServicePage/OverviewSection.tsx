import React from 'react';

const OverviewSection: React.FC = () => {
  return (
    <section className="bg-[#F8F8F8] px-4 py-10 sm:px-6 md:px-12 lg:px-20 xl:px-32 text-justify">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#000000] mb-4 font-helvetica">Overview</h2>

        <p className="text-[#000000] text-[16px] leading-relaxed mb-4 font-poppins">
          At Betasys.ai, our AI Consulting services are designed to help organizations unlock the true potential of
          artificial intelligence — not just as a buzzword, but as a transformative business capability. We work closely
          with your team to identify high-impact opportunities where AI can deliver measurable value, whether it’s
          automating routine operations, enhancing customer experiences, or enabling smarter decision-making through data.
        </p>

        <p className="text-[#000000] text-[16px] leading-relaxed mb-6 font-poppins">
          Our approach begins with a deep assessment of your current systems, data infrastructure, and organizational
          readiness. From there, we craft a practical roadmap that aligns AI strategy with your core business goals. Whether
          you’re in the early stages of AI exploration or ready to scale enterprise-wide AI solutions, we guide you through
          every step — from use case discovery and model development to deployment, integration, and post-launch support.
          With Betasys.ai as your strategic partner, AI becomes more than a tool — it becomes a driver of innovation,
          efficiency, and competitive advantage.
        </p>
      </div>
    </section>
  );
};

export default OverviewSection;
