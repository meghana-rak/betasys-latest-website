import React from 'react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  key: string;
  date: string;
  image: string;
  category: string;
  title: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ key, date, image, category, title }) => {
  return (
    <Link to={`/blogdetails/${key}`} className="group">
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
            <span className="px-2 py-1 text-[16px]  text-[#005F2B] bg-[#C4E1D1] rounded-full">
              {date}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="py-1 sm:py-2">
          <p className="text-[#00A148] -tracking-[0.5px] mb-1 text-[18px] md:text-[22px] font-poppins">
            {category}
          </p>
          <h3
            className="font-medium text-[16px] md:text-[18px] text-gray-700 transition-colors line-clamp-2 font-poppins -tracking-[0.3px]"
          >
            {title}
          </h3>
        </div>

      </article>
    </Link>
  );
};

export default BlogCard;
