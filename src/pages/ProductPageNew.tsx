import React from 'react'
import HeroSection from '../components/ProductPage/HeroSection';
import Features from '../components/ProductPage/Features';
import FeatureCarousel from '../components/ProductPage/FeatureCarousel';
import Faq from '../components/ProductPage/Faq';

function ProductPageNew() {
    return (
        <div className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-x-hidden">
        {/* <div className='container mx-auto px-4 sm:px-6 lg:px-8'> */}
            <HeroSection />
            <Features />
            <FeatureCarousel />
            <Faq />
        </div>
    )
}

export default ProductPageNew;
