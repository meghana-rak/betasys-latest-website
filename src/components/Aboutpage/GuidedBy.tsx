import React from 'react';
import { useIntersectionObserver } from '../../hooks/useParallax';
import ImageCarousel from './ImageCarousel';
import img1 from '../../assests/Aboutpage/carouselimages/Rectangle 49.png';
import img2 from '../../assests/Aboutpage/carouselimages/Rectangle 50.png';
import img3 from '../../assests/Aboutpage/carouselimages/Rectangle 51.png';
import img4 from '../../assests/Aboutpage/carouselimages/Rectangle 52.png';
import img5 from '../../assests/Aboutpage/carouselimages/Rectangle 53.png';

function GuidedBy() {
    const carouselImages = [
        {
            img:img1,
            name: "Mr. Navneet Lal",
            position : "FullStack Developer"
        },
        {
            img:img2,
            name: "Mr. Navneet Lal",
            position : "FullStack Developer"
        },
        {
            img:img3,
            name: "Mr. Navneet Lal",
            position : "FullStack Developer"
        },
        {
            img:img4,
            name: "Mr. Navneet Lal",
            position : "FullStack Developer"
        },
        {
            img:img5,
            name: "Mr. Navneet Lal",
            position : "FullStack Developer"
        },
        {
            img:img1,
            name: "Mr. Navneet Lal",
            position : "FullStack Developer"
        },
        {
            img:img2,
            name: "Mr. Navneet Lal",
            position : "FullStack Developer"
        },
      
    ]

    const { isVisible, setElement } = useIntersectionObserver();
    
    return (
        <section
            id="who-section"
            ref={setElement}
            className={`py-10 md:py-20 transition-all duration-1000 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-16'
                }`}
        >
        <div>
            <div className="relative max-w-7xl text-center mx-auto px-4 sm:px-6 lg:px-8">
                <div className=" mb-4 flex flex-col items-center justify-center">
                    <p className="text-[#00A148] font-medium text-[18px] uppercase tracking-wide font-poppins">Leadership</p>
                     <h2 className="md:text-[38px] text-[28px] leading-tight font-helvetica font-regular text-[#042337] mt-[4px] mb-[1px]">
                        Guided by Vision, <span className='font-bold'> Driven by Purpose </span>
                    </h2>
                    <p className="max-w-3xl text-gray-700 font-poppins  text-[18px] md:text-[22px]  mb-8">
                        At Betasys, we blend advanced AI with business insight to build solutions that accelerate innovation and results.
                    </p>
                </div>
            </div>
            <div className="lg:my-16">
                <ImageCarousel images={carouselImages} autoScrollInterval={4000} />
            </div>
        </div>
        </section>
    )
}

export default GuidedBy
