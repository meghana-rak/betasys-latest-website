import React from "react";
import frame2 from "../../assests/Frame2.png";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Phone, Mail, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <>
      <section className="py-20 bg-[#00A651] relative mb-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="mb-8">
            <h2 className="text-[28px] md:text-[42px] font-bold text-white mb-6 leading-tight text-left">
              Ready To Transform Your Business With AI?
            </h2>
            <p className="text-[18px] md:text-[20px] text-blue-100 max-w-3xl leading-relaxed text-left">
              Book a free 30-minute consultation to discuss your specific
              challenges and see how our AI solutions can deliver measurable
              results for your business.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start mb-6">
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link to="/contactus">
                <button className="flex items-center justify-center font-poppins px-6 py-3 text-[14px] md:text-[16px] font-semibold text-white rounded-lg bg-[#002A3A] hover:bg-[#00394f] transition duration-300 w-full sm:w-auto">
                  <Calendar className="w-5 h-5 mr-3" />
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
              <Link to="/contactus">
                <button className="flex items-center justify-center font-poppins px-6 py-3  text-[14px] md:text-[16px] font-semibold text-white rounded-lg bg-[#002A3A] hover:bg-[#00394f] transition duration-300 w-full sm:w-auto">
                  <BarChart3 className="w-5 h-5 mr-3" />
                  Request Product Demo
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="border-t border-blue-400/30 ">
            <p className="text-gray-100 mb-4 text-lg text-left font-semibold">
              Contact us directly:
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-start items-start sm:items-center">
              <a
                href="mailto:info@betasys.ai"
                className="flex items-center text-white hover:text-blue-200 transition-colors duration-300 group"
              >
                <div className="bg-white/10 p-2 rounded-lg mr-3 group-hover:bg-white/20 transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[16px] md:text-[16px] ">
                  info@betasys.ai
                </span>
              </a>

              <div className="hidden sm:block w-px h-6 bg-blue-400/30"></div>

              <a
                href="tel:+15551234567"
                className="flex items-center text-white hover:text-blue-200 transition-colors duration-300 group"
              >
                <div className="bg-white/10 p-2 rounded-lg mr-3 group-hover:bg-white/20 transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-[16px] md:text-[16px] ">
                  (555) 123-4567
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* Decorative Bottom Image */}
        <img
          src={frame2}
          alt="Decorative Curve"
          className="absolute bottom-0 left-0 w-full pointer-events-none"
        />
      </section>
      {/* <section className="relative bg-[#00A651] text-white mb-6">
        <div className="container px-4 py-8 lg:py-16 mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="text-left max-w-2xl">
              <h2 className="text-[28px] md:text-[42px]   font-bold leading-tight mb-4">
                Ready To Transform Your Business With AI?
              </h2>
              <p className="mb-4 text-[18px] md:text-[22px] text-white/80">
                Book a free 30-minute consultation to discuss your specific
                challenges and see how our AI solutions can deliver measurable
                results for your business.
              </p>
              <p className="text-[18px] md:text-[22px] text-white/80">
                Contact us: info@betasys.ai | (555) 123-4567
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link to="/contactus">
                <button className="font-poppins px-6 py-3 text-[16px] md:text-[18px] font-semibold text-white rounded-lg bg-[#002A3A] hover:bg-[#00394f] transition duration-300 w-full sm:w-auto">
                  Book Free Consultation
                </button>
              </Link>
              <Link to="/contactus">
                <button className="font-poppins px-6 py-3 text-[16px] md:text-[18px] font-semibold text-white rounded-lg bg-[#002A3A] hover:bg-[#00394f] transition duration-300 w-full sm:w-auto">
                  Request Product Demo
                </button>
              </Link>
            </div>
          </div>
        </div>

        <img
          src={frame2}
          alt="Decorative Curve"
          className="absolute bottom-0 left-0 w-full pointer-events-none"
        />
      </section> */}
    </>
  );
};

export default CTA;
