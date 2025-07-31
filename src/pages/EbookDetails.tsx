import React from "react";
import EbookImage from "../assests/EbookDetail/EbookDetail.jpg";
import Icon from "../assests/EbookDetail/Icon.png";
import BgFrame from "../assests/EbookDetail/Frame.png";

function EbookDetails() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-gray-50 flex items-center mt-28 min-h-[380px] sm:min-h-[400px]"
        style={{
          backgroundImage: `url(${EbookImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          backgroundSize: "80% auto",
        }}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center px-4 sm:px-8 md:px-16 lg:px-20 py-10 sm:py-14 md:py-16 lg:py-18">
          {/* Left Text Content */}
          <div className="w-full">
            <h2 className="text-[20px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-bold text-gray-900 leading-tight font-helvetica">
              Installing <span className="text-green-600">AI in Construction</span>
            </h2>
            <h3 className="text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-gray-900 mb-2 font-helvetica">
              A Practical Guide for Industry Leaders
            </h3>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-black mb-6 leading-relaxed font-poppins max-w-xl">
              Transform Projects, Improve Efficiency, and Build a Smarter Future
              with AI
            </p>
            <button className="bg-slate-900 text-white text-[14px] sm:text-[15px] md:text-[16px] px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl hover:bg-slate-800 transition-colors shadow-md font-poppins">
              Download Now
            </button>
          </div>
        </div>
      </section>

      {/* Discover Our Book Section */}
      <section className="bg-[#F9FAFB] px-4 sm:px-8 md:px-10 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto text-start">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl text-gray-900 mb-2 font-helvetica">
            Discover{" "}
            <span className="font-semibold">
              Our <span className="font-bold">Book</span>
            </span>
          </h2>
          <p className="text-[15px] sm:text-[16px] text-gray-600 mb-10 sm:mb-14 max-w-3xl leading-relaxed font-poppins">
            Delivering Value Across Sectors and Scales identify high-impact
            opportunities for artificial intelligence, assess readiness, and
            implement scalable AI
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-[#022333] text-white rounded-2xl px-5 sm:px-6 pt-6 pb-6 sm:pt-7 sm:pb-7 flex flex-col justify-start relative"
              >
                {/* Icon aligned to top-left */}
                <div className="absolute -top-5 left-5 sm:left-6 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 bg-[#022333] border-4 border-white rounded-full shadow-md">
                  <img src={Icon} alt="icon" />
                </div>

                {/* Card Text */}
                <p className="text-center text-[17px] sm:text-[19px] font-poppins leading-snug mt-2">
                  Enterprises seeking AI transformation
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What It Covers Section */}
      <section
        className="bg-[#022333] px-4 sm:px-8 md:px-10 py-12 sm:py-16 mb-20 relative"
        style={{
          backgroundImage: `url(${BgFrame})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right bottom",
          backgroundSize: "70% auto",
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Top Label */}
          <p className="text-green-500 text-[14px] sm:text-[16px] font-medium mb-4 uppercase tracking-wide font-poppins">
            WHAT IT COVER
          </p>

          {/* Heading */}
          <h2 className="text-[24px] sm:text-[32px] md:text-[36px] font-helvetica font-medium text-white mb-1 leading-snug">
            Why Growing Businesses{" "}
            <span className="font-bold">Choose Betasys AI</span>
          </h2>

          {/* Subheading */}
          <p className="text-[15px] sm:text-[16px] text-gray-300 font-poppins mb-8 leading-relaxed tracking-wide">
            Built for agility, clarity, and real business impact — Betasys
            stands apart from legacy giants.
          </p>

          {/* Body Text */}
          <div className="max-w-5xl text-justify">
            <p className="text-[15px] sm:text-[16px] text-gray-300 leading-loose font-poppins mb-0">
              The construction industry is evolving and AI is at the forefront.
              This guide is for executives and project leaders ready to turn AI
              into real-world results. Discover practical use cases, proven
              frameworks, and strategies to overcome delays, cost overruns, and
              safety risks. Whether you’re starting small or scaling big, this
              book helps you make AI work right where it matters. AI in
              construction isn’t the future. It’s now. Let’s build smarter.
            </p>

            <p className="text-[15px] sm:text-[16px] text-gray-300 leading-relaxed font-poppins mt-0">
              The construction industry is evolving and AI is at the forefront.
              This guide is for executives and project leaders ready to turn AI
              into real-world results. Discover practical use cases, proven
              frameworks, and strategies to overcome delays, cost overruns, and
              safety risks. Whether you’re starting small or scaling big, this
              book helps you make AI work right where it matters. AI in
              construction isn’t the future. It’s now. Let’s build smarter.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EbookDetails;

