import { useEffect, useState } from "react";
import heroimg from '../../assests/Aboutpage/heroimg.png';

function Herosection() {
    const [scrolled, setScrolled] = useState(false);
    const [showMainText, setShowMainText] = useState(false);
    const [showParagraph, setShowParagraph] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [showTransformedLayout, setShowTransformedLayout] = useState(false);
    const [showMissionSection, setShowMissionSection] = useState(false);
    const [showValuesSection, setShowValuesSection] = useState(false);

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

    useEffect(() => {
        setIsLoaded(true);
        const timer = setTimeout(() => setIsVisible(true), 200);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);

            // Trigger transformation when scrolled past 400px
            if (currentScrollY > 400) {
                setShowTransformedLayout(true);
            } else {
                setShowTransformedLayout(false);
            }

            // Show mission section when scrolled past 800px
            if (currentScrollY > 800) {
                setShowMissionSection(true);
            } else {
                setShowMissionSection(false);
            }

            // Show values section when scrolled past 1200px
            if (currentScrollY > 1200) {
                setShowValuesSection(true);
            } else {
                setShowValuesSection(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Calculate transform values based on scroll
    const scrollProgress = Math.min(scrollY / 400, 1);
    const imageScale = 1 - (scrollProgress * 0.65); // Scale from 1 to 0.35
    const imageTranslateX = scrollProgress * -35; // Move left
    const imageTranslateY = scrollProgress * -25; // Move up

    return (
        <div>
            {/* Animated background patterns */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-200 rounded-full animate-pulse"></div>
                <div className="absolute top-40 right-20 w-1 h-1 bg-emerald-300 rounded-full animate-ping"></div>
                <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-emerald-200 rounded-full animate-bounce"></div>
            </div>


            {/* Main Content */}
            <main className="relative z-10 px-3 md:px-6 md:pt-32 ">
                <div>
                    {/* Hero Section */}
                    <div className="text-center md:mb-16">
                        <div className="text-[#5A5A5A] font-semibold text-lg font-poppins mb-3 md:mb-6">
                            About Us
                        </div>

                        <div className="relative ">
                            <h1 className="max-w-5xl font-helvetica text-3xl md:text-4xl lg:text-7xl font-bold ">
                                <div>
                                    <span className="text-slate-800">Your </span>
                                    <span className="text-emerald-600 relative">
                                        Trusted Partner
                                    </span>
                                </div>
                                <div className="text-slate-800">
                                    Smart, Scalable Solutions
                                </div>
                            </h1>
                        </div>
                    </div>

                    {/* Container */}
                    <div className="max-w-7xl mx-auto md:px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            {/* Hero Image Section */}
                            {/* Hero Image Section - Transforms on scroll */}
                            <div className={`relative transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'} ${showTransformedLayout ? 'fixed top-40 left-16 w-96 h-64 z-20' : ''
                                }`}>
                                {/* Green accent line - transforms with image */}
                                {/* <div 
              className="absolute left-0 top-0 w-1 bg-emerald-500 transition-all duration-1000 ease-out"
              style={{
                height: showTransformedLayout ? '100%' : '100%',
                transform: showTransformedLayout ? 'none' : `translateX(${imageTranslateX}%) translateY(${imageTranslateY}%)`
              }}
            ></div> */}

                                <div
                                    className="transition-all duration-1000 ease-out"
                                    style={{
                                        marginLeft: showTransformedLayout ? '0px' : '32px',
                                        transform: showTransformedLayout ? 'none' : `translateX(${imageTranslateX}%) translateY(${imageTranslateY}%) scale(${imageScale})`
                                    }}
                                >
                                    <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 group">
                                        <div className="relative">
                                            <img
                                                src={heroimg}
                                                alt="Team collaboration with sticky notes"
                                                className={`w-full object-cover transition-all duration-1000 group-hover:scale-105 ${showTransformedLayout ? 'w-full h-full' : 'h-[500px] md:h-[600px]'
                                                    }`}
                                            />

                                            {/* Animated overlay elements */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                            {/* Floating sticky note animations */}
                                            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-400 rounded-sm opacity-80 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
                                            <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-pink-400 rounded-sm opacity-80 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
                                            <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-green-400 rounded-sm opacity-80 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Text Content - Appears alongside transformed image */}
                            <div className={`transition-all duration-1000 ${showTransformedLayout ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16 pointer-events-none'
                                } ${showTransformedLayout ? 'fixed top-40 left-80 right-16 z-10' : 'hidden'}`}>
                                <div className="md:space-y-8 pt-4">
                                    {/* Main heading */}
                                    <div className={`transition-all duration-800 delay-300 ${showTransformedLayout ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
                                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
                                            More than a tech service —
                                        </h2>
                                    </div>

                                    {/* Subheading with green text */}
                                    <div className={`transition-all duration-800 delay-500 ${showTransformedLayout ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
                                        <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                                            <span className="text-emerald-600">Betasys.ai</span>
                                            <span className="text-slate-800"> fuels intelligent growth for innovators across healthcare, retail, finance, and beyond.</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            {/* Paragraph content below - appears with delay */}
                            <div className={`transition-all duration-1000 delay-700 ${showTransformedLayout ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
                                } ${showTransformedLayout ? 'fixed top-[520px] left-0 right-0 px-16 z-10' : 'hidden'}`}>
                                <div className="max-w-7xl mx-auto space-y-8">
                                    {/* First paragraph */}
                                    <div className={`transition-all duration-800 delay-900 ${showTransformedLayout ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
                                        <p className="text-lg text-slate-600 leading-relaxed">
                                            Fifteen years ago, businesses were overwhelmed by fragmented systems, manual processes, and outdated digital tools. Betasys.ai was founded to change that — with a vision to simplify complexity through purposeful technology. What began as a small team offering software solutions has grown into a company that builds intelligent systems to help businesses operate smarter, faster, and with greater clarity.
                                        </p>
                                    </div>

                                    {/* Second paragraph */}
                                    <div className={`transition-all duration-800 delay-1100 ${showTransformedLayout ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
                                        <p className="text-lg text-slate-600 leading-relaxed">
                                            Over the years, our journey evolved alongside the needs of our clients. We expanded from traditional web and mobile development into AI-powered platforms, automation tools, and custom data engines that solve real business problems. Today, Betasys.ai stands as a strategic technology partner for companies across industries — delivering scalable, human-centric solutions that turn bold ideas into real-world results.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Paragraph content */}
                    {/* <div className="mt-5 md:mt-16">
                        <div className="max-w-7xl mx-auto space-y-8 md:px-4">
                            <div>
                                <p className="text-gray-700 font-poppins text-xs md:text-[20px] leading-relaxed text-center ">
                                    Fifteen years ago, businesses were overwhelmed by fragmented systems, manual processes, and outdated digital tools. Betasys.ai was founded to change that — with a vision to simplify complexity through purposeful technology. What began as a small team offering software solutions has grown into a company that builds intelligent systems to help businesses operate smarter, faster, and with greater clarity.
                                </p>
                            </div>

                            <div>
                                <p className="text-gray-700 font-poppins text-xs md:text-[20px] leading-relaxed text-center">
                                    Over the years, our journey evolved alongside the needs of our clients. We expanded from traditional web and mobile development into AI-powered platforms, automation tools, and custom data engines that solve real business problems. Today, Betasys.ai stands as a strategic technology partner for companies across industries — delivering scalable, human-centric solutions that turn bold ideas into real-world results.
                                </p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </main>
        </div>
    )
}

export default Herosection
