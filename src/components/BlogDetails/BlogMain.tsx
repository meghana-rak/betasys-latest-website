import React from "react";
import blogDetail from '../../assests/blogDetails/blogDetail.jpg';

const BlogMain: React.FC = ({ blogPost, categoryId }) => {
  const formattedDate = new Date(blogPost?.createdAt)
    .toLocaleDateString("en-GB") // gives dd/mm/yyyy
    .replace(/\//g, "/");

  const apiKey = import.meta.env.VITE_AWS_IMG_URL;

  if (!blogPost) {
    return (
      <div className="text-center text-gray-500">
        <p>Loading...</p>
      </div>
    );
  }
  
  return (
    <article className="">
      {/* Feature Image */}
      <div className="relative mb-4">
        <img
          src={`${apiKey}${blogPost?.image?.path || blogDetail}`}
          alt="Doctor with stethoscope"
          className="w-full h-48 md:h-72 object-cover rounded-lg"
        />

        {/* Date Badge */}
        <div className="absolute top-2 left-2 font-poppins">
          <span className="px-2 py-1 text-[16px]  text-[#005F2B] bg-[#C4E1D1] rounded-full">
            {formattedDate}
          </span>
        </div>
      </div>

      {/* Category Tag */}
      <span className="tracking-tighter inline-block text-[#00A148] mb-1 text-[18px] md:text-[22px] font-poppins">
        {blogPost?.category?.name || "General"}
      </span>

      {/* Title */}
      <h1 className="font-medium tracking-tighter  text-[24px]  md:text-[28px]  space-x-0 text-gray-700 mb-1 leading-tighter font-poppins">
       {blogPost?.title || "Blog Title"}
      </h1>

      {/* Author and Date */}
      <div className="flex items-center text-gray-500 font-medium mb-2 text-[16px] md:text-[18px] font-poppins">
        <span>{blogPost?.author}</span>
      </div>

      {/* Content */}
      <div className=" tracking-tighter prose prose-lg max-w-none text-[16px] lg:text-justify font-poppins">
        <p
          className="text-gray-700 leading-tighter font-poppins text-[18px] md:text-[22px] mb-2"
          dangerouslySetInnerHTML={{
            __html:
              blogPost?.description ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }}
        />
      </div>
    </article>
  );
};

export default BlogMain;
