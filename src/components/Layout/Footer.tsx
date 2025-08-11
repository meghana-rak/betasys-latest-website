import React from 'react';
import { useIntersectionObserver } from '../../hooks/useParallax';
import { Link } from 'react-router-dom';
import logo from '../../assests/logo.png';

const Footer = () => {
  const { isVisible, setElement } = useIntersectionObserver();
  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Product', path: '#' },
    { name: 'About', path: '/aboutus' },
    // { name: 'Career', path: '#' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contactus' },
  ];

  return (
    <footer
      ref={setElement}
      className={`bg-slate-900 text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top section: Logo + Links */}
        <div
          className={`flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {/* Logo */}
          <div className="flex-shrink-0 w-40 mb-4 md:mb-0 p-3">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="md:h-28 w-auto object-contain mx-auto md:mx-0"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center  md:justify-start font-poppins gap-3 sm:gap-y-0 sm:gap-x-6 mb-2">
            {navLinks.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className="text-white text-[18px] lg:text-[22px]  hover:text-green-400"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom copyright */}
        <div
          className={` text-[18px] md:text-[22px] py-2 font-poppins text-gray-400 text-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
          <p>&copy; 2024 BetasysAI. All rights reserved.</p>
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