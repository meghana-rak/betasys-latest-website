import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assests/logo.png'; 
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Product', path: '/product' },
    { name: 'About', path: '/aboutus' },
    // { name: 'Career', path: '#' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contactus' },
  ];


  const specialPaths = ['/aboutus', '/EbookDetails', '/product'];
  const isSpecialPath = specialPaths.some(path => location.pathname.startsWith(path));

  return (
      // <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <header
      className={`py-5 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSpecialPath
          ? 'bg-slate-900/95 backdrop-blur-sm border-b border-slate-800' // custom styles for specific paths
          : isScrolled
          ? 'bg-slate-900/95 backdrop-blur-sm border-b border-slate-800'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          {/* Logo */}
          <div className="w-40">
            <Link to="/">
              <img src={logo} alt="Logo" className="w-auto " />
              {/* <img src={logo} alt="Logo" className="object-contain w-auto h-28" /> */}
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden space-x-6 md:flex font-poppins">
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
          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden font-poppins px-4 pt-3 pb-4 space-y-2 border-t border-slate-800 ${
              isScrolled ? 'bg-slate-900' : 'bg-slate-900/95 backdrop-blur-sm'
            }`}
          >
            {navLinks.map(({ name, path }) =>
              path.startsWith('/') ? (
                <Link
                  key={name}
                  to={path}
                  className="block text-sm text-white hover:text-green-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {name}
                </Link>
              ) : (
                <a
                  key={name}
                  href={path}
                  className="block text-sm text-white hover:text-green-400"
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
  );
};
export default Header;

