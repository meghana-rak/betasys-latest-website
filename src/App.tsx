import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Homepage from './pages/Homepage';
import ContactUsPage from './pages/ContactUsPage';
import CTA from './components/Layout/CTA';
import BlogPage from './pages/BlogPage';
import ServicePage from './pages/ServicePage';
import BlogDetails from './pages/BlogDetails';
import EbookListing from './pages/EbookListing';
import EbookDetails from './pages/EbookDetails';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPageNew';
import PartnersPage from './pages/PartnersPage';



function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }
  const location = useLocation();

  return (
    <div className="min-h-screen ">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/services/:name" element={<ServicePage />} />
        <Route path='/contactus' element={<ContactUsPage />} />
        <Route path='/blogdetails/:category/:id' element={<BlogDetails />} />
        <Route path='/ebooklisting' element={<EbookListing />} />
        <Route path='/ebookdetails/:id' element={<EbookDetails />} />
        <Route path='/aboutus' element={<AboutPage />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/partners' element={<PartnersPage />} />
      </Routes>
      <CTA />
      <Footer />
    </div>
  );
}

export default App;