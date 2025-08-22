import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroimg from "../../assests/Partners/databrick.png";
import { useIntersectionObserver } from "../../hooks/useParallax";

function AboutSection() {
  const [scrolled, setScrolled] = useState(false);
  const [showMainText, setShowMainText] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const { isVisible, setElement } = useIntersectionObserver();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !scrolled) {
        setScrolled(true);

        // Stagger text animations
        setTimeout(() => setShowMainText(true), 500);
        setTimeout(() => setShowParagraph(true), 500);
      } else if (window.scrollY <= 100 && scrolled) {
        // Reset to original state on scroll up
        setScrolled(false);
        setShowMainText(false);
        setShowParagraph(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (

    <section
      id="who-section"
      ref={setElement}
      className={`py-10 md:py-20 bg-gray-50 transition-all duration-1000 ${isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-16'
        }`}
    >

      <div className="relative container  mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" mb-4 ">
          <h2 className="md:text-[38px] font-bold text-[28px] leading-tight font-helvetica font-regular text-[#042337] mt-[4px] mb-[1px]">
            Our Databricks Partnership
          </h2>
          <p className="max-w-3xl text-gray-700 font-poppins  text-[18px] md:text-[22px]  mb-8">
           Expert guidance to accelerate your data-to-AI journey </p>
        </div>
      </div>
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8  md:px-4 grid gap-2 lg:gap-8  transition-all duration-700 ease-in-out grid-cols-1 lg:grid-cols-2 justify-between items-center`}>
        {/* Hero Image */}
        <div
          className={`transition-all duration-700 ease-in ${scrolled ? "w-full" : "w-full "
            }`}
        >
          <div className="rounded-2xl overflow-hidden  group h-full">
            <div className="relative w-full h-full">
              <img
                src={heroimg}
                alt="Team collaboration"
                className={`transition-all duration-700 ease-in-out object-cover object-center  w-full`}
              />
              
            </div>
          </div>
        </div>

        {/* Main Text floats from right */}
      <p className="text-gray-700 font-poppins text-[18px] md:text-[22px] leading-relaxed text-justify">
              Turn your data into answers with Konverge AI, your certified Databricks partner. We help you bring all your data together in one place, set up real-time data streams, and build and run AI and machine learning models—all on the Databricks Lakehouse. With our help, you’ll go from raw data to clear insights faster, so you can stay ahead of the competition.
Turn your data into answers with Konverge AI, your certified Databricks partner. We help you bring all your data together in one place, set up real-time data streams, and build and run AI and machine learning models—all on the Databricks Lakehouse. With our help, you’ll go from raw data to clear insights faster, so you can stay ahead of the competition.
Turn your data into answers with Konverge AI, your certified Databricks partner. We help you bring all your data together in one place, set up real-time data streams, and build and run AI and machine learning models—all on the Databricks Lakehouse. With our help, you’ll go from raw data to clear insights faster, so you can stay ahead of the competition.
            </p>
      </div>


    </section>

  );
}

export default AboutSection;
