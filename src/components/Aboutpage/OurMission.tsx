import React, { useState, useEffect } from 'react'

function OurMission() {
    const [showTransformedLayout, setShowTransformedLayout] = useState(false);
    const [showMissionSection, setShowMissionSection] = useState(false);
    const [scrollY, setScrollY] = useState(0);
      const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

 

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
      
     
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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


        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            {/* Our Mission Section */}
           <div className={`transition-all duration-1000 ${
          showMissionSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
        } ${showMissionSection ? 'fixed top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 z-30 overflow-y-auto' : 'hidden'}`}>
          <div className="max-w-7xl mx-auto px-16 pt-40">
            {/* Mission Header */}
            <div className={`mb-16 transition-all duration-800 delay-300 ${showMissionSection ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
                <div className="max-w-7xl mx-auto px-3 md:px-16 pt-10 ">
                    {/* Mission Header */}
                    <div className={`md:mb-16 transition-all duration-800 delay-300 `}>
                        {/* Green accent line */}
                        {/* <div className="w-1 h-16 bg-emerald-500 mb-8"></div> */}

                        <p className="text-[#00A148] font-medium text-sm uppercase tracking-wide font-poppins">
                            Our Mission
                        </p>

                        <h2 className="md:text-4xl text-2xl font-helvetica font-regular text-gray-900 my-1">
                            The Values <span className='font-bold'>Behind Every Decision We Make</span>
                        </h2>

                        <p className="max-w-4xl text-gray-600 font-poppins text-xs md:text-lg  mb-8">
                            At Betasys, we blend advanced AI with business insight to build solutions that accelerate innovation and results.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                        {/* Values Card */}
                        <div className={`transition-all duration-800 delay-500 `}>
                            <div className="bg-slate-800 rounded-2xl p-4 md:p-8 h-full relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                                {/* Green accent line */}
                                {/* <div className="absolute left-0 top-0 w-1 h-full bg-emerald-500"></div> */}

                                <div className="relative z-10 flex flex-col justify-between gap-8">
                                    <p className="text-gray-300 line-clamp-6 text-xs md:text-lg font-poppins leading-relaxed font-light">
                                        These are more than words — they are our compass. They guide every decision, action, and idea. We stay true to them in every project. Because how we work matters as much as what we build.
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold">Values</h3>
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
                        <div className={`transition-all duration-800 delay-700 `}>
                            <div className="bg-slate-800 rounded-2xl p-4 md:p-8 h-full relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                                <div className="relative z-10 flex flex-col justify-between gap-8">
                                    <p className="text-gray-300 text-xs line-clamp-6 md:text-lg font-poppins leading-relaxed font-light">
                                        Our work stands on a foundation of strong beliefs. Integrity, innovation, and empathy lead the way. These principles shape our team and culture. They keep us aligned, accountable, and inspired.
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold">Pillars</h3>
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
                        <div className={`transition-all duration-800 delay-900 `}>
                            <div className="bg-slate-800 rounded-2xl p-4 md:p-8 h-full relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                                <div className="relative z-10 flex flex-col justify-between gap-8">
                                    <p className="text-gray-300 text-xs line-clamp-6 md:text-lg font-poppins leading-relaxed font-light">
                                        What we believe shapes what we create. Our ethos is built on trust, purpose, and bold thinking. It lives in our mindset and in every detail. And it's reflected in the impact we aim to deliver.
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold">Ethos</h3>
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
        </div>
        </div>
        </div>
    )
}

export default OurMission
