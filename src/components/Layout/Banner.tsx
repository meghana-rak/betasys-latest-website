import React from 'react';
import frame from '../../assests/Servicepage/ServiceFrame.png'
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Banner({label}) {
    return (
        <div className="relative bg-[#022334] mt-16">
            <div className=" container mx-auto px-4 sm:px-6 lg:px-8 h-[220px] sm:h-[260px] md:h-[300px] lg:h-[380px] xl:h-[380px] overflow-hidden flex items-center ">
            {/* Text Content */}
            <div className="z-10 m sm:mt-0">
                <h1 className="text-[24px] font-bold text-white font-helvetica sm:text-[28px] xl:text-4xl">{label}</h1>
                <nav className="flex items-center space-x-2 text-[16px] uppercase tracking-wide font-poppins md:mt-2 ">
                    <Link to='/'>
                    <button
                        className="text-[#34ef88] font-poppins text-[16px] md:text-[22px] focus:outline-none hover:underline"
                    >
                        Betasys.ai
                    </button>
                    </Link>
                    <span className="text-white font-medium"><ChevronRight className="w-3 md:w-5"/></span>
                    <button
                        className="text-white font-poppins text-[16px] md:text-[22px] focus:outline-none hover:underline"
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
