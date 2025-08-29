import React from "react";
import EbookImage from "../assests/EbookDetail/EbookDetail.jpg";
import Icon from "../assests/EbookDetail/Icon.png";
import BgFrame from "../assests/EbookDetail/Frame.png";
import { useIntersectionObserver } from '../hooks/useParallax';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

function EbookDetails() {
  const { isVisible, setElement } = useIntersectionObserver();

  return (
    <section
      ref={setElement}
      className={` bg-[#F9FAFB]  bg-cover bg-no-repeat bg-center  transition-all duration-1000 ${isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-16'
        }`}
    >
      {/* Hero Section */}
   
      <section
        className="relative flex flex-col justify-between py-4 min-h-[70vh] md:min-h-[50vh]"
        style={{
          backgroundImage: `url(${EbookImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
          {/* Left Text Content */}
          <div className="w-full sm:py-20 lg:py-24 xl:py-28">
            <h2 className="md:text-[48px] text-[36px] font-bold font-helvetica leading-tight font-regular text-[#042337] mt-[4px] mb-[1px]">
              Installing <span className="text-green-600">AI in Construction</span>
            </h2>
            <h3 className="md:text-[48px] text-[36px] font-bold font-helvetica leading-tight font-regular text-[#042337] mt-[4px] mb-[1px]">
              A Practical Guide for Industry Leaders
            </h3>
            <p className="text-gray-700 text-[18px] md:text-[22px] font-poppins leading-relaxed font-light mt-2">
              Transform Projects, Improve Efficiency, and Build a Smarter Future with AI
            </p>
            <button className="bg-[#042337] text-white text-[16px] mt-6 md:text-[20px] px-4 sm:px-5 py-2 sm:py-3 rounded-xl hover:bg-slate-800 transition-colors shadow-md font-poppins">
              Download Now
            </button>
          </div>

          {/* Breadcrumb bottom left */}
          <nav className="flex items-center space-x-2 text-[16px] uppercase tracking-wide font-poppins self-start pb-4">
            <Link to="/">
              <button className="text-[#34ef88] font-poppins text-[16px] md:text-[18px] focus:outline-none hover:underline">
                Betasys.ai
              </button>
            </Link>
            <span className="text-[#042337] font-medium">
              <ChevronRight className="w-3 md:w-5" />
            </span>
            <Link to="/ebooklisting">
              <button className="text-[#042337] font-poppins text-[16px] md:text-[18px] focus:outline-none hover:underline">
                EBook
              </button>
            </Link>
            <span className="text-[#042337]">
              <ChevronRight className="w-3 md:w-5" />
            </span>
            <button className="text-[#042337] text-start font-poppins text-[16px] md:text-[18px] focus:outline-none hover:underline">
              AI in Construction
            </button>
          </nav>
        </div>
      </section>

      {/* Discover Our Book Section */}
      <section className="mx-auto container   px-4 sm:px-6 lg:px-8 md:px-10 py-10 md:py-20">
        <div className="  text-start ">
          {/* Heading */}
          <h2 className="md:text-[38px] font-bold text-[28px] font-helvetica leading-tight font-regular text-[#042337] mt-[4px] mb-[1px]">
            Discover  Book

          </h2>
          <p className="max-w-3xl text-gray-700 font-poppins  text-[18px] md:text-[22px]  mb-14">
            Delivering Value Across Sectors and Scales identify high-impact
            opportunities for artificial intelligence, assess readiness, and
            implement scalable AI
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-[#022333] text-white rounded-2xl px-5 sm:px-6 pt-6 pb-6 sm:pt-7 sm:pb-7 flex flex-col justify-start relative"
              >
                {/* Icon aligned to top-left */}
                <div className="absolute -top-5 left-5 sm:left-6 flex items-center justify-center w-9 h-9 md:w-12 md:h-12 bg-[#022333] border-4 border-white rounded-full shadow-md">
                  <img src={Icon} alt="icon" />
                </div>

                {/* Card Text */}
                <p className="text-center text-[18px] md:text-[22px] font-poppins leading-snug mt-2">
                  Enterprises seeking AI transformation
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What It Covers Section */}
      <section
        className="bg-[#022333] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 mb-20 relative"
        style={{
          backgroundImage: `url(${BgFrame})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right bottom",
          backgroundSize: "auto",
        }}
      >
        <div className=" mx-auto container px-4 sm:px-6 lg:px-8 md:px-10 py-4 sm:py-8 ">
          {/* Top Label */}
          <p className="text-[#00A148] font-medium text-[18px] uppercase tracking-wide font-poppins">
            WHAT IT COVER
          </p>

          {/* Heading */}
          <h2 className="md:text-[38px] font-bold text-[28px] font-helvetica leading-tight font-regular text-[#E8E8E8] mt-[4px] mb-[1px]">
            Why Growing Businesses Choose Betasys AI
          </h2>

          {/* Subheading */}
          <p className="max-w-3xl text-[#E8E8E8] font-poppins  text-[18px] md:text-[22px]  mb-8">
            Built for agility, clarity, and real business impact — Betasys
            stands apart from legacy giants.
          </p>

          {/* Body Text */}
          <div className="max-w-7xl text-justify">
            <p className="text-gray-300 text-[18px] md:text-[22px] font-poppins leading-relaxed font-light">
              The construction industry is evolving and AI is at the forefront.
              This guide is for executives and project leaders ready to turn AI
              into real-world results. Discover practical use cases, proven
              frameworks, and strategies to overcome delays, cost overruns, and
              safety risks. Whether you’re starting small or scaling big, this
              book helps you make AI work right where it matters. AI in
              construction isn’t the future. It’s now. Let’s build smarter.
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
    </section>
  );
}

export default EbookDetails;
