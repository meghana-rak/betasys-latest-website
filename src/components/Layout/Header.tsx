import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assests/logo.png';
import logo2 from '../../assests/Asset 41.png'
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const location = useLocation()
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      name: 'Services',
      // path: '/services',
      dropdown: [
        { name: 'AI Consulting', path: '/services/ai-consulting' },
        { name: 'Agentic AI', path: '/services/agrntic-ai' },
        { name: 'Cloud Data Engineering', path: '/services/cloud-data-engineering' },
        { name: 'Product Engineering', path: '/services/product-engineering' },
        { name: 'Magnetic AI', path: '/services/magnetic-ai' },
      ],
    },
    { name: 'Product', path: '/product' },
    { name: 'About', path: '/aboutus' },
    { name: 'EBook', path: '/ebooklisting' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contactus' },
  ];


  const specialPaths = ['/aboutus', '/contactus', '/ebooklisting', '/ebookdetails/', '/product', '/blogdetails/', '/blog', '/services/ai-consulting', '/services/agrntic-ai', '/services/cloud-data-engineering', '/services/product-engineering', '/services/magnetic-ai'];
  const isSpecialPath = specialPaths.some(path => location.pathname.startsWith(path));

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
    ${isSpecialPath || isScrolled
          ? 'bg-white backdrop-blur-sm '
          // ? 'bg-slate-900/95 backdrop-blur-sm border-b border-slate-800'
          : 'bg-transparent'
        }
        `      }
    >
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-1">
        <div className="w-full ">
          <div className="flex items-center justify-between h-16 gap-3">
            {/* Logo */}
            <div className="w-40">
              <Link to="/">
                <img
                  src={isSpecialPath || isScrolled ? logo2 : logo}
                  alt="Logo"
                  className="w-auto"
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            {/* <nav className="hidden space-x-6 md:flex font-poppins">
            {navLinks.map(({ name, path }) =>
              path.startsWith('/') ? (
                <Link key={name} to={path} className="text-[16px] text-white lg:text-[20px] hover:text-green-400">
                  {name}
                </Link>
              ) : (
                <a key={name} href={path} className="text-[16px] text-white lg:text-[20px] hover:text-green-400">
                  {name}
                </a>
              )
            )}
          </nav> */}
            <nav className="hidden space-x-6 md:flex font-poppins relative">
              {navLinks.map(({ name, path, dropdown }) =>
                dropdown ? (
                  <div
                    key={name}
                    className="relative group"
                    onMouseEnter={() => setOpenDropdown(name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div
                      className={`font-semibold text-[16px] lg:text-[20px] ${isSpecialPath || isScrolled ? 'text-gray-700' : 'text-white'
                        } hover:text-green-400`}
                    >
                      {name}
                    </div>

                    {/* Dropdown */}
                    {openDropdown === name && (
                      <div className="absolute left-0 top-full pt-3 w-56 bg-white rounded-md shadow-lg z-50">
                        {dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className={`block px-4 py-1 font-poppins text-[16px] lg:text-[18px]  hover:border-l-4 hover:border-green-600 hover:text-green-600 ${isSpecialPath || isScrolled ? 'text-gray-700' : 'text-gray-800'
                              }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : path.startsWith("/") ? (
                  <Link
                    key={name}
                    to={path}
                    className={`text-[16px] lg:text-[20px] font-semibold hover:text-green-400 ${isSpecialPath || isScrolled ? 'text-gray-700' : 'text-white'
                      }`}
                  >
                    {name}
                  </Link>
                ) : (
                  <a
                    key={name}
                    href={path}
                    className="text-[16px] lg:text-[20px] text-white hover:text-green-400"
                  >
                    {name}
                  </a>
                )
              )}
            </nav>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${isSpecialPath || isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div
              className={`md:hidden font-poppins px-4 pt-3 pb-4 space-y-2 border-t border-slate-800 ${isScrolled
                  ? "bg-slate-900"
                  : "bg-slate-900/95 backdrop-blur-sm"
                }`}
            >
              {navLinks.map(({ name, path, dropdown }) =>
                dropdown ? (
                  <div key={name} className="mb-2">
                    {/* Dropdown Trigger */}
                    <button
                      onClick={() => setIsServicesOpen((prev) => !prev)}
                      className="flex items-center justify-between w-full text-[16px] text-white"
                    >
                      {name}
                      {isServicesOpen ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>

                    {/* Dropdown Items */}
                    {isServicesOpen && (
                      <div className="pl-4 mt-1 space-y-1">
                        {dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block text-[16px] text-white hover:text-green-400"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : path?.startsWith("/") ? (
                  <Link
                    key={name}
                    to={path}
                    className="block text-[16px] text-white hover:text-green-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {name}
                  </Link>
                ) : (
                  <a
                    key={name}
                    href={path}
                    className="block text-[16px] text-white hover:text-green-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {name}
                  </a>
                )
              )}
            </div>
          )}
        </div>
      </header>
    </div>
  );
};
export default Header;

