import React from "react";

interface EbookCardProps {
  title: string;
  image: string;
}

const EbookCard: React.FC<EbookCardProps> = ({ title, image }) => (
  <div className="relative bg-gradient-to-br from-[#01243C] to-[#00345E] p-3 md:p-6 rounded-xl items-center text-white gap-6 min-h-[130px] shadow-md mb-8">
    {/* Floating Image */}
    <img
      src={image}
      alt={title}
      className="w-16 h-24 sm:w-20 sm:h-28 object-cover rounded-md shadow-lg absolute -top-4 left-4 "
    />

    {/* Text Section */}
    <div className="flex flex-col justify-between h-full text-left pl-20 md:pl-24 ">
      <h3 className="font-semibold text-white text-[18px] sm:text-[18px] md:text-[22px] mb-3 leading-tight line-clamp-1">
        {title}
      </h3>
      <button className="bg-[#00A148] hover:bg-green-600 text-white text-[16px] md:text-[16px] lg:text-[18px] px-2 py-2 rounded-md w-fit font-poppins">
        Download Now
      </button>
    </div>
  </div>
);

export default EbookCard;
