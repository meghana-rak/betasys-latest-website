import React from "react";
import blogDetail from '../../assests/blogDetails/blogDetail.jpg';

const BlogMain: React.FC = () => {
  return (
    <article className="">
      {/* Feature Image */}
      <div className="relative mb-4">
        <img
          src={blogDetail}
          alt="Doctor with stethoscope"
          className="w-[1000px] h-62 object-cover rounded-lg"
        />

        {/* Date Badge */}
        <div className="absolute top-2 left-2 font-poppins">
          <span className="px-3 py-1 text-[10px] sm:text-[12px] font-semibold text-[#005F2B] bg-[#C4E1D1] rounded-full">
            20/06/2025
          </span>
        </div>
      </div>

      {/* Category Tag */}
      <span className="inline-block text-[#00A148] text-[15px] font-medium mb-2 font-poppins">
        Health
      </span>

      {/* Title */}
      <h1 className="text-[23px] md:text-1xl font-bold text-black mb-1 leading-tight font-helvetica">
        The Future of AI in Healthcare Transforming Patient Care
      </h1>

      {/* Author and Date */}
      <div className="flex items-center text-[#414141] mb-2 text-[15px] font-poppins">
        <span>By Abhishev Singh</span>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none text-[16px] text-justify font-poppins">
        <p className="text-[#575757] leading-relaxed mb-2">
          Artificial intelligence is rapidly transforming healthcare, offering
          unprecedented opportunities to improve patient outcomes, streamline
          clinical workflows, and reduce healthcare costs.
        </p>

        <p className="fleading-relaxed text-[#575757]">
          The Current State of AI in Healthcare
        </p>

        <p className="text-[#575757] leading-relaxed mb-2">
          Today's healthcare industry is witnessing a dramatic shift as AI
          technologies become increasingly sophisticated and widely adopted.
          From diagnostic assistance to personalized treatment plans, AI is
          enhancing medical professionals' capabilities in numerous ways.
        </p>

        <p className="text-[#575757] leading-relaxed mb-2">
          Artificial intelligence is rapidly transforming healthcare, offering
          unprecedented opportunities to improve patient outcomes, streamline
          clinical workflows, and reduce healthcare costs.
        </p>

        <p className="text-[#575757] leading-relaxed mb-2">
          Today's healthcare industry is witnessing a dramatic shift as AI
          technologies become increasingly sophisticated and widely adopted.
          From diagnostic assistance to personalized treatment plans, AI is
          enhancing medical professionals' capabilities in numerous ways.
        </p>
      </div>
    </article>
  );
};

export default BlogMain;
