import React, { useState, useEffect } from 'react';

interface ImageCarouselProps {
  images: string[];
  autoScrollInterval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoScrollInterval = 4000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [images.length, autoScrollInterval]);
  const [itemsPerRow, setItemsPerRow] = useState(5);

  useEffect(() => {
    const updateItemsPerRow = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerRow(2); // default + sm
      } else if (width >= 640 && width < 768) {
        setItemsPerRow(2); // sm
      } else if (width >= 768 && width < 1024) {
        setItemsPerRow(3); // md
      } else {
        setItemsPerRow(5); // lg and up
      }
    };

    updateItemsPerRow();
    window.addEventListener("resize", updateItemsPerRow);
    return () => window.removeEventListener("resize", updateItemsPerRow);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out p-5"
        style={{ transform: `translateX(-${currentIndex * 20}%)` }}
      >
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="w-1/2 h-28 md:h-52 sm:w-1/3 md:w-1/3 lg:w-1/5 flex-shrink-0 px-2"
          >
            <div className="relative w-full h-full rounded-md overflow-hidden">
              <img
                src={image?.img}
                alt={`Event Gallery ${index + 1}`}
                className="w-full h-full object-cover rounded-md"
              />
              {/* Overlay */}
              <div className="absolute font-poppins inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black flex flex-col justify-end p-3 text-white">
                <p className="text-[10px] md:text-sm font-semibold">{image?.name}</p>
                <p className="text-[10px]"> {image?.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default ImageCarousel;