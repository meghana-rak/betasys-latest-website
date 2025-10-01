import React from "react";
import { Database, Fuel, ArrowRight, CheckCircle } from "lucide-react";

function App() {
  return (
    <section className="py-10 md:py-20">
      <div className=" container mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid lg:grid-cols-2 gap-8">
          {/* DataSpeak Product Card */}
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
            {/* Product Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="DataSpeak Dashboard Interface"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay using your color */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#022334]/80 to-transparent"></div>
              <div className="absolute bottom-4 left-6 text-white">
                <div className="flex items-center mb-2">
                  <div className="bg-white/20 p-2 rounded-lg mr-3">
                    <Database className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">DataSpeak</h3>
                </div>
                <p className="text-white/80 text-sm">
                  Ask Your Database Questions In Plain English
                </p>
              </div>
            </div>

            <div className="p-8">
              <p className="text-gray-600 mb-6  text-[18px] leading-relaxed">
                DataSpeak transforms how you interact with your data by letting
                anyone query databases using everyday language—no SQL knowledge
                required. Connect with MySQL, PostgreSQL, MongoDB, MS SQL Server
                and more to get instant insights across your organization.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Why Business Leaders Choose DataSpeak:
              </h4>

              <div className="space-y-3 mb-8">
                {[
                  "Cut analysis costs by up to 90% by eliminating the technical bottleneck",
                  "Generate complex queries in seconds instead of waiting days for reports",
                  "Empower every team to make data-driven decisions without technical training",
                  "Access insights from 50,000+ pre-trained SQL patterns for immediate value",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700  text-[16px]">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <button className="bg-gradient-to-r from-[#022334] to-[#022334] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center group">
                Try DataSpeak Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Petrolynks Product Card */}
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
            {/* Product Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="DataSpeak Dashboard Interface"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay using your color */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#022334]/80 to-transparent"></div>
              <div className="absolute bottom-4 left-6 text-white">
                <div className="flex items-center mb-2">
                  <div className="bg-white/20 p-2 rounded-lg mr-3">
                    <Fuel className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">Petrolynks</h3>
                </div>
                <p className="text-white/80 text-sm">
                  The AI Platform Built For Gas Stations & C-Stores
                </p>
              </div>
            </div>

            <div className="p-8">
              <p className="text-gray-600 mb-6 leading-relaxed  text-[18px]">
                Trusted by 50+ stores across multiple states, Petrolynks
                provides gas station and convenience store owners with a unified
                dashboard for complete business visibility. Monitor fuel sales,
                track inventory, manage pricing, and analyze customer
                patterns—all in one place.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Why Store Owners Trust Petrolynks:
              </h4>

              <div className="space-y-3 mb-8">
                {[
                  "View real-time fuel and store sales data in a single dashboard",
                  "Monitor tank levels and receive automatic alerts before issues arise",
                  "Generate tax and department reports with a single click",
                  "Ask questions in plain English and get instant answers about your business",
                  "Make smarter pricing and inventory decisions with AI-powered recommendations",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-[16px]">{benefit}</span>
                  </div>
                ))}
              </div>

              <button className="bg-gradient-to-r from-[#022334] to-[#022334] text-[18px] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center group">
                See Petrolynks In Action
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
