import React, { useEffect, useState } from 'react';
import heroimg from '../assests/Aboutpage/heroimg.png'

function AboutPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [showTransformedLayout, setShowTransformedLayout] = useState(false);
    const [showMissionSection, setShowMissionSection] = useState(false);
    const [showValuesSection, setShowValuesSection] = useState(false);

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
    const imageTranslateX = scrollProgress * -45; // Move left
    const imageTranslateY = scrollProgress * -25; // Move up
    return (
        <div className="min-h-[300vh] bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
            {/* Animated background patterns */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-200 rounded-full animate-pulse"></div>
                <div className="absolute top-40 right-20 w-1 h-1 bg-emerald-300 rounded-full animate-ping"></div>
                <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-emerald-200 rounded-full animate-bounce"></div>
            </div>


            {/* Main Content */}
            <main className="relative z-10 px-6 pt-32">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Section */}
                    <div className={`text-center mb-16 transition-all duration-1000 ${showTransformedLayout ? 'opacity-0 -translate-y-20 pointer-events-none' : 'opacity-100 translate-y-0'
                        }`}>
                        <div className={`text-slate-700 font-semibold text-lg font-poppins mb-6 transition-all duration-800 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            About Us
                        </div>

                        <div className="relative">
                            {/* Green accent line */}
                            {/* <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-1 h-16 bg-emerald-500 transition-all duration-1000 delay-500 ${isVisible ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}></div> */}

                            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 font-poppins">
                                <div className={`transition-all duration-800 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                                    <span className="text-slate-800">Your </span>
                                    <span className="text-emerald-600 relative">
                                        Trusted Partner
                                        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-emerald-200 transform scale-x-0 transition-transform duration-1000 delay-1200"></div>
                                    </span>
                                </div>
                                <div className={`text-slate-800 transition-all duration-800 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                                    Smart, Scalable Solutions
                                </div>
                            </h1>
                        </div>
                    </div>

                    {/* Hero Image Section - Transforms on scroll */}
                    <div className={`relative transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'} ${showTransformedLayout ? 'fixed top-40 left-16 w-96 h-64 z-20' : ''
                        }`}>
                        {/* Green accent line - transforms with image */}
                        <div
                            className="absolute left-0 top-0 w-1 bg-emerald-500 transition-all duration-1000 ease-out"
                            style={{
                                height: showTransformedLayout ? '100%' : '100%',
                                transform: showTransformedLayout ? 'none' : `translateX(${imageTranslateX}%) translateY(${imageTranslateY}%)`
                            }}
                        ></div>

                        <div
                            className="transition-all duration-1000 ease-out"
                            // style={{
                            //     marginLeft: showTransformedLayout ? '0px' : '32px',
                            //     transform: showTransformedLayout ? 'none' : `translateX(${imageTranslateX}%) translateY(${imageTranslateY}%) scale(${imageScale})`
                            // }}
                        >
                            <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 group">
                                <div className="relative">
                                    <img
                                        src={heroimg}
                                        alt="Team collaboration with sticky notes"
                                        className={`w-full object-cover transition-all duration-1000 group-hover:scale-105 ${showTransformedLayout ? 'h-full' : 'h-[500px] md:h-[600px]'
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
                        <div className="space-y-8 pt-4">
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

                {/* Our Mission Section */}
                <div className={`transition-all duration-1000 ${showMissionSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
                    } ${showMissionSection ? 'fixed top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 z-30 overflow-y-auto' : 'hidden'}`}>
                    <div className="max-w-7xl mx-auto px-16 pt-40">
                        {/* Mission Header */}
                        <div className={`mb-16 transition-all duration-800 delay-300 ${showMissionSection ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
                            {/* Green accent line */}
                            {/* <div className="w-1 h-16 bg-emerald-500 mb-8"></div> */}

                            <div className="text-emerald-600 font-medium text-lg mb-6">
                                Our Mission
                            </div>

                            <h2 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight mb-8">
                                The Values <span className="text-slate-600">Behind Every Decision We Make</span>
                            </h2>

                            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
                                At Betasys, we blend advanced AI with business insight to build solutions that accelerate innovation and results.
                            </p>
                        </div>

                        {/* Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                            {/* Values Card */}
                            <div className={`transition-all duration-800 delay-500 ${showMissionSection ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
                                <div className="bg-slate-800 rounded-2xl p-8 h-full relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                                    {/* Green accent line */}
                                    <div className="absolute left-0 top-0 w-1 h-full bg-emerald-500"></div>

                                    <div className="relative z-10">
                                        <p className="text-white text-lg leading-relaxed mb-12">
                                            These are more than words — they are our compass. They guide every decision, action, and idea. We stay true to them in every project. Because how we work matters as much as what we build.
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <h3 className="text-white text-3xl font-bold">Values</h3>
                                            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                                                <div className="w-4 h-4 bg-white rounded-sm"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover effect overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>

                            {/* Pillars Card */}
                            <div className={`transition-all duration-800 delay-700 ${showMissionSection ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
                                <div className="bg-slate-800 rounded-2xl p-8 h-full relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                                    <div className="relative z-10">
                                        <p className="text-white text-lg leading-relaxed mb-12">
                                            Our work stands on a foundation of strong beliefs. Integrity, innovation, and empathy lead the way. These principles shape our team and culture. They keep us aligned, accountable, and inspired.
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <h3 className="text-white text-3xl font-bold">Pillars</h3>
                                            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                                                <div className="flex space-x-1">
                                                    <div className="w-1 h-4 bg-white rounded-full"></div>
                                                    <div className="w-1 h-3 bg-white rounded-full"></div>
                                                    <div className="w-1 h-5 bg-white rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover effect overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>

                            {/* Ethos Card */}
                            <div className={`transition-all duration-800 delay-900 ${showMissionSection ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
                                <div className="bg-slate-800 rounded-2xl p-8 h-full relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                                    <div className="relative z-10">
                                        <p className="text-white text-lg leading-relaxed mb-12">
                                            What we believe shapes what we create. Our ethos is built on trust, purpose, and bold thinking. It lives in our mindset and in every detail. And it's reflected in the impact we aim to deliver.
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <h3 className="text-white text-3xl font-bold">Ethos</h3>
                                            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                                                <div className="w-4 h-4 border-2 border-white rounded-full flex items-center justify-center">
                                                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover effect overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Values Section */}
                <div className={`transition-all duration-1000 ${showValuesSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
                    } ${showValuesSection ? 'fixed top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 z-40 overflow-y-auto' : 'hidden'}`}>
                    <div className="max-w-7xl mx-auto px-16 pt-40">
                        {/* Values Header */}
                        <div className={`mb-16 transition-all duration-800 delay-300 ${showValuesSection ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
                            {/* Green accent line */}
                            <div className="w-1 h-16 bg-emerald-500 mb-8"></div>

                            <div className="text-emerald-600 font-medium text-lg mb-6">
                                Our Values
                            </div>

                            <h2 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight mb-8">
                                Empowering Progress <span className="text-slate-600">Through Innovation</span>
                            </h2>

                            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
                                At Betasys, we blend advanced AI with business insight to build solutions that accelerate innovation and results.
                            </p>
                        </div>

                        {/* Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                            {/* Left Side - Dark Card */}
                            <div className={`transition-all duration-800 delay-500 ${showValuesSection ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
                                <div className="bg-slate-800 rounded-2xl p-12 h-full relative overflow-hidden group">
                                    <div className="relative z-10">
                                        <p className="text-white text-lg leading-relaxed mb-16">
                                            Our mission is to harness the power of technology and innovation to solve real-world problems and create lasting value. We are committed to building intelligent, user-centric solutions that empower businesses, enhance lives, and drive meaningful progress. Guided by purpose and driven by impact, we strive to make a difference through every product, partnership, and experience we create.
                                        </p>

                                        {/* Stacked layers icon */}
                                        <div className="flex justify-center">
                                            <div className="relative">
                                                <div className="w-16 h-4 bg-white rounded-lg"></div>
                                                <div className="w-16 h-4 bg-white/80 rounded-lg mt-2 ml-2"></div>
                                                <div className="w-16 h-4 bg-white/60 rounded-lg mt-2 ml-4"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover effect overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>

                            {/* Right Side - Image Collage */}
                            <div className={`transition-all duration-800 delay-700 ${showValuesSection ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
                                <div className="grid grid-cols-2 gap-4 h-full">
                                    {/* Top Left - Glasses */}
                                    <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                                        <img
                                            src="https://images.pexels.com/photos/947885/pexels-photo-947885.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
                                            alt="Vision and clarity"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Top Right - Camera/Technology */}
                                    <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                                        <img
                                            src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
                                            alt="Technology and innovation"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Bottom - Eye/Vision */}
                                    <div className="col-span-2 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                                        <img
                                            src="https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2"
                                            alt="Vision and insight"
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Custom styles for animations */}
            <style jsx>{`
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
        </div>
    )
}

export default AboutPage
