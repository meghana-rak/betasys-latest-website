import React from 'react';
import { useIntersectionObserver } from '../../hooks/useParallax';
import { Link } from 'react-router-dom';
import logo from '../../assests/logo.png';

const Footer = () => {
  const { isVisible, setElement } = useIntersectionObserver();
  const navLinks = [
    {
      name: 'Services',
      // path: '/services',
      dropdown: [
        { name: 'AI Consulting', path: '/services/ai-consulting' },
        { name: 'Agentic AI', path: '/services/agentic-ai' },
        { name: 'Cloud Data Engineering', path: '/services/cloud-data-engineering' },
        { name: 'Product Engineering', path: '/services/product-engineering' },
        { name: 'Magnetic AI', path: '/services/magnetic-ai' },
      ],
    },
    { name: 'Product', path: '/product' },
    { name: 'About', path: '/aboutus' },
    { name: 'Ebook', path: '/ebooklisting' },
    { name: 'Blog', path: '/blog' },
    { name: 'Partners', path: '/partners' },
    { name: 'Contact', path: '/contactus' },
  ];

  return (
    <footer
      ref={setElement}
      className={`bg-slate-900 text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top section: Logo + Links */}
        <div
          className={`flex flex-col md:flex-row items-start justify-center md:justify-between text-center md:text-left transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {/* Logo */}
          <div className="flex-shrink-0 w-40 mb-4 md:mb-0 py-3">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="md:h-28 w-auto object-contain mx-auto md:mx-0"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-10 font-poppins mb-2 p-2 md:p-6 lg:p-8">
            {/* Services column */}
            <div className="flex flex-col items-start">
              <span className="text-white cursor-pointer font-semibold text-[18px] lg:text-[22px] hover:text-green-400 mb-1">
                Services
              </span>
              <ul className="flex flex-col gap-1">
                {navLinks
                  .find((link) => link.name === "Services")
                  ?.dropdown?.map((service) => (
                    <li key={service.name} className=" text-start text-[16px] lg:text-[18px] hover:text-green-400">
                      <Link
                        to={service.path}
                        className="text-gray-300 text-start text-[16px] lg:text-[18px] hover:text-green-400"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Other links column */}
            <div className="flex flex-col  items-start gap-2">
              {navLinks
                .filter((link) => link.name !== "Services")
                .map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-white font-semibold text-[18px] lg:text-[22px] hover:text-green-400"
                  >
                    {link.name}
                  </Link>
                ))}
            </div>
          </div>


        </div>

        {/* Bottom copyright */}
        <div
          className={` text-[16px] md:text-[20px] py-2 font-poppins text-gray-400 text-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
          <p>&copy; {new Date().getFullYear()} BetasysAI. All rights reserved.</p>
        </div>
      </div>
    </footer>

    // <footer
    //   ref={setElement}
    //   className={`bg-slate-900 text-white  transition-all duration-1000
    //      ${isVisible
    //       ? 'opacity-100 translate-y-0'
    //       : 'opacity-0 translate-y-16'
    //     }
    //   `}
    // >
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className={`flex flex-wrap sm:flex-row items-center justify-center md:justify-between transition-all duration-1000 delay-200 ${isVisible
    //       ? 'opacity-100 translate-y-0'
    //       : 'opacity-0 translate-y-8'
    //       }`}>
    //       <div>
    //         <div className="flex-shrink-0 w-40">
    //           <Link to="/">
    //             <img src={logo} alt="Logo" className="md:h-28 w-auto object-contain" />
    //           </Link>
    //         </div>
    //       </div>

    //       <div>
    //         <div className="flex flex-wrap items-center text-center font-poppins sm:flex-row gap-3 mb-2 sm:gap-y-0 sm:gap-x-6">
    //           {navLinks.map(({ name, path }) => (
    //             <Link
    //               key={name}
    //               to={path}
    //               className="text-white text-center text-xs md:text-sm hover:text-green-400"
    //             >
    //               {name}
    //             </Link>
    //           ))}
    //         </div>
    //       </div>

    //     </div>

    //     <div className={`border-t border-slate-800 text-xs md:text-sm py-2 font-poppins text-center text-gray-400 transition-all duration-1000 delay-400 ${isVisible
    //       ? 'opacity-100 translate-y-0'
    //       : 'opacity-0 translate-y-4'
    //       }`}>
    //       <p>&copy; 2024 BetasysAI. All rights reserved.</p>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;