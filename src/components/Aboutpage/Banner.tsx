import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroimg from "../../assests/Aboutpage/Subtract (1).png";
import { useIntersectionObserver } from "../../hooks/useParallax";

function Banner() {
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
          <p className="text-[#00A148] font-medium text-[18px] uppercase tracking-wide font-poppins"> About Us</p>
          <h2 className="md:text-[38px] font-bold text-[28px] leading-tight font-helvetica font-regular text-[#042337] mt-[4px] mb-[1px]">
            Your Trusted Partner Smart, Growth Through AI
          </h2>
          <p className="max-w-3xl text-gray-700 font-poppins  text-[18px] md:text-[22px]  mb-8">
            More than a tech service — Betasys.ai
            fuels intelligent growth for innovators across healthcare,
            retail, finance, and beyond.  </p>
        </div>
      </div>
      {/* <div className="  text-center">
          <motion.p
            className="text-gray-700 font-semibold text-[18px] md:text-[22px] font-poppins mb-3 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About Us
          </motion.p>
          <motion.h1
            className="max-w-7xl font-helvetica text-[28px] md:text-[48px] xl:text-[68px] font-bold leading-tight"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >

            Your <span className="text-[#00A148]">Trusted Partner</span> Smart,
            <br className="hidden sm:block" />
            Scalable Solutions
          </motion.h1>

        </div> */}

      {/* Image and Animated Text Section */}
      {/* <div className={`max-w-7xl mx-auto md:px-4 grid gap-2 lg:gap-8 items-center transition-all duration-700 ease-in-out ${scrolled ? "grid-cols-1 md:grid-cols-2 justify-between items-center" : "flex-col  "}`}> */}
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8  md:px-4 grid gap-2 lg:gap-8  transition-all duration-700 ease-in-out grid-cols-1 lg:grid-cols-2 justify-between items-center`}>
        {/* Hero Image */}
        <div
          className={`transition-all duration-700 ease-in ${scrolled ? "w-full" : "w-full "
            }`}
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl group h-full">
            <div className="relative w-full h-full">
              {/* <img
                  src={heroimg}
                  alt="Team collaboration"
                  className={`transition-all duration-700 ease-in-out object-cover ${scrolled ? "h-[300px] lg:h-[400px]" : "lg:h-[600px] h-[450px]"
                    } w-full`}
                /> */}
              <img
                src={heroimg}
                alt="Team collaboration"
                className={`transition-all duration-700 ease-in-out object-cover object-center  w-full`}
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-400 rounded-sm opacity-80"></div>
                <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-pink-400 rounded-sm opacity-80"></div>
                <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-green-400 rounded-sm opacity-80"></div> */}
            </div>
          </div>
        </div>

        {/* Main Text floats from right */}
      <p className="text-gray-700 font-poppins text-[18px] md:text-[22px] leading-relaxed text-justify">
              Fifteen years ago, businesses were overwhelmed by fragmented
              systems, manual processes, and outdated digital tools.
              Betasys.ai was founded to change that — with a vision to
              simplify complexity through purposeful technology. What began as
              a small team offering software solutions has grown into a
              company that builds intelligent systems to help businesses
              operate smarter, faster, and with greater clarity. Over the years, our journey evolved alongside the needs of our
              clients. We expanded from traditional web and mobile development
              into AI-powered platforms, automation tools, and custom data
              engines that solve real business problems. Today, Betasys.ai
              stands as a strategic technology partner for companies across
              industries — delivering scalable, human-centric solutions that
              turn bold ideas into real-world results.
            </p>
      </div>

      {/* Paragraph floats from bottom */}
      {/* <div
        className={` mt-5 md:mt-16 transition-all duration-700 ease-in-out ${showParagraph
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
          }`}
      >
        <div className="container  mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:px-4">
          <div>
            <p className="text-gray-700 font-poppins text-[18px] md:text-[22px] leading-relaxed text-center">
              Fifteen years ago, businesses were overwhelmed by fragmented
              systems, manual processes, and outdated digital tools.
              Betasys.ai was founded to change that — with a vision to
              simplify complexity through purposeful technology. What began as
              a small team offering software solutions has grown into a
              company that builds intelligent systems to help businesses
              operate smarter, faster, and with greater clarity. Over the years, our journey evolved alongside the needs of our
              clients. We expanded from traditional web and mobile development
              into AI-powered platforms, automation tools, and custom data
              engines that solve real business problems. Today, Betasys.ai
              stands as a strategic technology partner for companies across
              industries — delivering scalable, human-centric solutions that
              turn bold ideas into real-world results.
            </p>
          </div>

        </div>
      </div> */}
    </section>

  );
}

export default Banner;
