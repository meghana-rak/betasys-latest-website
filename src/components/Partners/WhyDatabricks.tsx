import React from 'react';
import { useIntersectionObserver } from '../../hooks/useParallax';

function WhyDatabricks() {
    const { isVisible, setElement } = useIntersectionObserver();
    const databricksFeatures = [
        "One Unified Lakehouse",
        "Real-Time Data & Streaming",
        "Easy Machine Learning & GenAI",
        "Open, Flexible, and Secure",
    ];


    return (
        <div ref={setElement}
            className={` transition-all duration-1000 bg-white text-[#000000]${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                }`}>
            <section className="mx-auto container   px-4 sm:px-6 lg:px-8 md:px-10 py-10 md:py-20">
                <div className="  text-start ">
                    {/* Heading */}
                    <h2 className="md:text-[38px] font-bold text-[28px] font-helvetica leading-tight font-regular text-[#042337] mt-[4px] mb-[1px]">
                        Why Databricks?
                    </h2>
                    <p className="max-w-3xl text-gray-700 font-poppins  text-[18px] md:text-[22px]  mb-14">
                        Databricks gives you everything you need to turn raw data into valuable insights
                    </p>

                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {databricksFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-[#022333] text-white rounded-2xl py-6 px-14 flex flex-col justify-start relative"
                            >
                                {/* Card Text */}
                                <p className="text-center text-[18px] md:text-[22px] font-poppins leading-snug mt-2">
                                    {feature}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WhyDatabricks
