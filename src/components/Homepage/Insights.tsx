import React from 'react';
import { useIntersectionObserver } from '../../hooks/useParallax';
import { Link } from 'react-router-dom';

const Insights = () => {
  const { isVisible, setElement } = useIntersectionObserver();

  return (
    <section
      ref={setElement}
      className={`py-10 md:py-20 bg-gray-50 transition-all duration-1000 ${isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-16'
        }`}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex lg:flex-row flex-col justify-between items-start mb-12 transition-all duration-1000 delay-200 `}>
          <div>
            <p className="text-[#00A148] font-medium text-sm uppercase tracking-wide font-poppins">Insights & Resources</p>
            <h2 className="text-2xl font-helvetica font-regular md:text-4xl text-gray-900 my-1">
              AI <span className='font-bold'> Business Insights</span>
            </h2>
            <p className="max-w-4xl text-gray-600 font-poppins text-xs md:text-lg mb-2 ">
              Explore expert content, practical guides, and real-world use cases to unlock AI’s potential for your business.        </p>
          </div>
          <Link to=''>
            <button className="bg-[#00A148]  hover:bg-green-500 text-white px-2 py-1 lg:px-4 lg:py-2 rounded-lg font-regular transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-[#00A148]/25 relative overflow-hidden">
              <span className="relative z-10 font-poppins text-xs ">See All Blog</span>
            </button>
          </Link>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Large Featured Article - Left */}
          <div
            className="lg:col-span-1 transform transition-all duration-1000"
          >
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-2 ">
                <img
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Healthcare AI"
                  className=" w-full lg:h-full  object-cover group-hover:scale-110 transition-transform duration-700"
                />
                 <div className="absolute top-4 left-4">
                  <span className="bg-[#00A148] text-white px-3 py-1 rounded-full text-xs font-semibold">Healthcare</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="text-gray-500 text-sm font-poppins font-medium">19/06/2025</div>
              <h3 className="text-xl font-bold text-gray-700 my-2 group-hover:text-[#00A148] transition-colors duration-300">
                The Future of AI in Healthcare Transforming Patient Care
              </h3>
              <p className="text-gray-600 font-poppins text-sm md:text-md leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum.
              </p>
            </div>
          </div>

          {/* Center Featured Article */}
          <div
            className="lg:col-span-1 transform transition-all duration-1000"

          >
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-2 ">
                <img
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="AI Network"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#00A148] text-white px-3 py-1 rounded-full text-xs font-semibold">Healthcare</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="text-gray-500 text-sm font-poppins font-medium ">19/06/2025</div>
              <h3 className="text-xl font-semibold font-poppins  text-gray-700 my-2 group-hover:text-[#00A148] transition-colors duration-300">
                The Future of AI in Healthcare Transforming Patient Care
              </h3>
              <p className="text-gray-600 font-poppins text-sm md:text-md leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum.
              </p>
            </div>
          </div>

          {/* Right Column - Article List */}
          <div className="lg:col-span-1  space-y-6">
            {[
              {
                image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400",
                title: "The Future of AI in Healthcare Transforming Patient Care"
              },
              {
                image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
                title: "The Future of AI in Healthcare Transforming Patient Care"
              },
              {
                image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400",
                title: "The Future of AI in Healthcare Transforming Patient Care"
              }
            ].map((article, index) => (
              <div
                key={index}
                className="group cursor-pointer transform transition-all duration-1000 "
              >
                <div className="flex flex-col  md:flex-row gap-4 justify-between items-between">
                  <div className="relative overflow-hidden rounded-xl w-full md:w-2/6">
                    <img
                      src={article.image}
                      alt="Article"
                      className=" w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-gray-500 text-sm font-poppins font-medium">19/06/2025</div>
                      <span className="bg-[#00A148] text-white px-2 py-1 rounded-full text-xs font-semibold">Healthcare</span>
                    </div>
                    <h4 className="font-semibold text-sm  md:text-lg text-gray-800 group-hover:text-[#00A148] transition-colors duration-300 leading-tight">
                      {article.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>


  );
};

export default Insights;