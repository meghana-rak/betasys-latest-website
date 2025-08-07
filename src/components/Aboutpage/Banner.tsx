import { useEffect, useState } from "react";
import heroimg from "../../assests/Aboutpage/heroimg.png";

function Banner() {
  const [scrolled, setScrolled] = useState(false);
  const [showMainText, setShowMainText] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !scrolled) {
        setScrolled(true);

        // Stagger text animations
        setTimeout(() => setShowMainText(true), 500);
        setTimeout(() => setShowParagraph(true), 1000);
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
    <div>
      {/* Floating background patterns */}
      {/* <div className="absolute inset-0 opacity-20 z-0 ">
        <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-200 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-emerald-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-emerald-200 rounded-full animate-bounce"></div>
      </div> */}

      {/* Main Content */}
      <main className="relative z-10  md:px-6 pt-32 ">
        <div className="text-center md:mb-16">
          <div className="text-slate-700 font-semibold text-lg font-poppins mb-3 md:mb-6">
            About Us
          </div>
          <div className="relative w-full flex flex-col justify-center items-center">
            <h1 className="max-w-5xl font-helvetica text-3xl md:text-4xl lg:text-5xl font-bold">
              <div>
                <span className="text-slate-800">Your </span>
                <span className="text-emerald-600 relative">Trusted Partner</span>
              </div>
              <div className="text-slate-800">Smart, Scalable Solutions</div>
            </h1>
          </div>
        </div>

        {/* Image and Animated Text Section */}
        <div className={`max-w-7xl mx-auto md:px-4 grid gap-2 lg:gap-8 items-center transition-all duration-700 ease-in-out ${ scrolled ? "grid-cols-1 md:grid-cols-2 justify-between items-center" : "flex-col  "}`}>
          {/* Hero Image */}
          <div
            className={`transition-all duration-700 ease-in ${
              scrolled ? "w-full" : "w-full "
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl group h-full">
              <div className="relative w-full h-full">
                <img
                  src={heroimg}
                  alt="Team collaboration"
                  className={`transition-all duration-700 ease-in-out object-cover ${
                    scrolled ? "h-[300px] lg:h-[400px]" : "lg:h-[600px] h-[450px]"
                  } w-full`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-400 rounded-sm opacity-80"></div>
                <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-pink-400 rounded-sm opacity-80"></div>
                <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-green-400 rounded-sm opacity-80"></div>
              </div>
            </div>
          </div>

          {/* Main Text floats from right */}
          <div
            className={`transition-all md:px-8 duration-700 ease-in-out ${
              showMainText
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-xl lg:text-3xl font-semibold font-poppins leading-relaxed">
              More than a tech service —{" "}
              <span className="text-emerald-600">Betasys.ai</span>{" "}
              <span className="text-slate-800">
                fuels intelligent growth for innovators across healthcare,
                retail, finance, and beyond.
              </span>
            </h3>
          </div>
        </div>

        {/* Paragraph floats from bottom */}
        <div
          className={` mt-5 md:mt-16 transition-all duration-700 ease-in-out ${
            showParagraph
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-7xl mx-auto space-y-8 md:px-4">
            <div>
              <p className="text-gray-700 font-poppins text-xs md:text-[20px] leading-relaxed text-center">
                Fifteen years ago, businesses were overwhelmed by fragmented
                systems, manual processes, and outdated digital tools.
                Betasys.ai was founded to change that — with a vision to
                simplify complexity through purposeful technology. What began as
                a small team offering software solutions has grown into a
                company that builds intelligent systems to help businesses
                operate smarter, faster, and with greater clarity.
              </p>
            </div>
            <div>
              <p className="text-gray-700 font-poppins text-xs md:text-[20px] leading-relaxed text-center">
                Over the years, our journey evolved alongside the needs of our
                clients. We expanded from traditional web and mobile development
                into AI-powered platforms, automation tools, and custom data
                engines that solve real business problems. Today, Betasys.ai
                stands as a strategic technology partner for companies across
                industries — delivering scalable, human-centric solutions that
                turn bold ideas into real-world results.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Banner;
