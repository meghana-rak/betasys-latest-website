import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Mobile from "../../assests/ProductPage/mobile.png";
import Laptop from "../../assests/ProductPage/laptop.png";
import Ipad from "../../assests/ProductPage/ipad.png";
import Icon from "../../assests/ProductPage/arrow-left-contained-02.png";
import Icon2 from "../../assests/ProductPage/Icon (1).png";

const slides = [
  {
    title: "Smart Inventory Management",
    description:
      "Automatically track fuel, lubricants, and store stock levels. Get low-stock alerts and manage reorder points with ease.",
    image: Mobile,
    imageClass: "w-[280px] h-auto", // Mobile natural look
  },
  {
    title: "Live Sales Tracking",
    description:
      "Monitor every transaction in real time — fuel, product, and payment — across all pumps and counters, right from your dashboard.",
    image: Laptop,
    imageClass: "w-[500px] h-auto", // Laptop wide
  },
  {
    title: "Dynamic Pricebook Control",
    description:
      "Easily manage pricing for fuel and in-store items. Update prices instantly across locations with full version history and control.",
    image: Ipad,
    imageClass: "w-[400px] h-auto", // iPad square-ish
  },
];

const FeatureCarousel = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-[#f5fdfb] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-20 flex flex-col items-center">
        
        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full flex flex-col lg:flex-row items-center justify-between px-4 lg:px-12"
              >
                {/* Text Section */}
                <div className="lg:w-[65%] text-center lg:text-left">
                  <h2 className="text-[42px] font-bold text-[#022334] mb-6 leading-snug">
                    {slide.title}
                  </h2>
                  <p className="text-[#000000] font-poppins text-[20px] leading-relaxed">
                    {slide.description}
                  </p>
                </div>

                {/* Image Section - Custom size per slide */}
                <div className="lg:w-[35%] mt-8 lg:mt-0 flex justify-center items-center">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className={`${slide.imageClass} object-contain`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-start space-x-4 w-full lg:w-3/5">
          <button
            onClick={prevSlide}
            className="w-6 h-6 flex items-center justify-center  hover:bg-gray-100 transition"
          >
            <img src={Icon} className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="w-6 h-6 flex items-center justify-center  hover:bg-gray-100 transition"
          >
            <img src={Icon2} className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureCarousel;
