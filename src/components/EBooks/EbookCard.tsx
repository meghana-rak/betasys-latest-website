import React from 'react';

interface EbookCardProps {
  title: string;
  image: string;
}

const EbookCard: React.FC<EbookCardProps> = ({ title, image }) => (
  <div className="bg-gradient-to-br from-[#01243C] to-[#00345E] p-4 rounded-xl flex flex-col sm:flex-row items-center text-white gap-4 min-h-[130px] shadow-md">
    <img
      src={image}
      alt={title}
      className="w-20 h-28 mt-[-45px] object-cover rounded-md shadow-lg"
    />
    <div className="flex flex-col justify-between h-full">
      <h3 className="font-semibold text-base sm:text-lg mb-2">{title}</h3>
      <button className="bg-green-500 hover:bg-green-600 text-white text-sm px-2 py-2 rounded-md w-fit">
        Download Now
      </button>
    </div>
  </div>
);

export default EbookCard;
