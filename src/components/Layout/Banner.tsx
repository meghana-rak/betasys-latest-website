import React from 'react';
import frame from '../../assests/Servicepage/ServiceFrame.png'
import { ChevronRight } from 'lucide-react';

function Banner({label}) {
    return (
        <div className="relative bg-[#022334] mt-16">
            <div className=" container mx-auto px-4 sm:px-6 lg:px-8 h-[220px] sm:h-[260px] md:h-[300px] lg:h-[380px] xl:h-[380px] overflow-hidden flex items-center ">
            {/* Text Content */}
            <div className="z-10 mt-12 sm:mt-0">
                <h1 className="text-[24px] font-bold text-white font-helvetica sm:text-[28px] xl:text-4xl">{label}</h1>
                <nav className="flex items-center space-x-2 text-[18px] uppercase tracking-wide font-poppins md:mt-2 ">
                    <button
                        className="text-[#00A148] font-poppins text-[22px] focus:outline-none hover:underline"
                        onClick={() => window.location.href = '/'}
                    >
                        Betasys.ai
                    </button>
                    <span className="text-white font-medium"><ChevronRight/></span>
                    <button
                        className="text-white font-poppins text-[22px] focus:outline-none hover:underline"
                        onClick={() => window.location.href = `/betasys.ai/${label}`}
                    >
                        {label}
                    </button>
                </nav>
            </div>

            {/* Background Image */}
            <img
                src={frame}
                alt="Background Curve"
                className="absolute bottom-0 left-0 object-cover w-full h-full"
            />
            </div>
        </div>
    )
}

export default Banner
