import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import worldmap from '../assests/worldmap.png';
import { useIntersectionObserver } from '../hooks/useParallax';
import Worldmap from "../components/Contact/Worldmap";
import Banner from "../components/Layout/Banner";

// const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
const geoUrl = "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson";


const ContactUsPage = () => {
    const { isVisible, setElement } = useIntersectionObserver();
    const label = "Contact Us"
    return (
        <div className="bg-white text-gray-900">
            {/* Header Section */}
            {/* <div className="bg-[#002A44] text-white px-6 py-16 relative">
                <h2 className="text-green-400 text-sm font-semibold mb-2">Label</h2>
                <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/path/to/your-wave-image.svg')] bg-cover bg-no-repeat opacity-10" />
            </div> */}
            <Banner label={label} />
            <Worldmap />

            {/* Contact Details */}
            <section
                ref={setElement}
                className={`py-10 md:py-20 bg-cover  bg-no-repeat bg-center  transition-all duration-1000 ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-16'
                    }`}

            >
                <div className="relative max-w-7xl justify-between grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className=" pr-12 flex justify-between flex-col">
                        <div>
                            <h3 className="text-[#00A148] font-medium text-sm uppercase tracking-wide font-poppins">GET IN TOUCH</h3>
                            <h2 className="text-xl font-helvetica font-regular md:text-3xl  text-black my-1">
                                We are ready to help you and
                                <span className='font-bold'> Answer your question</span>
                            </h2>
                            <p className="max-w-4xl text-gray-600 font-poppins leading-tight text-xs md:text-[20px] ">Explore expert content, practical guides, and real-world use cases to for your business.</p>
                        </div>
                        <div>
                            <p className="font-semibold text-black font-poppins lg:my-0 my-2">Call Center</p>
                            <p className="text-gray-700 font-poppins text-xs md:text-[20px]">(778) 686-2396</p>
                            <p className="text-gray-700 font-poppins text-xs md:text-[20px]">(572) 481-6883</p>
                        </div>

                        <div className=" " >
                            <p className="font-semibold text-black font-poppins lg:my-0 my-2">Address</p>
                            <p className="text-gray-700 font-poppins text-xs md:text-[20px]">4th Floor, Chidanand Heights<br />
                                Manish Nagar, Nagpur - 440025<br />
                                Maharashtra, India</p>
                        </div>
                    </div>

                    <div className="w-full md:h-96 rounded-lg overflow-hidden">
                        <iframe
                            title="Nagpur Location"
                            src="https://www.google.com/maps?q=Manish%20Nagar,%20Nagpur,%20India&output=embed"
                            className="w-full h-full border-none"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>

        </div>

    );
};

export default ContactUsPage;
