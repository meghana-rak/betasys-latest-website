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
          className=" h-62 object-cover rounded-lg"
        />

        {/* Date Badge */}
        <div className="absolute top-2 left-2 font-poppins">
          <span className="px-2 py-1 text-[16px]  text-[#005F2B] bg-[#C4E1D1] rounded-full">
            20/06/2025
          </span>
        </div>
      </div>

      {/* Category Tag */}
      <span className="tracking-tighter inline-block text-[#00A148] mb-1 text-[18px] md:text-[22px] font-poppins">
        Health
      </span>

      {/* Title */}
      <h1 className="font-medium tracking-tighter  text-[24px]  md:text-[28px]  space-x-0 text-gray-700 mb-1 leading-tighter font-poppins">
        The Future of AI in Healthcare Transforming Patient Care
      </h1>

      {/* Author and Date */}
      <div className="flex items-center text-gray-500 font-medium mb-2 text-[16px] md:text-[18px] font-poppins">
        <span>By Abhishev Singh</span>
      </div>

      {/* Content */}
      <div className=" tracking-tighter prose prose-lg max-w-none text-[16px] lg:text-justify font-poppins">
        <p className="text-gray-700 leading-tighter font-poppins text-[18px] md:text-[20px] mb-2">
          Artificial intelligence is rapidly transforming healthcare, offering
          unprecedented opportunities to improve patient outcomes, streamline
          clinical workflows, and reduce healthcare costs.
          The Current State of AI in Healthcare
          Today's healthcare industry is witnessing a dramatic shift as AI
          technologies become increasingly sophisticated and widely adopted.
          From diagnostic assistance to personalized treatment plans, AI is
          enhancing medical professionals' capabilities in numerous ways.      
          Artificial intelligence is rapidly transforming healthcare, offering
          unprecedented opportunities to improve patient outcomes, streamline
          clinical workflows, and reduce healthcare costs.
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
