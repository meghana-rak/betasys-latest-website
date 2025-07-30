import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assests/LOGO-01.png'; 

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { alkysDepartments, status } = useSelector(
    (state) => state.productLists
  );

  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const [showBrands, setShowBrands] = useState(false);

  useEffect(() => {
    dispatch(fetchDepartmentList());
  }, [dispatch]);

  useEffect(() => {
    if (alkysDepartments && alkysDepartments.length > 0) {
      setCategories(alkysDepartments);
    }
  }, [alkysDepartments]);

  const [brands, setBrands] = useState([
    "Taaka Vodka",
    "Heineken",
    "Jeffersons",
    "Smirnoff",
    "Jack Daniels",
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <header className={`py-5 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-slate-900/95 backdrop-blur-sm border-b border-slate-800'
        : 'bg-transparent'
      }`}>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="logo"
              className="object-contain w-10 h-auto md:w-16 lg:w-20"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 lg:flex ">
            <div
              className=" group"
              onMouseEnter={() => !isOpen && setIsOpen(true)}
              onMouseLeave={() => !isOpen && setIsOpen(false)}
              ref={dropdownRef}
            >
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex items-center gap-1 text-lg transition-colors font-inter md:text-md xl:text-xl hover:text-blue-400"
                type="button"
              >
                Categories
              </button>
              {/* <div className="absolute left-0 z-40 w-40 mt-2 transition ease-in-out bg-white rounded-lg shadow-lg opacity-0 pointer-events-none duration-400 group-hover:opacity-100 group-hover:pointer-events-auto"> */}
              <div
                className={`absolute left-0 top-full z-40 -mt-4 bg-white text-black shadow-xl p-3 transition-all duration-300 ease-in-out w-screen
          ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
              >
                <div className="gap-2 mx-auto columns-5">
                  {categories &&
                    categories?.map(
                      (dept: {
                        DepartmentID: string;
                        DepartmentName: string;
                      }) => (
                        <p key={dept.DepartmentID}>
                          <Link
                            to={/products/${dept.DepartmentID}}
                            state={{ departmentID: dept.DepartmentID }}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsOpen(false);
                            }}
                            className="block px-4 py-2 text-gray-900 transition duration-150 font-inter text-md hover:bg-gray-800 hover:text-white"
                          >
                            {dept.DepartmentName}
                          </Link>
                        </p>
                      )
                    )}
                </div>
              </div>
            </div>
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-lg transition-colors font-inter md:text-md xl:text-xl hover:text-blue-400"
                type="button"
              >
                Brand
              </button>
              <div className="absolute left-0 z-40 w-40 mt-2 transition ease-in-out bg-white rounded-lg shadow-lg opacity-0 pointer-events-none duration-400 group-hover:opacity-100 group-hover:pointer-events-auto">
                {/* <ul className="py-2 overflow-y-auto max-h-64">
                  {brands?.map((brand, index) => (
                    <li key={index}>
                      <Link
                        to="/brands"
                        className="block px-4 py-2 text-sm text-gray-900 transition duration-150 hover:bg-gray-800 hover:text-white"
                      >
                        {brand}
                      </Link>
                    </li>
                  ))}
                </ul> */}
              </div>
            </div>

            <Link
              to="/events"
              className="text-lg transition-colors font-inter md:text-md xl:text-xl hover:text-blue-400"
            >
              Events
            </Link>
            <Link
              to="/contact-us"
              className="text-lg transition-colors font-inter md:text-md xl:text-xl hover:text-blue-400"
            >
              Contact Us
            </Link>
            <Link
              to="/about"
              className="text-lg transition-colors font-inter md:text-md xl:text-xl hover:text-blue-400"
            >
              About Us
            </Link>
          </nav>

          {/* Search & Toggle */}
          <div className="flex items-center space-x-4">
            {/* Desktop Search */}
            <div className="font-inter  hidden md:flex border border-gray-500 items-center bg-[#202020] rounded-lg px-4 py-2">
              <Search className="w-4 h-4 text-[#E4E4E4] mr-2" />
              <input
                type="text"
                placeholder="Search for categories, brand..."
                className="bg-transparent text-sm text-[#E4E4E4] placeholder-[#E4E4E4] outline-none w-52 md:w-64"
              />
            </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 font-poppins">
            {navLinks.map(({ name, path }) =>
              path.startsWith('/') ? (
                <Link key={name} to={path} className="text-white text-lg hover:text-green-400">
                  {name}
                </Link>
              ) : (
                <a key={name} href={path} className="text-white text-lg hover:text-green-400">
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
                  className="block text-white text-base hover:text-green-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {name}
                </Link>
              ) : (
                <a
                  key={name}
                  href={path}
                  className="block text-white text-base hover:text-green-400"
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

export default Header;
