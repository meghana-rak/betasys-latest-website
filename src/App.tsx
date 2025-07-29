import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import ContactUsPage from './pages/ContactUsPage';
import CTA from './components/CTA';
import BlogDetails from './pages/BlogDetails';
import EbookListing from './pages/EbookListing';


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
    <div className="min-h-screen">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/contactus' element={<ContactUsPage />} />
        <Route path='/blogdetails' element={<BlogDetails />} />
        <Route path='/ebooklisting' element={<EbookListing/>} />
      </Routes>
       <CTA />
      <Footer />
    </div>
  );
}

export default App;