
import React, { useEffect, useState, useRef } from "react";
import {
  Search,
  Menu,
  X,
  List,
  Star,
  Calendar,
  PhoneCall,
  Info,
  ChevronDown,
  ChevronUp,
  MapPin,
  Phone,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assests/alkys_logo.svg";
import { fetchDepartmentList } from "../../Store/ProductListing/ProductListingThunk.js";
import { useDispatch, useSelector } from "react-redux";

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
    <header className="bg-[#202020] text-white w-full md:h-[180px] fixed top-0 z-20 shadow-lg">
      {/* Top bar */}
      <div className="py-3 text-xs bg-black">
        <div className="flex flex-col items-center justify-between min-w-full gap-1 mx-auto text-[10px] md:text-sm text-center px-4 md:px-14 sm:flex-row sm:text-left">
          <div className="flex items-start justify-center gap-1 text-center md:items-center sm:gap-2 sm:text-left">
            <MapPin className="inline " size={14} />
            <span className="-ml-1 text-xs sm:text-sm">
              ALKY'S LIQUOR & WINE : 1927 GA-138 Suite 1300, Conyers, GA 30013
            </span>
          </div>
          <span className="flex items-center justify-center font-inter">
            <Phone className="inline mr-1" size={14} /> (770)-526-3527
          </span>
        </div>
      </div>

      {/* Main header */}
      <div className="relative w-full min-w-full px-3 py-2 mx-auto md:px-14 md:py-6 ">
        <div className="flex items-center justify-between w-full">
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

            {/* Mobile Toggle */}
            <button
              className="lg:hidden focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex justify-end lg:hidden">
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide-out menu */}
            <div className="relative w-3/5 md:w-2/5 max-w-xs h-full bg-[#111111] text-white p-6 space-y-4 shadow-lg transform transition-transform duration-300 translate-x-0 overflow-y-auto">
              <button
                className="absolute text-gray-400 top-4 right-4 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
              <button
                onClick={() => setShowCategories((prev) => !prev)}
                className="flex items-center justify-between w-full text-sm font-medium transition-colors hover:text-blue-400"
              >
                <span className="flex items-center gap-2 font-inter">
                  <List size={18} /> Categories
                </span>
                <span>
                  {showCategories ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronUp className="w-5 h-5" />
                  )}
                </span>
              </button>

              {/* Categories Dropdown */}
              {showCategories && (
                <ul className="py-2 pl-4 overflow-y-auto max-h-64">
                  {categories?.map(
                    (dept: {
                      DepartmentID: string;
                      DepartmentName: string;
                    }) => (
                      <li key={dept.DepartmentID} className="font-inter ">
                        <Link
                          to={/products/${dept.DepartmentID}}
                          state={{ departmentID: dept.DepartmentID }}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-100 transition duration-150 hover:bg-gray-800 hover:text-white"
                        >
                          {dept.DepartmentName}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              )}
              <Link
                // to="/brands"
                className="flex items-center gap-2 text-sm font-medium transition-colors font-inter hover:text-blue-400"
              >
                <Star size={18} /> Brand
              </Link>
              <Link
                to="/events"
                className="flex items-center gap-2 text-sm font-medium transition-colors font-inter hover:text-blue-400"
              >
                <Calendar size={18} /> Events
              </Link>
              <Link
                to="/contact-us"
                className="flex items-center gap-2 text-sm font-medium transition-colors font-inter hover:text-blue-400"
              >
                <PhoneCall size={18} /> Contact Us
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)} // ✅ Closes menu on click
                className="flex items-center gap-2 text-sm font-medium transition-colors font-inter hover:text-blue-400"
              >
                <Info size={18} /> About Us
              </Link>

              {/* Search - visible only on sm */}
              <div className="flex items-center px-2 py-1 mt-4 border border-gray-500 rounded-lg font-inter md:px-3 md:py-2 sm:flex md:hidden">
                <Search className="w-4 h-4  text-[#E4E4E4] mr-2" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent text-sm text-[#E4E4E4] placeholder-[#E4E4E4] outline-none w-32"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
