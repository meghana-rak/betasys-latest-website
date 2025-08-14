import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../store/blogThunk.js";


const Sidebar: React.FC = ({ onCategorySelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { status, categories } = useSelector((state) => state.blog);

  const [categoriesList, setCategoriesList] = useState([]);

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    dispatch(fetchCategory());

  }, [dispatch]);

  useEffect(() => {

    if (categories && categories.data) {
      setCategoriesList(categories?.data);
    } else {
      setCategoriesList([]);
    }
  }, [categories]);

  return (
    <>
      {/* Hamburger Button  */}
      {/* <div className="block min-[1000px]:hidden left-4 z-50"> */}
      <div className="block lg:hidden left-4 z-50 mb-2">
        <button
          onClick={() => setIsOpen(true)}
          className="text-[#00A148] hover:scale-110 transition-transform duration-200"
        >
          <Menu size={28} /> <span className="font-poppins">Categories</span>
        </button>
      </div>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm animate-fadeIn"
        />
      )}

      {/* Mobile Sidebar */}

      <div
        className={`fixed top-0 left-0 h-full w-48 bg-white shadow-2xl transform transition-transform duration-300 z-50  ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-3 border-b bg-gradient-to-r from-emerald-50 to-white rounded-tr-2xl">
          <h2 className="text-lg font-bold text-[#00A148] tracking-wide px-2">
            Categories
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#00A148] hover:text-[#00A148]  transition-transform duration-300"
          >
            <X size={24} />
          </button>
        </div>

        {/* Category List */}
        <ul className="p-4 overflow-y-auto max-h-[calc(100%-60px)]">
          {categoriesList?.map((category) => (
            <li key={category._id}>
              <button
                onClick={() => {
                  setActiveCategory(category._id);
                  onCategorySelect(category?._id);
                  setIsOpen(false);
                }}
                className={`w-full text-left block text-xs font-medium px-3 py-2 transition-all rounded-md
              ${activeCategory == category?._id
                    ? "bg-emerald-500 text-white"
                    : "text-gray-700 hover:bg-emerald-50 hover:text-[#00A148]"}`
                }
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Sidebar */}
      {/* <aside className="hidden min-[1000px]:block sticky w-full p-4 bg-white rounded-lg shadow-sm lg:w-60 h-[100vh] top-10 mr-10"> */}
      <aside className="hidden  lg:block sticky grid-cols-2  py-6 px-6 bg-[#F0F0F0]/30 border-[#DFDFDF8F]/30 border-2 rounded-lg shadow-sm  h-screen ">
        <h2 className="text-[#00A148] font-semibold text-[24px] md:text-[28px]  font-poppins mb-4">Categories</h2>
        <ul className="space-y-2 leading-tight">
          {categoriesList?.map((category) => (
            <li key={category._id}>
              <button
                onClick={() => {
                  setActiveCategory(category?._id);
                  onCategorySelect(category._id)
                }}
                className={`w-full text-left p-1 tracking-[0.05px] font-poppins font-medium rounded-md text-[18px] lg:text-[20px] 
              ${activeCategory === category._id
                    ? "text-[#00A148]  "
                    : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"}`
                }
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
