import React from 'react';
import frame2 from '../assests/Frame2.png'; // Adjust the path as necessary

const CTA = () => {
  

  return (
    <section className="relative bg-[#00A651] text-white overflow-hidden mb-6">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          {/* Left Text Section */}
          <div className="text-left">
            <h2 className="text-2xl font-bold md:text-3xl ">
              Book an AI Strategy Session
            </h2>
            <p className="mb-4 text-sm text-white/80 md:text-base">
              Fill this form to book a 30-minute Strategy Session with our CTO
            </p>
          </div>

          {/* Right Button Section */}
          <div className="shrink-0">
            <button className="px-6 py-3 text-sm font-semibold text-white rounded-lg bg-[#002A3A] hover:bg-[#00394f] transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Image */}
      <img
        src={frame2}
        alt="Decorative Curve"
        className="absolute bottom-0 left-0 w-full pointer-events-none"
      />
    </section>
  );
};

export default CTA;