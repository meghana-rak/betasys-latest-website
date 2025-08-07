import React from "react";
import { useIntersectionObserver } from "../../hooks/useParallax";

const testimonials = [
    {
        quote:
            "“Our AI strategy session helped us reduce customer churn by 35% within six months. The team not only guided us through the tech but helped reimagine our entire customer experience.”",
        author: "- COO, Retail Tech Company",
    },
    {
        quote:
            "“Our AI strategy session helped us reduce customer churn by 35% within six months. The team not only guided us through the tech but helped reimagine our entire customer experience.”",
        author: "- COO, Retail Tech Company",
    },
    {
        quote:
            "“Our AI strategy session helped us reduce customer churn by 35% within six months. The team not only guided us through the tech but helped reimagine our entire customer experience.”",
        author: "- COO, Retail Tech Company",
    },
];

function Stories() {
    const { isVisible, setElement } = useIntersectionObserver();

    return (
        <div ref={setElement}
            className={`pb-10  transition-all duration-1000 bg-white text-[#000000]${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                }`}>
            <div className="px-4 mx-auto mt-8 md:mt-14 max-w-7xl sm:px-6 lg:px-8">
                 <h2 className="md:text-[38px] text-[28px] leading-tight  font-helvetica font-regular text-[#042337] my-4">
                    Success <span className="font-bold">Stories</span>
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
                            <p className="mb-8 text-[16px] md:text-[20px] font-light text-[#D4D4D4] leading-relaxed font-poppins ">
                                {item.quote}
                            </p>
                            <h3 className="font-semibold text-[22px] md:text-[24px] font-poppins mt-4">
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
