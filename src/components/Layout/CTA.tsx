import React from 'react';
import frame2 from '../../assests/Frame2.png'; 
import { Link } from 'react-router-dom';// Adjust the path as necessary

const CTA = () => {
  

  return (
    <section className="relative  bg-[#00A651] text-white  mb-6">
      <div className="container px-4 py-4 lg:py-16 mx-auto  sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
          {/* Left Text Section */}
          <div className="text-left">
            <h2 className="text-[28px]  md:text-[42px] font-helvetica font-bold leading-tight">
              Book an AI Strategy Session
            </h2>
            <p className="mb-4 text-[18px] md:text-[22px] text-white/80">
              Fill this form to book a 30-minute Strategy Session with our CTO
            </p>
          </div>

          {/* Right Button Section */}
          <div className="shrink-0">
            <Link to="/contactus" >
            <button className="px-6 py-2 md:py-2 text-[16px] md:text-[18px] font-semibold text-white rounded-lg bg-[#002A3A] hover:bg-[#00394f] transition duration-300">
            LETS CONNECT
            </button>
            </Link>
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