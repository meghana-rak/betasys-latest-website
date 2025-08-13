import React from 'react';
import { useIntersectionObserver } from '../../hooks/useParallax';
import worldmap from "../../assests/worldmap.png";

function Worldmap() {
       const { isVisible, setElement } = useIntersectionObserver();
  return (
    <div>
       {/* World Map Section */}
            <div
                ref={setElement}
                className={` lg:py-6 lg:px-6 p-0
                 transition-all duration-1000 ${isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-16'
                    }`}>
                <div className="flex justify-center">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        {/* <ComposableMap projectionConfig={{ scale: 140 }} className="w-full h-auto">
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

                        </ComposableMap> */}
                        <img src={worldmap} alt="world map" className="w-full h-auto" />
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Worldmap
