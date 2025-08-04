import React from 'react';
import HeroSection from '../components/ProductPage/HeroSection';
import FeatureCarousel from '../components/ProductPage/FeatureCarousel';
import Features from '../components/ProductPage/Features';
import Faq from '../components/ProductPage/Faq';
import HeroSectionPart2 from '../components/ProductPage/HeroSectionPart2';

function ProductPage() {
    return (
        <div className="min-h-[300vh] bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
         <HeroSection/>
         <HeroSectionPart2/>
         <Features/>
         <FeatureCarousel/>
         <Faq/>
         
        </div>
    )
}

export default ProductPage
