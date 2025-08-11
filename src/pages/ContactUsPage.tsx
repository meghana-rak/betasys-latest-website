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
        <div className="bg-white ">
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
                            <p className="text-[#00A148] font-medium text-[18px] uppercase tracking-wide font-poppins">GET IN TOUCH</p>
                            <h2 className="md:text-[38px] text-[28px] font-helvetica leading-tight font-regular text-[#042337] mt-[4px] mb-[1px]">
                                We are ready to help you and
                                <span className='font-bold'> Answer your question</span>
                            </h2>
                             <p className="max-w-3xl text-gray-700 font-poppins  text-[18px] md:text-[22px]  mb-8">Explore expert content, practical guides, and real-world use cases to for your business.</p>
                        </div>
                        <div>
                            <p className="font-semibold text-black font-poppins lg:my-0  text-[22px] md:text-[24px]">Call Center</p>
                            <p className="text-gray-700 font-poppins text-[18px] md:text-[22px]">+91-8080404566</p>
                            {/* <p className="text-gray-700 font-poppins text-[18px] md:text-[22px]">(572) 481-6883</p> */}
                        </div>

                        <div className=" my-4 " >
                            <p className="font-semibold text-black font-poppins lg:my-0  text-[22px] md:text-[24px]">Address</p>
                            <p className="text-gray-700 font-poppins text-[18px] md:text-[22px]">4th floor, Chidanand Heights,  Nagpur,<br />
                                above Titan eye Care, Manish Nagar, Somalwada,<br />
                                Maharashtra 440025</p>
                        </div>
                    </div>

                    <div className="w-full md:h-96 rounded-lg overflow-hidden">
                      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.5351975912226!2d79.0726599778843!3d21.091218635564637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bfd7ae5cb621%3A0x88ff86a105e9ecf1!2sBetasys%20AI%20Learning%20Hub!5e0!3m2!1sen!2sus!4v1754917486511!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                        <iframe
                            title="Nagpur Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.5351975912226!2d79.0726599778843!3d21.091218635564637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bfd7ae5cb621%3A0x88ff86a105e9ecf1!2sBetasys%20AI%20Learning%20Hub!5e0!3m2!1sen!2sus!4v1754917486511!5m2!1sen!2sus"
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
                        
                    </div>
                </div>
            </section>

        </div>

    );
};

export default ContactUsPage;
