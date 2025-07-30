import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

// const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
const geoUrl = "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson";


const ContactUsPage = () => {
    return (
        <div className="bg-white text-gray-900">
            {/* Header Section */}
            <div className="bg-[#002A44] text-white px-6 py-16 relative">
                <h2 className="text-green-400 text-sm font-semibold mb-2">Label</h2>
                <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/path/to/your-wave-image.svg')] bg-cover bg-no-repeat opacity-10" />
            </div>

            {/* World Map Section */}
            <div className="bg-gray-100 py-12 px-6">
                <div className="flex justify-center">
                    <div className="max-w-6xl w-full">
                        <ComposableMap projectionConfig={{ scale: 140 }} className="w-full h-auto">
                            <Geographies geography={geoUrl}>
                                {({ geographies }) =>
                                    geographies.map((geo) => (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            fill="#d1d5db"
                                            stroke="#4B5563"
                                            strokeWidth={0.5}
                                        />
                                    ))
                                }
                            </Geographies>

                        </ComposableMap>
                    </div>
                </div>
            </div>

            {/* Contact Details */}
            <div className="grid md:grid-cols-2 gap-10 px-6 py-12 items-start">
                <div>
                    <h3 className="text-green-600 text-sm font-semibold">GET IN TOUCH</h3>
                    <h2 className="text-2xl md:text-3xl font-bold mt-2">We are ready to help you and <br />
                        <span className="text-black font-extrabold">Answer your question</span></h2>
                    <p className="mt-4 text-gray-600">Explore expert content, practical guides, and real-world use cases to for your business.</p>

                    <div className="mt-6">
                        <p className="font-semibold">Call Center</p>
                        <p className="text-gray-700">(778) 686-2396</p>
                        <p className="text-gray-700">(572) 481-6883</p>
                    </div>

                    <div className="mt-4">
                        <p className="font-semibold">Address</p>
                        <p className="text-gray-700">4th Floor, Chidanand Heights<br />
                            Manish Nagar, Nagpur - 440025<br />
                            Maharashtra, India</p>
                    </div>
                </div>

                <div className="w-full h-96 rounded-lg overflow-hidden">
                    <iframe
                        title="Nagpur Location"
                        src="https://www.google.com/maps?q=Manish%20Nagar,%20Nagpur,%20India&output=embed"
                        className="w-full h-full border-none"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            
        </div>
    );
};

export default ContactUsPage;
