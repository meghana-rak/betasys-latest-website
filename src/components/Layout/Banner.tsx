import React from 'react';
import frame from '../../assests/Servicepage/ServiceFrame.png'

function Banner({label}) {
    return (
        <div>
            <div className="relative bg-[#022334] h-[220px] sm:h-[260px] md:h-[300px] lg:h-[380px] xl:h-[380px] overflow-hidden">
                {/* Text Content */}
                <div className="absolute z-10 px-5 transform -translate-y-1/2 top-3/4 md:top-1/2 left-4 sm:left-8 md:left-12 lg:left-32">
                    <p className="text-[#00A148] font-medium text-[18px] uppercase tracking-wide font-poppins">Label</p>
                     <h1 className="text-[24px] font-bold text-white font-helvetica  sm:text-[28px] xl:text-4xl">{label}</h1>
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
