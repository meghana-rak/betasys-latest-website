import React from 'react';

interface BlogCardProps {
  date: string;
  image: string;
  category: string;
  title: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ date, image, category, title }) => {
  return (
    <article className=" bg-white rounded-lg">
      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-40 rounded-lg sm:h-48 md:h-40 lg:h-46 xl:h-46"
        />
        {/* Date Badge */}
        <div className="absolute top-2 left-2">
          <span className="px-2 py-1 text-[12px] font-semibold text-[#005F2B] bg-[#C4E1D1] rounded-full">
            {date}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-1 sm:py-2">
        <p className="text-[#00A148] mb-1 text-[13px] font-poppins">
          {category}
        </p>
        <h3 className="text-[14px] font-helvetica text-[#373737] group-hover:text-green-500 transition-colors line-clamp-2">
          {title}
        </h3>
      </div>
    </article>
  );
};

export default BlogCard;
