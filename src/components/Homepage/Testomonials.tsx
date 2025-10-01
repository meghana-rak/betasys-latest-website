import React from "react";
import { Quote } from "lucide-react";

function TestomonialComponent() {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="md:col-span-3">
          <p className="text-[#00A148] font-medium text-[18px] uppercase tracking-wide font-poppins">
            Our Partners
          </p>
          <h2 className="md:text-[38px] font-bold  text-[28px] leading-tight   font-regular text-[#042337] mt-[4px] mb-[1px]">
            Our AI Products
          </h2>
          <p className="max-w-3xl text-gray-700 font-poppins  text-[18px] md:text-[22px]  mb-8">
            Explore expert content, practical guides, and real-world use cases
            to unlock AI’s potential for your business.
          </p>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by business leaders who demand results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative group">
            <div className="absolute -top-4 left-8">
              <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>
            </div>

            <div className="pt-4">
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "Betasys helped us make sense of our data without hiring a team
                of data scientists. Their DataSpeak tool lets our store managers
                get answers directly from our database without technical
                knowledge. The ROI was clear within the first month."
              </p>

              <div className="border-t pt-6">
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    SJ
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Sarah Johnson</p>
                    <p className="text-gray-600 text-sm">Operations Director</p>
                    <p className="text-blue-600 text-sm font-medium">
                      QuickStop Convenience Stores
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative group">
            <div className="absolute -top-4 left-8">
              <div className="bg-purple-500 w-8 h-8 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>
            </div>

            <div className="pt-4">
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "The Petrolynks dashboard gives me complete visibility into all
                my locations from anywhere. I can spot trends, compare
                performance, and make decisions based on real data instead of
                gut feeling. It's transformed how I run my business."
              </p>

              <div className="border-t pt-6">
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-purple-400 to-purple-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    MR
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Michael Rodriguez
                    </p>
                    <p className="text-gray-600 text-sm">Owner</p>
                    <p className="text-purple-600 text-sm font-medium">
                      FuelRight Gas Stations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative group">
            <div className="absolute -top-4 left-8">
              <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>
            </div>

            <div className="pt-4">
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "We were skeptical about AI, but Betasys made it practical.
                Their POC approach let us see results before committing, and
                their team took the time to understand our specific
                manufacturing challenges. The predictive maintenance model they
                built has paid for itself many times over."
              </p>

              <div className="border-t pt-6">
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-green-400 to-green-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    DC
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">David Chen</p>
                    <p className="text-gray-600 text-sm">Plant Manager</p>
                    <p className="text-green-600 text-sm font-medium">
                      Precision Manufacturing Inc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestomonialComponent;
