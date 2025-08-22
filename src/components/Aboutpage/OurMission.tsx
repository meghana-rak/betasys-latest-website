import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../../hooks/useParallax';

const cardData = [
    {
        title: "Values",
        content:
            "These are more than words — they are our compass. They guide every decision, action, and idea. We stay true to them in every project. Because how we work matters as much as what we build.",
        icon: (
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
        ),
        delay: 500,
    },
    {
        title: "Pillars",
        content:
            "Our work stands on a foundation of strong beliefs. Integrity, innovation, and empathy lead the way. These principles shape our team and culture. They keep us aligned, accountable, and inspired.",
        icon: (
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <div className="flex space-x-1">
                    <div className="w-1 h-4 bg-white rounded-full"></div>
                    <div className="w-1 h-3 bg-white rounded-full"></div>
                    <div className="w-1 h-5 bg-white rounded-full"></div>
                </div>
            </div>
        ),
        delay: 700,
    },
    {
        title: "Ethos",
        content:
            "What we believe shapes what we create. Our ethos is built on trust, purpose, and bold thinking. It lives in our mindset and in every detail. And it's reflected in the impact we aim to deliver.",
        icon: (
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
            </div>
        ),
        delay: 900,
    },
];


function OurMission() {
    const [showTransformedLayout, setShowTransformedLayout] = useState(false);
    const [showMissionSection, setShowMissionSection] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const { isVisible, setElement } = useIntersectionObserver();

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
        <section
            id="who-section"
            ref={setElement}
            className={`py-10 transition-all duration-1000 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-16'
                }`}
        >
        <div>
            {/* Our Mission Section */}
            <div className=' container  mx-auto px-4 sm:px-6 lg:px-8  transition-all duration-1000'>
                <div className="  transition-all duration-1000">
                    {/* Mission Header */}
                    <div className={`md:mb-16 transition-all duration-800 delay-300 `}>
                        {/* Green accent line */}
                        {/* <div className="w-1 h-16 bg-emerald-500 mb-8"></div> */}

                        <p className="text-[#00A148] font-medium text-[18px] uppercase tracking-wide font-poppins">
                            Our Mission
                        </p>

                        <h2 className="md:text-[38px] font-bold text-[28px] leading-tight font-helvetica font-regular text-[#042337] mt-[4px] mb-[1px]">
                            The Values Behind Every Decision We Make
                        </h2>

                        <p className="max-w-3xl text-gray-700 font-poppins  text-[18px] md:text-[22px]  mb-8">
                            At Betasys, we blend advanced AI with business insight to build solutions that accelerate innovation and results.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 ">
                        {cardData.map((card, index) => (
                            <div
                                key={index}
                                className="transition-all duration-800 delay-500"
                            >
                                <div className="bg-slate-800 rounded-2xl p-4 md:p-8 h-full relative overflow-hidden group hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
                                    {/* Card Content */}
                                    <div className="flex-1 flex flex-col justify-between gap-8">
                                        <p className="text-[16px] md:text-[22px] font-light text-[#D4D4D4] leading-relaxed font-poppins line-clamp-4 lg:line-clamp-6">
                                            {card.content}
                                        </p>

                                        {/* Title Section at Bottom */}
                                        <div className="flex items-center justify-between mt-8">
                                            <h3 className="font-semibold text-white text-[24px] md:text-[28px] font-poppins ">
                                                {card.title}
                                            </h3>
                                            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                                                {card.icon}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </div>
        </section>
    )
}

export default OurMission
