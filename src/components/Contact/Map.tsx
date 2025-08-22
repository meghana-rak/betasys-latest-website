import React from 'react';
import { useIntersectionObserver } from '../hooks/useParallax';

function Map() {
    const [isVisible, setElement] = React.useState<HTMLElement | null>(null);

    return (
        <section
            ref={setElement}
            className={`py-10 md:py-20 bg-cover  bg-no-repeat bg-center  transition-all duration-1000 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-16'
                }`}

        >
            <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
                <iframe
                    title="Nagpur Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.534736638073!2d79.07499257525835!3d21.09123703057369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2539bd9a9f240a73%3A0x7f35f795b3106f8e!2sBetasys%20AI%20Private%20Ltd!5e0!3m2!1sen!2sin!4v1754993396499!5m2!1sen!2sin"
                    className="w-full h-full border-none"
                    allowFullScreen
                    loading="lazy"
                    style={{
                        minHeight: "350px",
                        width: "100%",
                        height: "100%",
                        border: "none",
                        borderRadius: "8px",
                    }}
                ></iframe>

                <div className="flex  mt-6">
                    <a
                        href="https://www.google.com/maps/dir/?api=1&destination=Betasys+AI+Private+Ltd,+Nagpur"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block font-poppins text-[16px] md:text-[20px] px-3 py-2 bg-[#00A148] text-white rounded-md shadow hover:bg-green-700 transition-colors font-semibold"
                    >
                        Get Directions
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Map
