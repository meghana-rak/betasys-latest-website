import React, { useState, useEffect } from 'react'
import stackimg from '../../assests/Aboutpage/inovation.png'
import { useIntersectionObserver } from '../../hooks/useParallax';

function OurValues() {
      const { isVisible, setElement } = useIntersectionObserver();

    return (
        <section
            id="who-section"
            ref={setElement}
            className={`py-10 bg-gray-50 transition-all duration-1000 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-16'
                }`}
        >
            <div>
            {/* Our Values Section */}
            <div className={`transition-all duration-1000 `}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Values Header */}
                    <div className={`md:mb-16 transition-all duration-800 delay-300 `}>
                        {/* Green accent line */}
                        {/* <div className="w-1 h-16 bg-emerald-500 mb-8"></div> */}

                        <p className="text-[#00A148] font-medium text-[18px] uppercase tracking-wide font-poppins">
                            Our Values
                        </p>

                        <h2 className="md:text-[38px] text-[28px] leading-tight font-helvetica font-regular text-[#042337] mt-[4px] mb-[1px]">
                            Empowering Progress <span className="font-bold">Through Innovation</span>
                        </h2>

                        <p className="max-w-3xl text-gray-700 font-poppins  text-[18px] md:text-[22px]  mb-8">
                            At Betasys, we blend advanced AI with business insight to build solutions that accelerate innovation and results.
                        </p>
                    </div>

                    {/* Content Grid */}
                    {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"> */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
                        {/* Left Side - Dark Card (1/3 width) */}
                        <div className="lg:col-span-2">
                            <div className="bg-slate-800 rounded-2xl p-5 md:p-12 h-full relative overflow-hidden group">
                                <div className="relative z-10 flex flex-col justify-between gap-8">
                                    <p className="text-[16px] md:text-[22px] font-light text-[#D4D4D4] leading-relaxed font-poppins line-clamp-4 lg:line-clamp-6">
                                        Our mission is to harness the power of technology and innovation to solve real-world problems and create lasting value. We are committed to building intelligent, user-centric solutions that empower businesses, enhance lives, and drive meaningful progress. Guided by purpose and driven by impact, we strive to make a difference through every product, partnership, and experience we create.
                                    </p>

                                    {/* Stacked layers icon */}
                                    <div className="flex justify-end">
                                        <img src={stackimg} alt='img' className='object-contain w-10 md:w-auto' />
                                    </div>
                                </div>

                                {/* Hover effect overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>

                        {/* Right Side - Image Collage (2/3 width) */}
                        <div className="lg:col-span-1">
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
            </div>
        </section>
    )
}

export default OurValues
