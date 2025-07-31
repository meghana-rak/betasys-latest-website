import React from 'react';

interface BlogCardProps {
  date: string;
  image: string;
  category: string;
  title: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ date, image, category, title }) => {
  return (
    <article className="overflow-hidden transition-shadow bg-white rounded-lg shadow-sm hover:shadow-md">
      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-40 rounded-t-lg sm:h-48 md:h-40 lg:h-46 xl:h-46"
        />
        {/* Date Badge */}
        <div className="absolute top-2 left-2">
          <span className="px-3 py-1 text-[10px] sm:text-xs font-semibold text-[#005F2B] bg-[#C4E1D1] rounded-full">
            {date}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-3 sm:p-4">
        <p className="text-[10px] sm:text-sm font-medium uppercase text-[#00A148] mb-1">
          {category}
        </p>
        <h3 className="text-sm font-poppins sm:text-base font-semibold text-[#373737] leading-snug line-clamp-2">
          {title}
        </h3>
      </div>
    </article>
  );
};

export default BlogCard;
