import React from 'react';
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
    return (
        <div>
            <div className="relative max-w-7xl text-center mx-auto px-4 sm:px-6 lg:px-8">
                <div className=" mb-4 ">
                    <p className="text-[#00A148] font-medium text-sm uppercase tracking-wide font-poppins">Leadership</p>
                    <h2 className="md:text-4xl text-2xl font-helvetica font-regular text-gray-900 my-1">
                        Guided by Vision, <span className='font-bold'> Driven by Purpose </span>
                    </h2>
                    <p className=" text-center  text-gray-600 font-poppins text-xs md:text-lg  mb-8">
                        At Betasys, we blend advanced AI with business insight to build solutions that accelerate innovation and results.
                    </p>
                </div>
            </div>
            <div className="lg:my-16">
                <ImageCarousel images={carouselImages} autoScrollInterval={4000} />
            </div>
        </div>
    )
}

export default GuidedBy
