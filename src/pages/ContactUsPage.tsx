import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import worldmap from '../assests/worldmap.png';
import { useIntersectionObserver } from '../hooks/useParallax';
import Worldmap from "../components/Contact/Worldmap";
import Banner from "../components/Layout/Banner";
import ContactForm from "../components/Contact/ContactForm";
import Map from "../components/Contact/Map";

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
                <div className="relative container justify-between grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className=" md:pr-12 flex flex-col">
                        <div>
                            <p className="text-[#00A148] font-medium text-[18px] uppercase tracking-wide font-poppins">GET IN TOUCH</p>
                            <h2 className="md:text-[38px] font-bold text-[28px] font-helvetica leading-tight font-regular text-[#042337] mt-[4px] mb-[1px]">
                                We are ready to help you and Answer your question
                            </h2>
                            <p className="max-w-3xl text-gray-700 font-poppins  text-[18px] md:text-[22px] ">Explore expert content, practical guides, and real-world use cases to for your business.</p>
                        </div>
                        <div className="my-6">
                            <p className="font-semibold text-black font-poppins lg:my-0  text-[22px] md:text-[24px]">Call Center</p>
                            <p className="text-gray-700 font-poppins text-[18px] md:text-[22px]">+91-8080404566</p>
                            {/* <p className="text-gray-700 font-poppins text-[18px] md:text-[22px]">(572) 481-6883</p> */}
                        </div>

                        <div >
                            <p className="font-semibold text-black font-poppins  text-[22px] md:text-[24px]">Address</p>
                            <p className="text-gray-700 font-poppins text-[18px] md:text-[22px]">4th floor, Chidanand Heights,  Nagpur,<br />
                                above Titan eye Care, Manish Nagar, Somalwada,<br />
                                Maharashtra 440025</p>
                        </div>
                    </div>

                    <div >
                        <p className="text-[#00A148] font-medium text-[18px] uppercase tracking-wide font-poppins mb-2">Inquiry Form</p>
                        <ContactForm />
                    </div>
                </div>
                <Map />

            </section>

        </div>

    );
};

export default ContactUsPage;
