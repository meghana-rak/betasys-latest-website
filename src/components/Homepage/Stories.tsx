import React from "react";
import { useIntersectionObserver } from "../../hooks/useParallax";

const testimonials = [
    {
        quote:
            "“Betasys helped us make sense of our data without hiring a team of data scientists. Their DataSpeak tool lets our store managers get answers directly from our database without technical knowledge. The ROI was clear within the first month.”",
        author: "- Sarah Johnson, Operations Director, QuickStop Convenience Stores",
    },
    {
        quote:
            "“The Petrolynks dashboard gives me complete visibility into all my locations from anywhere. I can spot trends, compare performance, and make decisions based on real data instead of gut feeling. It’s transformed how I run my business.”",
        author: "- Michael Rodriguez, Owner, FuelRight Gas Stations",
    },
    {
        quote:
            "“We were skeptical about AI, but Betasys made it practical. Their POC approach let us see results before committing, and their team took the time to understand our specific manufacturing challenges. The predictive maintenance model they built has paid for itself many times over.”",
        author: "- David Chen, Plant Manager, Precision Manufacturing Inc.",
    },
];

function Stories() {
    const { isVisible, setElement } = useIntersectionObserver();

    return (
        <div ref={setElement}
            className={` transition-all duration-1000 bg-white text-[#000000]${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                }`}>
            <div className="px-4 mx-auto mt-8 md:mt-14 container sm:px-6 lg:px-8">
                 <h2 className="md:text-[38px] font-bold text-[28px] leading-tight    font-regular text-[#042337] my-4">
                    Success Stories
                </h2>
                <p className="max-w-3xl text-gray-700 font-poppins  text-[18px] md:text-[22px]  mb-8">
                    Delivering Value Across Sectors and Scales identify high-impact
                    opportunities for artificial intelligence, assess readiness, and
                    implement scalable AI
                </p>

                <div className="grid grid-cols-1  gap-3 lg:grid-cols-3">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-r from-[#022334] via-[#022334] to-[#06689A] text-white rounded-2xl shadow-md md:p-6 p-4"
                        >
                            <p className="mb-8 text-[16px] md:text-[18px] font-light text-gray-300 leading-relaxed font-poppins ">
                                {item.quote}
                            </p>
                            <h3 className="font-semibold text-[22px] md:text-[20px] text-green-400 font-poppins mt-4">
                                {item.author}
                            </h3>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    )
}

export default Stories
