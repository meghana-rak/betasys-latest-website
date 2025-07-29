import React from "react";
import blogDetail from '../../assests/blogDetail.jpg';

const BlogMain: React.FC = () => {
  return (
    <article className="bg-white">
      {/* Feature Image */}
      <div className="relative mb-4">
        <img
          src={blogDetail}
          alt="Doctor with stethoscope"
          className="w-[1000px] h-62 object-cover rounded-lg"
        />

        {/* Date Badge */}
        <div className="absolute top-2 left-2">
          <span className="px-3 py-1 text-[10px] sm:text-[12px] font-semibold text-[#005F2B] bg-[#C4E1D1] rounded-full">
            20/06/2025
          </span>
        </div>
      </div>

      {/* Category Tag */}
      <span className="inline-block text-green-500 text-[15px] font-medium mb-2">
        Health
      </span>

      {/* Title */}
      <h1 className="text-[23px] md:text-1xl font-bold text-gray-900 mb-1 leading-tight font-helvetica">
        The Future of AI in Healthcare Transforming Patient Care
      </h1>

      {/* Author and Date */}
      <div className="flex items-center text-gray-600 mb-2 text-[16px] font-poppins">
        <span>By Abhishev Singh</span>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none text-[16px] text-justify font-poppins">
        <p className="text-gray-700 leading-relaxed mb-2">
          Artificial intelligence is rapidly transforming healthcare, offering
          unprecedented opportunities to improve patient outcomes, streamline
          clinical workflows, and reduce healthcare costs.
        </p>

        <p className="fleading-relaxed text-gray-700">
          The Current State of AI in Healthcare
        </p>

        <p className="text-gray-700 leading-relaxed mb-2">
          Today's healthcare industry is witnessing a dramatic shift as AI
          technologies become increasingly sophisticated and widely adopted.
          From diagnostic assistance to personalized treatment plans, AI is
          enhancing medical professionals' capabilities in numerous ways.
        </p>

        <p className="text-gray-700 leading-relaxed mb-2">
          Artificial intelligence is rapidly transforming healthcare, offering
          unprecedented opportunities to improve patient outcomes, streamline
          clinical workflows, and reduce healthcare costs.
        </p>

        <p className="text-gray-700 leading-relaxed mb-2">
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
