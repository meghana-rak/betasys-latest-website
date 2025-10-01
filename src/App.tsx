// import React, { useEffect, useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
// } from "react-router-dom";
// import Header from "./components/Layout/Header";
// import Footer from "./components/Layout/Footer";
// import Homepage from "./pages/Homepage";
// import ContactUsPage from "./pages/ContactUsPage";
// import CTA from "./components/Layout/CTA";
// import BlogPage from "./pages/BlogPage";
// import ServicePage from "./pages/ServicePage";
// import BlogDetails from "./pages/BlogDetails";
// import BlogDetailPage from "./pages/BlogDetailPage";
// import EbookListing from "./pages/EbookListing";
// import EbookDetails from "./pages/EbookDetails";
// import AboutPage from "./pages/AboutPage";
// import ProductPage from "./pages/ProductPageNew";
// import PartnersPage from "./pages/PartnersPage";
// import { ChevronUp } from "lucide-react";

// function App() {
//   const [showBackToTop, setShowBackToTop] = useState(false);
//   function ScrollToTop() {
//     const { pathname } = useLocation();
//     useEffect(() => {
//       window.scrollTo(0, 0);
//     }, [pathname]);
//     return null;
//   }
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop =
//         window.pageYOffset || document.documentElement.scrollTop;
//       const windowHeight = window.innerHeight;

//       // Show button when user scrolls down half the viewport height
//       setShowBackToTop(scrollTop > windowHeight / 2);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };
//   const location = useLocation();

//   return (
//     <div className="min-h-screen ">
//       <ScrollToTop />
//       <Header />
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/blog" element={<BlogPage />} />
//         <Route path="/services/:name" element={<ServicePage />} />
//         <Route path="/contactus" element={<ContactUsPage />} />
//         <Route path="/blogdetails/:category/:id" element={<BlogDetails />} />
//         <Route path="/blog/:slugUrl" element={<BlogDetailPage />} />
//         <Route path="/ebooklisting" element={<EbookListing />} />
//         <Route path="/ebookdetails/:id" element={<EbookDetails />} />
//         <Route path="/aboutus" element={<AboutPage />} />
//         <Route path="/product" element={<ProductPage />} />
//         <Route path="/partners" element={<PartnersPage />} />
//       </Routes>
//       <CTA />
//       <Footer />
//       {/* Back to Top Button */}
//       {showBackToTop && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 group"
//           aria-label="Back to top"
//         >
//           <ChevronUp className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform duration-300" />
//         </button>
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Homepage from "./pages/Homepage";
import ContactUsPage from "./pages/ContactUsPage";
import CTA from "./components/Layout/CTA";
import BlogPage from "./pages/BlogPage";
import ServicePage from "./pages/ServicePage";
import BlogDetails from "./pages/BlogDetails";
import BlogDetailPage from "./pages/BlogDetailPage";
import EbookListing from "./pages/EbookListing";
import EbookDetails from "./pages/EbookDetails";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPageNew";
import PartnersPage from "./pages/PartnersPage";
import { ChevronUp } from "lucide-react";

// Move ScrollToTop outside the App component
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Use useCallback to memoize the scroll handler
  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    setShowBackToTop(scrollTop > windowHeight / 2);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/services/:name" element={<ServicePage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/blogdetails/:category/:id" element={<BlogDetails />} />
        <Route path="/blog/:slugUrl" element={<BlogDetailPage />} />
        <Route path="/ebooklisting" element={<EbookListing />} />
        <Route path="/ebookdetails/:id" element={<EbookDetails />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/partners" element={<PartnersPage />} />
      </Routes>
      <CTA />
      <Footer />
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#00A651] text-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 group"
          aria-label="Back to top"
        >
          <ChevronUp className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </button>
      )}
    </div>
  );
}

export default App;
