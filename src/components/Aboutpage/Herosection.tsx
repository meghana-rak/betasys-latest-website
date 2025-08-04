import React from 'react';
import heroimg from '../../assests/Aboutpage/heroimg.png';

function Herosection() {
    return (
        <div>
            {/* Animated background patterns */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-200 rounded-full animate-pulse"></div>
                <div className="absolute top-40 right-20 w-1 h-1 bg-emerald-300 rounded-full animate-ping"></div>
                <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-emerald-200 rounded-full animate-bounce"></div>
            </div>


            {/* Main Content */}
            <main className="relative z-10 px-3 md:px-6 pt-32">
                <div>
                    {/* Hero Section */}
                    <div className="text-center md:mb-16">
                        <div className="text-slate-700 font-semibold text-lg font-poppins mb-3 md:mb-6">
                            About Us
                        </div>

                        <div className="relative ">
                            <h1 className="max-w-5xl font-helvetica text-3xl md:text-4xl lg:text-7xl font-bold ">
                                <div>
                                    <span className="text-slate-800">Your </span>
                                    <span className="text-emerald-600 relative">
                                        Trusted Partner
                                    </span>
                                </div>
                                <div className="text-slate-800">
                                    Smart, Scalable Solutions
                                </div>
                            </h1>
                        </div>
                    </div>

                    {/* Container */}
                    <div className="max-w-7xl mx-auto md:px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            {/* Hero Image Section */}
                            <div className="relative w-full">
                                <div className="absolute left-0 top-0 w-1 bg-gradient-to-b from-transparent via-emerald-500 to-transparent h-full" />
                                <div>
                                    <div className="rounded-2xl overflow-hidden shadow-2xl group">
                                        <div className="relative">
                                            <img
                                                src={heroimg}
                                                alt="Team collaboration with sticky notes"
                                                className="w-full h-[300px] md:h-[600px] object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                                            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-400 rounded-sm opacity-80"></div>
                                            <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-pink-400 rounded-sm opacity-80"></div>
                                            <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-green-400 rounded-sm opacity-80"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div>
                                <div className="md:px-5">
                                    <div>
                                        <h3 className="text-xl md:text-3xl font-semibold font-poppins leading-relaxed">
                                            More than a tech service —
                                            <span className="text-emerald-600"> Betasys.ai </span>
                                            <span className="text-slate-800">
                                                fuels intelligent growth for innovators across healthcare, retail, finance, and beyond.
                                            </span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Paragraph content */}
                    <div className="mt-5 md:mt-16">
                        <div className="max-w-7xl mx-auto space-y-8 md:px-4">
                            <div>
                                <p className="text-gray-700 font-poppins text-xs md:text-[20px] leading-relaxed text-center ">
                                    Fifteen years ago, businesses were overwhelmed by fragmented systems, manual processes, and outdated digital tools. Betasys.ai was founded to change that — with a vision to simplify complexity through purposeful technology. What began as a small team offering software solutions has grown into a company that builds intelligent systems to help businesses operate smarter, faster, and with greater clarity.
                                </p>
                            </div>

                            <div>
                                <p className="text-gray-700 font-poppins text-xs md:text-[20px] leading-relaxed text-center">
                                    Over the years, our journey evolved alongside the needs of our clients. We expanded from traditional web and mobile development into AI-powered platforms, automation tools, and custom data engines that solve real business problems. Today, Betasys.ai stands as a strategic technology partner for companies across industries — delivering scalable, human-centric solutions that turn bold ideas into real-world results.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Herosection
