import React from "react";
import { TrendingUp, ArrowRight, Zap, Target } from "lucide-react";

function CaseStudyComponent() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="md:col-span-3">
          <p className="text-[#00A148] font-medium text-[18px] uppercase tracking-wide font-poppins">
            Case Studies
          </p>
          <h2 className="md:text-[38px] font-bold  text-[28px] leading-tight   font-regular text-[#042337] mt-[4px] mb-[1px]">
            Real Results For Real Businesses
          </h2>
          <p className="max-w-3xl text-gray-700 font-poppins  text-[18px] md:text-[22px]  mb-8">
            See how our AI solutions drive measurable business outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Case Study 1 */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Regional Gas Station Chain Increases Profit Margins by 15%
            </h3>

            <p className="text-gray-700 mb-6 leading-relaxed">
              A 12-location gas station chain used Petrolynks to optimize
              pricing and inventory, resulting in a 15% increase in profit
              margins and 30% reduction in stockouts within 90 days of
              implementation.
            </p>

            <div className="flex items-center justify-between">
              <div className="flex space-x-4 text-sm">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                  +15% Profit
                </span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                  -30% Stockouts
                </span>
              </div>
            </div>

            <button className="mt-6 text-green-600 font-semibold hover:text-green-700 flex items-center group">
              Read Full Case Study
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Case Study 2 */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-8 h-8 text-orange-600" />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Manufacturing Company Reduces Downtime by 37%
            </h3>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Using our custom predictive maintenance AI model, a mid-sized
              manufacturer identified equipment failures before they happened,
              reducing unplanned downtime by 37% and saving over $450,000
              annually.
            </p>

            <div className="flex items-center justify-between">
              <div className="flex space-x-4 text-sm">
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium">
                  -37% Downtime
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                  $450K Saved
                </span>
              </div>
            </div>

            <button className="mt-6 text-orange-600 font-semibold hover:text-orange-700 flex items-center group">
              Read Full Case Study
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Case Study 3 */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-8 h-8 text-blue-600" />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Retail Chain Improves Inventory Accuracy to 98%
            </h3>

            <p className="text-gray-700 mb-6 leading-relaxed">
              By implementing our data foundation services and custom AI models,
              a 25-store retail chain improved inventory accuracy from 82% to
              98%, reducing carrying costs and increasing customer satisfaction.
            </p>

            <div className="flex items-center justify-between">
              <div className="flex space-x-4 text-sm">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                  98% Accuracy
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                  Lower Costs
                </span>
              </div>
            </div>

            <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700 flex items-center group">
              Read Full Case Study
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudyComponent;
