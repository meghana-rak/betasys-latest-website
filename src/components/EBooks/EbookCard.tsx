import React from "react";

interface EbookCardProps {
  title: string;
  image: string;
}

const EbookCard: React.FC<EbookCardProps> = ({ title, image }) => (
  <div className="relative bg-gradient-to-br from-[#01243C] to-[#00345E] p-4 rounded-xl flex items-center text-white gap-4 min-h-[130px] shadow-md mb-8">
    {/* Floating Image */}
    <img
      src={image}
      alt={title}
      className="w-16 h-24 sm:w-20 sm:h-28 object-cover rounded-md shadow-lg absolute -top-4 left-4 "
    />

    {/* Text Section */}
    <div className="flex flex-col justify-between h-full text-left pl-20 sm:pl-28">
      <h3 className="font-semibold text-[14px] sm:text-[20px] md:text-[20px] mb-3 leading-tight">
        {title}
      </h3>
      <button className="bg-[#00A148] hover:bg-green-600 text-white text-[9px] sm:text-[12px] px-3 py-2 rounded-md w-fit font-poppins">
        Download Now
      </button>
    </div>
  </div>
);

export default EbookCard;
