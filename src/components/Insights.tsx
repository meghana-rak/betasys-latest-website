import React from 'react';
import { useIntersectionObserver } from '../hooks/useParallax';

const Insights = () => {
  const { isVisible, setElement } = useIntersectionObserver();

  return (
      <section 
      ref={setElement}
      className={`py-20 bg-gray-50 transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-16'
      }`}
    >
        <div className="max-w-7xl mx-auto px-6">
          <div className={`flex justify-between items-start mb-12 transition-all duration-1000 delay-200 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
            <div>
              <div className="text-[#00A148] font-semibold text-sm tracking-wide uppercase mb-4">
                Insights & Resources
              </div>
              <h2 className="text-4xl  font-bold text-gray-900 mb-6">
                AI Business Insights
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
                Explore expert content, practical guides, and real-world use cases to unlock AI's potential for your business.
              </p>
            </div>
            <button className="group bg-gradient-to-r from-[#00A148] to-[#00C055] hover:from-[#00C055] hover:to-[#00A148] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-[#00A148]/25 relative overflow-hidden">
              <span className="relative z-10">See All Blog</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Large Featured Article - Left */}
            <div 
              className="lg:col-span-1 transform transition-all duration-1000"
              
            >
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-square">
                  <img 
                    src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Healthcare AI" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="text-gray-500 text-sm mb-2">19/06/2025</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00A148] transition-colors duration-300">
                  The Future of AI in Healthcare Transforming Patient Care
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum.
                </p>
              </div>
            </div>

            {/* Center Featured Article */}
            <div 
              className="lg:col-span-1 transform transition-all duration-1000"
              
            >
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video">
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
                <div className="text-gray-500 text-sm mb-2">19/06/2025</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00A148] transition-colors duration-300">
                  The Future of AI in Healthcare Transforming Patient Care
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum.
                </p>
              </div>
            </div>

            {/* Right Column - Article List */}
            <div className="lg:col-span-1 space-y-6">
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
                  className="group cursor-pointer transform transition-all duration-1000"
                
                >
                  <div className="flex gap-4 items-start">
                    <div className="relative overflow-hidden rounded-xl w-20 h-20 flex-shrink-0">
                      <img 
                        src={article.image} 
                        alt="Article" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-gray-500 text-sm">19/06/2025</div>
                        <span className="bg-[#00A148] text-white px-2 py-1 rounded-full text-xs font-semibold">Healthcare</span>
                      </div>
                      <h4 className="font-bold text-gray-900 group-hover:text-[#00A148] transition-colors duration-300 leading-tight">
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