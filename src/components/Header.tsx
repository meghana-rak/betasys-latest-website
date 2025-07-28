import React from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assests/LOGO-01.png'
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`py-5 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-slate-900/95 backdrop-blur-sm border-b border-slate-800'
        : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="w-64">
              <Link to='/'>
                <img src={logo} alt='logo' />
              </Link>
            </div>
          </div>

          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 font-poppins">
              <a href="#" className="text-white  px-3 py-2 text-lg transition-colors">Services</a>
              <a href="#" className="text-white  px-3 py-2 text-lg  transition-colors">Product</a>
              <a href="#" className="text-white  px-3 py-2 text-lg  transition-colors">About</a>
              <a href="#" className="text-white px-3 py-2 text-lg  transition-colors">Career</a>
              <a href="#" className="text-white  px-3 py-2 text-lg  transition-colors">Blog</a>
              <a href="#" className="text-white  px-3 py-2 text-lg transition-colors">Contact</a>
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`font-poppins px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t font border-slate-800 ${isScrolled ? 'bg-slate-900' : 'bg-slate-900/95 backdrop-blur-sm'
              }`}>
              <a href="#" className="text-white block px-3 py-2 text-base ">Services</a>
              <a href="#" className="text-white block px-3 py-2 text-base ">Product</a>
              <a href="#" className="text-white block px-3 py-2 text-base ">About</a>
              <a href="#" className="text-white block px-3 py-2 text-base ">Career</a>
              <a href="#" className="text-white block px-3 py-2 text-base ">Blog</a>
              <a href="#" className="text-white block px-3 py-2 text-base ">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;